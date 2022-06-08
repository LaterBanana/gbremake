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
  }
}

class Coordinate{
  x : number;
  y : number;
  constructor(x : number, y : number){
    this.x = x;
    this.y = y;
  }
}