import { BaseComponent } from "./components/baseComponents";

export class App extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = /*html*/`
        <style>
            :host {
                display: flex;
                flex-direction: column;
                height: 100vh; /* Strictly limit to viewport height */
                overflow: hidden; /* Prevent any scrolling */
            }
            .hero-section {
                width: 100%;
                flex: 1; /* Take up remaining space */
                background: linear-gradient(to right, #f0f4f8, #d9e2ec);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 2rem;
                animation: fadeIn 1s ease-in;
                overflow: hidden; /* Ensure no overflow in hero section */
            }
            h1 {
                font-size: 2.5rem;
                color: #333;
                margin-bottom: 1rem;
            }
            p {
                font-size: 1.2rem;
                color: #555;
                max-width: 600px;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        </style>
        <nav-bar></nav-bar>
        <section class="hero-section">
            <h1>Welcome to Our Website</h1>
            <p>Your gateway to amazing content.</p>
        </section>
        <footer-component></footer-component>
        `;
    }
}