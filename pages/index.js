export default function Home() {
  return (
    <div style={{ backgroundColor: '#0A0F1D', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to VUES 🎬</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>
        Stream Free. Upgrade for More.
      </p>
      <video width="320" height="240" controls style={{ borderRadius: '10px', marginBottom: '30px' }}>
        <source src="/teaser.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <a href="/pricing" style={{ backgroundColor: '#3B82F6', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px' }}>
          View Pricing
        </a>
        <a href="/signup" style={{ backgroundColor: '#8B5CF6', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px' }}>
          Sign Up Free
        </a>
      </div>
    </div>
  );
}
