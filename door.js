var links = [
    "https://youtu.be/WCs5w9aEEEg?si=96u_WIw0MChZByBW",
    "https://youtu.be/T6kr43pmMws?si=BKz33d_4K94wY_rF",
    "https://youtu.be/RF1BW5CbVQc?si=1UpVu1juaqWBnVj9",
    "https://youtu.be/JwRAy0p9BBo?si=1Rrlkc5AWGFapB1W",
];

function getRandomLink() {
    return links[Math.floor(Math.random() * links.length)];
}

document.getElementById("door").addEventListener("click", function() {
    console.log("Door Easter Egg :)");
    var randomLink = getRandomLink();
    document.getElementById("randomLink").href = randomLink;
    var newTab = window.open(randomLink, "_blank");
    newTab.focus();
});