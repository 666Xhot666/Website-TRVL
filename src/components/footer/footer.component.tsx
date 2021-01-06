import React from 'react'

import { Button } from "../button/button.component"
import { Link } from 'react-router-dom'

import './footer.css'

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the Adventure newsletter to receive our best vacation deals</p>
        <p className="footer-subscription-text"> You can usubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input placeholder="Your email" type="email" name="email" className="footer-input" />
            <Button buttonStyle="btn--outline" buttonSize="btn--medium">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> About Us</h2>
            <Link to='/sign-up' > How it works</Link>
            <Link to='/sign-up' > Testimonials</Link>
            <Link to='/sign-up' > Careers</Link>
            <Link to='/sign-up' > Inverstors</Link>
            <Link to='/sign-up' > Term of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2> Contact Us</h2>
            <Link to='/sign-up' > Contact</Link>
            <Link to='/sign-up' > Support</Link>
            <Link to='/sign-up' > Sestination</Link>
            <Link to='/sign-up' > Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> Videos</h2>
            <Link to='/sign-up' > Submit Video</Link>
            <Link to='/sign-up' > Ambassadors</Link>
            <Link to='/sign-up' > Agency</Link>
            <Link to='/sign-up' > Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2> Social Media</h2>
            <Link to='/sign-up' > Instagram</Link>
            <Link to='/sign-up' > Facebook</Link>
            <Link to='/sign-up' > Youtube</Link>
            <Link to='/sign-up' > Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3"/>
            </Link>
          </div>
          <small className="website-rights">
            TRVL &copy; 2021
          </small>
          <div className="social-icons">
            <Link to="" target="_blank" aria-label="Facebook" className="social-icon-link facebook"><i className="fab fa-facebook-f"/></Link>
            <Link to="" target="_blank" aria-label="Instagram" className="social-icon-link instagram"><i className="fab fa-instagram"/></Link>
            <Link to="" target="_blank" aria-label="Youtube" className="social-icon-link youtube"><i className="fab fa-youtube"/></Link>
            <Link to="" target="_blank" aria-label="Twitter" className="social-icon-link twitter"><i className="fab fa-twitter"/></Link>
            <Link to="" target="_blank" aria-label="Linkedin" className="social-icon-link linkedin"><i className="fab fa-linkedin-in"/></Link>

          </div>
        </div>
      </section>
    </div>
  )
}
