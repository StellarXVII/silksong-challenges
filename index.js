const SETTINGS = {STANDARD_CREST_TEMPLATES: true};

const CREST_CHANGE_AUDIO = new Audio("/silksong-challenges/audio/UI crest change select.wav");
const TOOL_EQUIP_AUDIO = new Audio("/silksong-challenges/audio/ui tool equip.wav");
const SILK_SKILL_EQUIP_AUDIO = new Audio("/silksong-challenges/audio/ui tool equip white tool.wav");
const BOSS_CHANGE_AUDIO = new Audio("/silksong-challenges/audio/ui map mode zoom out.wav");

[CREST_CHANGE_AUDIO, TOOL_EQUIP_AUDIO, SILK_SKILL_EQUIP_AUDIO, BOSS_CHANGE_AUDIO].forEach(e => e.load());

const NEEDLE_DAMAGE = [5, 9, 13, 17, 21];
const BOSS_DATA = {
    // ALTERNATE BOSS IMAGES
    // https://cdn.wikimg.net/en/hkwiki/images/2/2b/Widow_Silk.png
    // https://cdn.wikimg.net/en/hkwiki/images/6/64/First_Sinner_weaving_outfit.png
    // https://cdn.wikimg.net/en/hkwiki/images/0/01/Garmond_%26_Zaza_Combat_Idle.png
    // https://cdn.wikimg.net/en/hkwiki/images/1/12/Grand_Mother_Silk_Stagger.png
    // https://cdn.wikimg.net/en/hkwiki/images/c/cb/Trobbio_Fireworks.png
    "Bell Beast": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/8/84/B_Bell_Beast.png",
        health: 150,
        modifiers: [1, 1, 1, 1, 1]
    },
    "Fourth Chorus": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/d/db/B_Fourth_Chorus.png",
        health: 500,
        modifiers: [1, 0.65, 0.5, 0.45, 0.45]
    },
    "Great Conchflies": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/2/28/B_Great_Conchfly.png",
        health: 400,
        modifiers: [1.3, 1, 0.825, 0.7, 0.6]
    },
    "Lace": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/e/e6/B_Lace.png",
        health: 250,
        modifiers: [1, 1, 1, 1, 1]
    },
    "Lace (Cradle)": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/e/e6/B_Lace.png",
        health: 800,
        modifiers: [1.75, 1.2, 1, 0.85, 0.85]
    },
    "Last Judge": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/4/45/B_Last_Judge.png",
        health: 720,
        modifiers: [1.2, 1, 0.85, 0.75, 0.7]
    },
    "Moorwing": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/6/6e/B_Moorwing.png",
        health: 600,
        modifiers: [2, 1.3, 1, 0.9, 0.85]
    },
    "Moss Mother": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/1/1e/B_Moss_Mother.png",
        health: 120,
        modifiers: [1, 1, 1, 1, 1] // add others later
    },
    "Phantom": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/2/23/B_Phantom.png",
        health: 650,
        modifiers: [1.2, 1, 0.85, 0.75, 0.7]
    },
    "Savage Beastfly": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/6/68/B_Savage_Beastfly.png",
        health: 550,
        modifiers: [1.7, 1.2, 1, 0.9, 0.8]
    },
    "Sister Splinter": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/5/5c/B_Sister_Splinter.png",
        health: 310,
        modifiers: [1, 0.675, 0.575, 0.55, 0.5]
    },
    "Skull Tyrant": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/2/29/B_Skull_Tyrant.png",
        health: 450,
        modifiers: [1.2, 1, 0.9, 0.85, 0.8]
    },
    "Widow": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/a/aa/B_Widow.png",
        health: 360,
        modifiers: [1, 1, 1, 1, 1]
    },
    "Broodmother": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/2/23/B_Broodmother.png",
        health: 700,
        modifiers: [1.35, 1.1, 1, 1, 1]
    },
    "Cogwork Dancers": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/8/80/B_Cogwork_Dancers.png",
        health: 810,
        modifiers: [1, 1, 1, 1, 1]
    },
    "Disgraced Chef Lugoli": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/1/12/B_Disgraced_Chef_Lugoli.png",
        health: 600,
        modifiers: [1.7, 1.2, 1, 0.9, 0.85]
    },
    "Father of the Flame": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/6/61/B_Father_of_the_Flame.png",
        health: 650,
        modifiers: [1, 1, 1, 1, 1]
    },
    "First Sinner": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/b/ba/B_First_Sinner.png",
        health: 1300,
        modifiers: [1.75, 1.25, 1.1, 1, 1]
    },
    "Forebrothers Signis & Gron": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/d/d1/B_Forebrothers_Signis_%26_Gron.png",
        health: 1240,
        modifiers: [1.6, 1.25, 1, 0.95, 0.9]
    },
    "Garmond and Zaza": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/0/0d/B_Garmond_%26_Zaza.png",
        health: 460,
        modifiers: [1, 1, 1, 1, 1]
    },
    "Grand Mother Silk": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/7/7f/B_Grand_Mother_Silk.png",
        health: 1224,
        modifiers: [1.1, 1, 1, 0.88, 0.88]
    },
    "Groal the Great": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/0/07/B_Groal_the_Great.png",
        health: 650,
        modifiers: [1.8, 1.2, 1, 0.9, 0.9]
    },
    "Raging Conchfly": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/2/28/B_Great_Conchfly.png",
        health: 820,
        modifiers: [1.5, 1.2, 1.05, 0.85, 0.75]
    },
    "Savage Beastfly (Far Fields)": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/6/68/B_Savage_Beastfly.png",
        health: 650,
        modifiers: [1.7, 1.2, 1, 0.9, 0.8]
    },
    "Second Sentinel": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/a/aa/B_Second_Sentinel.png",
        health: 800,
        modifiers: [1.4, 1.1, 0.85, 0.7, 0.65]
    },
    "Shakra": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/4/47/B_Shakra.png",
        health: 600,
        modifiers: [1.5, 1.15, 1, 0.9, 0.9]
    },
    "The Unravelled": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/e/e2/B_The_Unravelled.png",
        health: 1000,
        modifiers: [1, 1, 1, 0.9, 0.85]
    },
    "Trobbio": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/3/32/B_Trobbio.png",
        health: 700,
        modifiers: [1.4, 1, 0.9, 0.8, 0.8]
    },
    "Voltvyrm": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/c/c2/B_Voltvyrm.png",
        health: 550,
        modifiers: [1.8, 1.2, 1, 0.9, 0.8]
    },
    "Bell Eater": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/6/6e/B_Bell_Eater.png",
        health: 800,
        modifiers: [1.75, 1.35, 1.2, 1, 1]
    },
    "Clover Dancers": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/c/c2/B_Clover_Dancers.png",
        health: 1160,
        modifiers: [1.75, 1.25, 1.15, 1, 1]
    },
    "Crawfather": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/8/87/B_Crawfather.png",
        health: 1300,
        modifiers: [1.6, 1.25, 1.1, 1, 1]
    },
    "Crust King Khann": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/5/5d/B_Crust_King_Khann.png",
        health: 1650,
        modifiers: [2, 1.35, 1.15, 1, 0.95]
    },
    "Gurr the Outcast": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/3/3c/B_Gurr_the_Outcast.png",
        health: 1000,
        modifiers: [1.7, 1.25, 1.1, 1, 0.95]
    },
    "Lost Garmond": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/e/e0/B_Lost_Garmond.png",
        health: 900,
        modifiers: [2, 1.5, 1.2, 1.1, 1]
    },
    "Lost Lace": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/e/e7/B_Lost_Lace.png",
        health: 1800,
        modifiers: [1.7, 1.25, 1.1, 1.05, 0.95]
    },
    "Nyleth": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/b/b1/B_Nyleth.png",
        health: 1250,
        modifiers: [1.5, 1.25, 1.1, 1, 0.91]
    },
    "Palestag": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/8/8b/B_Palestag.png",
        health: 480,
        modifiers: [1.5, 1.2, 1.15, 1, 1]
    },
    "Pinstress": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/a/a7/B_Pinstress.png",
        health: 910,
        modifiers: [1.5, 1.1, 1, 1, 0.9]
    },
    "Plasmified Zango": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/3/36/B_Plasmified_Zango.png",
        health: 1000,
        modifiers: [2, 1.25, 1.1, 1, 1]
    },
    "Shrine Guardian Seth": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/2/25/B_Shrine_Guardian_Seth.png",
        health: 1185,
        modifiers: [1.7, 1.25, 1.1, 1, 0.95]
    },
    "Skarrsinger Karmelita": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/7/71/B_Skarrsinger_Karmelita.png",
        health: 1500,
        modifiers: [1.5, 1.25, 1.1, 1, 0.95]
    },
    "Tormented Trobbio": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/1/19/B_Tormented_Trobbio.png",
        health: 950,
        modifiers: [1.4, 1, 0.9, 0.8, 0.75]
    },
    "Watcher at the Edge": {
        image: "https://cdn.wikimg.net/en/hkwiki/images/6/61/B_Watcher_at_the_Edge.png",
        health: 900,
        modifiers: [1.5, 1.2, 1, 0.9, 0.85]
    },
}

