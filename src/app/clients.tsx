"use client";

import Image from "next/image";
import { Typography as MTTypography } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";

const Typography = MTTypography as unknown as React.FC<Partial<TypographyProps>>;

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography 
          variant="paragraph"
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          our clients
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Trusted By Industry Leaders
        </Typography>
        <Typography variant="lead" className="mx-auto w-full px-4 text-gray-600 lg:w-6/12 mb-8">
          Partnering with leading companies to deliver exceptional digital solutions.
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
