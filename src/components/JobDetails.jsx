

// // JobDetailsPage.jsx
// import { useLocation, useParams } from "react-router-dom";

// export default function JobDetails() {
//   const { id } = useParams();
//   const location = useLocation();
//   const job = location.state;

//   if (!job) {
//     return (
//       <div className="p-10 text-center text-xl">
//         ❌ Job data missing.  
//         Please navigate from the Career page.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
//       <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl space-y-6">

//         <h1 className="text-3xl font-bold text-green-700">{job.title}</h1>
//         <p className="text-gray-700 text-lg">{job.desc}</p>

//         <div className="grid grid-cols-2 gap-4 text-gray-700 mt-4">
//           <div><strong>Job Type:</strong> {job.type}</div>
//           <div><strong>Mode:</strong> {job.mode}</div>
//           <div><strong>Location:</strong> {job.location}</div>
//           <div><strong>Experience:</strong> {job.experience}</div>
//           <div><strong>Positions:</strong> {job.positions}</div>
//           <div><strong>Days Left:</strong> {job.daysLeft}</div>
//           <div><strong>Salary Range:</strong> {job.salary}</div>
//         </div>

//         <h2 className="text-2xl font-semibold mt-6">Role Responsibilities</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           {job.bullets.map((b, i) => (
//             <li key={i}>{b}</li>
//           ))}
//         </ul>

//         <h2 className="text-2xl font-semibold mt-6">Required Skills</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           {job.skills.map((s, i) => (
//             <li key={i}>{s}</li>
//           ))}
//         </ul>

//         <h2 className="text-2xl font-semibold mt-6">Tools You Will Use</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           {job.tools.map((t, i) => (
//             <li key={i}>{t}</li>
//           ))}
//         </ul>

//         <div className="space-y-3 pt-6">
//           <button className="w-full py-3 bg-green-600 text-white rounded-xl text-lg">
//             Submit Application
//           </button>

//           <button className="w-full py-3 border border-green-600 text-green-700 rounded-xl text-lg">
//             Upload Resume
//           </button>

//           <button
//             onClick={() =>
//               window.open(
//                 `https://wa.me/91XXXXXXXXXX?text=Hello, I want to apply for ${job.title}`
//               )
//             }
//             className="w-full py-3 bg-green-100 text-green-700 rounded-xl text-lg"
//           >
//             Apply via WhatsApp
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }


// // src/pages/JobDetails.jsx
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import jobs from "./../../data/jobsData";
// import { ArrowLeft } from "lucide-react";

// export default function JobDetails() {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Prefer navigation state (fast), fallback to searching dataset
//   const job = location.state || (() => {
//     for (const group of jobs) {
//       const found = group.cards.find((c) => c.id === id);
//       if (found) return found;
//     }
//     return null;
//   })();

//   if (!job) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold mb-4">Job not found</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="py-2 px-4 bg-emerald-600 text-white rounded-lg"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // calculate deadline date (today + daysLeft)
//   const deadline = new Date(Date.now() + job.daysLeft * 24 * 60 * 60 * 1000);
//   const deadlineStr = deadline.toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });

//   return (
//     <section className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-emerald-700 mb-6"
//         >
//           <ArrowLeft size={18} /> Back
//         </button>

//         <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
//           <header className="flex items-start justify-between gap-6">
//             <div>
//               <h1 className="text-3xl font-bold text-emerald-800">{job.title}</h1>
//               <p className="text-gray-600 mt-2">{job.desc}</p>

//               <div className="mt-4 flex gap-4 text-sm text-gray-700">
//                 <div className="px-3 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
//                   <strong>{job.positions}</strong> positions
//                 </div>
//                 <div className="px-3 py-2 bg-yellow-50 rounded-lg border border-yellow-100">
//                   <strong>{job.daysLeft}</strong> days left (deadline {deadlineStr})
//                 </div>
//                 <div className="px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
//                   <strong>{job.location}</strong>
//                 </div>
//               </div>
//             </div>

//             <div className="text-right">
//               <div className="text-sm text-gray-600">Employment</div>
//               <div className="font-semibold text-gray-800">{job.type} · {job.mode}</div>
//               <div className="text-sm text-gray-600 mt-3">Salary</div>
//               <div className="font-semibold text-gray-800">{job.salary || "Competitive"}</div>
//             </div>
//           </header>

//           <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-lg font-semibold text-emerald-700 mb-2">Responsibilities</h3>
//               <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                 {job.responsibilities.map((r, i) => (
//                   <li key={i}>{r}</li>
//                 ))}
//               </ul>

//               <h3 className="text-lg font-semibold text-emerald-700 mt-6 mb-2">Requirements</h3>
//               <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                 {job.requirements.map((r, i) => (
//                   <li key={i}>{r}</li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-emerald-700 mb-2">Skills & Tools</h3>
//               <div className="flex flex-wrap gap-2">
//                 {job.skills.map((s, i) => (
//                   <span
//                     key={i}
//                     className="text-sm px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100"
//                   >
//                     {s}
//                   </span>
//                 ))}
//               </div>

