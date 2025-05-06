"use client";
import Image from "next/image";
import React, { useState } from "react";
import { heroImage, retro, top, gaming } from "../../../public/images/page";
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
    <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="lg:w-2/3">
          <div className="mb-6">
            <Image
              src={heroImage}
              alt="hero-image"
              width={900}
              height={900}
              className="w-full h-auto object-cover"
            />
            
            <div className="flex flex-col lg:flex-row gap-4 mt-6">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight lg:w-1/2">
                The Bright Future of Web 3.0?
              </h1>
              <div className="lg:w-1/2 flex flex-col justify-between">
                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <Button className="bg-red-400 hover:bg-black focus:bg-black text-white text-lg px-8 py-3 sm:px-10 sm:py-4 uppercase w-fit mt-6 transition-colors duration-200">
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 bg-gray-900 text-white p-4 sm:p-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-300 mb-6">New</h2>

          {newsItems.map((item, index) => (
            <div
              key={item.title}
              className={`mb-6 pb-6 ${
                index < newsItems.length - 1 ? "border-b border-gray-700" : ""
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold mb-3 cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                  activeItem === item.title ? "text-orange-300" : ""
                }`}
                onClick={() => setActiveItem(item.title)}
              >
                {item.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
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