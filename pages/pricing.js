export default function Pricing() {
  return (
    <div style={{ backgroundColor: '#0A0F1D', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>Choose Your Plan</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ backgroundColor: '#1F2937', padding: '20px', borderRadius: '10px' }}>
          <h2>Free</h2>
          <p>Watch with Ads</p>
          <p>$0/month</p>
        </div>
        <div style={{ backgroundColor: '#1F2937', padding: '20px', borderRadius: '10px' }}>
          <h2>Premium</h2>
          <p>Ad-Free & Exclusive Content</p>
          <p>$7.99/month</p>
        </div>
      </div>
    </div>
  );
}
