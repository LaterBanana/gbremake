import { Card } from "./CustomObject.js";
let cursor_x = 436;
let cursor_y = 514;
window.addEventListener('DOMContentLoaded', function () {
    let card = new Card();
    console.log('test');
    let hand = deckLogjc();
    console.log(hand);
    //描画コンテキストの取得
    let layer1 = document.getElementById('Layer1');
    let l1_context = layer1.getContext('2d');
    let layer2 = document.getElementById('Layer2');
    let l2_context = layer2.getContext('2d');
    if (l1_context == null || l2_context == null) {
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
    l1_context.fillRect(344, 130, 248, 320);
    // 手札
    l1_context.fillStyle = 'rgba(0, 0, 255, 0.5)';
    l1_context.fillRect(262, 6, 40, 56);
    l1_context.fillRect(324, 6, 40, 56);
    l1_context.fillRect(386, 6, 40, 56);
    l1_context.fillRect(448, 6, 40, 56);
    l1_context.fillRect(510, 6, 40, 56);
    l1_context.fillRect(572, 6, 40, 56);
    l1_context.fillRect(262, 518, 40, 56);
    l1_context.fillRect(324, 518, 40, 56);
    l1_context.fillRect(386, 518, 40, 56);
    l1_context.fillRect(448, 518, 40, 56);
    l1_context.fillRect(510, 518, 40, 56);
    l1_context.fillRect(572, 518, 40, 56);
    // ライフ
    l1_context.fillStyle = 'rgba(255, 0, 255, 0.5)';
    l1_context.fillRect(4, 6, 243, 89);
    l1_context.fillRect(4, 485, 243, 89);
    // フィールド
    l1_context.fillRect(4, 102, 305, 89);
    // モンスター情報
    l1_context.fillRect(4, 198, 305, 279);
    // カーソル
    l2_context.fillStyle = 'rgba(255, 0, 255, 0.5)';
    cursor_x = 436;
    cursor_y = 514;
    l2_context.fillRect(cursor_x, cursor_y, 64, 64);
    console.log('test');
});
document.addEventListener('keydown', function (e) {
    let layer2 = document.getElementById('Layer2');
    let l2_context = layer2.getContext('2d');
    console.log(e.key + ':' + e.code);
    if (e.key === 'ArrowLeft') {
        if (cursor_x - 62 < 312 && cursor_y > 2 && cursor_y < 514) {
            return;
        }
        l2_context.clearRect(0, 0, 624, 578);
        cursor_x = cursor_x - 62;
        console.log('x:' + cursor_x + ',y:' + cursor_y);
        l2_context.fillRect(cursor_x, cursor_y, 64, 64);
    }
    else if (e.key === 'ArrowRight') {
        if (cursor_x + 62 > 560) {
            return;
        }
        l2_context.clearRect(0, 0, 624, 578);
        cursor_x = cursor_x + 62;
        console.log('x:' + cursor_x + ',y:' + cursor_y);
        l2_context.fillRect(cursor_x, cursor_y, 64, 64);
    }
    else if (e.key === 'ArrowUp') {
        if (cursor_y - 64 < 0) {
            return;
        }
        else if (cursor_y - 64 < 450 && cursor_y > 66) {
            cursor_y = 66;
        }
        else {
            cursor_y = cursor_y - 64;
        }
        l2_context.clearRect(0, 0, 624, 578);
        console.log('x:' + cursor_x + ',y:' + cursor_y);
        l2_context.fillRect(cursor_x, cursor_y, 64, 64);
    }
    else if (e.key === 'ArrowDown') {
        if (cursor_y + 62 > 514) {
            return;
        }
        else if (cursor_y + 64 > 66 && cursor_y < 450) {
            cursor_y = 450;
        }
        else {
            cursor_y = cursor_y + 64;
        }
        l2_context.clearRect(0, 0, 624, 578);
        console.log('x:' + cursor_x + ',y:' + cursor_y);
        l2_context.fillRect(cursor_x, cursor_y, 64, 64);
    }
    if (e.key === 'a') {
        console.log('a button keydown');
    }
});
function deckLogjc() {
    let deck = new Array();
    let hand = new Array();
    deck[0] = "ヤマタノ竜絵巻";
    deck[1] = "謎の手";
    deck[2] = "謎の手";
    deck[3] = "謎の手";
    deck[4] = "仮面道化";
    deck[5] = "ゾンビランプ";
    deck[6] = "デーモン・ビーバー";
    deck[7] = "スピック";
    deck[8] = "サンダーキッズ";
    deck[9] = "ダンシング・エルフ";
    deck[10] = "レッグル";
    deck[11] = "レッグル";
    deck[12] = "異国の戦士";
    deck[13] = "モンスター・アイ";
    deck[14] = "カラクリ蜘蛛";
    deck[15] = "デビル・フランケン";
    deck[16] = "人造人間7号";
    deck[17] = "ホワイト・ドルフィン";
    deck[18] = "ツルプルン";
    deck[19] = "ツルプルン";
    deck[20] = "キラー・スネーク";
    deck[21] = "キラー・スネーク";
    deck[22] = "ブークー";
    deck[23] = "魔界植物";
    deck[24] = "ゲール・ドグラ";
    deck[25] = "ムカムカ";
    deck[26] = "スター・ボーイ";
    deck[27] = "骨ネズミ";
    deck[28] = "カエルスライム";
    deck[29] = "屋根裏の物の怪";
    deck[30] = "屋根裏の物の怪";
    deck[31] = "深淵に咲く花";
    deck[32] = "くちばしヘビ";
    deck[33] = "くちばしヘビ";
    deck[34] = "ミューズの天使";
    deck[35] = "ミューズの天使";
    deck[36] = "ミューズの天使";
    deck[37] = "ブレードフライ";
    deck[38] = "悪魔の偵察者";
    deck[39] = "悪魔の偵察者";
    deck = shuffle(deck);
    for (let i = 0; i < 5; i++) {
        hand[i] = deck[i];
    }
    return hand;
}
function shuffle(arr) {
    let size = arr.length;
    for (let i = size; i > 0; i--) {
        let ran = Math.floor(Math.random() * i);
        arr.push(arr[ran]);
        arr.splice(ran, 1);
    }
    return arr;
}
