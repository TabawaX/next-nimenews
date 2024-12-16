import '@styles/homepage.css'
import '@styles/reset.css'
import Head from 'next/head'
import Header from '@components/Header'

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <title>Kaori - Anime News</title>
      </Head>
      <Header />
      <nav>
        <div className="nav-logo">
          <h1 translate="no">KAORI</h1>
        </div>
        <div className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">Anime Reviews</a></li>
          </ul>
        </div>
        <div className="nav-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>

      <div className="container">
        <section className="hero">
          <a href="#" className="news one">
            <img src="./Media/bg-image.jpg" alt="" />
            <div className="content">
              <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p className="label"><span>KAORI</span> - 29 Nov 2024</p>
            </div>
          </a>
        </section>

        <section className="latest-news">
          <h2 className="title-section">Latest News</h2>
          <a href="#" className="news one">
            <div className="image"><img src="./Media/bg-image.jpg" alt="" /></div>
            <div className="content">
              <p className="label"><span>KAORI</span> - 11 Apr 2024</p>
              <h2 className="title">Lorem ipsum dolor sit amet consectetur.</h2>
              <p id="submit-btn">read more <span>⟶</span></p>
            </div>
          </a>
        </section>

        <section className="must-read">
          <h3 className="title-section">Must Read</h3>
          <a href="#" className="news one">
            <div className="image"><img src="./Media/bg-image.jpg" alt="" /></div>
            <div className="content">
              <h3 className="title">Lorem ipsum dolor sit amet consectetur.</h3>
              <p id="submit-btn">read more <span>⟶</span></p>
            </div>
          </a>
        </section>

        <section className="editors-pick">
          <h4 className="title-section">Editor's Pick</h4>
          <a href="#" className="news one">
            <img src="./Media/bg-image.jpg" alt="" />
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet consectetur.</h4>
              <p id="submit-btn">read more <span>⟶</span></p>
            </div>
          </a>
        </section>

        <section className="season-and-manga">
          <div className="season">
            <h4 className="title-section">This Season</h4>
            <a href="#" className="news one">
              <div className="image"><img src="./Media/bg-image.jpg" alt="" /></div>
              <div className="content">
                <h4 className="title">Lorem ipsum dolor sit amet consectetur.</h4>
                <p id="submit-btn">read more <span>⟶</span></p>
              </div>
            </a>
          </div>
          <div className="manga">
            <h4 className="title-section">Manga</h4>
            <a href="#" className="news one">
              <div className="image"><img src="./Media/bg-image.jpg" alt="" /></div>
              <div className="content">
                <h4 className="title">Lorem ipsum dolor sit amet consectetur.</h4>
                <p id="submit-btn">read more <span>⟶</span></p>
              </div>
            </a>
          </div>
        </section>

        <footer>
          <div className="brand">
            <h6 className="title-section" translate="no">KAORI</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="social-media">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home