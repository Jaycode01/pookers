import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  zoom?: boolean; // new prop
}

export default function ScrollFadeIn({
  children,
  delay = 0.1,
  zoom = false,
}: ScrollFadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const initial = zoom ? { opacity: 0, scale: 0.85 } : { opacity: 0, y: 40 };

  const animate = inView
    ? zoom
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, y: 0 }
    : zoom
    ? { opacity: 0, scale: 0.85 }
    : { opacity: 0, y: 40 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
