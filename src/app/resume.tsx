"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  TrophyIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const ACHIEVEMENT_ITEMS = [
  {
    icon: TrophyIcon,
    children: "50+ Successful Projects Delivered",
  },
  {
    icon: UserGroupIcon,
    children: "40+ Happy Clients Worldwide",
  },
  {
    icon: GlobeAltIcon,
    children: "5+ Years of Industry Excellence",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24 bg-gray-50" id="achievements">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          our achievements
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Significant Milestones
        </Typography>
        <Typography className="mx-auto w-full !text-gray-500 lg:w-6/12">
          From startups to enterprise solutions, we've consistently delivered 
          excellence across diverse projects.
        </Typography>
      </div>
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Our Significant Achievements
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            From startups to enterprise solutions, we've consistently delivered 
            excellence across diverse projects. Our track record speaks for itself 
            with successful implementations and satisfied clients worldwide.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            View Success Stories
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {ACHIEVEMENT_ITEMS.map(({ icon: Icon, children }) => (
            <div key={children} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                {children}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
