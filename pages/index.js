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
        <div className="wrapper">
          <h1 className="name">
          Catherine J. Seo
          </h1>
          <div className="skyline">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 2625.221 688.421" enable-background="new 0 0 2625.221 688.421" xmlSpace="preserve">
          <path d="M32.989,490.982h30.074v21.556h10.737l3.552-106.163h7.912v-2.099l2.018-2.018v-5.248h2.826v-5.328l2.382-2.382h14.814
            v3.189h4.521v1.776h4.521v3.391h5.005v6.136h8.477l-2.18,117.304h15.339v4.198h7.427l2.422-95.103h1.372v-1.938h2.422v-3.391h5.086
            v-6.62h3.714v-4.198l4.682-1.05v-2.341h13.402v3.068h7.831v4.037h2.826v-9.607h2.503v-16.792h-3.229v-38.267l15.904-2.422h2.18
            v-2.422h4.117v2.987h3.229v-2.987h3.794v1.049h3.229v2.422h17.68v11.545h-3.875v25.673h3.068v19.779h-4.198v44.806h2.018v38.752
            h-3.633v56.997h2.261v5.248h7.104v-3.068h2.745v-17.277h19.699v-5.813h14.855l1.615-67.089l1.372-0.565l0.242-28.337l20.425-2.826
            l66.281,1.695l-0.161,53.364h4.763v5.086h7.75v-9.688h2.341v-3.149h2.745v3.149h5.248v-9.607l1.211-1.938h6.216h17.277v5.005h4.521
            v16.389h8.961c0,0-0.081,6.136,0,6.136c0.081,0,7.024,0,7.024,0v5.409h3.471l1.211-84.204h2.099v-11.948h2.906v-11.948h9.203V382.72
            h3.552v1.453h1.534l0.161-1.938h1.292v1.453h1.211v-1.776h2.099v1.857h0.969v-2.503h14.855v2.826h2.422v-2.664h2.18v2.583h3.391
            v-2.341h1.776v2.341h5.086v-2.261h0.807v2.422h4.602v-2.018h1.453v2.18h9.769v-2.018h2.018v2.422h4.037v-2.261h2.099v2.341h14.532
            v4.279h7.185l1.857-81.297l-4.844-2.583l4.844-1.695v-10.737h-1.211v-19.779h6.862v-2.987h9.123v-15.258H563.2v-3.471h1.13
            c0,0-0.727-81.136-1.049-81.298s-1.938,0-1.938,0v-1.453h3.794v1.372h-1.049l2.26,2.261v76.454h0.969l6.136-12.11l0.888,0.323
            l-4.279,13.563h37.541v1.615h7.024v3.31h-1.372v12.433v35.684h5.571l-1.857,3.471h-2.341l-1.13,2.099v62.406h1.453v20.345h14.774
            l17.761,1.695v8.396h5.167l-1.13,42.465l2.503,0.323L654.347,418l19.295-10.899l3.149,23.493l13.805,0.242l-0.161,3.229
            l-12.433,3.794l1.372,14.29l5.49,0.404l3.956,34.553l1.695-17.035l14.209,6.701l0.323-12.029h4.844v-7.589h7.589v-2.745h6.378
            v-6.297h22.847v8.154h8.396v8.8h7.347v73.144h24.866v-39.236h8.477v-1.695h4.198v8.235h11.625v6.136h3.794v-62.891h21.152v-52.072
            h2.826v-51.104h2.26l1.938-33.181l1.049-0.081l-0.242-3.633h1.211l4.037-40.608l20.99-3.391l60.711,2.341l4.198,43.918l2.503,0.081
            l-0.242,32.858l2.341-0.081l-0.969,51.992l2.583,0.081l-0.727,87.191l6.459,2.422l0.404,6.782l4.925-4.117v-36.33h13.805
            l-0.161,65.474h4.36v-25.915h4.602v3.149h7.992l1.049-36.087l1.292,36.007h6.216v2.583h1.857l0.161-5.49h2.987v30.275h6.862v-7.912
            l4.198,8.558h1.776v12.271h1.938v1.453h1.695v-3.714c0,0,1.695,0.404,1.695,0c0-0.404,0-4.117,0-4.117h4.198v-22.363l5.49,2.422
            v-29.952h7.831l1.13,5.49h4.198v22.605h1.938v-10.737h17.519v-0.969h2.987v-1.292h2.906v2.583h5.248v-2.018h5.086v1.938h14.613
            V478.63c0,0-2.704-5.127,0-7.831h6.782l1.13-20.345v20.022c0,0,2.422,3.31,0.081,8.073l0.081,31.728h3.875v-7.831h24.946v-9.648
            h1.352v-3.936h1.271v3.633l2.059-41.355l1.029,41.476h4.057v9.87h9.446v13.381h5.934v10.596h4.844v-4.117h4.662l1.877-49.711h10.051
            l-0.787,39.115h1.09v-19.497l13.018-12.17h2.785v2.18h2.059l2.422-40.023l0.969,37.298h1.151v-3.391h2.664l3.391-4.178l-1.029,4.238
            l1.393,36.753h2.785v-14.229h4.481v-3.451h2.604v-1.15h1.514v-3.027h2.361v2.604h7.569v-2.119h3.875v2.24h11.383v11.565h3.088v5.51
            h9.022v5.692h32.273v5.147h11.747v4.541h1.938v-9.446h1.211v-2.483h3.027v-5.752h1.635v-2.18h4.662v3.754h4.481v14.532h4.662v-9.87
            h9.082v7.993c0,0,2.604-0.303,2.604,0c0,0.303,0,6.721,0,6.721h1.756V517.26h0.969v-4.057h1.211v-5.51c0,0,2.846,0.061,2.846,0
            c0-0.061,0-3.693,0-3.693h1.635v2.301h3.027l0.242-75.081h14.713v93.428h1.151v11.081h10.657v7.326h1.574v-8.295l11.928-1.938h4.42
            v-57.037h1.09v-18.225l0.666-0.666v-7.145h2.543v-4.541h2.543v-1.998h1.029v-1.514h0.969v-1.453h1.271l1.12-1.12v-2.755h0.757
            v-3.996h0.727v-4.057h0.605v-9.87l0.273-0.272v-2.089h0.999v-4.904h-0.727v-5.994h0.908l0.787-19.981l0.787,25.007l0.515,0.515
            v4.269l0.833,0.833v2.8h1.196v10.051h0.848v4.36v4.723l1.544,1.544h2.331v2.15h2.24v2.059h1.574v1.998v3.512h1.756v8.78h1.816
            v16.772h1.272v29.548h7.387v5.994h1.393v2.301h2.725v-0.969h4.662v-1.877h3.754V497.4h1.15v12.11h0.848h23.796v-13.139h18.225
            v-3.936h20.345l1.453,4.238h6.176v26.521h1.15v2.664h12.049v5.994h4.602v-28.882h10.172v13.2l1.877-1.877l2.089,2.089v4.814h1.604
            V517.2h7.448v-2.059h2.967v2.059h10.112v5.994h1.574v-4.904h4.238v-3.027h1.938v6.176h2.119v4.36h2.422v-3.391h6.176l1.241-1.241
            v-4.814h0.575v-12.17h0.545c0,0,4.42-19.073,4.481-19.255s1.029-16.53,1.029-16.53l1.514,16.348l5.268,19.376v11.868h1.816v29.124
            h1.332v-5.571h1.15v-8.235h4.178v-6.66h8.477v-9.385h20.587v-4.723h2.361v4.723h1.998v-5.026h1.332v-10.959h1.15v-4.904h1.695v4.965
            h1.09v3.693h7.448v33.06h1.453v-10.778h23.614v12.958h5.51v-2.24h7.326v-3.572h2.24v4.541h0.908l-1.271-57.401l1.695,1.695v1.09
            h1.393v-0.908h3.33v-2.24h6.6v3.149h2.301v4.178h1.514v50.074h4.057v14.169h18.225l6.055-10.838h2.483l6.358,13.139l0.061-15.924
            h2.967v-5.873h6.903v-33.12h15.622v44.14h4.481v-4.481h4.662v-39.054h9.264v-2.785h15.501v2.785h-2.301v7.145h2.725v26.521h-2.119
            v28.519h6.903l-1.09-81.923h3.33v-5.268h2.422v-7.205h2.18v-1.272h0.969v-1.938h-1.151v-1.15l5.268-4.238l39.841,0.666l7.932,3.996
            v3.936h2.422v8.598h7.811v17.741h3.936v41.961h1.332v7.266h6.358v-6.963h3.815v-0.848h1.665v-1.332h-1.453v-0.938h1.453v-1.362
            h-1.514v-1.09h1.484v-1.362h-1.544v-1.029h1.635v-1.362h-1.817v-1.06h1.786v-1.453h-1.817v-1.09h1.695v-1.574h-1.786v-0.787h1.756
            v-1.938h-1.877v-1.211h9.536v-6.479h17.923v6.358h17.135v16.015h4.814v9.113h6.176v18.831h3.693v-9.96h-1.635v-20.345h2.452v-6.691
            h2.967v6.57h4.39v-0.696h-1.484v-1.362h1.453v-0.969h-1.574v-1.483h1.484v-1.241h-1.423v-0.878h1.574v-1.483h-1.574v-1.181h1.393
            v-1.332h-1.514v-0.938h1.514v-2.18h-1.272v-1.181h13.714v-3.724h3.149v-0.696h0.938v-1.09h-2.483v0.727h-1.816v-8.386h25.612v-1.241
            h1.272v-1.756h1.877v-0.817h3.421v2.755h2.18v-2.513h5.994v0.908h1.362v1.483h13.109v28.337h2.119v-16.167h1.786v-0.878h1.756v-1.06
            h2.967v1.06h2.271v-0.939h1.241v-9.052h1.574v-0.757h22.524v-1.181h1.604v1.423h1.544v3.663h10.172v-1.514h1.363v1.665h6.509v7.175
            h12.715v-4.874h6.751v-25.34h3.3v-10.626h2.271v-6.509h4.45v-6.025h3.573v-5.359h2.452l-1.483-73.022c0,0,30.154-4.481,74.657-4.117
            v-2.967h17.378l3.028,5.994v127.032h2.725l-1.635-89.734l3.693-0.303v-13.926c0,0,1.938-0.182,1.938,0s0-6.115,0-6.115h4.662v-5.994
            l29.729-19.255l31.062,17.317l0.242,5.813h4.783v8.901h3.209v10.536h4.662v3.693h9.93v-6.115h1.332v-4.481h-1.756v-8.174h4.117
            v-4.783h1.816v-4.481h3.694v-2.664h11.08v2.906h5.51v3.27h7.993v2.361h-2.422c0,0,14.835,4.723,21.253,15.924v4.541h7.266
            l3.451-246.617h8.174v-1.332l-1.453-0.787l2.725-0.908l0.061-1.514h-2.422v-2.059h2.906v-1.635l-2.24-0.727v-0.908h2.059
            l0.878-0.878h7.357l7.75-28.912l1.09-4.723h2.119v-11.383h-2.301v-1.332h1.938v-11.989h-1.938v-2.543h0.787v1.272h1.029v-3.391
            l-1.09-1.09v-6.782h-0.787v-1.453l1.181-1.181V74.403h-1.423v-1.029h1.574V60.477V49.335l-0.424-12.473l1.514,12.534l0.605,10.778
            l0.545,5.389h-0.787v7.629h1.938v12.473l0.666,0.666V87.3h-0.908v10.959h1.574v2.604h-1.696v11.262h2.483v1.816h-2.18v11.081h2.846
            l10.717,32.212h8.114v-2.543h2.604v5.147h-2.361v1.998h2.604v1.756h-2.664v1.695h2.604v1.998h-1.453v1.332l8.901,3.391
            l14.168,211.014h4.42v-3.996h26.581l4.057,127.275h2.725l-1.211-32.212l3.391,0.061l0.484-1.272h7.448v0.727h1.15v-12.958h3.028
            v-14.229h4.42V429.04c0,0,5.268,0.303,5.268,0s0-6.903,0-6.903l11.989-10.657h16.409h20.042l12.655,9.809v6.842h5.873v17.075h6.781
            v2.906h7.992v203.446H32.95C32.95,651.559,32.161,490.154,32.989,490.982z"/>
          </svg>
        </div>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/></svg>
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
          /*padding: 5rem 0;*/
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 30px;
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

        .wrapper {
          /* display: flex;*/
          align-items: center;
          /*background: #72c3ff;*/
          position: relative;
        }

        .name {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          /*background: #72c3ff;
          background: #082F87; */
          padding: 30px;
          /* color: #f0f0f0;*/
          text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 9;
        }

        .skyline {
          position: absolute;
          width: 100%;
          bottom: -20px;
        }

        .skyline svg {
          fill: none;
          stroke-width: 6px;
          margin: auto;
          display: block;
          stroke-dasharray: 12100;
          stroke-dashoffset: 12100;
          animation: dash 10s linear forwards;
          /*stroke: #FFB71A; */
          stroke: #082F87;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
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
          transition: opacity 1s ease-in 5s;
        }

        .typewriter h1 {
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          /* border-right: 0.1em solid orange; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: 0.1em; /* Adjust as needed */
          
          /* animation: typing 2.5s steps(30, end) 0s, blink-caret .75s step-end 10;*/
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

        @media (max-width: 900px) {
          main {
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .name {
            font-size: 2rem;
            padding: 0;
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
