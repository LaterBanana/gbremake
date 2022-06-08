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
        this.cell[0] = new FieldStatus(344, 546, 1, 20, 5, 0);
        this.cell[1] = new FieldStatus(406, 546, 2, 0, 6, 1);
        this.cell[2] = new FieldStatus(468, 546, 3, 1, 7, 2);
        this.cell[3] = new FieldStatus(530, 546, 4, 2, 8, 3);
        this.cell[4] = new FieldStatus(592, 546, 4, 3, 9, 4);
        this.cell[5] = new FieldStatus(344, 482, 6, 5, 10, 0);
        this.cell[6] = new FieldStatus(406, 482, 7, 5, 11, 1);
        this.cell[7] = new FieldStatus(468, 482, 8, 6, 12, 2);
        this.cell[8] = new FieldStatus(530, 482, 9, 7, 13, 3);
        this.cell[9] = new FieldStatus(592, 482, 9, 8, 14, 4);
        this.cell[10] = new FieldStatus(344, 98, 11, 10, 15, 5);
        this.cell[11] = new FieldStatus(406, 98, 12, 10, 16, 6);
        this.cell[12] = new FieldStatus(468, 98, 13, 11, 17, 7);
        this.cell[13] = new FieldStatus(530, 98, 14, 12, 18, 8);
        this.cell[14] = new FieldStatus(592, 98, 14, 13, 19, 9);
        this.cell[15] = new FieldStatus(344, 34, 16, 21, 15, 10);
        this.cell[16] = new FieldStatus(406, 34, 17, 16, 16, 11);
        this.cell[17] = new FieldStatus(468, 34, 18, 17, 17, 12);
        this.cell[18] = new FieldStatus(530, 34, 19, 18, 18, 13);
        this.cell[19] = new FieldStatus(592, 34, 19, 19, 19, 14);
        this.cell[20] = new FieldStatus(282, 546, 0, 20, 21, 20);
        this.cell[21] = new FieldStatus(282, 34, 15, 21, 21, 20);
    }
}
export class FieldStatus {
    constructor(x, y, right, left, up, under) {
        this.x = x;
        this.y = y;
        this.right = right;
        this.left = left;
        this.up = up;
        this.under = under;
    }
}
export class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
