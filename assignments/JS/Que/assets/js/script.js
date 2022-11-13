let imgSrc = "assets/image/girl.gif";
let queData = {
    girls: [
        {letter: "A", img: imgSrc},
        {letter: "B", img: imgSrc},
        {letter: "C", img: imgSrc},
        {letter: "D", img: imgSrc},
        {letter: "E", img: imgSrc},
        {letter: "F", img: imgSrc}
    ],
    nextGirl: function () {
        let lastGirl = this.girls.pop();
        this.girls.unshift(lastGirl);
    }
}

renderQue();

function renderQue() {
    $(`main> section:first-child`).empty();
    for (let i = 0; i < queData.girls.length; i++) {
        $("main> section:first-child").append(`<div><img src="${queData.girls[i].img}" alt="girl"><h4>${queData.girls[i].letter}</h4></div>`);
    }
    queData.nextGirl();
}

setInterval(renderQue, 3000);
