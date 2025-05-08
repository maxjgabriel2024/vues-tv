export default function Custom404() {
  return (
    <div style={{ backgroundColor: '#0A0F1D', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px' }}>404</h1>
      <p>Oops! This page doesn't exist.</p>
      <a href="/" style={{ marginTop: '20px', color: '#3B82F6', textDecoration: 'underline' }}>
        Go Home
      </a>
    </div>
  );
}
