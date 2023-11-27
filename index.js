function nextNumbersGenerator(numbers) {
  let index = 0;

  return function () {
      const outputElement = document.getElementById('output');
      outputElement.textContent = numbers[index];
      index = (index + 1) % numbers.length;
  };
}


const numbers = [1, 2, 3, 4, 5];
const getNextNumber = nextNumbersGenerator(numbers);


document.getElementById('nextButton').addEventListener('click', getNextNumber);


