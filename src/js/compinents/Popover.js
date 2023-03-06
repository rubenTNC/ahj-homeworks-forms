import { createEl, pasteElement } from "../core/utils";
export default class Popover {
    constructor(selector, position, options) {
        this.selector = selector;
        this.position = position;
        this.options = options;
        this.element = createEl("div", ["popover"])
    }

    render() {
        pasteElement(this.selector, this.position, this.element)
        for ( const key in this.options) {
            const elem = createEl("div", [`popover__${key}`])
            elem.innerText = this.options[key]
            pasteElement(this.element, "beforeEnd", elem)
         }

    }
}