for (let i of Object.keys(BOSS_DATA)) {
    new Image(BOSS_DATA[i].image);
}

const TOOL_DATA = {
    white: [
        { name: "Silk Spear", chance: 3 },
        { name: "Thread Storm", chance: 2 },
        { name: "Sharpdart", chance: 1 },
        { name: "Rune Rage", chance: 3 },
        { name: "Cross Stitch", chance: 3 },
        { name: "Pale Nails", chance: 2 }
    ],
    red: [
        { name: "Straight Pin", chance: 1 },
        { name: "Threefold Pin", chance: 1 },
        { name: "Sting Shard", chance: 1 },
        { name: "Tacks", chance: 1 },
        { name: "Longpin", chance: 1 },
        { name: "Curvesickle", chance: 1 },
        { name: "Throwing Ring", chance: 1 },
        { name: "Pimpillo", chance: 1 },
        { name: "Conchcutter", chance: 1 },
        { name: "Silkshot", chance: 1 },
        { name: "Delver's Drill", chance: 1 },
        { name: "Cogwork Wheel", chance: 1 },
        { name: "Cogfly", chance: 1 },
        { name: "Rosary Cannon", chance: 1 },
        { name: "Voltvessels", chance: 1 },
        { name: "Flintslate", chance: 1 },
        { name: "Flea Brew", chance: 1 },
        { name: "Plasmium Phial", chance: 1 }
    ],
    blue: [
        { name: "Druid's Eyes", chance: 1 },
        { name: "Magma Bell", chance: 1 },
        { name: "Warding Bell", chance: 1 },
        { name: "Pollip Pouch", chance: 1 },
        { name: "Fractured Mask", chance: 1 },
        { name: "Multibinder", chance: 1 },
        { name: "Weavelight", chance: 1 },
        { name: "Sawtooth Circlet", chance: 1 },
        { name: "Injector Band", chance: 1 },
        { name: "Spool Extender", chance: 1 },
        { name: "Reserve Bind", chance: 1 },
        { name: "Claw Mirrors", chance: 1 },
        { name: "Memory Crystal", chance: 1 },
        { name: "Snitch Pick", chance: 1 },
        { name: "Volt Filament", chance: 1 },
        { name: "Quick Sling", chance: 1 },
        { name: "Wreath of Purity", chance: 1 },
        { name: "Longclaw", chance: 1 },
        { name: "Wispfire Lantern", chance: 1 },
        { name: "Egg of Flealia", chance: 1 },
        { name: "Pin Badge", chance: 1 }
    ],
    yellow: [
        { name: "Compass", chance: 3 },
        { name: "Shard Pendant", chance: 1 },
        { name: "Magnetite Brooch", chance: 1 },
        { name: "Weighted Belt", chance: 2 },
        { name: "Barbed Bracelet", chance: 1 },
        { name: "Dead Bug's Purse", chance: 1 },
        { name: "Magnetite Dice", chance: 2 },
        { name: "Scuttlebrace", chance: 2 },
        { name: "Ascendant's Grip", chance: 2 },
        { name: "Spider Strings", chance: 1 },
        { name: "Silkspeed Anklets", chance: 2 },
        { name: "Thief's Mark", chance: 1 }
    ]
};

