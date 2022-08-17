const quotes = [
    {
    quote: "반성하지 않는 삶은 살 가치가 없다.",
    author: "소크라테스"
    },
    {
    quote: "부모들이 우리의 어린 시절을 꾸며주셨으니 우리는 그들의 말년을 꾸며주어야 한다.",
    author: "생텍쥐페리"
    },
    {
    quote: "승리는 가장 끈기 있는 자에게 돌아간다.",
    author: "나폴레옹 보나파르트"
    },
    {
    quote: "성공은 99%의 노력과 1%의 영감으로 이루어 진다.",
    author: "토머스 에디슨"
    },
    {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인"
    },
    {
    quote: "시작이 반이다.",
    author: "아리스토텔레스"
    },
    {
    quote: "변명 중에서도 가장 어리석고 못난 변명은 “시간이 없어서”라는 변명이다.",
    author: "토머스 에디슨"
    },
    {
    quote: "거리낌 없이 한 시간을 낭비하는 사람은 아직 삶의 가치를 발견하지 못한 사람이다.",
    author: "찰스다윈"
    },
    {
    quote: "사람은 망설이지만 시간은 망설이지 않는다. 잃어버린 시간은 되돌아오지 않는다.",
    author: "벤자민 프랭클린"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;