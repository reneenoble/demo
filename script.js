const winImg = document.getElementById("winImg")

winImg.onload = function() {
        fetch(url="https://source.unsplash.com/random/?plants/200")
        .then((response) => winImg.src = (response.url));
      };


// answerButton.onload = submitAnswer
