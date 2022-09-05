var isStart = false;
var isInMap = false;
window.onload = function () {
    var wall = document.getElementsByClassName("wall");
    /*start */
    document.getElementById("start").addEventListener("mouseover", function () {
        document.getElementById("result").textContent = "";
        isStart = true;
        isInMap = true;
        for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#EEEEEE"; }

    })

    /*out of the map */
    document.getElementById("wholeMaze").addEventListener("mouseleave", function () {
        isInMap = false;
    });
    /*wall */
    for (var i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseover", function (event) {
            if (isStart) {
                event.target.style.backgroundColor = "#FF0000";
                document.getElementById("result").textContent = "你撞到墙了，你输了！";
                isStart = false;
            }
        });
    for (var i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseleave", function (event) {
            event.target.style.backgroundColor = "#EEEEEE";
        });
    /*end */
    document.getElementById("end").addEventListener("mouseover", function () {
        if (isStart) {
            if (isInMap) { document.getElementById("result").textContent = "恭喜你，你赢了！"; }
            else {
                document.getElementById("result").textContent = "哦，我的朋友，请不要作弊！";
                isStart = false;
            }
        }
        isStart = false;
    });
}