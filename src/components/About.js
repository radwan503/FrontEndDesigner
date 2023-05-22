import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import profile from "../assets/image/personal.jpeg";
import about from "../data/about.json";

export default function About() {
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const info = about.profile;
    const count = about.count;
    setInfo(info);
    setCount(count);
  }, [info, count]);

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {info.map((infoData) => {
          return (
            <div className="row align-items-center ">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="about-text section-title-text go-to">
                  <div className="header-about">
                    <div className="about-avatar">
                      <img src={profile} title="" alt="" />
                    </div>
                    <h1 className="dark-color">{infoData.aboutTitle}</h1>
                  </div>

                  <h6 className="lead text-white">{infoData.aboutSubTitle}</h6>
                  <p>
                    Dear Business Owners, Agencies, Marketing Companies, and
                    E-commerce Owners,
                  </p>
                  <p>
                    🔥 Your website is the foundation of your online presence, a
                    vital tool for success. It establishes credibility, expands
                    your reach, and drives business growth. Don't miss out on
                    the power of a well-crafted website:
                  </p>
                  <details>
                    <summary>
                      In the digital realm, your website is more than just a
                      virtual presence – it's a catalyst for success. Unlock
                      limitless possibilities with our expertise:
                    </summary>
                    <p className="mt-3">
                      🔥 Amplify Engagement: Captivate audiences with stunning
                      designs and immersive user experiences that leave a
                      lasting impression.
                    </p>

                    <p className="mt-3">
                      💡 Drive Conversions: Our strategic approach leverages
                      data-driven insights to maximize conversions and
                      accelerate business growth.
                    </p>

                    <p className="mt-3">
                      🌟 Stand Above the Crowd: Elevate your brand with a
                      website that reflects your unique identity, leaving
                      competitors in awe.
                    </p>

                    <p className="mt-3">
                      💻 Seamless Functionality: Harness cutting-edge
                      technologies to ensure flawless performance, security, and
                      scalability.
                    </p>

                    <li>🚀 Attract customers worldwide.</li>
                    <li>🌟 Showcase your brand and offerings.</li>
                    <li>🔒 Build trust and credibility.</li>
                    <li>💡 Generate leads and drive conversions.</li>
                    <li>💻 Stay ahead of the competition.</li>
                  </details>

                  <div className="row about-list">
                    {/* <div className="col-md-6">
                                                <div className="media">
                                                    <p>{infoData.point1}</p>
                                                </div>
                                                <div className="media">
                                                    <p>{infoData.point2}</p>
                                                </div>
                                                <div className="media">
                                                    <p>{infoData.point3}</p>
                                                </div>
                                                <div className="media">
                                                    <p>{infoData.point4}</p>
                                                </div>
                                            </div> */}
                    {/* <div className="col-md-6">
                                                <div className="media">
                                                    <label>E-mail</label>
                                                    <p>{infoData.Email}</p>
                                                </div>
                                                <div className="media">
                                                    <label>Phone</label>
                                                    <p>{infoData.Phone}</p>
                                                </div>
                                                <div className="media">
                                                    <label>Skype</label>
                                                    <p>{infoData.Skype}</p>
                                                </div>
                                                <div className="media">
                                                    <label>Freelance</label>
                                                    <p>{infoData.Freelance}</p>
                                                </div>
                                            </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 
                <div className="counter">
                    <div className="row">
                        {
                            count.map(counter => {
                                return (
                                    <div className="col-6 col-lg-3">
                                        <div className="count-data text-center">
                                            <h6 className="count h2" data-to="500" data-speed="500">{counter.count}</h6>
                                            <p className="m-0px font-w-600">{counter.Title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div> */}
      </div>
    </section>
  );
}
