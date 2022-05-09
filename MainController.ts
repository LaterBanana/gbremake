import {Card} from "./CustomObject.js";

let cursor_x : number = 436;
let cursor_y : number = 514;

window.addEventListener('DOMContentLoaded', function() {

  let card : Card = new Card();

  console.log('test');

  //描画コンテキストの取得
  let layer1 : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('Layer1');
  let l1_context = layer1.getContext('2d');
  let layer2 : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('Layer2');
  let l2_context = layer2.getContext('2d');

  if(l1_context == null || l2_context == null){
    return;
  }

  layer1.width = 624;
  layer1.height = 578;
  layer2.width = 624;
  layer2.height = 578;

  //色を指定する
  l1_context.fillStyle = 'red';

  // カードデザイン
  l1_context.fillStyle = 'rgba(255, 0, 0, 0.5)';
  l1_context.fillRect(344,130,248,320);

  // 手札
  l1_context.fillStyle = 'rgba(0, 0, 255, 0.5)';
  l1_context.fillRect(262,6,40,56);
  l1_context.fillRect(324,6,40,56);
  l1_context.fillRect(386,6,40,56);
  l1_context.fillRect(448,6,40,56);
  l1_context.fillRect(510,6,40,56);
  l1_context.fillRect(572,6,40,56);
  l1_context.fillRect(262,518,40,56);
  l1_context.fillRect(324,518,40,56);
  l1_context.fillRect(386,518,40,56);
  l1_context.fillRect(448,518,40,56);
  l1_context.fillRect(510,518,40,56);
  l1_context.fillRect(572,518,40,56);

  // ライフ
  l1_context.fillStyle = 'rgba(255, 0, 255, 0.5)';
  l1_context.fillRect(4,6,243,89);
  l1_context.fillRect(4,485,243,89);

  // フィールド
  l1_context.fillRect(4,102,305,89);

  // モンスター情報
  l1_context.fillRect(4,198,305,279);

  // カーソル
  l2_context.fillStyle = 'rgba(255, 0, 255, 0.5)';
  cursor_x = 436;
  cursor_y = 514;
  l2_context.fillRect(cursor_x,cursor_y,64,64);

  console.log('test');

})

document.addEventListener('keydown', function(e){
  let layer2 : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('Layer2');
  let l2_context = layer2.getContext('2d');

  console.log(e.key + ':' + e.code);

  if(e.key === 'ArrowLeft'){
    if(cursor_x - 62 < 312 && cursor_y > 2 && cursor_y < 514){
      return;
    }
    l2_context.clearRect(0,0,624,578);
    cursor_x = cursor_x - 62;
    console.log('x:' + cursor_x + ',y:' + cursor_y);
    l2_context.fillRect(cursor_x,cursor_y,64,64);

  }else if(e.key === 'ArrowRight'){
    if(cursor_x + 62 > 560){
      return;
    }

    l2_context.clearRect(0,0,624,578);
    cursor_x = cursor_x + 62;
    console.log('x:' + cursor_x + ',y:' + cursor_y);
    l2_context.fillRect(cursor_x,cursor_y,64,64);

  }else if(e.key === 'ArrowUp'){
    if(cursor_y - 64 < 0){
      return;
    }else if(cursor_y - 64 < 450 && cursor_y > 66){
      cursor_y = 66;
    }else{
      cursor_y = cursor_y - 64;
    }

    l2_context.clearRect(0,0,624,578);
    console.log('x:' + cursor_x + ',y:' + cursor_y);
    l2_context.fillRect(cursor_x,cursor_y,64,64);

  }else if(e.key === 'ArrowDown'){
    if(cursor_y + 62 > 514){
      return;
    }else if(cursor_y + 64 > 66 && cursor_y < 450){
      cursor_y = 450;
    }else{
      cursor_y = cursor_y + 64;
    }

    l2_context.clearRect(0,0,624,578);
    console.log('x:' + cursor_x + ',y:' + cursor_y);
    l2_context.fillRect(cursor_x,cursor_y,64,64);

  }

  if(e.key === 'a'){
    console.log('a button keydown');
  }
});
