const image1 = require('../images/home/test-card-2-sm.jpeg')

class TestimonialCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .testimonial-card:hover > div > div {
                color: white;
            }
        </style>
            <article class="testimonial-card">
                <p>Lorem ipsum dolor sit amet consectetur. Arcu et quisque lorem faucibus eget dictumst viverra metus. Aliquam ullamcorper sed neque egestas donec.</p>
                <div class="testimonial-card__user-details">
                    <img src="${image1}" alt="reviewer 2" />
                    <div>
                        <p>Daniel Willian</p>
                        <p>Trader</p>
                    </div>
                </div>
            </article>
        `
    }
}

customElements.define('testimonial-card', TestimonialCard)
