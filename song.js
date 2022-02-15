/*const urlParams = new URLSearchParams(window.location.search);
//const brandname = urlParams.get("brandname");
const id = urlParams.get("id");
console.log(urlParams);
//alert("hello");*/

const url =
  "https://kea2ndsemester-9e64.restdb.io/rest/nineties-singles/620b84d6f701f460000a129e";

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
    console.log(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(single) {
  console.log(single);

  document.querySelector(".song").textContent = single.Song;
  document.querySelector(".artist").textContent = "by " + single.Artist;
  document.querySelector(".album").textContent = "Album: " + single.Album;
  document.querySelector(".genre").textContent = single.Genre;
  document.querySelector("a").setAttribute("href", `${single.Youtube}`);
  document.querySelector("p").innerText = single.Lyrics;
  document.querySelector(".songimg").src = single.image;
}
