import React, { useEffect, useState } from "react";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    // Simulate loading progress
    const intervals: ReturnType<typeof setTimeout>[] = [];

    const steps = [
      { to: 30, delay: 0, duration: 600 },
      { to: 58, delay: 700, duration: 500 },
      { to: 80, delay: 1300, duration: 400 },
      { to: 100, delay: 1800, duration: 350 },
    ];

    steps.forEach(({ to, delay, duration }) => {
      const t = setTimeout(() => {
        const start = Date.now();
        const from = progress;
        const tick = setInterval(() => {
          const elapsed = Date.now() - start;
          const frac = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - frac, 3);
          setProgress(Math.round(from + (to - from) * eased));
          if (frac >= 1) clearInterval(tick);
        }, 16);
        intervals.push(tick as unknown as ReturnType<typeof setTimeout>);
      }, delay);
      intervals.push(t);
    });

    const done = setTimeout(() => {
      setPhase("done");
      setTimeout(() => onComplete?.(), 700);
    }, 2400);
    intervals.push(done);

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .bio-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #1a3a1a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .bio-loader.done {
          opacity: 0;
          transform: scale(1.04);
          pointer-events: none;
        }

        /* Noise overlay */
        .bio-loader::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.25;
          pointer-events: none;
        }

        /* Background orbs */
        .loader-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: orbPulse 6s ease-in-out infinite;
        }
        .loader-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #2d5a27 0%, transparent 70%);
          top: -20%; left: -15%;
          animation-delay: 0s;
        }
        .loader-orb-2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, #4a7c59 0%, transparent 70%);
          bottom: -15%; right: -5%;
          animation-delay: -3s;
        }
        .loader-orb-3 {
          width: 260px; height: 260px;
          background: radial-gradient(circle, #a0653a 0%, transparent 70%);
          top: 30%; right: 20%;
          opacity: 0.35;
          animation-delay: -1.5s;
        }

        /* Central ring */
        .loader-ring-wrap {
          position: relative;
          width: 160px;
          height: 160px;
          margin-bottom: 40px;
        }
        .loader-ring-bg {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.08);
        }
        .loader-ring-track {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid transparent;
          border-top-color: rgba(212,184,150,0.25);
          animation: spin 3s linear infinite;
        }
        .loader-ring-mid {
          position: absolute;
          inset: 16px;
          border-radius: 50%;
          border: 1px solid rgba(200,219,192,0.12);
          animation: spinRev 5s linear infinite;
        }
        .loader-ring-inner {
          position: absolute;
          inset: 32px;
          border-radius: 50%;
          border: 1.5px solid rgba(135,168,120,0.2);
          border-bottom-color: rgba(135,168,120,0.5);
          animation: spin 2s linear infinite;
        }

        /* Botanical SVG in center */
        .loader-botanical {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floatSlow 4s ease-in-out infinite;
        }

        /* Leaf particles */
        .loader-leaf {
          position: absolute;
          font-size: 14px;
          opacity: 0;
          animation: leafFloat linear infinite;
          pointer-events: none;
        }

        /* Wordmark */
        .loader-wordmark {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 36px;
        }
        .loader-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #c8dbc0;
          margin-bottom: 8px;
          opacity: 0;
          animation: fadeUp 0.6s 0.2s ease forwards;
        }
        .loader-eyebrow::before,
        .loader-eyebrow::after {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #c8dbc0;
          opacity: 0.5;
        }
        .loader-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #f5f0e8;
          line-height: 1.1;
          letter-spacing: -0.3px;
          opacity: 0;
          animation: fadeUp 0.6s 0.35s ease forwards;
        }
        .loader-title em {
          font-style: italic;
          color: #d4b896;
        }

        /* Progress bar */
        .loader-progress-wrap {
          position: relative;
          z-index: 1;
          width: 240px;
          text-align: center;
        }
        .loader-progress-numbers {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
          opacity: 0;
          animation: fadeUp 0.6s 0.5s ease forwards;
        }
        .loader-percent {
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          color: #d4b896;
          letter-spacing: 1px;
        }
        .loader-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #87a878;
        }
        .loader-bar-track {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
          overflow: hidden;
          opacity: 0;
          animation: fadeUp 0.6s 0.5s ease forwards;
        }
        .loader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #4a7c59, #d4b896);
          border-radius: 2px;
          transition: width 0.3s ease;
          position: relative;
        }
        .loader-bar-fill::after {
          content: '';
          position: absolute;
          right: 0;
          top: -2px;
          width: 4px;
          height: 6px;
          background: #d4b896;
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(212,184,150,0.8);
        }

        /* Bottom hint */
        .loader-hint {
          position: absolute;
          bottom: 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(200,219,192,0.35);
          opacity: 0;
          animation: fadeUp 0.6s 0.8s ease forwards;
        }

        /* SVG plants bottom */
        .loader-plants {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 40px;
          pointer-events: none;
          opacity: 0.2;
        }

        /* Keyframes */
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.18; }
          50% { transform: scale(1.08); opacity: 0.28; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes spinRev {
          to { transform: rotate(-360deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes leafFloat {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.3; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className={`bio-loader${phase === "done" ? " done" : ""}`}>
        {/* Orbs */}
        <div className="loader-orb loader-orb-1" />
        <div className="loader-orb loader-orb-2" />
        <div className="loader-orb loader-orb-3" />

        {/* Floating leaves */}
        {["🍃", "🌿", "🍀", "🌱"].map((leaf, i) => (
          <div
            key={i}
            className="loader-leaf"
            style={{
              left: `${15 + i * 22}%`,
              animationDuration: `${7 + i * 2.5}s`,
              animationDelay: `${i * 1.2}s`,
              fontSize: `${12 + i * 2}px`,
            }}
          >
            {leaf}
          </div>
        ))}

        {/* Wordmark */}
        <div className="loader-wordmark">
          <div className="loader-eyebrow">Nature's Living Color System</div>
          <div className="loader-title">
            Bio <em>Palette</em>
          </div>
        </div>

        {/* Ring with botanical center */}
        <div className="loader-ring-wrap" style={{ opacity: 0, animation: "fadeUp 0.7s 0.15s ease forwards" }}>
          <div className="loader-ring-bg" />
          <div className="loader-ring-track" />
          <div className="loader-ring-mid" />
          <div className="loader-ring-inner" />

          {/* Botanical SVG */}
          <div className="loader-botanical">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              {/* Stem */}
              <line x1="32" y1="58" x2="32" y2="28"
                stroke="#87a878" strokeWidth="1.5" strokeLinecap="round"
                style={{ animation: "float 4s ease-in-out infinite" }} />
              {/* Leaves */}
              <ellipse cx="32" cy="26" rx="12" ry="8" fill="#4a7c59" opacity="0.9"
                style={{ animation: "float 4s 0.2s ease-in-out infinite", transformOrigin: "32px 26px" }} />
              <ellipse cx="22" cy="34" rx="10" ry="6" fill="#2d5a27" opacity="0.85"
                transform="rotate(-20 22 34)"
                style={{ animation: "float 4s 0.5s ease-in-out infinite" }} />
              <ellipse cx="42" cy="33" rx="9" ry="6" fill="#87a878" opacity="0.85"
                transform="rotate(20 42 33)"
                style={{ animation: "float 4s 0.8s ease-in-out infinite" }} />
              {/* Small accent */}
              <circle cx="32" cy="18" r="2.5" fill="#d4b896" opacity="0.7"
                style={{ animation: "float 3s 0.3s ease-in-out infinite" }} />
            </svg>
          </div>
        </div>

        {/* Progress */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-numbers">
            <span className="loader-percent">{progress}%</span>
            <span className="loader-label">
              {progress < 35 ? "Sourcing biomes" : progress < 65 ? "Mapping pigments" : progress < 90 ? "Calibrating hues" : "Ready"}
            </span>
          </div>
          <div className="loader-bar-track">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Bottom hint */}
        <div className="loader-hint">Botanical Color Intelligence</div>

        {/* SVG plants */}
        <div className="loader-plants">
          <svg width="90" height="130" viewBox="0 0 90 130" fill="none">
            <path d="M45 130 Q45 90 45 60" stroke="#87a878" strokeWidth="2" strokeLinecap="round"
              style={{ animation: "sway 4s ease-in-out infinite", transformOrigin: "45px 130px" }} />
            <ellipse cx="45" cy="58" rx="20" ry="13" fill="#4a7c59"
              style={{ animation: "float 5s ease-in-out infinite" }} />
            <ellipse cx="30" cy="74" rx="16" ry="10" fill="#2d5a27"
              style={{ animation: "float 5s 0.6s ease-in-out infinite" }} />
            <ellipse cx="60" cy="70" rx="15" ry="9" fill="#87a878"
              style={{ animation: "float 5s 1s ease-in-out infinite" }} />
          </svg>
          <svg width="70" height="100" viewBox="0 0 70 100" fill="none" style={{ transform: "scaleX(-1)" }}>
            <path d="M35 100 Q35 72 35 48" stroke="#b5c4a1" strokeWidth="1.5" strokeLinecap="round"
              style={{ animation: "sway 4s 0.5s ease-in-out infinite", transformOrigin: "35px 100px" }} />
            <ellipse cx="35" cy="46" rx="17" ry="11" fill="#87a878"
              style={{ animation: "float 5s 0.8s ease-in-out infinite" }} />
            <ellipse cx="22" cy="60" rx="13" ry="8" fill="#4a7c59"
              style={{ animation: "float 5s 1.3s ease-in-out infinite" }} />
          </svg>
        </div>
      </div>
    </>
  );
}
