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
export class Grid {
    constructor() {
        this.cell = [];
        this.cell[0] = new Coordinate(344, 546);
        this.cell[1] = new Coordinate(406, 546);
        this.cell[2] = new Coordinate(468, 546);
        this.cell[3] = new Coordinate(530, 546);
        this.cell[4] = new Coordinate(592, 546);
        this.cell[5] = new Coordinate(344, 482);
        this.cell[6] = new Coordinate(406, 482);
        this.cell[7] = new Coordinate(468, 482);
        this.cell[8] = new Coordinate(530, 482);
        this.cell[9] = new Coordinate(592, 482);
        this.cell[10] = new Coordinate(344, 98);
        this.cell[11] = new Coordinate(406, 98);
        this.cell[12] = new Coordinate(468, 98);
        this.cell[13] = new Coordinate(530, 98);
        this.cell[14] = new Coordinate(592, 98);
        this.cell[15] = new Coordinate(344, 34);
        this.cell[16] = new Coordinate(406, 34);
        this.cell[17] = new Coordinate(468, 34);
        this.cell[18] = new Coordinate(530, 34);
        this.cell[19] = new Coordinate(592, 34);
        this.cell[20] = new Coordinate(282, 546);
        this.cell[21] = new Coordinate(282, 34);
    }
}
export class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
