window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["hopping","review-doubling","The frog kept hopping across the stones."],
    ["silent","review-syllable","The room became silent at once."],
    ["rainbow","review-vowel-team","A rainbow stretched above the field."],
    ["market","review-r-controlled","We bought peaches at the market."],
    ["choice","review-diphthong","That was a wise choice for the project."],
    ["little","review-final-stable","The little bird hopped along the fence."],
    ["careful","review-suffix","Be careful with the glass jar."],
    ["children's","review-possessive","The children's coats hung by the door."],
    ["their","review-homophone","Their lantern glowed beside the path."],
    ["friend","review-irregular","My friend wrote a kind letter."],

    ["transport","review-root","The truck will transport supplies at dawn."],
    ["running","review-doubling","Running through the wet grass soaked his shoes."],
    ["invite","review-vce","We will invite the neighbors to dinner."],
    ["teacher","review-vowel-team","The teacher opened the storybook slowly."],
    ["purple","review-r-controlled","She wore a purple scarf in the wind."],
    ["cloud","review-diphthong","A dark cloud drifted over the playground."],
    ["puzzle","review-final-stable","The puzzle pieces covered the table."],
    ["kindness","review-suffix","Her kindness made everyone feel welcome."],
    ["boxes","review-plural","The boxes arrived before noon."],
    ["you're","review-homophone","You're early for the concert."],

    ["because","review-irregular","We stayed inside because it was raining."],
    ["geography","review-root","Geography class used a map of the world."],
    ["bigger","review-doubling","The blue backpack looked bigger than mine."],
    ["smile","review-vce","A smile spread across his face."],
    ["beach","review-vowel-team","We walked along the beach at sunrise."],
    ["storm","review-r-controlled","The storm shook the shutters last night."],
    ["cowboy","review-diphthong","The cowboy waved from the dusty trail."],
    ["candle","review-final-stable","A candle flickered beside the window."],
    ["movement","review-suffix","The movement of leaves showed the wind."],
    ["babies","review-plural","The babies slept in their cribs."],

    ["to","review-homophone","Please walk to the mailbox with me."],
    ["through","review-irregular","We walked through the narrow gate."],
    ["microphone","review-root","The singer lifted the microphone carefully."],
    ["stopped","review-doubling","The bus stopped at the corner."],
    ["late","review-vce","We were late because the bus was slow."],
    ["snowflake","review-vowel-team","A snowflake landed on my sleeve."],
    ["bird","review-r-controlled","A bird landed on the fence post."],
    ["brown","review-diphthong","She wore brown boots on the trail."],
    ["simple","review-final-stable","The map showed a simple route."],
    ["joyful","review-suffix","The choir sounded joyful at the concert."],

    ["wolves","review-plural","Wolves howled beyond the ridge."],
    ["write","review-homophone","Write your name at the top."],
    ["could","review-irregular","I could hear the rain outside."],
    ["microscope","review-root","The microscope showed the tiny cell."],
    ["planning","review-doubling","She was planning the whole event."],
    ["tube","review-vce","The paint came from a bright blue tube."],
    ["boat","review-vowel-team","The boat drifted across the lake."],
    ["north","review-r-controlled","The geese flew north for the season."],
    ["crowd","review-diphthong","The crowd cheered after the final song."],
    ["button","review-final-stable","She sewed a button on the coat."],

    ["quickly","review-suffix","She quickly packed the books into a bag."],
    ["heroes","review-plural","The heroes returned at dawn."],
    ["sea","review-homophone","The sea shimmered under the moon."],
    ["people","review-irregular","Many people filled the square."],
    ["biology","review-root","Biology explains how living things grow."],
    ["swimmer","review-doubling","The swimmer touched the wall first."],
    ["shape","review-vce","The star had a bright silver shape."],
    ["green","review-vowel-team","Green leaves shone after the storm."],
    ["turn","review-r-controlled","Please turn the page now."],
    ["coin","review-diphthong","Riley dropped a coin into the fountain."],

    ["table","review-final-stable","The table was set with blue plates."],
    ["helpful","review-suffix","The helpful guide showed us the shortest trail."],
    ["girls'","review-possessive","The girls' notebooks covered the table."],
    ["blue","review-homophone","She wore a blue jacket to school."],
    ["young","review-irregular","The young fox hid in the grass."],
    ["telescope","review-root","The telescope pointed toward Jupiter."],
    ["slipped","review-doubling","The note slipped out of the folder."],
    ["riding","review-vce","The children were riding their bikes."],
    ["teacher","review-vowel-team","The teacher smiled at the class."],
    ["garden","review-r-controlled","The garden smelled like mint and rain."],

    ["shout","review-diphthong","Do not shout in the quiet hallway."],
    ["purple","review-final-stable","Purple ribbons fluttered in the wind."],
    ["payment","review-suffix","The payment arrived by mail."],
    ["books","review-plural","The books lined the wooden shelf."],
    ["here","review-homophone","Come sit here beside me."],
    ["once","review-irregular","I visited that museum once before."],
    ["transport","review-root","The van will transport the instruments."],
    ["winner","review-doubling","The winner held up the gold trophy."],
    ["brave","review-vce","The brave dog barked at the storm."],
    ["team","review-vowel-team","Our team practiced before the game."],

    ["morning","review-r-controlled","Morning light spilled across the floor."],
    ["boy","review-diphthong","The boy carried a stack of library books."],
    ["sparkle","review-final-stable","The stars sparkle over the lake."],
    ["sadness","review-suffix","The story ended with sadness."],
    ["students'","review-possessive","The students' projects filled the hallway."],
    ["whole","review-homophone","She ate the whole peach."],
    ["enough","review-irregular","We had enough wood for the fire."],
    ["dictionary","review-root","The dictionary lay open on the desk."],
    ["grabbing","review-doubling","She was grabbing apples from the basket."],
    ["smiled","review-vce","She smiled at the surprise gift."]
