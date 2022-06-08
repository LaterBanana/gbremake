export class Card{
  ID : number;
  name : string;
  attack : number;
  defense : number;
  type : string;

  constructor(){
    this.ID = -1;
    this.name = '';
    this.attack = 0;
    this.defense = 0;
    this.type = '';
  }
}

export class Player{
  ID : number;
  name : string;
  life : number;
  hand : Card[];
  constructor(){
    this.ID = -1;
    this.name = 'player';
    this.life = 8000;
    this.hand = [];

  }
}

export class Position{
  public cell : Coordinate[] = [];
  constructor(){
    this.cell[0] = new Coordinate(282,546);
    this.cell[1] = new Coordinate(344,546);
    this.cell[2] = new Coordinate(406,546);
    this.cell[3] = new Coordinate(468,546);
    this.cell[4] = new Coordinate(530,546);
    this.cell[5] = new Coordinate(592,546);
    this.cell[6] = new Coordinate(282,34);
    this.cell[7] = new Coordinate(344,34);
    this.cell[8] = new Coordinate(406,34);
    this.cell[9] = new Coordinate(468,34);
    this.cell[10] = new Coordinate(530,34);
    this.cell[11] = new Coordinate(592,34);

  }
}

export class Coordinate{
  x : number;
  y : number;
  constructor(x : number, y : number){
    this.x = x;
    this.y = y;
  }
}