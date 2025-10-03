export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#047857' }}>Welcome to LocalWeed.com 🌿</h1>
      <p style={{ marginTop: '1rem' }}>
        Find dispensaries, deals, and beginner cannabis guides near you. We’re starting in Illinois and growing fast.
      </p>

      <h2 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Popular Dispensaries</h2>
      <ul style={{ marginTop: '0.5rem' }}>
        <li>🌱 Windy City Cannabis – Justice, IL</li>
        <li>🌱 Curaleaf – Romeoville, IL</li>
        <li>🌱 Verilife – Springfield, IL</li>
      </ul>

      <h2 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Guides</h2>
      <ul>
        <li>📘 Is Weed Legal in Illinois?</li>
        <li>📘 How to Choose Your First Strain</li>
        <li>📘 Edibles vs. Smoking: What You Should Know</li>
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <label htmlFor="email">Subscribe for Local Weed Deals:</label><br />
        <input id="email" type="email" placeholder="you@example.com" style={{ padding: '0.5rem', width: '100%', marginTop: '0.5rem' }} />
        <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#047857', color: 'white', border: 'none' }}>
          Subscribe
        </button>
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.75rem', color: '#888' }}>
        © 2025 LocalWeed.com — Built by <a href="https://weedgro.com" target="_blank" rel="noopener noreferrer">WeedGro</a>
      </footer>
    </div>
  );
}
