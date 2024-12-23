const display = document.getElementById('display');
const body = document.body;
const calculator = document.querySelector('.calculator');
const toggleModeButton = document.querySelector('.toggle-mode');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'خطأ';
    }
}

function toggleMode() {
    if (body.style.background.includes('rgb(44, 62, 80)')) {
        body.style.background = 'linear-gradient(135deg, #ffffff, #dfe6e9)';
        body.style.color = '#000000';
        calculator.style.backgroundColor = '#f4f4f9';
        display.style.backgroundColor = '#ffffff';
        display.style.color = '#000000';
        toggleModeButton.textContent = 'الوضع الليلي';
    } else {
        body.style.background = 'linear-gradient(135deg, #2c3e50, #4ca1af)';
        body.style.color = '#ffffff';
        calculator.style.backgroundColor = '#1e1e1e';
        display.style.backgroundColor = '#2c2c2c';
        display.style.color = '#ffffff';
        toggleModeButton.textContent = 'الوضع النهاري';
    }
}