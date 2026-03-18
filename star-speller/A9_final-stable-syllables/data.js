window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["table","stable","The table was set with blue plates."],
    ["candle","stable","A candle glowed beside the window."],
    ["little","stable","The little bird hopped along the fence."],
    ["purple","stable","She wore a purple scarf in the cold wind."],
    ["marble","stable","A marble rolled beneath the desk."],
    ["gentle","stable","The gentle horse lowered its head."],
    ["middle","stable","We met in the middle of the hall."],
    ["apple","stable","An apple tumbled from the basket."],
    ["turtle","stable","The turtle rested on a warm rock."],
    ["simple","stable","The map showed a simple path through town."],

    ["bubble","stable","A bubble floated above the sink."],
    ["handle","stable","Grab the handle and pull the door."],
    ["puzzle","stable","The puzzle pieces covered the carpet."],
    ["jungle","stable","The jungle scene filled the picture book."],
    ["buckle","stable","Please fasten the buckle before we leave."],
    ["sparkle","stable","The stars sparkle over the dark lake."],
    ["giggle","stable","A small giggle came from the back row."],
    ["sample","stable","He offered a sample of warm bread."],
    ["ripple","stable","A ripple spread across the pond."],
    ["cradle","stable","The cradle rocked beside the bed."],

    ["waffle","stable","The waffle smelled sweet and warm."],
    ["pickle","stable","He put a pickle on the sandwich."],
    ["ankle","stable","She twisted her ankle on the trail."],
    ["beetle","stable","A green beetle crawled across the porch."],
    ["eagle","stable","An eagle circled above the cliff."],
    ["noodle","stable","One noodle slipped from the spoon."],
    ["cable","stable","The cable stretched across the stage."],
    ["maple","stable","A maple leaf landed on the path."],
    ["staple","stable","Use a staple to hold the pages together."],
    ["people","stable","Many people gathered in the town square."],

    ["bottle","stable","The bottle was full of fresh water."],
    ["kettle","stable","The kettle whistled on the stove."],
    ["settle","stable","Please settle into your seat quietly."],
    ["cattle","stable","The cattle moved slowly across the field."],
    ["thimble","stable","The thimble sat beside the sewing basket."],
    ["fable","stable","The old fable ended with a lesson."],
    ["noble","stable","The noble knight guarded the gate."],
    ["stable","stable","The horse returned to the stable at dusk."],
    ["trouble","stable","We had trouble opening the stuck jar."],
    ["double","stable","Please draw a double line under the title."],

    ["possible","stable","It is possible that rain will come later."],
    ["visible","stable","The moon was clearly visible above the trees."],
    ["terrible","stable","The terrible storm shook the shutters."],
    ["article","stable","She wrote an article for the school paper."],
    ["particle","stable","Every particle of dust glowed in the beam."],
    ["vehicle","stable","The vehicle turned into the long driveway."],
    ["miracle","stable","The rescue felt like a miracle."],
    ["obstacle","stable","The hurdle was the final obstacle in the race."],
    ["spectacle","stable","The fireworks were a dazzling spectacle."],
    ["icicle","stable","An icicle hung from the roof edge."],

    ["action","tion","The action in the movie started quickly."],
    ["station","tion","The train rolled into the station at noon."],
    ["vacation","tion","We planned a beach vacation in July."],
    ["motion","tion","The dancer moved with graceful motion."],
    ["invention","tion","The invention changed daily life."],
    ["caption","tion","Write a caption under the picture."],
    ["question","tion","Please answer the final question."],
    ["attention","tion","Pay close attention to the directions."],
    ["fraction","tion","We learned about fraction strips in math."],
    ["direction","tion","The map showed the correct direction."],

    ["nation","tion","The nation celebrated the holiday together."],
    ["collection","tion","Her shell collection filled a wooden box."],
    ["selection","tion","That was a strong selection for the chorus."],
    ["connection","tion","The connection between the clues became clear."],
    ["protection","tion","A helmet gives protection during biking."],
    ["celebration","tion","The celebration lasted all evening."],
    ["location","tion","This location overlooks the river bend."],
    ["condition","tion","The old chair stayed in good condition."],
    ["solution","tion","We finally found the solution to the problem."],
    ["instruction","tion","Read each instruction before you begin."],

    ["musician","sion","The musician tuned the guitar backstage."],
    ["vision","sion","Her vision blurred in the bright light."],
    ["decision","sion","That decision helped the whole team."],
    ["collision","sion","The collision dented the bike wheel."],
    ["division","sion","We practiced division facts after lunch."],
    ["explosion","sion","The explosion in the story shook the tower."],
    ["confusion","sion","The new directions caused confusion."],
    ["conclusion","sion","The conclusion wrapped up the mystery well."],
    ["revision","sion","She made a revision to the final draft."],
    ["permission","sion","We asked permission before entering the room."],

    ["picture","ture","The picture hung above the fireplace."],
    ["future","ture","The future felt bright and open."],
    ["nature","ture","We studied nature on the field trip."],
    ["capture","ture","The camera will capture the sunset."],
    ["adventure","ture","The novel told an exciting adventure."],
    ["mixture","ture","The baker stirred the mixture carefully."],
    ["creature","ture","A tiny creature moved under the leaf."],
    ["furniture","ture","The furniture filled the old house."],
    ["vulture","ture","A vulture circled above the canyon."],
    ["lecture","ture","The lecture began right after lunch."]
