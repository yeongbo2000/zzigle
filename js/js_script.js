// slide
setInterval(function () {
    $(".news_wrap ul").delay(2000);
    $(".news_wrap ul").animate({
        marginTop: '-310px'
    }, 1000)
    $(".news_wrap ul").delay(2000);
    $(".news_wrap ul").animate({
        marginTop: '-620px'
    }, 1000)
    $(".news_wrap ul").delay(2000);
    $(".news_wrap ul").animate({
        marginTop: '-930px'
    }, 1000)
    $(".news_wrap ul").delay(2000);
    $(".news_wrap ul").animate({
        marginTop: '-1240px'
    }, 1000)
    $(".news_wrap ul").delay(2000);
    $(".news_wrap ul").animate({
        marginTop: '-1550px'
    }, 1000)
    $(".news_wrap ul").animate({
        marginTop: '0px'
    }, 0)
});

//tab
function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}
