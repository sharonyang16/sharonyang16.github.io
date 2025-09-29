"use client";
import { MdDownloading } from "react-icons/md";
import Link from "./base/Link";
import Typography from "./base/Typography";
import ExperienceCard from "./ExperienceCard";
import { ExperiencesProps } from "@/types/data";

const Experiences = ({ resumeDownloadUrl, experiences }: ExperiencesProps) => {
  return (
    <>
      <div id="experience" className="flex flex-col gap-4">
        <Typography intent="subheadding1">Experience</Typography>
        <Link
          variant="buttonSecondary"
          className="w-fit"
          href={resumeDownloadUrl}
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center">
            <MdDownloading className="text-xl" />
            <Typography intent="label1">Resume</Typography>
          </div>
        </Link>
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
