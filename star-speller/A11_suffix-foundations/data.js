window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["helpful","ful","The helpful guide showed us the shortest trail."],
    ["hopeful","ful","She felt hopeful about the school play."],
    ["careful","ful","Be careful with the glass jar."],
    ["joyful","ful","The choir sounded joyful at the concert."],
    ["playful","ful","The puppy gave a playful bark."],
    ["thankful","ful","We felt thankful for the sunny weather."],
    ["useful","ful","A ruler is useful for straight lines."],
    ["painful","ful","The scrape looked painful at first."],
    ["beautiful","ful","The sunset was beautiful over the lake."],
    ["peaceful","ful","The cabin felt peaceful at night."],

    ["quickly","ly","She quickly packed her books into the bag."],
    ["slowly","ly","The turtle moved slowly across the path."],
    ["softly","ly","Rain fell softly on the roof."],
    ["bravely","ly","The firefighter bravely entered the smoky room."],
    ["calmly","ly","He calmly explained the plan to the group."],
    ["kindly","ly","Please speak kindly to your brother."],
    ["safely","ly","The hikers returned safely before dark."],
    ["sadly","ly","She sadly waved goodbye at the station."],
    ["quietly","ly","The class quietly opened their notebooks."],
    ["brightly","ly","The lantern glowed brightly in the tent."],

    ["farmer","er","The farmer checked the fence at dawn."],
    ["teacher","er","The teacher read the chapter aloud."],
    ["baker","er","The baker frosted the cake carefully."],
    ["runner","er","The runner stretched before the race."],
    ["reader","er","The reader paused at the end of the page."],
    ["speaker","er","The speaker greeted the audience warmly."],
    ["worker","er","The worker lifted the boxes onto the cart."],
    ["driver","er","The driver parked beside the curb."],
    ["leader","er","The leader guided the group through the cave."],
    ["painter","er","The painter mixed colors on the tray."],

    ["kindness","ness","Her kindness made everyone feel welcome."],
    ["darkness","ness","Darkness settled over the lake."],
    ["sadness","ness","The story ended with a feeling of sadness."],
    ["goodness","ness","We thanked her for her goodness."],
    ["quietness","ness","The quietness of the woods felt peaceful."],
    ["softness","ness","The softness of the blanket was comforting."],
    ["weakness","ness","Every athlete works to improve a weakness."],
    ["illness","ness","The illness kept him home from school."],
    ["happiness","ness","Their happiness showed in their smiles."],
    ["carelessness","ness","Carelessness can lead to mistakes."],

    ["payment","ment","The payment arrived by mail on Friday."],
    ["movement","ment","The movement of the leaves showed the wind."],
    ["enjoyment","ment","We felt enjoyment during the concert."],
    ["agreement","ment","The team reached an agreement by noon."],
    ["punishment","ment","The story warned about unfair punishment."],
    ["treatment","ment","The doctor explained the treatment plan."],
    ["shipment","ment","The shipment reached the store this morning."],
    ["development","ment","The development changed the skyline."],
    ["statement","ment","Her statement answered the question clearly."],
    ["improvement","ment","Practice leads to improvement over time."],

    ["cloudy","y","The sky looked cloudy before the rain."],
    ["sunny","y","It was a sunny afternoon in the park."],
    ["muddy","y","Their boots became muddy on the trail."],
    ["funny","y","The joke sounded funny to the class."],
    ["sleepy","y","The baby looked sleepy after lunch."],
    ["windy","y","A windy day rattled the shutters."],
    ["messy","y","The art table was messy after painting."],
    ["dusty","y","The attic floor felt dusty underfoot."],
    ["salty","y","The ocean air smelled salty and fresh."],
    ["rainy","y","A rainy morning kept us indoors."],

    ["hardest","est","That was the hardest puzzle in the book."],
    ["fastest","est","The fastest runner crossed the line first."],
    ["smallest","est","The smallest shell sat near the edge."],
    ["kindest","est","She was the kindest person in the room."],
    ["brightest","est","The brightest star hung above the hill."],
    ["coldest","est","January was the coldest month last year."],
    ["longest","est","This was the longest chapter in the novel."],
    ["tallest","est","The tallest tree shaded the creek."],
    ["sweetest","est","That was the sweetest peach in the basket."],
    ["strongest","est","The strongest bridge held through the storm."],

    ["washed","ed","She washed the dishes after dinner."],
    ["played","ed","They played tag on the playground."],
    ["jumped","ed","The rabbit jumped over the log."],
    ["helped","ed","He helped carry the heavy box."],
    ["looked","ed","She looked out the frosty window."],
    ["painted","ed","The class painted a mural on paper."],
    ["laughed","ed","Everyone laughed at the puppet show."],
    ["called","ed","Mom called us in for supper."],
    ["opened","ed","He opened the gate with a creak."],
    ["smiled","ed","She smiled at the surprise gift."],

    ["hoping","ing","She is hoping for sunny weather tomorrow."],
    ["reading","ing","Reading by the fire felt cozy."],
    ["writing","ing","He is writing a note to his friend."],
    ["baking","ing","Baking bread filled the house with warmth."],
    ["riding","ing","They were riding bikes along the path."],
    ["climbing","ing","The children kept climbing the jungle gym."],
    ["singing","ing","Singing echoed from the music room."],
    ["drawing","ing","She is drawing a castle in her notebook."],
    ["running","ing","Running through wet grass soaked his shoes."],
    ["playing","ing","The puppies were playing in the yard."]
,
    ["fearless","less","The fearless climber reached the ledge."],
    ["careless","less","A careless step nearly caused a fall."],
    ["endless","less","The endless road curved through the valley."],
    ["hopeless","less","The puzzle did not feel hopeless anymore."],
    ["colorful","ful","The colorful mural brightened the hallway."],
    ["graceful","ful","The swan looked graceful on the water."],
    ["thankless","less","The thankless task took all afternoon."],
    ["restless","less","The restless puppy paced by the door."],
    ["skillful","ful","The skillful artist painted a detailed mural."],
    ["harmless","less","The tiny snake was harmless."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A11_suffix-foundations",
      code: "A11",
      title: "A11 — Suffix Foundations",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "A suffix is a word part added to the end of a base word. Common suffixes include -ful, -ly, -er, -ness, -ment, -y, -est, -ed, and -ing."
    },

    teaching_cards: [
      {
        title: "suffix foundations",
        rule:
          "A suffix is a word part added to the end of a base word. Suffixes can change a word’s meaning, its job in a sentence, or both.",
        why:
          "Knowing suffixes helps readers break apart longer words and helps writers build related words from a base word they already know.",
        whenToUse:
          "Use suffix knowledge when you see a familiar ending added to a base word, as in helpful, quickly, farmer, kindness, and payment.",
        whenNotToUse:
          "Do not assume every ending is a suffix. Some words only look as if they contain a suffix, but the ending is part of the base word itself.",
        examples: [
          "help + ful = helpful",
          "quick + ly = quickly",
          "kind + ness = kindness",
          "pay + ment = payment",
          "play + ed = played",
          "hope + ing = hoping"
        ],
        nearMisses: [
          "family",
          "butter",
          "monkey",
          "finger",
          "honey",
          "uncle"
        ],
        nearMissesDetailed: [
          {
            word: "family",
            reason: "This ends with ly, but the word is not built from a base word plus the suffix -ly."
          },
          {
            word: "butter",
            reason: "This ends with er, but it is not the suffix -er added to butt."
          },
          {
            word: "monkey",
            reason: "This ends with y, but the y here is part of the word, not a suffix changing a base word."
          },
          {
            word: "finger",
            reason: "This ends with er, but the whole word is not built from fing plus -er."
          },
          {
            word: "honey",
            reason: "This ends with y, but the ending is not a suffix pattern in this word."
          },
          {
            word: "uncle",
            reason: "This ends with le, but it is not a suffix lesson word built from unc plus -le."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a11_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the suffix pattern ${pattern}. Look at the base word first, then add the ending carefully.`
    }))
  };
})();