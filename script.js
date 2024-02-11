const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Event listener for the button click
document.getElementById('btn').addEventListener('click', () => {
  // Get the input value
  const inputNumber = document.getElementById('ip').value;

  // Create a promise that resolves after 2 seconds with the input number
  const promise1 = wait(2000).then(() => {
    document.getElementById('output').textContent = `Result: ${inputNumber}`;
    return inputNumber;
  });

  // Chain a second promise that multiplies the number by 2
  const promise2 = promise1.then((result) => {
    return wait(1000).then(() => {
      const multipliedResult = result * 2;
      document.getElementById('output').textContent = `Result: ${multipliedResult}`;
      return multipliedResult;
    });
  });

  // Chain a third promise that subtracts 3 from the number
  const promise3 = promise2.then((result) => {
    return wait(1000).then(() => {
      const subtractedResult = result - 3;
      document.getElementById('output').textContent = `Result: ${subtractedResult}`;
      return subtractedResult;
    });
  });

  // Chain a fourth promise that divides the number by 2
  const promise4 = promise3.then((result) => {
    return wait(1000).then(() => {
      const dividedResult = result / 2;
      document.getElementById('output').textContent = `Result: ${dividedResult}`;
      return dividedResult;
    });
  });

  // Chain a fifth promise that adds 10 to the number
  const promise5 = promise4.then((result) => {
    return wait(1000).then(() => {
      const finalResult = result + 10;
      document.getElementById('output').textContent = `Result: ${finalResult}`;
      return finalResult;
    });
  });

  // Update the text content of the output div with the final result
  promise5.then((result) => {
    document.getElementById('output').textContent = `Final Result: ${result}`;
  });
});