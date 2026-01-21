// Riley Reads & Spells — ELA Module Registry (Phase 1)
// Keep this file as the single source of truth for module ordering + routing.

window.RILEY_ELA_REGISTRY = {
  phase: "Phase 1",
  courseLabel: "Module A — Core Spelling Patterns",
  modules: [
    {
      id: "A1",
      title: "Guard the Vowel (CVC Doubling)",
      path: "modules/A1_guard-the-vowel/index.html",
      status: "LOCKED_BASELINE",
      notes: "Locked baseline: Riley_A1_GuardTheVowel_Playable_v1_22_4"
    },
    {
      id: "A1.5",
      title: "FLOSS Rule (End-of-Word Doubling)",
      path: "modules/A1_5_floss/index.html",
      status: "PLANNED",
      notes: "Short-vowel, 1-syllable, end-of-word doubling: f/l/s/z (no suffix)."
    },
    {
      id: "A2",
      title: "Silent-E (Magic-E + Drop-E)",
      path: "modules/A2_silent-e/index.html",
      status: "PLANNED",
      notes: "Magic-E makes vowel long; Drop-E before vowel suffixes; Keep-E when needed."
    },
    {
      id: "A3",
      title: "Vowel Teams (Two Vowels / Teams)",
      path: "modules/A3_vowel-teams/index.html",
      status: "PLANNED",
      notes: "ai/ay, ee/ea, oa/oe, ie/igh, etc. Teach as patterns (not always)."
    },
    {
      id: "A4",
      title: "Y to I",
      path: "modules/A4_y-to-i/index.html",
      status: "PLANNED",
      notes: "cry→cried, baby→babies; not with -ing (play→playing)."
    },
    {
      id: "A5",
      title: "Plurals: S vs ES",
      path: "modules/A5_plurals-s-es/index.html",
      status: "PLANNED",
      notes: "Add -es after s, x, z, ch, sh; /s/ /z/ /iz/ endings."
    },
    {
      id: "A6",
      title: "Soft C and Soft G",
      path: "modules/A6_soft-cg/index.html",
      status: "PLANNED",
      notes: "c→/s/ and g→/j/ before e,i,y; otherwise hard sounds."
    },
    {
      id: "A7",
      title: "Q Needs U",
      path: "modules/A7_qu/index.html",
      status: "PLANNED",
      notes: "qu words (queen/quick/quiet); exceptions later as loanwords."
    },
    {
      id: "A8",
      title: "CK after a short vowel",
      path: "modules/A8_ck/index.html",
      status: "PLANNED",
      notes: "back/duck/trick + boundary cases."
    },
    {
      id: "A9",
      title: "No Double V (V brings an E home)",
      path: "modules/A9_no-double-v/index.html",
      status: "PLANNED",
      notes: "have/give/love; why English words don’t end in v."
    },
    {
      id: "A10",
      title: "F to V (plurals)",
      path: "modules/A10_f-to-v/index.html",
      status: "PLANNED",
      notes: "leaf→leaves, wolf→wolves; teach exceptions (roof→roofs)."
    },
    {
      id: "A11",
      title: "IE/EI Patterns",
      path: "modules/A11_ie-ei/index.html",
      status: "PLANNED",
      notes: "I before E except after C + 'sounds like A' guidance; many exceptions."
    },
    {
      id: "A12",
      title: "CH Sounds",
      path: "modules/A12_ch-sounds/index.html",
      status: "PLANNED",
      notes: "/ch/ (chair), /k/ (school), /sh/ (chef) + word families."
    },
    {
      id: "A13",
      title: "Silent K before N",
      path: "modules/A13_kn/index.html",
      status: "PLANNED",
      notes: "knife/knee/know; silent letters track."
    },
    {
      id: "A14",
      title: "TCH Rule (Catch/Lunch)",
      path: "modules/A14_tch/index.html",
      status: "PLANNED",
      notes: "Use 'tch' after a short vowel for /ch/: match, fetch, stitch."
    },
    {
      id: "A15",
      title: "DGE Rule (Judge)",
      path: "modules/A15_dge/index.html",
      status: "PLANNED",
      notes: "Use 'dge' after a short vowel for /j/: badge, bridge, smudge."
    },
    {
      id: "A16",
      title: "Syllables (Open/Closed, schwa, -le)",
      path: "modules/A16_syllables/index.html",
      status: "PLANNED",
      notes: "Closed vs open syllables; schwa; consonant+le rule."
    }
  ],

  // Sight words are a separate lane so they don't get buried inside rule modules.
  sightWords: {
    sources: ["Dolch (Grades 1–5)", "Fry (1000+)"],
    delivery: "Daily 15–30 min packs + recycle missed only",
    moduleId: "SW1"
  }
};
