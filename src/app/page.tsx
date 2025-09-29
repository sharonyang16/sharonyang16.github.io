import Hero from "@/components/Hero";
import heroData from "@/content/hero.json";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12">
      <div className="col-span-2">
        <Hero {...heroData} />
      </div>
      <hr className="col-span-3" />
    </div>
  );
}
