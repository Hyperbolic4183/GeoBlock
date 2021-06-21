//オブジェクトを鏡映させる
Blockly.Blocks['reflectedobjectbyline'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendValueInput("line")
          .setCheck(null)
          .appendField("を");
      this.appendDummyInput()
          .appendField("について対称移動したもの");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(105);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['reflectedobjectbyline'] = function(block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var value_line = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedObject = value_object.slice(1);
    var lastCharacterSlicedObject = firstCharacterSlicedObject.slice(0,-1);

    var firstCharacterSlicedLine = value_line.slice(1);
    var lastCharacterSlicedLine = firstCharacterSlicedLine.slice(0,-1);

    var code = 'Reflect(' + lastCharacterSlicedObject +',' + lastCharacterSlicedLine +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['reflectedobjectbypoint'] = {
  init: function() {
    this.appendValueInput("object")
        .setCheck(null);
    this.appendValueInput("point")
        .setCheck(null)
        .appendField("を");
    this.appendDummyInput()
        .appendField("について対称移動したもの");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['reflectedobjectbypoint'] = function(block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedObject = value_object.slice(1);
    var lastCharacterSlicedObject = firstCharacterSlicedObject.slice(0,-1);

    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);

    var code = 'Reflect(' + lastCharacterSlicedObject +',' + lastCharacterSlicedPoint +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };



  //点を鏡映させる
  //点で
  Blockly.Blocks['reflectedpointbypoint'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendValueInput("point")
          .setCheck(null)
          .appendField("を");
      this.appendDummyInput()
          .appendField("について対称移動した点");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['reflectedpointbypoint'] = function(block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedObject = value_object.slice(1);
    var lastCharacterSlicedObject = firstCharacterSlicedObject.slice(0,-1);

    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Reflect(' + lastCharacterSlicedObject + ',' + lastCharacterSlicedPoint + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  //直線で
  Blockly.Blocks['reflectedpointbyline'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendValueInput("line")
          .setCheck(null)
          .appendField("を");
      this.appendDummyInput()
          .appendField("について対称移動した点");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['reflectedpointbyline'] = function(block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var value_line = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_ATOMIC);
    
    var firstCharacterSlicedObject = value_object.slice(1);
    var lastCharacterSlicedObject = firstCharacterSlicedObject.slice(0,-1);

    var firstCharacterSlicedLine = value_line.slice(1);
    var lastCharacterSlicedLine = firstCharacterSlicedLine.slice(0,-1);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Reflect(' + lastCharacterSlicedObject + ',' + lastCharacterSlicedLine + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };