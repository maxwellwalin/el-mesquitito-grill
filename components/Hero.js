import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const sliderData = [{
    title: "Taco Tuesday",
    description: "Stop by every Tuesday for $1.75 carne asada, pollo, and carnitas tacos!",
    day: 2,
    imgClass: 'tacoTuesdayImg'
}, {
    title: "Sunday Brunch",
    description: "Stop by on Sunday mornings from 9 A.M. - 11 A.M. for $5 breakfast burritos!",
    day: 0,
    imgClass: 'sundayBrunchImg'
}]

export default function Hero() {
    return (
        <Carousel autoPlay dynamicHeight infiniteLoop showThumbs={ false } swipeable={ false } interval={ 5000 }>
            { sliderData.map(slide => (
                <div className={ `sliderImg ${slide.imgClass}` }>
                    <div />
                    <div className='sliderText'>
                        <h2>{ slide.title }</h2>
                        <p>{ slide.description }</p>
                        <div className='sliderBtns'>
                            { new Date().getDay() === slide.day &&
                                <a href="tel:9496452226" target="_blank" rel='noreferrer'>
                                    Order Now
                                </a> }
                            <a href="/images/menu.pdf" target="_blank" rel='noreferrer'>View Menu</a>
                        </div>
                    </div>
                </div>
            )) }
            {/* <div className='sliderImg happyHourImg'>
                <div />
                <div className='sliderText'>
                    <h2>Happy Hour</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eligendi fugiat doloremque enim.</p>
                    <div>
                        <a href="/images/menu.pdf" target="_blank" rel='noreferrer'>View Menu</a>
                    </div>
                </div>
            </div>
            <div className='sliderImg fourthPromotionImg'>
                <div />
                <div className='sliderText'>
                    <h2>Monday Madness</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eligendi fugiat doloremque enim.</p>
                    <div>
                        <a href="/order" target="_blank" rel='noreferrer'>Order Now</a>
                        <a href="/images/menu.pdf" target="_blank" rel='noreferrer'>View Menu</a>
                    </div>
                </div>
            </div> */}
        </Carousel >
    )
}
