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

  // Mobile carousel state
  const [isMobileCarouselOpen, setIsMobileCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
    // Check if we're on mobile (screen width < 1024px)
    if (window.innerWidth < 1024) {
      // Open mobile carousel
      const imageIndex = images.indexOf(src);
      setCurrentImageIndex(imageIndex);
      setIsMobileCarouselOpen(true);
      return;
    }

    // Desktop behavior (existing code)
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

  // Mobile carousel functions
  const closeMobileCarousel = () => {
    console.log("Closing mobile carousel"); // Debug log
    setIsMobileCarouselOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNextImage();
    }
    if (isRightSwipe) {
      goToPreviousImage();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobileCarouselOpen) return;

      if (e.key === "Escape") {
        closeMobileCarousel();
      } else if (e.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileCarouselOpen]);

  return (
    <>
      <section className="hero font-NHD relative flex h-[100svh] w-full items-end  p-4 text-white md:p-10">
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

      {/* Mobile Carousel Overlay */}
      {isMobileCarouselOpen && (
        <div className="fixed inset-0 z-90 bg-black">
          {/* Clickable overlay background to close */}
          <div className="absolute inset-0 z-0" onClick={closeMobileCarousel} />

          {/* Close button */}
          <button
            onClick={closeMobileCarousel}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-20 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPreviousImage}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNextImage}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image container with touch handling */}
          <div
            className="relative z-10 flex h-full w-full items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <div className="relative h-full w-full">
              <Image
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default Gallery;