const TOOL_IMAGE_DATA = {
    "Silk Spear": "https://cdn.wikimg.net/en/hkwiki/images/a/a4/Icon_SS_Silkspear.png",
    "Thread Storm": "https://cdn.wikimg.net/en/hkwiki/images/8/8c/Icon_SS_Thread_Storm.png",
    "Sharpdart": "https://cdn.wikimg.net/en/hkwiki/images/8/87/Icon_SS_Sharpdart.png",
    "Rune Rage": "https://cdn.wikimg.net/en/hkwiki/images/9/91/Icon_SS_Rune_Rage.png",
    "Cross Stitch": "https://cdn.wikimg.net/en/hkwiki/images/2/25/Icon_SS_Cross_Stitch.png",
    "Pale Nails": "https://cdn.wikimg.net/en/hkwiki/images/d/d9/Icon_SS_Pale_Nails.png",
    "Straight Pin": "https://cdn.wikimg.net/en/hkwiki/images/0/03/Straight_Pin.png",
    "Threefold Pin": "https://cdn.wikimg.net/en/hkwiki/images/b/b1/Threefold_Pin.png",
    "Sting Shard": "https://cdn.wikimg.net/en/hkwiki/images/6/69/Sting_Shard.png",
    "Tacks": "https://cdn.wikimg.net/en/hkwiki/images/e/ef/Tacks.png",
    "Longpin": "https://cdn.wikimg.net/en/hkwiki/images/c/cb/Longpin.png",
    "Curveclaw": "https://cdn.wikimg.net/en/hkwiki/images/2/20/Curveclaw.png",
    "Curvesickle": "https://cdn.wikimg.net/en/hkwiki/images/6/60/Curvesickle.png",
    "Throwing Ring": "https://cdn.wikimg.net/en/hkwiki/images/2/2b/Throwing_Ring.png",
    "Pimpillo": "https://cdn.wikimg.net/en/hkwiki/images/b/b0/Pimpillo.png",
    "Conchcutter": "https://cdn.wikimg.net/en/hkwiki/images/0/0f/Conchcutter.png",
    "Silkshot": "https://cdn.wikimg.net/en/hkwiki/images/b/b3/Silkshot.png",
    "Delver's Drill": "https://cdn.wikimg.net/en/hkwiki/images/8/85/Delver%27s_Drill.png",
    "Cogwork Wheel": "https://cdn.wikimg.net/en/hkwiki/images/8/8e/Cogwork_Wheel.png",
    "Cogfly": "https://cdn.wikimg.net/en/hkwiki/images/b/ba/Cogfly.png",
    "Rosary Cannon": "https://cdn.wikimg.net/en/hkwiki/images/0/0d/Rosary_Cannon.png",
    "Voltvessels": "https://cdn.wikimg.net/en/hkwiki/images/7/75/Voltvessels.png",
    "Flintslate": "https://cdn.wikimg.net/en/hkwiki/images/3/37/Flintslate.png",
    "Snare Setter": "https://cdn.wikimg.net/en/hkwiki/images/6/68/Snare_Setter.png",
    "Flea Brew": "https://cdn.wikimg.net/en/hkwiki/images/d/d0/Flea_Brew.png",
    "Plasmium Phial": "https://cdn.wikimg.net/en/hkwiki/images/8/82/Plasmium_Phial.png",
    "Druid's Eye": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Druid%27s_Eye.png",
    "Druid's Eyes": "https://cdn.wikimg.net/en/hkwiki/images/c/c2/Druid%27s_Eyes.png",
    "Magma Bell": "https://cdn.wikimg.net/en/hkwiki/images/7/72/Magma_Bell.png",
    "Warding Bell": "https://cdn.wikimg.net/en/hkwiki/images/8/8c/Warding_Bell.png",
    "Pollip Pouch": "https://cdn.wikimg.net/en/hkwiki/images/8/82/Pollip_Pouch.png",
    "Fractured Mask": "https://cdn.wikimg.net/en/hkwiki/images/5/51/Fractured_Mask.png",
    "Multibinder": "https://cdn.wikimg.net/en/hkwiki/images/1/19/Multibinder.png",
    "Weavelight": "https://cdn.wikimg.net/en/hkwiki/images/5/5f/Weavelight.png",
    "Sawtooth Circlet": "https://cdn.wikimg.net/en/hkwiki/images/4/45/Sawtooth_Circlet.png",
    "Injector Band": "https://cdn.wikimg.net/en/hkwiki/images/d/dd/Injector_Band.png",
    "Spool Extender": "https://cdn.wikimg.net/en/hkwiki/images/1/17/Spool_Extender.png",
    "Reserve Bind": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Reserve_Bind.png",
    "Claw Mirrors": "https://cdn.wikimg.net/en/hkwiki/images/7/75/Claw_Mirrors.png",
    "Memory Crystal": "https://cdn.wikimg.net/en/hkwiki/images/6/6b/Memory_Crystal.png",
    "Snitch Pick": "https://cdn.wikimg.net/en/hkwiki/images/e/eb/Snitch_Pick.png",
    "Volt Filament": "https://cdn.wikimg.net/en/hkwiki/images/c/c4/Volt_Filament.png",
    "Quick Sling": "https://cdn.wikimg.net/en/hkwiki/images/4/4a/Quick_Sling.png",
    "Wreath of Purity": "https://cdn.wikimg.net/en/hkwiki/images/c/c2/Wreath_of_Purity.png",
    "Longclaw": "https://cdn.wikimg.net/en/hkwiki/images/7/73/Longclaw.png",
    "Wispfire Lantern": "https://cdn.wikimg.net/en/hkwiki/images/8/80/Wispfire_Lantern.png",
    "Egg of Flealia": "https://cdn.wikimg.net/en/hkwiki/images/a/a4/Egg_of_Flealia.png",
    "Pin Badge": "https://cdn.wikimg.net/en/hkwiki/images/5/50/Pin_Badge.png",
    "Compass": "https://cdn.wikimg.net/en/hkwiki/images/9/92/Compass.png",
    "Shard Pendant": "https://cdn.wikimg.net/en/hkwiki/images/f/f2/Shard_Pendant.png",
    "Magnetite Brooch": "https://cdn.wikimg.net/en/hkwiki/images/2/22/Magnetite_Brooch.png",
    "Weighted Belt": "https://cdn.wikimg.net/en/hkwiki/images/e/ee/Weighted_Belt.png",
    "Barbed Bracelet": "https://cdn.wikimg.net/en/hkwiki/images/5/5e/Barbed_Bracelet.png",
    "Dead Bug's Purse": "https://cdn.wikimg.net/en/hkwiki/images/f/fc/Dead_Bug%27s_Purse.png",
    "Shell Satchel": "https://cdn.wikimg.net/en/hkwiki/images/a/ad/Shell_Satchel.png",
    "Magnetite Dice": "https://cdn.wikimg.net/en/hkwiki/images/3/3a/Magnetite_Dice.png",
    "Scuttlebrace": "https://cdn.wikimg.net/en/hkwiki/images/0/05/Scuttlebrace.png",
    "Ascendant's Grip": "https://cdn.wikimg.net/en/hkwiki/images/2/25/Ascendant%27s_Grip.png",
    "Spider Strings": "https://cdn.wikimg.net/en/hkwiki/images/b/bf/Spider_Strings.png",
    "Silkspeed Anklets": "https://cdn.wikimg.net/en/hkwiki/images/b/b3/Silkspeed_Anklets.png",
    "Thief's Mark": "https://cdn.wikimg.net/en/hkwiki/images/4/48/Thief%27s_Mark.png",
};
// const TOOLS = TOOL_DATA.red.map(e => e.name).concat(TOOL_DATA.blue.map(e => e.name).concat(TOOL_DATA.yellow.map(e => e.name)));
const TOOL_TYPES = {};
for (let toolColor of Object.keys(TOOL_DATA)) {
    for (let tool of TOOL_DATA[toolColor]) {
        tool = tool.name;
        TOOL_TYPES[tool] = toolColor;

        var toolImage = document.createElement("img");
        var toolOutline = document.createElement("img");
        var toolImageContainer = document.createElement("div");
        var toolImagePlaceholderContainer = document.createElement("div");

        toolImage.src = TOOL_IMAGE_DATA[tool];
        toolImage.alt = tool;
        toolImage.classList.add("toolImage");

        toolOutline.src = "/silksong-challenges/images/" + toolColor + "-outline.png";
        toolOutline.alt = toolColor + " tool outline";
        toolOutline.classList.add("toolEquipOutline");

        toolImageContainer.classList.add("toolImageContainer");
        toolImageContainer.id = tool.toLowerCase().split(" ").join("-").replaceAll("\'", "");
        toolImageContainer.setAttribute("name", tool);
        toolImageContainer.addEventListener("click", e => {
            var container = e.target;
            if (container.tagName != "DIV")
                container = container.parentElement;

            if (container.style.left || container.style.top)
                unequip(container.getAttribute("name"));
            else
                equip(container.getAttribute("name"));

        });

        toolImageContainer.append(toolImage);
        toolImageContainer.append(toolOutline);
        toolImagePlaceholderContainer.append(toolImageContainer);
        Utility.qs("#toolBank").append(toolImagePlaceholderContainer);
    }
}
const SILK_SKILLS = ["Silkspear", "Thread Storm", "Sharpdart", "Rune Rage", "Cross Stitch", "Pale Nails"]
for (let i of SILK_SKILLS) {
    TOOL_TYPES[i] = "white";
}


