export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/dayclear.png", import.meta.url),
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/daycloudy.png", import.meta.url),
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/dayrain.png", import.meta.url),
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/daystorm.png", import.meta.url),
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/daysnow.png", import.meta.url),
  },
  {
    day: true,
    condition: "fog",

    url: new URL("../assets/dayfog.png", import.meta.url),
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/nightclear.png", import.meta.url),
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/nightcloudy.png", import.meta.url),
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/nightrain.png", import.meta.url),
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/nightstorm.png", import.meta.url),
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/nightsnow.png", import.meta.url),
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/nightfog.png", import.meta.url),
  },
];

export const coordinates = {
  latitude: 37.7749, // Default to San Francisco
  longitude: -122.4194, // Default to San Francisco
};
export const APIkey = "bd5d44e629e0bcd51009c45d09d0af0f";
