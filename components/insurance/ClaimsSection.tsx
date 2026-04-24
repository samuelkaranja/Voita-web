"use client";

import Image from "next/image";

export default function ClaimsSection() {
  return (
    <section className="bg-[#f7faf8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-sm text-[#0f766e] font-medium">
            <span className="w-2 h-2 bg-[#0f766e] rounded-full"></span>
            Empathetic Resolution
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1c17] leading-tight">
            Claims Reimagined. <br />
            Trust as the Default.
          </h2>

          {/* Card */}
          <div className="relative bg-[#8FE3C3] rounded-2xl p-6 md:p-8 shadow-sm max-w-lg">
            
            {/* Badge */}
            <div className="absolute -top-3 right-4 bg-[#022c22] text-white text-[10px] px-3 py-1 rounded-full rotate-6 shadow-md">
              INDUSTRY FIRST
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-[#022c22] mb-3">
              No Police Abstract Required.
            </h3>

            <p className="text-sm md:text-base text-[#134e4a] leading-relaxed">
              We understand that the moments following an accident are stressful
              enough. Voita utilizes sensor data and your digital signature to
              authorize repairs instantly. We believe your story first, verifying
              details through technology—not bureaucracy.
            </p>
          </div>

          {/* Quote */}
          <p className="text-sm text-gray-500 italic max-w-md">
            “Our goal is to restore your peace of mind before the adrenaline even fades.”
            <span className="block mt-1 not-italic font-medium text-gray-600">
              — The Voita Experience Team
            </span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center lg:justify-end">
          
          <div className="relative w-full max-w-lg h-[420px] md:h-[500px] rounded-[3rem] overflow-hidden">
            <Image
              src="/claim.png"
              alt="Handshake"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-[-20px] left-6 md:left-10 bg-white rounded-xl shadow-lg px-5 py-4 w-[260px]">
            <div className="flex items-start gap-3">
              
              {/* Icon */}
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-green-600">
                <span className="text-green-600 text-xs">✓</span>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Claim #8291 Approved
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Verified via Telematics Sensor Array in 12.4 seconds.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
