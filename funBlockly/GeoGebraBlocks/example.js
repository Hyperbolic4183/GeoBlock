function forward() {
    ggbApplet.evalCommand('A=(x(A)+x(B),y(A)+y(B))');
}
function left() {
    ggbApplet.evalCommand('SetValue(α,α+β)');
}

function frameAdvance() {
    for (var i=1; i<11; i++){
        setTimeout(frame, i*10);
    }
}

function frame() {
    ggbApplet.evalCommand(`A=(x(A)+${deltaX},y(A)+${deltaY}`);
}



function frameAdvance(func) {
    for (var i=0; i<10; i++){
        setTimeout(func, i*100);
    }
}

function turtleForwardFrame() {
    ggbApplet.evalCommand('A=(x(A)+0.1,y(A))');
}
function moveForward() {
    ggbApplet.evalCommand(`A=(x(A)+1,y(A))`);
}
//