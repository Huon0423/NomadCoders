const aFunc1 = (a, b) => a+b;

const aFunc2 = () => {
    const a = 1;
    const b = 2;
    return a+b
}

const aFunc3a = (a) => a+200;

const aFunc3b = b => b+200;

console.log(`첫번째 함수 : ${aFunc1(1,2)}
두번째 함수 : ${aFunc2()}
세번째 함수 : ${aFunc3a(10)}
네번째 함수 : ${aFunc3b(20)}`);