
// import React from "react";

// const TestMony = ({ videoUrl, imageSrc, title, weight, form, volume, usage, price }) => {
//   return (
//     <div className="w-full max-w-sm md:h-auto md:w-48 sm:max-w-md lg:max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-center relative pb-6">
//       {/* Video Section */}
//       <div className="w-full aspect-video overflow-hidden md:h-96">
//         <iframe
//           className="w-full h-full"
//           src={videoUrl}
//           title="YouTube video player"
//           allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Product Image */}
//       <div className="absolute top-[50%] left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 shadow-md">
//         <img
//           src={imageSrc}
//           alt="Product"
//           className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-24 rounded-full object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="mt-16 px-4 text-left">
//         <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
//           {title}
//         </h2>
//         <ul className="mt-3 space-y-1 text-gray-700 text-[11px] sm:text-[12px]">
//           <li>
//             <span className="font-semibold">Area:</span>
//             <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">{weight}</span>
//           </li>
//           {/* <li>
//             <span className="font-semibold">Item Form:</span>
//             <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">{form}</span>
//           </li> */}
//           {/* <li>
//             <span className="font-semibold">Liquid Volume:</span>
//             <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">{volume}</span>
//           </li> */}
//           <li>
//             <span className="font-semibold">Specific Uses:</span>
//             <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">{usage}</span>
//           </li>
//         </ul>
//         {/* <p className="mt-2 text-base sm:text-lg md:text-lg font-bold text-gray-900 text-left">
//           💰 Price: {price}
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default TestMony;




import React from "react";
 import {
   Youtube,
  Instagram,
  Facebook,
   Twitter,
 } from "lucide-react";

 const platformIcons = {
   youtube: Youtube,
   instagram: Instagram,
   facebook: Facebook,
   twitter: Twitter,
   
 };

 
const TestMony = ({
   videoUrl,
   imageSrc,
  title,
  name,
  area, platform,
  date // 👈 NEW PROP
 }) => {
  const platformColors = {
    youtube: "#FF0000",
    instagram: "#E1306C",
    facebook: "#1877F2",
    twitter: "#1DA1F2",
  };

  const Icon = platformIcons[platform?.toLowerCase()];
  const iconColor = platformColors[platform?.toLowerCase()] || "#000000";

  // Robust Video ID Extraction
  const getVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  
  // Prepare Source and Watch URL
  let embedSrc = videoUrl;
  let watchUrl = videoUrl;

  if (videoId) {
    embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
    watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  }

  return (
    <div 
      onClick={() => window.open(watchUrl, "_blank")}
      className="w-full max-w-sm md:h-auto md:w-48 sm:max-w-md lg:max-w-lg mx-auto bg-white shadow-lg overflow-hidden text-center relative pb-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      style={{borderRadius:"0 0 10px 10px"}}
    >
      {/* Video Section */}
      <div className="w-full aspect-video overflow-hidden md:h-96 relative">
        <iframe
          className="w-full h-full pointer-events-none"
          src={embedSrc}
          title="Social Media Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>



      {/* Product Image */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 shadow-md">
        <img
          src={imageSrc}
          alt="Product"
          className="w-10 h-10 sm:w-20 sm:h-20 md:w-20 md:h-24 rounded-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-16 px-4 text-left relative">
        {Icon && (
          <div className="absolute -top-14 right-0 z-20 p-2 rounded-full">
            <Icon className="w-6 h-6" strokeWidth={1.5} color={iconColor} />
          </div>
        )}
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
          {title}
        </h2>
        <ul className="mt-3 space-y-1 text-gray-700 text-[11px] sm:text-[12px]">
          <li>
            <span className="font-semibold">Name:</span>
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">
              {name}
            </span>
          </li>
          <li>
            <span className="font-semibold">Date:</span>
            <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">
              {date}
            </span>
          </li>
          <li>
            <span className="font-semibold">Area:</span>
            <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">
              {area}
            </span>
          </li>
          {/* <li>
            <span className="font-semibold">Item Form:</span>
            <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">{form}</span>
          </li> */}
          {/* <li>
            <span className="font-semibold">Liquid Volume:</span>
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">{volume}</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default TestMony;








// import React from "react";
// import {
//   Youtube,
//   Instagram,
//   Facebook,
//   Twitter,
// } from "lucide-react";

// const platformIcons = {
//   youtube: Youtube,
//   instagram: Instagram,
//   facebook: Facebook,
//   twitter: Twitter,
// };

// const TestMony = ({
//   videoUrl,
//   imageSrc,
//   title,
//   weight,
//   usage,
//   platform, // 👈 NEW PROP
// }) => {
//   const Icon = platformIcons[platform];

//   return (
//     <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-center relative pb-6">
      
//       {/* Video Section */}
//       <div className="w-full aspect-video overflow-hidden relative">
//         <iframe
//           className="w-full h-full"
//           src={videoUrl}
//           title="Social Media Video"
//           allow="autoplay; encrypted-media; picture-in-picture"
//           allowFullScreen
//         ></iframe>

//         {/* Social Media Icon */}
//         {Icon && (
//           <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
//             <Icon className="w-5 h-5 text-red-600" />
//           </div>
//         )}
//       </div>

//       {/* Product Image */}
//       <div className="absolute top-[50%] left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 shadow-md">
//         <img
//           src={imageSrc}
//           alt="Product"
//           className="w-16 h-16 rounded-full object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="mt-16 px-4 text-left">
//         <h2 className="text-lg font-semibold text-gray-800 text-center">
//           {title}
//         </h2>

//         <ul className="mt-3 space-y-1 text-gray-700 text-xs">
//           <li>
//             <span className="font-semibold">Area:</span>{" "}
//             <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">
//               {weight}
//             </span>
//           </li>

//           <li>
//             <span className="font-semibold">Specific Uses:</span>{" "}
//             <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">
//               {usage}
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TestMony;
