import { Typography } from "@material-tailwind/react";

const COMPANY = {
  name: "Weblancer",
  description: "Transforming ideas into powerful digital solutions. We specialize in web development, mobile apps, DevOps, and digital transformation.",
  social: [
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      link: "#",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
      link: "#",
      label: "GitHub",
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      ),
      link: "#",
      label: "Twitter",
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
      link: "#",
      label: "Instagram",
    },
  ],
};

const SITEMAP = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" }
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#web-development" },
      { name: "Mobile Apps", href: "#mobile-apps" },
      { name: "Cloud Solutions", href: "#cloud-solutions" },
      { name: "UI/UX Design", href: "#design" }
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Documentation", href: "/docs" },
      { name: "Tech Stack", href: "/tech-stack" }
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="w-full">
            <Typography variant="h5" color="white" className="mb-4 font-normal">
              {COMPANY.name}
            </Typography>
            <Typography className="text-gray-400 font-normal text-sm">
              {COMPANY.description}
            </Typography>
            <div className="mt-6 flex gap-4">
              {COMPANY.social.map(({ icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 hover:bg-blue-500">
                    <span className="text-gray-400 hover:text-white">
                      {icon}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Sections */}
          {SITEMAP.map(({ title, links }) => (
            <div key={title} className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-4 font-medium uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map((link) => (
                  <Typography
                    key={link.name}
                    as="li"
                    color="gray"
                    className="font-normal text-sm"
                  >
                    <a
                      href={link.href}
                      className="inline-block py-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex w-full flex-col items-center justify-center border-t border-gray-800 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-gray-400 md:mb-0"
          >
            &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
