async function displayDelay() {
  const inputValue = document.getElementById("userInput").value;
  const displayText = document.getElementById("displayText");

  if (inputValue.includes(" ")) {
    console.log("The input contains spaces.");
  }

  displayText.innerText = "";

  for (let i = 0; i < inputValue.length; i++) {
    displayText.innerText += inputValue[i];

    await delay(250);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
