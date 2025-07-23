"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HeroSliceDefaultPrimaryCarouselItem } from "@/prismicio-types";
import Image from "next/image";
import { DotButton } from "./dots";
import Autoplay from "embla-carousel-autoplay";

export function SliderCarasoule({
  data,
}: {
  data: HeroSliceDefaultPrimaryCarouselItem[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  function handleClick(i: number) {
    if (!api) return;

    api.scrollTo(i);
  }

  return (
    <div className="w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        className="w-full max-w-4xl"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="rounded-3xl">
              <Image
                src={item.carousel_images.url as string}
                alt={item.carousel_images.alt as string}
                width={16000}
                height={9000}
                priority
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="embla__dots">
          {Array.from({ length: count }).map((_, i) => {
            return (
              <DotButton
                key={i}
                onClick={() => handleClick(i)}
                selected={current === i}
              />
            );
          })}
        </div>
      </Carousel>
    </div>
  );
}
