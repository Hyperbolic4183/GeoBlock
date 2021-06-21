function TurtleForward(value) {
    console.log('実行された');
    ggbApplet.evalCommand(`SetValue(n,${value})`);
    frameAdvance(turtleForwardFrame);
}

const promiseFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

TurtleBack = (value) => {
    var code = 'TurtleBack(turtle,'+value+')';
    ggbApplet.evalCommand(code);
}

TurtleRight = (value) => {
    var degree = value*3.14/180;
    ggbApplet.evalCommand(`SetValue(degreeA,degreeA-${degree})`);
    // var code = 'TurtleRight(turtle,'+degree+')';
    // ggbApplet.evalCommand(code);
}

async function TurtleLeft(value) {
    var degree = value*3.14/180;
    ggbApplet.evalCommand(`SetValue(degreeA,degreeA+${degree})`);
}

TurtlePoint = (value) => {
    console.log('実行された');
    ggbApplet.evalCommand('(2,2)');
}


//タートルを自作のものに置き換える
var turtleStartPoint = [0,0];
var rotateTheta = 0;
var moveStep = 1;
var list = [];

//リストの末尾の点を配置する関数
function placement() {
    var pointElement = list[list.length-1];
    var x = pointElement[0];
    var y = pointElement[1];
    var point = `(${x},${y})`;
    ggbApplet.evalCommand(point);
}

//1秒間待機する関数
function sleep(waitMsec) {
    var startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
}