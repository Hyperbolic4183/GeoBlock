//x座標
Blockly.Blocks['valueofx'] = {
  init: function() {
    this.appendValueInput("Point")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("のx座標");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['valueofx'] = function(block) {
  var value_point = Blockly.JavaScript.valueToCode(block, 'Point', Blockly.JavaScript.ORDER_ATOMIC);

  var firstCharacterSlicedPoint = value_point.slice(1);
  var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);
  // TODO: Assemble JavaScript into code variable.
  var code = 'x(' + lastCharacterSlicedPoint + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//y座標
Blockly.Blocks['valueofy'] = {
  init: function() {
    this.appendValueInput("Point")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("のy座標");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['valueofy'] = function(block) {
  var value_point = Blockly.JavaScript.valueToCode(block, 'Point', Blockly.JavaScript.ORDER_ATOMIC);

  var firstCharacterSlicedPoint = value_point.slice(1);
  var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);
  // TODO: Assemble JavaScript into code variable.
  var code = 'y(' + lastCharacterSlicedPoint + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};