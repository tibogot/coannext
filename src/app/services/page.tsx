"use client";
import Image from "next/image";
import Copy from "@/components/Copy1";
// import PulsingMap from "../components/MapSvg";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="font-NHD hero relative flex h-[100svh] w-full items-end  p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src="/grid-images/optimized-image-4.webp"
            alt="Services hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold gsap-fouc">
            Comprehensive Engineering Solutions Across Civil, Electrical &
            Mechanical Disciplines
          </h1>
        </Copy>
      </section>
      {/* Services Section */}
      <section className="font-NHD secondsection overflow-visible px-4 py-10 md:px-10 md:pb-30">
        <Copy>
          <h4 className="text-orange-400">Our services</h4>
        </Copy>
        <Copy>
          <h1 className="mt-4 w-full md:w-3/4">
            Discover the <span className="text-orange-400">services</span>{" "}
            <br />
            we have to <span className="text-orange-400">offer.</span>
          </h1>
          <p className="mt-22 w-full text-lg md:w-1/4 md:text-xl">
            Our diverse range of services is designed to meet the unique needs
            of each project, ensuring optimal outcomes and client satisfaction.
          </p>
        </Copy>

        <div className="mt-14 grid grid-cols-1 gap-10 text-white md:grid-cols-3">
          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Preconstruction <br />
              Services
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Comprehensive planning, feasibility studies, and detailed cost
              analysis to ensure project success from the very beginning.
            </p>
          </div>

          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Construction <br />
              Management
            </h3>
            <p className="w-full text-xl md:w-3/4">
              End-to-end project oversight ensuring seamless coordination,
              quality control, and optimal resource utilization throughout
              execution.
            </p>
          </div>

          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Road <br />
              Construction
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Expert construction of highways, urban roads, and bridges using
              advanced techniques and sustainable materials for lasting
              infrastructure.
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 text-white md:grid-cols-3">
          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Street Light <br />
              Installation
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Modern lighting solutions for urban areas, enhancing safety and
              efficiency with sustainable LED technology and smart controls.
            </p>
          </div>

          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              District <br />
              Network
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Design and implementation of robust power distribution networks,
              ensuring reliable electricity supply to communities and
              businesses.
            </p>
          </div>

          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Sewage <br />
              Network
            </h3>
            <p className="w-full text-xl md:w-3/4">
              State-of-the-art sewage systems designed for efficiency and
              environmental compliance, serving urban and industrial areas.
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 text-white md:grid-cols-3">
          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Dams & <br />
              Dredging
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Specialized in dam construction and waterway maintenance through
              advanced dredging techniques for improved water management.
            </p>
          </div>

          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Water Supply & <br />
              Distribution
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Development of comprehensive water infrastructure systems, from
              treatment plants to distribution networks for reliable water
              access.
            </p>
          </div>

          <div className="group flex h-[400px] flex-col justify-between rounded-sm bg-orange-400 p-6 transition-all duration-300 hover:bg-orange-500 hover:scale-105">
            <h3 className="text-xl font-medium">
              Infrastructure <br />
              Maintenance
            </h3>
            <p className="w-full text-xl md:w-3/4">
              Proactive maintenance and rehabilitation services for civil and
              electrical infrastructure, ensuring long-term reliability and
              performance.
            </p>
          </div>
        </div>
      </section>
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
      {/* <PulsingMap /> */}
    </>
  );
};

export default Services;
