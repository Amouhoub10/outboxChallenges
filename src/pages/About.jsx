import React from 'react';
import goalImage from '../assets/challenge1_2/goal.png';

const About = () => {
  return (
    <div className="about-wrapper" style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      color: '#1a1a1a',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '80px 24px',
      lineHeight: '1.6'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '40px',
          color: '#000000',
          letterSpacing: '-0.02em'
        }}>
          Project overview :
        </h1>

        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Introduction :</h2>
          <p style={{ marginBottom: '16px' }}>
            Hello, my name is <span style={{ fontWeight: '600' }}>Aberrahmane Mouhoub</span>. This page presents the results of the frontend test.
          </p>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Contact :</p>
            <a href="https://wa.me/212606553035" style={{ color: '#1a1a1a', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>Whatsapp : +212 6 06 55 30 35 </a>
            <a href="mailto:mouhoubabderrahmane2005@gmail.com" style={{ color: '#1a1a1a', textDecoration: 'none', display: 'block' }}>Email : mouhoubabderrahmane2005@gmail.com</a>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontWeight: '600', marginBottom: '4px' }}>Repository :</p>
            <a href="https://github.com/Amouhoub10/outboxChallenges" style={{ color: '#1a1a1a', textDecoration: 'none' }}>github.com/Amouhoub10/outboxChallenges</a>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>You can check the results by <strong>clicking on the bar below</strong>.</p>
        </section>

        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Challenge 1: Design remaking</h2>
          <div style={{ marginBottom: '32px' }}>
            <p style={{ marginBottom: '16px' }}>Here is the reference design I had to remake :</p>
            <img src={goalImage} alt="design" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 0px 10px rgba(0,0,0,1)' }} />
          </div>
          <p style={{ marginBottom: '16px' }}>The objective was to accurately reproduce the provided landing page.</p>
          <p style={{ fontWeight: '600', marginBottom: '12px' }}>I focused on :</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '12px' }}>Respecting layout, spacing, and typography</li>
            <li style={{ marginBottom: '12px' }}>Matching colors and visual hierarchy</li>
            <li style={{ marginBottom: '12px' }}>Ensuring responsiveness across devices</li>
          </ul>
        </section>

        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Challenge 2: UX/UI improvement</h2>
          <p style={{ marginBottom: '24px' }}>
            The goal was to enhance the original design with a more modern and user-friendly approach.
          </p>
          <p style={{ fontWeight: '600', marginBottom: '12px' }}>Improvements implemented :</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
            <li style={{ marginBottom: '12px' }}>Added smooth animations using Framer Motion</li>
            <li style={{ marginBottom: '12px' }}>Introduced dark/light mode toggle</li>
            <li style={{ marginBottom: '12px' }}>Added language switch (EN/FR)</li>
            <li style={{ marginBottom: '12px' }}>Improved CTA clarity and visibility</li>
            <li style={{ marginBottom: '12px' }}>Redesigned the navigation bar for better usability</li>
          </ul>

          <div style={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
            <p style={{ fontWeight: '600', marginBottom: '16px' }}>Challenges & Solutions :</p>
            <p style={{ marginBottom: '16px' }}>One of the main challenges was the lack of context and assets.</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '12px' }}>No design system or assets were provided</li>
              <li style={{ marginBottom: '12px' }}>Some visual elements had to be recreated or approximated</li>
            </ul>
            <p style={{ fontWeight: '600', marginBottom: '12px' }}>To address this, I :</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
              <li style={{ marginBottom: '12px' }}>Created custom assets aligned with the design</li>
              <li style={{ marginBottom: '12px' }}>Focused on maintaining visual consistency</li>
              <li style={{ marginBottom: '12px' }}>Relied on UX best practices to guide decisions</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Challenge 3: Advanced Modernity</h2>
          <p style={{ marginBottom: '24px' }}>The objective was to design a modern hero section for a business-related platform.</p>
          <p style={{ fontWeight: '600', marginBottom: '12px' }}>Key features :</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '12px' }}>Clean and minimalist layout</li>
            <li style={{ marginBottom: '12px' }}>Strong typography and clear hierarchy</li>
            <li style={{ marginBottom: '12px' }}>Smooth animations using Framer Motion</li>
            <li style={{ marginBottom: '12px' }}>Dark/light mode support</li>
            <li style={{ marginBottom: '12px' }}>Language switch for accessibility</li>
          </ul>
        </section>

        <section style={{ marginTop: '100px', paddingBottom: '40px' }}>
          <p style={{ fontWeight: '600', fontSize: '1.75rem', textAlign: 'center', color: '#000', lineHeight: '1.3' }}>
            I'm looking forward to work with you on<br />more professional projects in the future :)
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
