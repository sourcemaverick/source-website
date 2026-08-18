import { useEffect, useRef } from "react";

export const MysticCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("mystic-cursor-active");

    const pos = { x: -100, y: -100 };
    const glow = { x: -100, y: -100 };
    const trails = trailRefs.current.map(() => ({ x: -100, y: -100 }));
    let raf;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [role='button']");
      if (glowRef.current) {
        glowRef.current.classList.toggle("cursor-glow-hover", !!interactive);
      }
    };

    const tick = () => {
      glow.x += (pos.x - glow.x) * 0.12;
      glow.y += (pos.y - glow.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.x}px, ${glow.y}px)`;
      }
      let px = pos.x;
      let py = pos.y;
      trails.forEach((t, i) => {
        t.x += (px - t.x) * 0.28;
        t.y += (py - t.y) * 0.28;
        const el = trailRefs.current[i];
        if (el) el.style.transform = `translate(${t.x}px, ${t.y}px)`;
        px = t.x;
        py = t.y;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("mystic-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div data-testid="mystic-cursor" className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail"
          style={{ opacity: 0.35 - i * 0.05, width: `${7 - i}px`, height: `${7 - i}px` }}
        />
      ))}
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
};
