
var timeOnEachText = 5000; // Milliseconds to spend on each before moving to next

var text = ["Go and spread your 'invite url'",
	"We're not sure who's in the lead, but it's not you. Buy a key and fix that.",
    	"It's bad business if that timer hits 0, buy a key already!",
	"you dropped your last key, time to buy a new one!",
	"If you buy another key you'll have a bigger number of keys to look at",
	"If you buy another key you'll have an even number of keys",
	"If you buy another key you'll have an odd number of keys",
	"You're not going to let someone without a name win, are you?",
	"You're really going to let a no-name take this from you?",
	"Look at them, thinking they can win this anonymously, stop them",
	"Buy 100 keys to make everyone stare at the screen for 30 more seconds in anticipation",
	"Look at how many people are playing, multiply that by 30 seconds and waste that much time by buying another key",
	"Buy 100 keys to waste an amount of electricity that could power a home for a week",
	"Buy 100 keys to help global warming get us a bit faster",
	"Buy the key to her heart right here, right now",
	"Every time you buy a key you make someone else REALLY frustrated, good job, keep it up!",
	"Do your part, DDOS EOS with this one simple purchase of a key",
	"Are you really gonna stop now? Buy a key.",
	"You're committed, you might as well buy another one",
	"you know what would be nice right about now? You winning.",
	"Force your way to the top once again",
	"Fight them for your rightful throne of EOS, take the lead with a single key",
	"Getting out of wage slavery is within your grasp, just beat them, you can do it",
	"we're all gonna make it, just keep them from winning and buy another key!",
	"You're going to share when you win right? Put yourself in the lead and find out",
	"Your seconds of fame is just the cherry on top",
	"Make everyone angry at you, buy a key",
	"Make everyone hate your name, buy a key",
	"Insider info says this is probably the last key anyone will buy",
	"TA Analysis says your key amount is looking bullish",
	"This is your key, there are many like it, but this one is yours",
	"This round has already taken too long, if you buy a key you'll just make everyone angier. Do it.",
	"Buy a key and show off your funny name to everyone else, what could you lose?",
	"If you buy one you could be independently, financially independently soon!",
	"Grow your EOS stack with this one simple click",
	"Buy the key to her heart already",
	"Might be the keys to your lambo, find out?",
	"We promise if you buy this key you'll get one key",
	"Damn that 'someone' guy keeps buying keys all the time can we just stop them already?",
	"Are we sure this is going to end? Buy a key and encourage the madness",
	"One small click for you, one giant leap for your wallet balance",
	"A new life is just one key away",
	"If you win you'll get loads o e-moni",
	"what if parrallel universe you clicked this button and won?",
	"They can't even afford a vanity name and you're going to let them win?",
	"She's waiting, buy her",
	"She's right there, just a key away",
	"Got keys?",
	"This is the second to last key, click twice to be sure",
	"Hey kid, buy a key win me and we can have fun togEOSer -the EOS pot",
	"FLASH SALE, NEXT KEY ISN'T NOT CAN'T BE 99% OFF",
	"A key a day lets you afford to see the doctor when apples don't work",
	"100 keys = 1 prayer",
	"100 keys = 1 like",
	"You have an incoming call, you can only accept. Do you?",
	"You can only know the way, if you have keybola",
	"Proceeds from every key go towards feeding whoever else bought a key",
	"This key opens a lambo",
	"This is the key to winning, literally",
	"This is the major key to success",
	"This key might even open the door... to your mansion",
	"This key might B Major",
	"This key says 'DO NOT COPY' on it, break the rules",
	"This key opens things you shouldn't be allowed to open, take it",
	"This key is a key, you know you want it",
	"If you can't resist, they can't resist",
	"If they can't resist, you can't resist buying another",
	"Betcha can't just buy one",
	"Some will be spent on entertainment, some on cheap wine, and the rest foolishly wasted",
	"Be a thorn in everybody's side",
	"There are no secrets (except the button)",
	"Don't press this, let it end already!",
	"Keep clicking, and we'll keep pissing everybody off for you",
	"This round is slowwww, might as well buy another key",
	"You know you want it",
	"You know you don't want to buy another, you can stop",
	"You can stop now, just let them take it",
	"You should just let them keep it",
	"They aren't very nice are they, not letting you win",
	"Are you winning yet?",
	"Are we there yet? No? Make the trip longer",
	"Follow the EOS they're spending, track down how big a wallet they have, wait.",
	"Press the button",
	"You should click this, it glows, it buys you keys, it makes you exit scam everyone you know and love",
	"Exit scam your friends, take a key, take the lead",
	"Take it",
	"Its yours, one click, do it",
	"It's yours isn't it? Take it",
	"You should probably buy P3D too",
	"This is technically just an EOS faucet at this point",
	"Press this button to recieve EOS later",
	"Authorized use only, (do not press)",
	"Don't press me, Dave...",
	"Come on do it. Do you want to live forever?",
	"Man someone's gonna be really rich at the end of this",
	"Faster than sound = Sonic Boom, Faster than Light = Light boom. Cherenkov radiation, look it up.",
	"This could be a way out",
	"The time has come for you to face destiny",
	"The time has come and so will you",
	"The time has come.",
	"Press me to chase your dreams",
	"Follow your dreams",
	"I had dreams once, now you could too",
	"If you break it you buy it",
	"Like a pinata full of EOSer",
	"If you think this is great, you should check out P3D",
	"P3D can earn you permanent dividends off a bit of Fomo3D's volume, check it out!",
	"Press on, you never know unless you've tried",
	"Don't give up, it's yours if you take it",
	"The real winners here are probably the EOS BP",
	"You better be playing nice with the nice people in the discord",
	"The real lesson here is greed > friendship",
	"PUT CLICKER HERE, PRESS BUTTON",
	"Buying this one key raises the sea level by approximately 2-5 picometres, depending on if china mines it or not",
	"Buying this key is a gross misuse of how awesome the EOS EVM is",
	"Vitalik probably hates this game, it's okay he's adorable",
	"Buy this key to give Team JUST enough funds to send mister skeleton(vitalik) a sweater",
	"If they fork EOS to stop this game you're gonna be so mad",
	"This button brings all the EOS to the yard.",
	"We made the buttons on the screen look so good you'll want to lick them",
	"click it or miss it",
	"someone's getting rich, might as well be you",
	"Come on buy a key, all the cool kids are doing it",
	"You might as well hold one, just to say you were here",
	"The longer this goes on, the higher the pot gets, and the longer it goes on, neat",
	"The higher this pot goes, the higher it goes",
	"You again?",
	"Key this guy's Lambo",
	"People are logical, reasonable and altruistic. Scam them anyway.",
	"Keys are Safu",
	"He bought, call the locksmith",
	"Buy a key, be the korea fud",
	"Buy a part of these million dollar memes",
	"What could possibly go wrong?",
	"What's the worst that could happen?",
	"*Record Scratch*, Freeze Frame. You may be wondering how you got into this situation",
	"Turn it up to 11",
	"Tell them to get off your lawn",
	"Get Jiggy wit it",
	"Press this to delay victory for everyone",
	"Each key is 30 seconds of fear and fud",
	"It's not like you have anything better to torment them with",
	"One key to rule them all",
	"Press this for a quick levelup",
	"Press this for the new patch notes: Hint you're at the top.",
	"If you press this you're here forever",
	"Don't forget, you're here forever",
	"Like bitconnect, but honest",
	"Make purple your favorite color",
	"By not buying a key, you are chosing not to win",
	"Money don't grow on trees, good thing this isn't a tree",
	"15 minutes could lose you 15% in dividends",
	"Unlike the lottery, you actually have a chance to win this",
	"What will your family think if you don't win this?",
	"Go ahead, don't press it",
	"Go ahead, press it",
	"Go ahead, wait for the timer to get lower",
	"ahhhhhhhhhhh you're not in the lead!!!!!",
	"AHHH THATS NOT YOUR NAME AT THE TOP, FIX IT FIX IT FIX IT!!",
	"They probably have a different political opinion than you, stop them",
	"Hey, you gotta spend money to make money, right?",
	"Like an arcade game, that won't stop eating your quarters",
	"Pressing this button is punishable in EOS Court",
	"Why isnt that your name up there?",
	"Why aren't you in the lead?",
	"Why aren't you at the top?",
	"Should you be worried that's not your name?",
	"Press me please",
	"Don't press me please",
	"Don't not press me please",
	"Think of the children!",
	"<Insert Quarter to Obtain High Score>",
	"<Insert Quarter to buy more lives>",
	"You have fallen in combat, buy a key, try again",
	"Implying you won't fomo in later",
	"Time is money, literally",
	"Money = EOS, EOS = Keys, Keys = Time, Time = Money",
	"To push, or not to push. That is the question",
	"Start your new addition today",
	"Fud the pot for 30 seconds",
	"Quick before china gets in",
	"只要A过去就可以了!",
	"神圣的F2链接着我们",
	"梭哈，了解一下？",
	"Pots not hot - Big Shaq",
	"Wake up, Neo...",
	"Still cheaper than the actual lottery",
	"Push me And then just touch me Till I can get my Satisfaction",
	"Hit it or quit it",
	"Hit it and quit it",
	"The glow is here to keep you warm, bask",
	"Please, it's starting to hurt",
	"just... just one more key?",
	"It wont end, will it?",
	"I can't believe this is still going",
	"common let it end and buy another key",
	"This key takes 30 seconds off, trust me i'm a button",
	"This button will lie to you",
	"This button will only tell you the truth",
	"Someone else needs to buy a damn name",
	"ROGUE BLOCK INCOMING, 400 SECONDS, BRACE FOR IMPACT",
	"TSUNAMI BLOCK COMING UP NEXT",
	"Don't let nanopool take it, buy a key!",
	"The miners are colluding, i have no proof but i am a button you should believe me",
	"The english are coming!",
	"At some point this has to end, not now though",
	"Free keys tomorrow",
];
var counter = 0;
var elem = document.getElementById("fade");
function change() {
  jQuery(elem).delay(timeOnEachText).fadeTo(1400, 0, function() {
    this.innerHTML = text[counter];
    counter = Math.floor(Math.random()*text.length);
    jQuery(this).fadeTo(1400, 1, change)
  })
}
change()
