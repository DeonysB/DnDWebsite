const classes = [
    {
        image: 'classes/barbarian.webp',
        title: 'Barbarian',
        description: 'Barbarians are primal warriors who tap into their unbridled fury to gain incredible strength, resilience, and combat prowess. Fueled by rage, they can withstand blows that would fell lesser warriors and deliver devastating attacks with raw power. Their connection to primal spirits or ancestral lines often shapes their rage into something supernatural, granting them abilities like enhanced senses or resistance to magic. They are ideal for frontline combat, charging headfirst into battle with unmatched ferocity.',
    },
    {
        image: 'classes/bard.webp',
        title: 'Bard',
        description: 'Bards are charismatic performers and masters of both magic and lore. They weave spells through music, poetry, or storytelling, inspiring allies and confusing foes. Bards thrive on their versatility, able to heal, buff, and debuff while also contributing to combat. With access to an array of knowledge, they can recall obscure lore and adapt to various social situations. Whether through their wit, charm, or magical abilities, bards leave an impression wherever they go.',
    },
    {
        image: 'classes/cleric.webp',
        title: 'Cleric',
        description: 'Clerics are divine spellcasters who draw power from their connection to a deity, divine cause, or cosmic force. They act as intermediaries between mortals and the gods, wielding holy power to heal wounds, smite enemies, and protect the faithful. Clerics are versatile, with domains reflecting their deity’s influence, such as Life, War, or Trickery. They excel in both support and combat roles, capable of leading their party with divine authority and spellcasting prowess.',
    },
    {
        image: 'classes/druid.webp',
        title: 'Druid',
        description: 'Druids are guardians of nature, embodying the primal forces of the natural world. They can wield devastating elemental magic or take on the forms of beasts, blending seamlessly with the wilds. Druids draw power from the land, whether forests, deserts, or the ocean. Their spells focus on control, healing, and summoning natural allies. With their ability to shapeshift, druids adapt to any situation, thriving in environments where others struggle.',
    },
    {
        image: 'classes/fighter.webp',
        title: 'Fighter',
        description: 'Fighters are versatile warriors, adept with a variety of weapons and combat styles. They are the masters of battlefield tactics, excelling in offense, defense, and adaptability. Whether as a sword-and-shield tank, a precise archer, or a devastating dual-wielder, fighters thrive in any martial role. Their dedication to training grants them unparalleled skill and endurance, making them reliable in any party composition. Subclasses like the Eldritch Knight even add spellcasting to their repertoire.',
    },
    {
        image: 'classes/monk.webp',
        title: 'Monk',
        description: 'Monks are disciplined martial artists who harness the power of their inner ki to perform extraordinary feats. They combine unarmed combat with supernatural agility and speed, striking swiftly and precisely. Monks can deflect projectiles, walk across water, and deliver devastating blows that bypass conventional defenses. Their meditative discipline and spiritual focus make them formidable opponents, capable of controlling the battlefield with both physical prowess and mystical abilities.',
    },
    {
        image: 'classes/paladin.webp',
        title: 'Paladin',
        description: 'Paladins are divine champions sworn to uphold a sacred oath, be it protecting the innocent, avenging the wronged, or bringing justice to the wicked. They combine martial skill with divine power, smiting foes with holy energy and shielding allies from harm. Paladins are versatile, with healing abilities, powerful auras, and the ability to wield potent divine magic. Their oaths define their purpose, granting them unique powers and guiding their moral compass.',
    },
    {
        image: 'classes/ranger.webp',
        title: 'Ranger',
        description: 'Rangers are expert trackers and survivalists, blending martial prowess with a deep connection to the natural world. They excel in wilderness exploration, thriving in forests, deserts, or mountains. Rangers can specialize in archery, dual-wielding, or beast mastery, often accompanied by an animal companion. Their magic, drawn from nature, allows them to heal, track, and hinder foes. Rangers shine in environments where others falter, providing invaluable knowledge and adaptability.',
    },
    {
        image: 'classes/rogue.webp',
        title: 'Rogue',
        description: 'Rogues are cunning and stealthy specialists who excel in infiltration, deception, and precision strikes. They thrive on exploiting weaknesses, delivering devastating sneak attacks, and slipping away unnoticed. Rogues are resourceful problem-solvers, using their wits and skills to overcome challenges. Whether as a thief, assassin, or swashbuckler, rogues bring versatility and creativity to the party, excelling in both combat and non-combat situations.',
    },
    {
        image: 'classes/sorcerer.webp',
        title: 'Sorcerer',
        description: 'Sorcerers are innate spellcasters whose magic flows from a natural source, such as a draconic bloodline, wild magic, or celestial heritage. They wield raw magical energy with spontaneity, shaping spells to suit their needs. Sorcerers thrive on their ability to manipulate their magic, casting multiple spells in a single moment or enhancing their power. Their connection to magic is instinctive, making them unpredictable and devastating opponents.',
    },
    {
        image: 'classes/warlock.webp',
        title: 'Warlock',
        description: 'Warlocks are mystic spellcasters who forge pacts with powerful beings such as fiends, fey, or great old ones. In exchange for their loyalty or service, warlocks gain access to eldritch magic and unique abilities. Their spells are potent but limited, supplemented by invocations that grant additional powers. Warlocks excel in versatility, wielding both destructive and deceptive magic while relying on their patron’s gifts to shape their abilities.',
    },
    {
        image: 'classes/wizard.webp',
        title: 'Wizard',
        description: 'Wizards are scholarly spellcasters who dedicate their lives to mastering the arcane. Through study and research, they unlock the secrets of magic, wielding a vast array of spells. Wizards are the most versatile magic users, capable of adapting to any situation. Their knowledge of magical theory allows them to craft rituals, summon creatures, and unleash devastating spells. Though physically frail, their intellect and magical might make them indispensable.',
    },
];


let currentclasseIndex = 0;

const classeImage = document.getElementById('ImageBro');
const classeTitle = document.getElementById('Title');
const classeDescription = document.getElementById('Description');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentclasseIndex = (currentclasseIndex - 1 + classes.length) % classes.length;
    updateclasse();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentclasseIndex = (currentclasseIndex + 1) % classes.length;
    updateclasse();
});

function updateclasse() {
    const classe = classes[currentclasseIndex];
    ImageBro.src = classe.image;
    Title.textContent = classe.title;
    Description.textContent = classe.description;
}
