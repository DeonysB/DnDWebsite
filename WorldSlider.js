const biomes = [
    {
        image: 'biomes/forest.webp',
        title: 'Forest',
        description: 'Forests are vibrant, magical ecosystems filled with towering trees, wildlife, and mysterious paths. They are home to elves, druids, and fey creatures. Adventurers may encounter ruins hidden under dense canopies or ancient spirits guarding their domain.'
    },
    {
        image: 'biomes/mountains.webp',
        title: 'Mountains',
        description: 'Majestic and dangerous, mountains are home to dwarves, dragons, and orcs. The rugged terrain hides ancient mines, strongholds, and treasures deep within. Snow-covered peaks and treacherous cliffs make travel perilous.'
    },
    {
        image: 'biomes/plains.webp',
        title: 'Plains',
        description: 'Vast open expanses of grasslands or rolling hills. Plains are dotted with nomadic tribes, wild horses, and the occasional ruins of old civilizations. They are a perfect setting for large-scale battles or mysterious wanderers.'
    },
    {
        image: 'biomes/desert.webp',
        title: 'Desert',
        description: 'Deserts are harsh, sun-scorched lands with rolling dunes and sparse vegetation. Sandstorms and intense heat challenge travelers. Nomads, ancient ruins, and magical oases provide adventure and intrigue.'
    },
    {
        image: 'biomes/swamp.webp',
        title: 'Swamp',
        description: 'Swamps are murky wetlands filled with tangled trees, muddy waters, and the cries of unseen creatures. These eerie locales are home to lizardfolk, will-o-wisps, and hidden treasures guarded by deadly traps.'
    },
    {
        image: 'biomes/tundra.webp',
        title: 'Tundra',
        description: 'The tundra is a cold, treeless biome covered in ice and snow. Hardy creatures like mammoths, wolves, and frost giants thrive here. Survival is a constant struggle against the biting wind and freezing temperatures.'
    },
    {
        image: 'biomes/jungle.webp',
        title: 'Jungle',
        description: 'Jungles are dense, tropical forests teeming with life and danger. Thick canopies block sunlight while vines and rivers create natural barriers. Hidden temples and ferocious beasts make the jungle an adventurer’s ultimate challenge.'
    },
    {
        image: 'biomes/underdark.webp',
        title: 'Underdark',
        description: 'A vast, subterranean world of darkness and danger. The Underdark is home to drow, mind flayers, and other terrifying creatures. Endless tunnels and glowing fungi create an otherworldly, oppressive environment.'
    },
    {
        image: 'biomes/coastal.webp',
        title: 'Coastal',
        description: 'Coastal biomes offer sandy beaches, rocky shores, and vast oceans. Seaside towns thrive on trade, but pirates, sea monsters, and shipwrecks lurk just beyond the horizon. Exploration often leads to hidden treasures or ancient underwater ruins.'
    },
    {
        image: 'biomes/volcano.webp',
        title: 'Volcanic',
        description: 'A fiery and unstable biome filled with molten lava, erupting volcanoes, and scorched earth. Fire elementals, magma creatures, and ancient forges make this a perilous but rewarding setting for adventurers.'
    },
    {
        image: 'biomes/savanna.webp',
        title: 'Savanna',
        description: 'A biome of vast grasslands interspersed with acacia trees and rocky outcrops. Savannas are home to majestic beasts like lions, elephants, and gnolls. Tribes and ancient relics add depth to these warm, arid regions.'
    },
    {
        image: 'biomes/arctic.webp',
        title: 'Arctic',
        description: 'A frozen wasteland dominated by glaciers and icebergs. Arctic biomes are home to frost giants, polar bears, and mysterious ice caves. Survival here requires warmth, food, and a strong will against nature’s fury.'
    },
    {
        image: 'biomes/caverns.webp',
        title: 'Caverns',
        description: 'Caverns are natural underground spaces, filled with twisting tunnels and eerie echoes. Adventurers may discover hidden treasures, underground rivers, or ancient civilizations long forgotten.'
    },
    {
        image: 'biomes/islands.webp',
        title: 'Islands',
        description: 'Remote and mysterious, islands offer pristine beaches, dense jungles, and volcanic interiors. Pirates, shipwreck survivors, and exotic creatures create tales of adventure and survival.'
    },
    {
        image: 'biomes/feywild.webp',
        title: 'Feywild',
        description: 'A magical realm parallel to the natural world. The Feywild is a land of eternal twilight, vibrant colors, and whimsical danger. Elves, fairies, and powerful archfey dwell in this surreal, enchanting biome.'
    },
    {
        image: 'biomes/cityscape.webp',
        title: 'Cityscape',
        description: 'A bustling metropolis filled with intrigue, crime, and opportunity. Cityscapes are rich with diverse cultures, political conflicts, and hidden secrets within their sprawling streets and towering buildings.'
    },
    {
        image: 'biomes/ocean.webp',
        title: 'Ocean',
        description: 'A vast expanse of saltwater teeming with life and mystery. Oceans are home to merfolk, krakens, and sunken cities. Exploration here requires ships, courage, and a sense of wonder.'
    },
    {
        image: 'biomes/ruins.webp',
        title: 'Ruins',
        description: 'Forgotten remnants of ancient civilizations. Ruins are filled with traps, treasures, and the echoes of history. Adventurers may uncover magical artifacts, cursed relics, or long-lost knowledge.'
    },
    {
        image: 'biomes/hills.webp',
        title: 'Hills',
        description: 'Gentle rolling landscapes that often act as borders between larger biomes. Hills are home to halflings, wandering bards, and small hidden caves. They offer picturesque views and unexpected challenges.'
    },
    {
        image: 'biomes/cave.webp',
        title: 'Cave',
        description: 'Caves are dark, damp places filled with stalactites, stalagmites, and hidden dangers. They are often home to bats, spiders, and underground monsters. Adventurers may find precious minerals, underground streams, or forgotten chambers.',
    },
    {
        image: 'biomes/coral_reef.webp',
        title: 'Coral Reef',
        description: 'Coral reefs are colorful underwater ecosystems filled with vibrant sea life. Schools of fish dart among coral structures, and sea elves or aquatic druids may guard these fragile environments. However, reefs can also hide dangers like sea serpents and predatory sharks.',
    },
    {
        image: 'biomes/badlands.webp',
        title: 'Badlands',
        description: 'The badlands are harsh, rocky terrains with sparse vegetation and extreme weather. They are often considered wastelands, home to tough creatures like giant scorpions or desert wyverns. Ruins of ancient cultures are frequently found here.',
    },
    {
        image: 'biomes/mushroom_forest.webp',
        title: 'Mushroom Forest',
        description: 'Mushroom forests are whimsical and surreal, filled with towering fungi and bioluminescent plants. They are home to myconids, spores, and curious creatures. These biomes often exude an otherworldly charm, with hidden dangers lurking beneath the beauty.',
    },
    {
        image: 'biomes/crystal_caverns.webp',
        title: 'Crystal Caverns',
        description: 'Crystal caverns are breathtaking underground realms filled with shimmering, colorful crystals. These biomes often radiate magical energy, attracting spellcasters and treasure seekers alike. However, they may also house crystalline creatures or elementals.',
    },
    {
        image: 'biomes/floating_islands.webp',
        title: 'Floating Islands',
        description: 'Floating islands are magical, gravity-defying landmasses that hover in the sky. They are often lush and vibrant, filled with exotic creatures and rare resources. Reaching these islands typically requires flight or clever ingenuity.',
    },
    {
        image: 'biomes/haunted_woods.webp',
        title: 'Haunted Woods',
        description: 'The haunted woods are dark, eerie forests shrouded in mist and fear. Ghosts, wraiths, and other undead creatures haunt the shadows. Travelers must navigate carefully, as the forest seems alive and actively works against intruders.',
    },
    {
        image: 'biomes/underwater_ruins.webp',
        title: 'Underwater Ruins',
        description: 'Submerged ruins are relics of ancient civilizations lost to time and tides. They often hold treasures, secrets, and dangers. Explorers may encounter traps, aquatic monsters, or lingering curses guarding the ruins.',
    },
    {
        image: 'biomes/magical_glade.webp',
        title: 'Magical Glade',
        description: 'Magical glades are serene and enchanting clearings in the woods. They are often filled with glowing flora, friendly fey creatures, and magical phenomena. These biomes are a sanctuary for those seeking peace, healing, or inspiration.',
    },
    {
        image: 'biomes/sand_dunes.webp',
        title: 'Sand Dunes',
        description: 'Sand dunes are vast, rolling landscapes of fine sand. They are constantly shaped by the wind, hiding ancient secrets and treasures beneath the surface. Sandworms and other desert predators are common threats in this biome.',
    },
    {
        image: 'biomes/graveyard.webp',
        title: 'Graveyard',
        description: 'Graveyards are somber, eerie places filled with tombstones, mausoleums, and lingering spirits. Necromancers and undead creatures often gather here, making these biomes dangerous for the unprepared.',
    },
    {
        image: 'biomes/stormy_seas.webp',
        title: 'Stormy Seas',
        description: 'Stormy seas are turbulent and unpredictable, with towering waves and roaring winds. These waters are home to sea serpents, pirates, and lost treasures. Navigating this biome requires skill and courage.',
    },
    {
        image: 'biomes/meadow.webp',
        title: 'Meadow',
        description: 'Meadows are peaceful, open landscapes filled with flowers, gentle hills, and clear skies. They are often home to grazing animals, small settlements, and magical creatures like unicorns.',
    },
    {
        image: 'biomes/frozen_lake.webp',
        title: 'Frozen Lake',
        description: 'Frozen lakes are serene yet treacherous, with icy surfaces hiding dangers below. They are often surrounded by snowy forests or mountains and are home to creatures like frost giants and ice elementals.',
    },
    {
        image: 'biomes/blighted_terrain.webp',
        title: 'Blighted Terrain',
        description: 'Blighted terrain is cursed land, devoid of life and filled with toxic miasma. The ground is cracked and barren, and the air feels heavy and oppressive. This biome is often the result of a powerful curse or magical catastrophe.',
    },
    {
        image: 'biomes/enchanted_forest.webp',
        title: 'Enchanted Forest',
        description: 'Enchanted forests are magical, otherworldly places where the rules of nature bend. Trees whisper secrets, and the air shimmers with arcane energy. These biomes are home to fey, druids, and ancient magical relics.',
    },
    {
        image: 'biomes/volcanic_plains.webp',
        title: 'Volcanic Plains',
        description: 'Volcanic plains are hot, barren landscapes marked by lava flows, ash clouds, and volcanic rock. They are home to fire elementals, magma creatures, and ancient temples dedicated to fiery gods. These biomes are both breathtaking and deadly.',
    },
    {
        image: 'biomes/feywild_glade.webp',
        title: 'Feywild Glade',
        description: 'Feywild glades are vibrant and surreal areas, filled with magical light and fantastical flora. These biomes are deeply connected to the Feywild, making them unpredictable and enchanting. Encounters with fey creatures and illusions are common.',
    },
    {
        image: 'biomes/arctic_tundra.webp',
        title: 'Arctic Tundra',
        description: 'The arctic tundra is a vast, frozen biome with sparse vegetation and extreme cold. It is home to polar bears, frost giants, and creatures adapted to the freezing temperatures. The tundra offers a stark beauty but little in terms of resources.',
    },
    {
        image: 'biomes/shadowlands.webp',
        title: 'Shadowlands',
        description: 'Shadowlands are dark, oppressive biomes where the boundary between life and death is thin. This eerie place is often ruled by necromancers or shadow creatures, making it one of the most dangerous biomes for adventurers.',
    },
    {
        image: 'biomes/quicksand_marshes.webp',
        title: 'Quicksand Marshes',
        description: 'Quicksand marshes are treacherous, muddy biomes filled with hidden dangers. These wetlands are teeming with creatures like giant leeches, crocodiles, and bog hags. Adventurers must tread carefully to avoid sinking into the quicksand.',
    },
    {
        image: 'biomes/floating_archipelago.webp',
        title: 'Floating Archipelago',
        description: 'A series of floating islands suspended high in the sky, connected by magical bridges or air currents. These biomes are home to exotic creatures like sky drakes and flying jellyfish. Reaching them often requires advanced magical or technological means.',
    },
    {
        image: 'biomes/desert_ruins.webp',
        title: 'Desert Ruins',
        description: 'Desert ruins are remnants of ancient civilizations buried beneath the sands. These biomes often hold treasures, secrets, and deadly traps. Scorching heat and sandstorms add to the peril of exploring them.',
    },
    {
        image: 'biomes/fungal_caverns.webp',
        title: 'Fungal Caverns',
        description: 'Fungal caverns are dark, humid biomes filled with glowing mushrooms and spore clouds. These underground ecosystems harbor myconids, dangerous fungi, and rare medicinal plants. The air is thick with mystery and potential danger.',
    },
    {
        image: 'biomes/wild_steppes.webp',
        title: 'Wild Steppes',
        description: 'The wild steppes are vast, open grasslands with rolling hills and scattered boulders. They are home to roaming herds, nomadic tribes, and fierce predators. This biome is ideal for large-scale battles and epic chases.',
    },
    {
        image: 'biomes/blazing_desert.webp',
        title: 'Blazing Desert',
        description: 'Blazing deserts are harsh, sun-scorched landscapes where sand and heat dominate. These biomes often feature mirages, ancient tombs, and creatures like sandworms or fire elementals. Survival here is a true test of endurance.',
    },
    {
        image: 'biomes/twilight_woods.webp',
        title: 'Twilight Woods',
        description: 'The twilight woods are perpetually bathed in dim, magical light. This mysterious forest is home to nocturnal creatures, glowing flora, and magical phenomena. Time seems to flow differently here, adding to its surreal nature.',
    },
    {
        image: 'biomes/stormy_highlands.webp',
        title: 'Stormy Highlands',
        description: 'Stormy highlands are rugged, elevated terrains plagued by frequent storms. Lightning strikes and roaring winds are common, making it a dangerous but dramatic landscape. This biome is often home to storm giants and thunderbirds.',
    },
    {
        image: 'biomes/mystic_oasis.webp',
        title: 'Mystic Oasis',
        description: 'Mystic oases are rare, magical paradises found in the heart of deserts. These lush biomes offer water, shade, and a sense of serenity. However, they are often guarded by elemental spirits or hidden predators.',
    },
    {
        image: 'biomes/glacier_fields.webp',
        title: 'Glacier Fields',
        description: 'Glacier fields are vast, frozen landscapes dominated by massive sheets of ice. Crevasses and sub-zero temperatures make travel perilous. These biomes often hide ancient relics or creatures frozen in time.',
    },
    {
        image: 'biomes/ashen_wastes.webp',
        title: 'Ashen Wastes',
        description: 'The ashen wastes are barren, grey landscapes covered in volcanic ash and soot. They are lifeless, desolate places with an air of despair. However, treasures left by those who perished in eruptions may lie buried beneath the ash.',
    },
    {
        image: 'biomes/radiant_meadows.webp',
        title: 'Radiant Meadows',
        description: 'Radiant meadows are magical, glowing fields filled with vibrant wildflowers and shimmering light. These peaceful biomes are home to celestial creatures, unicorns, and ancient blessings of the gods.',
    },
    {
        image: 'biomes/primordial_jungle.webp',
        title: 'Primordial Jungle',
        description: 'The primordial jungle is an ancient, untamed biome filled with massive trees, exotic creatures, and hidden dangers. Dinosaurs, giant insects, and ancient predators roam these dense, humid landscapes.',
    },
    {
        image: 'biomes/crimson_swamp.webp',
        title: 'Crimson Swamp',
        description: 'Crimson swamps are eerie, blood-red wetlands with toxic waters and a haunting atmosphere. These biomes are home to sinister creatures, dark magic, and cursed relics. The air is heavy with dread and danger.',
    },
    {
        image: 'biomes/windy_cliffs.webp',
        title: 'Windy Cliffs',
        description: 'Windy cliffs are steep, rocky landscapes buffeted by strong winds. These biomes are often home to eagles, wyverns, and hardy plants. The treacherous terrain offers stunning views but requires caution when traversing.',
    },
    {
        image: 'biomes/shimmering_coast.webp',
        title: 'Shimmering Coast',
        description: 'The shimmering coast is a picturesque biome where the ocean meets sparkling sands. Magical seashells and glowing tide pools make this a unique, enchanting location. However, dangers like sea hags and tidal waves lurk nearby.',
    },
    {
        image: 'biomes/starry_expanses.webp',
        title: 'Starry Expanses',
        description: 'Starry expanses are surreal biomes where the ground mirrors the night sky. These magical places are often tied to celestial phenomena and home to dream-like creatures. The air feels ethereal, and time seems to slow.',
    },
    {
        image: 'biomes/ancient_ruins.webp',
        title: 'Ancient Ruins',
        description: 'Ancient ruins are the remnants of forgotten civilizations. Overgrown with moss and vines, they are filled with secrets, puzzles, and powerful artifacts. These locations often harbor ghosts, traps, and treasure for adventurers brave enough to explore.',
    },
    {
        image: 'biomes/haunted_moorlands.webp',
        title: 'Haunted Moorlands',
        description: 'Haunted moorlands are misty, desolate plains where spirits roam freely. The eerie atmosphere is amplified by the cries of lost souls and shadowy figures. These biomes often have cursed relics or ancient tragedies waiting to be uncovered.',
    },
    {
        image: 'biomes/crystal_caves.webp',
        title: 'Crystal Caves',
        description: 'Crystal caves are shimmering underground biomes filled with luminous crystals. They are breathtakingly beautiful but often guarded by earth elementals, crystal dragons, or magical traps. The caves may also hold rare minerals and spell components.',
    },
    {
        image: 'biomes/sandstone_canyons.webp',
        title: 'Sandstone Canyons',
        description: 'Sandstone canyons are deep, winding formations with towering walls of red and gold rock. These biomes are home to bandits, giant scorpions, and hidden trails leading to treasures. The echoing winds add a sense of mystery and foreboding.',
    },
    {
        image: 'biomes/enchanted_lagoon.webp',
        title: 'Enchanted Lagoon',
        description: 'Enchanted lagoons are magical water bodies surrounded by vibrant flora and shimmering light. They are home to water nymphs, aquatic creatures, and enchanted treasures. The waters are said to have healing properties but are not without their dangers.',
    },
    {
        image: 'biomes/glowing_marshes.webp',
        title: 'Glowing Marshes',
        description: 'Glowing marshes are wetlands that emit an eerie luminescence. The biomes are teeming with phosphorescent fungi, glowing plants, and swamp creatures. Travelers must navigate the dangerous terrain carefully, avoiding sinkholes and hostile wildlife.',
    },
    {
        image: 'biomes/obsidian_fields.webp',
        title: 'Obsidian Fields',
        description: 'Obsidian fields are volcanic landscapes covered in sharp, glassy black rock. These dangerous biomes are home to fire elementals, lava flows, and rare minerals. The jagged terrain makes travel hazardous, but the rewards are often worth the risk.',
    },
    {
        image: 'biomes/serene_hollows.webp',
        title: 'Serene Hollows',
        description: 'Serene hollows are tranquil, sheltered biomes with soft light filtering through the trees. These places are often untouched by war or danger, offering solace and rest to weary adventurers. However, their peace can sometimes hide darker secrets.',
    },
    {
        image: 'biomes/celestial_peaks.webp',
        title: 'Celestial Peaks',
        description: 'Celestial peaks are towering mountains that seem to touch the heavens. These biomes are sacred to many, hosting ancient temples and divine creatures. The air is thin but filled with a sense of awe and reverence.',
    },
    {
        image: 'biomes/phantom_islands.webp',
        title: 'Phantom Islands',
        description: 'Phantom islands are elusive, magical landmasses that appear and disappear with the tides. These biomes are filled with strange flora, shipwrecks, and supernatural phenomena. Finding them is a challenge, and leaving them can be even harder.',
    },
    {
        image: 'biomes/lava_sea.webp',
        title: 'Lava Sea',
        description: 'Lava seas are vast, molten expanses where rivers of lava flow like water. These biomes are home to fire dragons, magma elementals, and ancient forges. The extreme heat makes them almost impossible to traverse without magical protection.',
    },
    {
        image: 'biomes/emerald_vale.webp',
        title: 'Emerald Vale',
        description: 'Emerald vales are lush, verdant valleys filled with vibrant greenery and sparkling streams. These biomes are havens for druids, unicorns, and mystical creatures. They exude a sense of harmony and natural beauty.',
    },
    {
        image: 'biomes/frozen_tundra.webp',
        title: 'Frozen Tundra',
        description: 'Frozen tundras are vast, icy landscapes with little vegetation and extreme cold. They are home to polar creatures, frost giants, and buried relics from ages past. Surviving here requires resilience and preparation.',
    },
    {
        image: 'biomes/whispering_forest.webp',
        title: 'Whispering Forest',
        description: 'The whispering forest is an eerie woodland where the trees seem to murmur secrets. This biome is filled with enchanted flora, lurking predators, and hidden ruins. Travelers often report hearing voices or seeing shadowy figures.',
    },
    {
        image: 'biomes/ethereal_plains.webp',
        title: 'Ethereal Plains',
        description: 'Ethereal plains are surreal landscapes where the veil between realms is thin. These biomes are filled with shimmering light, ghostly figures, and otherworldly phenomena. They are often considered sacred or cursed, depending on one’s perspective.',
    },
    {
        image: 'biomes/draconic_cliffs.webp',
        title: 'Draconic Cliffs',
        description: 'Draconic cliffs are towering rock formations often claimed by dragons as nesting grounds. These biomes are filled with caves, treasures, and the looming presence of powerful creatures. They are both a challenge and a reward for brave adventurers.',
    },
    {
        image: 'biomes/scarlet_woods.webp',
        title: 'Scarlet Woods',
        description: 'Scarlet woods are hauntingly beautiful forests with crimson leaves and an air of mystery. These biomes are often associated with blood magic, hidden covens, and cursed relics. They are as dangerous as they are mesmerizing.',
    },
    {
        image: 'biomes/dragon_lairs.webp',
        title: 'Dragon Lairs',
        description: 'Dragon lairs are the ultimate biome for adventurers seeking treasure and glory. These lairs are filled with hoarded gold, ancient relics, and the ever-present danger of a dragon’s wrath. They are often located in remote, hard-to-reach places, making the journey as perilous as the destination.',
    },
    
];

let currentBiomeIndex = 0;

const biomeImage = document.getElementById('ImageBro');
const biomeTitle = document.getElementById('Title');
const biomeDescription = document.getElementById('Description');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentBiomeIndex = (currentBiomeIndex - 1 + biomes.length) % biomes.length;
    updateBiome();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentBiomeIndex = (currentBiomeIndex + 1) % biomes.length;
    updateBiome();
});

function updateBiome() {
    const biome = biomes[currentBiomeIndex];
    ImageBro.src = biome.image;
    Title.textContent = biome.title;
    Description.textContent = biome.description;
}
