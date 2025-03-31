class FooterDefault extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div id="root"></div>
                <div class="footer__top">
                    <div class="footer__about">
                        <div class="home__logo">
                            <p class="home__logo-upper-text">VIRTUAL</p>
                            <p class="home__logo-lower-text">LOVE ACADEMY</p>
                        </div>
                        <p>Providing faith-based counseling to guide marriages and relationships 
                            with biblical wisdom. Our mission is to support individuals and 
                            couples in navigating love, commitment, and healing through 
                            the principles of God’s word
                        </p>
                        <ul>
                            <li>
                                <a href="https://google.com" target="_blank"><img src="/src/images/footer/facebook.png" alt="Facebook social media link" /></a>    
                            </li>
                            <li>
                                <a href="https://google.com" target="_blank"><img src="/src/images/footer/x.png" alt="x(formerly Twitter) social media link" /></a>
                            </li>
                            <li>
                                <a href="https://google.com" target="_blank"><img src="/src/images/footer/instagram.png" alt="Instagram social media link" /></a>
                            </li>
                            <li>
                                <a href="https://google.com" target="_blank"><img src="/src/images/footer/google.png" alt="Google link" /></a>
                            </li>
                            <li>
                                <a href="https://google.com" target="_blank"><img src="/src/images/footer/youtube.png" alt="Youtubelink" /></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__quick-links">
                        <p class="footer__heading">Quick Links</p>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div class="footer__service">
                        <p class="footer__heading">Service</p>
                        <ul>
                            <li>Couple Therapy</li>
                            <li>Individual Relationship</li>
                            <li>Pre-marital Counseling</li>
                            <li>Breakup Recovery</li>
                        </ul>
                    </div>

                    <div class="footer__contact">
                        <p class="footer__heading">Contact</p>
                        <p>Would you love to speak with someone who understands and cares?
                            Do you need clarity on God’s will for your love life?</p>
                        <ul>
                            <li>
                                <img src="/src/images/footer/email.png" alt="Email" />
                                <span>Support@VirtualLoveAcademy</span>
                            <li>
                                <img src="/src/images/footer/location.png" alt="Location" />
                                <span>123 Main Street, City, State, ZIP Code</span>
                            </li>
                            <li>
                                <img src="/src/images/footer/phone.png" alt="Phone number" />
                                <span>+1(123) 456-7890</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__legal">
                    <p>@ 2025 Virtual Love Academy. All rights Reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Term of Use</a></li>
                        <li><a href="#">Legal</a></li>
                    </ul>
                </div>
            </footer> 
        `
    }
}

customElements.define('footer-default', FooterDefault)
