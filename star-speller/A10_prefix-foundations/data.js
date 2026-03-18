window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["unhappy","un","She felt unhappy when the picnic was canceled."],
    ["unlock","un","Please unlock the back gate for the delivery."],
    ["untie","un","He had to untie the knot in the rope."],
    ["unwrap","un","Riley could not wait to unwrap the gift."],
    ["unpack","un","We will unpack the boxes after lunch."],
    ["unfair","un","It felt unfair to end the game early."],
    ["unsafe","un","The broken step looked unsafe in the dark."],
    ["unclear","un","The directions were unclear at first."],
    ["unknown","un","The map led to an unknown cave."],
    ["unkind","un","It is unkind to laugh at mistakes."],

    ["redo","re","Please redo the last two math problems."],
    ["replay","re","We watched the replay after the goal."],
    ["reopen","re","They will reopen the museum next week."],
    ["rebuild","re","Workers will rebuild the old bridge."],
    ["retell","re","Can you retell the story in order?"],
    ["rewrite","re","She had to rewrite the final paragraph."],
    ["repaint","re","Dad plans to repaint the porch rail."],
    ["return","re","Please return the book by Friday."],
    ["review","re","We will review the notes before the quiz."],
    ["reheat","re","Mom will reheat the soup for dinner."],

    ["preview","pre","We saw a preview of the new movie."],
    ["pretest","pre","The class took a pretest on Monday."],
    ["preheat","pre","Please preheat the oven before baking."],
    ["preschool","pre","Her little brother goes to preschool."],
    ["predict","pre","Can you predict what happens next?"],
    ["prepare","pre","We need to prepare for the storm."],
    ["prevent","pre","A helmet can help prevent injury."],
    ["prefix","pre","Today we studied the word prefix."],
    ["pretend","pre","The children like to pretend they are pirates."],
    ["preserve","pre","The jar helps preserve the peaches."],

    ["misstep","mis","One misstep nearly made him fall."],
    ["mistake","mis","Everyone can learn from a mistake."],
    ["misplace","mis","I always misplace my blue pen."],
    ["misread","mis","She misread the question the first time."],
    ["misspell","mis","Do not misspell the title word."],
    ["misprint","mis","The page had a small misprint."],
    ["misbehave","mis","The puppy did not misbehave during class."],
    ["misjudge","mis","It is easy to misjudge distance in fog."],
    ["miscount","mis","He did not mean to miscount the coins."],
    ["misfire","mis","The plan began to misfire halfway through."],

    ["disagree","dis","I disagree with that final answer."],
    ["dislike","dis","I dislike soggy cereal."],
    ["disconnect","dis","Please disconnect the cord from the wall."],
    ["discover","dis","We hope to discover a better route."],
    ["disappear","dis","The rabbit seemed to disappear into the grass."],
    ["disobey","dis","Do not disobey the posted signs."],
    ["disorder","dis","The papers were left in disorder."],
    ["dishonest","dis","It is dishonest to copy another person's work."],
    ["disrespect","dis","We should never disrespect our teachers."],
    ["disallow","dis","The rules disallow food in the lab."],

    ["subway","sub","We rode the subway across the city."],
    ["submerge","sub","The diver will submerge below the surface."],
    ["subzero","sub","The weather dropped to subzero levels."],
    ["subheading","sub","Write a subheading under the main title."],
    ["subsoil","sub","Roots pushed deep into the subsoil."],
    ["submarine","sub","The submarine moved silently through the water."],
    ["subtract","sub","We use subtract to find the difference."],
    ["subgroup","sub","Each subgroup shared one idea with the class."],
    ["substandard","sub","The broken parts were clearly substandard."],
    ["subtype","sub","This butterfly is a rare subtype."],

    ["transport","trans","The truck helps transport supplies across town."],
    ["transmit","trans","The radio will transmit the message."],
    ["transparent","trans","The glass was almost transparent."],
    ["transition","trans","The transition between scenes was smooth."],
    ["transform","trans","The story can transform the reader's thinking."],
    ["transatlantic","trans","The ship began a transatlantic voyage."],
    ["transcribe","trans","Please transcribe the notes carefully."],
    ["translate","trans","She can translate the short poem."],
    ["transfer","trans","They will transfer the files tomorrow."],
    ["transplant","trans","The gardener will transplant the roses in spring."],

    ["interact","inter","Students interact during the science activity."],
    ["international","inter","The fair had an international food table."],
    ["internet","inter","The internet connection dropped during the storm."],
    ["interrupt","inter","Please do not interrupt the speaker."],
    ["interview","inter","She had an interview for the school paper."],
    ["interlock","inter","The pieces interlock to form a square."],
    ["interstate","inter","We drove on the interstate for hours."],
    ["intermission","inter","We bought drinks during intermission."],
    ["interchange","inter","The highway interchange was busy at noon."],
    ["interconnect","inter","The bridges interconnect the small islands."],

    ["underwater","under","The underwater cave looked mysterious."],
    ["undergo","under","The bridge will undergo repairs this summer."],
    ["underline","under","Please underline the topic sentence."],
    ["underpay","under","It is wrong to underpay workers."],
    ["undercook","under","Do not undercook the vegetables."],
    ["underestimate","under","Do not underestimate the storm."],
    ["undercover","under","The undercover guard blended into the crowd."],
    ["underpass","under","We walked through the underpass to cross safely."],
    ["underbrush","under","The deer hid in the underbrush."],
    ["understand","under","I understand the rule now."],

    ["overreact","over","Try not to overreact to the small mistake."],
    ["overload","over","Do not overload the backpack with books."],
    ["overcook","over","It is easy to overcook pasta."],
    ["overfill","over","Do not overfill the glass."],
    ["overjoyed","over","She was overjoyed by the surprise gift."],
    ["overgrown","over","The garden path looked overgrown with weeds."],
    ["overhead","over","Birds circled overhead above the field."],
    ["overlook","over","The balcony will overlook the lake."],
    ["overuse","over","Overuse can wear out the battery."],
    ["overtake","over","The red car began to overtake the truck."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A10_prefix-foundations",
      code: "A10",
      title: "A10 — Prefix Foundations",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "A prefix is a word part added to the beginning of a base word to change its meaning."
    },

    teaching_cards: [
      {
        title: "prefix foundations",
        rule:
          "A prefix is a word part added to the beginning of a base word to change its meaning. Common prefixes include un-, re-, pre-, mis-, dis-, sub-, trans-, inter-, under-, and over-.",
        why:
          "Prefixes help readers figure out word meanings and help writers build more precise vocabulary from known base words.",
        whenToUse:
          "Use prefix knowledge when you see a familiar word part at the beginning of a word. Break the word into the prefix and the base to help with spelling and meaning, as in unhappy, replay, preview, and misread.",
        whenNotToUse:
          "Do not assume every beginning letter chunk is a prefix. Some words only look as if they start with a prefix, but the rest is not a true base word you can separate cleanly.",
        examples: [
          "unhappy means not happy",
          "redo means do again",
          "preview means view before",
          "misread means read incorrectly",
          "underwater means below water",
          "overfill means fill too much"
        ],
        nearMisses: [
          "uncle",
          "pretty",
          "reach",
          "dish",
          "under",
          "mist"
        ],
        nearMissesDetailed: [
          {
            word: "uncle",
            reason: "This looks as if it starts with un-, but uncle is not built from the prefix un- plus a base word."
          },
          {
            word: "pretty",
            reason: "This looks as if it starts with pre-, but pretty is not made from the prefix pre- plus tty."
          },
          {
            word: "reach",
            reason: "This looks as if it starts with re-, but reach is a whole word, not re- plus ach."
          },
          {
            word: "dish",
            reason: "This looks as if it starts with dis-, but dish is not dis- plus h."
          },
          {
            word: "under",
            reason: "This is a full word by itself here, not always a prefixed word built from a separate base."
          },
          {
            word: "mist",
            reason: "This looks as if it starts with mis-, but mist is not the prefix mis- plus t."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a10_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the prefix ${pattern}. Look at the beginning word part and then the base word to help spell the whole word.`
    }))
  };
})();