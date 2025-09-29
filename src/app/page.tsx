import Hero from "@/components/Hero";
import heroData from "@/content/hero.json";
import experienceData from "@/content/experience.json";
import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12 py-16">
      <div className="col-span-2">
        <Hero {...heroData} />
      </div>
      <hr className="col-span-3" />
      <Experiences {...experienceData} />
    </div>
  );
}
