
var tracery = require("./tracery.js");
var grammars = require("./grammar.js");
var fs = require("fs");



function loadGrammar(name) {

    //TODO: Idea here will be to try and generate stories and keep them in a list,
    // sorted by number of STORYGOESHERE holes. A complete narrative can be made using
    // a subset with numstories - numholes = 1. Within that constraint, we want to use
    // the more complicated stories; longer text and more holes both seem relevant.
    // Maybe more holes is only relevant for the choice of top-level story.
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
    
    var completeStories = [];
    var incompleteStories = [];
    
    for (var i = 0; i < 100; i++) {
        var s = ""
        try {
            
            s = grammar.flatten("#countlessOrigin#");

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
	
            //console.log(t);//s
            // t is the story. Now what do we do with it?
        
            holes = (t.match(/STORYGOESHERE/g) || []).length;
        
            switch (holes) {
                case 0:
                    completeStories.push(t);
                    break;
                default:
                    incompleteStories.push(t);
                    break;
                         }
        }
        catch (err) {}
        
    }
    completeStories.sort(function (a, b) {return a.split(" ").length - b.split(" ").length});
    console.log("Complete:");
    for (var i = 0; i < completeStories.length; i++) {
        console.log(completeStories[i].split(" ").length+" words");
    }
    incompleteStories.sort( function (a,b) {return (a.match(/STORYGOESHERE/g) || []).length - (b.match(/STORYGOESHERE/g) || []).length || a.length - b.length});
    console.log("Incomplete:");
    for (var i = 0; i < incompleteStories.length; i++) {
        console.log((incompleteStories[i].match(/STORYGOESHERE/g) || []).length +" holes, "+ incompleteStories[i].split(" ").length+" words");
    }
    
    // OOH IDEA I could do a recursive thing: First sort them by number of holes.
    // Discard the last element (most holes) until the task is feasible.
    // Then set the last element aside as our main story. Discard the last element of the new list until the task is feasible.
    // Plug the last element into the first hole in our existing story. Discard the last element... etc.
    var story = "STORYGOESHERE";
    while (incompleteStories.length > 0 && ((story.match(/STORYGOESHERE/g) || []).length > 0) && (completeStories.length > 0)) {
        storyHoles = (story.match(/STORYGOESHERE/g) || []).length
        // Discard the most hole-filled until the task becomes possible
        while (incompleteStories.length > 0 && (incompleteStories.slice(-1)[0].match(/STORYGOESHERE/g) || []).length + storyHoles - 1 > completeStories.length) {
            incompleteStories.pop()
        }
        var nextStory = incompleteStories.pop();
        if (nextStory) {
            story = story.replace(/STORYGOESHERE/ , nextStory);
        }
    }
    while (completeStories.length > 0 && (story.match(/STORYGOESHERE/g) || []).length > 0) {
        nextStory = completeStories.pop()
        story = story.replace(/STORYGOESHERE/ , nextStory);
    }
    
    story = story.split("~").join("\\par ");
    
    if ((story.match(/STORYGOESHERE/g) || []).length > 0) {
        console.log("Story incomplete. "+(story.match(/STORYGOESHERE/g) || []).length+" holes remain. Length "+story.split(" ").length+" words. Placed in failure.txt.");
        fs.writeFile("failure.txt", story, function(err) {if (err) return console.log(err)});
    } else {
        console.log("Story complete. Length "+story.split(" ").length+" words. Placed in storytest.txt.");
        fs.writeFile("storytest.txt", story, function(err) {if (err) return console.log(err)});
    }
    
    
    
}

loadGrammar("nested");
