"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      color: '#fff',
      margin: 0,
    }}>
      <div style={{
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      }}>
        <h1 style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          color: '#ff6f61',
          margin: 0,
        }}>404</h1>
        <h5 style={{
          margin: '1rem 0',
          color: '#333',
        }}>Oops! Page not found</h5>
        <p style={{
          margin: '0 0 2rem 0',
          color: '#666',
        }}>The page you are looking for might have been moved or deleted.</p>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: '0.5rem 2rem',
            fontSize: '1rem',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#ff6f61',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff4c4c'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6f61'}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
