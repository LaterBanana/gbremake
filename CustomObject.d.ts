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
declare class Coordinate {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export {};
//# sourceMappingURL=CustomObject.d.ts.map