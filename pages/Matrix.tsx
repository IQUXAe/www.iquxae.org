import React from 'react';
import { Link } from 'react-router-dom';

const Matrix: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Our Matrix Server</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Secure, decentralized communication for everyone</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Join Our Community</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            We run a private Matrix homeserver for our community. Registration is by invitation to keep things cozy and secure for everyone.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '30px' }}>
            Want to join us? Drop us an email at <a href="mailto:iquxae@proton.me">iquxae@proton.me</a> with your desired username!
          </p>
          <Link to="/matrix/guide" className="btn">Registration Guide</Link>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Our Web Clients</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>Element Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Full-featured Matrix client with everything you need - messaging, voice calls, video calls, and more!
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">Launch Element</a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>QuikxChat Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Our own lightweight and blazing-fast Matrix messenger built with love.
              </p>
              <a href="https://quikxchat.iquxae.org/app" className="btn" target="_blank" rel="noopener noreferrer">Launch QuikxChat</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Why We Love Matrix</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>End-to-End Encryption</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
                Your conversations are yours alone. All messages are encrypted on your device - we can't read them, and neither can anyone else!
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>Federation</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
                Our server connects with the global Matrix network, so you can chat with friends on any Matrix server worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Matrix;
