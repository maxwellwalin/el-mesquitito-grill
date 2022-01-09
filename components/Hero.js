import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Hero() {
    return (
        <Carousel autoPlay dynamicHeight infiniteLoop showThumbs={false} swipeable interval={5000}>
            <div className='sliderImg tacoTuesdayImg'>
                <div />
                <div className='sliderText'>
                    <h2>Taco Tuesday</h2>
                    <p>Stop by for Taco Tuesday! Get any Carne Asada, Carnitas, Pollo, and Al Pastor tacos for $1.99 each!</p>
                    <div>
                        {new Date().getDay() === 2 && <a href="/order"><button>Order Now</button></a>}
                        <a href="/images/menu.pdf">View Menu</a>
                    </div>
                </div>
            </div>
            <div className='sliderImg sundayBrunchImg'>
                <div />
                <div className='sliderText'>
                    <h2>Sunday Brunch</h2>
                    <p>Every Sunday, all breakfast burritos are only $6!</p>
                    <div>
                        {new Date().getDay() === 0 && <a href="/order">Order Now</a>}
                        <a href="/images/menu.pdf">View Menu</a>
                    </div>
                </div>
            </div>
            <div className='sliderImg happyHourImg'>
                <div />
                <div className='sliderText'>
                    <h2>Happy Hour</h2>
                    <p>Every Friday and Saturday blah blah. View our selection of drinks!</p>
                    <div>
                        <a href="/images/menu.pdf">View Menu</a>
                    </div>
                </div>
            </div>
            <div className='sliderImg fourthPromotionImg'>
                <div />
                <div className='sliderText'>
                    <h2>Monday Madness</h2>
                    <p>Stop by for Taco Tuesday! Get any Carne Asada, Carnitas, Pollo, and Al Pastor tacos for $1.99 each!</p>
                    <div>
                        <a href="/order">Order Now</a>
                        <a href="/images/menu.pdf">View Menu</a>
                    </div>
                </div>
            </div>
        </Carousel >
    )
}
