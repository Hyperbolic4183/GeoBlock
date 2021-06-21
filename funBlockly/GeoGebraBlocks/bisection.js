//二等分線
  Blockly.Blocks['connectablebisection'] = {
    init: function() {
      this.appendValueInput("point1")
          .setCheck(null)
          .appendField("∠");
      this.appendValueInput("point2")
          .setCheck(null);
      this.appendValueInput("point3")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("の二等分線");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectablebisection'] = function(block) {
    var value_point1 = Blockly.JavaScript.valueToCode(block, 'point1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point2 = Blockly.JavaScript.valueToCode(block, 'point2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point3 = Blockly.JavaScript.valueToCode(block, 'point3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint1 = value_point1.slice(1);
    var lastCharacterSlicedPoint1 = firstCharacterSlicedPoint1.slice(0,-1);

    var firstCharacterSlicedPoint2 = value_point2.slice(1);
    var lastCharacterSlicedPoint2 = firstCharacterSlicedPoint2.slice(0,-1);

    var firstCharacterSlicedPoint3 = value_point3.slice(1);
    var lastCharacterSlicedPoint3 = firstCharacterSlicedPoint3.slice(0,-1);


    var code = 'AngleBisector(' + lastCharacterSlicedPoint1 + ',' + lastCharacterSlicedPoint2 + ',' + lastCharacterSlicedPoint3 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['connectablebisectionbylines'] = {
    init: function() {
      this.appendValueInput("line1")
          .setCheck(null);
      this.appendValueInput("line2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("の二等分線");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectablebisectionbylines'] = function(block) {
    var value_line1 = Blockly.JavaScript.valueToCode(block, 'line1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_line2 = Blockly.JavaScript.valueToCode(block, 'line2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedLine1 = value_line1.slice(1);
    var lastCharacterSlicedLine1 = firstCharacterSlicedLine1.slice(0,-1);

    var firstCharacterSlicedLine2 = value_line2.slice(1);
    var lastCharacterSlicedLine2 = firstCharacterSlicedLine2.slice(0,-1);

    var code = 'AngleBisector(' + lastCharacterSlicedLine1 + ',' + lastCharacterSlicedLine2 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };