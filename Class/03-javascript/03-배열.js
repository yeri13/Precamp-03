for(let i=0 ; i<5 ; i=i+1 ) {

}
// undefined

for(let i=0 ; i<5 ; i=i+1 ) {
    console.log("안녕하세요.")
}
// 5VM166:2 안녕하세요.

const classmates = ["철수", "영희", "훈이"]
// undefined
classmates[0]
// "철수"
classmates[1]
// "영희"
classmates[2]
// "훈이"


for(let i=0 ; i<3 ; i=i+1 ) {
    console.log(classmates[i] + "입니다.")
}
// VM606:3 철수입니다.
// VM606:3 영희입니다.
// VM606:3 훈이입니다.

classmates.length
// 3

for(let i=0 ; i<classmates.length ; i=i+1 ) {
    console.log(classmates[i] + "입니다.")
}
// VM670:3 철수입니다.
// VM670:3 영희입니다.
// VM670:3 훈이입니다.


const profile2 = [
    { name: "철수", age: 8 },
    { name: "영희", age: 10 },
]
// undefined

profile2[0].name
"철수"

profile2[0].age
8







const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]
undefined

fruits[0]
// {number: 1, title: "레드향"}

fruits[0].title
// "레드향"

fruits.length
// 10


for(let i=0 ; i<fruits.length ; i=i+1 ) {
    console.log(fruits[i].number + fruits[i].title)
}

// VM1588:2 1레드향
// VM1588:2 2샤인머스켓
// VM1588:2 3산청딸기
// VM1588:2 4한라봉
// VM1588:2 5사과
// VM1588:2 6애플망고
// VM1588:2 7딸기
// VM1588:2 8천혜향
// VM1588:2 9과일선물세트
// VM1588:2 10귤
undefined


for(let i=0 ; i<fruits.length ; i=i+1 ) {
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM1624:2 1 레드향
// VM1624:2 2 샤인머스켓
// VM1624:2 3 산청딸기
// VM1624:2 4 한라봉
// VM1624:2 5 사과
// VM1624:2 6 애플망고
// VM1624:2 7 딸기
// VM1624:2 8 천혜향
// VM1624:2 9 과일선물세트
// VM1624:2 10 귤
undefined


