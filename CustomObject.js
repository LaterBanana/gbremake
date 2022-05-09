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
