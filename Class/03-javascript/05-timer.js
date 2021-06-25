setTimeout(() => {
    console.log("안녕하세요~")
}, 2000)
2
// VM650:2 안녕하세요~

setInterval(() => {
    console.log("안녕하세요~")
}, 1000)
3
// 68VM688:2 안녕하세요~


// stopwatch
let count = 10
setInterval(() => {
    if(count >= 0){
        console.log(count)
        count = count - 1
    }
}, 1000)



// 내장함수 실무 실습 (타이머)

let count = 180
setInterval(() => {
    if(count >= 0){ 
        const minutes = Math.floor(count / 60)
        const seconds = count % 60
        console.log(minutes + ":" + seconds)
        count = count - 1
    }
}, 1000)
2