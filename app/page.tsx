import '@styles/reset.css';
import '@styles/wleo.css';
import '@styles/homepage.css';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <title>Nusantaku - Anime News</title>
      </Head>
      <div className="banner">
        <h1 className="banner-title">Yoimiya Adalah Wanita Tercantik Aku Sangat Suka</h1>
      </div>
      <nav>
        <div className="nav-logo">
          <img src="https://raw.githubusercontent.com/TabawaX/waifudb/refs/heads/master/wdb/20250101_153150.png" alt="Logo Nusantaku" />
        </div>
        <div className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>
        <div className="nav-dropdown-menu">
          <input id="check" type="checkbox" />
          <label htmlFor="check" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>
        <div className="nav-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
      <div className="container">
        <section className="latest-news">
          <h2 className="title-section">Latest News</h2>
          <div className="wrapper-latest-news">
            <a href="#" className="news one">
              <div className="image">
                <img src="https://raw.githubusercontent.com/TabawaX/waifudb/refs/heads/master/docs/news/sample_cf89a185dd8173f029a245ecc7b5ef6858e6f51d.jpg" alt="" />
              </div>
              <div className="content">
                <p className="label"><span>nusantaku</span> - 11 April 2024</p>
                <h2 className="title">Titleny.</h2>
                <p className="overflow-hd">Deskripsi</p>
                <p id="submit-btn">read more <span>⟶</span></p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
