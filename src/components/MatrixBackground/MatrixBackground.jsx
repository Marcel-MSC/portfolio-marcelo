import { useEffect, useRef } from "react";

const MATRIX_CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ01";
const FONT_SIZE = 16;
const MAX_COLUMNS = 50;
const OPACITY = 0.09;

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.min(Math.floor(canvas.width / FONT_SIZE), MAX_COLUMNS);
      dropsRef.current = Array(cols).fill(1);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const draw = () => {
      ctx.fillStyle = `rgba(3, 7, 18, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(46, 204, 64, ${OPACITY})`;
      ctx.font = `${FONT_SIZE}px monospace`;

      const cols = dropsRef.current.length;
      const colWidth = canvas.width / cols;
      for (let i = 0; i < cols; i++) {
        const char =
          MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * colWidth;
        const y = dropsRef.current[i] * FONT_SIZE;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }
        dropsRef.current[i]++;
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
      aria-hidden
    />
  );
};

export default MatrixBackground;
