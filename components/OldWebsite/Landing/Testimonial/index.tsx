"use client";

import { TESTIMONIAL_DATA } from "../constants";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Testimonial = () => {
  return (
    <div className="max-w-[1250px] mx-auto py-24 px-5">
      <h2 className="text-4xl md:text-5xl font-extrabold font-freight text-center">
        Our customers love us
      </h2>
      <p className="text-lg md:text-xl md:px-10 text-center mt-5 mb-10">
        We are rated Excellent on Trustpilot, the independent most respected
        customer review site.
      </p>
      {(() => {
        type TestimonialItem = {
          key: string;
          name: string;
          image: string;
          title: string;
          message: string;
        };
        const [api, setApi] = useState<CarouselApi | null>(null);
        const slides = Object.values(TESTIMONIAL_DATA) as TestimonialItem[][];

        useEffect(() => {
          if (!api) return;
          const id = setInterval(() => {
            api.scrollNext();
          }, 4000);
          return () => clearInterval(id);
        }, [api]);

        return (
          <Carousel opts={{ loop: true }} setApi={setApi} className="relative">
            <CarouselContent containerClassName="">
              {slides.map((items, idx) => (
                <CarouselItem key={`slide-${idx}`} className="">
                  <div className="flex flex-wrap">
                    {items.map((item) => (
                      <div className="md:w-1/2 mb-3" key={item.key}>
                        <div
                          className="p-2 h-full flex flex-col justify-between"
                          style={{ flex: 1 }}
                        >
                          <div>
                            <div className="text-left">
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="img-fluid"
                                width={90}
                                height={15}
                              />
                              <p className="font-bold mb-3 mt-2">
                                {item.title}
                              </p>
                            </div>
                            <p className="text-justify">{item.message}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <strong className="mb-0">{item.name}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        );
      })()}
    </div>
  );
};

export default Testimonial;
