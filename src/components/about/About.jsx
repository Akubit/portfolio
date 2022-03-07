import './about.scss'

import portrait from '../../assets/img/about/portrait.jpg'


export default function About() {
  return (
    <div className="about">
      <h1 className='title'>About me</h1>
      <main>
        <figure className="about-picture">
          <img src={portrait} alt="Now, a real portrait of me!"/>
          <figcaption>Yes, this is me! ⤴</figcaption>
        </figure> 
        <div className="about-description">
          <h2>Bonjour tout le monde !</h2>
          <h3>I'm <span>Élise</span>, born and raised in Southern France, now living in <span>Barcelona</span>. <br/> I'm a <span>front-end web developer</span>, still junior, but always giving my best to do an amazing job. </h3>
          <p>I'm mostly <u>self taught</u>. I'm a bachelor in <u>web development</u> and <u>web design</u>. But technologies evolve fast, so I continue to <u>learn everyday</u>. Skills can always be learned. That's why I'm <u>not afraid</u> to begin projects with technologies I'm not used to. This is how I like to <u>improve my knowledge</u>.</p>
          <p>I'm mostly <u>coding</u>. I've worked as a web developer for 3 years now. My job consisted mainly on <u>creating features</u> and apply a <u>new graphic chart</u> to a SaaS application developed in AngularJs then migrated to Vue.JS. I also was in charge of <u>maintaining</u> both front-end and back-end feature of a commercial website developped in Laravel and AngularJS. But I also like to <u>create assets</u> with Photoshop and Illustrator, or <u>create designs</u> with Adobe Xd.</p>
          <p>When I'm not coding, I'm probably video games, reading (horror) thriller/sci-fi books, transform fabric with my 1960's sewing machine or even 3d printing stuff. (Still trying to convince myself I should exercise, though...)</p>
          <p><b>My dream job?</b> I'd love to become a web developer in a team that makes me grow and ake me improve everyday, as we always have something to learn. The best also would be to have the convenience to work from wherever I want so that I can go see my family more often. After my father passed away, I've realised how important family can be to help you feel good. <br /> And also with colleagues that love "bad" jokes (the daddy kind of jokes 🤪). </p>
        </div>
      </main>

      <section className="about-information">
        <div className="about-information-work">
          <h2>I worked for ...</h2>
          <ul className="jobs">
            <li>
              <a target="_blank" rel="noreferrer" href="https://bit.ly/3opa9sQ">
                <img src="https://store-images.s-microsoft.com/image/apps.29001.fe247c4a-ea4c-40bb-a6fe-a8878cdd3982.64ce78a4-367f-43b5-a1b0-490f80fc954c.1483cd62-eb80-46bb-9c7f-99bea49787cd" alt="MailInBlack" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://bit.ly/3kTQijn">
                <img src="https://www.also.com/ec/cms5/media/logos_1/545/letsignit-new.png" alt="Letsignit" />
              </a>
            </li>
          </ul>
          <h2>Certifications</h2>
          <ul> <b>FreeCodeCamp:</b>
            <li><a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/certification/eliseb/responsive-web-design">Responsive Web Design</a> - <i>2020</i> </li>
          <li><a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/certification/eliseb/responsive-web-designhttps://www.freecodecamp.org/certification/eliseb/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a> - <i>2021</i></li>
          </ul>
          <ul>
            <b>Scrimba.com :</b>
            <li>The Frontend Developer Career Path  - <u><i>pending</i> 50%</u> </li>
          </ul>
        </div>
        <div className="about-information-skills">
          <h2>Technologies I use</h2>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript ( ES6 )</li>
            <li>ReactJS / VueJS / AngularJS</li>
            <li>PHP ( Laravel )</li>
            <li>Git</li>
            <li>Agile tasks tracking ( Trello / Redmine )</li>
            <li>Adobe Photoshop / Illustrator / Xd</li>
          </ul>
          <h4>Environnements I use </h4>
          <ul>
            <li>Mac</li>
            <li>Linux</li>
          </ul>
        </div>
      </section>
      <p className="about-quote"><q cite="https://www.imdb.com/title/tt1248744/"> <span className="about-quote-first">Y</span>ou miss 100% of the shots you don't take. - Wayne Gretzky </q> - Michael Scott, The Office</p>
      
    </div>
  )
}
