'use client';

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '120px 24px' }}>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>Something went wrong.</h1>
        <p style={{ color: '#6B6B7B', marginBottom: 24 }}>
          Please try again, or head back to the homepage.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: '10px 20px',
            borderRadius: 8,
            background: '#0FB6CC',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginRight: 12,
          }}
        >
          Try again
        </button>
        <a href="/" style={{ color: '#0FB6CC' }}>Back to home →</a>
      </body>
    </html>
  );
}
