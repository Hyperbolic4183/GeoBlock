Blockly.Blocks["connectablecircle"] = {
  init: function () {
    this.appendValueInput("pointOfCenter").setCheck(null);
    this.appendValueInput("radius")
      .setCheck(null)
      .appendField("を中心とし半径");
    this.appendDummyInput().appendField("の円");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["connectablecircle"] = function (block) {
  var value_pointofCenter = Blockly.JavaScript.valueToCode(
    block,
    "pointOfCenter",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_radius = Blockly.JavaScript.valueToCode(
    block,
    "radius",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var firstCharacterSlicedCenter = value_pointofCenter.slice(1);
  var lastCharacterSlicedCenter = firstCharacterSlicedCenter.slice(0, -1);

  var nameOfCenter = lastCharacterSlicedCenter.substr(0, 1);

  var code = "Circle(" + nameOfCenter + "," + value_radius + ")";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//2点を指定する円
Blockly.Blocks["connectablecircledefinedbytwopoints"] = {
  init: function () {
    this.appendValueInput("center").setCheck(null);
    this.appendValueInput("point").setCheck(null).appendField("を中心とし");
    this.appendDummyInput().appendField("を通る円");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["connectablecircledefinedbytwopoints"] = function (block) {
  var value_center = Blockly.JavaScript.valueToCode(
    block,
    "center",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_point = Blockly.JavaScript.valueToCode(
    block,
    "point",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  var firstCharacterSlicedCenter = value_center.slice(1);
  var lastCharacterSlicedCenter = firstCharacterSlicedCenter.slice(0, -1);

  var firstCharacterSlicedPoint = value_point.slice(1);
  var lastCharacterSlicedPoint = firstCharacterSlicedPoint.slice(0, -1);

  var code =
    "Circle(" +
    lastCharacterSlicedCenter +
    "," +
    lastCharacterSlicedPoint +
    ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
