window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["car","ar","The red car waited by the front gate."],
    ["park","ar","We met our friends at the park after lunch."],
    ["star","ar","One bright star shone above the trees."],
    ["farm","ar","The farm had goats, chickens, and a red barn."],
    ["yard","ar","The dog ran across the yard at sunset."],
    ["barn","ar","A red barn stood beside the gravel road."],
    ["dark","ar","The sky turned dark before the storm."],
    ["spark","ar","A spark jumped from the campfire log."],
    ["shark","ar","The shark glided beneath the clear water."],
    ["market","ar","We bought fresh peaches at the market."],
    ["carpet","ar","The carpet felt soft under my feet."],
    ["garden","ar","The garden bloomed with bright tulips."],
    ["harvest","ar","The harvest filled the wagons by dusk."],
    ["artist","ar","The artist mixed colors on a wooden palette."],
    ["arm","ar","She raised her arm to answer the question."],
    ["part","ar","This is my favorite part of the story."],
    ["charm","ar","The old coin had a strange charm."],
    ["starch","ar","The cook added starch to thicken the sauce."],
    ["march","ar","The band will march in the parade."],
    ["cart","ar","He pushed the cart through the market aisle."],

    ["corn","or","We ate sweet corn with dinner."],
    ["storm","or","The storm shook the windows all night."],
    ["short","or","The puppy had a short fluffy tail."],
    ["fork","or","Please place your fork beside the plate."],
    ["horse","or","The horse trotted across the field."],
    ["north","or","The geese flew north for the season."],
    ["sport","or","Soccer is Riley's favorite sport."],
    ["porch","or","We sat on the porch during the rain."],
    ["morning","or","The morning air felt cool and bright."],
    ["forest","or","The forest trail curved beside the creek."],
    ["thorn","or","A thorn caught on the edge of my coat."],
    ["stormy","or","The sea looked stormy before sunset."],
    ["corner","or","The lamp stood in the corner of the room."],
    ["story","or","Grandpa read a story before bedtime."],
    ["born","or","The foal was born in early spring."],
    ["sort","or","Please sort the cards by color."],
    ["cord","or","The cord stretched across the floor."],
    ["porridge","or","Warm porridge waited on the stove."],
    ["shore","or","We collected shells along the shore."],
    ["torch","or","He carried a torch through the cave."],

    ["her","er","Please hand the note to her before class."],
    ["fern","er","A green fern grew beside the stone path."],
    ["term","er","We learned a new math term today."],
    ["teacher","er","Our teacher read aloud to the class."],
    ["butter","er","The butter melted on the warm toast."],
    ["winter","er","Winter snow covered the playground fence."],
    ["letter","er","She mailed a letter to her cousin."],
    ["silver","er","A silver key glinted in the light."],
    ["river","er","The river curved around the hill."],
    ["under","er","The cat hid under the old bed."],
    ["water","er","Cold water splashed from the fountain."],
    ["hammer","er","Dad used a hammer to fix the shelf."],
    ["sister","er","My sister brought cookies for the picnic."],
    ["number","er","Write the number neatly on the page."],
    ["center","er","The center of the flower was bright yellow."],
    ["pepper","er","A pinch of pepper fell onto the soup."],
    ["summer","er","Summer mornings smell like grass and sunshine."],
    ["tiger","er","The tiger paced behind the glass wall."],
    ["father","er","My father carried the boxes inside."],
    ["brother","er","My brother stacked the books in a tower."],

    ["bird","ir","A tiny bird landed on the fence post."],
    ["first","ir","Riley crossed the finish line first."],
    ["shirt","ir","He wore a clean shirt to the concert."],
    ["girl","ir","The girl carried a stack of library books."],
    ["circle","ir","Draw a circle around the correct answer."],
    ["dirt","ir","Rain turned the dirt path dark brown."],
    ["third","ir","The third chapter was my favorite."],
    ["firm","ir","The pillow felt soft but firm."],
    ["stir","ir","Please stir the soup before serving it."],
    ["twirl","ir","The dancer did a quick twirl across the stage."],
    ["chirp","ir","We heard a chirp from the maple tree."],
    ["skirt","ir","Her skirt swayed as she walked."],
    ["birthday","ir","The birthday cake had blue icing."],
    ["whirl","ir","Leaves began to whirl across the sidewalk."],
    ["stirring","ir","The stirring spoon rested beside the pot."],
    ["thirsty","ir","After soccer practice everyone felt thirsty."],
    ["mirror","ir","The mirror hung above the dresser."],
    ["firework","ir","A firework burst over the lake."],
    ["pirate","ir","The pirate waved from the wooden deck."],
    ["swirl","ir","Cream made a swirl in the coffee cup."],

    ["turn","ur","Please turn the page when you finish reading."],
    ["purple","ur","She tied a purple ribbon in her hair."],
    ["burn","ur","Be careful not to burn the toast."],
    ["hurt","ur","My knee began to hurt after the run."],
    ["curb","ur","The bike stopped near the curb."],
    ["nurse","ur","The nurse checked Riley's temperature."],
    ["burst","ur","The balloon did not burst during the game."],
    ["curl","ur","One curl fell over her forehead."],
    ["fur","ur","The rabbit had soft white fur."],
    ["turnip","ur","A turnip rolled off the kitchen counter."],
    ["purpled","ur","The sunset purpled the edge of the sky."],
    ["turtle","ur","A turtle rested on the warm rock."],
    ["hurdle","ur","She jumped over the hurdle with ease."],
    ["murmur","ur","We heard a quiet murmur from the hallway."],
    ["surface","ur","The boat floated on the glassy surface."],
    ["curtain","ur","The curtain moved in the evening breeze."],
    ["furnace","ur","The furnace clicked on during the storm."],
    ["burden","ur","The heavy burden slowed the donkey."],
    ["turkey","ur","The turkey crossed the field at dawn."],
    ["nurture","ur","Good teachers nurture curiosity every day."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A4_r-controlled-vowels",
      code: "A4",
      title: "A4 — R-Controlled Vowels",
      gradeBand: "3-5",
      difficulty: 3,
      ruleSummary:
        "When a vowel comes before r, the r often changes the vowel sound. Common r-controlled patterns include ar, or, er, ir, and ur."
    },

    teaching_cards: [
      {
        title: "r-controlled vowels",
        rule:
          "When a vowel comes before r, the r often changes the vowel sound. Common r-controlled patterns include ar, or, er, ir, and ur.",
        why:
          "R-controlled vowels are common in English. Knowing them helps readers decode unfamiliar words and helps writers choose the correct spelling pattern.",
        whenToUse:
          "Use this rule when a vowel is followed by r in the same syllable, as in car, bird, turn, and storm.",
        whenNotToUse:
          "Do not use an r-controlled rule when the vowel is not directly followed by r in the same syllable. Also do not assume er, ir, and ur are spelled the same even though they often sound alike.",
        examples: [
          "car",
          "park",
          "bird",
          "first",
          "turn",
          "purple",
          "storm",
          "short"
        ],
        nearMisses: [
          "lion",
          "quiet",
          "seat",
          "hop",
          "rope",
          "rain"
        ],
        nearMissesDetailed: [
          {
            word: "lion",
            reason: "The vowel is not directly controlled by r in the same syllable, so this is not an r-controlled vowel."
          },
          {
            word: "quiet",
            reason: "The vowels work across syllables here, not in an r-controlled pattern."
          },
          {
            word: "seat",
            reason: "This is a vowel-team word, not a vowel followed by r in the same syllable."
          },
          {
            word: "hop",
            reason: "This has a short vowel, but there is no r after the vowel to control the sound."
          },
          {
            word: "rope",
            reason: "This is a silent-e word, not an r-controlled pattern."
          },
          {
            word: "rain",
            reason: "This is a vowel-team pattern, not an r-controlled vowel."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a4_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the r-controlled vowel pattern ${pattern}. The letter r changes the vowel sound in this word.`
    }))
  };
})();