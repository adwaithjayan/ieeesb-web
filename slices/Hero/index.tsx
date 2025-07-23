import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SliderCarasoule } from "@/components/SliderCarasoule";
import Socitys from "@/components/socitys";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      className="min-h-screen  relative overflow-hidden bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center min-h-[50vh] mb-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="flex">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium rounded-full border border-blue-200 shadow-sm"
              >
                {slice.primary.tag}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent uppercase">
                  {slice.primary.title}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                {slice.primary.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Join IEEE</span>
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 text-lg font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>

          <SliderCarasoule data={slice.primary.carousel} />
        </div>
        <Socitys data={slice.primary} />
      </div>
    </section>
  );
};

export default Hero;
