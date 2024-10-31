"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
];

const ADVANTAGES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
        />
      </svg>
    ),
    title: "Domain Expertise",
    desc: "We speak your language. Our skills and expertise are focused on delivering exceptional solutions that fit your business needs perfectly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
        />
      </svg>
    ),
    title: "Technology Excellence",
    desc: "Our team combines deep technical knowledge with domain expertise to create innovative digital solutions that drive real change.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
        />
      </svg>
    ),
    title: "Innovative Solutions",
    desc: "We don't just solve problems; we innovate. Our solutions are designed to give your business a competitive edge in the digital landscape.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M19.25 3C20.22 3 21 3.78 21 4.75V15.25C21 16.22 20.22 17 19.25 17H14.83L12 20.25L9.17 17H4.75C3.78 17 3 16.22 3 15.25V4.75C3 3.78 3.78 3 4.75 3H19.25ZM19.25 4.5H4.75C4.61 4.5 4.5 4.61 4.5 4.75V15.25C4.5 15.39 4.61 15.5 4.75 15.5H9.17L12 18.25L14.83 15.5H19.25C19.39 15.5 19.5 15.39 19.5 15.25V4.75C19.5 4.61 19.39 4.5 19.25 4.5ZM7.5 6.75H16.5V8.25H7.5V6.75ZM7.5 9.75H13.5V11.25H7.5V9.75Z"
        />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Round-the-clock technical support and maintenance ensures your business operations run smoothly without interruption.",
  }
];

export function Projects() {
  return (
    <section className="px-8 pt-20">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          why choose us
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Your Trusted Technology Partner
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-6/12"
        >
          We combine technical excellence with deep industry expertise to deliver 
          solutions that transform your business.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {ADVANTAGES.map(({ icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center group">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-gray-900 text-white shadow-lg transition-transform group-hover:scale-110">
              {icon}
            </div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {title}
            </Typography>
            <Typography className="px-4 font-normal !text-gray-500">
              {desc}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;

