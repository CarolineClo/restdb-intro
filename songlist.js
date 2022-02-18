const urlParams = new URLSearchParams(window.location.search);
const genre = urlParams.get("genre");

let url = "https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles";

if (genre) {
  url += `?q={"Genre": "${genre}"}`;
}

/*const url = `https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles?q={"Genre": "${genre}"}`;
 */
console.log(url);

//const url = "https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles";

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
    clone.querySelector("img").src = single.image;
    clone.querySelector("a").setAttribute("href", `song.html?id=${single._id}`);
    //grab parent
    const parent = document.querySelector("main");
    //append it
    parent.appendChild(clone);
  });
}
