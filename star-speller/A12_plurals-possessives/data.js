window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["cats","plural-s","The cats slept on the sunny porch."],
    ["dogs","plural-s","The dogs ran across the yard."],
    ["books","plural-s","The books lined the wooden shelf."],
    ["trees","plural-s","Tall trees shaded the picnic tables."],
    ["chairs","plural-s","The chairs were stacked by the wall."],
    ["shells","plural-s","Riley collected shells along the beach."],
    ["lamps","plural-s","The lamps glowed softly in the room."],
    ["drums","plural-s","The drums echoed through the gym."],
    ["stars","plural-s","Bright stars covered the night sky."],
    ["boats","plural-s","The boats rocked in the harbor."],

    ["boxes","plural-es","The boxes arrived before noon."],
    ["wishes","plural-es","Her wishes were written in a notebook."],
    ["buses","plural-es","The buses lined up outside the school."],
    ["dishes","plural-es","The dishes dried beside the sink."],
    ["foxes","plural-es","The foxes darted across the field."],
    ["classes","plural-es","The classes ended early on Friday."],
    ["glasses","plural-es","His glasses rested on the desk."],
    ["churches","plural-es","The old churches rang their bells at noon."],
    ["benches","plural-es","The benches faced the river."],
    ["matches","plural-es","The matches were stored in a tin box."],

    ["babies","plural-y","The babies slept in their cribs."],
    ["cities","plural-y","The cities glowed at night from above."],
    ["families","plural-y","Many families came to the festival."],
    ["stories","plural-y","Grandpa told stories by the fire."],
    ["puppies","plural-y","The puppies tumbled across the blanket."],
    ["berries","plural-y","Fresh berries filled the bowl."],
    ["butterflies","plural-y","Butterflies drifted over the flowers."],
    ["ladies","plural-y","The ladies greeted one another warmly."],
    ["candies","plural-y","The candies rattled in the jar."],
    ["parties","plural-y","The parties agreed to the plan."],

    ["children's","possessive-irregular","The children's coats hung by the door."],
    ["men's","possessive-irregular","The men's boots stood in a row."],
    ["women's","possessive-irregular","The women's choir sang beautifully."],
    ["people's","possessive-irregular","The people's voices filled the hall."],
    ["mice's","possessive-irregular","The mice's trail led behind the wall."],
    ["geese's","possessive-irregular","The geese's feathers drifted across the pond."],
    ["teeth's","possessive-irregular","The model showed the teeth's shape clearly."],
    ["feet's","possessive-irregular","The sand stuck to the feet's damp skin."],
    ["children","plural-irregular","The children played near the swings."],
    ["women","plural-irregular","The women waved from the porch."],

    ["girl's","possessive-singular","The girl's backpack rested on the bench."],
    ["boy's","possessive-singular","The boy's kite rose into the wind."],
    ["teacher's","possessive-singular","The teacher's desk stood near the window."],
    ["rabbit's","possessive-singular","The rabbit's ears twitched in the grass."],
    ["bird's","possessive-singular","The bird's nest rested in the tree."],
    ["dog's","possessive-singular","The dog's collar jingled softly."],
    ["cat's","possessive-singular","The cat's tail curled around its paws."],
    ["farmer's","possessive-singular","The farmer's truck rolled down the lane."],
    ["queen's","possessive-singular","The queen's crown gleamed in the spotlight."],
    ["child's","possessive-singular","The child's shoes were muddy from the trail."],

    ["girls'","possessive-plural","The girls' notebooks covered the table."],
    ["boys'","possessive-plural","The boys' bikes leaned against the fence."],
    ["teachers'","possessive-plural","The teachers' meeting lasted an hour."],
    ["rabbits'","possessive-plural","The rabbits' burrows dotted the hillside."],
    ["birds'","possessive-plural","The birds' songs woke us at dawn."],
    ["dogs'","possessive-plural","The dogs' bowls sat by the wall."],
    ["cats'","possessive-plural","The cats' tracks crossed the snow."],
    ["farmers'","possessive-plural","The farmers' market opened at sunrise."],
    ["queens'","possessive-plural","The queens' robes shimmered in the play."],
    ["students'","possessive-plural","The students' projects filled the hallway."],

    ["leaves","plural-f","Leaves covered the garden path."],
    ["wolves","plural-f","Wolves howled beyond the ridge."],
    ["knives","plural-f","The knives were stored in a wooden block."],
    ["wives","plural-f","The wives greeted the sailors at the harbor."],
    ["lives","plural-f","The firefighters saved many lives."],
    ["calves","plural-f","The calves stayed close to the fence."],
    ["halves","plural-f","Cut the orange into halves."],
    ["shelves","plural-f","The shelves held jars of jam."],
    ["elves","plural-f","The elves in the story guarded the forest."],
    ["loaves","plural-f","Fresh loaves cooled on the bakery rack."],

    ["deer's","possessive-irregular","The deer's tracks led into the woods."],
    ["sheep's","possessive-irregular","The sheep's wool felt thick and soft."],
    ["moose's","possessive-irregular","The moose's antlers looked enormous."],
    ["series","plural-special","The series became more exciting with each book."],
    ["species","plural-special","That species lives near cold mountain streams."],
    ["fish","plural-special","Many fish swam beneath the dock."],
    ["fish's","possessive-irregular","The fish's scales flashed in the sun."],
    ["deer","plural-special","Several deer grazed in the meadow."],
    ["sheep","plural-special","The sheep rested under the tree."],
    ["moose","plural-special","A moose stood near the riverbank."],

    ["heroes","plural-es","The heroes returned at dawn."],
    ["potatoes","plural-es","The potatoes roasted in the oven."],
    ["tomatoes","plural-es","The tomatoes ripened on the vine."],
    ["echoes","plural-es","Echoes bounced across the canyon."],
    ["vetoes","plural-es","The group recorded two vetoes."],
    ["radios","plural-s","The radios crackled with static."],
    ["pianos","plural-s","The pianos stood along the studio wall."],
    ["photos","plural-s","The photos were pinned to the board."],
    ["zoos","plural-s","The zoos opened early for the holiday."],
    ["videos","plural-s","The videos were stored in one folder."]
