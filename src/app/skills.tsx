"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Web Development Excellence",
    children:
      "We craft powerful, scalable websites and web applications that drive business growth. Our expert team leverages cutting-edge technologies to deliver solutions that exceed expectations.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "Transform your business with our custom mobile solutions. We develop feature-rich, user-friendly applications for iOS and Android platforms that keep your business ahead of the competition.",
  },
  {
    icon: SwatchIcon,
    title: "DevOps & Cloud Solutions",
    children:
      "We excel in DevOps practices using Kubernetes, Docker, and CI/CD pipelines. Our expertise in AWS, Azure, and infrastructure automation ensures seamless deployment and scalability.",
  },
  {
    icon: HashtagIcon,
    title: "Digital Strategy & Consulting",
    children:
      "Our expert consultants work closely with you to develop comprehensive digital strategies that align with your business goals, ensuring maximum ROI and sustainable growth.",
  },
  {
    icon: EyeIcon,
    title: "UI/UX Design Solutions",
    children:
      "We create intuitive and engaging user experiences that reflect your brand identity. Our designs combine aesthetics with functionality to deliver memorable digital experiences.",
  },
  {
    icon: DocumentTextIcon,
    title: "Quality Assurance",
    children:
      "Our rigorous testing and quality assurance processes ensure your digital products are reliable, secure, and perform flawlessly across all platforms and devices.",
  },
];

export function Skills() {
  return (
    <section className="px-8" id="services">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          our services
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What We Deliver
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          At Weblancer, we transform businesses through innovative digital solutions. 
          Our comprehensive suite of services is designed to help your organization 
          thrive in the digital age.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
