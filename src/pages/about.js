import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div className="eyecatch">
      <figure>
        
      </figure>
    </div>

    <article className="content">
      <div classNaame="info">
        <h1 className="bar">私について</h1>

        <aside className="info">
          <div className="subtitle">
            <i className="fas fa-utensils" />
            about myself
          </div>
        </aside>

        <div className="postbody">
          <p>私は文系の大学に通う大学4年生です。大学では経営学を学んでいます。プログラミングを始めたのは2020年の4月からで、3ヶ月プログラミングスクールに通いました。
            その後はインターンシップで開発の経験をさせていただいています。</p>
            <h2><i className="fas fa-check-square" />趣味</h2>
            <p>幅広く趣味を楽しんでいます。</p>

            <ul>
              <li>ダーツ</li>
              <li>ランニング＆ウォーキング</li>
              <li>読書</li>
              <li>海外旅行</li>
              <li>サウナ</li>
              <li>御朱印巡り</li>
            </ul>
            <h2><i className="fas fa-check-square" />アルバイトの経験</h2>
            <p>さまざまな業務を体験できる良い機会と考え、たくさんのバイトをしました。</p>
            <ul>
              <li>コンビニ</li>
              <li>ファミレス</li>
              <li>引っ越し</li>
              <li>MBAセミナーのTA</li>
              <li>塾講師</li>
              <li>書店員</li>
              <li>派遣</li>
              <li>工場のピッキング業務</li>
              <li>居酒屋</li>
              <li>動画編集</li>
              <li>インフラ系のインターンシップ</li>
              <li>アプリ開発インターンシップ</li>
              <li>データマーケティングのインターンシップ</li>
            </ul>
        </div>
      </div>
    </article>
    
  </Layout>
)
