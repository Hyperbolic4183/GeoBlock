Blockly.Blocks['angleofpoints'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("∠");
      this.appendValueInput("point1")
          .setCheck(null);
      this.appendValueInput("point2")
          .setCheck(null);
      this.appendValueInput("point3")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['angleofpoints'] = function(block) {
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
    
    var code = 'Angle(' + lastCharacterSlicedPoint1 + ',' + lastCharacterSlicedPoint2 + ',' + lastCharacterSlicedPoint3 + ')';
    console.log('angleは' + code)
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };