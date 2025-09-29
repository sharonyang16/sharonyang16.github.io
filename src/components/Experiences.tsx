"use client";
import { MdDownloading } from "react-icons/md";
import Button from "./base/Button";
import Typography from "./base/Typography";
import ExperienceCard from "./ExperienceCard";
import { ExperiencesProps } from "@/types/data";

const Experiences = ({ resumeDownloadUrl, experiences }: ExperiencesProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Typography intent="subheadding1">Experience</Typography>
        <Button
          variant="secondary"
          className="w-fit"
          as="a"
          href={resumeDownloadUrl}
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center">
            <MdDownloading className="text-xl" />
            <Typography intent="label1">Resume</Typography>
          </div>
        </Button>
      </div>
      <div className="flex flex-col gap-8 col-span-2 ">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </>
  );
};

export default Experiences;
