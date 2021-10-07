window.onload = function () {
    if (parseInt(document.querySelector("body > div.calculator > div.calculator-heading > div > div.slider-level > input").defaultValue) === 0) chooseSlide();
}

let keysArray = [];

function applythemeCss(bodyCss, inputCss, screenCss, keypadCss, cssDelReset, equalCss, toggleCss, toggleSliderCss) {
    document.querySelector("body").style.cssText = bodyCss;
    var inputs = document.querySelectorAll(".button-row > input[type=button]");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.cssText = inputCss;
    }
    document.querySelector("body > div.calculator > div.calculator-screen").style.cssText = screenCss;
    document.querySelector("body > div.calculator > div.calculator-body").style.cssText = keypadCss;
    document.querySelector("body > div.calculator > div.calculator-body > div.button-row.one > input.del").style.cssText = cssDelReset;
    document.querySelector("body > div.calculator > div.calculator-body > div.button-row.five > input.reset").style.cssText = cssDelReset;
    document.querySelector("body > div.calculator > div.calculator-body > div.button-row.five > input.equal").style.cssText = equalCss;
    document.querySelector("body > div.calculator > div.calculator-heading > div > div.slider-level > input").style.cssText = toggleCss;
    document.querySelector("body > div.calculator > div.calculator-keyboard-rules").style.cssText = keypadCss;
}