//               <h3 className="text-lg font-semibold text-emerald-700 mt-6 mb-2">Tools</h3>
//               <div className="flex flex-wrap gap-2">
//                 {job.tools.map((t, i) => (
//                   <span
//                     key={i}
//                     className="text-sm px-3 py-1 bg-gray-50 text-gray-700 rounded-full border border-gray-100"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {job.niceToHave && (
//                 <>
//                   <h3 className="text-lg font-semibold text-emerald-700 mt-6 mb-2">Nice to have</h3>
//                   <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                     {job.niceToHave.map((n, i) => (
//                       <li key={i}>{n}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold text-emerald-700 mb-2">About this role</h3>
//                 <p className="text-gray-700">{job.about}</p>
//               </div>
//             </div>
//           </section>

//           <footer className="mt-8">
//             <div className="grid md:grid-cols-3 gap-3">
//               <button
//                 onClick={() => alert("Quick Apply — implement form or API here")}
//                 className="py-3 bg-emerald-600 text-white rounded-lg"
//               >
//                 Quick Apply
//               </button>

//               <button
//                 onClick={() => navigate(`/apply/full/${job.id}`, { state: job })}
//                 className="py-3 border border-emerald-600 text-emerald-700 rounded-lg"
//               >
//                 Full Application
//               </button>

//               <button
//                 onClick={() => window.open(
//                   `https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20would%20like%20to%20apply%20for%20${encodeURIComponent(
//                     job.title
//                   )}`
//                 )}
//                 className="py-3 bg-green-100 text-green-700 rounded-lg"
//               >
//                 Apply via WhatsApp
//               </button>
//             </div>

//             <p className="text-xs text-gray-500 mt-3">
//               {job.applyNote || "We will contact eligible applicants within 5 business days."}
//             </p>
//           </footer>
//         </div>
//       </div>
//     </section>
//   );
// }



// // src/pages/JobDetails.jsx
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import jobs from "../../data/jobsData";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";

// export default function JobDetails() {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // prefer navigation state (fast); fallback to lookup in jobs dataset
//   const job = location.state || (() => {
//     for (const g of jobs) {
//       const found = g.cards.find((c) => c.id === id);
//       if (found) return found;
//     }
//     return null;
//   })();

//   if (!job) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold mb-4">Job not found</h2>
//           <button onClick={() => navigate(-1)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // compute deadline date
//   const deadline = new Date(Date.now() + (job.daysLeft || 0) * 24 * 60 * 60 * 1000);
//   const deadlineStr = deadline.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-gray-100  to-gray-200 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-emerald-700 mb-6">
//           <ArrowLeft size={18} /> Back
//         </button>

//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="relative bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-2xl"
//         >
//           {/* top: title + quick facts */}
//           <header className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
//             <div>
//               <h1 className="text-3xl font-bold text-emerald-800">{job.title}</h1>
//               <p className="text-gray-700 mt-2">{job.desc}</p>

//               <div className="mt-4 flex flex-wrap gap-3 text-sm">
//                 <span className="px-3 py-1 bg-white/60 rounded-full border">{job.type}</span>
//                 <span className="px-3 py-1 bg-white/60 rounded-full border">{job.mode}</span>
//                 <span className="px-3 py-1 bg-white/60 rounded-full border">{job.experience}</span>
//               </div>
//             </div>

//             <div className="flex-shrink-0 flex flex-col items-end gap-3">
//               <div className="text-right">
//                 <div className="text-sm text-gray-600">Positions</div>
//                 <div className="text-xl font-semibold text-emerald-800">{job.positions}</div>
//               </div>

//               <div className="text-right">
//                 <div className="text-sm text-gray-600">Deadline</div>
//                 <div className="text-xl font-semibold text-red-600">{deadlineStr}</div>
//               </div>

//               <div className="text-right">
//                 <div className="text-sm text-gray-600">Location</div>
//                 <div className="text-md font-medium text-gray-800">{job.location}</div>
//               </div>
//             </div>
//           </header>

//           {/* two-column content */}
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <section>
//                 <h3 className="text-lg font-semibold text-emerald-700">About the role</h3>
//                 <p className="text-gray-700 mt-2">{job.about}</p>
//               </section>

//               <section className="mt-6">
//                 <h3 className="text-lg font-semibold text-emerald-700">Responsibilities</h3>
//                 <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
//                   {job.responsibilities.map((r, i) => (
//                     <li key={i}>{r}</li>
//                   ))}
//                 </ul>
//               </section>
//             </div>

//             <div>
//               <section>
//                 <h3 className="text-lg font-semibold text-emerald-700">Requirements</h3>
//                 <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
//                   {job.requirements.map((r, i) => (
//                     <li key={i}>{r}</li>
//                   ))}
//                 </ul>
//               </section>

//               <section className="mt-6">
//                 <h3 className="text-lg font-semibold text-emerald-700">Skills & Tools</h3>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {job.skills?.map((s, i) => (
//                     <span key={i} className="text-sm px-3 py-1 bg-white/60 rounded-full border">{s}</span>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {job.tools?.map((t, i) => (
//                     <span key={i} className="text-sm px-3 py-1 bg-white/50 rounded-full border text-gray-700">{t}</span>
//                   ))}
//                 </div>

