import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { services } from "../data/SiteData";
import HomeCard from "../components/HomeCard";
import WhyChoose from "../components/WhyChoose";

export default function HomePage() {
  const homeData = {
    title: "Innovative Solutions for Your Business",
    description: "We offer a complete Web development Service. We have expertise and knowledge to deliver digital solutions to clients across a wide range of sectors in Africa.",
    logo: "/logo192.png",
    alt: "AMT Systems Engineering",
    buttonText: "Get Started",
    page: "service"
  };
  return(
    <div>
      <HomeCard homeData={homeData}/>
      <ServicesGrid services={services} /> 
      <WhyChoose />
    </div>
  )
}