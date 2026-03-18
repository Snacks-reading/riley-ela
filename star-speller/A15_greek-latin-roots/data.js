window.RR_LESSON_DATA = (function () {
  const WORD_BANK = [
    ["transport","trans","The truck will transport supplies to the camp."],
    ["transatlantic","trans","The ship began a transatlantic voyage."],
    ["transform","trans","The story can transform the way we think."],
    ["triangle","tri","A triangle has three sides."],
    ["tricycle","tri","The tricycle rolled across the driveway."],
    ["tripod","tri","The camera sat on a sturdy tripod."],
    ["bicycle","bi","Her bicycle leaned against the porch rail."],
    ["bilingual","bi","The guide was bilingual and spoke both languages."],
    ["biweekly","bi","The paper came out on a biweekly schedule."],
    ["aquarium","aqua","The aquarium glowed blue in the corner."],

    ["aquatic","aqua","We studied aquatic plants in science class."],
    ["aqueduct","aqua","The old aqueduct carried water into the city."],
    ["telephone","tele","The telephone rang just before dinner."],
    ["television","tele","The television was too loud during homework."],
    ["telescope","tele","The telescope pointed toward the moon."],
    ["telegraph","tele","The museum displayed an old telegraph machine."],
    ["microphone","micro","The singer held the microphone close."],
    ["microscope","micro","The microscope showed the tiny cell clearly."],
    ["microchip","micro","The microchip powered the small device."],
    ["autograph","auto","She asked the author for an autograph."],

    ["automobile","auto","The automobile museum displayed a red coupe."],
    ["autopilot","auto","The plane switched to autopilot during the flight."],
    ["autobiography","auto","The autobiography told the actor's life story."],
    ["biology","bio","Biology explains how living things grow."],
    ["biography","bio","The biography described the explorer's life."],
    ["geology","geo","Geology studies rocks and the earth."],
    ["geography","geo","Geography class used a map of the world."],
    ["geometry","geo","Geometry helps us study shapes and space."],
    ["thermometer","therm","The thermometer showed a sudden drop in temperature."],
    ["thermostat","therm","Dad adjusted the thermostat before bed."],

    ["thermometer","therm","The thermometer rested on the windowsill."],
    ["heat","therm","The heat from the fire warmed the room."],
    ["spectator","spect","Each spectator cheered from the bleachers."],
    ["inspect","spect","Please inspect the model before turning it in."],
    ["respect","spect","We show respect by listening carefully."],
    ["spectacle","spect","The fireworks were a bright spectacle."],
    ["construction","struct","Construction began on the new bridge."],
    ["instruct","struct","The coach will instruct the team today."],
    ["structure","struct","The structure stood firm in the wind."],
    ["destruction","struct","The storm caused destruction along the shore."],

    ["portable","port","The portable speaker fit in my bag."],
    ["transport","port","The van will transport the instruments to school."],
    ["export","port","The farm began to export fruit overseas."],
    ["import","port","The shop will import candles from abroad."],
    ["report","port","Please report the broken step to the office."],
    ["viewer","vid-vis","The viewer watched the film in silence."],
    ["video","vid-vis","We recorded the concert on video."],
    ["vision","vid-vis","Her vision blurred in the bright snow."],
    ["visible","vid-vis","The lighthouse was visible from the cliff."],
    ["invisible","vid-vis","The tiny thread looked almost invisible."],

    ["scribble","scrib-script","He left a scribble in the margin."],
    ["describe","scrib-script","Please describe the scene in detail."],
    ["prescription","scrib-script","The doctor wrote a prescription."],
    ["manuscript","scrib-script","The author mailed the manuscript to the editor."],
    ["script","scrib-script","The actors studied the script carefully."],
    ["audience","aud","The audience grew quiet before the show."],
    ["audio","aud","The audio recording sounded clear."],
    ["audible","aud","The bell was barely audible in the wind."],
    ["audition","aud","She practiced for the choir audition."],
    ["dictate","dict","The teacher will dictate the sentence slowly."],

    ["dictionary","dict","The dictionary lay open on the desk."],
    ["predict","dict","Can you predict what happens next?"],
    ["verdict","dict","The jury returned a verdict at sunset."],
    ["contradict","dict","These clues contradict the first report."],
    ["century","cent","The castle was built a century ago."],
    ["centimeter","cent","The ruler showed one centimeter clearly."],
    ["bicentennial","cent","The city planned a bicentennial parade."],
    ["percent","cent","Ninety percent of the class finished early."],
    ["manual","man","The manual explained how to assemble the desk."],
    ["manufacture","man","The factory will manufacture the new parts."],

    ["manuscript","man","The dusty manuscript rested in a glass case."],
    ["pedal","ped","She pressed the pedal with her foot."],
    ["pedestrian","ped","A pedestrian crossed at the corner."],
    ["podium","ped","The speaker stood at the podium."],
    ["expedition","ped","The expedition crossed the frozen valley."],
    ["library","liber","The library stayed open late on Thursday."],
    ["liberty","liber","The statue became a symbol of liberty."],
    ["deliver","liber","Please deliver the note to the office."],
    ["annual","ann","The school hosts an annual festival."],
    ["anniversary","ann","Their anniversary dinner was by candlelight."],

    ["periscope","scope","The submarine lifted its periscope above the waves."],
    ["microscope","scope","The microscope helped us see tiny details."],
    ["telescope","scope","The telescope pointed toward Jupiter."],
    ["scope","scope","The project was outside the scope of the lesson."],
    ["chronology","chron","The timeline showed the chronology of events."],
    ["synchronize","chron","The dancers tried to synchronize their steps."],
    ["chronicle","chron","The old book became a chronicle of the town."],
    ["telephone","phon","The telephone rang twice."],
    ["phonics","phon","Phonics helps readers match sounds to letters."],
    ["symphony","phon","The symphony filled the hall with music."]
,
    ["auditorium","aud","The auditorium filled before the concert began."],
    ["auditory","aud","The lesson focused on auditory memory."],
    ["transmission","trans","The transmission reached the control room."],
    ["geothermal","geo-therm","The region used geothermal heat underground."],
    ["microscopic","micro","The fibers looked microscopic under the lens."],
    ["telephoto","tele","The telephoto lens captured the distant bird."],
    ["biodegradable","bio","The biodegradable cup broke down naturally."],
    ["inspectors","spect","The inspectors checked every beam carefully."],
    ["portable","port","The portable speaker fit in my backpack."],
    ["audible","aud","The bell was barely audible in the wind."]
  ];

  function blankSentence(sentence, answer) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sentence.replace(new RegExp(`\\b${escaped}\\b`, "i"), "______");
  }

  return {
    lesson: {
      categoryId: "star-speller",
      lessonId: "A15_greek-latin-roots",
      code: "A15",
      title: "A15 — Greek & Latin Roots",
      gradeBand: "3-5",
      difficulty: 5,
      ruleSummary:
        "Greek and Latin roots are meaningful word parts that help readers unlock the meaning and spelling of larger words."
    },

    teaching_cards: [
      {
        title: "greek and latin roots",
        rule:
          "Greek and Latin roots are meaningful word parts found inside larger words. Learning roots helps readers understand word meaning, spelling, and word families.",
        why:
          "Many academic and advanced words are built from roots. Knowing roots helps readers decode big words and helps writers spell them more accurately.",
        whenToUse:
          "Use root knowledge when you spot a familiar meaning part inside a longer word, as in transport, microscope, geography, inspect, or dictionary.",
        whenNotToUse:
          "Do not force a root into every word that looks similar. Some words may contain similar letters without actually being built from the same root in a helpful way.",
        examples: [
          "tele means far",
          "bio means life",
          "geo means earth",
          "micro means small",
          "struct means build",
          "dict means say"
        ],
        nearMisses: [
          "microwave",
          "telephonebook",
          "man",
          "porthole",
          "heat",
          "scopey"
        ],
        nearMissesDetailed: [
          {
            word: "microwave",
            reason: "This begins with micro, but the lesson focuses on true root meaning and word family connections, not just any familiar beginning letters."
          },
          {
            word: "telephonebook",
            reason: "This contains telephone, but it is a combined everyday compound word rather than the main kind of academic root example in this lesson."
          },
          {
            word: "man",
            reason: "This is a full word, not always a Latin root example to analyze in this lesson."
          },
          {
            word: "porthole",
            reason: "This contains port, but here port is part of a whole word meaning rather than the transport root family focus."
          },
          {
            word: "heat",
            reason: "This relates to temperature, but it is not built from the therm root in this lesson."
          },
          {
            word: "scopey",
            reason: "This looks as if it has the root scope, but it is not a correct academic root word."
          }
        ]
      }
    ],

    practice_items: WORD_BANK.map(([answer, pattern, sentence], i) => ({
      id: `a15_${String(i + 1).padStart(3, "0")}`,
      answer,
      fullSentence: sentence,
      blankSentence: blankSentence(sentence, answer),
      spokenPrompt: `Spell the word ${answer}.`,
      reteach: `${answer} includes the root pattern ${pattern}. Look for the meaningful word part inside the larger word.`
    }))
  };
})();