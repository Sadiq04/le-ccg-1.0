export default [
    [{
        cardName: "Angry Peasants",
        cardBaseHealth: 3,
        cardEffect: "Damage",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardEffectValue: 2,
        cardRarity: "Bronze",
        get cardDescription() {return `Damages an enemy by ${this.cardEffectValue}.`}
    },
    {
        cardName: "Novice Healer",
        cardBaseHealth: 2,
        cardEffect: "Boost",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Ally",
        cardEffectValue: 4,
        cardRarity: "Bronze",
        get cardDescription() {return `Boosts an ally by ${this.cardEffectValue}.`}
    },
    {
        cardName: "Sleeping Golem",
        cardBaseHealth: 7,
        cardEffect: "",
        cardEffectValue: 0,
        cardRarity: "Bronze",
        get cardDescription() {return `Sits there menacingly.`}
    },
    {
        cardName: "Military Drummer",
        cardBaseHealth: 2,
        cardEffect: "Engine",
        cardEngineType: "Boost",
        cardEngineTarget: "Right",
        cardEngineValue: 1,
        cardRarity: "Bronze",
        get cardDescription() {return `At the end of every allied turn boosts the unit to the right by ${this.cardEngineValue}`}
    },
    {
        cardName: "Sacrificial Cultist",
        cardBaseHealth: 4,
        cardEffect: "Engine",
        cardEngineType2: "Damage",
        cardEngineTarget2: "Random",
        cardTargetUnitType2: "Enemy",
        cardEngineValue2: 0,
        cardEngineType: "Damage",
        cardEngineTarget: "Adjacent",
        cardEngineCondition: "Adjacent Allies",
        cardEngineValue: 1,
        cardRarity: "Bronze",
        get cardDescription() {return `At the end of every allied turn damages adjacent units by ${this.cardEngineValue} then damages a random enemy unit by 1 for each adjacent unit.`}
    },
    {
        cardName: "Lone Mercenary",
        cardBaseHealth: 3,
        cardEffect: "Engine",
        cardEngineType: "Boost",
        cardEngineTarget: "Self",
        cardEngineCondition: "Outnumbered",
        cardEngineValue: 2,
        cardRarity: "Bronze",
        get cardDescription() {return `At the end of every allied turn boosts self by ${this.cardEngineValue} if the opponent has more units than you.`}
    },
    {
        cardName: "Info Broker",
        cardBaseHealth: 4,
        cardEffect: "Reveal",
        cardEffectTarget: "Random",
        cardEffectValue: 1,
        cardRarity: "Bronze",
        get cardDescription() {return `Reveals a random card from the opponent's hand.`}
    },
    {
        cardName: "Lowly Vampire",
        cardBaseHealth: 3,
        cardEffect: "Status",
        cardStatus: "Bleeding",
        cardStatusDuration: 4,
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardRarity: "Bronze",
        get cardDescription() {return `Applies ${this.cardStatusDuration} turns of ${this.cardStatus} to an enemy`}
    },
    {
        cardName: "Medical Scholar",
        cardBaseHealth: 2,
        cardEffect: "Status",
        cardStatus: "Vitality",
        cardEffectTarget: "Adjacent",
        cardStatusDuration: 3,
        cardRarity: "Bronze",
        get cardDescription() {return `Gives adjacent units ${this.cardStatus} for ${this.cardStatusDuration} turns.`}
    },
    {
        cardName: "Loyal Infantry",
        cardBaseHealth: 6,
        cardEffect: "Damage Bond",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Ally",
        cardRarity: "Bronze",
        get cardDescription() {return `Takes damage instead of a chosen allied unit.`}
    },
    {
        cardName: "Royal Guard",
        cardBaseHealth: 4,
        cardEffect: "Status",
        cardStatus: "Shield",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Ally",
        cardRarity: "Bronze",
        get cardDescription() {return `Gives shield to an allied unit.`}
    },
    {
        cardName: "Fire Magic Adept",
        cardBaseHealth: 4,
        cardEffect: "Adjacent Damage",
        cardEffectTarget: "Manual",
        cardEffectValue: 1,
        cardTargetUnitType: "Enemy",
        cardRarity: "Bronze",
        get cardDescription() {return `Damages an enemy unit and units adjacent to it by ${this.cardEffectValue}.`}
    },
    {
        cardName: "Ice Magic Adept",
        cardBaseHealth: 4,
        cardEffect: "Status",
        cardStatus: "Freeze",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardRarity: "Bronze",
        get cardDescription() {return `Freezes an enemy unit.`}
    },
    {
        cardName: "Double Spy",
        cardBaseHealth: 10,
        cardEffect: "Boost",
        cardEffectTarget: "Manual",
        cardEffectValue: 3,
        cardTargetUnitType: "Enemy",
        cardRarity: "Bronze",
        get cardDescription() {return `Boosts an enemy unit by ${this.cardEffectValue}.`}
    },
    {
        cardName: "Cursed Knight",
        cardBaseHealth: 9,
        cardEffect: "Engine",
        cardEngineType: "Boost",
        cardEngineTarget: "Random",
        cardTargetUnitType: "Enemy",
        cardEngineCondition: "Damage Taken",
        cardEngineValue: 0,
        cardRarity: "Bronze",
        get cardDescription() {return `At the end of each turn boost a random enemy unit by the amount this unit was damaged.`}
    },
    {
        cardName: "Hungry Bear",
        cardBaseHealth: 5,
        cardEffect: "Consume",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Ally",
        cardRarity: "Bronze",
        get cardDescription() {return `Eats an allied unit, boosting its own health by that units health and goes right back to its sleep.`}
    },
    {
        cardName: "Ghoul",
        cardBaseHealth: 1,
        cardEffect: "Grave Consume",
        cardRarity: "Bronze",
        get cardDescription() {return `Eats a unit from your graveyard and boosts its own health.`}
    },
    {
        cardName: "Reckless Bandit",
        cardBaseHealth: 6,
        cardEffect: "Damage",
        cardEffectTarget: "Manual",
        cardEffectValue: 3,
        cardEffect2: "Damage",
        cardEffectTarget2: "Self",
        cardEffectValue2: 3,
        cardTargetUnitType: "Enemy",
        cardRarity: "Bronze",
        get cardDescription() {return `Damages itself and an enemy unit by ${this.cardEffectValue}.`}
    },
    {
        cardName: "High Stakes Gambler",
        cardBaseHealth: 1,
        cardEffect: "Boost",
        cardEffectTarget: "Self",
        cardEffectValue: 0,
        cardEffectCondition: "Random",
        cardRandomness1: 1,
        cardRandomness2: 10,
        cardRarity: "Bronze",
        get cardDescription() {return `Sets its health to a random amount between ${this.cardRandomness1} and ${this.cardRandomness2}.`}
    },
    {
        cardName: "Fiery Warrior",
        cardBaseHealth: 4,
        cardEffect: "Engine",
        cardEngineType: "Damage",
        cardEngineTarget: "Random",
        cardTargetUnitType: "Enemy",
        cardEngineCondition: "Received Boost",
        cardEngineValue: 0,
        cardRarity: "Bronze",
        get cardDescription() {return `At the end of each turn damage a random enemy by the number of times this unit was boosted.`}
    },
    {
        cardName: "Bruxa",
        cardBaseHealth: 1,
        cardEffect: "Status",
        cardStatus: "Bleeding",
        cardStatusDuration: 4,
        cardEffectTarget: "Random",
        cardTargetUnitType: "Enemy",
        cardEffect2: "Status",
        cardStatus2: "Bleeding",
        cardStatusDuration2: 4,
        cardEffectTarget2: "Random",
        cardTargetUnitType2: "Enemy",
        cardRarity: "Bronze",
        get cardDescription() {return `Gives ${this.cardStatusDuration} turns of bleeding to 2 random enemies.`}
    }],
    [{
        cardName: "Cult Chief",
        cardBaseHealth: 6,
        cardEffect: "Engine",
        cardEngineType: "Damage",
        cardEngineTarget: "Random",
        cardTargetUnitType: "Enemy",
        cardEngineCondition: "Damaged Allies",
        cardEngineValue: 0,
        cardRarity: "Silver",
        get cardDescription() {return `At the end of each turn damage an enemy unit by the number of allied units damaged this turn.`}
    },
    {
        cardName: "Triple Spy",
        cardBaseHealth: 5,
        cardEffect: "Engine",
        cardEngineType: "Boost",
        cardEngineTarget: "Self",
        cardEngineValue: 0,
        cardEngineCondition: "Enemy Boosted",
        cardRarity: "Silver",
        get cardDescription() {return `Whenever an enemy unit gets boosted boosts self by that same amount.`}
    },
    {
        cardName: "Professional Informant",
        cardBaseHealth: 6,
        cardEffect: "Reveal",
        cardEffectTarget: "Random",
        cardEffectValue: 3,
        cardRarity: "Silver",
        get cardDescription() {return `Reveals ${this.cardEffectValue} random cards from the opponent's hand.`}
    },
    {
        cardName: "Higher Vampire",
        cardBaseHealth: 5,
        cardEffect: "Status",
        cardStatus: "Adjacent Bleeding",
        cardStatusDuration: 4,
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardRarity: "Silver",
        get cardDescription() {return `Applies ${this.cardStatusDuration} turns of bleeding to an enemy unit and units adjacent to it.`}
    },
    {
        cardName: "Protector Mage",
        cardBaseHealth: 6,
        cardEffect: "Unkillable",
        cardEffectTarget: "Left",
        cardRarity: "Silver",
        get cardDescription() {return `Nullifies damage taken by the allied unit to the left.`}
    },
    {
        cardName: "Master of Disguise",
        cardBaseHealth: 4,
        cardEffect: "Trade Place",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardRarity: "Silver",
        get cardDescription() {return `Changes its position with an enemy unit.`}
    },
    {
        cardName: "Corpse Parasite",
        cardBaseHealth: 1,
        cardEffect: "Copy Grave Unit",
        cardRarity: "Silver",
        get cardDescription() {return `Becomes a copy of a unit from your graveyard.`}
    },
    {
        cardName: "Expert Manipulator",
        cardBaseHealth: 2,
        cardEffect: "Play Card",
        playedCard: "Enemy Top Deck",
        cardRarity: "Silver",
        get cardDescription() {return `Plays the top unit from your opponent's deck.`}
    },
    {
        cardName: "Military Band",
        cardBaseHealth: 7,
        cardEffect: "Engine",
        cardEngineType: "Boost",
        cardEngineTarget: "Adjacent",
        cardEngineValue: 1,
        cardRarity: "Silver",
        get cardDescription() {return `At the end of each allied turn boosts adjacent units by 1.`}
    },
    {
        cardName: "Military Commander",
        cardBaseHealth: 6,
        cardEffect: "Boost",
        cardEffectTarget: "All Allies",
        cardEffectValue: 1,
        cardRarity: "Silver",
        get cardDescription() {return `Boosts all allied units by ${this.cardEffectValue}.`}
    },
    {
        cardName: "Soul Mage",
        cardBaseHealth: 4,
        cardEffect: "Damage",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardEffectValue: 0,
        cardEffectCondition: "Right Unit Health",
        cardRarity: "Silver",
        get cardDescription() {return `Damages an enemy unit by the health of the unit to the right.`}
    },
    {
        cardName: "Bounty Hunter",
        cardBaseHealth: 6,
        cardEffect: "Removal",
        cardRemovalCondition: "Above Value",
        cardRemovalConditionValue: 7,
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardRarity: "Silver",
        get cardDescription() {return `Destroys an enemy unit if the unit has more than ${this.cardRemovalConditionValue} health.`}
    },
    {
        cardName: "Hungry Vampire",
        cardBaseHealth: 6,
        cardEffect: "Removal",
        cardRemovalCondition: "Bleeding Enemy Health",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Enemy",
        cardRarity: "Silver",
        get cardDescription() {return `Destroys an enemy unit with bleeding and boosts itself by that units amount.`}
    }],
    [{
        cardName: "Dragon",
        cardBaseHealth: 9,
        cardEffect: "Engine",
        cardEngineType: "Removal",
        cardEngineTarget: "Lowest Health Enemy",
        cardEngineCondition: "Outnumbered",
        cardRarity: "Gold",
        get cardDescription() {return `At the end of each allied turn if the opponent has more units than you, destroys the enemy unit with the lowest health.`}
    },
    {
        cardName: "Earth Mage",
        cardBaseHealth: 4,
        cardEffect: "Damage",
        cardEffectTarget: "All Enemies",
        cardEffectValue: 2,
        cardRarity: "Gold",
        get cardDescription() {return `Damages all enemy units by ${this.cardEffectValue}.`}
    },
    {
        cardName: "Frontline Cavalry",
        cardBaseHealth: 3,
        cardEffect: "Boost",
        cardEffectTarget: "Self",
        cardEffectValue: 0,
        cardEffectCondition: "Twice The Number Of Card In Hand",
        cardRarity: "Gold",
        get cardDescription() {return `Boosts itself by twice the number of cards in your hand.`}
    },
    {
        cardName: "Elder Vampire",
        cardBaseHealth: 4,
        cardEffect: "Status",
        cardStatus: "Bleeding",
        cardStatusDuration: 1,
        cardEffectTarget: "All Enemies",
        cardEffect2: "Engine",
        cardEngineType: "Boost",
        cardEngineTarget: "Self",
        cardEngineValue: 0,
        cardEngineCondition: "Number Of Enemy Units With Bleeding",
        cardRarity: "Gold",
        get cardDescription() {return `Gives bleeding to all enemies for 1 turn and at the end of every allied turn boosts itself by the number of enemy units with bleeding.`}
    },
    {
        cardName: "Bribery Specialist",
        cardBaseHealth: 5,
        cardEffect: "Play Card",
        playedCard: "Revealed Card In Opponent Hand",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Opponent Hand",
        cardRarity: "Gold",
        get cardDescription() {return `Plays a revealed enemy unit from the opponents hand.`}
    },
    {
        cardName: "Master Equalizer",
        cardBaseHealth: 5,
        cardEffect: "Set Health",
        cardEffectTarget: "All Units",
        cardEffectValue: 3,
        cardRarity: "Gold",
        get cardDescription() {return `Sets the health of all other units to ${this.cardEffectValue}.`}
    },
    {
        cardName: "Blizzard Conjurer",
        cardBaseHealth: 7,
        cardEffect: "Status",
        cardStatus: "Freeze",
        cardEffectTarget: "All Enemies",
        cardRarity: "Gold",
        get cardDescription() {return `Freezes all enemy units.`}
    },
    {
        cardName: "Portal Master",
        cardBaseHealth: 2,
        cardEffect: "Play Card",
        playedCard: "Any Card From Own Deck",
        cardRarity: "Gold",
        get cardDescription() {return `Plays a card of choice from the deck.`}
    },
    {
        cardName: "Light Mage",
        cardBaseHealth: 5,
        cardEffect: "Boost",
        cardEffectTarget: "Manual",
        cardTargetUnitType: "Ally",
        cardEffectValue: 0,
        cardEffectCondition: "Twice The Number Of Cards In Deck",
        cardRarity: "Gold",
        get cardDescription() {return `Boosts an allied unit by twice the number of cards in your deck.`}
    },
    {
        cardName: "Passive Titan",
        cardBaseHealth: 15,
        cardEffect: "",
        cardRarity: "Gold",
        get cardDescription() {return `Sits there very menacingly.`}
    }],
]
