export type Shape =
  | { kind: "circle"; size: number }
  | { kind: "square"; size: number };

export type ShapeItem = {
  id: string;
  shape: Shape;
  className?: string;     // Tailwind utility
  animate: "x" | "y" | "xy" | "spin";
  distance?: number;      // px
  duration?: number;      // seconds
  delay?: number;         // seconds
};

export const shapes: ShapeItem[] = [
  { id: "c1", shape: { kind: "circle", size: 44 }, className: "top-10 left-16 bg-pink-500/70", animate: "y", distance: 40, duration: 5 },
  { id: "s1", shape: { kind: "square", size: 48 }, className: "bottom-24 right-32 bg-green-400/70 rotate-45", animate: "x", distance: 60, duration: 6, delay: .5 },
  { id: "c2", shape: { kind: "circle", size: 32 }, className: "bottom-10 left-40 bg-purple-500/70", animate: "y", distance: 30, duration: 4, delay: .2 },
  { id: "s2", shape: { kind: "square", size: 36 }, className: "top-24 right-12 bg-cyan-400/70", animate: "xy", distance: 24, duration: 7 },
  { id: "c3", shape: { kind: "circle", size: 14 }, className: "top-4 right-1/2 bg-white/20", animate: "spin", duration: 10 },
];
