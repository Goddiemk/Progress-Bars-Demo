const API_URL = "http://pb-api.herokuapp.com/bars";

export default function getAppDataService() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const buttonValues = data.buttons.sort((a, b) => a - b);
      const barValues = data.bars;
      return { buttonValues, barValues };
    });
}
