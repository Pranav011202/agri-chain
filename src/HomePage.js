import React from 'react';

function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        backgroundColor: '#1c1c1e',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Header Section */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>AgriChain</h1>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="#"
            style={{
              color: 'white',
              margin: '0 15px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '5px', fontSize: '20px' }}>🌐</span> GitHub
          </a>
          <a
            href="#"
            style={{
              color: 'white',
              margin: '0 15px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '5px', fontSize: '20px' }}>🐦</span> Twitter
          </a>
          <a
            href="#"
            style={{
              color: 'white',
              margin: '0 15px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '5px', fontSize: '20px' }}>🔗</span> LinkedIn
          </a>
          <a
            href="#"
            style={{
              color: '#ffc107',
              margin: '0 15px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Login
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h1
          style={{
            fontSize: '48px',
            margin: '40px 0',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          Decentralized Assured Contract Farming
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '30px', opacity: '0.8' }}>
          Let those crops grow
        </p>
        <div>
          <button
            style={{
              backgroundColor: '#ffc107',
              border: 'none',
              padding: '12px 30px',
              fontSize: '18px',
              margin: '0 10px',
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold',
            }}
          >
            Create Contract
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#ffc107',
              border: '2px solid #ffc107',
              padding: '12px 30px',
              fontSize: '18px',
              margin: '0 10px',
              cursor: 'pointer',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            Learn more
          </button>
        </div>
      </main>

      {/* Footer Section */}
      <footer
        style={{
          padding: '20px',
          backgroundColor: '#292929',
          color: 'white',
          fontSize: '14px',
          borderTop: '1px solid #444',
        }}
      >
        © 2024 AgriChain | Empowering Farmers through Blockchain
      </footer>
    </div>
  );
}

export default HomePage;
