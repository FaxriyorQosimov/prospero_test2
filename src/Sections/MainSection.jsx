import React, {useState} from 'react'
import {connect} from 'react-redux'

import '../styles/main.css'
function MainSection({recommend}) {
    console.log(recommend);

    return (
        <section className="main">
            <figure className="main_header">
                <div className="container">
                    <header className="main_header_card d_flex_between">
                        <figure className="d_flex_between">
                            <article>25 Songs That Tell Us Where Music Is Going</article>
                            <img src="../../Magazine/image-173.png" alt="image-173"/>
                            <figcaption className="main_header_card_verticle_line"></figcaption>
                        </figure>
                        <figure className="d_flex_between">
                            <article>These Ancient Assassins Eat Their Own Kind</article>
                            <img src="../../Magazine/image-174.png" alt="image-174"/>
                            <figcaption className="main_header_card_verticle_line"></figcaption>
                        </figure>
                        <figure className="d_flex_between">
                            <article>How Do You Teach People to Love Difficult Music?</article>
                            <img src="../../Magazine/image-175.png" alt="image-175"/>
                            <figcaption className="main_header_card_verticle_line"></figcaption>
                        </figure>
                        <figure className="d_flex_between">
                            <article>International Soccer’s Man of Mystery</article>
                            <img src="../../Magazine/image-176.png" alt="image-176"/>
                        </figure>
                    </header>
                    <main>
                        <div className="main_aside_card">
                            <aside className="main_aside_card_left">
                                <figure className="main_aside_card_left_user d_flex align_center">
                                    <img src="../../Magazine/image-190.png" alt="image-190"/>
                                    <figure>
                                        <figcaption className="main_aside_card_left_user_name">By Benjamin Turner</figcaption>
                                        <figcaption className="main_aside_card_left_item">Traveler</figcaption>
                                    </figure>
                                </figure>
                                <article>DESTINATIONS</article>
                                <h1>In Southeast England, White <br/> Cliffs and Fish</h1>
                                <figure className="d_flex main_aside_card_left_play">
                                    <button className="read_more_btn btn">
                                        <article>Read more</article>
                                        <img src="../../Magazine/Arrow.png" alt="Arrow"/>
                                    </button>
                                    <figure className="d_flex main_card_left_play" >
                                        <img src="../../Magazine/Play.png" alt="Play"/>
                                        <figure>
                                            <figcaption>The chalk cliff of Beachy Head</figcaption>
                                            <article className="main_aside_card_left_item">18:05</article>
                                        </figure>
                                    </figure>
                                </figure>
                            </aside>
                            <aside className="main_aside_card_right">
                                <article>recommended for you</article>
                                {
                                    recommend.map(rec => 
                                        <figure key={rec.id} className={rec.active ? 'recommend_active' : ''}>
                                            <figcaption className={`recommend_title ${rec.name}`}>{rec.name}</figcaption>
                                            <figcaption className="recommend_content">
                                                {rec.title}
                                            <img src={rec.img && rec.img} />
                                            </figcaption>
                                            <figcaption className="recommend_tangle recommend_active"></figcaption>
                                        </figure>
                                        )
                                }
                            </aside>
                        </div>
                    </main>
                    <footer></footer>
                </div>
            </figure>
            <figure className="main_middle">
                <div className="container">
                    <main className="d_flex between">
                        <figure className="main_middle_left">
                            <figure className="main_middle_left_top_card">
                                <figure className="d_flex">
                                    <figcaption className="main_middle_left_top_card_left">
                                        <header>CARS</header>
                                        <article>The joy of replicas: A $ 5 million car for $ 50,000</article>
                                        <h6>The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</h6>
                                    </figcaption>
                                    <img src="../../Magazine/image-188.png" alt="image-188"/>
                                </figure>
                                <footer className="d_flex_between">
                                    <figure className="d_flex_between ">
                                        <img src="../../Magazine/image-189.png" alt="image-189"/>
                                        <article>Jessica Miller: </article>
                                        <h6>Even as the ride-hailing service's future remem...</h6>
                                    </figure>
                                    <figure className="d_flex_between">
                                        <img src="../../Magazine/Comment.png" alt=""/>&nbsp;
                                        <h6 className="comment_count">342</h6>
                                    </figure>
                                </footer>
                            </figure>
                            <figure className="main_middle_left_bottom_card d_flex_between">
                                <figcaption className="main_middle_left_bottom_card_left">
                                    <div>
                                        <img src="../../Magazine/image-196.png" alt=""/>
                                    </div>
                                    <article>200+ Doomed Cats Saved From Euthanization</article>
                                </figcaption>
                                <figure className="main_middle_left_bottom_card_right">
                                    <figcaption>
                                        <article>Is Coffee for Bones?</article>
                                        <p>Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</p>
                                        <h6>Oct 15</h6>
                                    </figcaption>
                                    <figcaption>
                                        <article>It’s a Stressful World</article>
                                        <p>Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?</p>
                                        <h6>Oct 14</h6>
                                    </figcaption>
                                </figure>
                            </figure>
                        </figure>
                        <figure className="main_middle_right d_flex_between">
                            <figure className="main_middle_right_left">
                                <figcaption className="main_middle_right_left_head_card">
                                    <button>Popular</button>
                                    <article>ART & DESIGN</article>
                                    <p>Invisible ink: the weird world of tattoo removal – in pictures</p>
                                    <figure className="d_align_center">
                                        <img src="../../Magazine/image-189.png" alt="image-189"/>
                                        <figure className="by_sarah_jenkins">
                                            <figcaption>By Sarah Jenkins</figcaption>
                                            <figure className="d_flex_between" >
                                                <figcaption>Sept 26</figcaption>
                                                <figcaption className="d_align_center">
                                                    <img width="16px" src="../../Magazine/Comment.png" alt="Comment"/>
                                                    <article>&nbsp;16</article>
                                                </figcaption>
                                                <figcaption className="d_align_center">
                                                    <img width="14px" src="../../Magazine/Heart.png" alt="Comment"/>
                                                    <article>&nbsp; 832</article>
                                                </figcaption>
                                            </figure>
                                        </figure>
                                    </figure>
                                </figcaption>
                                <figcaption className="main_middle_right_left_footer_card">
                                    <article>What We Manufacture</article>
                                    <p>A global history of the factory and the modern world that all should read</p>
                                    <h6>Oct 14</h6>
                                </figcaption>
                                <figcaption className="main_middle_right_left_footer_card">
                                    <article>A Treat for Lemon Lovers</article>
                                    <p>This tangerine, ginger and chocolate tart has verve, depth and a hint of spice</p>
                                    <h6>Oct 13</h6>
                                </figcaption>
                            </figure>
                            <figure className="main_middle_right_right">
                                <title>columns</title>
                                <figure className="main_middle_right_right_item">
                                    <img src="../../Magazine/Quote.png" alt=""/>
                                    <figcaption>Architecture is the thoughtful making of space</figcaption>
                                    <figure className="d_align_center">
                                        <img src="../../Magazine/image-192.png" alt=""/>
                                        <figcaption>
                                            <article>David Williams</article>
                                            <article>Architect</article>
                                        </figcaption>
                                    </figure>
                                </figure>

                                <figure className="main_middle_right_right_item">
                                    <img src="../../Magazine/Quote.png" alt=""/>
                                    <figcaption>The details are not the details. They make the design.</figcaption>
                                    <figure className="d_align_center">
                                        <img src="../../Magazine/image-193.png" alt=""/>
                                        <figcaption>
                                            <article>Alexandra Green</article>
                                            <article>Interior designer</article>
                                        </figcaption>
                                    </figure>
                                </figure>

                                <figure className="main_middle_right_right_item">
                                    <img src="../../Magazine/Quote.png" alt=""/>
                                    <figcaption>Live life to the fullest, and focus on the positive</figcaption>
                                    <figure className="d_align_center">
                                        <img src="../../Magazine/image-194.png" alt=""/>
                                        <figcaption>
                                            <article>Olivia Thompson</article>
                                            <article>Coacher</article>
                                        </figcaption>
                                    </figure>
                                </figure>
                                <footer>Read more</footer>
                            </figure>
                        </figure>
                    </main>
                </div>
            </figure>
        </section>
    )
}

export default connect(({recommend}) => ({recommend}))(MainSection)
