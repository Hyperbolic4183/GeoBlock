
 Blockly.Blocks['connectablesegment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線分");
    this.appendValueInput("point1")
        .setCheck(null);
    this.appendValueInput("point2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
  
  Blockly.JavaScript['connectablesegment'] = function(block) {
    var value_point1 = Blockly.JavaScript.valueToCode(block, 'point1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point2 = Blockly.JavaScript.valueToCode(block, 'point2', Blockly.JavaScript.ORDER_ATOMIC);

    var firstCharacterSlicedPoint1 = value_point1.slice(1);
    var lastCharacterSlicedPoint1 = firstCharacterSlicedPoint1.slice(0,-1);

    var firstCharacterSlicedPoint2 = value_point2.slice(1);
    var lastCharacterSlicedPoint2 = firstCharacterSlicedPoint2.slice(0,-1);

    // TODO: Assemble JavaScript into code variable.
    var code = `${Segment(lastCharacterSlicedPoint1,lastCharacterSlicedPoint2)}`;
    console.log(code);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // //長さを指定した線分
  // Blockly.Blocks['unconnectablelengthsegment'] = {
  //   init: function() {
  //     this.appendValueInput("point")
  //         .setCheck(null);
  //     this.appendValueInput("length")
  //         .setCheck(null)
  //         .appendField("から右に");
  //     this.appendDummyInput()
  //         .appendField("の線分");
  //     this.setInputsInline(true);
  //     this.setColour(315);
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };
  // Blockly.JavaScript['unconnectablelengthsegment'] = function(block) {
  //   var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
  //   var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  //   // TODO: Assemble JavaScript into code variable.
  //   var firstCharacterSlicedPoint = value_point.slice(1);
  //   var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);

  //   //var name = ggbApplet.evalCommandGetLabels('(' + newXOfPoint + ',' + yOfPoint + ')');

  //   var labels = ggbApplet.evalCommandGetLabels('Segment(' + lastCharacterSlicedPoint + ',' + value_length + ')');
  //   console.log('配列は' + labels[2]);
  //   ggbApplet.setColor(labels[2], 204, 244, 102);
  //   //var code = evalInput('Segment(' + lastCharacterSlicedPoint + ',' + value_length + ')');
  //   //return code;
  // };

  Blockly.Blocks['connectablelengthsegment'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null);
      this.appendValueInput("length")
          .setCheck(null)
          .appendField("から右に");
      this.appendDummyInput()
          .appendField("の線分");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectablelengthsegment'] = function(block) {
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint1 = value_point.slice(1);
    var lastCharacterSlicedPoint1 = firstCharacterSlicedPoint1.slice(0,-1);
    

    var code = `${Segment(' + lastCharacterSlicedPoint1 + ',' + value_length + ')}`;
    console.log(code);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };