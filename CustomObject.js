export class Card {
    constructor() {
        this.ID = -1;
        this.name = '';
        this.attack = 0;
        this.defense = 0;
        this.type = '';
    }
}
export class Player {
    constructor() {
        this.ID = -1;
        this.name = 'player';
        this.life = 8000;
        this.hand = [];
    }
}
export class Position {
    constructor() {
        this.cell = [];
        this.cell[0] = new Coordinate(282, 546);
    }
}
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
