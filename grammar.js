var grammars = {
    "nested": {
//	"WORLDINFO": ["This is a comment.","The point of this comment is to note that what follows is basically info about the world."],
	"name": ["#namelist#","#namegen#","#title# #namelist#","#title# #namegen#","#namelist# #namesuffix#", "#namegen# #namesuffix#", "#fullname#","#title# #fullname#"],
	"title": ["Edge-case","Dr*", "Mad","Crazy","Bright-Eyed", "Professor","Captain"],
	"maleTitle": ["King","Prince","Duke","Sir","Lord"],
	"femaleTitle": ["Queen","Princess","Duchess","Madame","Madamoiselle","Lady"],
	"namesuffix": ["III","Esquire","the Conquerer","the Mad","IV","the Elder"],
	"namelist":["Arjun","Yuuma","Darcy","Mia","Chiaki","Izzi","Azra","Lina","Cheri","Fox","Morgana","Jedoo","Brick","Shadow","Krox","Urga","Zelph","John","Utah","Regret","Smith","Chris","Eddy","Thatcher","Wemk","Kikktkk","Redd","Stlestlestlen","Inculcand","Greel","Libb","Sonson","Jamey","The Wreather","Even Steven","Sam","Circe","Petrov","Pliny","#lastName#","#lastName#"],
	"namegen":["#syllable.capitalize##namefurther#","#syllable.capitalize##syllable##namefurther#"],
	"syllable":["#consnt##vl#","#consnt##vl##conscl#","#vl##conscl#"],
	"consnt": ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","y","z","br","pr","bl","pl","cr","dr","cl","dl","st","str","sl","wh","th","wr","scr","scl","kr","kl"],
	"conscl": ["w","r","ng","t","p","d","b","x"],
	"vl": ["a","a","e","e","i","i","o","o","u","u","oo","ee","ie","ia","io","ai","ea","oa"],
	"namefurther": ["#syllable#",""],
	"fullname": ["#maleName#","#femaleName#"],
	"maleName": ["#maleFirstName# #middleName##lastName#","#maleFirstName# #middleName##lastName#","#namegen# #middleName##lastName#","#maleFirstName# #middleName##namegen#"],
	"maleNameOr": ["#maleName#", "#maleTitle# #maleName#", "#maleTitle# #name#", "#title# #maleName#", "#name#"],
	"maleFirstName": ["Loki","Todd", "Andrew","Nathan","Bro","Jonny","John","Jeremy","Jerry","Boris","Stan","Thomas","Tom","Timotheus","Timothy","Robert","Jake","Jim","James"],
	"middleName": ["","","","","","","","#letter#. ","#letter#. ","#letter#. ","#letter#. ","#letter#. #letter#. "],
	"lastName": ["Smith","Johnson","Johnston","Shark","Sword","Steelcaster","Casing","Donov","Donovitch","Denovich","Stanislov","Inokin"],
	"femaleName": ["#femaleFirstName# #middleName##lastName#"],
	"femaleNameOr": ["#femaleName#", "#title# #femaleName#", "#femaleTitle# #femaleName#", "#femaleTitle# #name#","#name#"],
	"femaleFirstName": ["Linda","Lorie","Tertia","Allison","Alison","Alice","Alyssa","Betty","Rebecca","Carrie","Dora","Ashley","Sara","Sarah","Hanna","Hannah","Theresa","Teresa","Debra","Debora","Deborah","Deb"],
	"animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten","axlotl","crab","dog","rabbit","cat","parrot","worm","dust mite","robin","salmon","dolphin","dragon","sphinx","gryphon","jackalope","#occupationMod##animal#"],
	"someSight": ["waterfall","dark cave","vast army","#animal#","#animal# fighting #animal.a#","#strange# sunrise","#bookDesc# town","#animal# living in #strange.a# house","#mood# #occupation# living in the wilderness"],
//    "LOCATION": ["Please note, the idea of the 'location' symbol is that the adventurer can stay there for a while and have sub-adventures."],
	"location": ["army camp","#strange# dome","arcology","specific location","village","cavern","series of twisting passageways","city","hut","forest","#strange# dream", "#animal#'s belly","shipyard","peaceful protest","bad neighborhood","mansion","#strange# mansion","bad state of mind","island","canyon","tower","castle","library","marketplace","palace","courtyard","room","tiny apartment","party","thunderstorm"],// I've thought about giving locations names as well as long and short descriptions (eg, bustling marketplace vs. market). But a really useful thing to hand down with them would be a preposition; one might find onesself 'amongst a crowd' or 'at a concert', maybe even 'floating on' a river.
	"strange": ["mysterious","portentous","enchanting","strange","eerie","relevant","memorable","unique","baffling","frame"],
	"tale": ["story","saga","tale","legend","rumor","yarn","account"],
	"bookDesc": ["ancient", "blasphemous", "boring", "huge", "offensive","eldritch","tedious","evil","ponderous","grave"],
	"mood": ["vexed","indignant","impassioned","wistful","astute","courteous"],
	"challenge": ["demon","traveler","salesman","prophet","warrior","#occupation#","#occupation#"],
	"goal": ["find the medicine","find adventure","earn their fortune"],//TODO: use this. Remember to replace "their" with #heroTheir#.
	//TODO: Give the framed stories a "moral" which the hero might actually remember.
	//TODO: Make things happen in remembered "locations" and have the hero interact with a primary "character" there who gets their own pronouns.
	
  
//    "CULTUREINFO": ["This stuff is less factual, more syntactic, but still not story.","I guess it's still noun phrases."],
	"letter": ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
	"setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]","[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]","[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]","[heroThey:ve][heroThem:ver][heroTheir:ver][heroTheirs:vers]"],
  	"setCharacter": ["[#setPronouns#][hero:#name#][heroJob:#occupation#][heroHome:#location#]","[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers][hero:#femaleNameOr#][heroJob:#occupation#][heroHome:#location#]","[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his][hero:#maleNameOr#][heroJob:#occupation#][heroHome:#location#]"],
	"occupation": ["#occupationMod##occupationBase#","#occupationMod##occupationBase#","#occupationMod##occupationBase#","#occupationMod##occupationBase#","#occupationMod##occupationBase#","#occupationMod##occupationMod##occupationBase#","#occupationMod##occupationBase##occupationBase#","#occupationMod##animal#"],
	"occupationBase": ["wizard","witch","detective","ballerina","criminal","pirate","jack","spy","doctor","scientist","captain","priest","firefighter", "smuggler", "mechanic", "astronaut", "adventurer", "cowboy", "vampire", "soldier", "marine", "ninja","author","keeper","mathematician","operator","hero","entrepreneur","communist","philosopher","seller","promoter","wright"],
	"occupationMod": ["mad ","lumber ","street ","cart","occult ","space ","professional ","gentleman ","erotic ","time ","cyber","paleo","techno","super","meta","theater ","aspiring ","applied ","theoretical ","blood ","brain ","world-","zoo","first ","double ","secret ", "#animal#"],
	"sidequest":["[quest:key][reason:#keyreasons#]","[quest:#animal#][reason:make a stew]"],//TODO Create #questGiver# and #questTarget# contexts and use them! #questGiverLoc# would also be handy, for example if we wanted to save some villagers but had to go into a cave, and want the hero to worry about the villagers while in the cave.
	"keyreasons":["unlock the Princess's heart","get to the next level"],// This isn't postprocessed because I want just one reason per quest. ...I don't think punctuation is safe here, so remember the shortcut * for period, ^ for commas.

	// "POSTPROCESSING STUFF": ["I'm using all-caps symbols during a postprocessing stage I've appended to get around a couple bugs.","Technically I needn't separate postprocessing grammar out at all, or use all caps.","What happens is, % gets turned to # and « » gets turned to [ ], then I apply the grammar again."]
	"ADVENTURE": ["adventure", "grand adventure", "excitement"],
	"FINDADVENTURE": ["#ADVENTURE#"],
	"MEDICINE": ["medicine","a cure"],
	"FINDMEDICINE": ["medicine","a cure"],
	"FORTUNE": ["fortune", "wealth", "loot", "treasure"],
	"FINDFORTUNE": ["fortune", "wealth", "loot", "treasure"],
	"TRAVEL": ["to travel","to see the world","interesting sights","new friends","business contacts","novelty","good times"],
	"FINDTRAVEL": ["interesting sights","new friends","business contacts","novelty","good times"],
	"GOODTRAVEL": ["to travel","to see the world","interesting sights","new friends","business contacts","novelty","good times"],
	"FINDGOODTRAVEL": ["to travel","to see the world","interesting sights","new friends","business contacts","novelty","good times"],
	"HOMEILL": ["to stay away from home", "somewhere livable", "a new home"],
	"FINDHOMEILL": ["somewhere livable", "a new home"],
	
