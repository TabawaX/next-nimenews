import '@styles/homepage.css'
import '@styles/reset.css'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>KAORI - Home</title>
      </Head>
      <div>
        {/* Navigation Bar Section */}
        <nav>
          <div className="nav-logo">
            <h1 className="notranslate">KAORI</h1>
          </div>

          <div className="nav-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Anime Reviews</a></li>
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
            </ul>
          </div>

          <div className="nav-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </nav>

        <div className="container">
          {/* Latest News Section */}
          <section className="latest-news">
            <h2 className="title-section">Latest News</h2>
            <div className="wrapper-latest-news">
              <a href="#" className="news one">
                <div className="image">
                  <img src="./media/bg-image.jpg" alt="" />
                </div>
                <div className="content">
                  <p className="label"><span>KAORI</span> - 11 April 2024</p>
                  <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  <p className="overflow-hd">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores id aliquam dignissimos impedit a. Optio sequi ipsa natus fugit impedit iusto pariatur vero?
                  </p>
                  <p id="submit-btn">read more <span>⟶</span></p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
