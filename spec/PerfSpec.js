!(function (boggle, console) {
  "use strict";
  var wordList =[
    "AARDVARK",
    "ABREAST",
    "ACCEPTABILITY",
    "ACHOO",
    "ADAPTABILITY",
    "ADO",
    "AERIE",
    "AGEIST",
    "AIRILY",
    "ALKALI",
    "ALTERABLE",
    "AMETHYST",
    "ANALYSAND",
    "ANIMATED",
    "ANTHROPOLOGICAL",
    "ANTONYM",
    "APPEASEMENT",
    "AQUATIC",
    "ARIA",
    "ARTIFICER",
    "ASSEMBLY",
    "ASUNDER",
    "ATYPICALLY",
    "AUTOMATIZE",
    "AYATOLLAH",
    "BACTERIUM",
    "BANALLY",
    "BARK",
    "BATHE",
    "BEAUTICIAN",
    "BEGRUDGE",
    "BENEVOLENCE",
    "BEWHISKERED",
    "BILLIARD",
    "BISTRO",
    "BLEAK",
    "BLOODTHIRSTY",
    "BOBBYSOXER",
    "BOOBOO",
    "BOTTLE",
    "BRAID",
    "BREATHLESSNESS",
    "BROADCLOTH",
    "BUBBLE",
    "BUMPER",
    "BUSHMAN",
    "CACHE",
    "CALLIGRAPHIST",
    "CANNABIS",
    "CAPTIVATION",
    "CAROLLER",
    "CASUISTIC",
    "CAUSTICITY",
    "CENTIGRADE",
    "CHAMPAGNE",
    "CHASTENESS",
    "CHEVRON",
    "CHIVES",
    "CHUMMINESS",
    "CITRON",
    "CLEANSE",
    "CLOISONNE",
    "COBBLE",
    "COGNIZABLE",
    "COLLUDE",
    "COMMA",
    "COMPARABLE",
    "COMPREHENSIVELY",
    "CONCRETELY",
    "CONFISCATOR",
    "CONNECTIBLE",
    "CONSTABULARY",
    "CONTESTABLE",
    "CONVENIENTLY",
    "COPRA",
    "CORRESPOND",
    "COUNTABLE",
    "COWBELL",
    "CRAW",
    "CRICKET",
    "CROUPY",
    "CULLENDER",
    "CURSORY",
    "DAB",
    "DARKLY",
    "DEATHLIKE",
    "DECLAIM",
    "DEFECTIVENESS",
    "DEJECT",
    "DEMOCRATIC",
    "DEPEND",
    "DESALINATE",
    "DESTRUCTIVELY",
    "DEVOTIONAL",
    "DIDACTICALLY",
    "DIN",
    "DISARMAMENT",
    "DISCREDITABLY",
    "DISINCLINED",
    "DISPROOF",
    "DISTINCTIVELY",
    "DIXIELAND",
    "DOMINANT",
    "DOVECOTE",
    "DRASTICALLY",
    "DROSS",
    "DUMMY",
    "EAR",
    "ECONOMIZE",
    "EFFUSIVELY",
    "ELECTROLYTE",
    "EMBANKMENT",
    "EMPLOYABLE",
    "ENDOGENOUS",
    "ENQUIRE",
    "ENVELOPMENT",
    "EQUIPOISE",
    "ESPECIAL",
    "EURO",
    "EXAMINATION",
    "EXEMPLIFICATION",
    "EXPEDITIOUSNESS",
    "EXTENDER",
    "EYELASH",
    "FALL",
    "FASCICLE",
    "FEATHERBEDDING",
    "FERTILE",
    "FIELDWORK",
    "FINIAL",
    "FIXATION",
    "FLATTERINGLY",
    "FLOORBOARD",
    "FLYSWATTER",
    "FOPPISH",
    "FOREWOMAN",
    "FORTUNETELLING",
    "FRAUDULENCE",
    "FRIGHTFULNESS",
    "FUGAL",
    "FUSELAGE",
    "GALVANIZE",
    "GASTRONOMIC",
    "GENERICALLY",
    "GERUND",
    "GIVING",
    "GLOPPY",
    "GOITRE",
    "GRACIOUS",
    "GRATEFUL",
    "GRIMACE",
    "GRUBSTAKE",
    "GUNNY",
    "HAH",
    "HANDCUFFS",
    "HARDSCRABBLE",
    "HAUNTED",
    "HEARSE",
    "HEIST",
    "HEREIN",
    "HIGHBALL",
    "HOARFROST",
    "HOMETOWN",
    "HOREHOUND",
    "HOURGLASS",
    "HUMBLER",
    "HYACINTH",
    "HYPODERMIC",
    "IDYLLIC",
    "IMMANENCY",
    "IMPEACHER",
    "IMPOLITE",
    "IMPUNITY",
    "INCIDENCE",
    "INCORPORATION",
    "INDICATE",
    "INEFFABLE",
    "INFERNAL",
    "INGLORIOUS",
    "INNOCENTLY",
    "INSINCERITY",
    "INSULATOR",
    "INTERDICTION",
    "INTERSTITIAL",
    "INVALIDATE",
    "IRIDESCENCE",
    "ISOLATED",
    "JAUNDICE",
    "JOBLESS",
    "JUGFUL",
    "KEG",
    "KING",
    "KOPEK",
    "LAME",
    "LARYNGES",
    "LAXATIVE",
    "LEFTOVERS",
    "LETHAL",
    "LIEGE",
    "LINE",
    "LITHENESS",
    "LOCKS",
    "LOPE",
    "LUCKY",
    "LYNX",
    "MAGNIFIER",
    "MALIGNANTLY",
    "MANLY",
    "MARKETPLACE",
    "MATADOR",
    "MEAD",
    "MEETINGHOUSE",
    "MENSURABLE",
    "METALLURGIST",
    "MICROMETEORITE",
    "MILKSOP",
    "MINTY",
    "MISGUIDED",
    "MITIGATION",
    "MOLLIFICATION",
    "MONOPLANE",
    "MORIBUND",
    "MOUNTAINS",
    "MULLION",
    "MUSICOLOGIST",
    "NADIR",
    "NAUGHT",
    "NEGLIGIBLY",
    "NEVI",
    "NINEPINS",
    "NONBELLIGERENT",
    "NONGRANULAR",
    "NONRIGID",
    "NORTHWARDS",
    "NUDIST",
    "OBDURATELY",
    "OBSTRUCT",
    "OFFENSIVELY",
    "ONCOLOGIST",
    "OPPROBRIOUSLY",
    "ORIGAMI",
    "OUTCRY",
    "OUTVOTE",
    "OVEREXERT",
    "OVERSENSITIVE",
    "PACER",
    "PALLADIUM",
    "PAPERY",
    "PARIETAL",
    "PASSING",
    "PATTY",
    "PEDICURIST",
    "PENTAGONAL",
    "PERILOUS",
    "PERSONALITY",
    "PETULANT",
    "PHONICS",
    "PICTORIALLY",
    "PINKNESS",
    "PLACEBO",
    "PLAYGIRL",
    "PLUSHNESS",
    "POLITICIZED",
    "POOR",
    "POSSIBLY",
    "POWERFULLY",
    "PRECONDITION",
    "PREMISES",
    "PRESSURIZER",
    "PRINCESS",
    "PRODUCTION",
    "PROMISCUOUS",
    "PROSCENIUM",
    "PROVOCATIVE",
    "PUCE",
    "PUPPET",
    "PUZZLING",
    "QUEASY",
    "RABBINIC",
    "RAGS",
    "RAPIDITY",
    "RAW",
    "REASSEMBLE",
    "RECITALIST",
    "RECTILINEAR",
    "REEMBODY",
    "REFURNISH",
    "REINFECTION",
    "REM",
    "REOCCUPATION",
    "REPROACH",
    "RESIDUALS",
    "RESTRAIN",
    "RETROFIRE",
    "REWARD",
    "RIFLING",
    "ROACH",
    "ROOMMATE",
    "RUBBERIZE",
    "RUSTICITY",
    "SAINTLINESS",
    "SANDLOT",
    "SAUCE",
    "SCARCE",
    "SCIENCE",
    "SCRIMSHAW",
    "SEARCHING",
    "SEED",
    "SEMIMONTHLY",
    "SEPARATIST",
    "SEVENTY",
    "SHARD",
    "SHILLING",
    "SHORTEN",
    "SIBLING",
    "SILICOSIS",
    "SISTER",
    "SKULL",
    "SLENDERNESS",
    "SLUT",
    "SNARL",
    "SOAPINESS",
    "SOLIDITY",
    "SORGHUM",
    "SPADICES",
    "SPEECHLESS",
    "SPIRITUALISTIC",
    "SPOTLIT",
    "SQUEALER",
    "STANDARDIZE",
    "STEADFASTLY",
    "STICK",
    "STOLIDLY",
    "STRATAGEM",
    "STRONTIUM",
    "SUBCOMMITTEE",
    "SUBSTRATE",
    "SUGGESTIVE",
    "SUPER",
    "SUPPOSING",
    "SWAIN",
    "SWOOP",
    "SYSTEM",
    "TALK",
    "TARP",
    "TEARGAS",
    "TELLINGLY",
    "TEPIDLY",
    "THANKFULNESS",
    "THIAMIN",
    "THRESH",
    "TIDBIT",
    "TIPPET",
    "TOLLWAY",
    "TORPOR",
    "TOXIN",
    "TRANSDUCER",
    "TRASHINESS",
    "TRICERATOPS",
    "TROOPS",
    "TUBERCULAR",
    "TURTLEDOVE",
    "TYPOGRAPHER",
    "UNAFRAID",
    "UNCAP",
    "UNCONTAMINATED",
    "UNDERHAND",
    "UNDIMINISHED",
    "UNFAILING",
    "UNGULATE",
    "UNISON",
    "UNMOTIVATED",
    "UNPUBLISHED",
    "UNSCREW",
    "UNSURPASSED",
    "UNWILLINGNESS",
    "URBANITY",
    "VAGINAE",
    "VASE",
    "VERACITY",
    "VIBRANCY",
    "VIOLATE",
    "VIVIPAROUS",
    "VULGARIZER",
    "WANT",
    "WATCHTOWER",
    "WEATHERSTRIPPING",
    "WHALER",
    "WHISPERER",
    "WILDCATTER",
    "WINTERIZE",
    "WOMANLIKE",
    "WORKPLACE",
    "WRITTEN",
    "YOGURT",
    "ZYMURGY"
  ];
  console.time("boggle.findWords " + wordList.length);
  boggle.findWords(wordList, boggle.createLetterGrid());
  console.timeEnd("boggle.findWords " + wordList.length);

  console.time("boggle.findWords " + boggle.masterWordList.en.length);
  boggle.findWords(boggle.masterWordList.en, boggle.createLetterGrid());
  console.timeEnd("boggle.findWords " + boggle.masterWordList.en.length);
})(this.boggle, this.console);