"use client";

import { motion, Transition } from "framer-motion";
import type { ShapeItem } from "@/data/shapes";

type Props = { item: ShapeItem };

export default function AnimatedShape({ item }: Props) {
  const size = item.shape.size;

  const baseStyle = {
    width: size,
    height: size,
    borderRadius: item.shape.kind === "circle" ? "9999px" : "0px",
  } as const;

  const distance = item.distance ?? 30;
  const duration = item.duration ?? 6;
  const delay = item.delay ?? 0;

  // Animation object
  const anim =
    item.animate === "x"
      ? { x: [0, -distance, 0] }
      : item.animate === "y"
      ? { y: [0, -distance, 0] }
      : item.animate === "xy"
      ? { x: [0, distance, 0], y: [0, -distance, 0] }
      : { rotate: [0, 360] };

  // TypeScript-safe transition
  const transition: Transition = {
    duration,
    repeat: Infinity,
    delay,
    ease: item.animate === "spin" ? "linear" : undefined,
  };

  return (
    <motion.div
      style={baseStyle}
      className={`absolute pointer-events-none ${item.className ?? ""}`}
      animate={anim}
      transition={transition}
    />
  );
}
