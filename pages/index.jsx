import Head from 'next/head'
import Home from '../components/Home/Home';
import { container } from '../styles/home.module.scss';

export default function App() {
  return (
    <div className={container}>
      <Head>
        <title>Focus Time</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <main>
        <Home />
      </main>

      <footer>
        <a
          href="https://github.com/vikramthyagarajan"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>

    </div>
  )
}
