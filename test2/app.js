//                               1 DZ
console.log("DZ1");

const extractNumbers = (str) => {
  const numbers = str.match(/\d+/g);
  return numbers ? numbers.map(Number) : [];
};

console.log(extractNumbers("a1fg5hj6"));

//                              2 DZ
console.log("DZ2");

function fibonacciRecursion(n, a = 0, b = 1) {
  if (a > 144) return;

  console.log(a);

  setTimeout(() => {
    fibonacciRecursion(n, b, a + b);
  }, 1000);
}

fibonacciRecursion(0);

//                              3 DZ

const fetchProductTitles = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    products.forEach((product) => {
      console.log(product.title);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchProductTitles();

//                              4 DZ
console.log("DZ4");

const buttonClass = document.querySelector(".btn-class");
const btnRed = document.querySelector("#btn-red");
const btnGreen = document.querySelector("#btn-green");
const btnBlue = document.querySelector("#btn-blue");
const btnrYellow = document.querySelector("#btn-yellow");
const btnrPurple = document.querySelector("#btn-purple");

btnRed.onclick = () => {
  buttonClass.style.backgroundColor = "red";
};
btnGreen.onclick = () => {
  buttonClass.style.backgroundColor = "green";
};
btnBlue.onclick = () => {
  buttonClass.style.backgroundColor = "blue";
};
btnrYellow.onclick = () => {
  buttonClass.style.backgroundColor = "yellow";
};
btnrPurple.onclick = () => {
  buttonClass.style.backgroundColor = "purple";
};

//                              5 DZ

const squareBlock = document.querySelector("#squareBlock");
const toggleButton = document.querySelector("#toggleButton");
toggleButton.onclick = () => {
  if (squareBlock.style.display === "none") {
    squareBlock.style.display = "block";
  } else {
    squareBlock.style.display = "none";
  }
};

//                              6 DZ

document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");
  let counter = 0;

  const incrementCounter = () => {
    if (counter < 100) {
      counter++;
      counterElement.textContent = counter;
      setTimeout(incrementCounter, 1);
    }
  };

  incrementCounter();
});

//                              7 DZ

const fetchButton = document.querySelector('fetchButton')
fetchButton.onclick = async () => {
  try {
    const response = await fetch("./products.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
