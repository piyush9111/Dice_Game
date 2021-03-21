function change() {

    var rn1 = Math.random();
    rn1 = rn1 * 6;
    rn1 = Math.floor(rn1) + 1;
    var randomimage1 = "dice" + rn1 + ".png";
    var randonimagesource1 = "images/" + randomimage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randonimagesource1);

    var rn2 = Math.random();
    rn2 = rn2 * 6;
    rn2 = Math.floor(rn2) + 1;
    var randomimage2 = "dice" + rn2 + ".png";
    var randonimagesource2 = "images/" + randomimage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randonimagesource2);

    var h = document.querySelector("h1");
    if (rn1 > rn2) {
        h.innerHTML = "Player1 Wins";
    } else if (rn2 > rn1) {
        h.innerHTML = "Player2 Wins";
    } else if (rn1 == rn2) {
        h.innerHTML = "Draw";
    }

}