// Wizard :: 1
// Cleric :: 2
// Druid :: 3
// Ranger :: 4


let spells = [{
    name: "Vinegar Arrow",
    level: 2,
    description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid.",
    classes: ['Wizard']
  },
  {
    name: "Floating Eye",
    level: 4,
    description: "You create an invisible, magical eye within range that hovers in the air for the duration.",
    classes: ['Wizard', 'Cleric']
  },
  {
    name: "Treeskin",
    level: 1,
    description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance.",
    classes: ['Druid', 'Ranger']
  },
  {
    name: "Ray of Sunshine",
    level: 3,
    description: "This spell bestows hope and vitality",
    classes: ['Cleric']
  },
  { 
    name: "Blind or Deaf?",
    level: 2,
    description: "Victim has a 50% chance of going temporarily blind and a seperate 50% chance of going temporarily deaf.",
    classes: ['Bard', 'Cleric', 'Sorcerer', 'Wizard']
  }
];

module.exports = spells;