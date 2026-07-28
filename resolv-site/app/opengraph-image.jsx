import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'tResolv — AI Support Employee for Shopify Brands';
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
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0A0A0B',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#FFFFFF', marginBottom: 24 }}>
          <span style={{ color: '#0FB6CC' }}>t</span>
          <span>Resolv</span>
        </div>
        <div style={{ display: 'flex', fontSize: 32, color: '#9898A6', maxWidth: 920 }}>
          Your AI support employee for Shopify brands.
        </div>
      </div>
    ),
    { ...size }
  );
}
