// Wizard :: 1
// Cleric :: 2
// Druid :: 3
// Ranger :: 4


let spells = [{
    name: "Acid Arrow",
    level: 2,
    description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid.",
    classes: ['Wizard']
  },
  {
    name: "Arcane Eye",
    level: 4,
    description: "You create an invisible, magical eye within range that hovers in the air for the duration.",
    classes: ['Wizard', 'Cleric']
  },
  {
    name: "Barkskin",
    level: 1,
    description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance.",
    classes: ['Druid', 'Ranger']
  },
  {
    name: "Beacon of Hope",
    level: 3,
    description: "This spell bestows hope and vitality",
    classes: ['Cleric']
  }
];

module.exports = spells;