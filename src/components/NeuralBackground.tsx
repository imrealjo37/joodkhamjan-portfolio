import { useEffect, useRef } from "react";

/**
 * Subtle neural-network backdrop:
 * floating nodes connected by soft data-flow lines.
 * Palette stays in muted lavender / periwinkle range.
 */
export function NeuralBackground({
  density = 0.00009,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -9999;
    let mouseY = -9999;

    const palette = {
      node: "rgba(196, 188, 240, 0.55)", // soft lavender
      line: "rgba(160, 175, 220, 0.18)", // periwinkle
      glow: "rgba(196, 188, 240, 0.35)",
    };

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.floor(width * height * density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: 0.8 + Math.random() * 1.6,
      }));
    }
    function onMouseMove(e: MouseEvent) {
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
}

function onMouseLeave() {
  mouseX = -9999;
  mouseY = -9999;
}

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // connections
      const maxDist = Math.min(180, Math.max(110, width * 0.12));
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(d2) / maxDist;
            ctx.strokeStyle = `rgba(170, 180, 225, ${alpha * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {const mx = n.x - mouseX;
        const my = n.y - mouseY;
        const md = Math.sqrt(mx * mx + my * my);

        if (md > 0 && md < 120) {
          const force = (120 - md) / 120;
          n.x += (mx / md) * force * 0.8;
          n.y += (my / md) * force * 0.8;
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = palette.node;
        ctx.shadowBlur = 12;
        ctx.shadowColor = palette.glow;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    step();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
     className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
