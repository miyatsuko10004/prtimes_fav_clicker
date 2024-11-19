const clickCount = 100; // クリックしたい回数いれる
const buttonSelector = '.like-button_likeButton__q_tCk';
const button = document.querySelector(buttonSelector);
let clicks = 0;
const interval = setInterval(() => {
    if (clicks >= clickCount) {
        clearInterval(interval);
        console.log(`Clicked ${clicks} times.`);
        return;
    }
    button.click();
    clicks++;
    console.log(`Click ${clicks}`);
}, 100); // クリックの間隔（ms）
