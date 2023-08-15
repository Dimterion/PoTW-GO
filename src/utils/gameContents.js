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
        btnEffect: "optional",
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
        btnEffect: "optional",
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
        btnEffect: "optional",
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
        btnEffect: "optional",
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
        btnEffect: "optional",
      },
      {
        text: `“What’s with all the names?”`,
        nextText: 29,
        btnEffect: "optional",
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
        btnEffect: "optional",
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
        btnEffect: "optional",
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
    style: "levelOneReal",
    mainImage: levelOneImage01,
    characterImage: evenPortrait,
    mainImageAlt: "Old rusty corridor.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `For a moment everything around fades, then something new starts to appear slowly. You stand in a narrow space, almost clamped by the old metal walls covered by suspiciously looking dirty tubes. The place looks quiet except for the constant buzzing sound coming from afar, water dripping from the tubes and ancient lamps clicking on the ceiling. Feeble flickering light barely allows you to see what’s going on.

    “Seems like not much is going on.” - Even repeats your thoughts. - “Nice decor. As long as you don’t look at it… Or listen to it.” - It adds after a sudden clatter, as if a metal piece got torn off something and fell. - “At least we don’t need loading screens to get here. Feel the next gen power.”`,
    options: [
      {
        text: `“Where are we?”`,
        nextText: 34,
      },
    ],
  },
  {
    id: 34,
    style: "levelOneReal",
    mainImage: levelOneImage01,
    characterImage: evenPortrait,
    subImage: characterImage,
    mainImageAlt: "Old rusty corridor.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    subImageAlt: "Man looking away.",
    subText: `“Any idea where we are, Even? This place looks strangely familiar, yet I don’t recall ever being here.”`,
    text: `Even’s voice suddenly changes, it sounds like several different one’s mixed together.

    “We are in the Bridge, Soai. The real Bridge, not the virtual one in zerOne. Every tower’s corner is surveilled, so cameras and all sorts of recording devices are everywhere, thus we can see it all.” - It gets quiet for a moment. - “Wait. How do I know this? Like it’s always been in my memory, I just didn’t need to access it. And once I did, it just popped out. Weird…”

    Even keeps observing the surroundings, then adds.

    “Hm, there’s more. I can actually switch between real and virtual Bridge. Here.”

    You see a new button in your UI.

    “Let’s give it a try.”`,
    options: [
      {
        text: `zerOne: true`,
        nextText: 35,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 35,
    style: "levelOneVirtual",
    mainImage: levelOneImage02,
    characterImage: evenPortrait,
    mainImageAlt: "Yellow-green futuristic corridor.",
    characterImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `After pressing the button everything fades for a moment once more and you see a new place.

    “Not really new, buddy.” - You notice that Even’s voice resembles yours again. - “Same corridor, but with a touch of digital love now.”

    You realize that’s true. The place looks different, but it’s still a long narrow room, its walls and ceiling are illuminated by bright yellow-green lights. No rust or leaking tubes are visible.

    “Prettier, right? Unless you are an abstractionist by nature and prefer life in brown shades, which I doubt.” - Even points at the end of the corridor. - “We’re near your place by the way. Technically, it’s Deo’s place, as you’ve been stuck in the loop, never actually been out and yada, yada, remember? Maybe we can check it. Though, one more thing.”

    Another button appears in your UI.

    “In case we need to face that hard reality of ours and switch back to the Bridge out there.”`,
    options: [
      {
        text: `zerOne: false`,
        nextText: 36,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 36,
    style: "levelOneReal",
    mainImage: levelOneImage01,
    additionalImage: evenPortrait,
    mainImageAlt: "Old rusty corridor.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `“Ok, and I’m gonna move to your UI now. After all I’m some kind of it anyway. Take a peek at the upper right corner, see me? I’m a cute little icon there, alright?”

    Even seems to be puzzled and talks in a mix of voices now.    

    “I feel like some storage device, keeping stuff inside me, but not knowing what’s actually there. Then, the moment I see something… or, we see something, it’s like I’ve known it all along. A strange real world side effect or whatever.”

    It gets quiet for a moment and you notice a man going through the corridor. He wears old-fashioned black glasses, has a beard, long hair and a never fading rebel-youth expression on his face despite the not so young age.

    “Well, look at this individual.” - Even produces a sound of clicking its tongue. - “Una Ek, our one and only owner of the Mnemonic bar, exactly the same in both worlds. True to himself as ever.”

    The man passes by you without any notice and goes further.`,
    options: [
      {
        text: `“Hey, Una!”`,
        nextText: 37,
      },
      {
        text: `“Let’s check our apartment.”`,
        nextText: 38,
      },
    ],
  },
  {
    id: 37,
    style: "levelOneReal",
    mainImage: levelOneImage01,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Old rusty corridor.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Hey, Una! What’s up? Nice to see you in the real world.”`,
    text: `Una keeps going further, paying no attention to your words.

    “Ahem.” - Even is looking at you skeptically. - “Must I remind you that we are not physically present here. You, and by you I mean us both, are not an actual human being and don’t have a body outside zerOne. Peeps don’t see us when we are here, we see them with the help of all the cameras and so on, ok? Wait a sec.” - Its red eyes flash for a moment, then it adds. - “Another piece of info has just popped up. They are basically all covered in implants, right? So the connection to zerOne is constant, even if they are outside. If we switch to virtual, we can poke Una, he’ll notice then.”`,
    options: [
      {
        text: `zerOne: true`,
        nextText: 39,
        btnEffect: "switch",
      },
      {
        text: `“Let’s check our apartment.”`,
        nextText: 38,
      },
    ],
  },
  {
    id: 38,
    style: "levelOneReal",
    mainImage: levelOneImage01,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Old rusty corridor.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Let’s go check our apartment. Maybe we can find something useful there.”`,
    text: `“Welp, fine by me. It’s right there.” - Even points at one of the doors in the corridor. - “Our penthouse in all its glory.”

    You look at the ancient piece of metal, barely holding on its hinges, corrosion stains covering its whole surface.

    “I mean…” - Even rubs its chin thoughtfully. - “We can always enter it in zerOne. Unlike our human friends, we won’t be bothered by the thought that our actual body is still here. And, in case you’re wondering how we're gonna get inside when we’re not in zerOne, I feel bad for saying this, but so far I felt like I can access any camera in the Bridge, at least on the current level, so…” - You notice that Even sounds slightly embarrassed. - “We can watch everyone’s private affairs. Don’t judge me, ok? I was made this way. In other words, point the direction, and I’ll bring us there.”`,
    options: [
      {
        text: `Enter Deo's apartment.`,
        nextText: 58,
      },
      {
        text: `zerOne: true`,
        nextText: 0,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 39,
    style: "levelOneVirtual",
    mainImage: levelOneImage02,
    additionalImage: evenPortrait,
    mainImageAlt: "Yellow-green futuristic corridor.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `You are in the virtual corridor again, no presence of Una here.

    “Cause he’s not in zerOne.” - Even sighs, as if it should’ve been obvious. - “I’ve heard people can make voice calls, you know, send messages to each other. The wonders of modern technologies. I wouldn’t dare tell you what to do… But as we are one…”
    
    Seeing your face, it adds in a less mocking tone.

    “Fine, fine. I’ll be less humoristic. Correction, I’ll try to be less humoristic. But seriously, ping him already. Or let’s go check our apartment here in zerOne, if you’ve changed your mind.”`,
    options: [
      {
        text: `Call Una.`,
        nextText: 40,
      },
    ],
  },
  {
    id: 40,
    style: "levelOneVirtual",
    mainImage: levelOneImage02,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Yellow-green futuristic corridor.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Sup, Una! How’s life? I was just passing by your life-capsule. Mind if I come in for a sec?”`,
    text: `“Soai! Nice to hear you, champ.” - As always, Una’s in a good mood. - “I’ve never seen you around my place… Actually, I’ve just realized, I’ve never seen you at all. In real, I mean. We were always hanging out at my bar virtually. Will be nice to finally look at you.”
    
    You notice a facepalm coming from Even’s side. - “See where this is going?” - It leans towards you and whispers. - “You either have to tell him the truth or find a reason to meet in zerOne as usual.”`,
    options: [
      {
        text: `Come clean.`,
        nextText: 41,
      },
      {
        text: `“Can we talk virtually?”`,
        nextText: 47,
      },
    ],
  },
  {
    id: 41,
    style: "levelOneVirtual",
    mainImage: levelOneImage02,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Yellow-green futuristic corridor.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“So, listen Una, there’s something I need to tell you first…”`,
    text: `“What’s that?” - Una interrupts you. - “You are not real and have been sent here by some higher power?”

    “Well, I’ve never thought of myself as of a higher power, but since he’s mentioned it.” - Even says thoughtfully in the middle of Una’s speech.

    “You are an agent of the AI system that rules our world?”

    “How does he know that?” - Even sounds surprised.

    “You are going to make me an offer I can’t refuse?”

    “Ok, I see, he’s joking.”

    “Just kidding, man.” - Una laughs then notices your silence. - “Something’s wrong?”
    
    You tell Una everything. About you, Deo, Even, everything. A long pause hangs between the two of you.

    “Come inside.” - He finally says in a hoarse voice. - “Ah, yeah, you can’t come… Fine, join the video call, I’m in no mood to log into zerOne at the moment. I’ll project you in front of my couch.”`,
    options: [
      {
        text: `Enter Una’s apartment.`,
        nextText: 42,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 42,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `You enter the apartment and see Una on the couch, holding an old-looking guitar in his hands, playing some simple tune.

    The place is quite different from the corridor outside. Warm lights illuminate the room, everything is clean and the furniture is almost like new.

    “Wow.” - Even glances around. - “How did he manage to get a life-capsule like this?”

    “Knew a few gents back in my days.” - Focused on his guitar, Una says to you. - “Neighbor switched levels a while ago, nobody moved in, I pulled a string or two, broke the wall, made one small cubicle for myself, out of the two tiny ones.”

    “Wait.” - Even moves closer to Una. - “You can hear me? I wanted to…”

    “Join the call, Soai, I don’t like not seeing who I am talking to.” - Una nods at the screen in front of him and you appear there. - “Where’s your friend? The rabbit is going to join the conversation?”

    “Ok, never mind, just a coincidence.” - Even sighs. - “I’m in your artificial head only.”`,
    options: [
      {
        text: `“Even is right here.”`,
        nextText: 43,
      },
    ],
  },
  {
    id: 43,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Even is right here, with us. I don’t think anyone except for me can see or hear it.”`,
    text: `“Too bad.” - Una keeps playing the guitar. - “Don’t like invisible friends, makes me nervous.”

    “Well, if it’s any consolation, I can’t do much about this either.” - Even shrugs. - “I wish I…”

    “If it’s talking right now,” - Una unintentionally interrupts again. - “Tell it to shut up.”

    “You shut up!” - Even stomps to the other side of the room, muttering. - “Ain’t gonna talk to some amateur musician anyway…”

    “So, arena character, huh?” - Una briefly glances at the screen. - “Made by some no longer living poet? I knew something was off about you, virtual boy. You kept coming to Mnemonic, kept sitting there, so focused on Writers Fights, on winning. Day after day. Was just too much, even for a poet. Felt unreal, but when I’m in the unreal world, I tend not to ask too many questions. Everyone’s picking their own poison, I’m no judge for that.”`,
    options: [
      {
        text: `“Any advice?”`,
        nextText: 54,
      },
      {
        text: `“We all grind.”`,
        nextText: 44,
      },
    ],
  },
  {
    id: 44,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“We all grind. Having a routine helps sometimes. Take your apartment renovations for instance. Bet you’ve spent your fair share of hours making sure your digital place and your digital you look exactly the same as here, outside zerOne.”`,
    text: `“You’ve got me there, pal.”

    Una replies, lazily pulling the strings.

    “I’m used to seeing people do the same stuff on repeat. And, yeah, my virtual life is identical to the real one. Grinding is part of the whole concept zerOne is built upon. Makes you stick to it, not wanting to come back to reality. As there’s nothing here anymore. Life is just a four-walled box to exist, while all the living is happening between zeros and ones.”

    The music gets louder, it feels like Una is singing rather than talking.

    “And now the numbers have managed to reach me even here, in my four-walled box.” - He nods at you. - “When you said you wanted to come in, I was glad, thought I’ll be able to interact with someone in real. Man, I miss it. When I go outside, there’s no one, I’m wandering alone through our level, looking at the ancient walls, hearing dying machines somewhere deep inside the tower. Sometimes I see others, but, well, frankly speaking, they’re like zombies, crawling out of their places by some necessity, fearing talking to anyone else, hurrying to come back and connect to zerOne. And I don’t blame them. Can’t believe I’m saying this, but it’s probably the only possible solution for our planet’s little issue.”

    Una stops talking for a moment, focusing on his guitar again.

    “There are some benefits though. Nobody’s telling me what to do, nobody’s preventing me from taking stuff from the empty life-capsules. Did you know that they are not really being refilled with new folk, once former inhabitants either switch levels or sing their literal last songs? From time to time new faces arrive, but that rarely happens, almost never, to be precise. So, I’m free to take whatever I want. Not like anyone needs it anyway, and I like spending time trying to make my piece of reality a little bit cozier.”

    He gets silent and rubs his forehead.

    “Damn, I’m getting old… You made me talky, digital boy. What about you? Any plans now, since you’ve figured out who you are?”`,
    options: [
      {
        text: `“No idea.”`,
        nextText: 45,
      },
      {
        text: `“Want to check Deo’s place.”`,
        nextText: 56,
      },
    ],
  },
  {
    id: 45,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Honestly? No idea. I’m like a leaf on the wind. I guess I need to figure out what Deo wanted from me. And that girl, Arika… She disappeared somewhere.”`,
    text: `“I wouldn’t be too worried about her. Based on what you’ve said, she’s one of the rich folk. Playing around with others just to entertain themselves. Then, the moment they get bored, poof…” - Una hits a guitar string, making a loud noise. - “They are outta here. But you do you, edge runner, don’t make the blades of my words stop you. I’m just an angry old fella, yelling at the digital sky, happy to be wrong, yet not having lots of hope.”

    “Speaking of the old fellas…” - Una raises a brow, looking at you. - “That Deo article, eh? I guess you intend to make a little jump to the first level, since you’re not afraid of dying anymore, and he seems to have spent his final hours there. I’m not much of a hacker, but one day I was willing to visit the place myself. Ended up being too depressed for it, so gave up on the idea, but before that I had a little chat with our friendly Dixie’s shop owner, Nnif. She might know a thing or two on how to bypass the levels’ security and enter a wonderful world of those who are closer to the surface. I don’t know much more, so consider paying Nnif a visit. Maybe she’ll do you a favor.”

    “Or,” - Una points his finger at you. - “Try to find that Goldilocks of yours and drive to the sunset. Perhaps, out of principle, she’ll be able to provide you with just the right amount of further choices.”`,
    options: [
      {
        text: `“Thanks, Una.”`,
        nextText: 46,
        condition: 4,
      },
    ],
  },
  {
    id: 46,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Thanks, Una. Appreciate the advice. And… Well, sorry for all the AI stuff.”`,
    text: `“Don’t mention it, pal.” - Una puts the guitar aside and looks at you. - “Being what you’re seems to be not your fault, so no skin off our digital backs here. Just keep being a nice guy, deal? Ah, yeah, tell your rabbit to not hold too much grudge against me. When it comes to talking with computers, old Una has trust issues, ok? But, if it’s a part of you, it’s probably not so bad.”

    “Pf-f-f…” - Even glances over its shoulder. - “Whatever… He’s fine… at times.”

    “Right, now get outta here.” - Una waves towards the door. - “I need to meditate on the whole situation before getting back to my bar. Sooner or later we all end up in zerOne. See you when I see you.”`,
    options: [
      {
        text: `Leave Una’s apartment.`,
        nextText: 57,
      },
    ],
  },
  {
    id: 47,
    style: "levelOneVirtual",
    mainImage: levelOneImage02,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Yellow-green futuristic corridor.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Uhm, sorry, but I’m so used to spending most of my life in zerOne, that I feel nervous talking outside. Mind if we meet as usual?”`,
    text: `“Nervous, huh?”

    Una sounds a bit disappointed.

    “Oh well, can’t blame you. Peeps nowadays are scared of reality and I get it. It’s killing us after all. Slowly but surely.”

    He sighs, gets silent for a moment, then adds.

    “Fine, join the video call, I’m in no mood to log into zerOne right now. I’ll project you in front of my couch.”`,
    options: [
      {
        text: `Join the call.`,
        nextText: 48,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 48,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `You connect to the video call and enter the apartment. You see Una on the couch, holding an old-looking guitar in his hands, playing some simple tune.

    The place is quite different from the corridor outside. Warm lights illuminate the room, everything is clean and the furniture is almost like new.

    “Wow.” - Even glances around. - “How did he manage to get a life-capsule like this?”

    “Knew a few gents back in my days.” - Focused on his guitar, Una says to you. - “Neighbor switched levels a while ago, nobody moved in, I pulled a string or two, broke the wall, made one small cubicle for myself, out of the two tiny ones.”

    “Wait.” - Even moves closer to Una. - “You can hear me? I wanted to…”

    “So, what’s new, Soai?” - Una pays no attention to Even’s words. - “I’ve heard you almost won the last Writers Fight, but kinda gave up. What happened?”

    “Ok, never mind, just a coincidence.” - Even sighs. - “I’m in your artificial head only.”`,
    options: [
      {
        text: `“Lost interest in Writers Fights.”`,
        nextText: 49,
        btnEffect: "optional",
      },
      {
        text: `“Need to find Arika.”`,
        nextText: 53,
      },
    ],
  },
  {
    id: 49,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“I guess, I’ve just realized I’m not really interested in winning anymore. Constant grind, hoping that it’ll bring me somewhere, but in the end it’s just more grinding. I felt… tired.”`,
    text: `“Well, I surely didn’t expect that coming from you.” - Una replies, lazily pulling the strings. - “Seems like I’ve got too used to seeing people do the same stuff on repeat. Even me. Grinding is part of the whole concept zerOne is built upon. Makes you stick to it, not wanting to come back to reality. As there’s nothing here anymore. Life is just a four-walled box to exist, while all the living is happening between zeros and ones.”

    The music gets louder, it feels like Una is singing rather than talking.

    “When you said you wanted to come in, I was glad, thought I’ll be able to interact with someone in real. Man, I miss it. When I go outside, there’s no one, I’m wandering alone through our level, looking at the ancient walls, hearing dying machines somewhere deep inside the tower. Sometimes I see others, but, well, frankly speaking, they’re like zombies, crawling out of their places by some necessity, fearing talking to anyone else, hurrying to come back and connect to zerOne. And I don’t blame them. Can’t believe I’m saying this, but it’s probably the only possible solution for our planet’s little issue.”

    Una stops talking for a moment, focusing on his guitar again.

    “There are some benefits though. Nobody’s telling me what to do, nobody’s preventing me from taking stuff from the empty life-capsules. Did you know that they are not really being refilled with new folk, once former inhabitants either switch levels or sing their literal last songs? From time to time new faces arrive, but that rarely happens, almost never, to be precise. So, I’m free to take whatever I want. Not like anyone needs it anyway, and I like spending time trying to make my piece of reality a little bit cozier.”

    He gets silent and rubs his forehead.

    “Damn, I’m getting old… You made me talky, Soai. What about you? Any plans now, since arenas got less attractive to you?”`,
    options: [
      {
        text: `“Need to find Arika.”`,
        nextText: 50,
      },
    ],
  },
  {
    id: 50,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“During the last fight there was a new participant. A girl named Arika. She… knew something about me. We talked for a bit, but then she disappeared. I need to try finding out what happened.”`,
    text: `After you’ve described Arika to Una, he gets silent for a moment, playing the guitar.

    “Want my opinion?” - He finally says. - “I wouldn’t be too worried about her. Based on what you’ve mentioned, she’s one of the rich folk. Playing around with others just to entertain themselves. Then, the moment they get bored, poof…” - Una hits a guitar string, making a loud noise. - “They are outta here. But you do you, edge runner, don’t make the blades of my words stop you. I’m just an angry old fella, yelling at the toxic sky, happy to be wrong, yet not having lots of hope.” - Una points his finger at you. - “Maybe you’ll find that Goldilocks of yours and drive to the sunset. Perhaps, out of principle, she’ll be able to provide you with just the right amount of further choices.”`,
    options: [
      {
        text: `“Want to get to the first level.”`,
        nextText: 51,
      },
    ],
  },
  {
    id: 51,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“That might sound crazy, but I sort of need to visit the first level. Any idea how I can do that?”`,
    text: `“You’re kidding, right?” - Una’s brows fly up. - “First level? What for? You’ll be breathing toxins and approaching the light at the end of the tunnel in no time if you go there.”

    “Just a reminder,” - Even appears in front of you. - “He doesn’t know that we aren’t scared of breathing toxins anymore.”

    “I mean…” - Una hesitates for a second. - “Have to be honest, I had the desire myself a while ago, but…” - It looks like he wants to tell you something but then just shakes his head. - “Nah, man, nevermind. Just don’t do it, ok? We’ve a little time to live, so we have to live a little.” - He starts playing the guitar again. - “Want some adventures? Go hang out with our mutual friend Sane Snacks. Haven’t seen the big dude recently. If you find him, tell him he still owes me for the deluxe tickets to the Soundcore of Mirror concert, ok? Actually, forget it, consider this my treat. The giant always lifts my mood up.”`,
    options: [
      {
        text: `“Thanks, Una.”`,
        nextText: 52,
      },
    ],
  },
  {
    id: 52,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Thanks, Una. Appreciate the advice.”`,
    text: `“No prob, mate. Go find some new hobby to live up to, since Writers Fights is not your jam anymore. I suggest going out. Checking what the real Bridge is. Can be hugely depressive, but also opens your eyes for a split second. There’s a huge dying world out there.”

    Una waves towards the door.

    “Right, I should stop with all the grim thoughts. Get outta here already or we’ll become a pair of doom sayers, screaming about the end and how nigh it is. And I say, nay, I need to chill a little before getting back to my bar. See you when I see you.”`,
    options: [
      {
        text: `Leave Una’s apartment.`,
        nextText: 57,
      },
    ],
  },
  {
    id: 53,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Long story. Maybe I’ll tell you some other time. Wanted to ask you something else. During the last fight there was a new participant. A girl named Arika. She… knew something about me. We talked for a bit, but then she disappeared. I need to try finding out what happened.”`,
    text: `After you’ve described Arika to Una, he gets silent for a moment, playing the guitar.

    “Want my opinion?” - He finally says. - “I wouldn’t be too worried about her. Based on what you’ve mentioned, she’s one of the rich folk. Playing around with others just to entertain themselves. Then, the moment they get bored, poof…” - Una hits a guitar string, making a loud noise. - “They are outta here. But you do you, edge runner, don’t make the blades of my words stop you. I’m just an angry old fella, yelling at the toxic sky, happy to be wrong, yet not having lots of hope.” - Una points his finger at you. - “Maybe you’ll find that Goldilocks of yours and drive to the sunset. Perhaps, out of principle, she’ll be able to provide you with just the right amount of further choices. As for where to find her, sorry, not my area of expertise.”`,
    options: [
      {
        text: `“Want to get to the first level.”`,
        nextText: 51,
      },
    ],
  },
  {
    id: 54,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“I guess, my poison was picked for me… Since I’m here, any advice? This digital ocean has too many variables to take into account. I’m wondering what I should do next. Find Arika? Get more info on Deo’s plan?”`,
    text: `“You’ve got the wrong guy to ask for directions, pal.” - Una glances at you above his glasses. - “If I were you, chances are, I’d just chill, looking at the tsunami coming right at me. But I’m not you. So, the options of finding Miss Yelloweyes or figuring out what kind of Frankenstein you are seem both relatively irrelevant to me. Besides, I don’t like telling folk what to do. You have to tell your own story, otherwise it’ll be someone else’s.”

    Una stands up, puts his guitar aside and looks at you.

    “Despite being what you’re, you still look like a nice guy, Soai. But I’m just too damn old and stubborn when it comes to giving counsel. Sorry, don’t have much else to say.”`,
    options: [
      {
        text: `“Thanks anyway.”`,
        nextText: 55,
      },
    ],
  },
  {
    id: 55,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“I see. Well, thanks anyway, Una. And… Well, sorry for all the AI stuff.”`,
    text: `“Not your fault mate. Just keep being a nice guy, deal? Ah, yeah, tell your rabbit to not hold too much grudge against me. When it comes to talking with computers, old Una has trust issues, ok? But, if it’s a part of you, it’s probably not so bad.”

    “Pf-f-f…” - Even glances over its shoulder. - “Whatever… He’s fine… at times.”
    
    “Right, now get outta here.” - Una waves towards the door. - “I need to meditate on the whole situation before getting back to my bar. See you when I see you.”`,
    options: [
      {
        text: `Leave Una’s apartment.`,
        nextText: 57,
      },
    ],
  },
  {
    id: 56,
    style: "levelOneReal",
    mainImage: unaApartment,
    characterImage: unaPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "A living room with a window, couch and closet.",
    characterImageAlt: "Bearded man with glasses.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“My… Well, Deo’s place is nearby. So, I’ll probably go check it now. Maybe I can find some answers or, at least, further directions there.”`,
    text: `“Sounds legit.” - Una nods thoughtfully. - “Weird. I’ve never seen that Deo before, though his place is next to mine. I guess he was quite a hermit. Man, what have we become? There’s someone living right next door and we’ve no idea who that is. Another neighbor we don’t care about. Jokes on us though, as we’re also that same neighbor for the rest of the world.”

    After a pause accompanied by a new tune, he keeps talking.
    
    “I assume you might have an intention to make a little jump to the first level, since you’re not afraid of dying anymore, and Deo seems to have spent his final hours there. I’m not much of a hacker, but one day I was willing to visit the place myself. Ended up being too depressed for it, so gave up on the idea, but before that I had a little chat with our friendly Dixie’s shop owner, Nnif. She might know a thing or two on how to bypass the levels’ security and enter a wonderful world of those who are closer to the surface. I don’t know much more, so consider paying Nnif a visit. Maybe she’ll do you a favor.”`,
    options: [
      {
        text: `“Thanks, Una.”`,
        nextText: 46,
        condition: 4,
      },
    ],
  },
  {
    id: 57,
    style: "levelOneReal",
    mainImage: levelOneImage01,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Old rusty corridor.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Always thought Una is in constant positivity mode. But in reality he sounds quite sad. Like he’s seen it all and doesn’t hope for any good outcome.”`,
    text: `“It’s hard to be an analog man while living in a digital world, Soai.” - Even replies thoughtfully once you exit Una’s life-capsule. - “He wants to be the same in both worlds, but, as we saw, it’s only half-true. Try all you want, in zerOne you pretend to be someone else. The only difference with the rest is that he’s escaping from virtuality while they are running away from reality.”

    Even looks around the corridor, then adds after a pause.

    “Alright, one choice at a time. How shall we proceed, almighty user of mine?”`,
    options: [
      {
        text: `“Let’s check our apartment.”`,
        nextText: 38,
      },
      {
        text: `zerOne: true`,
        nextText: 0,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 58,
    style: "levelOneReal",
    mainImage: deoApartment,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `You go inside the apartment. To the contrary to Una’s life-capsule, this one looks closer to what you’d expect based on the exterior in the corridor. The place is tiny, cramped and old.

    “Well, a certain level of neatness is still present.” - Even smirks. - “Strange though. Old man is long gone, yet it kinda feels like someone is living here. Wait, there.” - It points at the corner and you suddenly notice that someone is sleeping there. - “Hmm… Who would have thought… I mean, you do realize who that is, right?”

    Even notices your puzzled face. - “No? Not a little clue? Hah! Wait for it, dude. I’m gonna enjoy the moment.”

    It keeps grinning and finally answers your silent question. - “Sane Snacks, buddy! It’s him, in the flesh. Your favorite friend.” - It gets serious for a moment. - “It’s happening again. I know things I didn’t know a moment ago. Why does this info keep coming in and out of me?”`,
    options: [
      {
        text: `“You ok, Even?”`,
        nextText: 59,
        btnEffect: "optional",
        condition: 5,
      },
      {
        text: `“This is Sane?”`,
        nextText: 60,
      },
    ],
  },
  {
    id: 59,
    style: "levelOneReal",
    mainImage: deoApartment,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Are you ok, Even? You act differently while we are in the real world.”`,
    text: `“I don’t know, man. It’s just… Like I’m a part of all this.” - Even gestures around the room. - “Not only here, but in general, once we’re not connected to zerOne and walking throughout the tower. It all looks familiar. But I can’t figure out why. You hear them too, right? Voices when I speak, not your own voice like when we talk in zerOne. The moment you ask me something I feel like a closet that’s opening, and then hundreds of answers start falling out of it. And each one is screaming “I’m the right one!”. What’s even more weird, they are all the right ones, just slightly different. As if someone has filled this cupboard with countless identical instruments instead of just one. And I’m like some internet forum in the ancient days, where you ask a question and get a million different replies. Then I’m doing my best to gather them under one.”

    Even sighs loudly.

    “I’m not supposed to feel tired, am I? Then what is that inside me every time I talk? Someone recorded what the tiredness should feel like and I’m just imitating it?”

    You don’t know what to say to that and you both stare at Sane sleeping in the corner.

    “Phew…” - Even finally talks. - “I doubt either of us can produce an adequate response to this at the moment.” - It points at Sane. - “Let’s focus on the reality of the situation.”`,
    options: [
      {
        text: `“This is Sane?”`,
        nextText: 60,
      },
    ],
  },
  {
    id: 60,
    style: "levelOneReal",
    mainImage: deoApartment,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Are you sure this is Sane? We’re talking about the same Sane, right? Huge guy, a bit crazy when it comes to post apocalyptic topics. Always talks in a low thunderous voice and keeps saying how important it is to not be mediocre?”`,
    text: `“Oh what a day…” - Even shakes its head skeptically. - “What a lovely day to not believe me. Have I said something that isn’t true so far? Yes, it’s that kind of Sane. You do remember, that you only met him in zerOne and only when you were a loopy boy? Now we’re seeing him in reality. I do admit though, this scrawny young man doesn’t look like his virtual image at all. He’s surely spent all his experience points on strength and brutality, if you get my meaning.”

    Even gets closer to Sane.
    
    “I wonder what he’s doing here. Shall we wake him up? Connect to zerOne, ping him, you know the drill.”`,
    options: [
      {
        text: `zerOne: true`,
        nextText: 61,
        btnEffect: "switch",
      },
      {
        text: `“Let’s look around.”`,
        nextText: 70,
        btnEffect: "optional",
        condition: 6,
      },
    ],
  },
  {
    id: 61,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `You are in your virtual apartment now.

    “Well, everything is the same as when you were living your pre-eventful life.” - Even produces a satisfied chuckle. - “Notice what I did there?” - Seeing no reaction, it keeps talking. - “All seems to be as it was before. At least based on what I can check in your memory, as we were not together back then. Ever wonder how Deo put you in that repetitive state? The loop itself was more about your behavior rather than actually rewinding you each time, thus people you interacted with still know you. You just kept doing the same thing day after day, with some occasional contacts with the others. You simply never questioned the fact that you came out of nowhere and have no idea of who you are and where you came from. And the part where you were waking up every day and logging into zerOne was just loaded into you as a memory.” - Even shrugs. - “I mean, you don’t need to wake up and log in when you’re a part of it, right, so it was just a bit of a behavioral adjustment to create some sort of a daily routine looking like real life.”

    You observe the zerOne version of your life-capsule and don’t notice any differences. Same place you’ve been living in, nothing new.

    “I think old man just used a standard template for an apartment.” - Even says in the end. - “Doubt he was doing anything special here himself. Let’s call Sane.”`,
    options: [
      {
        text: `Call Sane.`,
        nextText: 62,
      },
    ],
  },
  {
    id: 62,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `You call Sane. After a while he finally replies.

    “Khm, hey Soai.”

    For a moment you hear him talking in a thin, breaking voice.

    “Oops… Sec.”

    After a pause you hear Sane’s regular low roaring voice.

    “Soai! My favorite friend! How are things, buddy? Heard you’ve given up on the arena fights. Nice! Glad to see you finally decided to be free of that vicious cycle. Wanna hang out? I’ve just uploaded a new version of There and Back Again with a few custom mods. How about a round or two?”`,
    options: [
      {
        text: `“Why are you here?”`,
        nextText: 71,
        btnEffect: "switch",
      },
      {
        text: `“We need to talk.”`,
        nextText: 63,
      },
    ],
  },
  {
    id: 63,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Sane, I need to tell you something…”`,
    text: `You decide to tell Sane everything, but, the moment you start, he interrupts you with excitement.

    “Cool! So, it finally happened.”

    “That’s a strange reaction.” - Even squints at Sane. - “As if he’s been waiting for this.”

    “I’ve been waiting for this.” - Young man keeps talking. - “Deo told me about you. Said, you might need my help at some point, but asked not to tell you anything and keep pretending that I don’t know your little secret.

    “I wonder if he knows about me as well?” - Even glances at Sane with interest.

    “Deo said you’ll have some kind of a virtual companion! Man, how cool is that! If I had one, it would be a giant black dragon! I bet you have something like that.”

    “Well…” - Even rubs its little rabbit ear. - “In a way I’m also a beast…”

    “Nevermind.” - Sane can’t stop talking. - “Dude, why are you not saying anything? I want to know more. How does it feel to be an arena character?”`,
    options: [
      {
        text: `“How do you know Deo?”`,
        nextText: 64,
      },
    ],
  },
  {
    id: 64,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Wait a minute. You know Deo?”`,
    text: `“Yeah, since he let me live in his place.” - Sane replies as if it was obvious. - “I was… let’s say, in need of an apartment and his wasn’t occupied, so I kinda slipped in. Then he contacted me in zerOne, told me about you and said that I can stay there. I haven’t heard from him for a while. In fact, since you took part in the last Writers Fight. Perhaps, he was busy with your tuning or whatever.”

    “Soai…” - Even says quietly. - “He doesn’t know that Deo’s gone. I remember now. Same as with the projection you talked to in the arena loophole, once you’ve figured it all out and I was loaded into you, all Deo’s connections to the world have been cut off. In fact, I was the one doing the cutting, as it was no longer needed. In other words, Sane never talked to the real Deo. Old man probably left something similar to his arena version here. A projection of a sort, to keep an eye on the life-capsule. And now it’s also gone. I guess we should tell him.”`,
    options: [
      {
        text: `“About Deo…”`,
        nextText: 65,
      },
    ],
  },
  {
    id: 65,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Sorry, Sane, but the truth is, Deo is long gone. We both talked to his virtual projection.”`,
    text: `“Oh…” - Once you tell him about Deo, Sane gets quiet. - “That explains some of his weird replies when we were talking. I thought it was just because he’s a lonely old fellow, looking for an audience to listen to his endless stories. But it seems like this thing was just set up to talk to occasional strangers like me. Pretty advanced projection though. Remember when we last met I offered you some sort of a rewind option, so you could start that arena attempt again? Deo let me install a special module to my zerOne character, and with it I was able to do that. He said maybe you’ll ask for it one day. Pretty useless thing, to my mind. It just wiped your daily loop and sent you to the beginning of it.”

    “Heh, bet you still used it.” - Even adds in a mocking tone, looking at you. - “Or, at least, seriously considered it.”`,
    options: [
      {
        text: `“You live alone?”`,
        nextText: 66,
      },
    ],
  },
  {
    id: 66,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“You live alone? No relatives or friends?”`,
    text: `“Nah, man…” - Sane waves his hand. - “Well, except for you, Una… and Deo I guess. Have you seen the real Bridge? Everything is like some grim bunker with nobody inside. Once I settled here, I’ve been mostly hanging out with you in zerOne or figuring out how to not go further down to the first level. Speaking of the first level…” - Sane rubs his chin. - “Deo, or his projection, said that you might want to go there. Don’t know why exactly, he didn’t tell. What he did tell is to help you install an additional module to your companion.”

    “That’s me, rabbit with a dragon soul.” - Even sounds wary. - “I already have enough of the unknown inside. What’s that supposed to be? Damn it,” - It adds at the end. - “keep forgetting that nobody except you sees or hears me.”

    Having no notion of Even’s words, Sane keeps talking. - “I don’t know much, he just told me to show you this. Looks ancient.”

    He snaps his fingers and you see a red square with a gray circle in the middle. It’s floating in front of you, slowly turning around.

    “It’s called a floppy disc.” - Even explains to you. - “People used to store information on them in the old times. I mean, we are in zerOne, so it’s just a visual look. Old man had some strange way of expressing himself. Especially given the fact that he was born not even close to the time when this was still in use. Well, who cares. I don’t think we have any other option except for installing it. Go ahead.”`,
    options: [
      {
        text: `Take the floppy disc.`,
        nextText: 67,
      },
    ],
  },
  {
    id: 67,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `The moment you touch the disc, your vision glitches and you see countless colorful artifacts around you. They look like a structure of a building, a skeleton without organs and muscles.

    “Woah…” - Even exclaims. - “Here is our ticket to the first level. This thingy has just granted me access to the cameras there. So, we can watch the feed and do the same stuff as we do here, on the second level. Although…” - Even thinks about something for a moment. - “We still don’t have access to zerOne, so we won’t be able to switch to it or to interact with the others there.”

    “You alright, Soai?” - Sane asks after seeing your puzzled look.`,
    options: [
      {
        text: `“Anything else from Deo?”`,
        nextText: 68,
      },
    ],
  },
  {
    id: 68,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Did the old man leave anything else for me?”`,
    text: `“No, nothing else.” - Sane shakes his head. - “Just this red square. He mentioned something about the rabbit though. I think his words were: “Tame the rabbit if you need to go deeper.”. He also said that you shouldn’t fully trust it. I didn’t get the meaning, but he insisted on telling you that.

    “Great.” - Even flies around Sane’s character. - “Why do I need taming and why you shouldn’t trust me. I’m basically you. Do you trust yourself?” - It keeps talking while pacing through the virtual apartment. - “Maybe he meant me. Maybe you’re my rabbit and I should tame you, Soai. Should I trust you?”

    Seeing that you’re silent, Sane adds. - “Also, Deo asked me to add that, if you don’t know where to go next, go to where it has begun.”

    “Ok, I see.” - Even sounds slightly irritated. - “He wanted us to go to the arena again. To the loophole where we first met. Could’ve just said that, without any advice on trust. We can go right away. I should be able to open the shortcut for us. Maybe there’s a CD this time.” - Seeing your face, Even clarifies. - “Another ancient device to store data… Nevermind, I meant that there we might find a way to enter the first level’s zerOne.”`,
    options: [
      {
        text: `“Need to go, Sane.”`,
        nextText: 69,
      },
    ],
  },
  {
    id: 69,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Thanks for your help, Sane. Sorry, but I need to go now.”`,
    text: `“Already?”
    
    Sane sounds sad.
    
    “Oh well, if you must, then go, sure. Hope I helped a bit. I’d love to hang out one day, you know. Don’t need to pretend that I don’t know who you are anymore. Would be nice talking to the real you. Well, the real virtual you I guess.”
    
    He sighs.
    
    “Won’t be keeping you though. Maybe another time.”`,
    options: [
      {
        text: `To be continued...`,
        nextText: 0,
      },
    ],
  },
  {
    id: 70,
    style: "levelOneReal",
    mainImage: deoApartment,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Let’s have a look around. See anything we could use here?”`,
    text: `“Unless you’ve learnt how to grow a pair of material hands, no.” - Even walks around the room. - “One perfectly standard life-capsule. A place to sleep, eat and connect to zerOne. Everything one could wish for. As long as your wishes are related to living in a digital world.”

    You observe the place, yet can’t find anything of use. Besides, as Even said, you are not able to physically interact with real objects.

    “Apartments got slightly bigger several years ago.” - Even starts talking in a multitude of voices. - “They couldn’t fill them all anymore, so it was decided to increase the size to make levels look more populated. Can you imagine how small they were before? Anyway, based on the current state, they might need to consider a new wave of renovations. By rough calculation, less than half of the level is occupied.”

    Even blinks a few times before continuing. - “Great. The farseer rabbit woke up again. Oh well, let us proceed.” - It gives the room one more glance. - “Nothing of interest here, Soai, we better move on.”`,
    options: [
      {
        text: `zerOne: true`,
        nextText: 61,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 71,
    style: "levelOneReal",
    mainImage: deoApartment,
    characterImage: saneRealPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    characterImageAlt: "Young man in a hoody.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“What are you doing in my apartment, Sane?”`,
    text: `“What do you mean, in your apartment? You’ve come to my place, dude. Wait a minute…” - Sane looks at you closely. - “Do you see me in real life?” - He waves his hand in front of your face. - “You’ve called me in zerOne, but you’re actually looking at me outside of it, right? Cool! So, it finally happened.”

    “That’s a strange reaction.” - Even squints at Sane. - “As if he’s been waiting for this.”

    “I’ve been waiting for this.” - Young man keeps talking, no sound of his thunderous voice anymore, just a thin breaking one. - “Deo told me about you. Said, you might need my help at some point, but asked not to tell you anything and keep pretending that I don’t know your little secret.

    “I wonder if he knows about me as well?” - Even glances at Sane with interest.

    “Deo said you’ll have some kind of a virtual companion! Man, how cool is that! If I had one, it would be a giant black dragon! I bet you have something like that.”

    “Well…” - Even rubs its little rabbit ear. - “In a way I’m also a beast…”

    “Nevermind.” - Sane can’t stop talking. - “Dude, why are you not saying anything? I want to know more. How does it feel to be an arena character?”`,
    options: [
      {
        text: `“How do you know Deo?”`,
        nextText: 72,
      },
    ],
  },
  {
    id: 72,
    style: "levelOneReal",
    mainImage: deoApartment,
    characterImage: saneRealPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    characterImageAlt: "Young man in a hoody.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Wait a minute. You know Deo?”`,
    text: `“Yeah, since he let me live in his place.” - Sane replies as if it was obvious. - “I was… let’s say, in need of an apartment and his wasn’t occupied, so I kinda slipped in. Then he contacted me in zerOne, told me about you and said that I can stay here. I haven’t heard from him for a while. In fact, since you took part in the last Writers Fight. Perhaps, he was busy with your tuning or whatever.”

    “Soai…” - Even says quietly. - “He doesn’t know that Deo’s gone. I remember now. Same as with the projection you talked to in the arena loophole, once you’ve figured it all out and I was loaded into you, all Deo’s connections to the world have been cut off. In fact, I was the one doing the cutting, as it was no longer needed. In other words, Sane never talked to the real Deo. Old man probably left something similar to his arena version here. A projection of a sort, to keep an eye on the life-capsule. And now it’s also gone. I guess we should tell him.”`,
    options: [
      {
        text: `“About Deo...”`,
        nextText: 73,
      },
    ],
  },
  {
    id: 73,
    style: "levelOneReal",
    mainImage: deoApartment,
    characterImage: saneRealPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    characterImageAlt: "Young man in a hoody.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“Sorry, Sane, but the truth is, Deo is long gone. We both talked to his virtual projection.”`,
    text: `“Oh…” - Once you tell him about Deo, Sane gets quiet. - “That explains some of his weird replies when we were talking. I thought it was just because he’s a lonely old fellow, looking for an audience to listen to his endless stories. But it seems like this thing was just set up to talk to occasional strangers like me. Pretty advanced projection though. Remember when we last met I offered you some sort of a rewind option, so you could start that arena attempt again? Deo let me install a special module to my zerOne character, and with it I was able to do that. He said maybe you’ll ask for it one day. Pretty useless thing, to my mind. It just wiped your daily loop and sent you to the beginning of it.”

    “Heh, bet you still used it.” - Even adds in a mocking tone, looking at you. - “Or, at least, seriously considered it.”`,
    options: [
      {
        text: `“You live alone?”`,
        nextText: 74,
      },
    ],
  },
  {
    id: 74,
    style: "levelOneReal",
    mainImage: deoApartment,
    characterImage: saneRealPortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Tiny futuristic apartment.",
    characterImageAlt: "Young man in a hoody.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    subText: `“You live alone? No relatives or friends?”`,
    text: `“Nah, man…” - Sane waves his hand. - “Well, except for you, Una… and Deo I guess. Have you seen the real Bridge? Everything is like some grim bunker with nobody inside. Once I settled here, I’ve been mostly hanging out with you in zerOne or figuring out how to not go further down to the first level. Speaking of the first level…” - Sane rubs his chin. - “Deo, or his projection, said that you might want to go there. Don’t know why exactly, he didn’t tell. What he did tell is to help you install an additional module to your companion.”

    “That’s me, rabbit with a dragon soul.” - Even sounds wary. - “I already have enough of the unknown inside. What’s that supposed to be? Damn it,” - It adds at the end. - “keep forgetting that nobody except you sees or hears me.”

    Having no notion of Even’s words, Sane keeps talking. - “Switch to zerOne, I’ll show you there.”`,
    options: [
      {
        text: `zerOne: true`,
        nextText: 75,
        btnEffect: "switch",
      },
    ],
  },
  {
    id: 75,
    style: "levelOneVirtual",
    mainImage: deoVirtualApartment,
    characterImage: sanePortrait,
    subImage: characterImage,
    additionalImage: evenPortrait,
    mainImageAlt: "Virtual futuristic apartment.",
    characterImageAlt: "Big man wearing post-apocalyptic clothes.",
    subImageAlt: "Man looking away.",
    additionalImageAlt: "Silver creature with red eyes and rabbit ears.",
    text: `Sane’s zerOne character stands nearby, his loud voice rumbling. - “I don’t know much, Deo just told me to show you this. Looks ancient.”

    He snaps his fingers and you see a red square with a gray circle in the middle. It’s floating in front of you, slowly turning around.
    
    “It’s called a floppy disc.” - Even explains to you. - “People used to store information on them in the old times. I mean, we are in zerOne, so it’s just a visual look. Old man had some strange way of expressing himself. Especially given the fact that he was born not even close to the time when this was still in use. Well, who cares. I don’t think we have any other option except for installing it. Go ahead.”`,
    options: [
      {
        text: `Take the floppy disc.`,
        nextText: 67,
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
import levelOneImage01 from "../assets/images/levelOne_image_01.jpg";
import levelOneImage02 from "../assets/images/levelOne_image_02.jpg";
import unaPortrait from "../assets/images/una_portrait.jpg";
import unaApartment from "../assets/images/una_apartment.jpg";
import deoApartment from "../assets/images/deo_apartment.jpg";
import deoVirtualApartment from "../assets/images/deo_virtual_apartment.jpg";
import sanePortrait from "../assets/images/sane_portrait.jpg";
import saneRealPortrait from "../assets/images/sane_real_portrait.jpg";

export default gameContents;
