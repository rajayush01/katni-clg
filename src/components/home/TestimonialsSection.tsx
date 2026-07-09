import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Mr. Ajay Verma',
    role: 'Alumni, Class of 2018',
    image: '',
    quote: 'I am thankful to Tilak College for their training, guidance and moral support. I am looking forward to having a secured and successful career.',
  },
  {
    name: 'Mr. Vijay Singh',
    role: 'Current Student, MBA',
    image: '',
    quote: 'The quality I like most about the department is how fundamentally they have prepared me for my next step in life, regardless of whether I choose employment or graduate studies.',
  },
  {
    name: 'Mr. Nikhil Yadav',
    role: 'Faculty, Computer Science',
    image: '',
    quote: "I'm so grateful to being a part of Tilak College, Katni. It nourished me and opened greater opportunities towards my bright future.",
  },
  {
    name: 'Miss. Shreya Gupta',
    role: 'Faculty, Computer Science',
    image: '',
    quote: "I'm so grateful to being a part of Tilak College. It nourished me and opened greater opportunities towards my bright future.",
  },
];

const getInitials = (name: string) =>
  name.replace(/^(Mr\.|Miss\.|Ms\.|Dr\.)\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

export default function TestimonialsSection() {
  return (
    <section
      style={{
        background: '#fafafa',
        padding: '60px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style>{`
        .tc-card {
          background: #ffffff;
          border: 1.5px solid #eeeeee;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
        }
        .tc-card:hover {
          border-color: rgba(229,190,16,0.45);
          box-shadow: 0 12px 36px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', fontFamily: 'sans-serif' }}>Stories from Our Community</span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.1, margin: '0 0 10px' }}>
            Voices of Excellence
          </h2>
          <p style={{ fontSize: 14, color: '#888888', fontFamily: 'sans-serif', maxWidth: 420, margin: '0 auto', lineHeight: 1.6 }}>
            Hear from our students, alumni, and faculty about their transformative experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="tc-card"
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#e5be10', fontSize: 11 }}>★</span>
                ))}
              </div>

              {/* Big quote mark */}
              <div style={{ fontSize: 36, fontWeight: 800, color: 'rgba(229,190,16,0.35)', lineHeight: 1 }}>"</div>

              {/* Quote */}
              <p style={{ fontSize: 13, color: '#555555', fontFamily: 'sans-serif', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>
                {t.quote}
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #f0f0f0', paddingTop: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#e5be10,#c9a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#1a1a1a', flexShrink: 0, border: '2px solid rgba(229,190,16,0.3)' }}>
                  {getInitials(t.name)}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', fontFamily: 'sans-serif' }}>{t.name}</div>
                  <div style={{ fontSize: 10, color: '#aaaaaa', fontFamily: 'sans-serif' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}