// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import LeadershipSection from "./popular-clients";
import Testimonial from "./testimonial";
import Clients from "./clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <LeadershipSection />
      <Testimonial />
      <Clients />
      <ContactForm />
      <Footer />
    </>
  );
}