//    "STORY STUFF": ["Stuff below creates most of the story flow."],
	"setSailForAdventure": ["[prefix:set sail for adventure][quest:%ADVENTURE%]",
				"[prefix:left #heroTheir# home][quest:%TRAVEL%]",
				"[prefix:set out for adventure][quest:%ADVENTURE%]",
				"[prefix:went to seek #heroTheir# fortune][quest:%FORTUNE%]",
				"[prefix:resumed #heroTheir# habitual travels][quest:%GOODTRAVEL%]",
				"[prefix:was convinced by #occupation.a# to travel the world][quest:%TRAVEL%]",
				"#[heroLocale:#location#]resistAdventure#"],//TODO Need to get consistent about "quest". It should fit in "wanted X", "determined to find X", "the X they sought", etc.; or I could split it up.
	"resistAdventure": [
	    "[prefix:#lovedLocaleBut# living there made #heroThem# ill. So #heroThey# had no choice but to leave #heroTheir# home][quest: %HOMEILL%]",
	    "[prefix:#lovedLocaleBut# #heroTheir# true love was sick; so #heroThey# had no choice but to leave #heroTheir# home][quest: %MEDICINE%]",
	    "[prefix:#lovedLocaleBut# life there was boring* So #heroThey# arranged a trip abroad][quest: %ADVENTURE%]"],//TODO Double check -- does that need #they2# etc. instead?
	"lovedLocaleBut": ["lived in #bookDesc.a# #heroLocale#* #hero# loved the #heroLocale# but", "had found refuge in #strange.a# #heroLocale#* #hero# felt safe at the #heroLocale# but"],//TODO Periods are apparently not safe here... using asterisk and postprocessing.
	"openBook": ["#[#setCharacter#]storyteller#",// This occurrence of setCharacter creates the storyteller.
		     "#laterWord##hero2# found an ancient book and opened it.  As #hero2# read, the book told #strange.a# #tale#: #endl##beginStory# #[hero2:#hero2#][their2:#their2#]closeBook#",
		     "#hero2# passed by #someSight.a#. #flipOpen#",
                     "#hero2# encountered #someSight.a#. #flipOpen#",
		     "#hero2# encountered #[three:#challenge#]threeThings#. #openBookSpaced#",
		     "#[place:#location#]enterLocale# #openBookSpaced#",
		     "#hero2# thought #they2# might find #quest2.find# #[place:#location#]atLocale# #openBookSpaced#"],
	"flipOpen": ["#openBook#","#openBook#","#openBookSpaced#"],
	"openBookSpaced": [// openBook-like events which should only happen after longer interludes.
	    "#endStory#","#endStory#","#endStory#","#openBook#","#openBook#",
	    "#laterWord##hero2# passed by #someSight.a#. #openBook#",
	    "#laterWord##hero2# encountered #someSight.a#. #openBook#",
	    "#hero2# was determined to find #quest2.find#. #openBook#",
	    "#hero2# still wanted #quest2#. #openBook#",
	    "#hero2# thought constantly about the #quest2.find# #they2# sought. #openBook#",
	    "#happenUponQuestGoal#",
	    "At long last, #hero2# happened upon a likely source of the #quest2# #they2# so desired. #[quest:#quest2#][#setCharacter#]getQuest# And so, #hero2# the #job2# lived happily ever after."// Ha! Since the character symbols like "hero" are all currently renamed, I can use #setCharacter# without erasing them - and then rename them to, say, "questGiver" within my "getQuest" rule.
	],
	"threeThings": ["#three.a# along the way. The #three# #threeThingsEpisode#. #laterWord#a second #three# #threeThingsEpisode#. #laterWord#a third #three# #threeThingsEpisode#"],
	"threeThingsEpisode": ["stood in #hero2#'s way, but #hero2# found another path, #[place:#location#]throughLocale#",
			       "demanded that #hero2# tell a story. #heyListen# replied the #sly# #job2#, and began. #beginStory##endl#The #muchAffected# #three# thanked #hero2# and left",
			       "gave #hero2# #magnificent.a# gift",
			       "ignored #hero2#"],
	"throughLocale": ["through #place.a#. #innerLocale#"],
	"atLocale": ["at #place.a#. #innerLocale#"],
	"enterLocale": [
	    "#hero2# happened upon #place.a#. #innerLocale#",
	    "#hero2# found #them2#self within #place.a#. #innerLocale#",
	    "#hero2# accidentally went into #place.a#. #innerLocale#"],
	"localEncounter": [
	    "#laterWord##hero2# passed through the #place2# and moved on.",
	    "#hero2# found nothing of interest in the #bookDesc# #place2#.",
	    "Within the #place2#, #[place:#location#]enterLocale# #localEncounter#"],
	"innerLocale": ["#[place2:#place#]localEncounter#"],
	"heyListen": ["'Listen well,'","'Turn your ear,'","'Rest a while, and you can listen,'","'Hey! You'd better listen,'"],
	"closeBook": ["#hero2# slammed the #bookDesc# book closed and returned home.", "'What #sly.a# book,' #hero2# thought, and took it for #their2# own. #openBook#","#endl#As #hero2# turned the page, another #strange# #tale# began: #beginStory# #closeBook#","#hero2# searched the pages for more, but that was all.","#endl#The tale inspired #hero2# to go on. #openBook#"],
	"storyteller": ["#[tellerThey:#heroThey#][tellerThem:#heroThem#][tellerTheir:#heroTheir#][tellerTheirs:#heroTheirs#][tellerName:#hero#][tellerJob:#heroJob#][tellerHome:#heroHome#]storyteller2#"],
	"storyteller2": ["An old #tellerJob# told #hero2# a story. #heyListen# #tellerThey# said to #hero2#, 'to this #strange# #tale#.'#beginStory##endl# #stopListening#"],// Finally had to make a separate symbol when I realized I was keeping the same storyteller across events.
	"stopListening": ["#hero2# thanked the #tellerJob# for the warning and returned home.",
			  "But #hero2# did not listen, and continued on. #openBook# ",
			  "'I am just #job2.a#', said #hero2#, 'and you are #wise.a# #tellerJob#. I will #learnLesson#'. #openBookSpaced#"],
	"learnLesson": ["heed your advice","remember your story","think about what you have said"],
	"happenUponQuestGoal": ["#finallyWord##hero2# happened upon the #quest2.find# #they2# were after. #their2# heart at rest, #hero2#'s journey came to an end."],//TODO Add more options here.
	"getQuest": ["The #sly# #job2# had heard a rumor that #heroJob.a# at a nearby #heroHome# could help #them2# find #quest2.find#. So #hero2# went. #[place:#heroHome#][reason:find #quest2.find#][quest:#heroJob#][questGiver:#hero#][qthey:#heroThey#][qthem:#heroThem#][qtheir:#heroTheir#][qtheirs:#heroTheirs#]enterSelfMotivatedQuest#"],// Keep in mind here that this should be passed a fresh #setCharacter#, so heroX really means questGiverX. TODO: I'm thinking it would work to make a symbol for the whole of "[questGiver2:#hero#][qJob:#heroJob#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#]".
	"enterSelfMotivatedQuest": ["#[reason2:#reason#][quest2:#quest#][place2:#place#][questGiver2:#questGiver#]selfMotivatedQuest# 'I can get you the #quest2# you seek,' said #questGiver#, 'but only if you can #[#sidequest#][heroHome:#place#][hero:#questGiver#][heroThey:#qthey#][heroThem:#qthem#][heroTheir:#qtheir#][heroTheirs:#qtheirs#]localQuestCommand# #hero2# returned to #questGiver# triumphant, and received #their2# hoped-for #quest2#."],// For awhile I was thinking I didn't need to rename reason, quest, or place for the self-motivated quests. But if they can contain sidequests, they need to protect against recursion too. ... The copious renamings before localQuestCommand are just unfortunate effects of the way I've set everything up. //TODO I want something at the end of this narrating the hero returning with the requested side-quest complete, and receiving their ultimate story-goal. But the sidequest goal isn't within scope!
	"selfMotivatedQuest":// I'd like to have something which generically provides events occurring with a goal #quest2#, a #questGiver2#, a #reason2#, and within a #place2#. For the end of a story, though, I want something where a hero first locates a particular questGiver. The main problem I see doubling up like that is that talk about a #questGiver2# won't make sense in the scenario where the hero has their own motivations for chasing down #quest2#. So I guess I'll have selfMotivatedQuest for that and openLocalQuest for the side-questy case.
	["#laterWord##[#setCharacter#][#sidequest#]confronted by new questGiver# #selfMotivatedQuestSpaced#",
	 "The #place2# was very lonely. #selfMotivatedQuestSpaced#",
	 //"#[localEncounter:#selfMotivatedQuestSpaced.depunct#][localEncounterSpaced:#selfMotivatedQuestSpaced.depunct#]localEncounter#",
	 //"#[localEncounter:#selfMotivatedQuest.depunct#][localEncounter:#selfMotivatedQuest.depunct#]localEncounter#"// Hoping this works.
	],
	"selfMotivatedQuestSpaced": ["#finallyWord##hero2# tracked down the #quest2#. #qtheir.capitalize# name was #questGiver#."],
	// For local quests, I find myself wanting wrapper symbols to textually introduce quest givers when there are already locations, and vice versa. TODO: I need better naming conventions for these things... instead of starting event loops with the word "open" I should end them with "Encounter". Ending the supplemental one with "Spaced" is fine. My "inner..." wrappers should be like "recurseXEncounter". They're the case where all the new recursion-relevant variables have already been introduced alongside potential old ones, and are being passed to them for renaming. Hmm clearly the general case, such as it is, is that certain relevant contextual symbols can be (0) not even coined yet, (1) coined but not textually introduced yet, (2) non-recursive; so a new quest w/ the old quest-giver or old location or of course same old hero, OR I suppose a variable which was never part of a generated list so needs no renaming (3) Coined, textually introduced, but still in need of recursion-protective renaming, or finally (4) already textually introduced and protectively renamed. No symbol-naming scheme short of numeric codes could really help.
	"confronted by new questGiver": ["#hero2# fell deeply in love with a #sly# #heroJob# named #hero# who wanted #quest.a#. #[quest2:#quest#][reason2:#reason#][questGiver2:#hero#][qJob:#heroJob#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#]openLocalQuest#"],// Already have location, got passed a fresh setCharacter and sidequest.
	"penniless questGiver": ["penniless #heroJob# named #hero# who was looking for #quest.a# so #heroThey# could #reason#. #hero2# offered to help. 'I myself am a #job2#,' said #hero2#. 'I think I can find you #quest.a#.' #[quest2:#quest#][reason2:#reason#][questGiver2:#hero#][qJob:#heroJob#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#]openLocalQuest# #[quest2:#quest#][reason2:#reason#][questGiver2:#hero#][qJob:#heroJob#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#][origQuest:#quest2#]pennilessContinued#"],
	"pennilessContinued": [
	    //"",// TODO New quest; can't find the penniless questgiver.
	    "#hero2# returned the #quest2# to the poor #qJob#. 'Thanks a million!' #qThey# said, and rushed off to #reason2#."],// Penniless questgiver thankful, revert to previous quest
	"penniless helpGiver": ["penniless #heroJob# named #hero# who was looking for #quest.a# so #heroThey# could #reason#. #hero2# offered to help. 'I myself am a #job2#,' said #hero2#. 'I think I can find you #quest.a#.' #[quest2:#quest#][reason2:#reason#][questGiver2:#hero#][qJob:#heroJob#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#]openLocalQuest# #[quest2:#quest#][reason2:#reason#][questGiver2:#hero#][qJob:#heroJob#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#][origQuest:#quest2#]pennilessHelpedYou#"],
	"pennilessHelpedYou": [
	    "#questGiver2# the #qJob# was astonished to see #hero2# return with the #quest2#. 'I've heard your looking for this.' #questGiver2# showed #hero2# the #origQuest# #they2# had been searching for.#endl#"// TODO Penniless questgiver thankful, able to help hero with old quest? (Can I do that?) (Yah - just don't append #openLocalQuest# and it'll fall out of it. But do I have access to the old quest here?) (WAIT NO I DON'T THINK I CAN DO THAT)
	],
	"localQuestCommand": ["find me #quest.a# so I can #reason#.' #[quest2:#quest#][reason2:#reason#][place2:#heroHome#][questGiver2:#hero#][qThey:#heroThey#][qThem:#heroThem#][qTheir:#heroTheir#][qTheirs:#heroTheirs#]openLocalQuest#"],
	"openLocalQuest"://side-quest events; needs a #quest2#, #questGiver2# already introduced, #reason2# that quest2 is needed, and #place2# where everything happens.
	[
	    "#likeLocale#",
	    "As #hero2# walked further into the #place2#, #they2# met a #[#setCharacter#][#sidequest#]penniless questGiver# #openLocalQuest#",
	    "As #hero2# walked further into the #place2#, #they2# met a #[#setCharacter#][#sidequest#]penniless helpGiver#",
	    //"#[localEncounter:#openLocalQuestSpaced.depunct#][localEncounterSpaced:#openLocalQuestSpaced.depunct#]localEncounter#",
	    //"#[openBook:#openLocalQuestSpaced.depunct#][openBookSpaced:#openLocalQuestSpaced.depunct#]openBook#",
	],
	"likeLocale": ["#likeLocale1##[likeLocale1:#likeLocale2#]openLocalQuestSpaced#","#likeLocale2##[likeLocale2:#likeLocale3#]openLocalQuestSpaced#","#likeLocale3##openLocalQuestSpaced#"],
	"likeLocale1": ["#hero2# explored the #place2# and found it #interesting#. At times #they2# thought that perhaps even if #they2# never found the #quest2#, #they2# might simply settle down here. "], // The purpose of this symbol is that you overwrite it within a particular context once it's been used.
	"likeLocale2": ["Intrigued by the #place2#, #hero2# asked a local #[#setCharacter#]howExist#"], // The purpose of this symbol is that you overwrite it within a particular context once it's been used.
	"likeLocale3": ["#atLeastWord# #place2# was #interesting.a# place to look for #quest2#. "], // This one is meant as a less repetitive one we can default to.
	"openLocalQuestSpaced": [
	    "#openLocalQuest#",
	    //"",// TODO have hero2 despair and go back to questgiver
	    "#finallyWord##hero2# tracked down the #quest2# for #questGiver2#."// have hero2 succeed
	],
	"innerLocalQuest": ["#[place2:#place#]openLocalQuest#"],
	"howExist": ["#heroJob# how the place had come to be. 'Oh, we #heroJob.s# have a long history here,' came the reply. 'The #place2# was first inhabited by a #heroJob# named #hero#.' "],//TODO more options
	"story": ["#hero# the #heroJob# #[#setSailForAdventure#][hero2:#hero#][job2:#heroJob#][they2:#heroThey#][them2:#heroThem#][their2:#heroTheir#][occ2:#occ#]storyHelperThing#"],
	"storyHelperThing": ["#prefix#. #[quest2:#quest#]openBook#"],// This is because I want setCharacter to exist already when setSail is called. // TODO I could pass a custom prefix as an action and get sub-stories which are actually relevant.
	"endStory": ["#hero2# eventually went home.","#laterWord##hero2# went home.","#hero2# arrived home later that day.","Tiring of travel, #hero2# settled down.","To this day, nobody knows what happened to #hero2#."],
	"beginStory": ["STORYGOESHERE", "STORYGOESHERE"],// Now with a good chance of skipping the story entirely.//"#endl##once#, #[#setCharacter#]story#", 
	"beginStorySure": ["#endl##once#, #[#setCharacter#]story#"], // This setCharacter gives us the hero.
	origin: ["#endl#Word count: #beginStorySure.wc#"],
	"countlessOrigin": ["#endl##beginStorySure#"],
  
    //    "BITS & PIECES": ["I've thrown stuff below in its own category bc it feels very story-dependent.","Part of the intent here is that stuff below will be of broader potential use than the main 'STORY STUFF'."],
	"flip": ["#a#","#b#"],
	"lambda": ["#x#"],
	"postlambda":["%x%"],
	"once": ["Once upon a time","A long, long time ago","When the world was still young","A few years ago"],
  	"wise": ["wise","learnéd","very old","skilled"],
	"interesting": ["interesting", "very interesting", "fascinating","warm and pleasant","pleasant","nothing but inviting","full of interesting people"],
	"sly": ["sly","clever","talkative","patient","tricky","thoughtful"],
	"laterWord": ["Later, ","Next, ","Then ","Then, ","Soon ","Immediately, ","Because of this, ","That day, ","Later that day, ","After this, ","Eventually, ","In due course of time, ","The next thing anyone knows is that "],
	"finallyWord": ["Finally, ","At long last, ","After all this had happened, ","Despite many setbacks, ","In the end, ","#laterWord#","#laterWord#"],
	"atLeastWord": ["At least","At least,","Thankfully","Mercifully,"],
	"muchAffected": ["chastened","deeply affected","excited","#sly#","#wise#","happy","satisfied","thoroughly bored","frightened","puzzled","#mood#","#mood#","#strange.ed#"],
	"magnificent": ["magnificent","extravagent","expensive","tasteful","rare","#bookDesc#"],// Used originally to describe a gift.
	"endl": ["~"]//< p >
},
}

module.exports = grammars;