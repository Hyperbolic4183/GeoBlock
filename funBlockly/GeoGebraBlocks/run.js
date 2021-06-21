

function evalInputTangent(strInput) {
  tangents = ggbApplet.evalCommandGetLabels(strInput);
  console.log('実行されるのが接線だった'+strInput);
  tangentArr[[strInput]] = {tangent:[tangents[0],tangents[2]]};
}
function evalInput(strInput) {
  ggbApplet.evalCommand(strInput);
  return false;
}
function evalInputSelectedColor(strInput) {
  var object = ggbApplet.evalCommandGetLabels(strInput);
  var strInputHead = strInput.slice(0, 5);
  if (strInputHead == "Inter") {
    console.log("Interだった");
    if (object.length == 1) {
      ggbApplet.setLabelVisible(object,false);
    } else {
      ggbApplet.setLabelVisible(object[0],true);
       ggbApplet.setLabelVisible(object[2],true);
    }  
  } else {
    console.log('Rotateだった');
    ggbApplet.setLabelVisible(object,false);
  }
}
function evalInputPoint(strInput) {
  //strInputはCみたいな点の名前
  var object = pointOnObjectArray['point'][strInput];
  if (pointOnObjectArray['object'][object]['checker']) {
    //引数の点が既に存在する
    pointOnObjectArray['object'][object]['checker'] = false;
  } else {
    console.log('2以上の点');
    var object = pointOnObjectArray['point'][strInput];
    var pointName = ggbApplet.evalCommandGetLabels('Point('+object+')');
    pointOnObjectArray['object'][[object]].push(pointName);

    for (var i=0; i<pointOnObjectArray['object'][[object]].length; i++) {
      console.log('点の名前は'+pointOnObjectArray['object'][[object]][i]);
      ggbApplet.setLabelVisible(pointOnObjectArray['object'][[object]][i],true);
    }
  }
}

Blockly.Blocks["runscript"] = {
  init: function () {
    this.appendValueInput("input").setCheck(null);
    this.appendDummyInput().appendField("を書く");
    this.setInputsInline(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["runscript"] = function (block) {
  var value_input = Blockly.JavaScript.valueToCode(block,"input",Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.　
  var firstCharacterSlicedInput = value_input.slice(1);
  var lastCharacterSlicedInput = firstCharacterSlicedInput.slice(0, -1);

  var inputHead = lastCharacterSlicedInput.slice(0, 5);
  console.log('inputHeadの文字数は' + inputHead.length);
  if (inputHead == "Inter" || inputHead == "Rotat") {
    console.log('inputHeadがInterまたはRotatだった');
    evalInputSelectedColor(lastCharacterSlicedInput);
  } else if (inputHead == 'Tange') {
    console.log('inputHeadがTangeだった');
    evalInputTangent(lastCharacterSlicedInput);
  } else if (inputHead.length == 1) {
    console.log('オブジェクト上の点が実行された');
    evalInputPoint(lastCharacterSlicedInput);
  } else {
    evalInput(lastCharacterSlicedInput);
  }
};
