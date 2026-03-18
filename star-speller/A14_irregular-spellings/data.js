window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["said","irregular","She said the answer with confidence."],
    ["does","irregular","He does his homework before dinner."],
    ["come","irregular","Please come inside before the storm begins."],
    ["some","irregular","Some shells were smooth and white."],
    ["were","irregular","They were early for the concert."],
    ["there","irregular","Set the basket down over there."],
    ["where","irregular","Where did you leave your notebook?"],
    ["friend","irregular","My friend mailed me a postcard."],
    ["again","irregular","Please read that line again."],
    ["against","irregular","The ladder leaned against the wall."],

    ["busy","irregular","The market looked busy at noon."],
    ["business","irregular","The business opened before sunrise."],
    ["pretty","irregular","The sky turned a pretty shade of pink."],
    ["people","irregular","Many people filled the town square."],
    ["because","irregular","We stayed inside because it was raining."],
    ["enough","irregular","We had enough wood for the fire."],
    ["through","irregular","We walked through the garden gate."],
    ["though","irregular","Though it was late, we kept reading."],
    ["thought","irregular","She thought the map looked strange."],
    ["bought","irregular","Dad bought fresh peaches at the market."],

    ["could","irregular","I could hear music from the hall."],
    ["would","irregular","I would help if I were taller."],
    ["should","irregular","You should pack a jacket for the trip."],
    ["young","irregular","The young fox hid in the tall grass."],
    ["country","irregular","The country road curved past the barn."],
    ["couple","irregular","A couple of birds perched on the fence."],
    ["touch","irregular","Do not touch the hot pan."],
    ["trouble","irregular","The storm caused trouble on the road."],
    ["double","irregular","Please draw a double line under the title."],
    ["cousin","irregular","My cousin brought a basket of apples."],

    ["women","irregular","The women waved from the porch."],
    ["woman","irregular","The woman carried a bright red umbrella."],
    ["answer","irregular","Write the answer on the blank line."],
    ["sugar","irregular","Add one spoon of sugar to the tea."],
    ["sure","irregular","Are you sure this is the right trail?"],
    ["measure","irregular","Use the ruler to measure the frame."],
    ["treasure","irregular","The pirate hid treasure in the cave."],
    ["ocean","irregular","The ocean looked silver at dawn."],
    ["special","irregular","We planned a special dinner for Grandma."],
    ["machine","irregular","The machine hummed beside the wall."],

    ["chorus","irregular","The chorus sang the final verse together."],
    ["island","irregular","The island sat beyond the bright blue bay."],
    ["knife","irregular","The knife lay beside the cutting board."],
    ["knock","irregular","Please knock before opening the door."],
    ["write","irregular","Write your name at the top of the page."],
    ["wrap","irregular","She will wrap the gift in silver paper."],
    ["wrong","irregular","That answer is wrong for this question."],
    ["sign","irregular","A wooden sign pointed toward the trail."],
    ["light","irregular","A soft light glowed in the hallway."],
    ["eight","irregular","Eight candles flickered on the cake."],

    ["once","irregular","I visited that museum once before."],
    ["one","irregular","One lantern hung beside the gate."],
    ["two","irregular","Two boats drifted near the dock."],
    ["watch","irregular","Please watch the road as we cross."],
    ["water","irregular","Cold water splashed from the fountain."],
    ["warm","irregular","The bread smelled warm and sweet."],
    ["heart","irregular","The red paper heart lay on the desk."],
    ["earth","irregular","The earth looked dark after the rain."],
    ["learn","irregular","We learn something new every day."],
    ["heard","irregular","I heard thunder behind the hills."],

    ["early","irregular","We left early to avoid the traffic."],
    ["earn","irregular","You earn trust by telling the truth."],
    ["bear","irregular","A bear crossed the edge of the clearing."],
    ["pear","irregular","The pear ripened on the sill."],
    ["wear","irregular","Please wear your boots in the mud."],
    ["break","irregular","Let's take a short break now."],
    ["steak","irregular","The steak sizzled on the grill."],
    ["great","irregular","That was a great idea for the poster."],
    ["again","irregular","Try the puzzle again from the top."],
    ["straight","irregular","Draw a straight line across the page."],

    ["laugh","irregular","We heard the audience laugh at the puppet show."],
    ["daughter","irregular","Their daughter carried flowers to the stage."],
    ["biscuit","irregular","A warm biscuit sat on the plate."],
    ["build","irregular","They will build a bridge over the creek."],
    ["guide","irregular","The guide showed us the safest trail."],
    ["guess","irregular","Can you guess what is in the box?"],
    ["guest","irregular","Each guest received a blue card."],
    ["ghost","irregular","The ghost in the story rattled the chains."],
    ["school","irregular","School begins early on Monday mornings."],
    ["whole","irregular","She ate the whole peach."],

    ["whose","irregular","Whose backpack is under the chair?"],
    ["who","irregular","Who brought the basket of shells?"],
    ["what","irregular","What did the note say exactly?"],
    ["when","irregular","When will the rain begin?"],
    ["why","irregular","Why did the trail suddenly end?"],
    ["very","irregular","The cave felt very cold inside."],
    ["many","irregular","Many candles lined the windowsill."],
    ["any","irregular","Did you find any blue marbles?"],
    ["every","irregular","Every student brought a notebook."],
    ["none","irregular","None of the apples were bruised."]
