const { LISTS_LENGTH_TOOLTIP } = require("blockly/msg/en");

class GeoGebraScrpit {
     A = "A";
     B = "B";
     C = "C";
     D = "D";
     E = "E";
    Line(input1, input2) {
        var code = 'Line(' + input1 + ',' + input2 + ')';

        ggbApplet.evalCommand(code);
    }
}