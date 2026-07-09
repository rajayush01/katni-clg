import React from 'react';
import logo from '../../assets/ignou.png';

const ExternalIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={{ width: 15, height: 15 }}
	>
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
		<polyline points="15 3 21 3 21 9" />
		<line x1="10" y1="14" x2="21" y2="3" />
	</svg>
);

const Ignou = () => {
	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; }

        .ignou-root {
          min-height: 100vh;
          background: linear-gradient(160deg, #fff8ee 0%, #fdf3d8 55%, #fff 100%);
          font-family: 'Source Serif 4', Georgia, serif;
          color: #4a2000;
        }

        /* ── Hero ── */
        .ignou-hero {
          position: relative;
          background: linear-gradient(135deg, #753300 0%, #9a4a10 100%);
          padding: clamp(40px, 8vw, 72px) 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .ignou-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(45deg,rgba(229,190,16,.08) 0,rgba(229,190,16,.08) 1px,transparent 0,transparent 50%);
          background-size: 20px 20px;
          pointer-events: none;
        }
        .ignou-hero::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #e5be10, transparent);
        }
        .ignou-hero-title {
          position: relative; z-index: 1;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 6vw, 48px);
          font-weight: 900;
          color: #e5be10;
          letter-spacing: .04em;
          margin: 0;
          text-shadow: 0 2px 16px rgba(0,0,0,.18);
        }

        /* ── Body ── */
        .ignou-body {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px);
        }

        /* ── Flex layout ── */
        .ignou-flex {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        @media (min-width: 720px) {
          .ignou-flex {
            flex-direction: row;
            align-items: flex-start;
            gap: 48px;
          }
        }

        /* ── Logo card ── */
        .logo-col { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 280px; }
        .logo-frame {
          width: 100%; aspect-ratio: 4/3;
          border-radius: 18px;
          border: 1.5px solid rgba(229,190,16,.30);
          background: #fdf8ee;
          display: flex; align-items: center; justify-content: center;
          padding: 10px;
          box-shadow: 0 4px 24px rgba(117,51,0,.10);
          overflow: hidden;
        }
        .logo-frame img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }
        .logo-fallback {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #753300, #9a4a10);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .logo-fallback-text { font-family:'Playfair Display',serif; font-size: 40px; font-weight: 900; color: #e5be10; }
        .logo-meta { text-align: center; }
        .logo-est { font-size: 11px; font-weight: 700; color: #753300; text-transform: uppercase; letter-spacing: .18em; margin: 0 0 3px; }
        .logo-loc { font-size: 12px; color: #b08060; margin: 0; }

        /* ── Text col ── */
        .text-col { flex: 1; min-width: 0; }

        .section-label {
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .section-label-bar {
          width: 4px; height: 28px; border-radius: 4px; flex-shrink: 0;
          background: linear-gradient(180deg, #753300, #e5be10);
        }
        .section-label h2 {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(15px, 2.5vw, 19px);
          font-weight: 700;
          color: #3a1a00;
        }

        .ignou-para {
          font-size: clamp(13.5px, 1.8vw, 15px);
          line-height: 1.78;
          color: #4a2000;
          margin: 0 0 16px;
        }
        .ignou-para:last-of-type { margin-bottom: 24px; }

        /* ── Stat pills ── */
        .stat-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .stat-pill {
          display: flex; flex-direction: column;
          padding: 10px 16px;
          background: #fdf8ee;
          border: 1.5px solid rgba(229,190,16,.28);
          border-radius: 14px;
        }
        .stat-pill-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: .12em;
          color: #b08060; margin: 0 0 2px;
        }
        .stat-pill-value {
          font-size: 13px; font-weight: 700;
          color: #753300; margin: 0;
          font-family: 'Playfair Display', serif;
        }

        /* ── Gold rule ── */
        .gold-rule {
          border: none; height: 2px; margin: 36px 0 0;
          background: linear-gradient(90deg, transparent, #753300 25%, #e5be10 50%, #753300 75%, transparent);
        }

        /* ── Collaboration strip ── */
        .collab-card {
          background: #fdf8ee;
          border: 1.5px solid rgba(229,190,16,.28);
          border-radius: 18px;
          padding: 24px;
          margin-top: 28px;
        }
        .collab-heading {
          font-size: 10.5px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .18em; color: #b08060; margin: 0 0 16px;
        }
        .collab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 520px) { .collab-grid { grid-template-columns: repeat(3,1fr); } }

        .collab-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 12px 14px;
          background: rgba(255,248,238,.9);
          border: 1px solid rgba(229,190,16,.22);
          border-radius: 12px;
        }
        .collab-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px;
          background: linear-gradient(135deg, #753300, #e5be10);
        }
        .collab-text { font-size: 13px; color: #4a2000; line-height: 1.45; margin: 0; }

        /* ── Visit button ── */
        .visit-wrap { margin-top: 20px; display: flex; justify-content: flex-end; }
        .visit-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600;
          color: #753300;
          border: 1.5px solid rgba(117,51,0,.35);
          padding: 10px 20px; border-radius: 12px;
          text-decoration: none;
          background: transparent;
          transition: background .18s, color .18s, border-color .18s;
        }
        .visit-btn:hover {
          background: linear-gradient(135deg,#753300,#9a4a10);
          color: #e5be10;
          border-color: transparent;
        }
      `}</style>

			<div className="ignou-root">
				{/* Hero */}
				<div className="ignou-hero">
					<h1 className="ignou-hero-title ">IGNOU</h1>
				</div>

				{/* Body */}
				<div className="ignou-body">
					<div className="ignou-flex">
						{/* Logo */}
						<div className="logo-col">
							<div className="logo-frame">
								<img
									src={logo}
									alt="IGNOU Logo"
									onError={(e) => {
										const target = e.target as HTMLElement;
										target.style.display = 'none';

										const next = target.nextElementSibling as HTMLElement;
										if (next) next.style.display = 'flex';
									}}
								/>
								<div className="logo-fallback" style={{ display: 'none' }}>
									<span className="logo-fallback-text">BU</span>
								</div>
							</div>
							<div className="logo-meta">
								<p className="logo-est">Est. 1991</p>
								<p className="logo-loc">Bhopal, Madhya Pradesh</p>
							</div>
						</div>

						{/* Text */}
						<div className="text-col">
							{/* <div className="section-label">
								<div className="section-label-bar" />
								<h2>Madhya Pradesh Bhoj (Open) University</h2>
							</div> */}

							<p className="ignou-para">
								IGNOU was founded to serve the Indian population by means of distance and open
								education, providing quality higher education opportunities to all segments of society.
								It also aims to encourage, coordinate and set standards for distance and open education
								in India, and to strengthen the human resources of India through education.
							</p>

							<p className="ignou-para">
								Apart from teaching and research, extension and training form the mainstay of its
								academic activities. It also acts as a national resource center, and serves to promote
								and maintain standards of distance education in India. IGNOU hosts the Secretariats of
								the SAARC Consortium on Open and Distance Learning (SACODiL) and the Global Mega
								Universities Network (GMUNET), initially supported by UNESCO.
							</p>

							<div className="stat-pills">
								{[
									{ label: 'Established', value: '1991' },
									{ label: 'Mode', value: 'Open University' },
									{ label: 'Location', value: 'Bhopal, MP' },
									{ label: 'Type', value: 'State University' },
								].map((s) => (
									<div className="stat-pill" key={s.label}>
										<span className="stat-pill-label">{s.label}</span>
										<span className="stat-pill-value">{s.value}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<hr className="gold-rule" />

					{/* Collaborations */}
					<div className="collab-card">
						<p className="collab-heading">Key Collaborations</p>
						<div className="collab-grid">
							{[
								'Rehabilitation Council of India',
								'Indian Institute of Tourism & Travel Management',
								'Indian Institute of Material Management',
							].map((org) => (
								<div className="collab-item" key={org}>
									<div className="collab-dot" />
									<p className="collab-text">{org}</p>
								</div>
							))}
						</div>
					</div>

					{/* Visit link */}
					<div className="visit-wrap">
						<a href="" target="_blank" rel="noopener noreferrer" className="visit-btn">
							Visit Official Website
							<ExternalIcon />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Ignou;
