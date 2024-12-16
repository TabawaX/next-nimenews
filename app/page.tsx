// root/pages/index.tsx

import '@styles/homepage.css';
import Head from 'next/head';
import Header from '@components/Header'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Nusantaku - Anime News</title>
        <meta name="description" content="Nusantara Otaku Indonesia - Up to date Anime News" />
      </Head>

      {/* @components/Header */}
      <Header />

      <main className="p-4">
        <p>test news.</p>
      </main>
    </div>
  );
};

export default Home;




