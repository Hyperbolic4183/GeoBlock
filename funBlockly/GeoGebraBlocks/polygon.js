function evalInput(strInput) {
    ggbApplet.evalCommand(strInput);
    return false;
  }
  //三角形
  Blockly.Blocks['triangle'] = {
    init: function() {
      this.appendValueInput("point1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P1");
      this.appendValueInput("point2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P2");
      this.appendValueInput("point3")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P3");
      this.appendDummyInput()
          .appendField("を通る三角形");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //自由度に応じて処理を変える必要がある
  /*
  value_pointが自由度2の点であれば入力された値が(A=(1,0))であることが保証されているため、slicedを使えば良い
  一方で交点のように自由度1以下の値は入力された値に対してslicedは用いるべきではない
  */
 function judgePoint(slicedValue) {
   if (slicedValue.length == 7) {  
     //例えばA=(0,0)これは7文字
     var ans = slicedValue.substr(0,1);
     return ans;
   } else {
     console.log('引数が点ではない'+slicedValue);
     return slicedValue;
   }
 }

  Blockly.JavaScript['triangle'] = function(block) {
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

    var nameOfPoint1 = judgePoint(lastCharacterSlicedPoint1);//lastCharacterSlicedPoint1.substr(0,1);
    var nameOfPoint2 = judgePoint(lastCharacterSlicedPoint2);//lastCharacterSlicedPoint2.substr(0,1);
    var nameOfPoint3 = judgePoint(lastCharacterSlicedPoint3);//lastCharacterSlicedPoint3.substr(0,1);

    console.log(nameOfPoint1);
    console.log(nameOfPoint2);
    console.log(nameOfPoint3);

    //evalInput(lastCharacterSlicedPoint1);
    //evalInput(lastCharacterSlicedPoint2);
    //evalInput(lastCharacterSlicedPoint3);
    
    //var code = evalInput('Polygon(' + nameOfPoint1 + ',' + nameOfPoint2 + ',' + nameOfPoint3 + ')');
    var code = 'Polygon(' + nameOfPoint1 + ',' + nameOfPoint2 + ',' + nameOfPoint3 + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  //四角形
  Blockly.Blocks['rectangle'] = {
    init: function() {
      this.appendValueInput("point1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P1");
      this.appendValueInput("point2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P2");
      this.appendValueInput("point3")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P3");
      this.appendValueInput("point4")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldLabelSerializable("点"), "P4");
      this.appendDummyInput()
          .appendField("を通る四角形");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['rectangle'] = function(block) {
    var value_point1 = Blockly.JavaScript.valueToCode(block, 'point1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point2 = Blockly.JavaScript.valueToCode(block, 'point2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point3 = Blockly.JavaScript.valueToCode(block, 'point3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_point4 = Blockly.JavaScript.valueToCode(block, 'point4', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedPoint1 = value_point1.slice(1);
    var lastCharacterSlicedPoint1 = firstCharacterSlicedPoint1.slice(0,-1);

    var firstCharacterSlicedPoint2 = value_point2.slice(1);
    var lastCharacterSlicedPoint2 = firstCharacterSlicedPoint2.slice(0,-1);

    var firstCharacterSlicedPoint3 = value_point3.slice(1);
    var lastCharacterSlicedPoint3 = firstCharacterSlicedPoint3.slice(0,-1);

    var firstCharacterSlicedPoint4 = value_point4.slice(1);
    var lastCharacterSlicedPoint4 = firstCharacterSlicedPoint4.slice(0,-1);

    var nameOfPoint1 = judgePoint(lastCharacterSlicedPoint1);
    var nameOfPoint2 = judgePoint(lastCharacterSlicedPoint2);
    var nameOfPoint3 = judgePoint(lastCharacterSlicedPoint3);
    var nameOfPoint4 = judgePoint(lastCharacterSlicedPoint4);
    

    var code = evalInput('Polygon(' + nameOfPoint1 + ',' + nameOfPoint2 + ',' + nameOfPoint3 + ',' + nameOfPoint4 + ')');
    return [code, Blockly.JavaScript.ORDER_NONE];
  };