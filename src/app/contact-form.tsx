"use client";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string[]; // Explicitly define 'service' as an array of strings
  message: string;
}
import emailjs from "emailjs-com";

import {
  Typography as MTTypography,
  Card as MTCard,
  CardBody as MTCardBody,
  Radio as MTRadio,
  Input as MTInput,
  Textarea,
  Button,
} from "@material-tailwind/react";
import type {
  TypographyProps,
  CardProps,
  CardBodyProps,
  InputProps,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create properly typed components
const Typography = MTTypography as unknown as React.FC<
  Partial<TypographyProps>
>;
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
  checked?: boolean; // Add the checked prop
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange handler
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
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: [], // Now this is explicitly typed as a string array
    message: "",
  });
  const [formErrors, setformErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First Name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last Name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\+?[0-9\s]+$/.test(value)) {
          error = "Phone number is invalid";
        }
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }

    setformErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value); // Validate field on change
  };

  const handleServiceChange = (service: string) => {
    setFormData((prevData) => {
      const services = prevData.service.includes(service)
        ? prevData.service.filter((s: string) => s !== service)
        : [...prevData.service, service];

      return { ...prevData, service: services }; // Correct key should be `service` (not `services`)
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Initialize the errors object
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };
  
    let hasError = false;
  
    // Validate fields and populate error state
    for (const field in formData) {
      const value = formData[field as keyof FormData];
  
      if (Array.isArray(value)) {
        value.forEach((service) => {
          // Validate for services
          if (value.length === 0) {
            newErrors.service = "At least one service should be selected";
            hasError = true;
          }
        });
      } else {
        switch (field) {
          case "firstName":
            if (!value.trim()) {
              newErrors.firstName = "First Name is required";
              hasError = true;
            }
            break;
          case "lastName":
            if (!value.trim()) {
              newErrors.lastName = "Last Name is required";
              hasError = true;
            }
            break;
          case "email":
            if (!value.trim()) {
              newErrors.email = "Email is required";
              hasError = true;
            } else if (!/\S+@\S+\.\S+/.test(value)) {
              newErrors.email = "Email is invalid";
              hasError = true;
            }
            break;
          case "phone":
            if (!value.trim()) {
              newErrors.phone = "Phone number is required";
              hasError = true;
            } else if (!/^\+?[0-9\s]+$/.test(value)) {
              newErrors.phone = "Phone number is invalid";
              hasError = true;
            }
            break;
          case "message":
            if (!value.trim()) {
              newErrors.message = "Message is required";
              hasError = true;
            }
            break;
        }
      }
    }
  
    
    setformErrors(newErrors);
  
    
    if (hasError) {
      toast.error("Please check the errors and submit again!");
      return; 
    }
  
    setIsSubmitting(true);
    setSubmitSuccess(false);
  
    try {
      const response = await emailjs.send(
        "service_f74zadp", 
        "template_m8oqjqv", 
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service.join(", "),
          message: formData.message,
        },
        "Czqcu0sihaPql6rvc"
      );
  
      if (response.status === 200) {
        setSubmitSuccess(true);
        toast.success("Thank you for reaching out! We'll get back to you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: [],
          message: "",
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <section id="contact" className="px-8 py-24">
      <ToastContainer />
      <div className="container mx-auto text-center">
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          get in touch
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
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
                Get in touch with us today. Our team is ready to help you
                transform your ideas into reality.
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
                  contact.weblancers@gmail.com
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
                  <div>
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="First Name"
                      name="firstName"
                      placeholder="e.g., Rajesh"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {formErrors.firstName && (
                      <span className="text-red-500 text-sm">
                        {formErrors.firstName}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="Last Name"
                      name="lastName"
                      placeholder="e.g., Kumar"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {formErrors.lastName && (
                      <span className="text-red-500 text-sm">
                        {formErrors.lastName}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="e.g., xyz@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    crossOrigin={undefined}
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-sm">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    placeholder="e.g., +91 99999 99999"
                    value={formData.phone}
                    onChange={handleChange}
                    crossOrigin={undefined}
                  />
                  {formErrors.phone && (
                    <span className="text-red-500 text-sm">
                      {formErrors.phone}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Services Required
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SERVICES.map((service) => (
                      <div key={service} className="flex items-center">
                        <Radio
                          key={service}
                          label={service}
                          color="gray"
                          checked={formData.service.includes(service)} // This checks if the service is in the selected array
                          onChange={() => handleServiceChange(service)} // Update on change
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
                  value={formData.message}
                  onChange={handleChange}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                {formErrors.message && (
                  <span className="text-red-500 text-sm">
                    {formErrors.message}
                  </span>
                )}

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    color="gray"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
