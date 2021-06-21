

  //垂直二等分線
  Blockly.Blocks['connectablebisector'] = {
    init: function() {
      this.appendValueInput("point1")
          .setCheck(null);
      this.appendValueInput("point2")
          .setCheck(null)
          .appendField("と");
      this.appendDummyInput()
          .appendField("における垂直二等分線");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectablebisector'] = function(block) {
    var value_point1 = Blockly.JavaScript.valueToCode(block, 'point1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point2 = Blockly.JavaScript.valueToCode(block, 'point2', Blockly.JavaScript.ORDER_ATOMIC);

    var firstCharacterSlicedPoint1 = value_point1.slice(1);
    var lastCharacterSlicedPoint1 = firstCharacterSlicedPoint1.slice(0,-1);

    var firstCharacterSlicedPoint2 = value_point2.slice(1);
    var lastCharacterSlicedPoint2 = firstCharacterSlicedPoint2.slice(0,-1);

    // TODO: Assemble JavaScript into code variable.
    var code = 'PerpendicularBisector(' + lastCharacterSlicedPoint1 + ',' + lastCharacterSlicedPoint2 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
  };