,
    ["closure","sure","The closure of the road delayed our trip."],
    ["treasure","sure","The treasure chest rested in the cave."],
    ["measure","sure","Use the ruler to measure the board."],
    ["pleasure","sure","It was a pleasure to hear the choir sing."],
    ["exposure","sure","Too much exposure faded the old fabric."],
    ["creature","ture","The creature slipped under the leaf."],
    ["signature","ture","Her signature appeared at the bottom of the letter."],
    ["texture","ture","The texture of the cloth felt rough."],
    ["picture","ture","The picture hung above the mantle."],
    ["departure","ture","Their departure was delayed by rain."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A9_final-stable-syllables",
      code: "A9",
      title: "A9 — Final Stable Syllables",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "A final stable syllable is a syllable that appears at the end of a word and keeps a common, predictable spelling pattern, such as consonant-le, -tion, -sion, and -ture."
    },

    teaching_cards: [
      {
        title: "final stable syllables",
        rule:
          "A final stable syllable is a syllable that appears at the end of a word and keeps a common, predictable spelling pattern, such as consonant-le, -tion, -sion, and -ture.",
        why:
          "Final stable syllables help readers chunk longer words and help writers remember common endings that show up again and again.",
        whenToUse:
          "Use this idea when you reach the end of a longer word and notice a common ending pattern. In words like table, puzzle, action, vision, and picture, the final syllable keeps a recognizable spelling.",
        whenNotToUse:
          "Do not assume every final syllable is stable. Some endings are just ordinary syllables, and some words that end in le or ion do not fit the same pronunciation pattern you first expect.",
        examples: [
          "table has a consonant-le ending",
          "action has a tion ending",
          "vision has a sion ending",
          "picture has a ture ending",
          "purple has a final stable ending",
          "bottle has a consonant-le ending"
        ],
        nearMisses: [
          "lion",
          "trial",
          "giant",
          "radio",
          "quiet",
          "doing"
        ],
        nearMissesDetailed: [
          {
            word: "lion",
            reason: "This looks like it might end with a stable ion pattern, but lion does not use the tion or sion ending."
          },
          {
            word: "trial",
            reason: "This has an ending syllable, but it is not a final stable pattern like consonant-le, tion, sion, or ture."
          },
          {
            word: "giant",
            reason: "This ends in ant, which is not one of the target final stable syllables in this lesson."
          },
          {
            word: "radio",
            reason: "This has multiple syllables, but the ending is not a final stable syllable like tion or ture."
          },
          {
            word: "quiet",
            reason: "This ends in et, not in a target final stable pattern."
          },
          {
            word: "doing",
            reason: "This ends in ing, which is a suffix pattern, not one of the final stable syllables in this lesson."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a9_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the final stable syllable pattern ${pattern}. Look at the ending chunk to help spell the whole word.`
    }))
  };
})();