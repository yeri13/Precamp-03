const classmates = ["철수", "영희", "훈이"]
const classmates = ["철수", "영희", "훈이"]
classmates[0]
// "철수"
classmates[1]
// "영희"
const email = "codecamp@gamil.com"
// undefined
email.length
18
email[0]
// "c"
email[1]
// "o"
email.includes("@")
// true
email.split("@")
// (2) ["codecamp", "gamil.com"]
email.split("@")[0]
// "codecamp"
email.split("@")[1]
// "gamil.com"
const front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
front
// "codecamp"
back
// "gamil.com"
const newFront = []
// undefined
newFront.push(front[0])
// 1
newFront
// ["c"]
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ["c", "o", "d", "e"]
newFront.push("****")
// 5
newFront.push("****")
// 6
newFront.push("****")
// 7
newFront.push("****")
// 8
newFront
// (8) ["c", "o", "d", "e", "****", "****", "****", "****"]0: "c"1: "o"2: "d"3: "e"4: "****"5: "****"6: "****"7: "****"length: 8__proto__: Array(0)
newFront.push("*")
// 9
newFront.pop()
// "*"
newFront.pop()
// "****"
newFront.pop()
// "****"
newFront.pop()
// "****"
newFront
(5) ["c", "o", "d", "e", "****"]
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront.push("*")
// 9
newFront
// (9) ["c", "o", "d", "e", "****", "*", "*", "*", "*"]
newFront.join("")
// "code********"
newFront.join("") + "@" + back
// "code********@gamil.com"
const result = newFront.join("") + "@" + back
// undefined
result
// "code********@gamil.com"