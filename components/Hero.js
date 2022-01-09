import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Hero() {
    return (
        <Carousel autoPlay dynamicHeight infiniteLoop showThumbs={false} swipeable interval={5000}>
            <div className='sliderImg tacoTuesdayImg'>
                <div />
                <div className='sliderText'>
                    <h2>Taco Tuesday</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eligendi fugiat doloremque enim.</p>
                    <div>
                        {new Date().getDay() === 2 &&
                            <a href="/order" target="_blank" rel='noreferrer'>
                                Order Now
                            </a>}
                        <a href="/images/menu.pdf" target="_blank" rel='noreferrer'>View Menu</a>
                    </div>
                </div>
            </div>
            <div className='sliderImg sundayBrunchImg'>
                <div />
                <div className='sliderText'>
                    <h2>Sunday Brunch</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eligendi fugiat doloremque enim.</p>
                    <div>
                        {new Date().getDay() === 0 &&
                            <a href="/order" target="_blank" rel='noreferrer'>
                                Order Now
                            </a>}
                        <a href="/images/menu.pdf" target="_blank" rel='noreferrer'>View Menu</a>
                    </div>
                </div>
            </div>
            <div className='sliderImg happyHourImg'>
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
            </div>
        </Carousel >
    )
}
