"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Copy from "@/components/Copy1";

const Gallery = () => {
  const images = Array.from(
    { length: 12 },
    (_, i) => `/grid-images/optimized-image-${i + 1}.webp`
  );
  const previewContainerRef = useRef<HTMLDivElement | null>(null);
  const [isInitialImageLoaded, setIsInitialImageLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Preload the first few images for better performance
  useEffect(() => {
    // Preload the first image and a few more
    const imagesToPreload = images.slice(0, 4); // Preload first 4 images

    Promise.all(
      imagesToPreload.map((src) => {
        return new Promise<string>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve(src);
        });
      })
    ).then(() => {
      // Set the first image when preloaded
      if (previewContainerRef.current && !isInitialImageLoaded) {
        const imgEl = document.createElement("img");
        imgEl.src = images[0];
        imgEl.alt = "Initial preview";
        imgEl.className = "absolute inset-0 h-full w-full object-cover";
        imgEl.style.clipPath = "inset(0 0 0 0%)";
        previewContainerRef.current.appendChild(imgEl);
        setIsInitialImageLoaded(true);
      }
    });
  }, [images, isInitialImageLoaded]);

  const handleImageClick = (src: string) => {
    // Prevent clicking the same image multiple times
    if (selectedImage === src) {
      return;
    }

    setSelectedImage(src);

    // Only proceed if the preview container exists
    if (!previewContainerRef.current) return;

    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      const imgEl = document.createElement("img");
      imgEl.src = src;
      imgEl.alt = "Preview";
      imgEl.className = "absolute inset-0 h-full w-full object-cover";
      imgEl.style.clipPath = "inset(0 0 0 100%)";

      const container = previewContainerRef.current;
      if (!container) return;

      const previousImage = container.lastElementChild;

      container.appendChild(imgEl);

      // Animate new image revealing with clip-path
      gsap.to(imgEl, {
        clipPath: "inset(0 0 0 0%)",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          // Optional: return previous image to normal after effect
          if (previousImage) {
            gsap.to(previousImage, {
              scale: 1,
              xPercent: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        },
      });

      // Animate previous image underneath
      if (previousImage) {
        gsap.to(previousImage, {
          scale: 1.5,
          xPercent: -25,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };
  };

  return (
    <>
      <section className="hero font-NHD relative flex h-[100svh] w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src="/gallery-img-optimized.webp"
            alt="Gallery hero background"
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
            Creating standout brands for startups that bring joy and leave
            lasting impressions.
          </h1>
        </Copy>
      </section>
      <div className="font-NHD maincontainer relative flex w-full flex-col px-4 pt-10 pb-20 md:h-screen md:px-10 md:pt-20">
        {/* Categories Row */}
        <div className="w-full">
          <Copy>
            <h1 className="mt-4 w-full md:w-3/4">
              A construction <span className="text-orange-400">company,</span>
              <br />
              offering integrated solution and
              <br />
              related
              <span className="text-orange-400"> services.</span>
            </h1>
          </Copy>
        </div>
        {/* Grid and Preview */}
        <div className="my-10 flex h-full w-full flex-row select-none">
          {/* Grid - Left */}
          <div className="gallery flex w-full flex-col lg:w-1/3">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="item mb-4 flex cursor-pointer flex-col items-center select-none group"
                  onClick={() => handleImageClick(src)}
                >
                  <div className="img aspect-square w-full overflow-hidden rounded-sm relative">
                    <Image
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer - Middle */}
          <div className="hidden lg:block lg:w-1/3"></div>

          {/* Preview - Right */}
          <div className="preview hidden lg:block lg:h-full lg:w-1/3">
            {!isInitialImageLoaded && (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 rounded-lg">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-orange-400"></div>
              </div>
            )}
            <div
              className="preview-container relative h-full w-full overflow-hidden rounded-lg"
              ref={previewContainerRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
