"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface CanvasImageSequenceProps {
  imagePath: string; // e.g. "/assets/athletes/ezgif-frame-"
  frameCount: number; // e.g. 23
  extension?: string; // default ".jpg"
  scrollProgress: MotionValue<number>;
  className?: string;
  padLength?: number; // e.g. 3 for "001"
  objectFit?: "cover" | "contain" | "responsive" | "responsive-reverse";
  objectPosition?: "center" | "responsive-right";
}

export default function CanvasImageSequence({
  imagePath,
  frameCount,
  extension = ".jpg",
  scrollProgress,
  className = "",
  padLength = 3,
  objectFit = "responsive",
  objectPosition = "center",
}: CanvasImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(padLength, "0");
      img.src = `${imagePath}${paddedIndex}${extension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [imagePath, frameCount, extension, padLength]);

  // Draw frame on canvas
  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    
    // Auto-resize canvas to match aspect ratio of image but fill container
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    } else {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    // Object-fit logic
    let scale;
    const isMobile = window.innerWidth < 1024;
    
    let currentObjectFit = objectFit;
    if (objectFit === "responsive") {
      currentObjectFit = isMobile ? "contain" : "cover";
    } else if (objectFit === "responsive-reverse") {
      currentObjectFit = isMobile ? "cover" : "contain";
    }

    if (objectPosition === "responsive-right" && isMobile) {
      // Crop to just the right 50% of the source image
      const sourceX = img.width / 2;
      const sourceY = 0;
      const sourceW = img.width / 2;
      const sourceH = img.height;

      // Recalculate scale based on the cropped half
      let halfScale;
      if (currentObjectFit === "contain") {
        halfScale = Math.min(canvas.width / sourceW, canvas.height / sourceH);
      } else {
        halfScale = Math.max(canvas.width / sourceW, canvas.height / sourceH);
      }

      const drawX = (canvas.width / 2) - (sourceW / 2) * halfScale;
      const drawY = (canvas.height / 2) - (sourceH / 2) * halfScale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, sourceX, sourceY, sourceW, sourceH, drawX, drawY, sourceW * halfScale, sourceH * halfScale);
      return;
    }

    if (currentObjectFit === "contain") {
      scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    } else {
      scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    }
    
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Initial draw and resize listener
  useEffect(() => {
    if (loaded && images.length > 0) {
      // Draw initial frame
      const maxIndex = frameCount - 1;
      let frameIndex = Math.floor(scrollProgress.get() * frameCount);
      if (frameIndex > maxIndex) frameIndex = maxIndex;
      if (frameIndex < 0) frameIndex = 0;
      drawImage(frameIndex);

      // Handle resize
      const handleResize = () => {
        let currentFrameIndex = Math.floor(scrollProgress.get() * frameCount);
        if (currentFrameIndex > maxIndex) currentFrameIndex = maxIndex;
        if (currentFrameIndex < 0) currentFrameIndex = 0;
        drawImage(currentFrameIndex);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, frameCount]);

  // Handle scroll updates
  useMotionValueEvent(scrollProgress, "change", (latest) => {
    if (!loaded) return;
    const maxIndex = frameCount - 1;
    // Map progress (0 to 1) to frame index
    let frameIndex = Math.floor(latest * frameCount);
    if (frameIndex > maxIndex) frameIndex = maxIndex;
    if (frameIndex < 0) frameIndex = 0;
    
    drawImage(frameIndex);
  });

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
          <div className="w-8 h-8 border-2 border-white/20 border-t-[#FF6A00] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
