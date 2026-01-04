//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// focus first input
inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener("keydown", (e) => {

        //  only numbers & backspace
        if (e.key >= "0" && e.key <= "9") {
            input.value = "";
        } else if (e.key !== "Backspace") {
            e.preventDefault();
        }

        // Backspace
        if (e.key === "Backspace") {
            if (index > 0) {
                setTimeout(() => {
                    inputs[index - 1].focus();
                }, 0);
            }
        }
    });

    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

});
