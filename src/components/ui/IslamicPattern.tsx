"use client";

import { useEffect, useRef } from "react";

export function IslamicPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawStar = (cx: number, cy: number, radius: number, points: number, rotation: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? radius : radius * 0.4;
        const angle = (Math.PI * i) / points + rotation;
        const x = cx + r * Math.cos(angle);
        const y = cx + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(215, 181, 106, ${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const drawOctagon = (cx: number, cy: number, radius: number, rotation: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + rotation;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(215, 181, 106, ${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const drawPattern = (cx: number, cy: number, size: number, t: number) => {
      const pulse = Math.sin(t * 0.3) * 0.02 + 0.055;
      const rotation = t * 0.05;

      // Outer octagon
      drawOctagon(cx, cy, size, rotation, pulse);
      // Inner octagon rotated
      drawOctagon(cx, cy, size * 0.65, -rotation * 0.7, pulse * 0.8);
      // Inner star
      drawStar(cx, cy, size * 0.4, 8, rotation * 1.2, pulse * 0.6);

      // Connecting lines to neighbors
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + rotation;
        const x1 = cx + size * Math.cos(angle);
        const y1 = cy + size * Math.sin(angle);
        const x2 = cx + size * 1.3 * Math.cos(angle);
        const y2 = cy + size * 1.3 * Math.sin(angle);
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.strokeStyle = `rgba(215, 181, 106, ${pulse * 0.5})`;
      ctx.lineWidth = 0.3;
      ctx.stroke();
    };

    const animate = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 180;
      const cols = Math.ceil(canvas.width / spacing) + 2;
      const rows = Math.ceil(canvas.height / spacing) + 2;
      const offsetX = (time * 3) % spacing;
      const offsetY = (time * 2) % spacing;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * spacing + offsetX + (row % 2 === 0 ? 0 : spacing / 2);
          const y = row * spacing + offsetY;
          drawPattern(x, y, 40, time + col * 0.5 + row * 0.3);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
