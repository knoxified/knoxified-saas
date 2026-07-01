import { ImageResponse } from 'next/og';

export const alt = 'Knoxified';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          padding: 48,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 32,
              background: '#06b6d4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 88,
              fontWeight: 700,
              boxShadow: '0 0 42px rgba(6, 182, 212, 0.35)',
            }}
          >
            K
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 72, fontWeight: 700 }}>Knoxified</div>
            <div style={{ fontSize: 28, fontWeight: 500, color: '#67e8f9', marginTop: 8 }}>AI Systems & Automation</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
