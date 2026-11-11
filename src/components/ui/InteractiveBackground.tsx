import { useEffect, useRef } from "react";

/**
 * Interactive Background (Optimized for smooth 60fps):
 * - Lightweight Canvas Particle Constellation + Shooting Meteors + Cursor Glow
 * - GPU-friendly static atmospheric gradients + architectural grid
 */
export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Reduced particle count for ultra-smooth scrolling & rendering
    const count = Math.min(42, Math.floor((width * height) / 32000));
    const palette = ["163, 230, 53", "34, 211, 238", "52, 211, 153", "129, 140, 248"];

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.6 + 0.8,
      color: palette[Math.floor(Math.random() * palette.length)],
      alpha: Math.random() * 0.5 + 0.25,
    }));

    type Meteor = { x: number; y: number; len: number; speed: number; alpha: number; color: string };
    const meteors: Meteor[] = [];
    const spawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.016) {
        meteors.push({
          x: Math.random() * width * 1.1,
          y: -30,
          len: Math.random() * 95 + 65,
          speed: Math.random() * 5 + 5.5,
          alpha: 0.95,
          color: Math.random() > 0.4 ? "163, 230, 53" : "34, 211, 238",
        });
      }
    };

    const linkDistSq = 125 * 125;
    const mouseDistSq = 175 * 175;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Soft cursor spotlight
      const cursorGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 320);
      cursorGrad.addColorStop(0, "rgba(163, 230, 53, 0.09)");
      cursorGrad.addColorStop(0.5, "rgba(34, 211, 238, 0.04)");
      cursorGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = cursorGrad;
      ctx.fillRect(mouse.x - 320, mouse.y - 320, 640, 640);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // Fast squared-distance check before sqrt
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < linkDistSq) {
            const lineAlpha = (1 - dSq / linkDistSq) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(163, 230, 53, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mSq = mdx * mdx + mdy * mdy;
        if (mSq < mouseDistSq) {
          const mAlpha = (1 - mSq / mouseDistSq) * 0.3;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${mAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x -= m.speed * 0.85;
        m.y += m.speed;
        m.alpha -= 0.009;

        if (m.alpha <= 0 || m.y > height + 80 || m.x < -80) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x + m.len * 0.85;
        const tailY = m.y - m.len;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(${m.color}, ${m.alpha})`);
        grad.addColorStop(1, `rgba(${m.color}, 0)`);

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050811]">
      {/* GPU-friendly composite radial nebula */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 55% at 50% -10%, rgba(16, 185, 129, 0.20), transparent 65%),
            radial-gradient(ellipse 55% 45% at 88% 18%, rgba(6, 182, 212, 0.16), transparent 65%),
            radial-gradient(ellipse 60% 50% at 12% 55%, rgba(163, 230, 53, 0.11), transparent 65%),
            radial-gradient(ellipse 65% 55% at 82% 85%, rgba(99, 102, 241, 0.14), transparent 65%)
          `,
        }}
      />

      {/* Architectural cyber grid with radial fade */}
      <div className="bg-cyber-grid absolute inset-0 opacity-75 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,black_30%,transparent_90%)]" />

      {/* Glowing horizon line */}
      <div className="absolute inset-x-0 top-[42rem] h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

      {/* Interactive particle & meteor canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
