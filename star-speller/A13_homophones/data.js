window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["there","there-their-theyre","Put the basket over there by the door."],
    ["their","there-their-theyre","Their dog waited by the fence."],
    ["they're","there-their-theyre","They're planning a picnic for Saturday."],
    ["to","to-too-two","Please walk to the mailbox with me."],
    ["too","to-too-two","I want to go too."],
    ["two","to-too-two","Two lanterns glowed in the window."],
    ["your","your-youre","Your notebook is under the chair."],
    ["you're","your-youre","You're early for the meeting."],
    ["its","its-its","The bird tucked its head under its wing."],
    ["it's","its-its","It's starting to rain outside."],

    ["here","here-hear","Come sit here beside me."],
    ["hear","here-hear","I could hear thunder in the distance."],
    ["sea","sea-see","The sea looked silver in the moonlight."],
    ["see","sea-see","I can see the lighthouse from here."],
    ["one","one-won","One shell rolled across the table."],
    ["won","one-won","Our team won the final game."],
    ["sun","sun-son","The sun warmed the porch boards."],
    ["son","sun-son","Her son carried the fishing net."],
    ["blue","blue-blew","The blue scarf fluttered in the breeze."],
    ["blew","blue-blew","The wind blew the leaves across the yard."],

    ["new","new-knew","The new path led to the creek."],
    ["knew","new-knew","She knew the answer right away."],
    ["night","night-knight","The night sky filled with stars."],
    ["knight","night-knight","The knight raised a silver shield."],
    ["right","right-write","Turn right at the old oak tree."],
    ["write","right-write","Please write your name on the page."],
    ["pair","pair-pear-pare","A pair of gloves sat on the bench."],
    ["pear","pair-pear-pare","The pear ripened on the windowsill."],
    ["pare","pair-pear-pare","Use the knife to pare the apple."],
    ["mail","mail-male","The mail arrived before lunch today."],

    ["male","mail-male","The male bird had bright red feathers."],
    ["meet","meet-meat","We will meet at the library entrance."],
    ["meat","meet-meat","The soup had meat and vegetables."],
    ["hole","hole-whole","The rabbit vanished into its hole."],
    ["whole","hole-whole","She ate the whole peach."],
    ["dear","dear-deer","My dear friend mailed me a postcard."],
    ["deer","dear-deer","A deer crossed the misty field."],
    ["tail","tail-tale","The fox flicked its tail and ran."],
    ["tale","tail-tale","Grandpa told a tale about the sea."],
    ["flower","flower-flour","A yellow flower opened in the sun."],

    ["flour","flower-flour","Add flour to the bowl slowly."],
    ["way","way-weigh","This is the fastest way home."],
    ["weigh","way-weigh","Weigh the apples before packing them."],
    ["plain","plain-plane","The plain stretched far to the west."],
    ["plane","plain-plane","The plane disappeared into the clouds."],
    ["stair","stair-stare","She sat on the bottom stair."],
    ["stare","stair-stare","Please do not stare at people."],
    ["brake","brake-break","Press the brake before the turn."],
    ["break","brake-break","Let's take a short break now."],
    ["hour","hour-our","The lesson lasted one hour."],

    ["our","hour-our","Our tent stood near the trees."],
    ["allowed","allowed-aloud","We were allowed to stay late."],
    ["aloud","allowed-aloud","Please read the poem aloud."],
    ["board","board-bored","The board leaned against the shed."],
    ["bored","board-bored","He felt bored during the long wait."],
    ["which","which-witch","Which trail leads to the waterfall?"],
    ["witch","which-witch","The witch in the story owned a black cat."],
    ["morning","mourning-morning","Morning light spilled across the floor."],
    ["mourning","mourning-morning","The family wore black in mourning."],
    ["peace","peace-piece","We hope for peace in the region."],

    ["piece","peace-piece","She cut one piece of cake for each guest."],
    ["sale","sale-sail","The store announced a summer sale."],
    ["sail","sale-sail","The white sail filled with wind."],
    ["waist","waist-waste","The belt fit tightly at her waist."],
    ["waste","waist-waste","Do not waste paper on rough copies."],
    ["weather","weather-whether","The weather changed before noon."],
    ["whether","weather-whether","I do not know whether it will rain."],
    ["weak","weak-week","He felt weak after the long hike."],
    ["week","weak-week","We will visit next week."],
    ["steel","steel-steal","The bridge was made of steel."],

    ["steal","steel-steal","It is wrong to steal from others."],
    ["great","great-grate","That was a great idea for the poster."],
    ["grate","great-grate","Please grate the cheese into the bowl."],
    ["road","road-rode","The road curved beside the river."],
    ["rode","road-rode","She rode her bike to school."],
    ["ate","ate-eight","He ate breakfast before sunrise."],
    ["eight","ate-eight","Eight candles glowed on the cake."],
    ["be","be-bee","Please be ready by noon."],
    ["bee","be-bee","A bee hovered over the flower bed."],
    ["ring","wring-ring","The bell made a sharp ring through the hall."],

    ["wring","wring-ring","Wring the water from the cloth carefully."],
    ["know","know-no","I know the answer to that question."],
    ["no","know-no","No one touched the model on the table."],
    ["buy","buy-by-bye","We will buy peaches at the market."],
    ["by","buy-by-bye","The lantern hung by the doorway."],
    ["bye","buy-by-bye","She waved and said bye before leaving."],
    ["wood","wood-would","The table was made of polished wood."],
    ["would","wood-would","I would help if I could."],
    ["cent","cent-scent-sent","He found a cent on the sidewalk."],
    ["scent","cent-scent-sent","The scent of pine filled the room."]
,
    ["sent","cent-scent-sent","She sent the letter before noon."],
    ["ate","ate-eight","He ate breakfast before sunrise."],
    ["eight","ate-eight","Eight lanterns lined the garden wall."],
    ["sale","sale-sail","The shop announced a weekend sale."],
    ["sail","sale-sail","The white sail caught the wind."],
    ["peace","peace-piece","We hope for peace in the valley."],
    ["piece","peace-piece","She cut one piece of cake for each guest."],
    ["allowed","allowed-aloud","We were allowed to stay after class."],
    ["aloud","allowed-aloud","Please read the poem aloud."],
    ["scene","seen-scene","The final scene made the audience cheer."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A13_homophones",
      code: "A13",
      title: "A13 — Homophones",
      gradeBand: "3-5",
      difficulty: 4,
      ruleSummary:
        "Homophones are words that sound the same but have different spellings and meanings."
    },

    teaching_cards: [
      {
        title: "homophones",
        rule:
          "Homophones are words that sound the same but have different spellings and meanings. Writers must choose the spelling that matches the meaning of the sentence.",
        why:
          "Homophones can confuse readers if the wrong spelling is used. Careful writers think about meaning, not just sound.",
        whenToUse:
          "Use homophone knowledge when two or more words sound alike. Read the whole sentence and ask what the word means before choosing the spelling.",
        whenNotToUse:
          "Do not choose a spelling just because it sounds right. Many homophones sound identical, so the sentence meaning must guide the choice.",
        examples: [
          "their shows belonging",
          "there names a place",
          "they're means they are",
          "to shows direction",
          "too means also",
          "two names the number"
        ],
        nearMisses: [
          "ther",
          "yore",
          "news",
          "bleu",
          "seaweed",
          "knite"
        ],
        nearMissesDetailed: [
          {
            word: "ther",
            reason: "This sounds close to there in a rushed pronunciation, but it is not the correct homophone spelling."
          },
          {
            word: "yore",
            reason: "Yore is a real word, but it is not the same as your or you're."
          },
          {
            word: "news",
            reason: "This begins like new, but it is a different word and not part of that homophone pair."
          },
          {
            word: "bleu",
            reason: "This may look like blue, but it is not the standard English spelling for the color."
          },
          {
            word: "seaweed",
            reason: "This contains sea, but it is not the simple homophone pair sea/see."
          },
          {
            word: "knite",
            reason: "This sounds like knight or night, but it is not the correct spelling of either word."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a13_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} is part of the homophone set ${pattern}. Use the sentence meaning to choose the correct spelling.`
    }))
  };
})();