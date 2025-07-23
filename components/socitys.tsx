import { HeroSliceDefault, HeroSliceDefaultPrimary } from "@/prismicio-types";
import Image from "next/image";
import React from "react";
import ScrollCounter from "./Text";
import Counter from "./counder";

function Socitys({
  data: { socitys, events, members },
}: {
  data: HeroSliceDefaultPrimary;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 ">
      <div className="border-blue-700 border rounded-full flex-1/2 flex items-center  justify-around ">
        {socitys.map((item) => (
          <div className="px-14 py-10" key={item.socity.id}>
            <Image
              src={item.socity.url as string}
              alt={item.socity.alt as string}
              width={72}
              height={52}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="border-blue-700 border flex-1/2 rounded-full flex items-center justify-around">
        <div className="pl-12 py-10 flex items-center justify-center flex-col text-center">
          <Counter end={events as number} duration={2} />
          <span className="font-normal text-sm leading-[150%] tracking-normal">
            Events
          </span>
        </div>

        <div className="px-12 items-center justify-center flex-col text-center">
          <Counter end={members as number} duration={2} />

          <span className="font-normal text-sm leading-[150%] tracking-normal">
            Student Members
          </span>
        </div>
      </div>
    </div>
  );
}

export default Socitys;
