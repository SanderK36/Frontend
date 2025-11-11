import { BaseComponent } from "./baseComponents";

export class Footer extends BaseComponent {
    static propNames = [];

    render() {
        this.shadowRoot!.innerHTML = /*html*/`
        <style>
            footer {
                background-color: #333;
                color: white;
                text-align: center;
                padding: 1rem;
                font-family: Arial, sans-serif;
                font-size: 1rem;
            }
            a {
                color: #ddd;
                text-decoration: none;
                margin: 0 0.5rem;
            }
            a:hover {
                text-decoration: underline;
            }
        </style>
        <footer>
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
        `;
    }
}