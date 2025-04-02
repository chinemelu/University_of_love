class NavDefault extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <nav class="nav-default">
                <a href="home.html" class="nav-default__logo">
                    <h6>VIRTUAL</h6>
                    <p>LOVE ACADEMY</p>
                </a>

                <ul>
                    <li><a href="course.html">Course</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

                <div class="nav-default__buttons-container">
                    <button class="nav-default__button nav-default__button--outline">Log in </button>
                    <button class="nav-default__button nav-default__button--solid">Get Started</button>
                </div>  
            
            </nav> 
        `
    }
}

customElements.define('nav-default', NavDefault)