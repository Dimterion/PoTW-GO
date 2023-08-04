const gameContents = [
  {
    id: 0,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    text: `“The world is dying, Soai. Pathetic phrase, I know. And yet there is no better way of saying it. We’ve built the towers, scraping for life. We’ve hidden inside, while making them higher and higher. But the sky is our limit now. Literally. We’ve created zerOne to escape from reality. But this reality won’t go anywhere. It’ll soon reach us and hit us hard, no matter how many new writers there are, no matter if we code more or less. We can hide but we can’t run. There’s simply no place to run to. Do you see it?”

    Arika points down, at the surface far beneath you. There are no toxic clouds shrouding what’s below. Now you can see it. Blurry image of the distant brown land speckled with dirty green spots all over it. Even from that distance you can almost feel the toxic air filling up your lungs, poisoning them, killing you. Suffocating touch of death on your throat. The wind is throwing needles of dust in your face, scratching, leaving long bloody lines all over it. As if you were able to sense all of this.

    You notice movement, myriads of dots all over the surface down below, shifting like water in a storm, not knowing any rest.

    “Machines.” - Arika follows your gaze. - “Searching for the remnants of our former life, scraping the last bits of resources the planet still has. They support the towers, rebuild them, but it’s getting slower and slower. There isn’t much left and what is left is being consumed both by us and them.” - She sighs. - “A grim picture, but I had to paint it for you, Soai. Deo asked me to guide you once you… well, get the idea of who you are.”

    You look around, observing the place. You sit on a narrow metal bar sticking from the tower’s wall like some forgotten piece after the construction work. The green and yellow clouds are getting lower, surrounding you. The rain pours from the sky, dripping on the transparent umbrella Arika is holding above your heads. The drops are hissing on its surface, tiny angry creatures, not able to reach their prey.

    You turn around, looking into a pair of yellow eyes watching you, yellow hair slightly waving in the wind.`,
    options: [
      {
        text: `“Feels so… real.”`,
        nextText: 1,
      },
      {
        text: `“What am I?”`,
        nextText: 2,
      },
    ],
  },
  {
    id: 1,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“This place. Feels so real… I mean, I myself am not much real, but it’s different than being in zerOne. Though, I guess I don’t know what it is to be real. All my life, however short or long it was, I thought myself to be a human like you. But, as it turns out, I am a bunch of code written by a dead man for some not quite clear purpose.”`,
    text: `Arika frowns.

    “You are as real as you can ever be. Human, non-human, why should this matter? You say you can feel, and that’s what matters.” - She sighs again. - “It’s when you stop feeling, that’s when it becomes terrifying. Having no connection to the world around you is a scary thing, Soai. Try not to lose it.”

    Arika looks sad, thinking about something, as if she is in a different place, far away. Then she shakes her head abruptly, smiles and continues in a cheerful voice.

    “Anywho, about this place. A while ago I managed to slip by the security systems in the real world and installed a camera right where we are sitting.” - She giggles and winks at you. - “So, we’re kinda watching the online feed. I did some tweaking, cleared the image a bit and so on. Well, I admit, this metal piece is somewhat smaller in reality, but, what’s funny, it’s still there. Can you imagine, with all the work and planning, they forgot about it somewhere along the construction? I like to come here from time to time and watch what’s still there, beneath us. The remains of our old home, which is now no more than a foundation, slowly collapsing and falling apart.”`,
    options: [
      {
        text: `“Why are we here?”`,
        nextText: 4,
      },
      {
        text: `“You went outside?”`,
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“What am I, Arika? Well, I know that I’m an artificial being, created by Deo. And I guess I’m sort of self-aware… But I don’t feel like it. I don’t see any difference between me before the old man told me the truth and me after that. It’s like I’m still human Soai, a poet that’s trying to get good and climb to the higher levels.”`,
    text: `Arika smiles.

    “Isn’t that a good thing? Having doubts, being not sure. That’s what life is all about. You don’t see any difference, because there is none.” - She chuckles. - “Well, apart from the fact that you seem way less interested in winning the Writers Fights. But we all shift our perspectives from time to time.”

    Arika tilts her head, looking at you, like trying to figure something out. A brief moment of hesitation hangs between the two of you, then she continues.

    “As for the philosophical question of what you are, how about being what you want to be?” - She winks. - “I mean, I’m artificial here, in zerOne. Same as you are. And, look down, you’re seeing the real world projection now, so you can take a peek at it too. Same as me. Pretty cool, huh? This is the feed from the camera I was able to install at this same spot back there, in reality. Man, that was a scary day. I still can’t believe I climbed here all by my very own limbs.” - She sounds sad for a moment. - “I hope that was worth it. It’s a long way down. Almost makes you feel like flying before reaching the surface. But at times a leap of faith is all we need, hoping for some soft landing spot which may not be there.”`,
    options: [
      {
        text: `“You went outside?”`,
        nextText: 3,
      },
      {
        text: `“Writers Fights…”`,
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“Wait a second. You went outside? Outside the tower? How is that possible?”`,
    text: `Arika avoids your gaze.

    “Well… There are ways. Not for everyone, obviously. But with the right equipment and, first of all, enough credits, you can apply a bit of an open doors policy. Way too dangerous also. It’s one thing when rich folk fly between the towers using the machines, but going out wearing a protective suit all by yourself and, what’s more, jumping over the metal pieces like this one, that’s a completely different endeavor.”

    She suddenly turns to you, looking straight into your eyes.

    “But I had to do that, Soai. I needed to see how it looks and feels out there. Despite all the bleak landscape and everything else there is, as weird as it sounds, it gave me hope. Maybe there’s a way to fix it all and be there once again.” - She points at the surface beneath. - “To breathe fresh air, step on the soil, touch it with your bare feet. I wonder how it is. Being born in the tower, spending most of the time in zerOne, I can only imagine such things. Makes two of us, right?”`,
    options: [
      {
        text: `“Why are we here?”`,
        nextText: 4,
      },
      {
        text: `“I guess you’re right.”`,
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“Why did you bring me here? After the arena we just disappeared and went straight to this place. I never managed to travel like that before. And yet, don’t get me wrong, it’s all impressive, but I think there’s something else.”`,
    text: `After a pause Arika replies.

    “I saw you in the Mnemonic bar many times, sitting there, looking at the window. I bet each time you were wondering what it’s like outside. Well, here it is. Also, while the scenery is breathtaking, look at the tower itself. It’s not as pretty and solid as you might think.”

    You realize all that time you were more focussed on the view below and in front of you, rather than above and behind. You turn your head and see the tower’s wall. It’s all covered in rust, with some sections barely holding. Metal dust is flying all around with each blow of the wind. The bar you’re sitting on is shaking like a tree branch ready to break and fall down.

    “Believe me, this one is not as bad as some of the others.” - Arika lets out a sad chuckle. - “I’ve been to places and seen some tremendously awful… states of affairs. Many of the towers are on their last legs, or bricks, if you prefer. A few have been destroyed already. They don’t tell us that. The Builders Council, I mean. Frankly speaking, they don’t talk much in general. It’s as if they have just forgotten about us. Here are your lifescrapers, take them and live in them, the rest is not of our concern. Feels weird, to say the least.”

    Arika gets silent for a moment, looking away, then continues.

    “There is a chance for us to do something about it, Soai. I can travel between the towers, to some extent. I know there’s a way to reach the Pillar. I want to find out what’s happening out there. I need to understand why they don’t do anything, why they’ve isolated themselves. But I can’t do it alone. Not anymore. Especially since Deo has gone.”

    She stops talking and stares in front of her, head sunk in her shoulders.`,
    options: [
      {
        text: `“What happened to Deo?”`,
        nextText: 7,
        optional: "optional",
      },
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 5,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“Writers Fights have just lost a whole lot of value for me, to be honest. Going to other levels, sure, but doing all the arena stuff feels kinda pointless when you’re a digital shadow.”`,
    text: `“Don’t stress about it. Such feelings come and go.” - Arika nudges you with her elbow. - “You might yet find some interest in doing a bit of writing here and there. Want to feel more human? Learn how to relax and waste your time… from time to time.” - She laughs happily, then continues. - “As for going to other levels, you sir, came to the right person. In fact, that’s the reason I’ve brought you here. I saw you in the Mnemonic bar many times, sitting there, looking at the window. I bet each time you were wondering what it’s like outside. Well, here it is. Also, while the scenery is breathtaking, look at the tower itself. It’s not as pretty and solid as you might think.”

    You realize all that time you were more focussed on the view below and in front of you, rather than above and behind. You turn your head and see the tower’s wall. It’s all covered in rust, with some sections barely holding. Metal dust is flying all around with each blow of the wind. The bar you’re sitting on is shaking like a tree branch ready to break and fall down.

    “Believe me, this one is not as bad as some of the others.” - Arika lets out a sad chuckle. - “I’ve been to places and seen some tremendously awful… states of affairs. Many of the towers are on their last legs, or bricks, if you prefer. A few have been destroyed already. They don’t tell us that. The Builders Council, I mean. Frankly speaking, they don’t talk much in general. It’s as if they have just forgotten about us. Here are your lifescrapers, take them and live in them, the rest is not of our concern. Feels weird, to say the least.”

    Arika gets silent for a moment, looking away, then continues.

    “There is a chance for us to do something about it, Soai. I can travel between the towers, to some extent. I know there’s a way to reach the Pillar. I want to find out what’s happening out there. I need to understand why they don’t do anything, why they’ve isolated themselves. But I can’t do it alone. Not anymore. Especially since Deo has gone.”

    She stops talking and stares in front of her, head sunk in her shoulders.`,
    options: [
      {
        text: `“What happened to Deo?”`,
        nextText: 7,
        optional: "optional",
      },
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 6,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“I guess you’re right. Though, I doubt I’ll ever get the chance for breathing and sensing.”`,
    text: `Arika purses her lips pondering.

    “Well, who knows, perhaps one day we’ll find a way. But I’d suggest focusing on the matter at hand.” - She nods at the tower’s walls behind, and you realize how old and rusty they are. - “If you think this one is in a sorry condition, you should see some of the others. Trust me, I’ve been to places and seen some advanced levels of decay. A few towers have collapsed already. And the Builders Council says nothing. They barely talk to us, and I want to know what is going on over there, in the Pillar.”

    Arika sighs, looking into the distance.

    “I’ve tried to reach it, but didn’t manage. It’s rather far away in the real world and quite well protected in zerOne. Deo was able to approach it once, but all he saw was a blurry silhouette. Now he’s gone, Soai, and I need all the help I can get to try again. I want to understand why they don’t do anything, why they’ve isolated themselves while the whole world is on its final countdown.”

    She stops talking and stares in front of her, head sunk in her shoulders.`,
    options: [
      {
        text: `“What happened to Deo?”`,
        nextText: 7,
        optional: "optional",
      },
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 7,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“What happened to Deo? He didn’t tell me much. To add to that, it wasn’t really him who talked to me. Some digital copy? My distant, less sophisticated relative? Never mind. I’m more interested in the old man himself.”`,
    text: `“He got too close to the sun.” - Arika smiles sadly. - “Meaning, to the Pillar. He bypassed their security and almost reached it. In zerOne of course. I’m the one who’s obsessed with the real world, Deo was surfing the digital waves non-stop. He planned to log into the Pillar’s network to get access to their systems, see what’s going on, talk to them and so on. They caught him and sent him down. To the first level. I found out too late. Stubborn old pickle decided not to tell me that, so I thought he was on the same level as before. No idea why he did that. Perhaps he had his reasons. So, we kept doing same old things: he was jumping from one tower to another virtually, gathering data to make and improve you, and I was doing kinda the same but in both worlds. Well, as long as I could though…”

    Arika suddenly gets quiet, as if she doesn’t want to tell you something, then continues.

    “Later on I finally got the news about him reaching the bottom. So I moved back here, to the Bridge, and some time after we met at the arena at last. Voila.”`,
    options: [
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
      {
        text: `“How did you meet Deo?”`,
        nextText: 9,
        optional: "optional",
        condition: 1,
      },
    ],
  },
  {
    id: 8,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“You got any plan in mind? Reaching the Pillar seems to be quite an undertaking. Even the old man ended up being… done.”`,
    text: `“I might have an idea of a plan.” - Arika smiles mysteriously. - “Though, can’t say it has an abundance of details in it. We could pay Deo a visit first. Well, not him directly, for obvious reasons, but we can check the place he ended up being in the end. There might be something for us to learn. I’ve been to a few first levels already. Last time it was here, in the Bridge. Was trying to reach the old man, even though he surely didn’t want that. But now it doesn’t matter anymore, so I suggest making our descent and trying to find where he lived. Both virtually and in reality.”`,
    options: [
      {
        text: `“Sure, let’s do this.”`,
        nextText: 10,
      },
    ],
  },
  {
    id: 9,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“How did you meet Deo? Seems like you knew each other for quite some time.”`,
    text: `“Maybe quite some, maybe less so.” - Arika shrugs, somewhat indifferent. - “Can’t say I’ve been keeping a good track of time recently. As for the how part, Deo was appearing on various Writers Fights every now and then, watching the participants, talking to some of them, trying to find those who would, let’s say, join his cause.”

    She glances at you.

    “He was constantly searching, never giving up, looking for like-minded folk. You might be surprised to know that there are lots and lots of personalities integrated into you, not only Deo’s. You, sir, are an absolute remix of a whole bunch of music of all possible genres and styles.”

    Arika giggles, then continues.

    “Sorry, got a bit distracted. About meeting the grumpy genius. You’ve probably guessed it already. It happened during one of the Writers Fights. I was doing the arena, or, better say, messing around. Didn’t aim at winning. Was just, dunno, having fun maybe. Knocked out one dude, then stopped, went back and healed him up, pushed forward again, knocked out another one, that kind of stuff. The one that makes everyone else angry. I was just bored. Was sitting at the finish line after the arena, looking at the empty track, when Deo approached me. Word by word he dragged me in. Once I realized what he was aiming at, I made up my mind and asked if I could join. Hearing no objections from the old fellow, I’ve begun helping him with all that.” - She waves her hand at you. - “Though at last he became quite a secretive companion, so I got more time on my own and kept irritating folk in various arenas. That’s a short version for ya, my newly acquired friend.”

    Arika chuckles and looks away.`,
    options: [
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 10,
    style: "prologue",
    effect: "disappearingImg--prologue",
    mainImage: prologueImage,
    characterImage: arikaPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Futuristic girl with yellow hair.",
    subImageAlt: "Man looking away.",
    subText: `“Alright, any action is better than no action at all. How do we get out of here and get over there?”`,
    text: `Arika stands up and spreads her arms wide, balancing on the narrow metal bar.

    “Why, that is as easy as snapping my fin…”

    She suddenly stops talking, and her virtual character image glitches like an old recording, falling apart, pixels of various colors flying down. Her voice turns into an incomprehensible buzzing, as if it’s distorted by some interference. That scene lasts for a few seconds, then Arika disappears completely.

    You sit alone, hanging above the yellow-green abyss beneath you. Arika’s umbrella is slowly falling into it, turning in the air like a spinning top.`,
    options: [
      {
        text: `“What happened?”`,
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    style: "prologue",
    mainImage: prologueImage,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Man looking away.",
    subText: `“Arika? Are you still here? Was that supposed to happen?”`,
    text: `Completely lost, you look around, observing the place once again. Yet, there’s nothing new, except for the fact that there’s nobody nearby. What’s more, you have no idea how Arika brought you here and how to get out.
    
    The raindrops pass through you as if you are not there, as if you don’t exist, don’t feel anything. A soul of AI stuck in the projection of the dying world with no one noticing it.`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 12,
      },
      {
        text: `Climb up the wall.`,
        nextText: 13,
      },
      {
        text: `Cry and scream.`,
        nextText: 14,
      },
    ],
  },
  {
    id: 12,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage01,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Character falling down from the tower.",
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code compilation in a digital world.
    
    You get up, close your eyes and take a step into the emptiness in front of you.

    Having both a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from its sides. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by such experience, you begin to understand that the whole place is similar to Deo's rabbit hole where you went to talk with him during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.

    There must be some other way out.`,
    options: [
      {
        text: `Climb up the wall.`,
        nextText: 15,
      },
      {
        text: `Cry and scream.`,
        nextText: 17,
      },
    ],
  },
  {
    id: 13,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage02,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Wall of the futuristic tower.",
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch the wall, it gets flat and slippery like a block of ice.

    You try jumping a few times, but that also doesn’t really bring any results except for the metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant and disturbing, like a nail scratching the glass slowly, firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 19,
      },
      {
        text: `Cry and scream.`,
        nextText: 21,
      },
    ],
  },
  {
    id: 14,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage03,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Yellow-green clouds and sky.",
    text: `You feel lonely, lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds come out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who shall be your guide, to light your path and show which one is right?`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 23,
      },
      {
        text: `Climb up the wall.`,
        nextText: 25,
      },
    ],
  },
  {
    id: 15,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage02,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Wall of the futuristic tower.",
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch the wall, it gets flat and slippery like a block of ice.

    You try jumping a few times, but that also doesn’t really bring any results except for the metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant and disturbing, like a nail scratching the glass slowly, firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.
    
    Seems like you won’t be able to go any higher.`,
    options: [
      {
        text: `Cry and scream.`,
        nextText: 16,
      },
    ],
  },
  {
    id: 16,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage03,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Yellow-green clouds and sky.",
    text: `You feel lonely, lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds come out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who shall be your guide, to light your path and show which one is right?

    You soon understand that all the shouting and existential questions won’t do you much good. Cry all you want, but in the virtual space no one can hear your scream. Everyone’s busy with their own ones.`,
    options: [
      {
        text: `Well…`,
        nextText: 27,
        condition: 2,
      },
    ],
  },
  {
    id: 17,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage03,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Yellow-green clouds and sky.",
    text: `You feel lonely, lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds come out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who shall be your guide, to light your path and show which one is right?`,
    options: [
      {
        text: `Climb up the wall.`,
        nextText: 18,
      },
    ],
  },
  {
    id: 18,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage02,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Wall of the futuristic tower.",
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch the wall, it gets flat and slippery like a block of ice.

    You try jumping a few times, but that also doesn’t really bring any results except for the metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant and disturbing, like a nail scratching the glass slowly, firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `Hm-m-m…`,
        nextText: 27,
      },
    ],
  },
  {
    id: 19,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage01,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Character falling down from the tower.",
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code compilation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having both a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from its sides. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by such experience, you begin to understand that the whole place is similar to Deo's rabbit hole where you went to talk with him during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.`,
    options: [
      {
        text: `Cry and scream.`,
        nextText: 20,
      },
    ],
  },
  {
    id: 20,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage03,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Yellow-green clouds and sky.",
    text: `You feel lonely, lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.
    
    You scream like a madman, sounds come out of your artificial throat in bursts and disappear in the nothingness that surrounds you.
    
    What else is there to do? Who shall be your guide, to light your path and show which one is right?`,
    options: [
      {
        text: `Hm-m-m…`,
        nextText: 27,
      },
    ],
  },
  {
    id: 21,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage03,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Yellow-green clouds and sky.",
    text: `You feel lonely, lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds come out of your artificial throat in bursts and disappear in the nothingness that surrounds you.
    
    What else is there to do? Who shall be your guide, to light your path and show which one is right?`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 22,
      },
    ],
  },
  {
    id: 22,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage01,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Character falling down from the tower.",
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code compilation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having both a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from its sides. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by such experience, you begin to understand that the whole place is similar to Deo's rabbit hole where you went to talk with him during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.`,
    options: [
      {
        text: `Hm-m-m…`,
        nextText: 27,
      },
    ],
  },
  {
    id: 23,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage01,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Character falling down from the tower.",
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code compilation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having both a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from its sides. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by such experience, you begin to understand that the whole place is similar to Deo's rabbit hole where you went to talk with him during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.`,
    options: [
      {
        text: `Climb up the wall.`,
        nextText: 24,
      },
    ],
  },
  {
    id: 24,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage02,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Wall of the futuristic tower.",
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch the wall, it gets flat and slippery like a block of ice.

    You try jumping a few times, but that also doesn’t really bring any results except for the metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant and disturbing, like a nail scratching the glass slowly, firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `Hm-m-m…`,
        nextText: 27,
      },
    ],
  },
  {
    id: 25,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage02,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Wall of the futuristic tower.",
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch the wall, it gets flat and slippery like a block of ice.

    You try jumping a few times, but that also doesn’t really bring any results except for the metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant and disturbing, like a nail scratching the glass slowly, firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 26,
      },
    ],
  },
  {
    id: 26,
    style: "prologue",
    mainImage: prologueImage,
    subImage: prologueSubImage01,
    mainImageAlt: "Toxic clouds above the surface.",
    subImageAlt: "Character falling down from the tower.",
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code compilation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having both a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from its sides. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by such experience, you begin to understand that the whole place is similar to Deo's rabbit hole where you went to talk with him during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.`,
    options: [
      {
        text: `Hm-m-m…`,
        nextText: 27,
      },
    ],
  },
  {
    id: 27,
    style: "prologue",
    effect: "appearingImg--prologue",
    mainImage: prologueImage,
    characterImage: evenPortrait,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `Seems like you’ve tried all of your options, and none of them worked. You stare into the abyss, thoughtless, hopeless, having no idea of what to do next.

    Suddenly you notice a movement nearby. You raise your eyes and see a strange creature floating in the air right next to you. It has some weird similarity to the rabbit you saw during the arena, the one that brought you to the loophole where you talked with Deo’s projection. Though, it looks more like a human this time. A bizarre and strange human, to be completely honest.

    The creature tilts its head, observing you with its red glowing eyes. This silent scene lasts for a brief moment.

    “No way up or down, huh?” - It speaks in a familiar voice, yet you can’t figure out where you heard it. - “It’s your voice, dude. Can’t you hear it? I’m EH, by the way. Remember the name? A mode for the arena, to, sort of, predict things? I’m inside of your artificial digital brain. In fact, I’m a part of you. Always have been. Nnif activated me when you asked her about Deo, and then, once you entered the shortcut in the Shrike, I got turned on completely.” - It chuckles. - “So, we’re both one whole Soai now. But you can call me Even, heh. Don’t like EH, you know. And Event Horizon is too official, sounds like first and last name. As for the T at the end… Meh, who cares. If you spell it backwards it gives you never without an R.” - The creature winks. - “And thus we got T removed from one end and R - from the other. My little trademark of a sort. Long story short, I want you to call me Even, ok? And, as I’m basically you, it means that you want it as well.”`,
    options: [
      {
        text: `“A part of me?”`,
        nextText: 28,
        optional: "optional",
      },
      {
        text: `“What’s with all the names?”`,
        nextText: 29,
        optional: "optional",
      },
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 28,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: evenPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    subImageAlt: "Man looking away.",
    subText: `“What do you mean you are a part of me?”`,
    text: `Even flies around you and keeps talking.

    “Well, what do you think I mean? Exactly what you’re hearing. Deo integrated me into you when you were created. I was just sort of turned off, you know. And now I am on all the way. So, that’s what it is. We’re one cute little Soai, seeking our place in the world, trying to figure out how much of a human we are. I'm just more on the knowledgebase and analyzing side.”

    After another spin around you Even continues.

    “Feels good to be finally out. Decided to wait till your little talk with Arika is over. Dunno why she’s disappeared though. Also, I’ve no idea what our goal is and why we were created, in case you’re wondering and think that I know. I’m as clueless as you are. Perhaps we can find it out together.”`,
    options: [
      {
        text: `“What’s with all the names?”`,
        nextText: 31,
        optional: "optional",
        condition: 3,
      },
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 29,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: evenPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    subImageAlt: "Man looking away.",
    subText: `“You’re really obsessed with the names, aren’t you?”`,
    text: `Even flies closer to you, looking into your eyes.

    “Listen, I was a silent observer of your daily loops back then, so I had to entertain myself somehow. Watching you doing your precious Writers Fights is fun and all, but sooner or later you get bored. Thus, I was pondering various names at times. To entertain myself, or have some sort of a hobby. And besides, I like names. Makes you feel… you, I guess. As if I am something. Part of you, but still, something else as well. A personality inside of your personality. You’re a nice piece of code, which makes me a nice one, but I just want to be me regardless.”`,
    options: [
      {
        text: `“A part of me?”`,
        nextText: 32,
        optional: "optional",
        condition: 3,
      },
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 30,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: evenPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    subImageAlt: "Man looking away.",
    subText: `“Well, frankly speaking, I’m not surprised at all. Nice to meet you, Even. Any idea on how we can proceed? I’m experiencing a terrible lack of further ideas on my side at the moment.”`,
    text: `Even tilts its head, watching you closely.

    “Am I supposed to do everything for you, buddy? Like in some sort of a game tutorial?”

    Then it waves its hand and smiles.

    “Just kidding. I suggest getting out of here. Was enough sightseeing for us both. Can’t deny, I had some fun watching you trying all directions. But when you run out of options, it’s a good indicator that you need to make a pause, take a deep breath and focus on the situation at hand. Which translates to: there’s an exit button, right under your nose.”

    Even points at the metal bar you’re sitting on.

    You look at it and see glowing words forming the phrase “To the place you !belong”.

    Even chuckles.

    “Yep, it’s been there all that time. When you’re stuck, the most straightforward solution is usually the right one. Shall we?”

    It nods at the glowing words.`,
    options: [
      {
        text: `To the place you !belong`,
        nextText: 33,
        btnEffect: "glowing",
      },
    ],
  },
  {
    id: 31,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: evenPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    subImageAlt: "Man looking away.",
    subText: `“You’re really obsessed with the names, aren’t you?”`,
    text: `Even flies closer to you, looking into your eyes.

    “Listen, I was a silent observer of your daily loops back then, so I had to entertain myself somehow. Watching you doing your precious Writers Fights is fun and all, but sooner or later you get bored. Thus, I was pondering various names at times. To entertain myself, or have some sort of a hobby. And besides, I like names. Makes you feel… you, I guess. As if I am something. Part of you, but still, something else as well. A personality inside of your personality. You’re a nice piece of code, which makes me a nice one, but I just want to be me regardless.”`,
    options: [
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 32,
    style: "prologue",
    mainImage: prologueImage,
    characterImage: evenPortrait,
    subImage: characterImage,
    mainImageAlt: "Toxic clouds above the surface.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    subImageAlt: "Man looking away.",
    subText: `“What do you mean you are a part of me?”`,
    text: `Even flies around you and keeps talking.

    “Well, what do you think I mean? Exactly what you’re hearing. Deo integrated me into you when you were created. I was just sort of turned off, you know. And now I am on all the way. So, that’s what it is. We’re one cute little Soai, seeking our place in the world, trying to figure out how much of a human we are. I'm just more on the knowledgebase and analyzing side.”

    After another spin around you Even continues.

    “Feels good to be finally out. Decided to wait till your little talk with Arika is over. Dunno why she’s disappeared though. Also, I’ve no idea what our goal is and why we were created, in case you’re wondering and think that I know. I’m as clueless as you are. Perhaps we can find it out together.”`,
    options: [
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 33,
    style: "levelOne",
    mainImage: levelOne_image_01,
    characterImage: evenPortrait,
    mainImageAlt: "Old rusty corridor.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `For a moment everything around fades, then something new starts to appear slowly. You stand in a narrow space, almost clamped by the old metal walls covered by suspiciously looking dirty tubes. The place looks quiet except for the constant buzzing sound coming from afar, water dripping from the tubes and ancient lamps clicking on the ceiling. Feeble flickering light barely allows you to see what’s going on.

    “Seems like not much is going on.” - Even repeats your thoughts. - “Nice decor. As long as you don’t look at it… Or listen to it.” - It adds after a sudden clatter, as if a metal piece got torn off something and fell. - “At least we don’t need loading screens anymore. Feel the power of the new generation tech.”`,
    options: [
      {
        text: `“Where are we?”`,
        nextText: 34,
      },
    ],
  },
  {
    id: 34,
    style: "levelOne",
    mainImage: "",
    characterImage: "",
    subImage: "",
    mainImageAlt: "",
    characterImageAlt: "",
    subImageAlt: "",
    text: `To be continued...`,
    options: [
      {
        text: `Start screen`,
        nextText: 0,
      },
    ],
  },
];

import prologueImage from "../assets/images/prologue_image.jpg";
import arikaPortrait from "../assets/images/arika_portrait.jpg";
import characterImage from "../assets/images/character_image.jpg";
import evenPortrait from "../assets/images/even_portrait.jpg";
import prologueSubImage01 from "../assets/images/prologue_subImage_01.jpg";
import prologueSubImage02 from "../assets/images/prologue_subImage_02.jpg";
import prologueSubImage03 from "../assets/images/prologue_subImage_03.jpg";
import levelOne_image_01 from "../assets/images/levelOne_image_01.jpg";

export default gameContents;
