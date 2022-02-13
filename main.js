const url = "https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles?max=2";

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

/*function dataReceived(data) {
  //do something with the data
  //console.log(data);
}*/

function handleData(ninetiesSingles) {
  ninetiesSingles.forEach((single) => {
    console.log(single);
    //make template
    //grab it
    const template = document.querySelector("#singlesTemplate").content;
    //clone it
    const clone = template.cloneNode(true);
    //change it
    clone.querySelector(".song").textContent = single.Song;
    clone.querySelector(".artist").textContent = single.Artist;
    clone.querySelector(".album").textContent = single.Album;
    clone.querySelector(".year").textContent = single.Year;
    clone.querySelector("p").textContent = single.Description;
    //grab parent
    const parent = document.querySelector("main");
    //append it
    parent.appendChild(clone);
  });
}
