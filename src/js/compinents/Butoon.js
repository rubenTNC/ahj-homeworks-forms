import { createEl, pasteElement } from "../core/utils";
export default class Button {
    constructor(selector, position, text, classes) {
        this.$selector = selector;
        this.text = text;
        this.classes = classes;
        this.position = position;
        this.element = createEl("div", this.classes)
        this.element.addEventListener("click", this.click)
    }
    addText() {
        this.element.innerText = this.text
    }
    click(event) {
        const parent = event.target.closest(".widget-popover")
        if (parent) {
           parent.querySelector(".popover").classList.toggle("active")
        }
    }

    render() {
        this.addText()
        pasteElement(this.$selector, this.position, this.element)
    }
}