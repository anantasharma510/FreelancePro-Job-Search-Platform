'use client'
import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>

      <Link href="/">
        Go back to Home
      </Link>

      <style jsx>{`
        .not-found-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .go-home {
          font-size: 1.2rem;
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
