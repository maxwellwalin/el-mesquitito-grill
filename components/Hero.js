import styled from 'styled-components'

export default function Hero() {
    console.log(new Date().getDay())

    return (
        <div id='slider'>
            <figure>
                <div className='sliderImg tacoTuesdayImg'>
                    <div />
                    <div className='sliderText'>
                        <h2>Taco Tuesday</h2>
                        <p>Stop by for Taco Tuesday! Get any Carne Asada, Carnitas, Pollo, and Al Pastor tacos for $1.99 each!</p>
                        <div>
                            {new Date().getDay() === 2 && <button>Order Now</button>}
                            <button>View Menu</button>
                        </div>
                    </div>
                </div>
                <div className='sliderImg sundayBrunchImg'>
                    <div />
                    <div className='sliderText'>
                        <h2>Sunday Brunch</h2>
                        <p>Every Sunday, all breakfast burritos are only $6!</p>
                        <div>
                            {new Date().getDay() === 0 && <button>Order Now</button>}
                            <button>View Menu</button>
                        </div>
                    </div>
                </div>
                <div className='sliderImg happyHourImg'>
                    <div />
                    <div className='sliderText'>
                        <h2>Happy Hour</h2>
                        <p>Every Friday and Saturday blah blah. View our selection of drinks!</p>
                        <div>
                            <button>View Menu</button>
                        </div>
                    </div>
                </div>
                <div className='sliderImg fourthPromotionImg'>
                    <div />
                    <div className='sliderText'>
                        <h2>Taco Tuesday 4</h2>
                        <p>Stop by for Taco Tuesday! Get any Carne Asada, Carnitas, Pollo, and Al Pastor tacos for $1.99 each!</p>
                        <div>
                            <button>Order Now</button>
                            <button>View Menu</button>
                        </div>
                    </div>
                </div>
                <div className='sliderImg tacoTuesdayImg'>
                    <div />
                    <div className='sliderText'>
                        <h2>Taco Tuesday</h2>
                        <p>Stop by for Taco Tuesday! Get any Carne Asada, Carnitas, Pollo, and Al Pastor tacos for $1.99 each!</p>
                        <div>
                            {new Date().getDay() === 2 && <button>Order Now</button>}
                            <button>View Menu</button>
                        </div>
                    </div>
                </div>
            </figure>
        </div>
    )
}

const Slider = styled.div`
    overflow: hidden;
`

const Figure = styled.figure`
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    animation: 20s silder infinite;
`

const SliderImage = styled.img`
    width: 20%;
    float: left;
`

const HeroDiv = styled.div`
    height: 70vh;
    width: inherit;
    background-image: url('https://res.cloudinary.com/dtpgzynwd/image/upload/v1641181014/o_ohnjc2.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
`

{/* <HeroDiv>
            <div />
            <div>
                Taco Tuesday
            </div>
        </HeroDiv> */}