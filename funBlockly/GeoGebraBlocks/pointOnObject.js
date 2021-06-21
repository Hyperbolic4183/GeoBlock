//オブジェクト上の点
//オブジェクトとその点を紐付ける連想配列
var pointOnObjectArray = {object:{},point:{}};
Blockly.Blocks['pointonobject'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("上の点");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointonobject'] = function(block) {
    var code = '';
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);//これをkeyに、点の名前をvalueにして連想配列に格納
    var firstCharacterSlicedObject = value_object.slice(1);
    var lastCharacterSlicedObject = firstCharacterSlicedObject.slice(0,-1);
    if (lastCharacterSlicedObject in pointOnObjectArray['object']) {
      console.log('点を返す');
      code = pointOnObjectArray['object'][lastCharacterSlicedObject][0];
    } else {
      var name = ggbApplet.evalCommandGetLabels('Point('+lastCharacterSlicedObject+')');
      pointOnObjectArray['point'][[name]] = lastCharacterSlicedObject;//点の名前からオブジェクトを特定するために必要
      pointOnObjectArray['object'][[lastCharacterSlicedObject]] = [name];//オブジェクトに点が描かれたことがあるか判定する
      pointOnObjectArray['object'][[lastCharacterSlicedObject]]['checker'] = true;
      code = pointOnObjectArray['object'][lastCharacterSlicedObject][0];
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


  Blockly.Blocks['selectedpointonobject'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendValueInput("name")
          .setCheck(null)
          .appendField("上の点");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['selectedpointonobject'] = function(block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var firstCharacterSlicedName = value_name.slice(1);
    var lastCharacterSlicedName = firstCharacterSlicedName.slice(0,-1);
    var code = lastCharacterSlicedName;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };