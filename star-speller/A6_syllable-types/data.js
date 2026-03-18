window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["cat","closed","The cat slept on the warm window seat."],
    ["kitten","closed","The kitten chased a ribbon across the rug."],
    ["robot","open","The robot waved at the class from the stage."],
    ["music","open","Soft music drifted through the hallway."],
    ["sunset","closed","The sunset turned the clouds orange and pink."],
    ["hotel","open","The hotel lobby smelled like fresh flowers."],
    ["napkin","closed","She folded the napkin beside the plate."],
    ["tiger","open","The tiger paced slowly behind the glass wall."],
    ["picnic","closed","We packed a picnic for the park."],
    ["pilot","open","The pilot greeted the passengers before takeoff."],

    ["basket","closed","The basket held apples and fresh bread."],
    ["begin","closed","Please begin the last page now."],
    ["camel","closed","The camel crossed the hot sand slowly."],
    ["planet","closed","The planet glowed in the science poster."],
    ["lemon","closed","She sliced a lemon for the tea."],
    ["pumpkin","closed","The pumpkin sat on the porch step."],
    ["magnet","closed","The magnet stuck to the metal board."],
    ["dentist","closed","The dentist checked each tooth carefully."],
    ["window","closed","Rain tapped against the window at dusk."],
    ["thunder","closed","Thunder rumbled across the hills."],

    ["bacon","open","The bacon sizzled in the pan."],
    ["baby","open","The baby laughed at the puppet show."],
    ["frozen","open","The pond looked frozen in the morning light."],
    ["tulip","open","A red tulip opened in the garden."],
    ["paper","open","She folded the paper into a star."],
    ["river","open","The river curved around the field."],
    ["moment","open","For a moment the room was silent."],
    ["student","open","Each student brought a notebook."],
    ["human","open","The human body poster hung on the wall."],
    ["music","open","Music echoed from the band room again."],

    ["table","final-stable","The table was set for dinner."],
    ["little","final-stable","The little bird hopped along the fence."],
    ["purple","final-stable","She wore a purple scarf in the wind."],
    ["simple","final-stable","The puzzle had a simple pattern."],
    ["candle","final-stable","The candle flickered beside the window."],
    ["marble","final-stable","A blue marble rolled under the chair."],
    ["gentle","final-stable","The gentle horse lowered its head."],
    ["turtle","final-stable","The turtle rested on a warm rock."],
    ["middle","final-stable","We met in the middle of the hallway."],
    ["apple","final-stable","An apple tumbled from the basket."],

    ["sunshine","vowel-consonant-e","Sunshine filled the room through the curtains."],
    ["inside","vowel-consonant-e","We waited inside during the storm."],
    ["compete","vowel-consonant-e","The runners compete every spring."],
    ["athlete","vowel-consonant-e","The athlete stretched before the race."],
    ["mistake","vowel-consonant-e","Everyone can learn from a mistake."],
    ["explode","vowel-consonant-e","The fireworks did not explode yet."],
    ["complete","vowel-consonant-e","Please complete the final question."],
    ["sunrise","vowel-consonant-e","The sunrise painted the lake gold."],
    ["invite","vowel-consonant-e","We will invite the neighbors to dinner."],
    ["dislike","vowel-consonant-e","I dislike soggy cereal."],

    ["rainbow","vowel-team","A rainbow stretched over the field."],
    ["mailbox","vowel-team","The red mailbox stood by the road."],
    ["teacher","vowel-team","The teacher smiled at the class."],
    ["toaster","vowel-team","The toaster popped up two slices."],
    ["bedroom","vowel-team","Her bedroom wall was pale blue."],
    ["playground","vowel-team","The playground was full after lunch."],
    ["beacon","vowel-team","A bright beacon flashed by the shore."],
    ["snowflake","vowel-team","A snowflake landed on my sleeve."],
    ["daydream","vowel-team","He drifted into a daydream during the ride."],
    ["railroad","vowel-team","The railroad crossed the empty plain."],

    ["rabbit","r-controlled","The rabbit hid beneath the bush."],
    ["garden","r-controlled","The garden smelled like mint and rain."],
    ["harbor","r-controlled","The harbor was full of small boats."],
    ["turtle","r-controlled","The turtle crawled toward the water."],
    ["purple","r-controlled","Purple ribbons fluttered in the wind."],
    ["starlight","r-controlled","Starlight shimmered above the hill."],
    ["morning","r-controlled","Morning light spilled across the floor."],
    ["birthday","r-controlled","The birthday cake had silver candles."],
    ["market","r-controlled","We bought peaches at the market."],
    ["curtain","r-controlled","The curtain moved in the breeze."],

    ["button","consonant-le","She sewed a button on the coat."],
    ["puzzle","consonant-le","The puzzle pieces covered the floor."],
    ["jungle","consonant-le","The jungle scene filled the picture book."],
    ["buckle","consonant-le","Please fasten the buckle tightly."],
    ["sparkle","consonant-le","The stars sparkle above the lake."],
    ["giggle","consonant-le","A soft giggle came from the back row."],
    ["sample","consonant-le","He offered a sample of warm bread."],
    ["handle","consonant-le","Grab the handle and pull gently."],
    ["ripple","consonant-le","A ripple spread across the pond."],
    ["cradle","consonant-le","The cradle rocked beside the bed."],

    ["open","open","Please leave the door open for the cat."],
    ["even","open","The trail looked even after the workers raked it."],
    ["tiny","open","A tiny shell lay in the sand."],
    ["hotel","open","The hotel stood beside the beach road."],
    ["basic","open","The poster showed the basic steps."],
    ["zero","open","The scoreboard still showed zero."],
    ["local","open","We visited a local farm on Friday."],
    ["radio","open","The radio played quietly in the kitchen."],
    ["student","open","The student asked a thoughtful question."],
    ["moment","open","For a moment the wind stopped."],

    ["napkin","closed","Fold the napkin before setting it down."],
    ["helmet","closed","He snapped the helmet strap under his chin."],
    ["blanket","closed","The blanket felt warm after the dryer stopped."],
    ["goblin","closed","The goblin in the story hid behind a tree."],
    ["traffic","closed","Traffic moved slowly near the bridge."],
    ["dentist","closed","The dentist explained how to brush well."],
    ["subject","closed","Math was her favorite subject this year."],
    ["problem","closed","They solved the problem together."],
    ["contest","closed","The contest winner smiled for a picture."],
    ["hundred","closed","One hundred lights glowed on the tree."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A6_syllable-types",
      code: "A6",
      title: "A6 — Syllable Types",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "Syllable types help readers know how vowels usually sound. Common syllable types include closed, open, vowel-consonant-e, vowel team, r-controlled, and final stable syllables."
    },

    teaching_cards: [
      {
        title: "syllable types",
        rule:
          "Syllable types help readers know how vowels usually sound. Common syllable types include closed, open, vowel-consonant-e, vowel team, r-controlled, and final stable syllables like consonant-le.",
        why:
          "Knowing the syllable type helps readers decode longer words and helps writers notice common spelling patterns inside words.",
        whenToUse:
          "Use syllable types when you break a word into parts and look at what the vowel is doing in each syllable. A closed syllable usually has a short vowel. An open syllable usually has a long vowel. A vowel-consonant-e syllable often has a long vowel. A vowel team has two vowels working together. An r-controlled syllable has a vowel followed by r. A final stable syllable often appears at the end of a word and keeps a predictable pattern.",
        whenNotToUse:
          "Do not guess the vowel sound from only one letter without looking at the whole syllable. Also do not assume every long vowel comes from the same syllable type. Some words have exceptions, and some words combine several syllable types in one word.",
        examples: [
          "closed: rabbit",
          "open: music",
          "vowel-consonant-e: invite",
          "vowel team: rainbow",
          "r-controlled: market",
          "final stable: little"
        ],
        nearMisses: [
          "bread",
          "have",
          "come",
          "lion",
          "quiet",
          "done"
        ],
        nearMissesDetailed: [
          {
            word: "bread",
            reason: "This looks like a regular vowel-team word, but ea does not make the usual long e sound here."
          },
          {
            word: "have",
            reason: "This looks like a vowel-consonant-e word, but the final e does not make the vowel say its name."
          },
          {
            word: "come",
            reason: "This looks like a vowel-consonant-e word, but it is an exception and the vowel does not become long."
          },
          {
            word: "lion",
            reason: "This has two vowels, but they do not stay together as one vowel team sound in one syllable."
          },
          {
            word: "quiet",
            reason: "This has two vowels, but they do not behave like a simple vowel team in one syllable."
          },
          {
            word: "done",
            reason: "This ends in e, but it does not follow the usual magic-e pattern."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a6_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the ${pattern} syllable type or pattern. Look at the whole syllable to decide how the vowel should sound.`
    }))
  };
})();