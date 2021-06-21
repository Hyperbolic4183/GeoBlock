var tangentArr = {};
//接線
  Blockly.Blocks['connectabletangent'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("を通る");
      this.appendValueInput("circle")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("の接線");
      this.setOutput(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectabletangent'] = function(block) {
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    var value_circle = Blockly.JavaScript.valueToCode(block, 'circle', Blockly.JavaScript.ORDER_ATOMIC);

    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);

    var firstCharacterSlicedCircle = value_circle.slice(1);
    var lastCharacterSlicedCircle = firstCharacterSlicedCircle.slice(0,-1);

    var code = 'Tangent(' + lastCharacterSlicedPoint + ',' + lastCharacterSlicedCircle + ')';
    

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['selectabletangent'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("を通る");
      this.appendValueInput("circle")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("の接線")
          .appendField(new Blockly.FieldDropdown([["f","f"], ["g","g"], ["h","h"], ["i","i"], ["j","j"], ["k","k"], ["l","l"], ["m","m"], ["n","n"]]), "name");
      this.setOutput(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['selectabletangent'] = function(block) {
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    var value_circle = Blockly.JavaScript.valueToCode(block, 'circle', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('name');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };