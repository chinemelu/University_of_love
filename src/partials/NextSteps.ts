class NextSteps extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="next-steps">
                <h1>Take the Next Step in Your 
                    Relationship Journey</h1>
                <p>Sign up today and start learning from the best relationship coaches!</p>
                <button class="next-steps__button next-steps__button--outline-white">Get Started</button>
            </section>
        `
    }
}

customElements.define('next-steps', NextSteps)