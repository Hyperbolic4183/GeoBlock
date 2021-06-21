function evalInput(strInput) {
  ggbApplet.evalCommand(strInput);
  return false;
}
  //名前をつけることができる点
  Blockly.Blocks['connectablenamedpoint'] = {
    init: function() {
      this.appendValueInput("name")
          .setCheck("String")
          .appendField("点");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField(new Blockly.FieldLabelSerializable("x"), "x");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField(new Blockly.FieldLabelSerializable("y"), "y");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectablenamedpoint'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var slicedname = value_name.slice(1);
    var name = slicedname.slice(0,-1);
    var code = name + '=' + '(' + value_x + ',' + value_y + ')'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  

  Blockly.Blocks['connectableselectablepoint'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("点")
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"]]), "name");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField(new Blockly.FieldLabelSerializable("x"), "x");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField(new Blockly.FieldLabelSerializable("y"), "y");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['connectableselectablepoint'] = function(block) {
    var dropdown_name = block.getFieldValue('name');
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name + '=' + '(' + value_x + ',' + value_y + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  //名前ごとに一つ一つブロックを作成する
  Blockly.Blocks['pointA'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("A");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointA'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'A';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointB'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("B");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointB'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'B';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointC'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("C");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointC'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'C';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointD'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("D");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointD'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'D';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointE'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("E");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointE'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'E';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointF'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("F");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointF'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'F';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointG'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("G");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointG'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'G';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointH'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("H");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointH'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'H';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['pointI'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("I");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointI'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'I';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.Blocks['pointJ'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("J");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointJ'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'J';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.Blocks['pointK'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("K");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointK'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'K';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.Blocks['pointL'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("L");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointL'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'L';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.Blocks['pointM'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("M");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointM'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'M';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.Blocks['pointN'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("N");
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['pointN'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'N';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  


  //座標を指定する点
  Blockly.Blocks['decidedvaluepoint'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("(");
      this.appendValueInput("valuex")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(",");
      this.appendValueInput("valuey")
          .setCheck(null);
      this.appendDummyInput();
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['decidedvaluepoint'] = function(block) {
    var value_valuex = Blockly.JavaScript.valueToCode(block, 'valuex', Blockly.JavaScript.ORDER_ATOMIC);
    var value_valuey = Blockly.JavaScript.valueToCode(block, 'valuey', Blockly.JavaScript.ORDER_ATOMIC);

    var firstCharacterSlicedValuex = value_valuex.slice(1);
    var lastCharacterSlicedValuex = firstCharacterSlicedValuex.slice(0,-1);

    var firstCharacterSlicedValuey = value_valuey.slice(1);
    var lastCharacterSlicedValuey = firstCharacterSlicedValuey.slice(0,-1);
    // TODO: Assemble JavaScript into code variable.

    var code = '(' + lastCharacterSlicedValuex + ',' + lastCharacterSlicedValuey + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };