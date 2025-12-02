import {
    Check, HelpCircle, Table as TableIcon,
    Image as ImageIcon, FileText, Droplet, Sprout, ShieldCheck, Leaf
} from "lucide-react";

export default function NitrobaseProduct() {
    const product = {
        name: "Fertibase Nitrobase",
        category: "Liquid Nitrogen-Fixing Biofertilizer",
        metaTitle: "Fertibase Nitrobase is a Liquid Nitrogen-Fixing Biofertilizer for Crop Growth",
        metaKeywords: "nitrogen-fixing biofertilizer, liquid biofertilizer, organic nitrogen supplement, Fertibase Nitrobase, nitrogen fertilizer alternative",
        overview: "Fertibase Nitrobase is a liquid biofertilizer formulated with nitrogen-fixing bacteria that convert atmospheric nitrogen into plant-usable forms. It provides a natural and sustainable nitrogen source for crops, enhancing plant growth, improving soil fertility, and reducing the need for chemical fertilizers.",
        whatIs: "Fertibase Nitrobase is a liquid biofertilizer containing highly efficient nitrogen-fixing bacteria that naturally convert atmospheric nitrogen into plant-usable forms. It provides a sustainable nitrogen source that enhances plant growth, reduces the need for chemical fertilizers, and supports long-term soil health. Nitrobase is ideal for farmers who want stronger roots, greener leaves, and higher yields through eco-friendly biological nutrition.",
        howItWorks: "Beneficial bacteria in Nitrobase colonize plant roots and fix nitrogen from the air. They convert atmospheric nitrogen (N₂) into plant-available ammonia (NH₃). This continuous nitrogen supply promotes steady, balanced plant growth throughout the crop cycle.",
        whyChoose: "Nitrobase uses advanced microbial technology to enhance soil nitrogen cycling and plant vigor. It not only increases yield but also reduces chemical nitrogen usage, helping farmers save input costs while maintaining soil balance.",
        benefits: [
            { title: "Enhanced Nitrogen Fixation", desc: "Fixes atmospheric nitrogen into ammonium form readily absorbed by roots.", icon: Leaf },
            { title: "Reduced Fertilizer Costs", desc: "Can reduce synthetic nitrogen fertilizer use by 25–30%.", icon: ShieldCheck },
            { title: "Improved Plant Growth", desc: "Stimulates natural growth hormones for stronger stems and greener leaves.", icon: Sprout },
            { title: "Better Water Efficiency", desc: "Increases plants’ ability to absorb and retain moisture, improving yield under rain-fed conditions.", icon: Droplet },
            { title: "Healthy Soil", desc: "Boosts beneficial microbial activity and improves soil structure.", icon: Check }
        ],
        dosage: [
            { method: "Seed Treatment", dosage: "250 ml per 10 kg of seed", timing: "Before sowing", details: "Mix evenly and shade-dry before planting." },
            { method: "Foliar Spray", dosage: "1 liter per acre", timing: "Vegetative stage", details: "Mix 2–3 ml per liter of water." },
            { method: "Drip Irrigation", dosage: "1 liter per acre", timing: "Early growth stage", details: "Apply through irrigation system." }
        ],
        crops: ["Paddy", "Maize", "Cotton", "Sugarcane", "Pulses", "Vegetables", "Banana", "All Field & Horticultural Crops"],
        techInfo: [
            { key: "Type", value: "Liquid Biofertilizer" },
            { key: "Microbial Count", value: "≥ 1 × 10⁸ CFU/ml" },
            { key: "Active Organisms", value: "Nitrogen-Fixing Bacteria" },
            { key: "Shelf Life", value: "12 months from the date of manufacture" }
        ],
        packSizes: ["1 L", "5 L", "20 L"],
        faqs: [
            { question: "What is Fertibase Nitrobase?", answer: "Fertibase Nitrobase is a liquid biofertilizer containing nitrogen-fixing bacteria that convert atmospheric nitrogen into forms plants can use, promoting sustainable crop growth." },
            { question: "How does Nitrobase reduce fertilizer costs?", answer: "By naturally fixing nitrogen from the air, Nitrobase minimizes the need for synthetic urea or DAP, helping farmers save up to 25–30% on chemical fertilizers." },
            { question: "Is Nitrobase safe for all crops?", answer: "Yes, Nitrobase is suitable for all field and horticultural crops, including paddy, cotton, banana, sugarcane, and vegetables." },
            { question: "Can Nitrobase be mixed with other fertilizers?", answer: "It is compatible with most biofertilizers and organic inputs, but should not be mixed with chemical bactericides or fungicides." },
            { question: "When should Nitrobase be applied?", answer: "Apply Nitrobase at the early vegetative stage for maximum benefit. For longer crops like sugarcane or banana, repeat application every 30–45 days." }
        ],
        image: "", // Placeholder if no image provided
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 max-w-6xl mx-auto">

                {/* Hero Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 bg-gray-100 flex items-center justify-center p-8 min-h-[300px]">
                            {product.image ? (
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                    <ImageIcon size={64} className="mb-4 opacity-30" />
                                    <span className="text-sm font-medium">Product Image</span>
                                </div>
                            )}
                        </div>
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 mb-4 border border-blue-100">
                                    {product.category}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                    {product.name}
                                </h1>
                            </div>

                            <div className="prose prose-lg text-gray-600 leading-relaxed">
                                <p>{product.overview}</p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-4">
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mr-2 self-center">Available Packs:</span>
                                {product.packSizes.map((size, i) => (
                                    <span key={i} className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors">
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Grid: What Is & How It Works */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FileText size={100} className="text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><HelpCircle size={18} /></span>
                            What Is It?
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">{product.whatIs}</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Check size={100} className="text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={18} /></span>
                            How It Works?
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">{product.howItWorks}</p>
                    </div>
                </div>

                {/* Why Choose Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Why Choose Nitrobase?</h3>
                        <p className="text-blue-50 text-lg leading-relaxed max-w-3xl">
                            {product.whyChoose}
                        </p>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                        <Sprout size={300} />
                    </div>
                </div>

                {/* Benefits */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.benefits.map((b, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    {b.icon ? <b.icon size={24} /> : <Check size={24} />}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dosage Table */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 bg-gray-50">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <TableIcon className="text-gray-400" /> Dosage & Application
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-600 font-semibold uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="p-6">Method</th>
                                    <th className="p-6">Dosage</th>
                                    <th className="p-6">Timing</th>
                                    <th className="p-6">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {product.dosage.map((row, i) => (
                                    <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="p-6 font-bold text-gray-900">{row.method}</td>
                                        <td className="p-6 text-blue-600 font-medium">{row.dosage}</td>
                                        <td className="p-6 text-gray-700">{row.timing}</td>
                                        <td className="p-6 text-gray-600">{row.details}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Suitable Crops */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Suitable Crops</h3>
                    <div className="flex flex-wrap gap-3">
                        {product.crops.map((crop, i) => (
                            <span key={i} className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium border border-green-100 hover:bg-green-100 transition-colors cursor-default">
                                {crop}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tech Specs */}
                <div className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">Technical Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {product.techInfo.map((info, i) => (
                            <div key={i} className="flex justify-between items-center group">
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.key}</span>
                                <span className="font-bold text-lg">{info.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {product.faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                                    <span className="text-blue-500 mt-1"><HelpCircle size={20} /></span>
                                    {faq.question}
                                </h4>
                                <p className="text-gray-600 ml-8 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
