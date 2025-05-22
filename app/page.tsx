'use client';

import { useEffect, useRef, useState } from 'react';
import EmojiPanel from '../src/components/EmojiPanel';

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
  const defaultEmojis: Emoji[] = [
    { x: 100, y: 100, dx: 2, dy: 2, size: 40, emoji: '😊' },
    { x: 300, y: 200, dx: -3, dy: 3, size: 50, emoji: '❤️' },
    { x: 500, y: 150, dx: 3, dy: -2, size: 45, emoji: '✨' },
    { x: 200, y: 400, dx: -2, dy: -3, size: 35, emoji: '🌟' },
    { x: 600, y: 300, dx: 2, dy: 2, size: 42.5, emoji: '🥰' },
  ];
  const [emojis, setEmojis] = useState<Emoji[]>(defaultEmojis);

  const handleEmojiSelect = (emoji: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Add new emoji with random position and movement
    const newEmoji: Emoji = {
      x: Math.random() * (canvas.width - 50),
      y: Math.random() * (canvas.height - 50),
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      size: (80 + Math.random() * 40) * 0.5,
      emoji,
    };

    setEmojis(prev => [...prev, newEmoji]);
  };

  const handleRefresh = () => {
    setEmojis(defaultEmojis);
  };

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

      emojis.forEach(emoji => {
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
  }, [emojis]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 pb-20">
      {/* Floating Refresh Button */}
      <button
        onClick={handleRefresh}
        aria-label="refresh"
        title="Reset Emoji Wall"
        style={{
          position: 'fixed',
          top: 24,
          right: 24,
          zIndex: 2000,
          background: '#fff',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          fontSize: '1.3rem',
          padding: '4px 8px',
          cursor: 'pointer',
          transition: 'background 0.1s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#f5f5f5')}
        onMouseOut={e => (e.currentTarget.style.background = '#fff')}
      >
        🔄
      </button>
      <EmojiPanel onEmojiSelect={handleEmojiSelect} />
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </main>
  );
}
