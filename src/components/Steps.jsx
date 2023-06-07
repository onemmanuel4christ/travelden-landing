import React from "react";
import stepImg from "../assets/stepImg.png";
import VerticalStepper from "./VerticalStepper";
import { Fade } from "react-reveal";
export default function Steps() {
  return (
    <Fade bottom>
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[636px] mx-auto py-[40px]">
          <h1 className="md:text-[2.5rem] text-center text-[1.8rem] font-bold">
            How to Become an Affiliate
          </h1>
          <p className="md:text-[1.25rem] text-[1rem]  font-normal text-center">
            As a Travelden Affiliate, You become a partner with one of the
            fastest growing OTA in Nigeria, and your exposed to a lot of
            benefits that others do not
          </p>
        </div>
        <div className="md:flex justify-around items-center">
          <div className="flex-1 flex justify-center items-center">
            <div className="max-w-[470px] mx-auto">
              <img src={stepImg} alt="" className="w-full object-cover" />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* <VerticalStepper /> */}
            <div className="my-10 md:my-0">
              <div className="flex justify-start items-center gap-8">
                <div className="step">1</div>
                <h1 className="text-[1rem] font-bold">
                  Sign up to become an affiliate
                </h1>
              </div>
              <div className="line"></div>
              <div className="flex justify-start items-center gap-8">
                <div className="step">2</div>
                <h1 className="text-[1rem] font-bold">
                  Wait for email confirmation
                </h1>
              </div>
              <div className="line"></div>
              <div className="flex justify-start items-center gap-8">
                <div className="step">3</div>
                <h1 className="text-[1rem] font-bold">
                  Start selling immediately
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="bg-[#F58634] py-[12px] px-[24px] rounded-md shadow-md text-white text-[16px] font-bold">
            Become an Affiliate
          </button>
        </div>
        <Fade bottom>
          <div className="max-w-[1440px] bg-[#00A859] text-white my-10 py-10  mx-auto p-2 md:py-[40px] md:flex items-center">
            <div className="flex-1">
              <h1 className="max-w-[461px] text-center mx-auto md:text-[1.25rem] text-1rem font-bold">
                Subscribe to our newsletter to get information on flight deals
                and holiday packages straight to your inbox.
              </h1>
            </div>
            <div className="flex-1">
              <div className="md:flex md:mt-0 mt-10 md:px-10 gap-[20px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-md text-[#AAAAAA] text-[16px] px-[12px] w-full outline-none py-[12px]"
                />
                <button className="bg-[#F58634] py-[12px] px-[24px] rounded-md shadow-md text-white text-[16px] mt-5 md:mt-0 font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] flex justify-center items-center mb-[40px]">
            <div className="md:max-w-[600px] flex justify-center items-center flex-col">
              <h1 className="text-center md:text-[2.5rem] text-[1.8rem] mb-[20px]">
                Lörem ipsum begon össa
              </h1>
              <p className="text-center md:text-[1.25rem] text-[1rem] ">
                Oledes krol eller annonsblockerare wikiläcka kogen. Jussa lajusm
                och prenat, i telening samt reade. Dosar ongen och mandatpingis.
                Ser nede.
              </p>
              <button className="bg-[#F58634] w-[178px] py-[12px] px-[24px] rounded-md shadow-md text-white text-[16px] font-bold mt-[20px]">
                Subscribe
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
}
