window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["running","double","The rabbit was running across the wet grass."],
    ["hopping","double","The frog kept hopping from stone to stone."],
    ["bigger","double","The blue box looked bigger than the red one."],
    ["sadder","double","The movie's ending felt sadder than I expected."],
    ["fittest","double","The fittest runner finished first in the race."],
    ["sitting","double","She was sitting by the window with a book."],
    ["patted","double","Dad patted the dog on the head."],
    ["winner","double","The winner held up the shining trophy."],
    ["beginning","double","The beginning of the novel grabbed my attention."],
    ["jogging","double","He was jogging through the park at sunrise."],

    ["stopped","double","The bus stopped beside the front gate."],
    ["stopping","double","The driver was stopping at every light."],
    ["planned","double","We planned a picnic for Saturday afternoon."],
    ["planning","double","She was planning the party decorations."],
    ["slipped","double","The glass slipped from his wet hand."],
    ["slipping","double","The puppy was slipping on the shiny floor."],
    ["grabbed","double","He grabbed the rope before it fell."],
    ["grabbing","double","She was grabbing apples from the basket."],
    ["drummed","double","Rain drummed on the roof all night."],
    ["drumming","double","The band was drumming before the parade."],

    ["skinned","double","He skinned his knee on the gravel path."],
    ["skinning","double","The old branch was skinning bark from the tree."],
    ["pinned","double","She pinned the note to the board."],
    ["pinning","double","He kept pinning papers together neatly."],
    ["shopped","double","We shopped for supplies before the storm."],
    ["shopping","double","Mom was shopping for fruit and bread."],
    ["trimmed","double","Dad trimmed the bushes by the porch."],
    ["trimming","double","He was trimming the hedge at sunset."],
    ["filled","double","She filled the bottle with cold water."],
    ["filling","double","The baker was filling pies with apples."],

    ["bagged","double","They bagged the leaves after raking the yard."],
    ["bagging","double","He was bagging groceries at the checkout line."],
    ["robbed","double","The story said the thief robbed the bank."],
    ["robbing","double","The villain was robbing the travelers in the tale."],
    ["hugged","double","She hugged her little brother after school."],
    ["hugging","double","The child was hugging the stuffed bear tightly."],
    ["nodded","double","He nodded when the teacher asked a question."],
    ["nodding","double","Grandpa was nodding in his chair."],
    ["fitted","double","The tailor fitted the coat to her shoulders."],
    ["fitter","double","After months of training she felt fitter and stronger."],

    ["beginner","double","The beginner asked how to hold the racket."],
    ["forgetting","double","He kept forgetting where he left his shoes."],
    ["preferred","double","She preferred the blue notebook over the green one."],
    ["preferring","double","He was preferring quiet music during study time."],
    ["admitted","double","She admitted that she had lost the key."],
    ["admitting","double","The guard was admitting guests through the side door."],
    ["occurred","double","The bright idea occurred during the car ride."],
    ["occurring","double","The problem was occurring more often in winter."],
    ["regretted","double","He regretted leaving his jacket at home."],
    ["regretting","double","She was regretting the rushed decision."],

    ["swimming","double","The children were swimming in the lake."],
    ["swimmer","double","The swimmer touched the wall first."],
    ["spinning","double","The wheel kept spinning after the push."],
    ["spinner","double","The toy spinner whirled on the desk."],
    ["winning","double","The team kept winning close games."],
    ["thinner","double","The ice looked thinner near the edge."],
    ["reddest","double","That was the reddest apple in the basket."],
    ["sunniest","double","Today was the sunniest day of the week."],
    ["hottest","double","July is often the hottest month here."],
    ["biggest","double","That was the biggest wave of the day."],

    ["skipper","double","The skipper guided the boat into the harbor."],
    ["dropping","double","The leaves were dropping from the maple tree."],
    ["dropped","double","She dropped the shell into her pocket."],
    ["clapped","double","The audience clapped after the final song."],
    ["clapping","double","Everyone was clapping along with the music."],
    ["tapped","double","Rain tapped softly on the classroom window."],
    ["tapping","double","He kept tapping his pencil on the desk."],
    ["slammed","double","The wind slammed the gate shut."],
    ["slamming","double","The screen door kept slamming in the breeze."],
    ["knitted","double","Grandma knitted a scarf for winter."],

    ["knitting","double","She was knitting by the fireplace."],
    ["pitted","double","The cherries were pitted before baking."],
    ["fanned","double","She fanned the coals until they glowed."],
    ["fanning","double","He was fanning himself in the summer heat."],
    ["jammed","double","The drawer jammed when we shut it too hard."],
    ["jamming","double","The musicians were jamming in the garage."],
    ["dragged","double","He dragged the sled through the snow."],
    ["dragging","double","The puppy was dragging a blanket across the room."],
    ["wrapped","double","She wrapped the gift in silver paper."],
    ["wrapping","double","He was wrapping sandwiches for the trip."],

    ["mopping","double","Dad was mopping the kitchen floor."],
    ["mopped","double","She mopped up the spilled juice quickly."],
    ["rubbed","double","He rubbed his hands together in the cold."],
    ["rubbing","double","The kitten was rubbing against the chair leg."],
    ["spotted","double","We spotted a deer by the woods."],
    ["spotting","double","Bird watchers were spotting hawks above the field."],
    ["fitted","double","The new lid fitted the jar perfectly."],
    ["cutting","double","She was cutting paper stars for the poster."],
    ["cutter","double","The pizza cutter lay beside the plate."],
    ["sadder","double","The sequel felt sadder than the first story."],

    ["wettest","double","This was the wettest spring in years."],
    ["hummed","double","She hummed quietly while reading."],
    ["humming","double","The bee was humming near the flower bed."],
    ["tugged","double","The puppy tugged at the blanket."],
    ["tugging","double","He kept tugging on the stuck zipper."],
    ["begged","double","The child begged for one more story."],
    ["begging","double","The puppy was begging for a treat."],
    ["fretted","double","She fretted about the missing folder."],
    ["fretting","double","He was fretting over the delayed flight."],
    ["speller","double","The speller checked every word carefully."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A7_consonant-doubling",
      code: "A7",
      title: "A7 — Consonant Doubling",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "When a short-vowel base word ends in one consonant, double the final consonant before adding a vowel-starting suffix."
    },

    teaching_cards: [
      {
        title: "consonant doubling",
        rule:
          "When a short-vowel base word ends in one consonant, double the final consonant before adding a vowel-starting suffix like -ing, -ed, -er, or -est.",
        why:
          "Doubling protects the short vowel sound. It helps readers hear the correct sound and helps writers avoid turning hop into hope or run into rune.",
        whenToUse:
          "Use consonant doubling when the base word has one syllable or a stressed final syllable, ends in one consonant, and has one short vowel right before that consonant, as in run, hop, big, and sad.",
        whenNotToUse:
          "Do not double when the word has a long vowel, a vowel team, two final consonants, or ends in w, x, or y. Also do not double when the suffix begins with a consonant instead of a vowel.",
        examples: [
          "run becomes running",
          "hop becomes hopping",
          "big becomes bigger",
          "sad becomes sadder",
          "stop becomes stopped",
          "plan becomes planning"
        ],
        nearMisses: [
          "boat becomes boating",
          "rain becomes raining",
          "jump becomes jumping",
          "lift becomes lifted",
          "snow becomes snowy",
          "play becomes playing"
        ],
        nearMissesDetailed: [
          {
            word: "boat becomes boating",
            reason: "These words look close, but boat has a long vowel sound, so do not double."
          },
          {
            word: "rain becomes raining",
            reason: "These words look close, but rain has a vowel team, so do not double."
          },
          {
            word: "jump becomes jumping",
            reason: "These words look close, but jump ends with two consonants, so do not double."
          },
          {
            word: "lift becomes lifted",
            reason: "These words look close, but lift already ends with two consonants, so do not double."
          },
          {
            word: "snow becomes snowy",
            reason: "These words look close, but snow ends in w, so do not double."
          },
          {
            word: "play becomes playing",
            reason: "These words look close, but play has a vowel team and ends in y, so do not double."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a7_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses consonant doubling. The final consonant stays doubled to protect the short vowel sound.`
    }))
  };
})();