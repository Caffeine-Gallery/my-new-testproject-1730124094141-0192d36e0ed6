import { backend } from 'declarations/backend';

const display = document.getElementById('display');
const loader = document.getElementById('loader');

window.appendToDisplay = (value) => {
    display.value += value;
};

window.clearDisplay = () => {
    display.value = '';
};

window.calculate = async () => {
    const expression = display.value;
    if (!expression) return;

    const [num1, operator, num2] = expression.split(/([+\-*/])/);

    if (!num1 || !operator || !num2) {
        display.value = 'Error: Invalid expression';
        return;
    }

    loader.style.display = 'block';

    try {
        const result = await backend.calculate(parseFloat(num1), operator, parseFloat(num2));
        display.value = result.toString();
    } catch (error) {
        display.value = `Error: ${error.message}`;
    } finally {
        loader.style.display = 'none';
    }
};
