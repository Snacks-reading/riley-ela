window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["rain","ai","The rain tapped softly against the classroom window."],
    ["chain","ai","A silver chain hung from the old lantern."],
    ["train","ai","The train rolled slowly past the station."],
    ["paint","ai","Please paint the frame a bright blue color."],
    ["grain","ai","The farmer stored grain inside the tall barn."],
    ["sail","ai","The white sail caught the wind over the water."],
    ["snail","ai","A small snail crossed the garden path after rain."],
    ["braid","ai","She tied her braid with a yellow ribbon."],
    ["plain","ai","The plain stretched far beyond the distant hills."],
    ["wait","ai","Please wait by the door until the bell rings."],

    ["play","ay","The children ran outside to play after lunch."],
    ["stay","ay","Please stay close to the group on the field trip."],
    ["tray","ay","Set the glass gently on the silver tray."],
    ["gray","ay","A gray cloud drifted over the playground."],
    ["clay","ay","The artist shaped the clay into a bowl."],
    ["spray","ay","A cool spray rose from the ocean waves."],
    ["sway","ay","Tall trees sway gently in the evening breeze."],
    ["today","ay","Today feels warmer than yesterday afternoon."],
    ["payday","ay","Dad smiled because it was payday at work."],
    ["daylight","ay","Daylight faded slowly behind the mountains."],

    ["tree","ee","A tall tree shaded the picnic table."],
    ["green","ee","The green leaves shone after the storm."],
    ["sleep","ee","I need sleep before the long trip tomorrow."],
    ["sheep","ee","A sheep wandered near the wooden fence."],
    ["street","ee","The street was quiet before sunrise."],
    ["queen","ee","The queen wore a silver crown in the play."],
    ["seed","ee","She planted a seed in the garden bed."],
    ["wheel","ee","The wheel squeaked on the old wagon."],
    ["breeze","ee","A light breeze cooled the porch at dusk."],
    ["creek","ee","The creek sparkled under the morning sun."],

    ["beach","ea","We walked along the beach collecting shells."],
    ["dream","ea","Last night I had a funny dream about a dragon."],
    ["clean","ea","Please clean the table before dinner."],
    ["treat","ea","Grandma brought a sweet treat for dessert."],
    ["cream","ea","The baker whipped cream for the pie."],
    ["steam","ea","Steam rose from the soup on the stove."],
    ["team","ea","Our team practiced hard before the game."],
    ["speak","ea","Please speak clearly during the presentation."],
    ["teacher","ea","Our teacher read aloud to the class."],
    ["leaf","ea","A bright leaf landed on the porch."],

    ["boat","oa","The boat drifted slowly across the lake."],
    ["road","oa","The road curved around the hill."],
    ["coat","oa","She zipped her coat before going outside."],
    ["toast","oa","Dad made toast and eggs for breakfast."],
    ["float","oa","A yellow duck will float in the pond."],
    ["foam","oa","Foam gathered near the edge of the waves."],
    ["goat","oa","The goat stood on top of the wooden stump."],
    ["oak","oa","An old oak tree shaded the yard."],
    ["soap","oa","Please put the soap beside the sink."],
    ["coach","oa","The coach clapped after the winning goal."],

    ["snow","ow","Fresh snow covered the hill overnight."],
    ["grow","ow","Sunflowers grow tall in the summer sun."],
    ["glow","ow","The lantern began to glow in the dark room."],
    ["show","ow","We watched the magic show after dinner."],
    ["slow","ow","A slow turtle crossed the garden path."],
    ["throw","ow","Please throw the ball to your partner."],
    ["crow","ow","A crow called from the top of the fence."],
    ["low","ow","The plane flew low over the water."],
    ["row","ow","We sat in the front row at the concert."],
    ["blow","ow","The wind began to blow through the trees."],

    ["moon","oo","The moon rose above the quiet field."],
    ["spoon","oo","She stirred the soup with a silver spoon."],
    ["bloom","oo","The flowers bloom each spring in the garden."],
    ["school","oo","School starts early on rainy Mondays."],
    ["stool","oo","The cat jumped onto the tall stool."],
    ["tooth","oo","He lost a tooth during lunch."],
    ["smooth","oo","The stone felt smooth in my hand."],
    ["room","oo","The room glowed with candlelight."],
    ["roof","oo","Rain drummed softly on the roof."],
    ["broom","oo","The broom leaned beside the pantry door."],

    ["blue","ue","She wore a bright blue jacket to school."],
    ["clue","ue","The final clue was hidden in the drawer."],
    ["true","ue","It is true that Riley loves to read."],
    ["glue","ue","Use glue to attach the paper stars."],
    ["due","ue","The library book is due on Friday."],
    ["cue","ue","That was my cue to walk onto the stage."],
    ["rescue","ue","The rescue boat reached the shore by noon."],
    ["statue","ue","A bronze statue stood in the park."],
    ["value","ue","Kindness is a value our class practices."],
    ["argue","ue","Please do not argue about the board game rules."],

    ["field","ie","The soccer field was muddy after the storm."],
    ["piece","ie","She cut one piece of cake for each guest."],
    ["chief","ie","The chief gave the signal to begin."],
    ["thief","ie","The thief escaped through the dark alley."],
    ["brief","ie","Keep your answer brief and clear."],
    ["yield","ie","The apple tree will yield fruit in summer."],
    ["shield","ie","The knight raised a silver shield."],
    ["grief","ie","The family felt grief after the loss."],
    ["pier","ie","We stood on the pier watching the boats."],
    ["cookie","ie","A warm cookie waited on the plate."],

    ["new","ew","We bought a new lamp for the study."],
    ["few","ew","Only a few stars were visible at dawn."],
    ["drew","ew","She drew a dragon in her notebook."],
    ["blew","ew","The wind blew leaves across the yard."],
    ["stew","ew","The stew simmered on the stove all afternoon."],
    ["chew","ew","Please chew carefully before you speak."],
    ["crew","ew","The film crew arrived before sunrise."],
    ["threw","ew","He threw the ball across the field."],
    ["news","ew","The evening news came on after dinner."],
    ["grew","ew","The tiny plant grew taller every week."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A3_vowel-teams",
      code: "A3",
      title: "A3 — Vowel Teams",
      gradeBand: "3-5",
      difficulty: 3,
      ruleSummary:
        "A vowel team is two vowels that work together to make one sound. Common vowel teams include ai, ay, ee, ea, oa, ow, oo, ue, ie, and ew."
    },

    teaching_cards: [
      {
        title: "vowel teams",
        rule:
          "A vowel team is two vowels that work together to make one sound. Common vowel teams include ai, ay, ee, ea, oa, ow, oo, ue, ie, and ew.",
        why:
          "Vowel teams help readers recognize common long-vowel patterns and help writers choose the correct spelling.",
        whenToUse:
          "Use vowel teams when two vowels work together in the same syllable to make one sound, as in rain, team, boat, blue, and field.",
        whenNotToUse:
          "Do not call it a vowel team when the vowels are split into different syllables, and do not assume every pair of vowels makes the same sound.",
        examples: [
          "rain",
          "play",
          "tree",
          "beach",
          "boat",
          "snow",
          "moon",
          "blue"
        ],
        nearMisses: [
          "lion",
          "quiet",
          "bread",
          "head",
          "cake",
          "time"
        ],
        nearMissesDetailed: [
          {
            word: "lion",
            reason: "The vowels are split into different syllables, so this is not one vowel team making one sound."
          },
          {
            word: "quiet",
            reason: "The vowels do not stay together as one sound, so this does not follow the vowel-team pattern."
          },
          {
            word: "bread",
            reason: "This has ea, but the sound is not the same long-e sound as in beach or team."
          },
          {
            word: "head",
            reason: "This has ea, but it does not make the long-e sound, so the team does not behave like the common pattern."
          },
          {
            word: "cake",
            reason: "This is a silent-e word, not a vowel-team word."
          },
          {
            word: "time",
            reason: "This is also a silent-e pattern, not two vowels working together."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a3_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the vowel team ${pattern}. Two vowels work together to make one sound in this word.`
    }))
  };
})();