,
    ["friendship","irregular","Their friendship lasted for many years."],
    ["beautiful","irregular","The lake looked beautiful at sunrise."],
    ["beautifully","irregular","The choir sang beautifully in the hall."],
    ["answering","irregular","She was answering questions after the talk."],
    ["although","irregular","Although it rained, we still walked outside."],
    ["knowledge","irregular","Knowledge grows with practice and patience."],
    ["language","irregular","Language helps us share ideas clearly."],
    ["strength","irregular","Her strength surprised the whole team."],
    ["sentence","irregular","Write the sentence neatly on the line."],
    ["beautifulness","irregular","The poem praised the beautifulness of the valley."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A14_irregular-spellings",
      code: "A14",
      title: "A14 — Irregular Spellings",
      gradeBand: "3-5",
      difficulty: 5,
      ruleSummary:
        "Some words do not fully follow the most common phonics or spelling patterns. Strong spellers learn these irregular words by noticing unusual letter patterns and practicing them carefully."
    },

    teaching_cards: [
      {
        title: "irregular spellings",
        rule:
          "Some words do not fully follow the most common phonics or spelling patterns. They may have silent letters, unusual vowel spellings, or unexpected sound-letter matches.",
        why:
          "Readers and writers meet irregular words all the time. Learning them helps build accuracy, confidence, and reading fluency.",
        whenToUse:
          "Use irregular spelling knowledge when a word does not match the pattern you first expect, as in said, friend, one, could, or enough.",
        whenNotToUse:
          "Do not assume every unusual-looking word is completely random. Many irregular words still have one part that is regular and one part that must be remembered carefully.",
        examples: [
          "said does not sound like it is spelled",
          "friend has an unexpected vowel spelling",
          "one does not match a simple short-vowel pattern",
          "could has a silent l",
          "through has an unusual vowel team spelling",
          "people has an uncommon vowel pattern"
        ],
        nearMisses: [
          "rain",
          "hoping",
          "city",
          "running",
          "invite",
          "teacher"
        ],
        nearMissesDetailed: [
          {
            word: "rain",
            reason: "This word follows a common vowel-team pattern, so it is not an irregular spelling target in this lesson."
          },
          {
            word: "hoping",
            reason: "This word follows a known silent-e pattern, so it is not mainly irregular."
          },
          {
            word: "city",
            reason: "This word follows the soft-c rule before i, so it is not a strong irregular example here."
          },
          {
            word: "running",
            reason: "This word follows consonant doubling, so it belongs in a rule-based lesson rather than an irregular spelling lesson."
          },
          {
            word: "invite",
            reason: "This word follows a vowel-consonant-e pattern, so it is not the kind of irregular word this lesson focuses on."
          },
          {
            word: "teacher",
            reason: "This word uses common patterns and suffixes, so it is not a core irregular spelling in this lesson."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a14_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} is an irregular spelling word. Look carefully at the unusual letter pattern that does not fully match the expected sound.`
    }))
  };
})();