import {createEl, pasteElement} from "../core/utils";
import Button from "./Butoon";
import Popover from "./Popover";

export default class Widget  {
    constructor(selector, position, classes, textButton, optionsPopover) {
        this.$selector = selector;
        this.position = position;
        this.textButton = textButton
        this.classes = classes;
        this.optionsPopover = optionsPopover
        this.element = createEl("div", this.classes)
    }
    render() {
        pasteElement(this.$selector, this.position, this.element )
    }
    addButton() {
        const btn = new Button(this.element, "beforeEnd", this.textButton, ["button"])
        btn.render()
    }
    addPopover() {
        const popover = new Popover(this.element, "afterBegin", this.optionsPopover)
        popover.render()

    }
    start() {
        this.render()
        this.addButton()
        this.addPopover()
    }
}