function setCrestByName(crest = "hunter") {
    vCrest.setCrestByName(crest);
}

function getCrest() {
    return Utility.qs("#crest-img").src.split("crests/")[1].split(".png")[0];
}

const vCrest = new VariableCrest("hunter");

function equip(...tools) {
    for (let i of tools) {
        vCrest.equip(i);
    }
}

function unequip(...tools) {
    for (let i of tools) {
        vCrest.unequip(i);
    }
}

var changedCrest = false;

Utility.qs("#randomCrest").addEventListener("click", () => {
    changedCrest = true;
    var temp = Object.keys(VariableCrest.CREST_DATA);
    if (changedCrest)
        temp.splice(temp.indexOf(vCrest.crest), 1);
    setCrestByName(Utility.arrayRandom(temp));
})

function setCrestWithData(data) {
    vCrest.setCrestWithData(data);
}


Utility.qs("#randomTools").addEventListener("click", () => {

    var delay = 0;
    if (!vCrest.empty) {
        vCrest.getAllEquipped().forEach(e => {
            e && vCrest.unequip(e);
        })
        delay = 500;
    }

    setTimeout(() => {
        for (let i of Object.keys(TOOL_DATA)) {
            var tools = arrayRandomMultiple(TOOL_DATA[i], vCrest.slots[i].slots.length);
            equip(...(tools).map(e => e.name));
        }
    }, delay);
});

