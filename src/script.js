const quotes = [
    "成功は最善を尽くすことにある。",
    "夢を追い求めることで、目標に近づく。",
    "失敗は成功のもと。",
    "希望を失わないでください。明日は新しい日です。",
    "努力は裏切らない。",
    // 他にもたくさんの名言を追加
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}
