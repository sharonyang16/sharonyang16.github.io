import Hero from "@/components/home/Hero/Hero";
import Experiences from "@/components/home/Experiences/Experiences";
import Projects from "@/components/home/Projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-12 pt-4 pb-16">
      <div className="col-span-2">
        <Hero />
      </div>
      <div />
      <Experiences />
      <Projects />
    </div>
  );
}
