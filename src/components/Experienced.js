import React, { useState, useEffect } from "react";
import experience from "../data/experience.json";

export default function Experienced() {
  const [experienceData, setExperience] = useState([]);
  useEffect(() => {
    const experienceData = experience.experience;
    setExperience(experienceData);
  }, [experienceData]);
  console.log(experienceData);
  return (
    <section className="experienced section" id="experience">
      <div className="container">
        <div className="section-title-text">
          <h1 className="dark-color">Your Love</h1>
        </div>
        <div className="row" style={{ marginTop: "80px" }}>
          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="pricingTable pricingTable-2">
              <div class="pricingTable-header">
                <h3 class="title">Standard</h3>
                <h5 class="price-month">Any Project</h5>
                <p>💡Knock us with your budget without hesitation</p>
                <h1 class="price-value">
                  23 <span class="value-bg">$23</span>
                </h1>
              </div>
              <ul class="pricing-content">
                <li>3 pages</li>
                <li>2 Revision</li>
                <li>Live on Free(Netlify) </li>
                <li>Unlimited Support</li>
              </ul>
              <a
                href="mailto:radwananik.ra@gmail.com"
                class="btn btn-lg "
                title="radwananik.ra@gmail.com"
              >
                Send email
              </a>
              <a
                href="tel:01796226729"
                class="btn btn-lg btn-price-bg mt-3"
                title="01796226729"
              >
                Whatsapp 01796226729
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="pricingTable pricingTabletop pricingTable-2">
              <div class="pricingTable-header">
                <h3 class="title">Business</h3>
                <h5 class="price-month">Any Project</h5>
                <p>💡Knock us with your budget without hesitation</p>
                <h1 class="price-value">
                  53 <span class="value-bg">$53</span>
                </h1>
              </div>
              <ul class="pricing-content">
                <li>7 Pages</li>
                <li>2 Revision</li>
                <li>Help to live your domain</li>
                <li>Unlimited Support</li>
              </ul>
              <a
                href="mailto:radwananik.ra@gmail.com"
                class="btn btn-lg "
                title="radwananik.ra@gmail.com"
              >
                Send email
              </a>
              <a
                href="tel:01796226729"
                class="btn btn-lg btn-price-bg mt-3"
                title="01796226729"
              >
                Whatsapp 01796226729
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="pricingTable pricingTable-2">
              <div class="pricingTable-header">
                <h3 class="title">Premium</h3>
                <h5 class="price-month">E-commerce</h5>
                <p>💡Knock us with your budget without hesitation</p>
                <h1 class="price-value">
                  163 <span class="value-bg">$163</span>
                </h1>
              </div>
              <ul class="pricing-content">
                <li>
                  <span title="15 product">8 Pages</span>
                </li>
                <li>1 Revision</li>
                <li>Help to live your site</li>
                <li>Unlimited Support</li>
              </ul>
              <a
                href="mailto:radwananik.ra@gmail.com"
                class="btn btn-lg "
                title="radwananik.ra@gmail.com"
              >
                Send email
              </a>
              <a
                href="tel:01796226729"
                class="btn btn-lg btn-price-bg mt-3"
                title="01796226729"
              >
                Whatsapp 01796226729
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