,
    ["chiefs","plural-s","The chiefs met before the ceremony began."],
    ["roofs","plural-s","Snow covered the roofs of every cabin."],
    ["beliefs","plural-s","Their beliefs shaped the way they lived."],
    ["chief's","possessive-singular","The chief's speech echoed through the hall."],
    ["chiefs'","possessive-plural","The chiefs' tents stood in a circle."],
    ["roof's","possessive-singular","The roof's edge dripped after the storm."],
    ["roofs'","possessive-plural","The roofs' dark lines shone in the rain."],
    ["children's","possessive-irregular","The children's laughter filled the yard."],
    ["women's","possessive-irregular","The women's voices rose in song."],
    ["men's","possessive-irregular","The men's boots lined the porch."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A12_plurals-possessives",
      code: "A12",
      title: "A12 — Plurals & Possessives",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "Plural words name more than one. Possessive words show ownership. Writers must notice whether they need more than one thing, ownership, or both."
    },

    teaching_cards: [
      {
        title: "plurals and possessives",
        rule:
          "Plural words name more than one. Possessive words show ownership. Add -s or -es for many plurals, change y to ies when needed, and use apostrophes carefully for possessives.",
        why:
          "Writers need to show clearly whether they mean one thing, many things, or ownership. Readers depend on these endings to understand the sentence correctly.",
        whenToUse:
          "Use plurals when there is more than one person, place, or thing. Use possessives when something belongs to someone or something, as in girl's, girls', or children's.",
        whenNotToUse:
          "Do not add an apostrophe just because a word ends in s. Apostrophes show possession, not ordinary plurals. Also watch for irregular plurals like children and special plurals like deer and sheep.",
        examples: [
          "cat becomes cats",
          "box becomes boxes",
          "baby becomes babies",
          "girl's means one girl owns something",
          "girls' means more than one girl owns something",
          "children's means children own something"
        ],
        nearMisses: [
          "apple's",
          "banana's",
          "book's",
          "deers",
          "sheeps",
          "childs"
        ],
        nearMissesDetailed: [
          {
            word: "apple's",
            reason: "This looks plural, but the apostrophe makes it possessive instead of a simple plural."
          },
          {
            word: "banana's",
            reason: "This looks like more than one banana, but the apostrophe is incorrect for a regular plural."
          },
          {
            word: "book's",
            reason: "This shows one book owning something, not more than one book."
          },
          {
            word: "deers",
            reason: "Deer is already the plural form in this meaning, so adding s is incorrect here."
          },
          {
            word: "sheeps",
            reason: "Sheep is already the plural form, so adding s is incorrect."
          },
          {
            word: "childs",
            reason: "Children is the irregular plural, so childs is incorrect."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a12_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} uses the ${pattern} pattern. Decide whether the sentence needs more than one, ownership, or a special plural form.`
    }))
  };
})();