import { model } from "./model";

export function updateView(){
    const app = document.getElementById('app')
    for (let product of model.products) {
        const div = document.createElement('div')
        div.textContent = product.name 
        app?.appendChild(div)
    }
}