Blockly.Blocks['lengthofsegment'] = {
    init: function() {
      this.appendValueInput("segment")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("の長さ");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['lengthofsegment'] = function(block) {
    var value_segment = Blockly.JavaScript.valueToCode(block, 'segment', Blockly.JavaScript.ORDER_ATOMIC);
    var firstCharacterSlicedSegment = value_segment.slice(1);
    var lastCharacterSlicedSegment = firstCharacterSlicedSegment.slice(0,-1);

    // TODO: Assemble JavaScript into code variable.
    var code = 'Distance(' + lastCharacterSlicedSegment +')';
    console.log('実行された');
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


  Blockly.Blocks['lengthoftwopoints'] = {
    init: function() {
      this.appendValueInput("point1")
          .setCheck(null);
      this.appendValueInput("point2")
          .setCheck(null)
          .appendField("から");
      this.appendDummyInput()
          .appendField("までの長さ");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['lengthoftwopoints'] = function(block) {
    var value_point1 = Blockly.JavaScript.valueToCode(block, 'point1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point2 = Blockly.JavaScript.valueToCode(block, 'point2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint1 = value_point1.slice(1);
    var lastCharacterSlicedPoint1 = firstCharacterSlicedPoint1.slice(0,-1);

    var firstCharacterSlicedPoint2 = value_point2.slice(1);
    var lastCharacterSlicedPoint2 = firstCharacterSlicedPoint2.slice(0,-1);

    var code = 'Distance(' + lastCharacterSlicedPoint1 + ',' + lastCharacterSlicedPoint2 + ')';
    console.log('実行された');
    console.log(code);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };