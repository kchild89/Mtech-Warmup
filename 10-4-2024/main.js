async function fetchWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Get weather info
    const temperature = data.hourly.temperature_2m[0];

    // Get current date, time, and day of the week
    const now = new Date();
    const date = now.toLocaleDateString();
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Update HTML elements
    document.getElementById("dayOfWeek").textContent = `${dayOfWeek}`;
    document.getElementById("date").textContent = `${date}`;
    document.getElementById("time").textContent = `${time}`;
    document.getElementById("temperature").textContent = `${temperature}°F`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeather();
