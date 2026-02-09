const API_key = "07af7dc30c955fb77069e62874adf164";
const city = "Montbeliard";
// const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

async function fetchWeather() {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: { q: city, lang: "fr", units: "metric", appid: API_key },
      }
    );
    const data = response.data;
    console.log(data);

    let city_name = data.city.name;
    document.querySelector("#city_name").innerHTML = city_name;

    function afficher5Jours() {
      for (let i = 0; i < data.list.length; i += 8) {
        const item = data.list[i];
        const date = item.dt
          ? new Date(item.dt * 1000)
          : new Date(item.dt_txt.replace(" ", "T"));
        console.log("Date from API:", date.toString());

        const weatherbg = item.weather[0].main;
        console.log("Liste des description : " + weatherbg);
        const weatherDesc = item.weather[0].description;
        const wind_svg = new Image(50, 50);
        wind_svg.src = "wind.gif";

        const el_card = document.createElement("div");
        el_card.classList.add("card");
        const el_date = document.createElement("h2");
        el_date.classList.add("card__date");
        const el_temps = document.createElement("h2");
        el_temps.classList.add("card__temps");
        const el_description = document.createElement("h3");
        el_description.classList.add("card__description");
        const el_wind = document.createElement("div");
        el_wind.classList.add("card__wind");
        const el_speed = document.createElement("h3");

        if (item == data.list[0]) {
          el_date.textContent = "Aujourd'hui";
        } else if (item == data.list[0 + 8]) {
          el_date.textContent = "Demain";
        } else {
          el_date.textContent = date.toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
          });
        }
        el_card.appendChild(el_date);

        if (weatherbg == "Clouds") {
          el_card.classList.add("card--clouds");
        } else if (weatherbg == "Thunderstorm") {
          el_card.classList.add("card--thundersorm");
        } else if (weatherbg == "Atmosphere") {
          el_card.classList.add("card--fog");
        } else if (weatherbg == "Snow") {
          el_card.classList.add("card--snow");
        } else if (weatherbg == "Rain" || weatherbg == "Drizzle") {
          el_card.classList.add("card--rain");
        } else {
          el_card.classList.add("card--sun");
        }

        el_temps.textContent = Math.ceil(item.main.temp) + "°C";
        el_card.appendChild(el_temps);

        el_description.textContent = weatherDesc;
        el_card.appendChild(el_description);

        el_speed.textContent = item.wind.speed + " m/s";
        el_wind.appendChild(el_speed);
        wind_svg.textContent = "";
        el_wind.appendChild(wind_svg);
        el_card.appendChild(el_wind);

        let cards = document.querySelector("#cards");
        cards.appendChild(el_card);
        console.log(item);
      }
    }

    afficher5Jours();
  } catch (error) {
    if (error.response) {
      console.error("Erreur API:", error.response.status, error.response.data);
    } else {
      console.error("Erreur réseau / autre:", error.message);
    }
  }
}

fetchWeather();
