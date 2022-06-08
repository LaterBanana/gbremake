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
export declare class Grid {
    cell: FieldStatus[];
    constructor();
}
export declare class FieldStatus {
    x: number;
    y: number;
    right: number;
    left: number;
    up: number;
    under: number;
    constructor(x: number, y: number, right: number, left: number, up: number, under: number);
}
export declare class Coordinate {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
//# sourceMappingURL=CustomObject.d.ts.map