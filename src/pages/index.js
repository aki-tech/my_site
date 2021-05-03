import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
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
                  <li><a href="https://adrian-blog.com/">BLOG</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="hero">
            <figure>
              <Img
              fluid={data.hero.childImageSharp.fluid} alt=""
              style={{ height: "100%" }}
              />
            </figure>
            <div className="catch">
              <h1>私のポートフォリオサイトへようこそ<br />楽しんでいってくださいね</h1>
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
                    <img src="images/ruby.jpg" alt="" />
                  </figure>
                  <h3>Ruby</h3>
                  <p>一番使用している言語</p>
                  <p>メインで使用している言語です。<br />約一年ほど使用しています。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/rails.jpg" alt="" />
                  </figure>
                  <h3>Ruby On Rails</h3>
                  <p>一番使用しているフレームワーク</p>
                  <p>Railsも一年ほど使用しています。<br />インターン先で使用しているのもRailsです。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/react.jpg" alt="" />
                  </figure>
                  <h3>React Next.js</h3>
                  <p>現在学習中の言語です。</p>
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
                  <p>チーム開発の経験あり</p>
                  <p>プログラミングスクール、インターンで<br />GitHubを使用し、開発を行いました。</p>
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
          <section className="food">
            <div className="container">
              <div className="details">
                <div className="detail">
                  <figure>
                    <img src="images/gatsby.jpg" alt="" />
                  </figure>
                  <h3>Gatsby.js</h3>
                  <p>このサイトはGatsby.jsで作っています。</p>
                  <p>Reactの学習もかねて<br />Gatsby.jsでサイトを作りました。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/tail.jpg" alt="" />
                  </figure>
                  <h3>Tailwind CSS</h3>
                  <p>現在学習中です。</p>
                  <p>React、Next.js,Firebaseと共に<br />アプリ開発中です。</p>
                </div>
                <div className="detail">
                  <figure>
                    <img src="images/aws.jpg" alt="" />
                  </figure>
                  <h3>AWS</h3>
                  <p>学習中</p>
                  <p>AWSソリューションアーキテクトの勉強中です。<br />EC2,S3などは触ったことがあります。</p>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="container">
              <div className="site">
                <a href="base-index.html">
                  <img src="images/logo.svg" alt="ESSENTIALS" />
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

export const query = graphql`
query MyQuery {
  hero: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`