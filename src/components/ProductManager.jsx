import { useState, useMemo, useEffect } from "react";
import {
    Trash2, Plus, Eye, Pencil, Search, X, Upload,
    Image as ImageIcon, Save, Check, HelpCircle, List, Table as TableIcon,
    FileText as File, Loader2, AlertCircle
} from "lucide-react";
import productService from "../api/productService";

export default function ProductManager() {
    // --- STATE MANAGEMENT ---
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);

    const initialFormState = {
        id: "",
        name: "",
        category: "",
        metaTitle: "",
        metaKeywords: "",
        overview: "",
        whatIs: "",
        howItWorks: "",
        whyChoose: "",
        benefits: [],
        dosage: [],
        crops: [],
        techInfo: [],
        packSizes: [],
        faqs: [],
        image: "",
        video: "",
    };

    const [form, setForm] = useState(initialFormState);
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [viewing, setViewing] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("basic");

    // --- FETCH PRODUCTS ON MOUNT ---
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await productService.getAllProducts();
            setProducts(data);
        } catch (err) {
            setError(err.message || 'Failed to load products');
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setForm(initialFormState);
        setEditing(false);
        setViewing(false);
        setActiveTab("basic");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setActionLoading(true);
        setError(null);

        try {
            if (!editing) {
                const newProduct = await productService.createProduct(form);
                setProducts([...products, newProduct]);
            } else {
                const updatedProduct = await productService.updateProduct(form.id, form);
                setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
            }
            setModalOpen(false);
            resetForm();
        } catch (err) {
            setError(err.message || 'Failed to save product');
            console.error('Error saving product:', err);
        } finally {
            setActionLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        setActionLoading(true);
        setError(null);

        try {
            await productService.deleteProduct(id);
            setProducts(products.filter(p => p.id !== id));
        } catch (err) {
            setError(err.message || 'Failed to delete product');
            console.error('Error deleting product:', err);
        } finally {
            setActionLoading(false);
        }
    };

    const handleEdit = (product) => {
        setForm(product);
        setEditing(true);
        setModalOpen(true);
    };

    const handleView = (product) => {
        setForm(product);
        setViewing(true);
        setModalOpen(true);
    };

    const handleFile = (e, key) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setForm({ ...form, [key]: reader.result });
        reader.readAsDataURL(file);
    };

    // --- HELPER FOR ARRAYS ---
    const addItem = (key, item) => setForm({ ...form, [key]: [...form[key], item] });
    const removeItem = (key, index) => setForm({ ...form, [key]: form[key].filter((_, i) => i !== index) });
    const updateItem = (key, index, field, value) => {
        const newArray = [...form[key]];
        if (typeof newArray[index] === 'object') {
            newArray[index] = { ...newArray[index], [field]: value };
        } else {
            newArray[index] = value;
        }
        setForm({ ...form, [key]: newArray });
    };

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return products;
        const term = searchTerm.toLowerCase();
        return products.filter(p =>
            p.name?.toLowerCase().includes(term) ||
            p.category?.toLowerCase().includes(term)
        );
    }, [searchTerm, products]);

    // --- TABS CONFIG ---
    const tabs = [
        { id: "basic", label: "Basic Info", icon: List },
        { id: "content", label: "Rich Content", icon: File },
        { id: "dosage", label: "Dosage & Crops", icon: TableIcon },
        { id: "tech", label: "Tech Specs", icon: Check },
        { id: "faq", label: "FAQs", icon: HelpCircle },
        { id: "seo", label: "SEO", icon: Search },
    ];

    return (
        <div className="space-y-6 p-6">
            {/* === HEADER === */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
                    <p className="text-gray-500 mt-1">Manage your product catalog</p>
                </div>
                <button
                    onClick={() => { resetForm(); setModalOpen(true); }}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm font-medium cursor-pointer"
                >
                    <Plus size={20} /> Add Product
                </button>
            </div>

            {/* === SEARCH === */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 size-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* === ERROR MESSAGE === */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                    <div className="flex-1">
                        <h3 className="font-semibold text-red-900">Error</h3>
                        <p className="text-sm text-red-700 mt-1">{error}</p>
                    </div>
                    <button
                        onClick={() => setError(null)}
                        className="text-red-400 hover:text-red-600 cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* === LOADING STATE === */}
            {loading ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center">
                    <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
                    <p className="text-gray-600 font-medium">Loading products...</p>
                </div>
            ) : filteredProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center">
                    <div className="text-gray-400 mb-4">
                        <Search size={48} />
                    </div>
                    <p className="text-gray-600 font-medium">No products found</p>
                    <p className="text-gray-500 text-sm mt-1">
                        {searchTerm ? 'Try adjusting your search' : 'Click "Add Product" to create your first product'}
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Name</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredProducts.map(p => (
                                    <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="font-medium text-gray-900">{p.name}</div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                {p.category}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex justify-center gap-2">
                                                <button onClick={() => handleView(p)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer" disabled={actionLoading}>
                                                    <Eye size={18} />
                                                </button>
                                                <button onClick={() => handleEdit(p)} className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer" disabled={actionLoading}>
                                                    <Pencil size={18} />
                                                </button>
                                                <button onClick={() => handleDelete(p.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" disabled={actionLoading}>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* === MODAL === */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-2xl">
                            <h2 className="text-xl font-bold text-gray-900">
                                {viewing ? "Product Details" : editing ? "Edit Product" : "New Product"}
                            </h2>
                            <button onClick={() => { setModalOpen(false); resetForm(); }} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 flex overflow-hidden">
                            {/* Sidebar Tabs (Only for Edit/Add) */}
                            {!viewing && (
                                <div className="w-64 bg-gray-50 border-r border-gray-100 p-4 space-y-2 overflow-y-auto">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === tab.id ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                                }`}
                                        >
                                            <tab.icon size={18} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Content Area */}
                            <div className="flex-1 overflow-y-auto p-8">
                                {viewing ? (
                                    <ViewProduct product={form} />
                                ) : (
                                    <form id="product-form" onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">

                                        {/* BASIC INFO */}
                                        {activeTab === "basic" && (
                                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700">Product Name *</label>
                                                        <input required type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700">Category *</label>
                                                        <input required type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Pack Sizes</label>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {form.packSizes.map((size, i) => (
                                                            <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                                                {size} <button type="button" onClick={() => removeItem("packSizes", i)} className="cursor-pointer"><X size={14} /></button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <input type="text" id="packSizeInput" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" placeholder="e.g. 1 L" onKeyDown={e => {
                                                            if (e.key === 'Enter') {
                                                                e.preventDefault();
                                                                if (e.target.value.trim()) { addItem("packSizes", e.target.value.trim()); e.target.value = ""; }
                                                            }
                                                        }} />
                                                        <button type="button" onClick={() => {
                                                            const input = document.getElementById("packSizeInput");
                                                            if (input.value.trim()) { addItem("packSizes", input.value.trim()); input.value = ""; }
                                                        }} className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">Add</button>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700">Image</label>
                                                        <input type="file" accept="image/*" onChange={e => handleFile(e, "image")} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" />
                                                        {form.image && <img src={form.image} alt="Preview" className="h-32 object-contain rounded-lg border mt-2" />}
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700">Video</label>
                                                        <input type="file" accept="video/*" onChange={e => handleFile(e, "video")} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" />
                                                        {form.video && <video src={form.video} className="h-32 rounded-lg border mt-2" />}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* CONTENT */}
                                        {activeTab === "content" && (
                                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                                {["overview", "whatIs", "howItWorks", "whyChoose"].map((field) => (
                                                    <div key={field} className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                                                        <textarea
                                                            rows={4}
                                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                            value={form[field]}
                                                            onChange={e => setForm({ ...form, [field]: e.target.value })}
                                                        />
                                                    </div>
                                                ))}

                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-700">Key Benefits</label>
                                                    {form.benefits.map((benefit, i) => (
                                                        <div key={i} className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                                                            <div className="flex-1 space-y-2">
                                                                <input type="text" placeholder="Title" className="w-full px-3 py-2 border rounded-md" value={benefit.title} onChange={e => updateItem("benefits", i, "title", e.target.value)} />
                                                                <textarea placeholder="Description" rows={2} className="w-full px-3 py-2 border rounded-md" value={benefit.desc} onChange={e => updateItem("benefits", i, "desc", e.target.value)} />
                                                            </div>
                                                            <button type="button" onClick={() => removeItem("benefits", i)} className="text-red-500 hover:bg-red-50 p-2 rounded cursor-pointer"><Trash2 size={16} /></button>
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => addItem("benefits", { title: "", desc: "" })} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer">+ Add Benefit</button>
                                                </div>
                                            </div>
                                        )}

                                        {/* DOSAGE & CROPS */}
                                        {activeTab === "dosage" && (
                                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-700">Dosage & Application</label>
                                                    <div className="overflow-x-auto border rounded-lg">
                                                        <table className="w-full text-sm text-left">
                                                            <thead className="bg-gray-50 border-b">
                                                                <tr>
                                                                    <th className="p-3">Method</th>
                                                                    <th className="p-3">Dosage</th>
                                                                    <th className="p-3">Timing</th>
                                                                    <th className="p-3">Details</th>
                                                                    <th className="p-3 w-10"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y">
                                                                {form.dosage.map((row, i) => (
                                                                    <tr key={i}>
                                                                        <td className="p-2"><input type="text" className="w-full p-1 border rounded" value={row.method} onChange={e => updateItem("dosage", i, "method", e.target.value)} /></td>
                                                                        <td className="p-2"><input type="text" className="w-full p-1 border rounded" value={row.dosage} onChange={e => updateItem("dosage", i, "dosage", e.target.value)} /></td>
                                                                        <td className="p-2"><input type="text" className="w-full p-1 border rounded" value={row.timing} onChange={e => updateItem("dosage", i, "timing", e.target.value)} /></td>
                                                                        <td className="p-2"><input type="text" className="w-full p-1 border rounded" value={row.details} onChange={e => updateItem("dosage", i, "details", e.target.value)} /></td>
                                                                        <td className="p-2"><button type="button" onClick={() => removeItem("dosage", i)} className="text-red-500 cursor-pointer"><Trash2 size={16} /></button></td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <button type="button" onClick={() => addItem("dosage", { method: "", dosage: "", timing: "", details: "" })} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer">+ Add Row</button>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Suitable Crops</label>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {form.crops.map((crop, i) => (
                                                            <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                                                {crop} <button type="button" onClick={() => removeItem("crops", i)} className="cursor-pointer"><X size={14} /></button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <input type="text" id="cropInput" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" placeholder="e.g. Paddy" onKeyDown={e => {
                                                            if (e.key === 'Enter') {
                                                                e.preventDefault();
                                                                if (e.target.value.trim()) { addItem("crops", e.target.value.trim()); e.target.value = ""; }
                                                            }
                                                        }} />
                                                        <button type="button" onClick={() => {
                                                            const input = document.getElementById("cropInput");
                                                            if (input.value.trim()) { addItem("crops", input.value.trim()); input.value = ""; }
                                                        }} className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* TECH SPECS */}
                                        {activeTab === "tech" && (
                                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-700">Technical Information</label>
                                                    {form.techInfo.map((info, i) => (
                                                        <div key={i} className="flex gap-3 items-center">
                                                            <input type="text" placeholder="Key (e.g. Shelf Life)" className="flex-1 px-3 py-2 border rounded-md" value={info.key} onChange={e => updateItem("techInfo", i, "key", e.target.value)} />
                                                            <input type="text" placeholder="Value (e.g. 12 Months)" className="flex-1 px-3 py-2 border rounded-md" value={info.value} onChange={e => updateItem("techInfo", i, "value", e.target.value)} />
                                                            <button type="button" onClick={() => removeItem("techInfo", i)} className="text-red-500 hover:bg-red-50 p-2 rounded cursor-pointer"><Trash2 size={16} /></button>
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => addItem("techInfo", { key: "", value: "" })} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer">+ Add Spec</button>
                                                </div>
                                            </div>
                                        )}

                                        {/* FAQ */}
                                        {activeTab === "faq" && (
                                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-700">Frequently Asked Questions</label>
                                                    {form.faqs.map((faq, i) => (
                                                        <div key={i} className="bg-gray-50 p-4 rounded-lg space-y-3 relative group">
                                                            <button type="button" onClick={() => removeItem("faqs", i)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"><X size={16} /></button>
                                                            <input type="text" placeholder="Question" className="w-full px-3 py-2 border rounded-md font-medium" value={faq.question} onChange={e => updateItem("faqs", i, "question", e.target.value)} />
                                                            <textarea placeholder="Answer" rows={2} className="w-full px-3 py-2 border rounded-md text-sm" value={faq.answer} onChange={e => updateItem("faqs", i, "answer", e.target.value)} />
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => addItem("faqs", { question: "", answer: "" })} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer">+ Add FAQ</button>
                                                </div>
                                            </div>
                                        )}

                                        {/* SEO */}
                                        {activeTab === "seo" && (
                                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Meta Title</label>
                                                    <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={form.metaTitle} onChange={e => setForm({ ...form, metaTitle: e.target.value })} />
                                                    <p className="text-xs text-gray-500">Recommended length: 50-60 characters</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Meta Keywords</label>
                                                    <textarea rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={form.metaKeywords} onChange={e => setForm({ ...form, metaKeywords: e.target.value })} />
                                                    <p className="text-xs text-gray-500">Separate keywords with commas</p>
                                                </div>
                                            </div>
                                        )}

                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        {!viewing && (
                            <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3">
                                <button onClick={() => { setModalOpen(false); resetForm(); }} className="px-6 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition-colors cursor-pointer">Cancel</button>
                                <button type="submit" form="product-form" disabled={actionLoading} className="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                                    {actionLoading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                    {editing ? "Save Changes" : "Create Product"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// --- VIEW COMPONENT ---
function ViewProduct({ product }) {
    return (
        <div className="space-y-10 max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 space-y-4">
                    <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center">
                        {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        ) : (
                            <div className="text-gray-400 flex flex-col items-center">
                                <ImageIcon size={48} className="mb-2 opacity-50" />
                                <span className="text-sm">No Image</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex-1 space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-2">{product.category}</span>
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    </div>

                    <div className="prose prose-blue text-gray-600">
                        <p>{product.overview}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {product.packSizes?.map((size, i) => (
                            <span key={i} className="px-3 py-1 border border-gray-200 rounded-lg text-sm font-medium text-gray-700">{size}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            {(product.whatIs || product.howItWorks) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {product.whatIs && (
                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What Is It?</h3>
                            <p className="text-gray-700 leading-relaxed">{product.whatIs}</p>
                        </div>
                    )}
                    {product.howItWorks && (
                        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">How It Works?</h3>
                            <p className="text-gray-700 leading-relaxed">{product.howItWorks}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Benefits */}
            {product.benefits?.length > 0 && (
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.benefits.map((b, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2">{b.title}</h4>
                                <p className="text-sm text-gray-600">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Dosage Table */}
            {product.dosage?.length > 0 && (
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Dosage & Application</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-xl">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-gray-900 font-semibold">
                                <tr>
                                    <th className="p-4">Method</th>
                                    <th className="p-4">Dosage</th>
                                    <th className="p-4">Timing</th>
                                    <th className="p-4">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {product.dosage.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50">
                                        <td className="p-4 font-medium text-gray-900">{row.method}</td>
                                        <td className="p-4 text-gray-600">{row.dosage}</td>
                                        <td className="p-4 text-gray-600">{row.timing}</td>
                                        <td className="p-4 text-gray-600">{row.details}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Tech Specs */}
            {product.techInfo?.length > 0 && (
                <div className="bg-gray-900 text-white p-8 rounded-2xl">
                    <h3 className="text-xl font-bold mb-6">Technical Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {product.techInfo.map((info, i) => (
                            <div key={i} className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-400">{info.key}</span>
                                <span className="font-medium">{info.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* FAQs */}
            {product.faqs?.length > 0 && (
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {product.faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-5">
                                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
