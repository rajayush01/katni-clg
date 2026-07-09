import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/hero1.png';
import img2 from '../../assets/images/hero2.png';
import img3 from '../../assets/images/hero3.png';
import img4 from '../../assets/images/hero4.png';
import img5 from '../../assets/images/hero5.png';

const BROWN = '#753300';
const GOLD = '#e5be10';
const DARK = '#3a1a00';
const TEXT = '#4a2000';
const MUTED = '#b08060';

const paragraphs = [
  'Govt. Tilak P.G. College, Katni (M.P.) was established in August 1958 under the aegis of Tilak Shiksha Society, Katni, comprising of social workers, educationists and some business men of the town. The college is affiliated to Rani Durgawati University Jabalpur and is the leading college of Katni district.',
  'The motto of the college is — "Idquoyogh karmsu kaushallam" (perfection in one\'s work is true yoga). Keeping this motto in mind, the college makes every effort to achieve excellence not only in academic activities but also in all co-curricular activities as well.',
  'The College is spread over an area of 18 acres with separate arts, commerce and science blocks. This is the only college in the Katni district possessing a 400 meter running track.',
];

const stats = [
  { val: '1958', label: 'Established' },
  { val: '18', label: 'Acres Campus' },
  { val: '400m', label: 'Running Track' },
  { val: 'NAAC', label: 'Accredited' },
];

const galleryImages = [
  { url: img1, label: 'Main Building', span: 'large' },
  { url: img2, label: 'Campus Grounds', span: 'small' },
  { url: img3, label: 'Science Block', span: 'small' },
  { url: img4, label: 'Library', span: 'small' },
  { url: img5, label: 'Sports Track', span: 'small' },
];

