class ToolSlot {
    static RED = "red";
    static BLUE = "blue";
    static YELLOW = "yellow";
    static WHITE = "white";

    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }

    getType() {
        return this.type.split(" ")[0];
    }
}