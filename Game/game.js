let ctx = null;
// let gameMap = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
//     0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
//     0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
//     0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
//     0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
//     0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
//     0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
//     0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0
// ];

let tileW = 40, tileH = 40;
let currentSecond = 0, frameCount = 0, framesLastSecond = 0;

window.onload = function()
{
    ctx = document.getElementById('game').getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
};

testSub = new submarine(0,0);

function isValidMove(currentI, currentJ){
    return !(gameMap[currentI][currentJ] === 1 || currentJ >= gameMap[0].length || currentI >= gameMap.length || currentI < 0 || currentJ < 0);
}


function driveShipLeft(){
    driveShip("left");
}

function driveShipRight(){
    driveShip("right");

}

function driveShipDown(){
    driveShip("down");
}

function driveShipUp() {
    driveShip("up")
}

function addRouteToSub(){
    testSub.addToRoute(testSub.indexI, testSub.indexJ);
}

function driveShip(direction){
    if (direction === "right"){
        let tmp = testSub.indexJ + 1;
        if (isValidMove(testSub.indexI, tmp)){
            testSub.indexJ++;
            addRouteToSub()
            console.log(testSub.route);
        }
    } else if (direction === "left"){
        let tmp = testSub.indexJ - 1;
        if (isValidMove(testSub.indexI, tmp)){
            testSub.indexJ--;
            addRouteToSub()
        }
    } else if (direction === "up"){
        let tmp = testSub.indexI - 1;
        if (isValidMove(tmp, testSub.indexJ)){
            testSub.indexI--;
            addRouteToSub()
        }
    } else if (direction === "down"){
        let tmp = testSub.indexI + 1;
        if (isValidMove(tmp, testSub.indexJ)){
            testSub.indexI++;
            addRouteToSub()
        }
    }
}

let testTeam = new team();

function drawMap(map){
    for (let i = 0; i < map.length; i++){
        for (let j = 0; j < map[i].length; j++){
            if (map[i][j] === 0){
                ctx.fillStyle = "#8fbae4";
            } else if (map[i][j] === 1){
                ctx.fillStyle = "#5aa457";
            } else if (map[i][j] === 5){
                ctx.fillStyle = "#000000";
            }
            ctx.fillRect( j*tileW, i*tileH, tileW, tileH);
        }
    }
}

function drawGame()
{
    if(ctx==null) { return; }

    let sec = Math.floor(Date.now()/1000);
    if(sec!==currentSecond)
    {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    }
    else { frameCount++; }



    // for(let i = 0; i < gameMap.length; i++)
    // {
    //     for(let j = 0; j < gameMap[i].length; j++)
    //     {
    //         if (i === testSub.indexI && j === testSub.indexJ){
    //             ctx.fillStyle = "#000000";
    //         }else if (gameMap[i][j] === 0) {
    //             ctx.fillStyle = "#8fbae4";
    //         } else if (gameMap[i][j] === 1) {
    //             ctx.fillStyle = "#5aa457";
    //         }
    //         ctx.fillRect( j*tileW, i*tileH, tileW, tileH);
    //     }
    // }

    drawMap(testTeam.mapView);
    requestAnimationFrame(drawGame);
}