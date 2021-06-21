//亀を配置する
Blockly.Blocks["turtle"] = {
  init: function () {
    this.appendDummyInput().appendField("亀を配置する");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtle"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  console.log("亀が配置された");
  var code = ggbApplet.evalCommand("turtle=Turtle()");
  return code;
};

//亀を消去する
Blockly.Blocks["deleteturtle"] = {
  init: function () {
    this.appendDummyInput().appendField("亀を消去する");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["deleteturtle"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ggbApplet.deleteObject("turtle");
  return code;
};

//亀を前に進める
Blockly.Blocks["turtleforward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("前に")
      .appendField(new Blockly.FieldNumber(1, -10, 10), "step")
      .appendField("進む");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtleforward"] = function (block) {
  console.log("実行された"); //実行されてる
  var number_step = block.getFieldValue("step");
  // ggbApplet.evalCommand(`SetValue(n,${number_step})`);
  // return frameAdvance(moveForward);
  var forwardCode = 'test()';
  return forwardCode
};

function test() {
  console.log('testが実行された');
}


//0.1秒間隔で10回実行する
function frameAdvance(func) {
  for (var i = 0; i < 10; i++) {
    setTimeout(func, i * 100);
  }
}
function moveForward() {
  ggbApplet.evalCommand(`A=(x(A)+0.1,y(A))`);//0.1に変更
}


//亀を後ろに進める
Blockly.Blocks["turtleback"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("後ろに")
      .appendField(new Blockly.FieldNumber(1, -10, 10), "step")
      .appendField("進む");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtleback"] = function (block) {
  var number_step = block.getFieldValue("step");
  var backCode = `TurtleBack(${number_step})\n`;
  return backCode;
};

//右に回す
Blockly.Blocks["turtleright"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("右に")
      .appendField(new Blockly.FieldAngle(90), "angle")
      .appendField("度回す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtleright"] = function (block) {
  var angle_angle = block.getFieldValue("angle");
  var angleCode = `right(${angle_angle})\n`; //`TurtleRight(${angle_angle})\n`;
  return angleCode;
};

//左に回る
Blockly.Blocks["turtleleft"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("左に")
      .appendField(new Blockly.FieldAngle(90), "angle")
      .appendField("度回す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtleleft"] = function (block) {
  var angle_angle = block.getFieldValue("angle");
  var angleCode = `TurtleLeft(${angle_angle})\n`;
  return angleCode;
};

//点を配置する
Blockly.Blocks["turtlepoint"] = {
  init: function () {
    this.appendDummyInput().appendField("点を配置する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtlepoint"] = function (block) {
  console.log("実行された");
  var turtlePoint = "TurtlePoint()";
  return turtlePoint;
};

//ステップ実行するブロック
Blockly.Blocks["runbystep"] = {
  init: function () {
    this.appendStatementInput("contents")
      .setCheck(null)
      .appendField("ステップ実行する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["runbystep"] = function (block) {
  var statements_contents = Blockly.JavaScript.statementToCode(
    block,
    "contents"
  );
  // TODO: Assemble JavaScript into code variable.
  console.log(statements_contents);
  var code = "...;\n";
  return code;
};

//ゆっくり前に進める
Blockly.Blocks["turtleforwardslowly"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("ゆっくり前に")
      .appendField(new Blockly.FieldNumber(1, -10, 10), "step")
      .appendField("進む");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["turtleforwardslowly"] = function (block) {
  var number_step = block.getFieldValue("step");
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  return code;
};
