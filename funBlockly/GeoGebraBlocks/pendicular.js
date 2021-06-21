function evalInput(strInput) {
    ggbApplet.evalCommand(strInput);
    return false;
  }
function Line(input1, input2) {
  var code = 'Line(' + input1 + ',' + input2 + ')';
  console.log('呼ばれた')
  return  code;
}
function Segment(input1, input2) {
  var code = 'Segment(' + input1 + ',' + input2 + ')';
  return code
}
  function PerpendicularLine(input1, input2) {
    console.log(input1, input2);
    var code = 'PerpendicularLine(' + input1 + ',' + input2 + ')';
    console.log('codeは' + code);
    ggbApplet.evalCommand(code);
  }
  //垂線
  
  Blockly.Blocks['connectableperpendicular'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null);
      this.appendValueInput("line")
          .setCheck(null)
          .appendField(new Blockly.FieldLabelSerializable("を通り"), "L");
      this.appendDummyInput()
          .appendField("に垂直な直線");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['connectableperpendicular'] = function(block) {
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    var value_line = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);
    
    var firstCharacterSlicedLine = value_line.slice(1);
    var lastCharacterSlicedLine = firstCharacterSlicedLine.slice(0,-1);
    console.log('直線は' + lastCharacterSlicedLine);

    var code = 'PerpendicularLine(' + lastCharacterSlicedPoint + ',' + lastCharacterSlicedLine + ')';
    console.log(code);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['unconnectableperpendicular'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null);
      this.appendValueInput("line")
          .setCheck(null)
          .appendField(new Blockly.FieldLabelSerializable("を通り"), "L");
      this.appendDummyInput()
          .appendField("に垂直な直線");
      this.setInputsInline(true);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['unconnectableperpendicular'] = function(block) {
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);//(0,0)
    var value_line = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);
    
    var firstCharacterSlicedLine = value_line.slice(1);
    var lastCharacterSlicedLine = firstCharacterSlicedLine.slice(0,-1);

    evalInput(lastCharacterSlicedPoint);
    evalInput(lastCharacterSlicedLine);
    var code = evalInput('PerpendicularLine(' + lastCharacterSlicedPoint + ',' + lastCharacterSlicedLine + ');');
    console.log('PerpendicularLine(' + lastCharacterSlicedPoint + ',' + lastCharacterSlicedLine + ');');
    return code;
  };