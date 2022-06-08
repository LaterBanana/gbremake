import { Card, Position } from "./CustomObject.js";
let cursor_x = 436;
let cursor_y = 514;
let cells = new Position().cell;
window.addEventListener('DOMContentLoaded', function () {
    let card = new Card();
    let hand = deckLogic();
    console.log(hand);
    // 画面の基本情報
    let info_context = getContext('InfoLayer');
    // ライフ
    info_context.fillStyle = 'rgba(255, 0, 255, 0.5)';
    info_context.fillRect(4, 6, 243, 89);
    info_context.fillRect(4, 485, 243, 89);
    // フィールド
    info_context.fillRect(4, 102, 305, 89);
    // モンスター情報
    info_context.fillRect(4, 198, 305, 279);
    // プレイヤー手札情報
    let player_context = getContext('PlayerLayer');
    player_context.fillStyle = 'rgba(0, 0, 255, 0.5)';
    for (let i = 0; i < 6; i++) {
        player_context.fillRect(cells[i].x - 20, cells[i].y - 28, 40, 56);
    }
    // CPU手札情報
    let enemy_context = getContext('EnemyLayer');
    enemy_context.fillStyle = 'rgba(0, 0, 255, 0.5)';
    for (let i = 6; i < 12; i++) {
        player_context.fillRect(cells[i].x - 20, cells[i].y - 28, 40, 56);
    }
    // カーソル
    let cursor_context = getContext('CursorLayer');
    // カーソル
    cursor_context.fillStyle = 'rgba(255, 0, 255, 0.5)';
    cursor_context.fillRect(cursor_x, cursor_y, 64, 64);
    cursor_x = 436;
    cursor_y = 514;
    console.log('初期化終了');
});
document.addEventListener('keydown', function (e) {
    let layer2 = document.getElementById('CursorLayer');
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
function deckLogic() {
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
/**
 * 配列の順序をランダムに入れ替える
 * @param arr 対象配列
 * @returns 操作後の配列
 */
function shuffle(arr) {
    let size = arr.length;
    for (let i = size; i > 0; i--) {
        let ran = Math.floor(Math.random() * i);
        arr.push(arr[ran]);
        arr.splice(ran, 1);
    }
    return arr;
}
/**
 * キャンバスIDからキャンバスコンテキストをリサイズして返す
 * @param id キャンバスID
 * @returns キャンバスコンテキスト
 */
function getContext(id) {
    let canvas = document.getElementById(id);
    canvas.width = 624;
    canvas.height = 578;
    let canvas_context = canvas.getContext('2d');
    if (canvas_context == null) {
        return new CanvasRenderingContext2D();
    }
    return canvas_context;
}
