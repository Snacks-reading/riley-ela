window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["coin","oi","Riley dropped a coin into the fountain."],
    ["boil","oi","Please boil the water before making pasta."],
    ["join","oi","Come join us for the board game after dinner."],
    ["point","oi","Use your finger to point to the correct answer."],
    ["voice","oi","Her voice carried across the stage."],
    ["choice","oi","That was a wise choice for the project."],
    ["noise","oi","We heard a strange noise in the attic."],
    ["moist","oi","The soil stayed moist after the rain."],
    ["joint","oi","The rusty joint creaked when the gate opened."],
    ["spoil","oi","Do not spoil the ending of the movie."],
    ["foil","oi","Wrap the potatoes in foil before baking them."],
    ["coil","oi","A loose coil of rope lay on the dock."],
    ["toil","oi","Years of toil built the old stone wall."],
    ["broil","oi","Dad will broil the fish for dinner."],
    ["soil","oi","Rich soil helps the garden grow."],
    ["rejoice","oi","We rejoice when our team wins the match."],
    ["void","oi","The sign warned us to avoid the void below."],
    ["hoist","oi","They used a rope to hoist the flag."],
    ["ointment","oi","The nurse spread ointment on the scrape."],
    ["poise","oi","She stepped onto the stage with poise."],
    ["coiling","oi","The snake was coiling near the warm rock."],
    ["boiling","oi","The boiling soup bubbled on the stove."],
    ["pointed","oi","She pointed to the map on the wall."],
    ["joining","oi","We are joining the club after school."],
    ["spoiled","oi","The milk spoiled in the summer heat."],

    ["boy","oy","The boy carried a stack of library books."],
    ["toy","oy","The puppy chewed on a squeaky toy."],
    ["enjoy","oy","We enjoy reading magical stories together."],
    ["royal","oy","The royal parade moved through the town square."],
    ["joy","oy","The good news brought joy to the whole family."],
    ["soy","oy","Dad added soy sauce to the noodles."],
    ["oyster","oy","An oyster shell glimmered in the sand."],
    ["loyal","oy","The dog stayed loyal to its owner."],
    ["voyage","oy","The ship began its long voyage at dawn."],
    ["annoy","oy","Do not annoy your brother during homework."],
    ["destroy","oy","Wind can destroy weak tree branches in a storm."],
    ["employ","oy","The shop will employ two helpers this summer."],
    ["decoy","oy","The hunter used a wooden decoy near the reeds."],
    ["enjoyed","oy","We enjoyed the fireworks over the lake."],
    ["joyful","oy","The class felt joyful after the performance."],
    ["toyed","oy","The kitten toyed with the ribbon on the floor."],
    ["boyish","oy","His boyish grin filled the room with laughter."],
    ["royalty","oy","The story was about royalty in a faraway land."],
    ["voyager","oy","The voyager crossed the sea by starlight."],
    ["annoying","oy","The buzzing fly became annoying during lunch."],
    ["destroyed","oy","The storm destroyed the old wooden shed."],
    ["employee","oy","The employee stacked boxes in the storeroom."],
    ["enjoying","oy","We are enjoying the cool evening breeze."],
    ["joyless","oy","The room felt joyless without music."],
    ["toybox","oy","The toybox stood open in the corner."],

    ["cloud","ou","A dark cloud drifted over the playground."],
    ["shout","ou","Do not shout in the quiet hallway."],
    ["sound","ou","The sound of thunder echoed across the field."],
    ["round","ou","We sat around a round wooden table."],
    ["found","ou","We found the missing marker under the couch."],
    ["ground","ou","The wet ground sparkled after the storm."],
    ["count","ou","Please count the shells in the basket."],
    ["house","ou","A bright red house stood near the hill."],
    ["mountain","ou","The mountain trail climbed above the trees."],
    ["bounce","ou","The ball took one bounce and rolled away."],
    ["fountain","ou","The fountain splashed in the center of the square."],
    ["proud","ou","Her parents felt proud of her hard work."],
    ["trout","ou","A trout flashed beneath the clear stream."],
    ["outside","ou","We waited outside under the porch roof."],
    ["around","ou","Leaves scattered around the stone path."],
    ["amount","ou","A small amount of sugar sweetened the tea."],
    ["pound","ou","The puppy ran around the pound fence."],
    ["flour","ou","Please add flour to the mixing bowl."],
    ["shower","ou","The shower left drops on the mirror."],
    ["tower","ou","The old tower overlooked the harbor."],
    ["outing","ou","Our class outing ended with a picnic."],
    ["outfit","ou","She wore a bright outfit to the party."],
    ["drought","ou","A long drought dried the creek bed."],
    ["scout","ou","The scout carried a compass and map."],
    ["boundary","ou","The fence marked the boundary of the field."],

    ["cow","ow","The cow stood near the old red barn."],
    ["brown","ow","She wore brown boots on the muddy trail."],
    ["crown","ow","The queen placed the crown on the velvet pillow."],
    ["owl","ow","An owl hooted from the tree at dusk."],
    ["town","ow","The town square filled with music and lights."],
    ["down","ow","A feather drifted down from the nest."],
    ["howl","ow","We heard the wolf howl in the distance."],
    ["growl","ow","A low growl came from behind the fence."],
    ["clown","ow","The clown balanced three balls in the circus ring."],
    ["flower","ow","A yellow flower opened in the morning sun."],
    ["power","ow","The storm cut power to the whole street."],
    ["shower","ow","A quick shower cooled the summer air."],
    ["frown","ow","A frown spread across his face when it rained."],
    ["crowd","ow","The crowd cheered after the final song."],
    ["browse","ow","We like to browse the shelves at the bookstore."],
    ["growling","ow","The growling dog guarded the gate."],
    ["howling","ow","The wind was howling around the cabin."],
    ["downward","ow","The path sloped downward toward the river."],
    ["townhouse","ow","A brick townhouse stood beside the bakery."],
    ["brownie","ow","She packed a brownie in her lunchbox."],
    ["cowboy","ow","The cowboy waved from the dusty trail."],
    ["powder","ow","A light powder of snow covered the porch."],
    ["towering","ow","A towering wave rose above the boat."],
    ["crowded","ow","The hallway felt crowded after the assembly."],
    ["flowerpot","ow","A clay flowerpot sat on the windowsill."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A5_diphthongs",
      code: "A5",
      title: "A5 — Diphthongs",
      gradeBand: "3-5",
      difficulty: 3,
      ruleSummary:
        "A diphthong is a vowel sound that glides from one sound to another in the same syllable. Common diphthong spellings include oi, oy, ou, and ow."
    },

    teaching_cards: [
      {
        title: "diphthongs",
        rule:
          "A diphthong is a vowel sound that glides from one sound to another in the same syllable. Common diphthong spellings include oi, oy, ou, and ow.",
        why:
          "Diphthongs are common in English. Knowing them helps readers hear the correct vowel glide and helps writers choose the right spelling pattern.",
        whenToUse:
          "Use diphthong patterns when you hear a gliding vowel sound in one syllable, as in coin, boy, cloud, and cow.",
        whenNotToUse:
          "Do not confuse a diphthong with a simple long vowel. Also remember that some spellings like ow can make different sounds in different words.",
        examples: [
          "coin",
          "boy",
          "cloud",
          "cow",
          "choice",
          "toy",
          "found",
          "crown"
        ],
        nearMisses: [
          "rain",
          "boat",
          "snow",
          "glow",
          "beach",
          "rope"
        ],
        nearMissesDetailed: [
          {
            word: "rain",
            reason: "These words look close, but rain uses a long a vowel team, not a diphthong glide."
          },
          {
            word: "boat",
            reason: "These words look close, but boat uses a long o vowel team, not a diphthong."
          },
          {
            word: "snow",
            reason: "These words look close, but ow here makes a long o sound rather than the diphthong sound in cow."
          },
          {
            word: "glow",
            reason: "These words look close, but glow also uses ow for a long o sound, not a diphthong."
          },
          {
            word: "beach",
            reason: "These words look close, but beach uses a long e vowel team, not a diphthong."
          },
          {
            word: "rope",
            reason: "These words look close, but rope is a silent e word, not a diphthong pattern."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a5_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the diphthong pattern ${pattern}. The vowel sound glides in one syllable in this word.`
    }))
  };
})();