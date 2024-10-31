"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const TESTIMONIALS = [
  {
    content: "Working with Weblancer has been transformative for our business. Their technical expertise and commitment to delivering high-quality solutions exceeded our expectations. The team's ability to understand our requirements and translate them into powerful digital solutions was impressive.",
    author: "Michael Anderson",
    position: "CTO, TechCorp Solutions",
    rating: 5,
    image: "/image/avatar1.jpg"
  },
  {
    content: "The DevOps implementation by Weblancer revolutionized our deployment process. Their team's deep understanding of cloud technologies and automation helped us achieve a 70% reduction in deployment time. They're not just service providers; they're strategic partners.",
    author: "Sarah Johnson",
    position: "Engineering Director, CloudScale",
    rating: 5,
    image: "/image/avatar1.jpg"
  },
  {
    content: "Exceptional web development expertise! Weblancer delivered a complex e-commerce platform that perfectly aligned with our vision. Their attention to detail and commitment to meeting deadlines made the entire process smooth and efficient.",
    author: "David Chen",
    position: "CEO, Digital Retail Pro",
    rating: 5,
    image: "/image/avatar1.jpg"
  },
];

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((current) => 
          current === 0 ? TESTIMONIALS.length - 1 : current - 1
        );
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? TESTIMONIALS.length - 1 : current - 1
    );
  };

  return (
    <section className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <Typography color="blue-gray" className="mb-2 font-bold uppercase">
            Client Testimonials
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            What Our Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 !text-gray-500 lg:w-6/12"
          >
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results.
          </Typography>
        </div>

        <div className="lg:flex items-center justify-between gap-16">
          <Card 
            color="transparent" 
            shadow={false} 
            className="w-full lg:w-3/5 lg:pr-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CardBody>
              {/* Rating Stars */}
              <div className="mb-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <div className="relative h-48 overflow-hidden">
                {TESTIMONIALS.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`testimonial-slide ${
                      index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="mb-8 font-normal"
                    >
                      "{testimonial.content}"
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      {testimonial.author}
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      {testimonial.position}
                    </Typography>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-4">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 w-12 rounded-full transition-colors ${
                        index === activeIndex ? "bg-gray-900" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Image Section */}
          <div className="hidden lg:block w-2/5">
            <div className="relative h-[400px] w-[350px] ml-auto bg-white p-3 rounded-xl shadow-lg">
              <Image
                width={350}
                height={400}
                src={TESTIMONIALS[activeIndex].image}
                alt={`${TESTIMONIALS[activeIndex].author} testimonial`}
                className="h-full w-full rounded-lg object-cover transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-3 rounded-lg ring-1 ring-gray-900/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
