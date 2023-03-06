export  function createEl(tag, classes) {
    const $element = document.createElement(tag);
    if(classes) {
        classes.forEach(element => {
            $element.classList.add(element)
        });
    }
    return $element
}

export function pasteElement(selector, position, element) {
    selector.insertAdjacentElement(position, element)
}

