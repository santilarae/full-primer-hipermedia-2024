document.getElementById("citySelector").addEventListener("change", function () {
  const city = this.value;
  const apiUrl = `https://worldtimeapi.org/api/timezone/${city}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const datetime = data.datetime;
      const timezone = data.timezone;

      // Convert datetime to the local time of the selected city
      const time = new Date(datetime).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone,
      });

      const dataElement = document.querySelector("#timeDisplay data");
      dataElement.setAttribute("value", datetime);
      dataElement.textContent = time;

      console.log("Time:", datetime);
      console.log("Converted time:", time);
      console.log("City selected:", this.value);

      updateBackground(time);
    })
    .catch((error) => {
      console.error("Error fetching the time:", error);
    });
});

function updateBackground(time) {
  setTimeout(() => {
    const body = document.querySelector("body");
    if (time.includes("AM")) {
      body.style.background = "rgb(152,184,0)";
      body.style.background =
        "linear-gradient(0deg, rgba(152,184,0,1) 0%, rgba(0,237,255,1) 78%)";
    } else if (time.includes("PM")) {
      body.style.background = "rgb(184,80,0)";
      body.style.background =
        "linear-gradient(0deg, rgba(184,80,0,1) 0%, rgba(0,67,72,1) 78%)";
    }
  }, 1000);
}

function saludar() {
  alert("Hola mundo");
}


function scrollToTop() {
  scrollTo(0, 0);
}
