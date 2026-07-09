import React, { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import AdmissionEnquiry from "@/components/home/AdmissionEnquiry";

const quickLinks = [
  {
    label: "World Bank",
    href: "/world-bank",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
    ),
  },
  {
    label: "RTI",
    href: "/rti",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    label: "AISE Portal",
    href: "/aise-portal",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Janbhagidari",
    href: "/janbhagidari",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Tender",
    href: "/tender",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Recruitment",
    href: "/recruitment",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: "Scholarships",
    href: "/scholarships",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "Alumni",
    href: "/alumni",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "MOUs",
    href: "/mous",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const QuickLinksPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`ql-overlay ${isOpen ? "ql-overlay--open" : "ql-overlay--close"}`}
      onClick={onClose}
    >
      <div
        className={`ql-panel ${isOpen ? "ql-panel--open" : "ql-panel--close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="ql-header">
          <div className="ql-header-inner">
            <div className="ql-header-ornament" />
            <div>
              <h2 className="ql-title">Quick Links</h2>
              <p className="ql-subtitle">Access important portals instantly</p>
            </div>
            <button className="ql-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Grid of links */}
        <div className="ql-grid">
          {quickLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="ql-item"
              style={{ animationDelay: `${i * 45}ms` }}
              onClick={onClose}
            >
              <div className="ql-item-icon">{link.icon}</div>
              <span className="ql-item-label">{link.label}</span>
              <ExternalLink size={11} className="ql-item-arrow" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="ql-footer">
          <span>© Tilak Government Arts College</span>
        </div>
      </div>
    </div>
  );
};

const FloatingButtons = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        :root {
          --gold: #e5be10;
          --gold-deep: #c9a800;
          --brown: #753300;
          --brown-light: #9a4a10;
          --cream: #fdf8ee;
          --cream-dark: #f5edcf;
          --text-on-gold: #3a1a00;
        }

        /* ── OVERLAY ── */
        .ql-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }
        .ql-overlay--open {
          backdrop-filter: blur(8px);
        }
        .ql-overlay--close {
          background: rgba(60, 20, 0, 0);
          backdrop-filter: blur(0px);
          pointer-events: none;
        }

        /* ── PANEL ── */
        .ql-panel {
          width: 100%;
          max-width: 540px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(117, 51, 0, 0.35),
            0 0 0 1px rgba(229, 190, 16, 0.3);
          transform-origin: center bottom;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
          max-height: 90vh;
          overflow-y: auto;
        }
        .ql-panel--open {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        .ql-panel--close {
          transform: scale(0.88) translateY(40px);
          opacity: 0;
        }

        /* ── HEADER ── */
        .ql-header {
          background: linear-gradient(135deg, var(--brown) 0%, var(--brown-light) 60%, #b36000 100%);
          padding: 20px 24px 18px;
          overflow: hidden;
          position: sticky;
          top: 0;
          z-index: 2;
        }
        .ql-header::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 120px; height: 120px;
          background: rgba(229, 190, 16, 0.12);
          border-radius: 50%;
        }
        .ql-header::after {
          content: '';
          position: absolute;
          bottom: -20px; left: 40px;
          width: 80px; height: 80px;
          background: rgba(229, 190, 16, 0.08);
          border-radius: 50%;
        }
        .ql-header-inner {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          z-index: 1;
        }
        .ql-header-ornament {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, var(--gold), var(--gold-deep));
          border-radius: 12px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(229,190,16,0.4);
          position: relative;
        }
        .ql-header-ornament::before {
          content: '✦';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--brown);
        }
        .ql-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.03em;
          margin: 0 0 2px;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .ql-subtitle {
          font-size: 11px;
          color: rgba(253, 248, 238, 0.7);
          margin: 0;
          letter-spacing: 0.04em;
        }
        .ql-close {
          margin-left: auto;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(229,190,16,0.4);
          background: rgba(229,190,16,0.1);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .ql-close:hover {
          background: rgba(229,190,16,0.25);
          transform: rotate(90deg);
        }

        /* ── GRID ── */
        .ql-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
        }

        /* ── ITEM ── */
        .ql-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 18px 10px 14px;
          background: #ffffff;
          text-decoration: none;
          position: relative;
          transition: background 0.2s, transform 0.2s;
          animation: ql-pop-in 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
          cursor: pointer;
          overflow: hidden;
        }
        @keyframes ql-pop-in {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ql-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(229,190,16,0.15), rgba(117,51,0,0.06));
          opacity: 0;
          transition: opacity 0.2s;
        }
        .ql-item:hover {
          background: var(--cream-dark);
          transform: translateY(-2px);
        }
        .ql-item:hover::before { opacity: 1; }
        .ql-item-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #fff8e0, #fdefc0);
          border: 1.5px solid rgba(229,190,16,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brown);
          box-shadow: 0 2px 8px rgba(117,51,0,0.12);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ql-item:hover .ql-item-icon {
          box-shadow: 0 6px 18px rgba(229,190,16,0.35);
          transform: scale(1.08);
        }
        .ql-item-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--brown);
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.02em;
        }
        .ql-item-arrow {
          color: var(--gold-deep);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ql-item:hover .ql-item-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── FOOTER ── */
        .ql-footer {
          background: linear-gradient(90deg, rgba(117,51,0,0.06), rgba(229,190,16,0.08), rgba(117,51,0,0.06));
          border-top: 1px solid rgba(229,190,16,0.2);
          padding: 10px 24px;
          text-align: center;
          font-size: 10px;
          color: rgba(117,51,0,0.5);
          letter-spacing: 0.05em;
        }

        /* ── VERTICAL PILL TRIGGER BUTTON ── */
        .ql-trigger-btn {
          position: fixed;
          bottom: 50%;
          right: 0;
          transform: translateY(50%);
          z-index: 40;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .ql-trigger-core {
          position: relative;
          width: auto;
          height: auto;
          border-radius: 12px 0 0 12px;
          background: linear-gradient(180deg, var(--brown) 0%, var(--brown-light) 55%, #9a4500 100%);
          border: 2px solid var(--gold);
          border-right: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          cursor: pointer;
          box-shadow: -4px 0 20px rgba(117,51,0,0.45), inset 0 1px 0 rgba(229,190,16,0.2);
          padding: 22px 11px;
          transition: padding 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .ql-trigger-core:hover {
          padding: 22px 15px;
          box-shadow: -8px 0 28px rgba(117,51,0,0.6), 0 0 0 2px rgba(229,190,16,0.3), inset 0 1px 0 rgba(229,190,16,0.3);
          background: linear-gradient(180deg, var(--brown-light) 0%, #b36000 55%, var(--brown) 100%);
        }

        .ql-trigger-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--gold);
          white-space: nowrap;
          font-family: Georgia, 'Times New Roman', serif;
          text-transform: uppercase;
          /* rotate so text reads bottom → top */
          transform: rotate(180deg);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ql-trigger-label-dot {
          width: 5px;
          height: 5px;
          background: var(--gold);
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* Gold shimmer line on the pill */
        .ql-trigger-core::before {
          content: '';
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 30px;
          background: linear-gradient(180deg, transparent, rgba(229,190,16,0.5), transparent);
          border-radius: 2px;
          pointer-events: none;
        }

        /* ── ENQUIRY MODAL ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(60,20,0,0.65);
          backdrop-filter: blur(10px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.3s ease;
        }
        .modal-box {
          position: relative;
          width: 100%;
          max-width: 800px;
          animation: scaleIn 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .modal-close-btn {
          position: absolute;
          top: -16px;
          right: -16px;
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--brown), var(--brown-light));
          border: 2.5px solid var(--gold);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(117,51,0,0.4);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .modal-close-btn:hover { transform: rotate(90deg) scale(1.1); }
        .modal-content {
          max-height: 88vh;
          overflow-y: auto;
          border-radius: 20px;
          box-shadow: 0 32px 80px rgba(117,51,0,0.4), 0 0 0 1.5px rgba(229,190,16,0.25);
        }

        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      {/* ── VERTICAL PILL FLOATING TRIGGER BUTTON ── */}
      <div className="ql-trigger-btn">
        <div
          className="ql-trigger-core"
          onClick={() => setIsMenuOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(true)}
          aria-label="Open Quick Links"
        >
          <span className="ql-trigger-label">
            <span className="ql-trigger-label-dot" />
            Quick Links
            <span className="ql-trigger-label-dot" />
          </span>
        </div>
      </div>

      {/* ── QUICK LINKS POPUP ── */}
      <QuickLinksPopup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* ── ENQUIRY MODAL ── */}
      {isEnquiryOpen && (
        <div className="modal-overlay" onClick={() => setIsEnquiryOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsEnquiryOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="modal-content">
              <AdmissionEnquiry onClose={() => setIsEnquiryOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;