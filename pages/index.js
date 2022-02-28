import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Catherine Junghyun Seo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="typewriter">
          <h1 className="name">
          Catherine J. Seo
          </h1>
        </div>
        <div className={load ? "show": "hide"}>
          <h3 className="location">New York, NY</h3>
          <div className="title">
            Front-End Web Developer
          </div>
        </div>
      </main>

      <footer className={load ? "show": "hide"}>
        <a
          href="https://www.linkedin.com/in/jcatherineseo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="icon" />
        </a>
        <a
          href="https://www.instagram.com/catherineseojunghyun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.jpeg" alt="Instagram" className="icon" />
        </a>
      </footer>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora&family=Poppins:wght@400;600;700&display=swap');
      </style>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .typewriter {
          display: flex;
          align-items: center;
        }

        .name a {
          color: #0070f3;
          text-decoration: none;
        }

        .name a:hover,
        .name a:focus,
        .name a:active {
          text-decoration: underline;
        }

        .name {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .location {
          font-size: 2rem;
          padding-top: 5px;
          margin: 10px 0;
        }

        .name,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1;
          font-size: 1.5rem;
        }

        .title {
          font-size: 1.3rem;
        }

        .hide {
          opacity: 0;
        }

        .show {
          text-align: center;
          opacity: 1;
          transition: opacity 1s ease-in 2.5s;
        }

        .typewriter h1 {
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: 0.1em solid orange; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: 0.1em; /* Adjust as needed */
          
          animation: typing 2.5s steps(30, end) 0s, blink-caret .75s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .icon {
          height: 2em;
        }

        @media (max-width: 600px) {
          .name {
            font-size: 2rem;
          }
          .location {
            font-size: 1.3rem;
          }
          .title {
            font-size: 1rem;
          }
          .icon {
            height: 1.5em;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Lora', serif;
        }

        h1, h2, h3, h4, h5 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
