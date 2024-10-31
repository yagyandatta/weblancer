"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { LinkedInIcon, GitHubIcon, TwitterIcon } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LEADERSHIP_TEAM = [
  {
    name: "Diptansu Das",
    role: "Founder & CEO",
    image: "/teams/1.png",
    bio: "Full-stack developer with expertise in building scalable applications.",
    longBio: "Diptansu is the founder and CEO, bringing over 5 years of experience in software development and team leadership. His expertise in full-stack development and cloud architecture has been instrumental in shaping the company's technical direction and growth strategy.",
    social: {
      linkedin: "https://www.linkedin.com/in/diptansu-das-2476b4194/",
      github: "https://github.com/diptansu-das"
    }
  },
  {
    name: "Yagyandatta Murmu",
    role: "Co-Founder & CTO",
    image: "/teams/2.png",
    bio: "Backend specialist with deep expertise in system architecture.",
    longBio: "Yagyandatta leads the technical architecture and innovation initiatives. With extensive experience in backend development and system design, he ensures the scalability and reliability of our solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/yagyandatta-murmu/",
      github: "https://github.com/yagyandatta"
    }
  },
  {
    name: "Sangram Mohapatra",
    role: "Technical Lead",
    image: "/teams/3.png",
    bio: "Frontend expert specializing in modern web technologies.",
    longBio: "Sangram leads the frontend development team, bringing expertise in React and modern web technologies. His focus on user experience and performance has been key to delivering exceptional client solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/sangram-mohapatra/",
      github: "https://github.com/sangrammohapatra"
    }
  },
  {
    name: "P Sagar Kumar Achary",
    role: "Senior Developer",
    image: "/teams/4.png",
    bio: "Full-stack developer with focus on cloud solutions.",
    longBio: "Sagar specializes in full-stack development with particular expertise in cloud technologies. His experience with AWS and Azure has helped streamline our deployment processes and improve system reliability.",
    social: {
      linkedin: "https://www.linkedin.com/in/p-sagar-kumar-achary/",
      github: "#"
    }
  },
  {
    name: "Chinmaya Kumar Sasmal",
    role: "DevOps Engineer",
    image: "/teams/5.png",
    bio: "Infrastructure and automation specialist.",
    longBio: "Chinmaya manages our DevOps processes, ensuring smooth deployments and optimal performance. His expertise in containerization and CI/CD pipelines has significantly improved our development workflow.",
    social: {
      linkedin: "https://www.linkedin.com/in/chinmaya-kumar-sasmal-766314243/",
      github: "#"
    }
  }
];

export function LeadershipSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-20 px-4 bg-white" id="team">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Typography color="blue-gray" className="mb-2 font-bold uppercase">
            our team
          </Typography>
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Meet Our Leadership
          </Typography>
          <Typography variant="lead" className="mx-auto w-full px-4 text-gray-600 lg:w-6/12">
            With over 5 years of combined experience, we've got a well-seasoned team at the helm.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-2 justify-center">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform === 'linkedin' && <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" />}
                        {platform === 'github' && <GitHubIcon className="h-4 w-4 text-gray-700" />}
                        {platform === 'twitter' && <TwitterIcon className="h-4 w-4 text-[#1DA1F2]" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Typography variant="h6" className="text-blue-gray-900 font-semibold">
                  {member.name}
                </Typography>
                <Typography className="text-sm text-blue-gray-600">
                  {member.role}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-square">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:pr-8 flex flex-col">
                  <Typography variant="h4" className="mb-2 font-bold">
                    {selectedMember.name}
                  </Typography>
                  <Typography className="text-blue-gray-600 mb-4">
                    {selectedMember.role}
                  </Typography>
                  <Typography className="text-gray-700 mb-6">
                    {selectedMember.longBio}
                  </Typography>
                  <div className="flex gap-3 mt-auto">
                    {Object.entries(selectedMember.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform === 'linkedin' && <LinkedInIcon className="h-5 w-5 text-[#0A66C2]" />}
                        {platform === 'github' && <GitHubIcon className="h-5 w-5 text-gray-700" />}
                        {platform === 'twitter' && <TwitterIcon className="h-5 w-5 text-[#1DA1F2]" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default LeadershipSection;
