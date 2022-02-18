const url = `https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles?q={"$distinct": "Genre"}&sort=Genre`;

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
    clone.querySelector("a").textContent = single;

    clone.querySelector("a").href += single;

    const parent = document.querySelector("main");
    //append it
    parent.appendChild(clone);
  });
}
