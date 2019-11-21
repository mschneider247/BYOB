// Wizard :: 1
// Cleric :: 2
// Druid :: 3
// Ranger :: 4


let spells = [{
    name: "Acid Arrow",
    level: 2,
    description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
    classes: [1]
  },
  {
    name: "Arcane Eye",
    level: 4,
    description: "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it cannot enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
    classes: [1, 2]
  },
  {
    name: "Barkskin",
    level: 1,
    description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.",
    classes: [3, 4]
  }
];

module.exports = spells;