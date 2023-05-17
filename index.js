document.getElementById("find-button").addEventListener("click", function () {
    const sumInput = document.getElementById("sum-input");
    const lengthInput = document.getElementById("length-input");
    const resultDiv = document.getElementById("result");

    const sum = parseInt(sumInput.value);
    const length = parseInt(lengthInput.value);

    if (isNaN(sum) || isNaN(length)) {
        resultDiv.innerHTML = "Please enter valid input.";
        return;
    }

    const result = findAll(sum, length);
    resultDiv.innerHTML = "";
    if (result[0] === 0) {
        resultDiv.innerHTML = "No happy numbers found.";
    } else {
        const count = document.createElement("p");
        count.textContent = "Total count: " + result[0];
        resultDiv.appendChild(count);

        const minNumber = document.createElement("p");
        minNumber.textContent = "Minimum number: " + result[1];
        resultDiv.appendChild(minNumber);

        const maxNumber = document.createElement("p");
        maxNumber.textContent = "Maximum number: " + result[2];
        resultDiv.appendChild(maxNumber);
    }
});
function isHappyNumber(num) {
    const digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] < digits[i + 1]) {
            return false;
        }
    }
    return true;
}

function findAll(n, k) {
    let count = 0;
    let minNumber = -1;
    let maxNumber = -1;

    const start = Math.pow(10, k - 1);
    const end = Math.pow(10, k);

    for (let i = start; i < end; i++) {
        if (isHappyNumber(i) && getDigitSum(i) === n) {
            count++;
            if (minNumber === -1) {
                minNumber = i;
            }
            maxNumber = i;
        }
    }
    if (count === 0) {
        return [0];
    } else {
        return [count, minNumber.toString(), maxNumber.toString()];
    }
}

function getDigitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}