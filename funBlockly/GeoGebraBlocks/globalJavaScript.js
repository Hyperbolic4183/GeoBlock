var turtleStartPoint = [0,0];
var rotateTheta = 0;
var moveStep = 1;
var list = [];
var funcArr = [];

function test() {
    console.log('テスト');
}


function placement() {
    var pointElement = list[list.length-1];
    var x = pointElement[0];
    var y = pointElement[1];
    var point = `(${x},${y})`;
    ggbApplet.evalCommand(point);
}

function forward() {
    ggbApplet.evalCommand('A=(x(A)+x(B),y(A)+y(B))');
}
function left() {
    ggbApplet.evalCommand('SetValue(degreeA,degreeA+degreeB)');
}
function right(value) {
    var degree = value*3.14/180;
    console.log('実行された');
    ggbApplet.evalCommand(`SetValue(degreeA,degreeA-${degree})`);
    //funcArrに格納する(多分格納したらその時実行される)
}

//1秒間隔で実行する
function stepRun(arr) {
    for (var i=1; i<arr.length+1; i++){
        setTimeout(arr[i-1], i*1000);
    }
}


//0.1動かす
function turtleForwardFrame() {
    const distanceX = ggbApplet.getValue('x(B)');
    const distanceY = ggbApplet.getValue('y(B)');
    const deltaX = distanceX/10;
    const deltaY = distanceY/10;
    const code = `A=(x(A)+${deltaX},y(A)+${deltaY})`;
    ggbApplet.evalCommand(code);
}

//0.1秒間隔で10回実行する
function frameAdvance(func) {
    // for (var i=0; i<10; i++){
    //     setTimeout(func, i*100);
    // }
    
}