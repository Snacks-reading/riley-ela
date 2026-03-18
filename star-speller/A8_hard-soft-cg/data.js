window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["cat","hard-c","The cat curled up beside the window."],
    ["cup","hard-c","She filled the cup with cold water."],
    ["corn","hard-c","We ate corn with dinner."],
    ["clap","hard-c","The crowd began to clap after the song."],
    ["crab","hard-c","A small crab darted across the sand."],
    ["clock","hard-c","The clock ticked above the doorway."],
    ["cabin","hard-c","The cabin stood beside the pine trees."],
    ["camel","hard-c","The camel crossed the desert slowly."],
    ["candle","hard-c","The candle flickered in the dark room."],
    ["cost","hard-c","The cost of the tickets was low."],

    ["city","soft-c","The city lights glowed after sunset."],
    ["cent","soft-c","He found a shiny cent on the sidewalk."],
    ["circle","soft-c","Please draw a circle around the answer."],
    ["cereal","soft-c","She ate cereal before school."],
    ["cement","soft-c","The cement path stayed warm in the sun."],
    ["cell","soft-c","The cell door closed with a clang in the story."],
    ["century","soft-c","The castle was built a century ago."],
    ["certain","soft-c","I am certain we packed the map."],
    ["civil","soft-c","The speaker kept a civil tone."],
    ["cycle","soft-c","The cycle repeated every spring."],

    ["game","hard-g","We played a game after dinner."],
    ["gold","hard-g","The medal looked like gold in the light."],
    ["gum","hard-g","He found gum in his pocket."],
    ["garden","hard-g","The garden smelled like mint and rain."],
    ["goat","hard-g","The goat stood by the fence."],
    ["gift","hard-g","She wrapped the gift in silver paper."],
    ["glad","hard-g","I am glad the rain stopped."],
    ["grin","hard-g","A grin spread across his face."],
    ["grab","hard-g","Grab the rope before it slides."],
    ["globe","hard-g","The globe spun on the desk."],

    ["giant","soft-g","The giant in the story guarded the gate."],
    ["gem","soft-g","The gem sparkled in the treasure box."],
    ["giraffe","soft-g","The giraffe reached for leaves with its long neck."],
    ["gentle","soft-g","The gentle horse lowered its head."],
    ["ginger","soft-g","Grandma added ginger to the cookies."],
    ["magic","soft-g","The magic trick amazed the audience."],
    ["engine","soft-g","The engine hummed as the train moved."],
    ["general","soft-g","The general studied the battle map."],
    ["giantess","soft-g","The giantess appeared in the final chapter."],
    ["generation","soft-g","Each generation told the old story differently."],

    ["cage","mixed","The bird fluttered inside the cage."],
    ["page","mixed","Please turn the page quietly."],
    ["stage","mixed","She walked onto the stage with confidence."],
    ["change","mixed","We need a change of plans."],
    ["charge","mixed","The phone needed a full charge."],
    ["ice","mixed","The ice melted in the warm sun."],
    ["juice","mixed","She poured juice into three cups."],
    ["dance","mixed","The class learned a new dance."],
    ["bridge","mixed","The bridge crossed the narrow creek."],
    ["badge","mixed","He wore a badge during the field trip."],

    ["cot","hard-c","The baby slept in a small cot."],
    ["cube","hard-c","The cube rolled off the table."],
    ["camp","hard-c","We set up camp beside the lake."],
    ["cold","hard-c","The metal felt cold in my hand."],
    ["crisp","hard-c","The apples stayed crisp in the basket."],
    ["crown","hard-c","The crown gleamed under the lights."],
    ["curve","hard-c","The road made a sharp curve."],
    ["climb","hard-c","We watched the squirrel climb the tree."],
    ["creek","hard-c","The creek shimmered after the storm."],
    ["camera","hard-c","The camera flashed during the play."],

    ["center","soft-c","We met in the center of the room."],
    ["cinder","soft-c","A cinder popped from the campfire."],
    ["cinema","soft-c","The old cinema stood downtown."],
    ["ceiling","soft-c","A fan spun slowly from the ceiling."],
    ["receive","soft-c","Did you receive the note yesterday?"],
    ["recent","soft-c","The recent storm knocked down branches."],
    ["decide","soft-c","She will decide after lunch."],
    ["fancy","soft-c","The bakery made a fancy cake."],
    ["pencil","soft-c","He sharpened his pencil before the test."],
    ["medicine","soft-c","The medicine bottle sat on the shelf."],

    ["gate","hard-g","The gate swung open in the wind."],
    ["green","hard-g","The green leaves shone in the sunlight."],
    ["grain","hard-g","The farmer stored grain in the barn."],
    ["glitter","hard-g","Silver glitter covered the art table."],
    ["goblin","hard-g","The goblin hid in the cave."],
    ["gust","hard-g","A gust of wind rattled the sign."],
    ["gardenia","hard-g","A gardenia bloomed near the porch."],
    ["gallon","hard-g","We bought a gallon of milk."],
    ["gather","hard-g","Please gather the papers from each desk."],
    ["guitar","hard-g","The guitar rested beside the chair."],

    ["gel","soft-g","She used hair gel before the recital."],
    ["genius","soft-g","The genius in the story solved the puzzle."],
    ["giant","soft-g","The giant footprint filled the sand."],
    ["germ","soft-g","Wash your hands to remove the germ."],
    ["region","soft-g","This region gets snow in winter."],
    ["religion","soft-g","The novel discussed religion and law."],
    ["digest","soft-g","We read a short digest of the article."],
    ["agency","soft-g","The agency mailed the forms on Friday."],
    ["urgent","soft-g","The urgent message arrived after noon."],
    ["legend","soft-g","The legend of the lake still circulates today."]
