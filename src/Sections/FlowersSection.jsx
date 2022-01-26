import React, { useState } from 'react'
import {connect} from 'react-redux'
import {BsFillBookmarkFill} from 'react-icons/bs';
import {changeBookmark} from '../reducers/Reducer.jsx'


import '../styles/flowrsPage.css'

function FlowersSection({comments, recommended, changeBookmark}) {
    const onClickBookmark = (comment) => {
        
        const changeComments = comments.map(item => {

                if(item.id == comment.id) {
                    item = {...item, bookmarkVizible: !item.bookmarkVizible}
                }

            return item
        }
        )
        changeBookmark(changeComments)
    }
    const [count, setCount] = useState(7)
    return (
        <section className="flowers">
            <header>
                <div className="container">
                    <figure className="flowers_intro">
                        <p>The Big Bloom or «How Flowering <br/>
                            Plants Changed the World» </p>
                        <button className="read_more_btn btn">
                            <article>Read more</article>
                            <img src="../../Magazine/Arrow.png" alt="Arrow"/>
                        </button>
                    </figure>
                </div>
            </header>
            <main className="flowers_main d_flex_between">
                <div className="container">
                    <main className="flowers_main_wrapper d_flex">
                        <aside className="flowers_main_left">
                            {
                                comments.map(comment => 
                                <>
                                    <figure  className="flowers_main_left_items">
                                        <img src={comment.img} alt=""/>
                                        <figure className="flowers_main_left_right_aside">
                                            <header className="d_flex_between">
                                                <h4 className={comment.name}
                                                >{comment.name}</h4>
                                                <div onClick={()=> onClickBookmark(comment)}>
                                                    <BsFillBookmarkFill className={comment.bookmarkVizible ? 'bookmark_red' : 'bookmark_initial'} />
                                                </div>
                                            </header>
                                            <main>
                                                <article>{comment.title}</article>
                                                <p>{comment.body}</p>
                                            </main>
                                            <footer className="d_flex">
                                                <figure>{comment.date}</figure>
                                                <figure className="d_flex">
                                                    <img src="../../Magazine/Comment.png" alt=""/>
                                                    <figcaption>&nbsp;{comment.commentCount}</figcaption>
                                                </figure>
                                                <figure className="d_flex">
                                                    <img className="heart" src="../../Magazine/Heart.svg" alt=""/>
                                                    <figcaption>&nbsp;{comment.likes}</figcaption>
                                                </figure>
                                            </footer>
                                        </figure>
                                    </figure>
                                    <div className={comment.line}></div>
                                </>
                                )
                            }
                        </aside>
                        <aside className="flowers_main_right">
                            <div className="flower_main_card_box">
                            <header>recommended for your</header>
                                <div className="flower_main_card">
                                        {
                                            recommended.map(item => 
                                                <figure key={item.id} className={item.id <= count ? 'd_flex' : 'd_none'}>
                                                    {console.log(item.id)}
                                                    <img src={item.img} alt=""/>
                                                    <figure>
                                                        <figcaption>{item.name}</figcaption>
                                                        <article>{item.title}</article>
                                                        <span>{item.id}</span>
                                                    </figure>
                                                </figure>
                                        )
                                    }
                                </div>
                            </div>
                            <footer className={count == 15 ? 'd_none' : 'd_flex_j_center'} onClick={()=> setCount(count=> count+1)}>Read more</footer>
                        </aside>
                    </main>
                </div>
            </main>
        </section>
    )
}

export default connect(({comments, recommended}) => ({comments, recommended}), {changeBookmark})(FlowersSection)