export default function AboutSection() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 24px 80px',
        fontFamily: 'Georgia, serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .about-gallery-img {
          width:100%; height:100%; object-fit:cover; display:block;
          transition: transform 0.4s ease;
          cursor: pointer;
        }
        .about-gallery-item:hover .about-gallery-img { transform: scale(1.05); }
        .about-gallery-item:hover .about-gallery-overlay { opacity: 1 !important; }
        .about-lightbox { position:fixed; inset:0; background:rgba(30,10,0,0.85); z-index:1000; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(6px); }
        .about-lightbox img { max-width:90vw; max-height:85vh; border-radius:12px; box-shadow:0 30px 80px rgba(0,0,0,0.5); }
        .about-lightbox-close { position:fixed; top:24px; right:28px; background:rgba(255,255,255,0.15); border:1.5px solid rgba(255,255,255,0.3); color:#fff; font-size:22px; width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background 0.2s; }
        .about-lightbox-close:hover { background:rgba(255,255,255,0.25); }

        /* Stats bar: 2x2 on mobile, 4-col on larger */
        .about-stats-bar {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1.5px solid rgba(229,190,16,0.35);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 40px;
        }
        @media (min-width: 540px) {
          .about-stats-bar {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .about-stat-cell {
          padding: 20px 12px;
          text-align: center;
          background: rgba(229,190,16,0.04);
          border-right: 1px solid rgba(229,190,16,0.2);
          border-bottom: 1px solid rgba(229,190,16,0.2);
        }
        .about-stat-cell:nth-child(2n) {
          border-right: none;
        }
        .about-stat-cell:nth-child(3),
        .about-stat-cell:nth-child(4) {
          border-bottom: none;
        }
        @media (min-width: 540px) {
          .about-stat-cell {
            border-right: 1px solid rgba(229,190,16,0.2);
            border-bottom: none;
          }
          .about-stat-cell:nth-child(2n) {
            border-right: 1px solid rgba(229,190,16,0.2);
          }
          .about-stat-cell:last-child {
            border-right: none;
          }
        }

        /* Gallery: desktop 2-row mosaic */
        .about-gallery-desktop {
          display: none;
        }
        @media (min-width: 640px) {
          .about-gallery-desktop {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 200px 160px;
            gap: 10px;
            border-radius: 16px;
            overflow: hidden;
          }
        }

        /* Gallery: mobile — vertical stack */
        .about-gallery-mobile {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          border-radius: 16px;
          overflow: hidden;
        }
        .about-gallery-mobile .about-gallery-item:first-child {
          grid-column: 1 / -1;
          height: 200px;
        }
        .about-gallery-mobile .about-gallery-item {
          height: 130px;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .about-gallery-mobile {
            display: none;
          }
        }
      `}</style>

      {/* Decorative blobs */}
      {/* <div style={{ position:'absolute', width:400, height:400, top:-100, right:-100, borderRadius:'50%', background:'rgba(229,190,16,0.07)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:260, height:260, bottom:-60, left:-80, borderRadius:'50%', background:'rgba(117,51,0,0.05)', pointerEvents:'none' }} /> */}

      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a6040', fontFamily: 'sans-serif' }}>
              Est. August 1958 · Katni, M.P.
            </span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px,5vw,52px)',
              fontWeight: 800,
              background: `linear-gradient(135deg,${BROWN} 0%,#b36000 50%,${GOLD} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
              margin: '0 0 10px',
            }}
          >
            About Our College
          </h2>
          <p style={{ fontSize: 15, color: '#9a6040', maxWidth: 440, margin: '0 auto', lineHeight: 1.6, fontFamily: 'sans-serif', fontWeight: 400 }}>
            A legacy of excellence, character, and community since 1958.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="about-stats-bar">
            {stats.map((s, i) => (
              <div key={s.label} className="about-stat-cell">
                <div style={{ fontSize: 30, fontWeight: 800, color: BROWN, lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 600, color: MUTED, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: 44 }}
        >
          <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, marginBottom: 16, textAlign: 'center' }}>
            ✦ Campus Gallery
          </div>

          {/* Desktop mosaic gallery */}
          <div className="about-gallery-desktop">
            {/* Large featured image */}
            <div
              className="about-gallery-item"
              onClick={() => setLightboxImg(galleryImages[0].url)}
              style={{ gridColumn: '1 / 3', gridRow: '1 / 2', position: 'relative', overflow: 'hidden' }}
            >
              <img src={galleryImages[0].url} alt={galleryImages[0].label} className="about-gallery-img" />
              <div
                className="about-gallery-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(0deg,rgba(58,26,0,0.65) 0%,transparent 60%)',
                  opacity: 0.7,
                  transition: 'opacity 0.3s',
                  display: 'flex', alignItems: 'flex-end', padding: '12px 14px',
                }}
              >
                <span style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {galleryImages[0].label}
                </span>
              </div>
            </div>

            {/* Top right two images */}
            {[1, 2].map((idx) => (
              <div
                key={idx}
                className="about-gallery-item"
                onClick={() => setLightboxImg(galleryImages[idx].url)}
                style={{ gridColumn: `${idx + 2} / ${idx + 3}`, gridRow: '1 / 2', position: 'relative', overflow: 'hidden' }}
              >
                <img src={galleryImages[idx].url} alt={galleryImages[idx].label} className="about-gallery-img" />
                <div
                  className="about-gallery-overlay"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(0deg,rgba(58,26,0,0.65) 0%,transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex', alignItems: 'flex-end', padding: '10px 12px',
                  }}
                >
                  <span style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {galleryImages[idx].label}
                  </span>
                </div>
              </div>
            ))}

            {/* Bottom row */}
            {[3, 4].map((idx, colIdx) => (
              <div
                key={idx}
                className="about-gallery-item"
                onClick={() => setLightboxImg(galleryImages[idx].url)}
                style={{ gridColumn: `${colIdx * 2 + 1} / ${colIdx * 2 + 3}`, gridRow: '2 / 3', position: 'relative', overflow: 'hidden' }}
              >
                <img src={galleryImages[idx].url} alt={galleryImages[idx].label} className="about-gallery-img" />
                <div
                  className="about-gallery-overlay"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(0deg,rgba(58,26,0,0.65) 0%,transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex', alignItems: 'flex-end', padding: '10px 12px',
                  }}
                >
                  <span style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {galleryImages[idx].label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile gallery — 2-col grid, first image full-width */}
          <div className="about-gallery-mobile">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="about-gallery-item"
                onClick={() => setLightboxImg(img.url)}
              >
                <img src={img.url} alt={img.label} className="about-gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div
                  className="about-gallery-overlay"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(0deg,rgba(58,26,0,0.65) 0%,transparent 60%)',
                    opacity: 0.7,
                    transition: 'opacity 0.3s',
                    display: 'flex', alignItems: 'flex-end', padding: '10px 12px',
                  }}
                >
                  <span style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'sans-serif', fontSize: 11, color: MUTED, textAlign: 'center', marginTop: 10, fontStyle: 'italic' }}>
            Click any image to view full size · Replace URLs with actual college photos
          </p>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: BROWN,
              background: 'rgba(229,190,16,0.18)',
              border: '1px solid rgba(229,190,16,0.35)',
              padding: '3px 10px',
              borderRadius: 20,
              marginBottom: 16,
              fontFamily: 'sans-serif',
            }}
          >
            ✦ Est. 1958
          </div>

          <h3 style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, color: DARK, margin: '0 0 6px' }}>
            Govt. Tilak P.G. College, Katni
          </h3>
          <p style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, margin: '0 0 20px' }}>
            Est. August 1958 · Katni, Madhya Pradesh
          </p>
          <div style={{ width: 48, height: 2, background: `linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius: 1, marginBottom: 28 }} />

          {paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: 'sans-serif', fontSize: 15, lineHeight: 1.85, color: TEXT, marginBottom: 18, fontWeight: 400 }}>
              {p}
            </p>
          ))}

          {/* Quote */}
          <div
            style={{
              marginTop: 28,
              borderLeft: '4px solid #e5be10',
              background: 'linear-gradient(135deg,rgba(229,190,16,0.08),rgba(117,51,0,0.04))',
              padding: '20px 22px',
              borderRadius: '0 12px 12px 0',
            }}
          >
            <p style={{ fontSize: 'clamp(13px,2vw,16px)', fontStyle: 'italic', color: DARK, fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
              "Perfection in one's work is true yoga." — The guiding motto of Govt. Tilak P.G. College, inspiring excellence in every endeavour since 1958.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="about-lightbox" onClick={() => setLightboxImg(null)}>
          <button className="about-lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
          <img src={lightboxImg} alt="Gallery preview" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}