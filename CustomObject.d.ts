export declare class Card {
    ID: number;
    name: string;
    attack: number;
    defense: number;
    type: string;
    constructor();
}
export declare class Player {
    ID: number;
    name: string;
    life: number;
    hand: Card[];
    constructor();
}
export declare class Position {
    cell: Coordinate[];
    constructor();
}
export declare class Coordinate {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
//# sourceMappingURL=CustomObject.d.ts.map