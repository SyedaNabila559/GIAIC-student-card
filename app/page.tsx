import React from "react";
import Image from "next/image";

export default function IDCard () {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300 ">
          
          {/* background Image */}
          <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[350px] max-h-[400px]">

            <Image
            src="/images/background2.png"
            alt="background"
            width={350}
            height={400}
            objectFit="cover"
            className="opacity-10"/>

          </div>
     
          </div>

          {/* Left section */}
         
         <div className="w-2/3 pr-4 pt-16 relative z-10">
          
          {/* logo */}
    <img
    src="/images/logo2.png"
    alt="card logo"
    className="absolute top-[-40px] left-0 w-16 h-18 z-10"/>
      

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>Name:</strong></span>
           <span className="text-black"> Nabila </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>Roll No:</strong></span>
           <span className="text-black"> 00123375 </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500"><strong>
            {" "}
            Distance learning:</strong></span>
           <span className="text-black"> No </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>City:</strong></span>
           <span className="text-black"> Karachi </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>Center:</strong></span>
           <span className="text-black"> Governor House Karachi </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>Compus:</strong></span>
           <span className="text-black"> Main </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>Days/Time:</strong></span>
           <span className="text-black"> Tuesday-02:00pm-05:00pm </span>
         </p>

         <p className="mb-2">
          <span className="text-sky-500">
            {" "}
            <strong>Batch:</strong></span>
           <span className="text-black"> 1 </span>
         </p>
         
         

         {/* Button section */}

         <div className="flex flex-col mt-4"> 
         <button className="relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white item-center justify-center flex" >
          <span className="absolute inset-0 bg-slate-500"
          style={{width: "50%"}}>
        
          </span>

          <span className="relative z-10"> Q1 & WMD</span>

         </button>
         </div>
     </div>

     {/* Right section  */}

     <div className="w-1/3 text-center relative z-10"> 
      <Image
      src={"/images/me.jpg"}
      alt="profile pic"
      width={800} 
      height={800}
      className="rounded-lg mb-6 w-full"/>

      <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">Authorized Signature</p>
     </div>

    
        </div>
      </div>
    </div>
  );
}