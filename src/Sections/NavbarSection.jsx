import React from 'react'
import SearchAppBar from '../components/SearchInput'
import SwipeableTemporaryDrawer from '../components/SwipeableDrawer'


import '../styles/navbar.css'
function NavbarSection() {

    return (
        <section className="navbar">
            <main className="container">
                <header>
                    <figure className="d_flex_between">
                        <figure className="d_flex_between navbar_header_left">
                            <figcaption className="navbar_hamburger_btn">
                                <SwipeableTemporaryDrawer />
                            </figcaption>
                            <figcaption className="navbar_title">Section</figcaption>
                            <figcaption className="navbar_verticale_line"></figcaption>
                            <figcaption className="search_app_bar"><SearchAppBar /></figcaption>
                            <div>
                                <figcaption>Monday, January 1, 2018</figcaption>
                                <figcaption className="d_flex_between">
                                    <img src="../../Magazine/Sun.png" alt="sun"/>
                                    <h6>- 23 °C</h6>
                                </figcaption>
                            </div>
                        </figure>
                        <figure className="d_flex_between navbar_header_right">
                            <img src="../../Magazine/nav-header.png" alt=""/>
                            <figure>
                                <h3>Subscribe Now</h3>
                                <h6>3 month for $19</h6>
                            </figure>
                            <figure className="d_flex_between" style={{cursor: 'pointer'}}>
                                <figcaption className="man_icon">
                                    <img src="../../Magazine/Man.png" alt="Man"/>
                                </figcaption>
                                <figcaption className="navbar_title_signin">Sign In</figcaption>
                            </figure>
                        </figure>
                    </figure>
                    <hr/>
                    <figure className="navbar_main d_flex_between">
                        <figure className="navbar_main_left">
                            <img src="../../Magazine/image-252.png" alt="image-252"/>
                            <figcaption>Boston and New York Bear Brunt</figcaption>
                        </figure>
                        <figure className="navbar_main_center">
                            Universal
                        </figure>
                        <figure className="navbar_main_right">
                            <figcaption>Monday, January 1, 2018</figcaption>
                            <figcaption className="d_flex_between">
                                <img src="../../Magazine/Sun.png" alt="sun"/>
                                <h6>- 23 °C</h6>
                            </figcaption>
                        </figure>
                    </figure>
                </header>
            </main>
            <main className="navbar_navs">
                <main className="container">
                    <figure className="d_flex_between">
                       <nav>NEWS</nav>
                        <nav>OPINION</nav>
                        <nav>SCIENCE</nav>
                        <nav>LIFE</nav>
                        <nav>TRAVEL</nav>
                        <nav>MONEYS</nav>
                        <nav>ART & DESIGN</nav>
                        <nav>SPORTS</nav>
                        <nav>PEOPLE</nav>
                        <nav>HEALTH</nav>
                        <nav>EDUCATION</nav>
                    </figure>
                </main>
            </main>
        </section>
    )
}

export default NavbarSection