Utility.qs("#randomBoss").addEventListener("click", () => {
    var audio = BOSS_CHANGE_AUDIO;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    var boss = Utility.arrayRandom(Object.keys(BOSS_DATA));
    var img = Utility.qs("#boss-img")
    img.src = BOSS_DATA[boss].image;
    img.alt = boss;
    Utility.qs("#boss-text").textContent = boss;
});



Utility.qs("#randomAll").addEventListener("click", e => {
    Utility.qs("#randomBoss").click();
    setTimeout(() => {
        Utility.qs("#randomCrest").click();
    }, 250);
    setTimeout(() => {
        Utility.qs("#randomTools").click();
    }, 750);
});

// Utility.qs("#randomFill").addEventListener("click", e => {
//     var empty = { red: 0, blue: 0, yellow: 0, white: 0 };
//     for (let type of Object.keys(vCrest.slots)) {
//         empty[type] = getEmpty(vCrest.slots[type].slots);
//     }
//     for (let type of Object.keys(empty)) {
//         for (let i = 0; i < empty[type]; i++) {
//             equip(Utility.arrayRandom(TOOL_DATA[type]).name);
//         }
//     }
// })

function arrayRandomMultiple(arr, n) {
    var temp = arr.slice();
    var res = [];
    for (let i = 0; i < n; i++) {
        var rn = Utility.random(0, temp.length - 1);
        res.push(temp[rn]);
        temp.splice(rn, 1);
    }
    return res;
}

