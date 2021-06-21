  Blockly.Blocks['connectableangle'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput("center")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("を");
      this.appendValueInput("angle")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("を中心に");
      this.appendDummyInput()
          .appendField("度回転させた点");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectableangle'] = function(block) {
    var code = '';
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);//(1,0)
    var value_center = Blockly.JavaScript.valueToCode(block, 'center', Blockly.JavaScript.ORDER_ATOMIC);
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);

    var firstCharacterSlicedCenter = value_center.slice(1);
    var lastCharacterSlicedCenter = firstCharacterSlicedCenter.slice(0,-1);

    var nameOfPoint = judgePoint(lastCharacterSlicedPoint);
    var nameOfCenter = judgePoint(lastCharacterSlicedCenter);
    console.log('角度は' + value_angle);
    if (isNaN(value_angle)) {
      var firstCharacterSlicedAngle = value_angle.slice(1);
      var lastCharacterSlicedAngle = firstCharacterSlicedAngle.slice(0,-1);
      code = 'Rotate(' + nameOfPoint + ',' + lastCharacterSlicedAngle + ',' + nameOfCenter + ')' ;
    } else {
      code = 'Rotate(' + nameOfPoint + ',' + value_angle*3.1415/180 + ',' + nameOfCenter + ')' ;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


  //オブジェクトを回転させる
  Blockly.Blocks['rotatedobject'] = {
    init: function() {
      this.appendValueInput("point")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendValueInput("center")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("を");
      this.appendValueInput("angle")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("を中心に");
      this.appendDummyInput()
          .appendField("度回転させたもの");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['rotatedobject'] = function(block) {
    var code = '';
    var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);//(1,0)
    var value_center = Blockly.JavaScript.valueToCode(block, 'center', Blockly.JavaScript.ORDER_ATOMIC);
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint = value_point.slice(1);
    var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0,-1);

    var firstCharacterSlicedCenter = value_center.slice(1);
    var lastCharacterSlicedCenter = firstCharacterSlicedCenter.slice(0,-1);

    var nameOfPoint = judgePoint(lastCharacterSlicedPoint);
    var nameOfCenter = judgePoint(lastCharacterSlicedCenter);
    console.log('角度は' + value_angle);
    if (isNaN(value_angle)) {
      var firstCharacterSlicedAngle = value_angle.slice(1);
      var lastCharacterSlicedAngle = firstCharacterSlicedAngle.slice(0,-1);
      code = 'Rotate(' + nameOfPoint + ',' + lastCharacterSlicedAngle + ',' + nameOfCenter + ')' ;
    } else {
      code = 'Rotate(' + nameOfPoint + ',' + value_angle*3.1415/180 + ',' + nameOfCenter + ')' ;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };