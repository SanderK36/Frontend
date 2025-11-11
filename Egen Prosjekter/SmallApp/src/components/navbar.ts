import { BaseComponent } from "./baseComponents";

export class Navbar extends BaseComponent {
    static propNames = [];

    render() {
        this.shadowRoot!.innerHTML = /*html*/`
        <style>
            nav {
                background-color: #333;
                padding: 2.5rem;
                margin: 0;
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
            }
            li {
                display: inline;
                font-size: 1.3rem;
            }
            a {
                color: white;
                text-decoration: none;
                font-family: Arial, sans-serif;
                padding: 0.5rem 1rem;
            }
            a:hover {
                background-color: #555;
                border-radius: 4px;
            }
        </style>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        `;
    }
}