import { useEffect, useRef, useCallback } from "react";

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = (canvas.width = window.innerWidth);
    const H = (canvas.height = window.innerHeight);

    ctx.clearRect(0, 0, W, H);

    // Diagonal lines
    ctx.strokeStyle = "rgba(30,75,145,0.22)";
    ctx.lineWidth = 0.5;
    for (let i = -H; i < W + H; i += 70) {
      ctx.beginPath();
      ctx.moveTo(i, -10);
      ctx.lineTo(i + H, H + 10);
      ctx.stroke();
    }

    // Concentric circles
    const cx = W * 0.5;
    const cy = H * 0.28;
    const maxRadius = Math.max(W, H) * 0.75;

    for (let r = 50; r < maxRadius; r += 85) {
      const alpha = 0.07 * (1 - r / maxRadius);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(91,155,213,${alpha})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    // Radial lines
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = "rgba(126,200,227,0.06)";
    ctx.lineWidth = 0.8;
    const lineLength = Math.min(W, H) * 0.65;

    for (let a = 0; a < Math.PI; a += Math.PI / 6) {
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * -lineLength, Math.sin(a) * -lineLength);
      ctx.lineTo(Math.cos(a) * lineLength, Math.sin(a) * lineLength);
      ctx.stroke();
    }
    ctx.restore();
  }, []);

  useEffect(() => {
    draw();

    const handleResize = () => draw();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
      aria-hidden="true"
    />
  );
}
