
import './item.scss'

export default function Item({img, title, tech, source, link}) {


    return (
        <div className="portfolio-item">
            <header>
                <span></span>
                <h3>{title}</h3>
                <div>
                    <span className='green'></span>
                    <span className='yellow'></span>
                    <span className='red'></span>
                </div>
            </header>
            <section id="content">
            <a href={link} target="_blank" rel='noreferrer'>
                <img src={img} alt={title} />
            </a>
                <div id="tech">
                   <p>Technologies used :<span>{tech}</span></p> 
                <p id="link ">See on : <a href={link} target="_blank" rel='noreferrer' className='button'>{source}</a></p>
                </div>
            </section>
            <footer></footer>

        </div>
    )
}
