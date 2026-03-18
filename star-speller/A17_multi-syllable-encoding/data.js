window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["running","mastery-doubling","The rabbit was running across the lawn."],
    ["invite","mastery-vce","We will invite the neighbors to dinner."],
    ["teacher","mastery-vowel-team","The teacher opened the storybook slowly."],
    ["market","mastery-r-controlled","We bought peaches at the market."],
    ["cloud","mastery-diphthong","A dark cloud drifted over the field."],
    ["little","mastery-final-stable","The little bird hopped along the fence."],
    ["helpful","mastery-suffix","The helpful guide showed us the shortest path."],
    ["children's","mastery-possessive","The children's coats hung by the door."],
    ["their","mastery-homophone","Their lantern glowed beside the path."],
    ["friend","mastery-irregular","My friend mailed a kind note."],

    ["biology","mastery-root","Biology explains how living things grow."],
    ["stopped","mastery-doubling","The bus stopped near the old oak tree."],
    ["shape","mastery-vce","The silver shape reflected in the water."],
    ["green","mastery-vowel-team","Green leaves shimmered after the storm."],
    ["storm","mastery-r-controlled","The storm rattled the shutters all night."],
    ["choice","mastery-diphthong","That was a wise choice for the project."],
    ["button","mastery-final-stable","She sewed a button on the coat."],
    ["kindness","mastery-suffix","Her kindness made everyone feel welcome."],
    ["boxes","mastery-plural","The boxes arrived before noon."],
    ["you're","mastery-homophone","You're early for the field trip."],

    ["because","mastery-irregular","We stayed inside because it was raining."],
    ["transport","mastery-root","The truck will transport supplies at dawn."],
    ["bigger","mastery-doubling","The blue basket looked bigger than mine."],
    ["late","mastery-vce","We were late because the road was closed."],
    ["beach","mastery-vowel-team","We walked along the beach at sunrise."],
    ["bird","mastery-r-controlled","A bird perched on the fence post."],
    ["brown","mastery-diphthong","She wore brown boots on the trail."],
    ["candle","mastery-final-stable","A candle glowed beside the window."],
    ["payment","mastery-suffix","The payment arrived by mail."],
    ["babies","mastery-plural","The babies slept in their cribs."],

    ["to","mastery-homophone","Please walk to the mailbox with me."],
    ["through","mastery-irregular","We walked through the narrow gate."],
    ["microscope","mastery-root","The microscope showed the tiny cell."],
    ["planning","mastery-doubling","She was planning the whole event."],
    ["tube","mastery-vce","The paint came from a bright blue tube."],
    ["boat","mastery-vowel-team","The boat drifted across the lake."],
    ["north","mastery-r-controlled","The geese flew north for the season."],
    ["crowd","mastery-diphthong","The crowd cheered after the last song."],
    ["puzzle","mastery-final-stable","The puzzle pieces covered the table."],
    ["joyful","mastery-suffix","The choir sounded joyful at the concert."],

    ["heroes","mastery-plural","The heroes returned at dawn."],
    ["write","mastery-homophone","Write your name at the top of the page."],
    ["could","mastery-irregular","I could hear thunder in the distance."],
    ["dictionary","mastery-root","The dictionary lay open on the desk."],
    ["grabbing","mastery-doubling","She was grabbing apples from the basket."],
    ["smiled","mastery-vce","She smiled at the surprise gift."],
    ["team","mastery-vowel-team","Our team practiced before the game."],
    ["morning","mastery-r-controlled","Morning light spilled across the floor."],
    ["boy","mastery-diphthong","The boy carried a stack of books."],
    ["sparkle","mastery-final-stable","The stars sparkle above the lake."],

    ["sadness","mastery-suffix","The tale ended with sadness."],
    ["girls'","mastery-possessive","The girls' notebooks covered the table."],
    ["blue","mastery-homophone","She wore a blue jacket to school."],
    ["young","mastery-irregular","The young fox hid in the tall grass."],
    ["telescope","mastery-root","The telescope pointed toward Jupiter."],
    ["winner","mastery-doubling","The winner held up the gold trophy."],
    ["brave","mastery-vce","The brave dog barked at the storm."],
    ["teacher","mastery-vowel-team","The teacher smiled at the class."],
    ["garden","mastery-r-controlled","The garden smelled like mint and rain."],
    ["shout","mastery-diphthong","Do not shout in the quiet hallway."],

    ["purple","mastery-final-stable","Purple ribbons fluttered in the wind."],
    ["movement","mastery-suffix","The movement of leaves showed the wind."],
    ["students'","mastery-possessive","The students' projects filled the hallway."],
    ["whole","mastery-homophone","She ate the whole peach."],
    ["enough","mastery-irregular","We had enough wood for the fire."],
    ["geography","mastery-root","Geography class used a map of the world."],
    ["slipped","mastery-doubling","The note slipped from the folder."],
    ["riding","mastery-vce","The children were riding their bikes."],
    ["snowflake","mastery-vowel-team","A snowflake landed on my sleeve."],
    ["turn","mastery-r-controlled","Please turn the page now."],

    ["coin","mastery-diphthong","Riley dropped a coin into the fountain."],
    ["table","mastery-final-stable","The table was set with blue plates."],
    ["quickly","mastery-suffix","She quickly packed her books into a bag."],
    ["wolves","mastery-plural","Wolves howled beyond the ridge."],
    ["here","mastery-homophone","Come sit here beside me."],
    ["once","mastery-irregular","I visited that museum once before."],
    ["transform","mastery-root","The story can transform the way we think."],
    ["runner","mastery-doubling","The runner tied her shoes before the race."],
    ["smile","mastery-vce","A smile spread across his face."],
    ["rainbow","mastery-vowel-team","A rainbow stretched over the field."],

    ["purple","mastery-r-controlled","She wore a purple scarf in the wind."],
    ["cowboy","mastery-diphthong","The cowboy waved from the dusty trail."],
    ["simple","mastery-final-stable","The map showed a simple path through town."],
    ["careful","mastery-suffix","Be careful with the glass jar."],
    ["people's","mastery-possessive","The people's voices filled the hall."],
    ["sea","mastery-homophone","The sea looked silver in the moonlight."],
    ["business","mastery-irregular","The business opened before sunrise."],
    ["telephone","mastery-root","The telephone rang just before dinner."],
    ["hottest","mastery-doubling","July is often the hottest month here."],
    ["cute","mastery-vce","The puppy looked especially cute in the yellow bow."],

    ["green","mastery-vowel-team","Green leaves covered the garden path."],
    ["stormy","mastery-r-controlled","The sea looked stormy before sunset."],
    ["town","mastery-diphthong","The town square filled with music and lights."],
    ["gentle","mastery-final-stable","The gentle horse lowered its head."],
    ["statement","mastery-suffix","Her statement answered the question clearly."],
    ["deer's","mastery-possessive","The deer's tracks led into the woods."],
    ["new","mastery-homophone","We bought a new lamp for the study."],
    ["school","mastery-irregular","School begins early on Monday mornings."],
    ["microscope","mastery-root","The microscope showed tiny details clearly."],
    ["shopping","mastery-doubling","We went shopping for school supplies."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A17_mastery-check",
      code: "A17",
      title: "A17 — Mastery Check",
      gradeBand: "3-5",
      difficulty: 5,
      ruleSummary:
        "A mastery check mixes many spelling patterns together. Strong spellers must decide which rule, pattern, meaning clue, or word part helps most."
    },

    teaching_cards: [
      {
        title: "mastery check",
        rule:
          "A mastery check asks you to use many spelling strategies together. Good spellers listen carefully, think about the pattern, and choose the best spelling for the exact word in the sentence.",
        why:
          "Real spelling depends on flexible thinking. Mastery means you can use the right strategy even when different word types appear together.",
        whenToUse:
          "Use all the tools you know: doubling, silent-e, vowel teams, r-controlled vowels, diphthongs, final stable syllables, suffixes, plurals, homophones, irregular spellings, and roots.",
        whenNotToUse:
          "Do not guess from sound alone. Some words need meaning, some need pattern knowledge, and some need both.",
        examples: [
          "running uses doubling",
          "invite uses silent-e",
          "teacher uses a vowel team",
          "storm uses r-controlled vowel",
          "coin uses a diphthong",
          "their needs meaning, not just sound"
        ],
        nearMisses: [
          "ther",
          "stope",
          "foxe's",
          "micer",
          "raine",
          "sno"
        ],
        nearMissesDetailed: [
          {
            word: "ther",
            reason: "This is not the correct spelling of there, their, or they're, even though it may sound close."
          },
          {
            word: "stope",
            reason: "This looks as if silent-e should apply, but it is not the correct word form in this lesson."
          },
          {
            word: "foxe's",
            reason: "This mixes plural and possessive incorrectly. Writers must choose the correct form based on meaning."
          },
          {
            word: "micer",
            reason: "This looks like a real suffix word, but it is not the correct spelling for the meaning a writer would need."
          },
          {
            word: "raine",
            reason: "This looks like a vowel-team word plus silent-e, but the correct spelling rain does not need the e."
          },
          {
            word: "sno",
            reason: "This is a sound-based guess, not the correct spelling snow."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a17_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} is a mastery-check word. Use the clue ${pattern} and choose the best spelling strategy for the word in this sentence.`
    }))
  };
})();