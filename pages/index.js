import Head from 'next/head'

export default function Home() {
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
        <div><h3 className="location">New York, NY</h3></div>
        <div className="title">
          Front-End Web Developer
        </div>

        {/* <p className="description">
          web developer 
          
          <br />
          🎵 hummer<br />
          fiction 📘<br />
          <a href="travels">🗺️</a><br />
          interior designer with great taste<br />
          lover of stories<br />
          korean history😍<br />
          exceptionally talented gift giver<br />
          random baker<br />
          fat activist<br />
          🎥<br />
          quote collector <br/>
        </p> */}
        {/* Get started by editing <code>pages/index.js</code> */}
        {/* <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer>
        <a
          href="https://www.linkedin.com/in/jcatherineseo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="logo" />
        </a>
        <a
          href="https://www.instagram.com/catherineseojunghyun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.jpeg" alt="Instagram" className="logo" />
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

        .typewriter h1 {
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: 0.1em solid orange; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: 0.1em; /* Adjust as needed */
          
          animation: typing 2.5s steps(30, end) .5s, blink-caret .75s step-end infinite;
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
