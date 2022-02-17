/*const url = `https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles?q={%22$distinct%22:%20%22Genre%22}&sort=Genre`;
 */

const url = `https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles`;

const options = {
  headers: {
    "x-apikey": "6209157434fd621565858472",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(ninetiesSingles) {
  ninetiesSingles.forEach((single) => {
    console.log(single);
    //make template
    //grab it
    const template = document.querySelector("#genresTemplate").content;
    //clone it
    const clone = template.cloneNode(true);
    //change it
    clone.querySelector("a").textContent = single.Genre;

    clone
      .querySelector("a")
      .setAttribute("href", `songslist.html?genre=${single.Genre}`);

    const parent = document.querySelector("main");
    //append it
    parent.appendChild(clone);
  });
}
