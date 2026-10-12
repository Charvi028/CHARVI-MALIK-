import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Eraser, Download, Check, PenTool } from 'lucide-react';

export const PenSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [inkColor, setInkColor] = useState<'#38bdf8' | '#ffffff' | '#22d3ee' | '#a3a3a3'>('#38bdf8');
  const [strokeWidth, setStrokeWidth] = useState<number>(3);
  const [strokePointsCount, setStrokePointsCount] = useState<number>(0);
  const [paperTexture, setPaperTexture] = useState<'dots' | 'grid' | 'blank'>('dots');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions responsively
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      renderWelcomeStroke(ctx, rect.width, rect.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const renderWelcomeStroke = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    // Initial smooth demonstration signature or calligraphy
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.55);
    ctx.bezierCurveTo(
      width * 0.3, height * 0.25,
      width * 0.45, height * 0.85,
      width * 0.65, height * 0.45
    );
    ctx.bezierCurveTo(
      width * 0.75, height * 0.25,
      width * 0.82, height * 0.65,
      width * 0.9, height * 0.5
    );
    ctx.stroke();

    ctx.font = '12px "Outfit", sans-serif';
    ctx.fillStyle = '#737373';
    ctx.fillText('Apex-Grip Micro-Roller Canvas — Drag finger or mouse to write', width * 0.08, height * 0.75);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = inkColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    setStrokePointsCount((prev) => prev + 1);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    setStrokePointsCount(0);
  };

  return (
    <section id="simulator" className="py-12 sm:py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <PenTool className="h-3.5 w-3.5" />
              <span>Interactive Pen Lab</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Smoothness Demonstration</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display mt-2">
              Virtual Write & Grip Simulator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 sm:mt-2 max-w-2xl leading-relaxed">
              Experience the zero-drag ink distribution algorithm simulated in real-time. Test pen strokes, signature speed, and continuous curves directly with your touchscreen, mouse, or touchpad.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={clearCanvas}
              className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-neutral-200 hover:border-neutral-700 hover:text-white active:bg-neutral-800 transition-all min-h-[44px]"
              aria-label="Clear drawing canvas"
            >
              <Eraser className="h-4 w-4" />
              <span>Clear Canvas</span>
            </button>
          </div>
        </div>

        {/* Simulator Studio Box */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3 sm:p-6 backdrop-blur-sm">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-neutral-800/80">
            
            {/* Color Palette with Min 44px Touch Targets */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs text-neutral-400 font-medium">Ink:</span>
              <div className="flex items-center gap-2">
                {[
                  { color: '#38bdf8', name: 'Electric Cyan' },
                  { color: '#22d3ee', name: 'Cerulean Ice' },
                  { color: '#ffffff', name: 'Pure White' },
                  { color: '#a3a3a3', name: 'Titanium Slate' },
                ].map((item) => (
                  <button
                    key={item.color}
                    onClick={() => setInkColor(item.color as any)}
                    title={item.name}
                    aria-label={`Select ink color ${item.name}`}
                    className={`h-9 w-9 sm:h-8 sm:w-8 rounded-full border transition-all flex items-center justify-center ${
                      inkColor === item.color
                        ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-neutral-950 scale-110'
                        : 'border-neutral-700 hover:scale-105 active:scale-95'
                    }`}
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>
            </div>

            {/* Tip Gauge Width */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs text-neutral-400 font-medium">Tip:</span>
              <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
                {[
                  { width: 1.5, label: '0.38mm' },
                  { width: 3, label: '0.5mm' },
                  { width: 4.5, label: '0.7mm' },
                ].map((w) => (
                  <button
                    key={w.width}
                    onClick={() => setStrokeWidth(w.width)}
                    className={`px-3 py-2 sm:py-1.5 text-xs rounded-lg transition-all min-h-[38px] flex items-center justify-center ${
                      strokeWidth === w.width
                        ? 'bg-cyan-500 text-neutral-950 font-bold'
                        : 'text-neutral-400 hover:text-white active:bg-neutral-900'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Paper Texture */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 font-medium">Grid:</span>
              <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
                {(['dots', 'grid', 'blank'] as const).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setPaperTexture(bg)}
                    className={`px-3 py-2 sm:py-1.5 text-xs capitalize rounded-lg transition-all min-h-[38px] flex items-center justify-center ${
                      paperTexture === bg
                        ? 'bg-neutral-800 text-white font-medium'
                        : 'text-neutral-400 hover:text-white active:bg-neutral-900'
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Canvas Area */}
          <div className="relative mt-3 sm:mt-4 h-[280px] sm:h-[400px] w-full rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-950 cursor-crosshair touch-none">
            
            {/* Background Texture Simulation */}
            {paperTexture === 'dots' && (
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(#737373 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
            )}
            {paperTexture === 'grid' && (
              <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                  backgroundImage: 'linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)',
                  backgroundSize: '32px 32px'
                }}
              />
            )}

            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="h-full w-full touch-none relative z-10"
            />

            {/* Bottom Real-time Telemetry Indicator */}
            <div className="absolute bottom-2 left-2 right-2 sm:right-auto z-20 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-neutral-400 bg-neutral-900/95 border border-neutral-800 px-2.5 py-1.5 rounded-lg backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Micro-Roller: Active</span>
              </div>
              <span className="text-neutral-600">·</span>
              <span>Points: <strong className="text-white font-mono-numbers">{strokePointsCount}</strong></span>
            </div>

            <div className="absolute bottom-2 right-2 z-20 hidden md:block text-[11px] text-neutral-400 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg backdrop-blur-md">
              Simulated Tungsten Dynamic Flow
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
