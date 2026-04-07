import Hero from "@/components/home/Hero/Hero";
import Experiences from "@/components/home/Experiences/Experiences";
import Projects from "@/components/home/Projects/Projects";
import heroData from "@/content/hero.json";
import codeData from "@/content/code.json";
import designData from "@/content/design.json";

export default function Home() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-12 pt-4 pb-16">
      <div className="col-span-2">
        <Hero {...heroData} />
      </div>
      <div />
      <Experiences />
      <Projects title="Code" projects={codeData} />
      <Projects title="Design" projects={designData} />
    </div>
  );
}
