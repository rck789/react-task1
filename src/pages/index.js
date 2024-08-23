import Head from "next/head";
import Script from "next/script";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="./css/styles.css" />
        </>
      </Head>
      <header>
        <div className="navi-social">
          <ul>
            <li className="navi-ico">
              <a href="https://m.facebook.com/Diamondlease/">
                <img src="./images/fb-ico.svg" alt="Facebook" />
              </a>
            </li>
            <li className="navi-ico">
              <a href="https://www.instagram.com/diamondlease">
                <img src="./images/ico-insta.svg" alt="Instagram" />
              </a>
            </li>
            <li className="navi-ico">
              <a href="https://x.com/diamondlease">
                <img src="./images/ico-x.svg" alt="X" />
              </a>
            </li>
            <li className="navi-ico">
              <a href="https://www.linkedin.com/company/diamondlease/">
                <img src="./images/ico-lnkdn.svg" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <div className="logo">
            <img src="./images/Logo.svg" alt="Car Rental" />
          </div>
          <div className="menu-toggle" id="mobile-menu">
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </div>
          <nav>
            <ul className="nav-menu" id="nav-menu">
              <li className="nav-links">
                <a href="#">About</a>
              </li>
              <li className="nav-links">
                <a href="#">Offers</a>
              </li>
              <li className="nav-links">
                <a href="#">Corporate</a>
              </li>
              <li className="nav-links">
                <a href="#">Personal</a>
              </li>
              <li className="nav-links">
                <a href="#">Locations</a>
              </li>
              <li className="nav-links">
                <a href="#">Contact Us</a>
              </li>
              <li className="nav-links">
                <a href="#" className="noti">
                  <img src="./images/noti-ico-2.svg" alt="" />
                </a>
              </li>
              <li className="nav-links">
                <a href="#" className="btn jhon">
                  <img src="./images/jhon-ico.svg" alt="" />
                  John Doe
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="navmsg">
          <span>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis &amp; Habtoor
            Grand Sales Counters | All Rates inclusive of VAT. T&amp;C’s apply |
            Follow us on Social Media for New Offers
          </span>
        </p>
      </header>
      <div className="overlay" id="overlay" />
      <main>
        {/* TESTT */}
        <div className="booking-section">
          <div className="booking-form">
            <ul className="booking-tabs">
              <li className="tab active1">Same as Pick-Up</li>
              <li className="tab">Different Drop-Off</li>
              <li className="tab">
                <select className="vehicle-type-dropdown">
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                  <option value="van">Van</option>
                  <option value="minibus">Minibus</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="quick-book-container">
            <div className="location-select">
              <select className="location-dropdown">
                <option value="dubai">Dubai</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
                <option value="fujairah">Fujairah</option>
                <option value="ras-al-khaimah">Ras Al Khaimah</option>
                <option value="al-quoz">Al Quoz</option>
              </select>
            </div>
            <div className="date-time-select">
              <input
                type="datetime-local"
                className="datetime-picker"
                placeholder="Pick-Up Date and Time"
              />
            </div>
            <div className="date-time-select">
              <input
                type="datetime-local"
                className="datetime-picker"
                placeholder="Drop-Off Date and Time"
              />
            </div>
            <div className="search-icon">
              <button className="search-btn">
                <img src="./images/-ico.svg" className="fa fa-search" />
              </button>
            </div>
            <div className="brdr">
              <p />
            </div>
            <div className="quick-book-button">
              <button className="quick-book">Quick Book</button>
            </div>
          </div>
          <div className="app-download">
            <p>Download our App for easy accessibility anytime, anywhere!</p>
            <div className="app-buttons">
              <img src="./images/social/app-store.svg" alt="App Store" />
              <img src="./images/social/play-store.svg" alt="Google Play" />
            </div>
          </div>
        </div>
        <div className="mobileBook">
          <div className="booking-buttons">
            <button className="quick-book">Book a Car</button>
            <button
              className="quick-book quickbookbtn"
              onclick="toggleBookingContent()"
            >
              Quick Book
            </button>
          </div>
          <div className="quick-book-content">
            <div className="location-select">
              <select className="location-dropdown">
                <option value="dubai">Dubai</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
                <option value="fujairah">Fujairah</option>
                <option value="ras-al-khaimah">Ras Al Khaimah</option>
                <option value="al-quoz">Al Quoz</option>
              </select>
            </div>
            <div className="date-time-select">
              <input
                type="datetime-local"
                className="datetime-picker"
                placeholder="Pick-Up Date and Time"
              />
            </div>
            <div className="date-time-select">
              <input
                type="datetime-local"
                className="datetime-picker"
                placeholder="Drop-Off Date and Time"
              />
            </div>
            <button className="search-btn quick-book srch">Search</button>
          </div>
        </div>
        {/* TESTT */}
        <div className="side-buttons">
          <div className="button call-button">
            <img src="./images/social/call-icon.svg" alt="Call" />
          </div>
          <div className="button chat-button">
            <div className="chat-text">24/7</div>
          </div>
        </div>
        <figure className="promo-figure">
          <img src="./images/promo-voucher.jpg" alt="Summer Promotion" />
          <figcaption>
            <div className="caption-content">
              Receive guaranteed on a monthly hire or lease
              <br />
              <button className="shop-now-btn">Gift Voucher</button>
            </div>
          </figcaption>
        </figure>
        <div className="popularCars">
          <h2>Most Popular Cars</h2>
          <div className="flex-container">
            <div className="car-container">
              <div className="car-image">
                <img
                  src="./images/car-eclipse.jpg"
                  alt="Mitsubishi Eclipse"
                  className="carimage"
                />
              </div>
              <div className="car-deets">
                <h3>Mitsubishi Eclipse</h3>
                <p className="carp">
                  Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
                  mobility with signature Mitsubishi styling, technology and
                  driving confidence.
                </p>
                <div className="car-feat">
                  <ul>
                    <li className="car-feat-ico ico1">
                      <img src="./images/vec-seat.svg" alt="" />
                      <p>6 People</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="car-feat-ico ico2">
                      <img src="./images/vec-gear.svg" alt="" />
                      <p>Automatic</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="car-feat-ico ico3">
                      <img src="./images/vec-door.svg" alt="" />
                      <p>5 Doors</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="car-feat-ico ico4">
                      <img src="./images/vec-ac.svg" alt="" />
                      <p>AC</p>
                    </li>
                  </ul>
                </div>
                <div className="car-bk">
                  <h4>AED 2700/ Monthly</h4>
                  <button className="car-book">
                    <p>Book Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="car-container">
              <div className="car-image">
                <img
                  src="./images/car-jac.jpg"
                  alt="Jac J7"
                  className="carimage"
                />
              </div>
              <div className="car-deets">
                <h3>Jac J7</h3>
                <p className="carp">
                  S3 Plus has been rated Five-Star in C-NCAP including front
                  impact, side impact, frontal side impact &amp; Whipping test.
                </p>
                <div className="car-feat">
                  <ul>
                    <li className="car-feat-ico ico1">
                      <img src="./images/vec-seat.svg" alt="" />
                      <p>6 People</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="car-feat-ico ico2">
                      <img src="./images/vec-gear.svg" alt="" />
                      <p>Automatic</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="car-feat-ico ico3">
                      <img src="./images/vec-door.svg" alt="" />
                      <p>5 Doors</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="car-feat-ico ico4">
                      <img src="./images/vec-ac.svg" alt="" />
                      <p>AC</p>
                    </li>
                  </ul>
                </div>
                <div className="car-bk">
                  <h4>AED 2700/ Monthly</h4>
                  <button className="car-book">
                    <p>Book Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="susCont">
          <div className="susInputs">
            <h2>Subscribe here for exclusive offers and updates!</h2>
            <div className="inputs">
              <input
                type="name"
                id="name"
                name="name"
                required=""
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                required=""
                placeholder="Email"
              />
            </div>
            <p>
              Don't miss out! Enter your email and your name, then hit subscribe
              to unlock a world of special offers and details.
            </p>
            <button type="subscribe" className="subscribe-btn">
              Subscribe
            </button>
          </div>
          <div className="susApps">
            <img
              src="./images/susPhone.png"
              alt="Phone with app"
              className="appImage"
            />
            <div className="appDetails">
              <p>
                Enter your number and receive a direct link to download the app
              </p>
              <input
                type="number"
                id="phonenum"
                name="phonenum"
                required=""
                placeholder="Enter Phone Number"
              />
              <button type="getLink" className="getLink-btn">
                Get the Link
              </button>
              <div className="appstoreBtns">
                <p>Get it on</p>
                <img src="./images/susApp.svg" alt="Button to App Store Page" />
                <img
                  src="./images/susPlay.svg"
                  alt="Button to play Store Page"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rentLease">
          <h2>Rent/Lease in three easy steps</h2>
          <div className="rentLease-body">
            <div className="step">
              <h2>01</h2>
              <div className="rentLease-card">
                <img
                  className="rentLease-image"
                  src="./images/renlease01.svg"
                  alt=""
                  loading="lazy"
                  height="1em"
                />
                <p className="rentLease-text">
                  Select the location. Browse through our available options and
                  find the perfect car to suit your needs
                </p>
              </div>
            </div>
            <div className="step">
              <h2>02</h2>
              <div className="rentLease-card">
                <img
                  className="rentLease-image"
                  src="./images/renlease02.svg"
                  alt=""
                  loading="lazy"
                  height="1em"
                />
                <p className="rentLease-text">
                  Choose your desired Pick-Up date and time.
                </p>
              </div>
            </div>
            <div className="step">
              <h2>03</h2>
              <div className="rentLease-card">
                <img
                  className="rentLease-image"
                  src="./images/renlease03.svg"
                  alt=""
                  loading="lazy"
                  height="1em"
                />
                <p className="rentLease-text">
                  Make payment and book the car. Select an option to either have
                  the car delivered to your location or pick it up directly from
                  us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="locations">
          <h2>Locations</h2>
          <div className="locs">
            <ul>
              <li>
                <img src="./images/location-ico.svg" alt="Dubai" />
                Dubai
              </li>
              <li>
                <img src="./images/location-ico.svg" alt="Abu Dhabi" />
                Abu Dhabi
              </li>
              <li>
                <img src="./images/location-ico.svg" alt="Sharjah" />
                Sharjah
              </li>
              <li>
                <img src="./images/location-ico.svg" alt="Fujairah" />
                Fujairah
              </li>
              <li>
                <img src="./images/location-ico.svg" alt="Ras Al Khaimah" />
                Ras Al Khaimah
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-card">
          <button className="accordion">
            What is my eligibility to book a car?
          </button>
          <div className="panel">
            <p>
              You should be 18 years old or above and you must possess a valid
              driving license.
            </p>
          </div>
          <div className="faq-div" />
          <button className="accordion">
            Can I book for any period of time?
          </button>
          <div className="panel">
            <p>
              You can book a car for any period you need, from a few hours to
              several months.
            </p>
          </div>
          <button className="accordion">
            Can i opt car for a longer period?
          </button>
          <div className="panel">
            <p>
              Absolutely! We offer long-term rental options for weeks, months,
              or even longer.
            </p>
          </div>
          <button className="accordion">Can i book one-way trip?</button>
          <div className="panel">
            <p>
              Yes, we offer one-way rentals with a drop-off fee at a different
              location.
            </p>
          </div>
          <button className="accordion">
            Is there home delivery option available?
          </button>
          <div className="panel">
            <p>
              Yes, we offer home delivery and pickup services for added
              convenience.
            </p>
          </div>
          <button className="accordion">How can i make the payment?</button>
          <div className="panel">
            <p>
              We accept various payment methods, including credit/debit cards,
              online banking, and digital wallets.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="f_content">
          <div className="f_logo">
            <img src="./images/footer-logo.svg" alt="Al Habtoor Logo" />
            <p>Member of the Al Habtoor Group</p>
          </div>
          <div className="m_content">
            <div className="m_content1">
              <div className="m1">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                </ul>
              </div>
              <div className="m1">
                <ul>
                  <li>Offers</li>
                  <li>Locations</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="m1">
                <ul>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Service Request</li>
                </ul>
              </div>
              <div className="m1">
                <ul>
                  <li>Careers</li>
                  <li>Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
            <div className="m_content2">
              <p>Al Habtoor Company</p>
              <ul>
                <li>Hospitality</li>
                <li>Real Estate</li>
                <li>Education</li>
                <li>Publishing</li>
                <li>Automotive</li>
                <li>Vehicle Leasing</li>
              </ul>
            </div>
          </div>
          {/* Added the social media icons section here */}
          <div className="frame-parent12">
            <div className="follow-us-on-wrapper">
              <div className="follow-us-on">FOLLOW US ON</div>
            </div>
            <div className="social-icons-container">
              <div className="social-icons-wrapper">
                <img
                  className="social-icons"
                  loading="lazy"
                  alt=""
                  src="../images/social/social-icons.svg"
                />
                <img
                  className="social-icons"
                  alt=""
                  src="../images/social/social-icons-1.svg"
                />
                <img
                  className="social-icons"
                  alt=""
                  src="./images/social/social-icons-2.svg"
                />
                <img
                  className="social-icons"
                  alt=""
                  src="./images/social/social-icons-3.svg"
                />
                <img
                  className="social-icons"
                  alt=""
                  src="./images/social/social-icons-4.svg"
                />
              </div>
              <img
                className="image-273-icon"
                loading="lazy"
                alt=""
                src="./images/social/image-273@2x.png"
              />
            </div>
          </div>
          {/* End of social media icons section */}
        </div>
        <div className="c_right">
          © 2018 Car rental LLC - All Rights Reserved.
        </div>
      </footer>

      <Script src="./js/faq.js"></Script>
      {/* <Script src="main.js"></Script> */}
    </>
  );
}
