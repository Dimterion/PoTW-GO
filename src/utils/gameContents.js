const gameContents = [
  {
    id: 0,
    text: `“The world is dying, Soai. Pathetic phrase, I know. And yet there is no better way of saying it. We’ve built the towers, scraping for life. We’ve hidden inside, while making them higher and higher. But the sky is our limit now. Literally. We’ve created zerOne to escape from reality. But this reality won’t go anywhere. It’ll soon reach us and hit us hard, no matter how many new writers there are, no matter if we code more or less. We can hide but we can’t run. There’s simply no place to run to. Do you see it?”

    Arika points down, at the surface far beneath you. There are no toxic clouds shrouding what’s below. Now you can see it. Blurry image of the distant brown land speckled with dirty green spots all over it. Even from that distance you can almost feel the toxic air filling up your lungs, poisoning them, killing you. Suffocating touch of death on your throat. The wind is throwing needles of dust in your face, scratching, leaving long bloody lines all over it.

    You notice movement, myriads of dots all over the surface down below, shifting like a water surface in the storm, without any rest.

    “Machines.” - Arika follows your gaze. - “Searching for the remnants of our former life, scraping the last bits of resources the planet still has. They support the towers, rebuild them, but it’s getting slower and slower. There isn’t much left and what is left is being consumed both by us and them.” - Arika sighs. - “A grim picture, but I had to paint it for you, Soai. Deo asked me to guide you once you… well, get the idea of who you are.”

    You look around, observing the space. You sit on the narrow metal bar sticking from the tower’s wall like some forgotten piece after the construction work. The green and yellow clouds begin getting lower, surrounding you. The rain pours from above, dripping on the transparent umbrella Arika is holding above your heads. The drops are hissing on its surface like tiny angry creatures, not able to reach their prey.

    You turn around to her, watching a pair of yellow eyes watching you. Yellow hair is waving in the wind slightly.`,
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
    subText: `“This place. So real… I mean, I myself am not much real, but it’s different than being in zerOne. Though, I guess I don’t know what it is to be real. All my life, however short or long it was, I thought I am a human like you. But, as it turns out, I am a bunch of code written by a dead man for some not quite clear purpose.”`,
    text: `Arika frowns at you.

    “You are as real as you can ever be. Human, non-human, why should this matter? You say you can feel and that’s what matters.” - She sighs again. - “It’s when you stop feeling, that’s when it becomes terrifying. Having no connection to the world around you is a scary thing, Soai. Try not to lose it.”

    Arika looks sad, thinking about something else, as if she is somewhere in a different place, far away. Then she shakes her head abruptly, smiles and continues in a cheerful voice.
    
    “Anywho, about this place. A while ago I managed to slip by the security systems in the real world and installed a camera right where we are sitting right now.” - She giggles and winks at you. - “So, we’re kinda watching the online feed. I did some tweaking, cleared the image a bit and so on. Well, I admit, this metal piece is somewhat smaller in reality, but, what’s funny, it’s still there. Can you imagine, with all the work and planning, they forgot about it somewhere along the construction. I like to come here from time to time and watch what’s still there, beneath us. The remains of our old home, which is now no more than a foundation, slowly collapsing and fading away.”`,
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
    subText: `“What am I, Arika? Well, I know that I’m an artificial being, created by Deo. And I guess I’m sort of self-aware… But I still don’t feel like it. I don’t see any difference between me before the old man told me the truth and me after that. It’s like I’m still human Soai, a poet that’s trying to get good and climb to the higher levels.”`,
    text: `Arika smiles.

    “Isn’t that a good thing? Having doubts, being not sure. That’s what life is all about. You don’t see any difference, because there is none.” - She chuckles. - “Well, apart from the fact that you seem way less interested in winning the Writer’s Fights. But we all shift our perspectives from time to time.”

    Arika tilts her head, looking at you, like trying to figure something out. A brief moment of hesitation hangs between the two of you, then she continues.

    “As for the philosophical question of what you are, how about be what you want to be?” - She winks at you. - “I mean, I’m artificial here, in zerOne. Same as you are. And, look down, you’re seeing the real world projection now, so you can take a peek at it too. Same as me. Pretty cool, huh? This is the feed from the camera I was able to install at this same spot back there, in reality. Man, that was a scary day. I still can’t believe I climbed here all by my very own limbs.” - She sounds sad for a moment. - “I hope that was worth it. It’s a long way down. Almost makes you feel like a bird before reaching the surface. But at times, a leap of faith is all we need, hoping for some soft landing spot which may not be there.”`,
    options: [
      {
        text: `“You went outside?”`,
        nextText: 3,
      },
      {
        text: `“Writer’s Fights…”`,
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    subText: `“Wait a second. You went outside? Outside the tower? How is that possible?”`,
    text: `Arika avoids your gaze.

    “Well… There are ways. Not for everyone, obviously. But with the right equipment and, first of all, enough credits, you can apply a bit of an open doors policy. Way too dangerous also. It’s one thing when rich folk fly between the towers using the machines, but going out wearing a protective suit all by yourself and, what’s more, jumping over the metal pieces like this one, that’s a completely different line of business.”

    Arika suddenly turns to you, looking straight into your eyes.

    “But I had to do that, Soai. I needed to see how it looks and feels out there. Despite all the desperate landscape and all the rest, as weird as it sounds, it gives me hope. Maybe there’s a way to fix it all and be there again.” - She points down. - “To breathe fresh air, to step on the soil, feeling it with your bare feet. I wonder how it is. Being born in the tower, I can only imagine such things. Makes two of us, right?”`,
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
    subText: `“Why did you bring me here? After the arena fight we just disappeared and went straight to this place. I never managed to travel like that before. You did something, right? Don’t get me wrong, that’s all impressive, but I think there’s something else.”`,
    text: `After a pause Arika replies.

    “I saw you in the Mnemonic bar many times, sitting there, looking at the window. I bet each time you were wondering what life looks like outside. Well, here it is. Also, while it’s all breathtaking, take a look at the tower itself. It’s not as pretty and solid as you might think.”

    You realize that all that time you were more focussed on the view below and in front of you, rather than above and behind. You turn your head and see the tower’s wall. It’s all covered in rust, with some sections barely holding. Metal dust is flying all around with each blow of the wind. The bar you’re sitting on is shaking like a tree branch ready to break and fall down.

    “Believe me, this one is not as bad as some of the others.” - Arika produces a sad chuckle. - “I’ve been to places, so I’ve seen some tremendously grim… states of affairs. Many of the towers are barely holding. A few have been destroyed already. They don’t tell us that. The Builders Council, I mean. Frankly speaking, they don’t talk much in general. It’s as if they have just forgotten about us. Here are your lifescrapers, take them and live in them, the rest is not of our concern. Feels weird, to say the least.”

    Arika gets silent for a moment, looking away, then continues.

    “There is a chance for us to do something about it, Soai. I can travel between the towers, to some extent. I know that’s possible. I know there’s a way to reach the Pillar. I want to find out what’s happening out there. I want to understand why they don’t do anything, why they isolate themselves there. But I can’t do it alone. Not anymore. Especially since Deo has gone.”

    She stops talking and stares in front of her, her head sunk in her shoulders.`,
    options: [
      {
        text: `“What happened to Deo?”`,
        nextText: 7,
      },
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 5,
    subText: `“Writer’s Fights have just lost a whole bunch of value for me, to be honest. Going to other levels, sure, but doing all the arena stuff feels kinda pointless.”`,
    text: `“Don’t stress about it. Such feelings come and go.” - Arika nudges you with her elbow. - “You might yet find some interest in doing a bit of writing here and there. You want to feel more human? Learn how to relax and waste your time… from time to time.” - Arika laughs happily, then continues. - “As for going to other levels, you sir, came to the right person. In fact, that’s the reason I’ve brought you here. I saw you in the Mnemonic bar many times, sitting there, looking at the window. I bet each time you were wondering what life looks like outside. Well, here it is. Also, while it’s all breathtaking, take a look at the tower itself. It’s not as pretty and solid as you might think.”

    You realize that all that time you were more focussed on the view below and in front of you, rather than above and behind. You turn your head and see the tower’s wall. It’s all covered in rust, with some sections barely holding. Metal dust is flying all around with each blow of the wind. The bar you’re sitting on is shaking like a tree branch ready to break and fall down.

    “Believe me, this one is not as bad as some of the others.” - Arika produces a sad chuckle. - “I’ve been to places, so I’ve seen some tremendously grim… states of affairs. Many of the towers are barely holding. A few have been destroyed already. They don’t tell us that. The Builders Council, I mean. Frankly speaking, they don’t talk much in general. It’s as if they have just forgotten about us. Here are your lifescrapers, take them and live in them, the rest is not of our concern. Feels weird, to say the least.”

    Arika gets silent for a moment, looking away, then continues.

    “There is a chance for us to do something about it, Soai. I can travel between the towers, to some extent. I know that’s possible. I know there’s a way to reach the Pillar. I want to find out what’s happening out there. I want to understand why they don’t do anything, why they isolate themselves there. But I can’t do it alone. Not anymore. Especially since Deo has gone.”

    She stops talking and stares in front of her, her head sunk in her shoulders.`,
    options: [
      {
        text: `“What happened to Deo?”`,
        nextText: 7,
      },
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 6,
    subText: `“I guess you’re right. Though, I’m not sure if I ever get the chance for breathing and feeling.”`,
    text: `Arika purses her lips pondering.

    “Well, who knows, perhaps one day we’ll find a way. But I’d suggest focusing on the matter at hand.” - She points at the tower’s walls behind, and you realize who old and rusty they are. - “If you think this one is in a sorry condition, you should see some of the others. Trust me, I’ve been to places and seen some degraded state. A few towers have collapsed already. And the Builders Council says nothing. They barely talk to us, and I want to know what is going on over there, in the Pillar.”

    She sighs, looking at the distance.

    “I tried to reach it, but didn’t manage. It’s rather far away in the real world and quite well protected in zerOne. Deo was able to approach it once, but all he saw was a blurry silhouette. Now he’s gone, Soai, and I need all the help I can get to try again. I want to find out what’s happening out there. I want to understand why they don’t do anything, why they isolate themselves there while the whole world is on its final countdown.”
    
    She stops talking and stares in front of her, her head sunk in her shoulders.`,
    options: [
      {
        text: `“What happened to Deo?”`,
        nextText: 7,
      },
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
    ],
  },
  {
    id: 7,
    subText: `“What happened to Deo? He didn’t tell me much. To add to that, it wasn’t really him who talked to me. Some digital copy? My distant, less sophisticated relative? Never mind. I’m more interested in the old man himself.”`,
    text: `“He got too close to the sun.” - Arika smiles sadly. - “Meaning, to the Pillar. He bypassed their firewalls and almost reached it. In the virtual world of course. I’m the one who was obsessed with the real one, Deo was surfing the digital waves non-stop. He planned to log into the Pillar’s network to get access to their systems, see what’s going on, talk to them and so on. They caught him and sent him down. To the first level. I found out too late. Stubborn old pickle decided not to tell me that. No idea why. Perhaps he had his reasons. So, we kept doing what we did before: he was jumping from one tower to another virtually, gathering data to make and improve you, and I was doing kinda the same but in both worlds. Well, as long as I could though…”

    Arika suddenly gets quiet, as if she doesn’t want to tell you something, then continues.
    
    “Then I finally got the news about him reaching the bottom. So I moved back here, to the Bridge and some time after we met at the arena at last. Voila.”`,
    options: [
      {
        text: `“Got any plan in mind?”`,
        nextText: 8,
      },
      {
        text: `“How did you meet him?”`,
        nextText: 9,
      },
    ],
  },
  {
    id: 8,
    subText: `“You got any plan in mind? This seems to be quite an undertaking. Even the old man ended up being… done. So, I'm open to all possible suggestions, as I can't say I have much on my side.”`,
    text: `“I might.” - Arika smiles mysteriously. - “Though, can’t say it has an abundance of details in it. I’d say, we could pay Deo a visit. Well, not him directly, for obvious reasons, but we can visit the place he ended up being in the end. There could be something for us to learn. You probably know that I’ve been at the first levels already. Last time it was the one here, in the Bridge. Was trying to reach the old man, even though he surely didn’t want that. But now it doesn’t matter anymore, so I suggest making our descent and trying to find where he lived. Both virtually and in reality.”`,
    options: [
      {
        text: `“Sure, let’s do this.”`,
        nextText: 10,
      },
    ],
  },
  {
    id: 9,
    subText: `“How did you meet Deo? It seems you knew each other for quite some time.”`,
    text: `“Maybe quite some, maybe less so.” - Arika shrugs, somewhat indifferent. - “Can’t say I’ve been keeping a good track of time recently. As for the how part, Deo was appearing on various Writers Fights every now and then, watching the participants, talking to some of them, trying to find those who would, let’s say, join his cause.”

    Arika glances at you.

    “He was constantly searching, never giving up, looking for like-minded folk. You might be surprised to know that there are lots and lots of personalities integrated into you, not only Deo’s. You, sir, are an absolute remix of a whole bunch of music of all possible genres and styles.”

    She giggles, then continues.

    “Sorry, got a bit distracted. About meeting the grumpy genius. You’ve probably guessed it already. It happened during one of the Writers Fights. I was doing the arena, or better say, messing around. Didn’t aim at winning. Was just, dunno, having fun if you can say so. Knocked out one dude, then stopped, went back and healed him up, pushed forward again, that kind of stuff. The one that makes everyone else angry. I was just bored. Was sitting at the finish line after the arena, looking at the empty track, when Deo approached me. Word by word he dragged me in. Once I realized what he was aiming at, I made up my mind and asked him if I could join. Hearing no objections from the old fellow, I’ve begun helping him with all that.” - Arika waved her hand at you. - “Though at last he got quite a secretive companion, so I got more time on my own and kept irritating folk in various arenas. That’s a short version for ya, my newly acquired friend.”

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
    subText: `“Alright, any action is better than no action at all. How do we get out of here and get over there?”`,
    text: `Arika gets up, balancing on the narrow metal bar, and spreads her arms wide.

    “Why, that is as easy as snapping my fin…”

    She suddenly stops talking, and her virtual character image starts glitching like an old recording, tearing into pieces and falling down into pixels of various colors. Her voice turns into an incomprehensible buzzing, as if it’s being shred by a grinder. That scene lasts for a few seconds, after which Arika disappears completely.

    You sit alone, hanging above the yellow and green abyss beneath you. Arika’s umbrella is slowly falling into it, turning like a spinning top in the air.`,
    options: [
      {
        text: `What happened?`,
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    subText: `“Arika? You’re there?”`,
    text: `Completely lost, you turn your head around, observing the place once again. Yet, there’s nothing new, except for the fact that there’s nobody nearby. What’s more, you have no idea how Arika brought you here and how to get out.`,
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
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code representation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from it. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by the experience, you begin to understand that the whole place is similar to the Deo’s rabbit hole you visited during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.

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
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The Tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch it, it gets flat and slippery like a block of ice.

    Seems like whoever designed this place, that individual made sure you won’t be able to go any higher.

    You try jumping a few times, but that also didn’t really bring any results except for metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant, like a nail scratching the glass slowly and firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
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
    text: `You feel lonely, completely lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds coming out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who should be your guide, to light your path and show which one is right?

    You understand that all the shouting and existential questions won’t do you much good. Cry all you want, but in the virtual space no one can hear your scream. Everyone’s busy with their own ones.`,
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
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The Tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch it, it gets flat and slippery like a block of ice.

    Seems like whoever designed this place, that individual made sure you won’t be able to go any higher.

    You try jumping a few times, but that also didn’t really bring any results except for metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant, like a nail scratching the glass slowly and firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `Cry and scream.`,
        nextText: 16,
      },
    ],
  },
  {
    id: 16,
    text: `You feel lonely, completely lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds coming out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who should be your guide, to light your path and show which one is right?
    
    You understand that all the shouting and existential questions won’t do you much good. Cry all you want, but in the virtual space no one can hear your scream. Everyone’s busy with their own ones.`,
    options: [
      {
        text: `?_?`,
        nextText: 27,
      },
    ],
  },
  {
    id: 17,
    text: `You feel lonely, completely lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds coming out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who should be your guide, to light your path and show which one is right?

    You understand that all the shouting and existential questions won’t do you much good. Cry all you want, but in the virtual space no one can hear your scream. Everyone’s busy with their own ones.`,
    options: [
      {
        text: `Climb up the wall.`,
        nextText: 18,
      },
    ],
  },
  {
    id: 18,
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The Tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch it, it gets flat and slippery like a block of ice.

    Seems like whoever designed this place, that individual made sure you won’t be able to go any higher.
    
    You try jumping a few times, but that also didn’t really bring any results except for metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant, like a nail scratching the glass slowly and firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.
    `,
    options: [
      {
        text: `?_?`,
        nextText: 27,
      },
    ],
  },
  {
    id: 19,
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code representation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from it. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by the experience, you begin to understand that the whole place is similar to the Deo’s rabbit hole you visited during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.

    There must be some other way out.`,
    options: [
      {
        text: `Cry and scream.`,
        nextText: 20,
      },
    ],
  },
  {
    id: 20,
    text: `You feel lonely, completely lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds coming out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who should be your guide, to light your path and show which one is right?
    
    You understand that all the shouting and existential questions won’t do you much good. Cry all you want, but in the virtual space no one can hear your scream. Everyone’s busy with their own ones.`,
    options: [
      {
        text: `?_?`,
        nextText: 27,
      },
    ],
  },
  {
    id: 21,
    text: `You feel lonely, completely lost and hopeless. You don’t know who you are and what you are supposed to do in this life. An impostor in a digital world, pretending to be a real being.

    You scream like a madman, sounds coming out of your artificial throat in bursts and disappear in the nothingness that surrounds you.

    What else is there to do? Who should be your guide, to light your path and show which one is right?
    
    You understand that all the shouting and existential questions won’t do you much good. Cry all you want, but in the virtual space no one can hear your scream. Everyone’s busy with their own ones.`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 22,
      },
    ],
  },
  {
    id: 22,
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code representation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from it. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by the experience, you begin to understand that the whole place is similar to the Deo’s rabbit hole you visited during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.

    There must be some other way out.`,
    options: [
      {
        text: `?_?`,
        nextText: 27,
      },
    ],
  },
  {
    id: 23,
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code representation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from it. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by the experience, you begin to understand that the whole place is similar to the Deo’s rabbit hole you visited during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.

    There must be some other way out.`,
    options: [
      {
        text: `Climb up the wall.`,
        nextText: 24,
      },
    ],
  },
  {
    id: 24,
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The Tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch it, it gets flat and slippery like a block of ice.

    Seems like whoever designed this place, that individual made sure you won’t be able to go any higher.

    You try jumping a few times, but that also didn’t really bring any results except for metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant, like a nail scratching the glass slowly and firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `?_?`,
        nextText: 27,
      },
    ],
  },
  {
    id: 25,
    text: `You turn around and crawl to the Bridge wall behind. You slowly get up and start climbing. Well, it’s not really climbing. More like moving your hands all over the wall and trying to find something to hold on to. Yet the whole surface is smooth and there is nothing to grab in order to lift yourself up. The Tower may look old, rusty and full of sticking pieces from a distance (and in the real world most likely), but, as soon as you touch it, it gets flat and slippery like a block of ice.

    Seems like whoever designed this place, that individual made sure you won’t be able to go any higher.

    You try jumping a few times, but that also didn’t really bring any results except for metal bar squeaking. The sound makes you nervous. The kind of nervous you get after hearing something unpleasant, like a nail scratching the glass slowly and firmly, getting further and further until you start itching and twitching, not able to focus on anything else until the sound stops.`,
    options: [
      {
        text: `Jump off the bar.`,
        nextText: 26,
      },
    ],
  },
  {
    id: 26,
    text: `You only live once. Or, in your case, it’s hard to tell if you lived at all. You’re a mere code representation in a digital world.

    You get up, close your eyes and take a step into the emptiness in front of you.

    Having a wonderful and terrifying feeling of a free fall for a few seconds, you suddenly realize that nothing changes. You open your eyes and see the same metal bar underneath. In the next moment you smash right into it, your arms and legs hanging loosely from it. Not able to catch balance, you slide off the bar and fly down again. In a blink of an eye you end up being on the cold metal once more. This falling loop repeats a couple more times, when you finally manage to grab the bar and sit on it.

    A bit shaken by the experience, you begin to understand that the whole place is similar to the Deo’s rabbit hole you visited during the last Writers Fight. It’s just a virtual space surrounded by digital walls. Upon reaching any of them, you’re simply being thrown away to the other side endlessly.

    There must be some other way out.`,
    options: [
      {
        text: `?_?`,
        nextText: 27,
      },
    ],
  },
  {
    id: 27,
    text: `Seems like you’ve tried all of your options, and none of them worked. You stare into the abyss, thoughtless, hopeless, having no idea of what to do next.

    Suddenly you notice a movement nearby. You raise your eyes and see a strange creature floating in the air right next to you. It has some weird similarity to the rabbit you saw during the arena, in the loophole where you talked with Deo’s projection. Though, it looks more like a human this time. A bizarre and strange human, to be completely honest.

    The creature tilts its head, observing you with its red glowing eyes. This silent scene lasts for a brief moment.

    “No way up or down, huh?” - It speaks in a familiar voice, yet you can’t figure out where you heard it. - “It’s your voice, dude. Can’t you hear it? I’m EH, by the way. Remember the name? I’m inside of your artificial digital brain. In fact, I’m a part of you. Always have been. Nnif activated me when you asked her about Deo, and then, once you entered the shortcut in the Shrike, I got turned on completely.” - It chuckles. - “So, we’re both one whole Soai now. But you can call me Even, heh. Don’t like EH, you know. And Event Horizon is too official, sounds like first and last name. As for the T at the end… Meh, who cares. If you spell it backwards it gives you never without an R.” - The creature winks. - “And thus we got T removed from one end and R - from the other. My little trademark of a sort. Long story short, I want you to call me Even, ok? And, as I’m basically you, it means that you want it as well.”`,
    options: [
      {
        text: `“A part of me?”`,
        nextText: 28,
      },
      {
        text: `“What’s with all the names?”`,
        nextText: 29,
      },
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 28,
    subText: `“What do you mean you are a part of me?”`,
    text: `Even flies around you and keeps talking.

    “Well, what do you think I mean? Exactly what you’re hearing. Deo integrated me into you when you were created. I was just sort of turned off, you know. And now I am on all the way. So, that’s what it is. We’re one cute little Soai, seeking our place in the world, trying to figure out how much of a human we are. I'm just more on the knowledgebase and analyzing side.”

    After another spin around you Even continues.
    
    “Feels good to be finally out. And, by the way, I’ve no idea what our task is and why we were created, in case you’re wondering and think that I know. I’m as clueless as you are. Perhaps we can find it out together.”`,
    options: [
      {
        text: `“What’s with all the names?”`,
        nextText: 31,
      },
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 29,
    subText: `“You’re really obsessed with the names, aren’t you?”`,
    text: `Even flies closer to you, looking into your eyes.

    “Listen, I was a silent observer of your daily loops back then, so I had to entertain myself somehow. Watching you doing your precious Writers Fights is fun and all, but sooner or later you get bored. Thus, I was pondering on the various names at times. To entertain myself, or have some sort of a hobby. And besides, I like names. Makes you feel… you, I guess. As if I am something. Part of you, but still, something else as well. Some personality inside of your personality. You’re a nice piece of code, which makes me a nice one, but I just want to be me regardless.”`,
    options: [
      {
        text: `“A part of me?”`,
        nextText: 32,
      },
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 30,
    subText: `“Well, frankly speaking, I’m not surprised at all. Nice to meet you, Even. Any idea on how we can proceed? I’m feeling some terrible lack of further ideas on my side at the moment.”`,
    text: `Even tilts its head, watching you closely.

    “Am I supposed to do everything for you, buddy? Like in some sort of a game tutorial?”

    Then it waves its hand and smiles.

    “Just kidding. I suggest getting out of here. Should be enough sightseeing for us both. I had some fun watching you trying all directions. And when you run out of options, it’s a good indicator that you need to make a pause, take a deep breath and focus on the situation at hand.”

    Even points at the bar you’re sitting on.

    “Long story short, there’s an exit button, right under your nose.”

    You look at the metal bar and see glowing words forming the phrase “To the place you !belong”.

    Even chuckles.

    “Yep, it’s been there all that time. When you’re stuck, the most straightforward solution is usually the right one. Shall we?”

    Even nods at the glowing words.`,
    options: [
      {
        text: `Press the button.`,
        nextText: 33,
      },
    ],
  },
  {
    id: 31,
    subText: `“You’re really obsessed with the names, aren’t you?”`,
    text: `Even flies closer to you, looking into your eyes.

    “Listen, I was a silent observer of your daily loops back then, so I had to entertain myself somehow. Watching you doing your precious Writers Fights is fun and all, but sooner or later you get bored. Thus, I was pondering on the various names at times. To entertain myself, or have some sort of a hobby. And besides, I like names. Makes you feel… you, I guess. As if I am something. Part of you, but still, something else as well. Some personality inside of your personality. You’re a nice piece of code, which makes me a nice one, but I just want to be me regardless.”`,
    options: [
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 32,
    subText: `“What do you mean you are a part of me?”`,
    text: `Even flies around you and keeps talking.

    “Well, what do you think I mean? Exactly what you’re hearing. Deo integrated me into you when you were created. I was just sort of turned off, you know. And now I am on all the way. So, that’s what it is. We’re one cute little Soai, seeking our place in the world, trying to figure out how much of a human we are. I'm just more on the knowledgebase and analyzing side.”

    After another spin around you Even continues.
    
    “Feels good to be finally out. And, by the way, I’ve no idea what our task is and why we were created, in case you’re wondering and think that I know. I’m as clueless as you are. Perhaps we can find it out together.”`,
    options: [
      {
        text: `“So, what’s next?”`,
        nextText: 30,
      },
    ],
  },
  {
    id: 33,
    text: `To be continued...`,
    options: [],
  },
];

export default gameContents;
