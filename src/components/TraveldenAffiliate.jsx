import React from "react";
import tag1 from "../assets/tag1.png";
import loyalImg from "../assets/loyal.png";
import support from "../assets/customer.png";
import report from "../assets/news.png";
import Fade from "react-reveal/Fade";
const Card = ({ icon, title, details }) => {
  return (
    <div className="bg-white w-[250px] h-[320px] shadow-lg rounded-md py-[60px] px-[20px] flex justify-center items-center flex-col gap-5">
      <img src={icon} alt={title} />
      <h1 className="text-[20px] font-bold text-center">{title}</h1>
      <p className="text-[16px] font-normal text-center">{details}</p>
    </div>
  );
};
export default function TraveldenAffiliate() {
  return (
    <Fade bottom>
      <div className="bg-[#FFFEF5] py-[2.5rem] px-10">
        <div className="max-w-[1440px] mx-auto bg-[#FFFEF5] ">
          <div className="max-w-[636px] mx-auto">
            <h1 className="text-center md:text-[2.5rem] text-[1.8rem] font-bold">
              Why Become a Travelden Affiliate
            </h1>
            <p className="md:text-[1.25rem] text-[1rem] font-normal text-center">
              As a Travelden Affiliate, You become a partner with one of the
              fastest growing OTA in Nigeria, and your exposed to a lot of
              benefits that others do not
            </p>
          </div>
          {/* <div className="flex justify-center gap-[20px] items-center flex-wrap mt-10 px-5"> */}
          <div className="grid md:grid-cols-2 place-items-center lg:grid-cols-4 w-fit mx-auto gap-[20px] mt-10 px-5">
            <Card
              icon={tag1}
              title="Discounted Fares At Affordable Rates"
              details="You Get Your Huge Discounts When You Sign Up As An Affiliate"
            />
            <Card
              icon={loyalImg}
              title="Loyalty Products And Annual Rewards"
              details="Free Ticket, Free Hotel Night, Free Tours And Also Annual Rewards For Our Top Affiliates"
            />
            <Card
              icon={support}
              title="External Support"
              details="24/7 Team To Handle All Your Requests, Account Manager To Attend To Your Every Need"
            />
            <Card
              icon={report}
              title="Up To Date Information On The Travel Market"
              details="Be Updated On Current Trends, News And Information In The Travel Market"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
