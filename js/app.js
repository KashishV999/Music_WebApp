

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "Song and Artist App Data");

window.onload = function () {
  console.log("Content Loaded");

  let navigation = document.querySelector("#menu");
  let firstButton;

  for (let i = 0; i < artists.length; i++) {
    let button = document.createElement("button");
    navigation.appendChild(button);
    button.innerText = artists[i].name;

    if (i === 0) {
      firstButton = button;
    }

    button.onclick = function () {
      let main = document.querySelector("main");
      let displayname = document.querySelector("#selected-artist");
      main.innerHTML = "";
      displayname.innerHTML = "";
      let para = document.createElement("p");
      para.innerHTML = `${button.innerText} (`;
      for (let j = 0; j < artists[i].links.length; j++) {
        let an = document.createElement("a");
        an.href = artists[i].links[j].url;
        an.innerText = artists[i].links[j].name;
        para.appendChild(an);

        if (j < artists[i].links.length - 1) {
          para.innerHTML += `, `;
        } else {
          para.innerHTML += ")";
        }
      }
      displayname.appendChild(para);
      main.appendChild(displayname);

      let filter = songs.filter(function (song) {
        return song.artistId.includes(artists[i].artistId);
      });

      let outerDiv = document.createElement("div");
      outerDiv.className = "container";

      filter.forEach((filtersong) => {
        let card = createSongCard(filtersong);
        outerDiv.appendChild(card);
      });

      main.appendChild(outerDiv);
    };
  }

  if (firstButton) {
    firstButton.click();
  }

  function createSongCard(song) {
    let card = document.createElement("div");
    card.className = "card";

    let anchor = document.createElement("a");
    anchor.href = song.mediaUrl;
    anchor.target = "_blank";
    let image = document.createElement("img");
    image.src = song.imageUrl;
    let divThird = document.createElement("div");
    divThird.className = "details";
    let headtwo = document.createElement("h2");
    let time = document.createElement("time");
    let span = document.createElement("span");
    headtwo.innerText = song.title;
    time.innerText = song.released;

    let minutes = Math.floor(song.duration / 60);
    let seconds = song.duration % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    span.innerHTML = `${minutes}:${seconds}`;
    divThird.appendChild(headtwo);
    divThird.appendChild(time);
    divThird.appendChild(span);
    card.appendChild(anchor);
    anchor.appendChild(image);
    card.appendChild(divThird);
    return card;
  }
};
