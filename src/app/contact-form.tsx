"use client";

import {
  Typography as MTTypography,
  Card as MTCard,
  CardBody as MTCardBody,
  Radio as MTRadio,
  Input as MTInput,
  Textarea,
  Button,
} from "@material-tailwind/react";
import type { TypographyProps, CardProps, CardBodyProps, InputProps } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

// Create properly typed components
const Typography = MTTypography as unknown as React.FC<Partial<TypographyProps>>;
const Card = MTCard as unknown as React.FC<Partial<CardProps>>;
const CardBody = MTCardBody as unknown as React.FC<Partial<CardBodyProps>>;

// First cast to unknown, then to the custom type
const Input = MTInput as any;

// Add this Radio component type casting
const Radio = MTRadio as unknown as React.FC<{
  color?: string;
  name?: string;
  label?: string;
  defaultChecked?: boolean;
  crossOrigin?: any;
  onPointerEnterCapture?: () => void;
  onPointerLeaveCapture?: () => void;
}>;

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "DevOps & Cloud Solutions",
  "UI/UX Design",
  "Digital Transformation",
  "Technical Consulting",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-24">
      <div className="container mx-auto text-center">
        <Typography 
          variant="paragraph" 
          color="blue-gray" 
          className="mb-2 font-bold uppercase"
        >
          get in touch
        </Typography>
        <Typography 
          variant="h1" 
          color="blue-gray" 
          className="mb-4"
        >
          Let&apos;s Start a Conversation
        </Typography>
        <Typography 
          variant="lead" 
          className="mx-auto w-full px-4 text-gray-600 lg:w-6/12 mb-8"
        >
          Ready to transform your digital presence? We&apos;re here to help.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            {/* Contact Information Side */}
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Get in touch with us today. Our team is ready to help you transform 
                your ideas into reality.
              </Typography>
              
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +91 7008188277
                </Typography>
              </div>
              
              <div className="flex my-4 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  weblancer@gmail.com
                </Typography>
              </div>
              
              <div className="flex mb-10 gap-5">
                <MapPinIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Bhubaneswar, India
                </Typography>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-5">
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <i className="fab fa-linkedin text-xl" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <i className="fab fa-github text-xl" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <i className="fab fa-twitter text-xl" />
                </a>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              {submitSuccess && (
                <div className="p-4 bg-green-50 text-green-900 rounded-lg mb-4">
                  Thank you for reaching out! We'll get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Rajesh"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                    crossOrigin={undefined}
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Kumar"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    crossOrigin={undefined}
                  />
                </div>

                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="eg. xyz@company.com"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  crossOrigin={undefined}
                />

                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  type="tel"
                  label="Phone Number"
                  name="phone"
                  placeholder="eg. +91 99999 99999"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  crossOrigin={undefined}
                />

                <div className="space-y-2">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Services Required
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SERVICES.map((service) => (
                      <div key={service} className="flex items-center">
                        <Radio
                          color="gray"
                          name="service"
                          label={service}
                          defaultChecked={service === "Web Development"}
                          crossOrigin={undefined}
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Project Details"
                  name="message"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  crossOrigin={undefined}
                />

                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    size="lg" 
                    color="gray" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
