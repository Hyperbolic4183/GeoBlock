var testArr = {};

 //交点
 Blockly.Blocks['connectableintersection'] = {
  init: function() {
    this.appendValueInput("object1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("object2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("と");
    this.appendDummyInput()
        .appendField("の交点");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['connectableintersection'] = function(block) {
  var code = '';
  var value_object1 = Blockly.JavaScript.valueToCode(block, 'object1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_object2 = Blockly.JavaScript.valueToCode(block, 'object2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var firstCharacterSlicedObject1 = value_object1.slice(1);
  var lastCharacterSlicedObject1 = firstCharacterSlicedObject1.slice(0,-1);

  var firstCharacterSlicedObject2 = value_object2.slice(1);
  var lastCharacterSlicedObject2 = firstCharacterSlicedObject2.slice(0,-1);

  console.log(lastCharacterSlicedObject2);
  
  //Tangentの時のみ処理を分ける
   var object1Head = lastCharacterSlicedObject1.slice(0,5);
   var object2Head = lastCharacterSlicedObject2.slice(0,5);

   if (object1Head == 'Tange') {
    //tangentArrのCircle配列のpointkeyがあるか(既に交点が書かれたことがあるか)
    if ('point' in tangentArr[lastCharacterSlicedObject1]) {
      code = tangentArr[lastCharacterSlicedObject1]['point'][0];
    } else {
      //初めの挙動
      var tangent1 = tangentArr[lastCharacterSlicedObject1]['tangent'][0];
      var tangent2 = tangentArr[lastCharacterSlicedObject1]['tangent'][1];
      var intersect1 = ggbApplet.evalCommandGetLabels('Intersect('+lastCharacterSlicedObject2+','+tangent1+')');
      var intersect2 = ggbApplet.evalCommandGetLabels('Intersect('+lastCharacterSlicedObject2+','+tangent2+')');
      ggbApplet.setLabelVisible(intersect1[0],true);
      ggbApplet.setLabelVisible(intersect2[0],true);
      tangentArr[[lastCharacterSlicedObject1]]['point'] = [intersect1[0],intersect2[0]];
      code = tangentArr[lastCharacterSlicedObject1]['point'][0];
    }
   } else if (object2Head == 'Tange') {
    if ('point' in tangentArr[lastCharacterSlicedObject2]) {
      code = tangentArr[lastCharacterSlicedObject2]['point'][0];
    } else {
      //初めの挙動
      var tangent1 = tangentArr[lastCharacterSlicedObject2]['tangent'][0];
      var tangent2 = tangentArr[lastCharacterSlicedObject2]['tangent'][1];
      var intersect1 = ggbApplet.evalCommandGetLabels('Intersect('+lastCharacterSlicedObject1+','+tangent1+')');
      var intersect2 = ggbApplet.evalCommandGetLabels('Intersect('+lastCharacterSlicedObject1+','+tangent2+')');
      ggbApplet.setLabelVisible(intersect1[0],true);
      ggbApplet.setLabelVisible(intersect2[0],true);
      tangentArr[[lastCharacterSlicedObject2]]['point'] = [intersect1[0],intersect2[0]];
      code = tangentArr[lastCharacterSlicedObject2]['point'][0];
    }
   } else {
     console.log('接線は含まれていない');
     code = 'Intersect(' + lastCharacterSlicedObject1 + ',' + lastCharacterSlicedObject2 + ')';
   }
   return [code, Blockly.JavaScript.ORDER_NONE];
};

//複数ある場合
Blockly.Blocks['selectableintersection'] = {
  init: function() {
    this.appendValueInput("object1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("object2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("と");
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("の交点");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['selectableintersection'] = function(block) {
  var value_object1 = Blockly.JavaScript.valueToCode(block, 'object1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_object2 = Blockly.JavaScript.valueToCode(block, 'object2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var firstCharacterSlicedObject1 = value_object1.slice(1);
  var lastCharacterSlicedObject1 = firstCharacterSlicedObject1.slice(0,-1);

  var firstCharacterSlicedObject2 = value_object2.slice(1);
  var lastCharacterSlicedObject2 = firstCharacterSlicedObject2.slice(0,-1);

  var firstCharacterSlicedName = value_name.slice(1);
  var lastCharacterSlicedName = firstCharacterSlicedName.slice(0,-1);
  
  var code = lastCharacterSlicedName;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};