,
    ["gesture","soft-g","His gesture showed quiet thanks."],
    ["gemstone","soft-g","The gemstone sparkled in the display case."],
    ["genial","soft-g","The host gave a genial welcome."],
    ["genuine","soft-g","Her smile felt genuine and warm."],
    ["cinderblock","soft-c","The cinderblock wall stood behind the shed."],
    ["census","soft-c","The census counted every household in town."],
    ["cedar","soft-c","A cedar tree shaded the porch."],
    ["cypress","soft-c","The cypress trees lined the road."],
    ["cemented","soft-c","The posts were cemented into the ground."],
    ["germinate","soft-g","The seeds began to germinate after the rain."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A8_hard-soft-cg",
      code: "A8",
      title: "A8 — Hard & Soft C/G",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "C and g can make more than one sound. C is usually soft before e, i, or y and hard before a, o, or u. G is usually soft before e, i, or y and hard before a, o, or u."
    },

    teaching_cards: [
      {
        title: "hard and soft c/g",
        rule:
          "C and g can make more than one sound. C is usually soft before e, i, or y and hard before a, o, or u. G is usually soft before e, i, or y and hard before a, o, or u.",
        why:
          "Knowing whether c or g is hard or soft helps readers pronounce unfamiliar words and helps writers notice predictable spelling patterns.",
        whenToUse:
          "Use the hard and soft c/g rule when you see c or g followed by another vowel letter. Look at the next letter to predict the sound. Before e, i, or y, c often says /s/ and g often says /j/. Before a, o, or u, c often says /k/ and g often says /g/.",
        whenNotToUse:
          "Do not assume the rule works in every single word. English has exceptions, and some words use other letters to protect a sound, as in badge, bridge, or guess.",
        examples: [
          "city has soft c",
          "cat has hard c",
          "gem has soft g",
          "game has hard g",
          "circle begins with soft c",
          "garden begins with hard g"
        ],
        nearMisses: [
          "get",
          "gift",
          "girl",
          "cello",
          "garage",
          "guess"
        ],
        nearMissesDetailed: [
          {
            word: "get",
            reason: "These words look close, but get keeps a hard g even though e follows. This is a common exception."
          },
          {
            word: "gift",
            reason: "These words look close, but gift keeps a hard g before i. This is a common exception."
          },
          {
            word: "girl",
            reason: "These words look close, but girl keeps a hard g before i. This is a common exception."
          },
          {
            word: "cello",
            reason: "These words look close, but cello has a soft c because e follows, even though some readers may expect a hard c in a music word."
          },
          {
            word: "garage",
            reason: "These words look close, but the second g can sound soft because of the letters around it."
          },
          {
            word: "guess",
            reason: "These words look close, but the u helps keep g hard before e."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a8_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the ${pattern} c or g pattern. Look at the next letter to decide whether c or g is hard or soft.`
    }))
  };
})();