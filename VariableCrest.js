class VariableCrest {

    static TEMPLATES = {
        "hunter": [2, 2, 2, 1],
        "reaper": [2, 2, 2, 1],
        "wanderer": [1, 2, 3, 1],
        "beast": [2, 0, 2, 1],
        "witch": [2, 3, 0, 1],
        "architect": [3, 2, 2, 0],
        "shaman": [0, 2, 0, 3]
    }

    static CREST_DATA = {
        "hunter": {
            image: "/silksong-challenges/images/crests/hunter.png",
            slots: {
                red: [
                    new ToolSlot(ToolSlot.RED, 262, 201),
                    new ToolSlot(ToolSlot.RED, 262, 483)
                ],
                blue: [
                    new ToolSlot(ToolSlot.BLUE, 53, 335),
                    new ToolSlot(ToolSlot.BLUE, 143, 429)
                ],
                yellow: [
                    new ToolSlot(ToolSlot.YELLOW, 475, 335),
                    new ToolSlot(ToolSlot.YELLOW, 385, 430)
                ],
                white: [
                    new ToolSlot(ToolSlot.WHITE, 262, 347)
                ]
            }
        },
        "reaper": {
            image: "/silksong-challenges/images/crests/reaper.png",
            slots: {
                red: [
                    new ToolSlot(ToolSlot.RED, 263, 136),
                    new ToolSlot(ToolSlot.RED, 263, 454)
                ],
                blue: [
                    new ToolSlot(ToolSlot.BLUE, 110, 217),
                    new ToolSlot(ToolSlot.BLUE, 109, 376)
                ],
                yellow: [
                    new ToolSlot(ToolSlot.YELLOW, 419, 217),
                    new ToolSlot(ToolSlot.YELLOW, 419, 377)
                ],
                white: [
                    new ToolSlot(ToolSlot.WHITE, 263, 295)
                ]
            }
        },
        "wanderer": {
            image: "/silksong-challenges/images/crests/wanderer.png",
            slots: {
                red: [
                    new ToolSlot(ToolSlot.RED, 263, 78)
                ],
                blue: [
                    new ToolSlot(ToolSlot.BLUE, 95, 143),
                    new ToolSlot(ToolSlot.BLUE, 433, 143)
                ],
                yellow: [
                    new ToolSlot(ToolSlot.YELLOW, 75, 354),
                    new ToolSlot(ToolSlot.YELLOW, 263, 465),
                    new ToolSlot(ToolSlot.YELLOW, 454, 354)
                ],
                white: [
                    new ToolSlot(ToolSlot.WHITE, 262, 239)
                ]
            }
        },
        "beast": {
            image: "/silksong-challenges/images/crests/beast.png",
            slots: {
                red: [
                    new ToolSlot(ToolSlot.RED, 263, 159),
                    new ToolSlot(ToolSlot.RED, 263, 434)
                ],
                blue: [],
                yellow: [
                    new ToolSlot(ToolSlot.YELLOW, 134, 230),
                    new ToolSlot(ToolSlot.YELLOW, 394, 230)
                ],
                white: [
                    new ToolSlot(ToolSlot.WHITE, 263, 302)
                ]
            }
        },
        "witch": {
            image: "/silksong-challenges/images/crests/witch.png",
            slots: {
                red: [
                    new ToolSlot(ToolSlot.RED, 240, 136),
                    new ToolSlot(ToolSlot.RED, 282, 480)
                ],
                blue: [
                    new ToolSlot(ToolSlot.BLUE, 408, 234),
                    new ToolSlot(ToolSlot.BLUE, 102, 374),
                    new ToolSlot(ToolSlot.BLUE, 427, 379)
                ],
                yellow: [],
                white: [
                    new ToolSlot(ToolSlot.WHITE, 278, 316)
                ]
            }
        },
        "architect": {
            image: "/silksong-challenges/images/crests/architect.png",
            slots: {
                red: [
                    new ToolSlot(ToolSlot.RED, 263, 173),
                    new ToolSlot(ToolSlot.RED, 263, 302),
                    new ToolSlot(ToolSlot.RED, 263, 435)
                ],
                blue: [
                    new ToolSlot(ToolSlot.BLUE, 72, 230),
                    new ToolSlot(ToolSlot.BLUE, 146, 119)
                ],
                yellow: [
                    new ToolSlot(ToolSlot.YELLOW, 383, 119),
                    new ToolSlot(ToolSlot.YELLOW, 456, 230)
                ],
                white: []
            }
        },
        "shaman": {
            image: "/silksong-challenges/images/crests/shaman.png",
            slots: {
                red: [],
                blue: [
                    new ToolSlot(ToolSlot.BLUE, 119, 295),
                    new ToolSlot(ToolSlot.BLUE, 415, 295)
                ],
                yellow: [],
                white: [
                    new ToolSlot(ToolSlot.WHITE, 263, 157),
                    new ToolSlot(ToolSlot.WHITE, 263, 295),
                    new ToolSlot(ToolSlot.WHITE, 263, 439)
                ]
            }
        }
    }

    constructor(name) {
        this.setCrest(name, false);
    }

    setCrest(name, sound = true) {

        if (this.slots)
            for (let i of Object.keys(TOOL_DATA))
                for (let tool of TOOL_DATA[i])
                    this.unequip(tool.name);

        this.crest = name;
        this.full = false;
        this.slots = {};
        [this.slots.red, this.slots.blue, this.slots.yellow, this.slots.white] = VariableCrest.TEMPLATES[name].map(e => ({ count: e, slots: new Array(e) }));

        sound && (CREST_CHANGE_AUDIO.pause(), CREST_CHANGE_AUDIO.currentTime = 0, CREST_CHANGE_AUDIO.play());
        Utility.qs("#crest-img").src = VariableCrest.CREST_DATA[name].image;



    }

    equip(tool) {
        var type = TOOL_TYPES[tool];
        var index = this.slots[type].slots.findIndex(e => !e);
        var slotTypeCapacity = this.slots[type].slots.length;

        if (index != -1 || (index == -1 && slotTypeCapacity == 1)) {
            if (this.slots[type].slots.includes(tool)) { return; }

            var audio = (type != ToolSlot.WHITE ? TOOL_EQUIP_AUDIO : SILK_SKILL_EQUIP_AUDIO);
            audio.pause();
            audio.currentTime = 0;
            setTimeout(() => audio.play(), 200);

            if (index == -1 && slotTypeCapacity == 1) { // if only one to replace 
                index = 0;
                this.unequip(this.slots[type].slots[index]);
            }


            this.slots[type].slots[index] = tool;


            var icon = Utility.qs("#" + tool.toLowerCase().replaceAll(" ", "-").replaceAll("\'", ""));
            var outline = icon.querySelector(".toolEquipOutline");

            var crestRect = Utility.qs("#crest-img").getBoundingClientRect();
            var iconRect = icon.getBoundingClientRect();
            var targetPos = VariableCrest.CREST_DATA[this.crest].slots[type][index];

            icon.style.transition = "none";
            icon.style.position = "fixed";
            icon.style.width = "90px";
            icon.style.top = iconRect.y + "px";
            icon.style.left = iconRect.x + "px";

            setTimeout(() => {
                icon.style.transition = "";
                // ----------------------- removed because now position: fixed;
                icon.style.top = (crestRect.y /* - iconRect.y */ + targetPos.y - icon.clientHeight / 2) + "px";
                icon.style.left = (crestRect.x /* - iconRect.x */ + targetPos.x - icon.clientWidth / 2) + "px";
                setTimeout(() => {
                    if ([ToolSlot.RED, ToolSlot.WHITE].includes(type)) {
                        if (index == 0 && slotTypeCapacity > 1) {
                            outline.src = "/silksong-challenges/images/" + type + "-outline-up.png";
                            outline.style.transform = "translate(-50%, calc(-50% - 4px))"; // is already -50%, -50%
                        } else if (index == 1 && slotTypeCapacity < 3) {
                            outline.src = "/silksong-challenges/images/" + type + "-outline-down.png";
                            outline.style.transform = "translate(-50%, calc(-50% + 4px))"; // is already -50%, -50%
                        } else if (index == 2) {
                            outline.src = "/silksong-challenges/images/" + type + "-outline-down.png";
                            outline.style.transform = "translate(-50%, calc(-50% + 4px))"; // is already -50%, -50%
                        }
                    }
                }, 250);
            }, 50);

            if (arrayIsFull(this.slots[type].slots))
                if (arrayIsFull(this.getAllEquipped()))
                    this.full = true;
                else this.full = false;
            else this.full = false;

        } else alert(`Crest has no more empty ${type} slots!`);
    }

    unequip(tool) {
        var type = TOOL_TYPES[tool];
        var index = this.slots[type].slots.indexOf(tool);
        if (index == -1) { /* console.warn(tool + " is not equipped!"); */ }
        else {
            this.slots[type].slots[index] = null;
            this.full = false;
            var icon = Utility.qs("#" + tool.toLowerCase().replaceAll(" ", "-").replaceAll("\'", ""));
            var iconRect = icon.getBoundingClientRect();
            var placeholderRect = icon.parentElement.getBoundingClientRect();
            var outline = icon.querySelector(".toolEquipOutline");

            outline.style.transform = "translate(-50%, -50%)"; // reset

            setTimeout(() => {
                outline.src = "/silksong-challenges/images/" + type + "-outline.png";
                icon.style.top = placeholderRect.y + "px";
                icon.style.left = placeholderRect.x + "px";
                setTimeout(() => {
                    icon.style.top = "";
                    icon.style.left = "";
                    icon.style.position = "relative";
                    icon.style.width = "";
                }, 250);
            }, 100);
        }
    }
    getAllEquipped() {
        return this.slots.red.slots.concat(this.slots.blue.slots.concat(this.slots.yellow.slots.concat(this.slots.white.slots)));
    }
}