async function getData() {
  const url = "https://randomfox.ca/floof";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    const foxImageDiv = document.getElementById("fox-image");
    foxImageDiv.innerHTML = `<img src="${json.image}" alt="Random Fox" />`;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

window.onload = getData;
