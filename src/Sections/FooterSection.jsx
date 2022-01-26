import React from 'react'


import '../styles/footer.css'
function FooterSection() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <header>
                        <h1>Subscibe now and get 20% off</h1>
                        <figure className="subscribe ">
                            <input type="text" placeholder="Enter your email"/>
                            <button className="btn">Subscribe</button>
                        </figure>
                        <figure className="d_flex_between">
                            <figcaption className="footer_line footer_line_red"></figcaption>
                            <figcaption className="footer_line footer_line_purple"></figcaption>
                            <figcaption className="footer_line footer_line_blue"></figcaption>
                            <figcaption className="footer_line footer_line_orange"></figcaption>
                            <figcaption className="footer_line footer_line_green"></figcaption>
                            <figcaption className="footer_line footer_line_grayblue"></figcaption>
                        </figure>
                    </header>
                    <main>
                        <figure>
                            <nav className="head_list">News</nav>
                            <nav className="body_list">Nation</nav>
                            <nav className="body_list">World</nav>
                            <nav className="body_list">Politics</nav>
                            <nav className="body_list">Solar Eclipe</nav>
                        </figure>
                        <figure>
                            <nav className="head_list">Arts</nav>
                            <nav className="body_list">Art & Design</nav>
                            <nav className="body_list">Movies</nav>
                            <nav className="body_list">People</nav>
                            <nav className="body_list">Video:Arts</nav>
                            <nav className="body_list">Theater</nav>
                        </figure>                      
                          <figure>
                            <nav className="head_list">Travel</nav>
                            <nav className="body_list">Destinations</nav>
                            <nav className="body_list">Flights</nav>
                            <nav className="body_list">Businness Travel</nav>
                        </figure>                     
                           <figure>
                            <nav className="head_list">Sports</nav>
                            <nav className="body_list">Olympics</nav>
                            <nav className="body_list">Motor Sports</nav>
                            <nav className="body_list">Volleyball</nav>
                            <nav className="body_list">MMA</nav>
                            <nav className="body_list">cycling</nav>
                        </figure>                        
                        <figure>
                            <nav className="head_list">Tech</nav>
                            <nav className="body_list">Tech</nav>
                            <nav className="body_list">Tech Columnists</nav>
                            <nav className="body_list">Tech Reveiws</nav>
                            <nav className="body_list">Talking Tech</nav>
                        </figure>                        
                        <figure>
                            <nav className="head_list">Moneys</nav>
                            <nav className="body_list">Markets</nav>
                            <nav className="body_list">Businness</nav>
                            <nav className="body_list">Personal Finance</nav>
                            <nav className="body_list">Retirement</nav>
                            <nav className="body_list">Careers</nav>
                        </figure>
                    </main>
                    <div className="d_flex_between">
                        <figure className="d_flex_between">
                            <figcaption>UNV</figcaption>
                            <article>contact us</article>
                            <article>work with us</article>
                            <article>advertise</article>
                            <article>your add choise</article>
                        </figure>
                        <div className="socials">
                            <div className="facebook"><img src="../../Magazine/Facebook.png" alt=""/></div>
                            <div className="twitter"><img src="../../Magazine/Twitter.png" alt=""/></div>
                            <div className="youtube"><img src="../../Magazine/YouTube.png" alt=""/></div>
                            <div className="instagram"><img src="../../Magazine/Instagram.png" alt=""/></div>
                        </div>
                    </div>
                    <footer className="d_flex_between">
                        <article>Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was founded in 2015 grown into one of the world's leading fashion companies. </article>
                        <article>© 2019 Universal UI Kit</article>
                    </footer>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
