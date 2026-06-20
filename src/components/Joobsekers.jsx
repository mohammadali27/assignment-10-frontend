"use client";
import { motion, scale } from "motion/react";
export default function HeroSection() {
  return (
    <section className="hero mx-auto">
      <style>{`
        .hero {
          width: 100%;
          max-width: 1200px;
          padding: 0 40px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          background: #06060f;
        }

        .globe-wrap {
          position: relative;
          width: 680px;
          height: 380px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .globe {
          width: 560px;
          height: 560px;
          border-radius: 50%;
          position: absolute;
          bottom: -140px;
          background:
            radial-gradient(ellipse at 38% 35%, rgba(100,80,200,0.55) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 60%, rgba(60,40,160,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, #1a1040 0%, #0d0c22 60%, #07060f 100%);
          box-shadow: 0 0 80px 20px rgba(80,50,200,0.18), inset 0 0 60px rgba(120,90,255,0.12);
          overflow: hidden;
          animation: globePulse 6s ease-in-out infinite;
        }

        .globe svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.18;
        }

        .globe::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(160,130,255,0.6), transparent);
          border-radius: 50%;
          filter: blur(2px);
        }

        .globe-mask {
          position: absolute;
          bottom: -140px;
          left: 50%;
          transform: translateX(-50%);
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 85%, #06060f 30%, transparent 70%);
          pointer-events: none;
        }

        .glow-ring {
          position: absolute;
          bottom: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 640px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(100,60,255,0.22) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .orbit-dot {
          position: absolute;
          top: 50px;
          right: 60px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 16px 4px rgba(167,139,250,0.5);
          animation: orbitFloat 4s ease-in-out infinite;
        }

        .hero-text {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-top: -60px;
        }

        .hero-title {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #fff;
        }

        .hero-title em {
          font-style: normal;
          background: linear-gradient(135deg, #c4b5fd, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 1000px;
          margin-top: 56px;
          position: relative;
          z-index: 5;
        }

        .card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          backdrop-filter: blur(12px);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: rgba(167,139,250,0.25);
          box-shadow: 0 16px 40px rgba(100,60,255,0.12);
        }

        .card-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(123,94,248,0.12);
          border: 1px solid rgba(123,94,248,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a78bfa;
        }

        .card-value {
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #fff;
          line-height: 1;
        }

        .card-label {
          font-size: 0.82rem;
          color: #8b8aa0;
          font-weight: 400;
        }

        @keyframes globePulse {
          0%, 100% { box-shadow: 0 0 80px 20px rgba(80,50,200,0.18), inset 0 0 60px rgba(120,90,255,0.12); }
          50% { box-shadow: 0 0 120px 40px rgba(100,60,240,0.28), inset 0 0 80px rgba(140,100,255,0.18); }
        }

        @keyframes orbitFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        @media (max-width: 768px) {
          .globe-wrap { width: 340px; height: 220px; }
          .globe { width: 320px; height: 320px; bottom: -80px; }
          .globe-mask { width: 320px; height: 320px; bottom: -80px; }
          .stats { grid-template-columns: repeat(2, 1fr); }
          .card-value { font-size: 1.8rem; }
        }
      `}</style>

      {/* Globe */}
      <div className="globe-wrap">
        <div className="glow-ring" />
        <div className="globe">
          <svg
            viewBox="0 0 560 560"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="rgba(200,180,255,1)"
            strokeWidth="0.8"
          >
            <ellipse cx="280" cy="280" rx="275" ry="50" />
            <ellipse cx="280" cy="280" rx="260" ry="110" />
            <ellipse cx="280" cy="280" rx="220" ry="160" />
            <ellipse cx="280" cy="280" rx="155" ry="200" />
            <path d="M280,5 Q430,140 430,280 Q430,420 280,555" />
            <path d="M280,5 Q130,140 130,280 Q130,420 280,555" />
            <path d="M280,5 Q490,180 490,280 Q490,380 280,555" />
            <path d="M280,5 Q70,180 70,280 Q70,380 280,555" />
            <path
              d="M200,160 Q240,130 280,150 Q320,160 340,200 Q360,240 320,260 Q280,270 240,255 Q190,240 185,200 Z"
              strokeWidth="1.2"
            />
            <path
              d="M150,290 Q180,270 210,285 Q230,300 225,330 Q215,360 185,365 Q155,360 145,335 Q140,310 150,290 Z"
              strokeWidth="1.2"
            />
            <path
              d="M320,290 Q360,270 390,285 Q410,300 405,325 Q395,350 365,355 Q335,355 325,335 Q315,315 320,290 Z"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        <div className="globe-mask" />
        <div className="orbit-dot" />
      </div>

      {/* Headline */}
      <div className="hero-text">
        <motion.h1
          
          className="hero-title"
        >
          Assisting over <em>15,000 job seekers</em>
          <br />
          find their dream positions.
        </motion.h1>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <div className="card-icon">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="card-value">50K</div>
          <div className="card-label">Active Jobs</div>
        </div>

        <div className="card">
          <div className="card-icon">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <div className="card-value">12K</div>
          <div className="card-label">Companies</div>
        </div>

        <div className="card">
          <div className="card-icon">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="card-value">2M</div>
          <div className="card-label">Job Seekers</div>
        </div>

        <div className="card">
          <div className="card-icon">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="card-value">97%</div>
          <div className="card-label">Satisfaction Rate</div>
        </div>
      </div>
    </section>
  );
}
