import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import heroData from "@/content/hero.json";
import experienceData from "@/content/experience.json";
import codeData from "@/content/code.json";
import designData from "@/content/design.json";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12 py-16">
      <div className="col-span-2">
        <Hero {...heroData} />
      </div>
      <hr className="col-span-3" />
      <Experiences {...experienceData} />
      <Projects title="Code" projects={codeData} />
      <Projects title="Design" projects={designData} />
    </div>
  );
}
