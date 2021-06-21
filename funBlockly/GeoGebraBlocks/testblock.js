Blockly.Blocks['block_asyncplay'] = {
    init: function() {
      this.appendStatementInput("MUSIC")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("play");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['block_asyncplay'] = function(block) {
    var statements_music = Blockly.JavaScript.statementToCode(block, 'MUSIC');
    var code = "async function asyncplay() {\n" + statements_music + "\n}\n";
    return code;
  };
  
  Blockly.Blocks['block_play'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("play");
      this.setInputsInline(true);
      this.setPreviousStatement(true, "String");
      this.setNextStatement(true, "String");
      this.setColour(120);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['block_play'] = function(block) {
      var code = "await play(1000);\n";
      return code;
  };