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
];

export default gameContents;
