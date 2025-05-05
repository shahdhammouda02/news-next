"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroImage from "../../../public/images/image-web-3-desktop.jpg";
import retro from "../../../public/images/image-retro-pcs.jpg";
import top from "../../../public/images/image-top-laptops.jpg";
import gaming from "../../../public/images/image-gaming-growth.jpg";
import { Button, Card } from "@/components/page";

export const HomePage = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const newsItems = [
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  const cardItems = [
    {
      number: "01",
      title: "Reviewing Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      imageSrc: retro,
      imageAlt: "Retro PCs",
    },
    {
      number: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      imageSrc: top,
      imageAlt: "Top Laptops",
    },
    {
      number: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      imageSrc: gaming,
      imageAlt: "Gaming Growth",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-[70%]">
          <div className="mb-6">
            <Image
              src={heroImage}
              alt="hero-image"
              width={900}
              height={900}
              className="w-full h-auto md:h-full md:aspect-auto aspect-square object-cover"
            />
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <h1 className="font-bold text-[50px] md:text-[65px] leading-[1.1] md:w-[45%]">
                The Bright Future of Web 3.0?
              </h1>
              <div className="md:w-[55%] flex flex-col justify-between">
                <p className="text-gray-600 text-[23px] leading-[1.6]">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <Button className="bg-red-400 cursor-pointer hover:bg-black focus:bg-black text-white text-lg px-10 py-2 uppercase w-fit mt-4 outline-none">
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[30%] bg-gray-900 text-white p-6 md:h-[580px] sm:min-h-[580px] md:overflow-y-hidden sm:overflow-y-auto">
          <h2 className="text-[36px] font-bold text-orange-300 mb-6">New</h2>

          {newsItems.map((item, index) => (
            <div
              key={item.title}
              className={`mb-7 pb-7 ${
                index < newsItems.length - 1 ? "border-b border-gray-700" : ""
              }`}
            >
              <h3
                className={`text-[22px] font-bold mb-3 cursor-pointer hover:text-orange-300 ${
                  activeItem === item.title ? "text-orange-300" : ""
                }`}
                onClick={() => setActiveItem(item.title)}
              >
                {item.title}
              </h3>
              <p className="text-gray-300 text-[17px] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {cardItems.map((item) => (
          <Card
            key={item.title}
            number={item.number}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
