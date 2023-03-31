import React from 'react';
import "../about-us-master/about-us.css";

const AboutUs = () => {
    return (
        <React.Fragment>
            
            <div class="ct-pageWrapper" id="ct-js-wrapper">
                <section class="company-heading intro-type" id="parallax-one">
                    <div class="container">
                        <div class="row product-title-info">
                            <div class="col-md-12">
                                <h1>
                                    About Us
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="parallax" id="parallax-cta" style="background-image:url(images/hero.jpg);">
                        &nbsp;
                    </div>
                </section>
                <section class="story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding" id="section">
                    <div class="container text-center">
                        <h2>
                            WHAT DRIVES US
                        </h2>
                        <h3>
                            The easiest way to manage team projects and tasks
                        </h3>
                        <div class="col-md-8 col-md-offset-2">
                            <div class="red-border">
                                &nbsp;
                            </div>
                            <p class="ct-u-size22 ct-u-fontWeight300 marginTop40">
                                Why use S3H? Because only S3H Work Graph data model gives teams everything they need to stay in sync, hit deadlines, and reach their goals.
                            </p>
                           
                        </div>
                    </div>
                </section>
                <section class="culture-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
                    <div class="container">
                        <div class="col-md-8 col-md-offset-2">
                            <h2>
                                Hit your goals, without the scramble
                            </h2>
                            <h3>
                                Make every project a success. Map out each step and organize all the details of your work in one place.
                            </h3>
                            <p class="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60">
                                We believe in teams. Yours and ours. Our mission, culture, and commitment to fostering a diverse, inclusive workplace let us build a product people love and stay true to ourselves.<br />

                            </p>
                        </div>
                        <div class="row ct-u-paddingBoth20">
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                    <p>
                                        Boards
                                    </p>
                                    <p class="company-icons-subtext hidden-xs">
                                        Put project work at your fingertips
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-money" aria-hidden="true"></i>
                                    <p>
                                        Reports
                                    </p>
                                    <p class="company-icons-subtext hidden-xs">
                                        See and track work from every angle.
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    <p>
                                        TimeLine
                                    </p>
                                    <p class="company-icons-subtext hidden-xs">
                                        Make sure you hit your deadline
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row ct-u-paddingBoth20">
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-coffee" aria-hidden="true"></i>
                                    <p>
                                        Chat feature
                                    </p>
                                    <p class="company-icons-subtext hidden-xs">
                                        You can communicate with your team members related to project.

                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-gamepad" aria-hidden="true"></i>
                                    <p>
                                        Keep projects organized
                                    </p>
                                    <p class="company-icons-subtext hidden-xs">
                                        Keep your teams and organization in sync with roadmaps. Full visibility gives teams the context
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                    <p>
                                        Power Search
                                    </p>
                                    <p class="company-icons-subtext hidden-xs">
                                        S3H supports a powerful search functionality with Basic, Quick and Advanced features.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <a class="ct-u-marginTop60 btn btn-solodev-red-reversed btn-fullWidth-sm ct-u-size19" href="#">Ready to Learn More?</a>
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
}

export default AboutUs;