import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Luxury = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -100,

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          end: "+=1000",

          scrub: 1,

          pin: true,

          //markers: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-black text-white overflow-hidden flex items-center"
    >
      <div
        ref={textRef}
        className="flex whitespace-nowrap"
      >
        <p className="text-[20vw] tracking-tight">
          Feel the Luxury.
        </p>
      </div>
    </section>
  );
};

export default Luxury;