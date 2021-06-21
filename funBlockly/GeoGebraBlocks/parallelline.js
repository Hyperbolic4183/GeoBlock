 Blockly.Blocks['connectableparallelline'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null);
      this.appendValueInput("line")
          .setCheck(null)
          .appendField(new Blockly.FieldLabelSerializable("を通り"), "L");
      this.appendDummyInput()
          .appendField("に平行な直線");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectableparallelline'] = function(block) {
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    var value_line = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);
    
    var firstCharacterSlicedLine = value_line.slice(1);
    var lastCharacterSlicedLine = firstCharacterSlicedLine.slice(0,-1);

    var code = 'Line(' + lastCharacterSlicedPoint + ',' + lastCharacterSlicedLine + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  

  