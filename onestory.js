
var tracery = require("./tracery.js");
var grammars = require("./grammar.js");

function loadGrammar(name) {

    var grammar = tracery.createGrammar(grammars[name]);
    grammar.addModifiers({
	find : function(s) {
	    if (s.toUpperCase == s) {
		s = '%'+"FIND"+s.split('%')[1]+'%';
            }
	    return s;
	},

	depunct : function(s) {
	    s = s.split(".").join("*");
	    s = s.split(",").join("^");
	    return s;
	}
    });

    for (var i = 0; i < 1; i++) {// < 10

        var s = grammar.flatten("#origin#");
	// Silly extra stage by Dranorter
	s = s.split("%").join("#");
	s = s.split("«").join("[");
	s = s.split("»").join("]");
	grammar.symbols["theWholeNovel"] = new tracery.Symbol(grammar, "theWholeNovel", s);
	var t = grammar.flatten("#theWholeNovel#");

	t = t.split("*").join(".");
	t = t.split("^").join(',');
	t = t.split("' ").join('" ');
	t = t.split(" '").join(' "');
	t = t.split("'.").join('".');
	t = t.split(".'").join('."');
	t = t.split("~").join("\n\\par ");
	
        console.log(t);//s
	
    }

}

loadGrammar("nested");
