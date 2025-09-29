"use client";
import { MdDownloading } from "react-icons/md";
import Typography from "@/components/base/Typography";
import Hero from "@/components/Hero";
import heroData from "@/content/hero.json";
import experienceData from "@/content/experience.json";
import ExperienceCard from "@/components/ExperienceCard";
import Button from "@/components/base/Button";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12">
      <div className="col-span-2">
        <Hero {...heroData} />
      </div>
      <hr className="col-span-3" />
      <div className="flex flex-col gap-4">
        <Typography intent="subheadding1">Experience</Typography>
        <Button
          variant="secondary"
          className="w-fit"
          as="a"
          href="https://drive.google.com/u/1/uc?id=1AVbzD-4wveiw7NyC0Vo0dk79HmHFgHfI&export=download"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center">
            <MdDownloading className="text-xl" />
            <Typography intent="label1">Resume</Typography>
          </div>
        </Button>
      </div>

      <div className="flex flex-col gap-8 col-span-2 ">
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
}
