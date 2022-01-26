import React, { useState } from 'react'
import BySwiper from '../components/Swiper'
import {AiOutlineClose} from 'react-icons/ai'

import '../styles/jobintervyu.css'
function JobIntervyuSection() {
    const [galeryCardVizible, setGaleryCardVizible] = useState(false)
    const [galerys, setGalerys] = useState('')
    return (
        <section className="job_intervyu">
            <div className="galerys" style={{display: galeryCardVizible ? 'block' : 'none'}}>
                <div className="container">
                    <div className="galerys_wrapper">
                        <div className="galerys_wrapper_header">
                            <div className="galerys_wrapper_header_icon" onClick={()=> setGaleryCardVizible(false)}>
                                <AiOutlineClose size="40px" color="#fff"  />
                            </div>
                        </div>
                        <div className="galerys_wrapper_body"> 
                        {
                            galerys && galerys.map((galary) => 
                            
                                <div key={galary.id} className="galerys_wrapper_body_card">
                                    <img src={galary.img} alt={galary.art}/>
                                </div>
                            
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="job_intervyu_wrapper d_flex_between">
                    <figure className="job_intervyu_left_card">
                        <BySwiper setGaleryCardVizible={setGaleryCardVizible} setGalerys={setGalerys} />
                    </figure>
                    <figure className="job_intervyu_right_card">
                        <figure className="job_intervyu_right_card_top">
                            <header>Career</header>
                            <h3>Had a Job Interview but No Callback? Here’s What to Do</h3>
                            <p>Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize</p>
                            <button className="btn read_more_btn">Read more <img src="../../Magazine/Arrow.png" alt=""/></button>
                            <div><img src="../../Magazine/image-169.png" alt=""/></div>
                        </figure>
                        <figure className="job_intervyu_right_cart_bottom ">
                            <figcaption>
                                <article>Is Coffee Bad for Bones?</article>
                                <p>Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</p>
                                <h6>Oct 15</h6>
                            </figcaption>
                            <figcaption>
                                <article>What We Manufacture</article>
                                <p>A global history of the factory and the modern world that all should read</p>
                                <h6>Oct 14</h6>
                            </figcaption>
                        </figure>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default JobIntervyuSection