function arrayIsFull(arr) {
    for (let i of arr)
        if (!i)
            return false;
    return true;
}

function getEmpty(arr) {
    var c = 0;
    for (let i of arr)
        if (!i)
            c++;
    return c;
}

Utility.qs("#standardCrestTemplateToggle").addEventListener("change", e=>{
    SETTINGS.STANDARD_CREST_TEMPLATES = e.target.checked;
})



function customCrest() {
    const data = {
        image: "/silksong-challenges/images/crests/custom.png",
        slots: {
            red: [],
            blue: [
                new ToolSlot(ToolSlot.BLUE, -73, 250)
            ],
            yellow: [
                new ToolSlot(ToolSlot.YELLOW, -73, 406)
            ],
            white: []
        }
    }

    const colorConstants = { 'w': ToolSlot.WHITE, 'r': ToolSlot.RED, 'b': ToolSlot.BLUE, 'y': ToolSlot.YELLOW };
    const fullColorNames = { r: "red", b: "blue", y: "yellow", w: "white" }
    const keys = ['w', 'r', 'b', 'y'];
	const values = [0, 1, 2, 3];

	const toolCountScores = {
		r: {
			0: -1,
			1: 1,
			2: 2,
			3: 3,
		},
		b: {
			0: -3,
			1: 1,
			2: 3,
			3: 4,
		},
		y: {
			0: 0,
			1: 1,
			2: 2,
			3: 2.5,
		},
		w: {
			0: -2,
			1: 1,
			2: 3,
			3: 3,
		}
	};

	var results = [];

	function generateCombos(index, currentCombo) {
		if (index === keys.length) {
			results.push(Object.assign({}, currentCombo));
			return;
		}

		for (let val of values) {
			currentCombo[keys[index]] = val;
			generateCombos(index + 1, currentCombo);
		}
	}

	generateCombos(0, {});
	results = results.filter(e => e.r + e.b + e.y + e.w > 4 && e.r + e.b + e.y + e.w < 8 && e.w + e.r <= 3);
	results = results.map(e => Object.assign(e,
		{ t: e.w + e.r + e.b + e.y },
		{
			score:
				toolCountScores.w[e.w] +
				toolCountScores.r[e.r] +
				toolCountScores.b[e.b] +
				toolCountScores.y[e.y]
		}
	));


    const randomCrest = Utility.arrayRandom(results);

    console.log(randomCrest)

    for (let i of keys) {
        console.log(fullColorNames[i], i, data.slots[fullColorNames[i]]);
        for (let x = 0; x < randomCrest[i]; x++) {
            data.slots[fullColorNames[i]].push(new ToolSlot(colorConstants[i], 0, 0));
        }
    }

    return data;
}