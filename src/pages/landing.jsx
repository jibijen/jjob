import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  // Trigger loading animation for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {loading ? (
  // Loading screen shown for 3 seconds
  <div className="loading-screen">
    <div className="spinner"></div> {/* YouTube-like spinner */}
  </div>
) : (
        // Main landing page content after loading
        <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
          <div className="meteor-container">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className={`meteor meteor-${index + 1}`}></div>
            ))}
          </div>
          <section className="text-center ">
            <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
              Land your dream job and make it yours today..
              <span className="flex items-center gap-2 sm:gap-6">
                and get Hired
                
              </span>
            </h1>
            <p className="text-purple-300 sm:mt-4 text-xs sm:text-xl">
              "Discover your dream job or connect with top talent in just a few clicks!"
            </p>
          </section>

          <div className="flex gap-6 justify-center">
            <Link to={"/jobs"}>
              <Button size="lg" variant="default">
                Find Jobs
              </Button>
            </Link>
            <Link to={"/post-job"}>
              <Button variant="destructive" size="lg">
                Post a Job
              </Button>
            </Link>
          </div>

          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full py-10"
          >
            <CarouselContent className="flex gap-5 sm:gap-20 items-center">
              {companies.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <img src="/cartoon-ai-robot-scene.jpg" class="object-cover object-center w-full rounded-lg h-96"/>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-bold text-purple-300">For Job Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                Search and apply for jobs, track applications, and more.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-bold text-purple-300">For Employers</CardTitle>
              </CardHeader>
              <CardContent>
                Post jobs, manage applications, and find the best candidates.
              </CardContent>
            </Card>
            </section>
            
            <Accordion type="multiple" className="w-full">
              <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4"> Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      )}
    </>
  );
};

export default LandingPage;
