import './intro.scss'
import elise from '../../assets/img/intro/elise.svg'
import name from '../../assets/img/intro/name.svg'
import webdev from '../../assets/img/intro/webdev.svg'
import portfolio from '../../assets/img/intro/portfolio.svg'

import {Link} from "react-router-dom";

export default function Intro() {
    return (
        <div id="intro" className="intro">
            <div className="home">
                <div className="home-left">
                        <div className="imgContainer">
                            <img src={elise} alt="Okay, this is a much better looking version of myself." />
                        </div>
                </div>
                <main className="home-right">
                    <div className="home-right-container">
                    <h2>Hey ! I'm</h2>
                    <img src={name} className="main-name" alt="Ohlala, isn't it a fancy name." />
                    <h3> <u>Front-End</u>  
                    <span> Web Developer</span></h3>
                    </div>
                </main>
            </div>
            <div className="intro-quick">
                <section className="intro-about">
                    <h2>I am a
                        <img src={webdev} className="" alt="" />
                    </h2>
                    <p>
                        <u>TL;DR :</u> 
                         I'm a woman, I'm <span>curious</span>, I love to <span>create</span> things, I love pizza & beer, I love retro stuff (music, fashion, etc...), I wrote my first words at 2 years old on the family Windows 95 computer. But most importantly, I love to <span>code</span>.
                    </p>
                    <div className="intro-about-cta">
                            Want to know more about me ?
                            <Link to="/about">
                                <button>Click here</button>
                            </Link>
                            
                    </div>
                </section>
                <section className="intro-portfolio">
                    <h2>Check out my
                    <img src={portfolio} className="" alt="" />
                    </h2>
                    <p>Since I first wrote my first line of code, I've realised some projects that made me learn new technologies,made me express my creativity and made me want to do more. From little games, to website for associations, I like my projects to be as diverse as possible.</p>
                    <div className="intro-portfolio-cta">
                            Want to see some stuff I did ?
                            <Link to="/portfolio">
                                <button>Click here</button>
                            </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