,
    ["transport","review-root","The truck will transport the supplies by dawn."],
    ["sparkle","review-final-stable","The stars sparkle above the dark lake."],
    ["heroes","review-plural","The heroes returned at sunrise."],
    ["through","review-irregular","We walked through the narrow gate."],
    ["there","review-homophone","Set the basket down over there."],
    ["running","review-doubling","The rabbit was running through the wet grass."],
    ["smile","review-vce","A smile spread across his face."],
    ["teacher","review-vowel-team","The teacher opened the storybook slowly."],
    ["storm","review-r-controlled","The storm shook the shutters all night."],
    ["coin","review-diphthong","Riley dropped a coin into the fountain."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A16_word-study-review",
      code: "A16",
      title: "A16 — Word Study Review",
      gradeBand: "3-5",
      difficulty: 5,
      ruleSummary:
        "Strong spellers review many word patterns together. This lesson mixes major patterns so readers and writers can choose the right strategy for each word."
    },

    teaching_cards: [
      {
        title: "word study review",
        rule:
          "Review means bringing many patterns together. Good spellers ask which strategy fits each word: doubling, vowel-consonant-e, vowel team, r-controlled vowel, diphthong, final stable syllable, suffix, plural, homophone, irregular spelling, or root meaning.",
        why:
          "Real reading and writing do not separate words into perfect lesson boxes. Review helps students flexibly choose the best spelling strategy in real time.",
        whenToUse:
          "Use review strategies when a word could be solved by checking its parts, sound pattern, suffix, meaning, or known irregular feature. Stop and ask which pattern fits best.",
        whenNotToUse:
          "Do not force every word into the first pattern you notice. Some words have more than one helpful feature, and some need meaning as well as sound.",
        examples: [
          "hopping uses doubling",
          "invite uses silent-e",
          "teacher uses a vowel team",
          "storm uses r-controlled vowel",
          "coin uses a diphthong",
          "kindness uses a suffix"
        ],
        nearMisses: [
          "ther",
          "raine",
          "stope",
          "micer",
          "foxe's",
          "sno"
        ],
        nearMissesDetailed: [
          {
            word: "ther",
            reason: "This looks as if it might match a known pattern, but it is not the correct spelling of there, their, or they're."
          },
          {
            word: "raine",
            reason: "This looks as if it combines a vowel team and silent-e, but the correct word rain does not need the e."
          },
          {
            word: "stope",
            reason: "This looks as if silent-e might apply, but the base word stop changes differently depending on the ending."
          },
          {
            word: "micer",
            reason: "This looks as if it uses a suffix, but the correct word form is different and depends on meaning."
          },
          {
            word: "foxe's",
            reason: "This mixes plural and possessive incorrectly. Writers must decide whether they need more than one fox or ownership."
          },
          {
            word: "sno",
            reason: "This looks like a simplified sound spelling, but it does not match the correct word snow."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a16_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} is a review word. Think about the pattern tag ${pattern} and choose the best spelling strategy for this word.`
    }))
  };
})();