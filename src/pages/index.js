import React from "react"

export default () => (
        <div>
          <header className="header">
            <div className="container">
              <div className="site">
                <a href="base-index.html">
                  <img src="images/logo.svg" alt="ESSENTIALS" />
                </a>
              </div>
              <nav className="nav">
                <ul>
                  <li><a href="base-index.html">TOP</a></li>
                  <li><a href="base-about.html">ABOUT</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="hero">
            <figure>
              <img src="images/hero.jpg" alt="" />
            </figure>
            <div className="catch">
              <h1>私のポートフォリオサイトへようこそ<br /> 楽しんでいってくださいね</h1>
              <p>学習開始から1年経ちますがまだまだ未熟です。引き続き努力していきたいと思います。</p>
            </div>
            <div className="wave">
              <img src="images/wave.svg" alt="" />
            </div>
          </section>
          <section className="food">
            <div className="container">
              <h2 className="bar">使用可能技術</h2>
              <div className="details">
                <div className="detail">
                  <figure>
                    <img src="images/fruit.jpg" alt="" />
                  </figure>
                  <h3>Ruby</h3>
                  <p>一番使用している言語</p>
                  <p>メインで使用している言語です。<br />約一年ほど使用しています。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/grain.jpg" alt="" />
                  </figure>
                  <h3>Ruby On Rails</h3>
                  <p>現在学習中の言語です。</p>
                  <p>Railsも一年ほど使用しています。<br />インターン先で使用しているのもRailsです。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/beverage.jpg" alt="" />
                  </figure>
                  <h3>Node.js React</h3>
                  <p>BEVERAGE</p>
                  <p>Reactは現在一番熱を入れて勉強している言語です。<br />その他、Next.jsと TypeScriptも合わせて学習中です。</p>
                </div>
              </div>
            </div>
          </section>
          <section className="food">
            <div className="container">
              <div className="details">
                <div className="detail">
                  <figure>
                    <img src="images/HTMLCSS.jpg" alt="" />
                  </figure>
                  <h3>HTML CSS</h3>
                  <p>HamlやScssなども使用可能です。</p>
                  <p>メインで使用している言語です。<br />約一年ほど使用しています。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/github.jpg" alt="" />
                  </figure>
                  <h3>GitHub</h3>
                  <p>現在学習中の言語です。</p>
                  <p>Railsも一年ほど使用しています。<br />インターン先で使用しているのもRailsです。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/docker.jpg" alt="" />
                  </figure>
                  <h3>Docker</h3>
                  <p>最近使用開始</p>
                  <p>最近個人開発やインターン先で使い始めました。<br />簡単なDockerfileなら記述可能です。</p>
                </div>
              </div>
            </div>
          </section>
          <section className="photo">
            <h2 className="sr-only">Photo</h2>
            <figure>
              <img src="images/berry.jpg" alt="赤く熟したベリー" />
            </figure>
          </section>
          <footer className="footer">
            <div className="container">
              <div className="site">
                <a href="base-index.html">
                  <img src="images/logo-w.svg" alt="ESSENTIALS" />
                  <p>おいしい食材と食事を探求するサイト</p>
                </a>
              </div>
              <ul className="sns">
                <li>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/">
                    <i className="fab fa-facebook-square" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/">
                    <i className="fab fa-instagram" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
)