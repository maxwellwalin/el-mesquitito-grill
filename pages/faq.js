import Head from "next/head";

export default function FAQ() {
    return (
        <>
            <Head>
                <title>El Mesquitito Grill | FAQ | Authentic Mexican Food Restaurant in Costa Mesa, California</title>
                <meta name="description" content="Learn more about El Mesquitito Grill, including our food delivery and takeout options, catering opportunities, and daily specials." />
                <meta property="og:description" content="Learn more about El Mesquitito Grill, including our delivery and takeout options, catering opportunities, and daily specials." />
                <meta property="og:url" content="http://www.elmesquititogrill.com/faq" />
            </Head>
            <div className="faqContainer">
                <h1>Frequently Asked Questions</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Does El Mesquitito Grill have any weekly specials?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes. We offer $5 breakfast burritos every Sunday morning and $1.50 tacos all day every taco Tuesday!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Is El Mesquitito Grill currently offering delivery or takeout?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We offer takeout, but do not have a delivery option available at this time.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What forms of payment are accepted?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We accept cash, debit cards, and credit cards.
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Does El Mesquititio Grill have gluten-free options?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aut. Animi culpa sequi nisi, ad, recusandae minus commodi accusamus debitis libero quidem ipsam qui architecto quo nihil doloribus quos asperiores.
                            </div>
                        </div>
                    </div> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What types of beer are available?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We have a rotating selection of beverages available. Give us a call and we'd be happy to let you know what we have in stock.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Is outdoor dining available at El Mesquititio Grill?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes! We provide outdoor seating.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
