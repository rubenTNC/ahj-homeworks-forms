import Widget from "./compinents/Widget";

new Widget(document.querySelector("#app"), "afterBegin", ["widget-popover"], "ткни меня", {
    title: "Kу кусики",
    text: "Не сыпь мне соль на рану"
}).start()

