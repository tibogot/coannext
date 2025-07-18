"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "@/components/Copy1";
import HomeCard from "../components/CardsScroll";
import Chart from "@/components/Chart";
import ProfilesTicker from "@/components/ProfilesTicker";
import FAQ from "@/components/FAQ";
import GridComponent from "@/components/GridComponent";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const page = () => {
  useGSAP(() => {
    // Timeline for clip-path animations
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bigimg-wrapper",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Hero image parallax
    gsap.to(".bgimg2", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Image Scale
    gsap.to(".section1", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".section1",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    // Images Clip-Path
    tl2.to(".section2", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
    });

    tl2.to(".section3", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
    });

    gsap.to(".road-img", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".pre-black",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    // Cleanup function
    return () => {
      tl2.kill();
      gsap.killTweensOf(".section1");
      gsap.killTweensOf(".bgimg2");
      gsap.killTweensOf(".road-img");
    };
  }, []);

  return (
    <div className="wrapper font-NHD">
      {/* Hero Section */}
      <section className="hero relative h-[100svh] w-full overflow-hidden p-4 text-white md:p-10">
        <div className="bgimg2 absolute inset-0 z-0 scale-100">
          <Image
            src="/coan2bg.webp"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="relative z-10 flex h-full items-end md:items-center">
          <div className="flex w-full flex-col select-none">
            <div className="logobig w-full pb-6 md:w-1/2 md:pb-8">
              <Image
                src="/logo2.svg"
                alt="Company Logo"
                width={800}
                height={200}
                className="h-auto w-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mx-2">
              <Copy isHero>
                <p className="text-base md:text-xl gsap-fouc">
                  Construction Company West Africa
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="secondsection px-4 py-10 md:px-10 md:pb-30">
        <div>
          <h4 className="text-orange-400">About us</h4>
          <Copy>
            <h1 className="mt-4 w-full md:w-1/2">
              A construction <span className="text-orange-400">company,</span>
              <br />
              offering integrated solution and
              <br />
              related
              <span className="text-orange-400"> services.</span>
            </h1>
          </Copy>
        </div>
        <div className="mt-14 flex-row md:mt-30 md:flex">
          <div className="w-full md:w-1/2">
            <Copy>
              <h3 className="w-full md:w-1/2">A Tradition Of Excellence</h3>
            </Copy>
          </div>
          <div className="mt-10 w-full md:w-1/2">
            <Copy>
              <p className="w-full text-lg md:w-3/4 md:text-xl">
                COAN West Africa Limited is a construction company offering
                integrated solutions and related services. COAN is known for
                executing complex engineering solution that require the highest
                level of technical expertise be it
                <br />
                Civil Engineering services - Bridge construction, Road and Drain
                construction, Dam construction, Public and Private building
                structures.
              </p>
            </Copy>

            <Link href="/about" className="inline-block">
              <button className="mt-10 px-6 py-3 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors">
                Learn more →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Images Clip-Path Section */}
      <div className="p-0">
        <section className="bigimg-wrapper relative h-screen w-full overflow-hidden">
          {/* Section 1 (top) */}
          <div className="section1 absolute inset-0 z-30 origin-center scale-75">
            <Image
              src="/5V6A0113-optimized.webp"
              alt="Integrated services"
              fill
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 text-center text-white">
              <h2>
                Offering
                <span className="text-orange-400"> integrated</span>
                <br /> services
              </h2>
            </div>
          </div>

          {/* Section 2 (middle) */}
          <div
            className="section2 absolute inset-0 z-40"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            <Image
              src="/5V6A0592-optimized.webp"
              alt="Engineering solutions"
              fill
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 text-center text-white">
              <h2>
                Innovative <span className="text-orange-400">engineering</span>
                <br /> solutions
              </h2>
            </div>
          </div>

          {/* Section 3 (bottom) */}
          <div
            className="section3 absolute inset-0 z-50"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            <Image
              src="/grid-images/optimized-image-2.webp"
              alt="Building the future"
              fill
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-4 text-center text-white">
              <h2>
                Building the <span className="text-orange-400">future</span>
                <br /> together
              </h2>
            </div>
          </div>
        </section>
      </div>

      <HomeCard />

      {/* Vision Section */}
      <section className="pre-black px-4 py-10 md:px-10 md:pb-30">
        <h4 className="text-orange-400">Our vision</h4>

        <div className="wrapper w-full md:flex">
          <div className="left flex flex-col justify-between md:w-1/2">
            <h2 className="mt-4 w-full ">
              To be the most trusted and innovative construction company in West
              Africa
            </h2>
            <p className="mt-10 w-full text-xl md:w-1/2">
              Setting new standards for quality, sustainability, and
              technological advancement in infrastructure development.
            </p>
          </div>
          <div className="right grow">
            <div className="img-wrapper mt-10 h-[400px] w-full md:mt-4 relative">
              <Image
                src="/road-optimized.webp"
                alt="Road construction"
                fill
                className="road-img scale-0 object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="flex w-full flex-col-reverse bg-black px-4 py-10 text-white md:flex md:flex-row md:px-10 md:py-20">
        {/* Placeholder for GridComponent */}
        <GridComponent />

        <div className="flex w-full flex-col items-start justify-start py-4 md:w-1/2 md:px-10">
          <h4>Engineering Excellence</h4>
          <h2 className="mt-4 text-balance">
            Where <span className="text-orange-400">Innovation</span> Meets{" "}
            <span className="text-orange-400">Precision</span>
          </h2>
          <p className="mt-10 w-full pb-10 text-xl md:w-1/2">
            With over 18 years of expertise in civil and electrical engineering,
            we deliver transformative infrastructure projects that shape
            tomorrow&apos;s communities. <br /> Our commitment to technical
            excellence and sustainable solutions sets new industry standards.
          </p>
          <button className="mt-10 px-6 py-3 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors">
            Learn more →
          </button>
        </div>
      </section>

      <Chart />

      {/* Team Section */}
      <section className="relative flex w-full overflow-hidden px-4 pt-10 pb-24 md:px-10 md:pt-20">
        <div className="flex w-full flex-col gap-4 text-black">
          <h4 className="text-orange-400">We&apos;re here to help.</h4>
          <h2 className="mt-4">Discover our team</h2>
          <p className="mt-14 w-full text-xl md:w-1/4">
            COAN&apos;s professional employees play an integral role in
            successfully delivering some of the largest and most complex
            construction engineering projects in Africa.
          </p>
        </div>
      </section>

      {/* ProfilesTicker Placeholder */}

      <ProfilesTicker />

      {/* FAQ Placeholder */}

      <FAQ />

      {/* Final Hero Section */}
      <section className="font-NHD relative h-[100svh] w-full overflow-hidden">
        <div className="relative flex h-full items-center justify-center bg-[url('/coan2bg.webp')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="w-1/4 relative z-10">
            <Image
              src="/coanlogobig.svg"
              alt="Company Logo"
              width={0}
              height={0}
              className="object-contain w-full h-auto"
              sizes="25vw"
            />
          </div>

          <div className="absolute top-20 z-10 flex w-full justify-start px-4 text-white md:px-10">
            <h2>
              Building the Future with
              <br />
              Precision & Expertise.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
