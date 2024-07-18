// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "../utils/utils";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {
  const colors = [
    "var(--sky-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];
  return (
    <motion.div
      className="h-4 w-16 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
      >
        <path
          d="m84.555 22.496c1.6289 1.6289 4.2656 1.6289 5.8945 0 1.625-1.625 1.625-4.2656 0-5.8906l-7.0547-7.0508c-1.625-1.6289-4.2617-1.6289-5.8906 0-1.6289 1.625-1.6289 4.2656 0 5.8906l0.57812 0.57813-14.926 14.93c-8.1133-5.7578-18.602-5.7305-24.91 0.57812-0.83594 0.83594-1.5625 1.7461-2.1797 2.7148-1.0312 1.6211-2.8125 2.7109-4.7383 2.6875-6.4922-0.082032-12.695 2.1328-17.305 6.7422-10.047 10.043-8.7148 27.652 2.9688 39.336 11.68 11.684 29.293 13.012 39.336 2.9688 4.6133-4.6094 6.8281-10.82 6.7422-17.316-0.027343-1.9219 1.0664-3.707 2.6875-4.7383 0.96484-0.61719 1.875-1.3438 2.707-2.1758 6.3086-6.3086 6.3359-16.793 0.58203-24.906l14.926-14.926zm-30.387 29.586c0 3.4531-2.8008 6.25-6.25 6.25-3.4531 0-6.25-2.7969-6.25-6.25 0-3.4492 2.7969-6.25 6.25-6.25 3.4492 0 6.25 2.8008 6.25 6.25zm-22.5 23.301c1.6289 1.625 4.2656 1.625 5.8945 0 1.625-1.6289 1.625-4.2656 0-5.8945l-7.0508-7.0508c-1.6289-1.625-4.2656-1.625-5.8945 0-1.6289 1.6289-1.6289 4.2656 0 5.8945z"
          fill={colors[Math.floor(Math.random() * colors.length)]}
        />
      </svg>
    </motion.div>
  );
};