//                 {job.niceToHave && (
//                   <>
//                     <h4 className="mt-4 font-semibold text-emerald-700">Nice to have</h4>
//                     <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
//                       {job.niceToHave.map((n, i) => <li key={i}>{n}</li>)}
//                     </ul>
//                   </>
//                 )}
//               </section>
//             </div>
//           </div>

//           {/* footer: apply actions */}
//           <footer className="mt-8">
//             <div className="grid md:grid-cols-3 gap-3">
//               <button
//                 onClick={() => alert("Quick Apply clicked — integrate your form/API here")}
//                 className="py-3 bg-emerald-600 text-white rounded-lg"
//               >
//                 Quick Apply
//               </button>

//               <button
//                 onClick={() => navigate(`/apply/full/${job.id}`, { state: job })}
//                 className="py-3 border border-emerald-600 text-emerald-700 rounded-lg"
//               >
//                 Full Application
//               </button>

//               <button
//                 onClick={() =>
//                   window.open(`https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20apply%20for%20${encodeURIComponent(job.title)}`, "_blank")
//                 }
//                 className="py-3 bg-yellow-50 text-yellow-700 rounded-lg"
//               >
//                 Apply via WhatsApp
//               </button>
//             </div>

//             <p className="text-xs text-gray-500 mt-3">{job.applyNote || "We contact shortlisted candidates within 5 business days."}</p>
//           </footer>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// src/pages/JobDetails.jsx
import { useLocation, useParams, useNavigate } from "react-router-dom";
import jobs from "../../data/jobsData";
import { motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

export default function JobDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const job =
    location.state ||
    (() => {
      for (const g of jobs) {
        const found = g.cards.find((c) => c.id === id);
        if (found) return found;
      }
      return null;
    })();

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Job not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const deadline = new Date(
    Date.now() + (job.daysLeft || 0) * 24 * 60 * 60 * 1000
  );
  const deadlineStr = deadline.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-emerald-700 mb-6"
        >
          <ArrowLeft size={18} /> Back
        </button>

        {/* Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white/60 backdrop-blur-xl border border-white/40 
          rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        >
          {/* HEADER */}
          <header className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-emerald-900">
                {job.title}
              </h1>
              <p className="text-gray-700 mt-3 text-lg">{job.desc}</p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="px-4 py-1 bg-white/80 rounded-full border">
                  {job.type}
                </span>
                <span className="px-4 py-1 bg-white/80 rounded-full border">
                  {job.mode}
                </span>
                <span className="px-4 py-1 bg-white/80 rounded-full border">
                  {job.experience}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-end gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Positions</div>
                <div className="text-2xl font-semibold text-emerald-800">
                  {job.positions}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-600">Deadline</div>
                <div className="text-xl font-semibold text-red-600">
                  {deadlineStr}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-600">Location</div>
                <div className="text-md font-medium text-gray-800">
                  {job.location}
                </div>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <section>
                <h3 className="text-xl font-semibold text-emerald-700">
                  About the role
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{job.about}</p>
              </section>

              <section className="mt-8">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div>
              <section>
                <h3 className="text-xl font-semibold text-emerald-700">
                  Requirements
                </h3>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                  {job.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Skills & Tools
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.skills?.map((s, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-1 bg-white/70 rounded-full border"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {job.tools?.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-1 bg-white/70 rounded-full border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {job.niceToHave && (
                  <>
                    <h4 className="mt-5 font-semibold text-emerald-700">
                      Nice to have
                    </h4>
                    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                      {job.niceToHave.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <footer className="mt-10">
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="py-3 bg-emerald-600 text-white rounded-lg   hover:bg-emerald-700"
              >
                Apply Now
              </button>

            </div>
          </footer>
        </motion.div>
      </div>

      {/* APPLY FORM MODAL */}
      {showForm && <ApplyForm job={job} close={() => setShowForm(false)} />}
    </section>
  );
}

// ===============================
// APPLY FORM COMPONENT
// ===============================
function ApplyForm({ job, close }) {
  const [type, setType] = useState("fresher");

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl relative"
      >
        <button onClick={close} className="absolute right-4 top-4 text-gray-600">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          Apply for {job.title}
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Freshers / Experienced */}
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "fresher"}
                onChange={() => setType("fresher")}
              />
              Fresher
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "experienced"}
                onChange={() => setType("experienced")}
              />
              Experienced
            </label>
          </div>

          {/* Experience Section */}
          {type === "experienced" && (
            <>
              <input
                type="number"
                placeholder="Years of Experience"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Previous Company"
                className="w-full border p-3 rounded-lg"
              />
            </>
          )}

          {/* Salary */}
          <input
            type="text"
            placeholder="Expected Salary"
            className="w-full border p-3 rounded-lg"
          />

          {/* Resume upload */}
          <div className="mt-2">
            <label className="text-sm font-medium">Upload Resume</label>
            <input
              type="file"
              className="w-full border p-3 mt-1 rounded-lg"
              required
            />
          </div>

          <button className="w-full py-3 bg-emerald-600 text-white rounded-lg mt-3 hover:bg-emerald-700">
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
}
