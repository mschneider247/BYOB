// Wizard :: 1
// Cleric :: 2
// Druid :: 3
// Ranger :: 4


let spells = [{
    name: "Vinegar Arrow",
    level: 2,
    description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid",
    classes: ['Wizard']
  },
  {
    name: "Floating Eye",
    level: 4,
    description: "You create an invisible, magical eye within range that hovers in the air for the duration",
    classes: ['Wizard', 'Cleric']
  },
  {
    name: "Treeskin",
    level: 1,
    description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance",
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
    description: "Victim has a 50% chance of going temporarily blind and a seperate 50% chance of going temporarily deaf",
    classes: ['Bard', 'Cleric', 'Sorcerer', 'Wizard']
  },
  {
    name: "Fire Hands",
    level: 1,
    description: "A thin sheet of flames shoot from your outstretched hands to a distance of 15 feet",
    classes: ['Sorcerer', 'Wizard']
  },
  {
    name: "Touch of the Grave",
    level: 0,
    description: "A disembodied skeletal hand appears in mid air and smacks the target",
    classes: ['Sorcerer', 'Warlock', 'Wizard']
  },
  {
    name: "Mustard Gas",
    level: 5,
    description: "Create a 20 foot radius cloud of poisonous gas",
    classes: ['Sorcerer', 'Wizard']
  },
  {
    name: "Ass Confetti",
    level: 1,
    description: "Fire a short range burst of disorienting glitter",
    classes: ['Sorcerer', 'Wizard']
  },
  {
    name: "Prayer",
    level: 5,
    description: "Ask your diety three yes or no questions",
    classes: ['Cleric']
  },
  {
    name: "Command",
    level: 1,
    description: "You speak a one word command to a creature you can see",
    class: ['Cleric', 'Paladin']
  },
  {
    name: "One with Nature",
    level: 5,
    description: "Gain knowledge of up to three facts about the surrounding territory",
    classes: ['Druid', 'Ranger']
  },
  {
    name: "Call Animals",
    level: 3,
    description: "Summon any random animals within a 40 foot radius, give them a single word command",
    classes: ['Druid', 'Ranger']
  },
  {
    name: "Long Distance Call",
    level: 5,
    description: "Randomly contact another plane of existence, chance of temporary insanity",
    classes: ['Warlock', 'Wizard']
  },
  {
    name: "Conjure Snacks",
    level: 3,
    description: "Create 45 pounds worth of snacks, delicious, but not very nutritious",
    classes: ['Cleric', 'Druid', 'Paladin']
  },
  {
    name: "Heal Wounds",
    level: 1,
    description: "A creature you touch heals 1d8 worth of damage",
    classes: ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger']
  },
  {
    name: "Read Thoughts",
    level: 2,
    description: "Read the mind of an individual within 30 feet for 30 seconds",
    classes: ['Bard', 'Sorcerer', 'Wizard']
  },
  {
    name: "Annoy Good and Evil",
    level: 5,
    description: "Emit an annoying high pitched whistle that only creatures of good and evil can hear within a range of 400 feet",
    classes: ['Cleric', 'Paladin']
  },
  {
    name: "Enlarge",
    level: 2,
    description: "Touch a willing creature to double its size for 10 minutes",
    classes: ['Sorcerer', 'Wizard']
  },
  {
    name: "Retard",
    level: 8,
    description: "Infect the mind of a creature within sight causing accute retardation for 1d4 hours",
    classes: ['Bard', 'Druid', 'Warlock', 'Wizard']
  },
  {
    name: "Oil Slick",
    level: 1,
    description: "Create a 10 foot square oil slick within 30 feet of the caster",
    classes: ['Wizard']
  },
  {
    name: "Imaginary World",
    level: 4,
    description: "Create a made-up environment in a 150 foot cube. Cannot interact with environment",
    classes: ['Bard', 'Druid', 'Warlock', 'Wizard']
  },
  {
    name: "Meld with Rock",
    level: 3,
    description: "Caster and all their equipment is able to meld with rock their size or larger",
    classes: ['Cleric']
  },
  {
    name: "Portal",
    level: 7,
    description: "Caster and up to six willing creatures will teleport to a random plane of existence",
    classes: ['Cleric', 'Druid', 'Sorcerer', 'Warlock', 'Wizard']
  },
  {
    name: "Emergency Command Hologram",
    level: 6,
    description: "Conjure a holographic Doctor that can dispence advice and medical care for 30 minutes",
    classes: ['Bard', 'Wizard']
  },
  {
    name: "Burst Of Ice",
    level: 0,
    description: "Shoot a streak of ice from your hands. Does 1d8 damage to any creature hit",
    classes: ['Sorcerer', 'Wizard']
  },
  {
    name: "Sanctuary",
    level: 1,
    description: "Ward a single creature of the caster's choice from ranged damage for 5 minutes",
    classes: ['Cleric']
  },
  {
    name: "Silence",
    level: 2,
    description: "Create a 20 foot radius sphere where no sound exists for 5 minutes",
    classes: ['Bard', 'Cleric', 'Ranger']
  },
  {
    name: "Vampire Touch",
    level: 3,
    description: "Castor siphons 1d8 health from any touched creature.  Creature cannot drop below 1 hp",
    classes: ['Warlock', 'Wizard']
  },
  {
    name: "HearthStone",
    level: 6,
    description: "Create a stone that allows the caster and six willing creatures to teleport to where the stone was created",
    classes: ['Cleric']
  }
];

module.exports = spells;