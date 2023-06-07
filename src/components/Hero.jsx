import React from "react";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/heroImg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-[648px]"
    >
      <Navbar />
      <div className="overlay">
        <Fade bottom>
          <div className="max-w-[1440px] mx-auto md:px-[100px] lg:px-[100px] md:py-[100px] p-10 flex justify-start items-start">
            <div className="max-w-[522px] flex flex-col justify-center items-start">
              <h1 className="md:text-[2.5rem] text-[1.8rem] font-bold md:leading-[48.83px] mb-[20px]">
                Lörem ipsum begon össa. Lumasam ilåjyr. Irenar parad i vaktigt.
              </h1>
              <p className="md:text-[1.25rem] text-[1rem] font-normal leading-[24.41px]">
                Oledes krol eller annonsblockerare wikiläcka kogen. Jussa lajusm
                och prenat, i telening samt reade. Dosar ongen och mandatpingis.
                Ser nede.
              </p>
              <button className="bg-[#F58634] py-[12px] px-[24px] rounded-xl my-[32px] text-[#FFFFFF] text-[16px] font-bold">
                Become an Affiliate
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
