import './portfolio.scss'
import Item from "../item/Item"
import { items } from '../../portfolio'



export default function Portfolio({portfolioItems}) {


    return (
        <div id="portfolio" className="portfolio">
            <header>
                <h1 className='title'>Portfolio</h1>
                <h2>Check out some of the works I've done in the past</h2>
            </header>
            <section id="items" >
                {items.map(item => (
                        <Item key={item.id} img={item.img} title={item.title} tech= {item.tech} source={item.source} link={item.link}/>
                ))}
                <div className='twotimes'> <p>And soon, more projects will be added : web applications, designs, images ... !</p></div>
            </section>
            
        </div>
    )
}
