'use client';

import { useEffect, useRef } from 'react';

interface Emoji {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  emoji: string;
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const emojis = useRef<Emoji[]>([
    { x: 100, y: 100, dx: 2, dy: 2, size: 80, emoji: '😊' },
    { x: 300, y: 200, dx: -3, dy: 3, size: 100, emoji: '❤️' },
    { x: 500, y: 150, dx: 3, dy: -2, size: 90, emoji: '✨' },
    { x: 200, y: 400, dx: -2, dy: -3, size: 70, emoji: '🌟' },
    { x: 600, y: 300, dx: 2, dy: 2, size: 85, emoji: '🥰' },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      emojis.current.forEach(emoji => {
        // Update position
        emoji.x += emoji.dx;
        emoji.y += emoji.dy;

        // Bounce off walls
        if (emoji.x <= 0 || emoji.x + emoji.size >= canvas.width) {
          emoji.dx *= -1;
        }
        if (emoji.y <= 0 || emoji.y + emoji.size >= canvas.height) {
          emoji.dy *= -1;
        }

        // Draw emoji
        ctx.font = `${emoji.size}px Arial`;
        ctx.fillText(emoji.emoji, emoji.x, emoji.y + emoji.size);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </main>
  );
}
