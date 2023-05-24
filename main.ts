input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 리스트.length - 2; index++) {
        if (리스트[index] > 리스트[index + 1]) {
            임시 = 리스트[index]
            리스트[index] = 리스트[index + 1]
            리스트[index + 1] = 임시
        }
    }
    basic.clearScreen()
    for (let index = 0; index <= 리스트.length - 1; index++) {
        led.plot(index, 리스트[index])
    }
})
let 임시 = 0
let 리스트: number[] = []
리스트 = [
2,
4,
1,
0,
3
]
for (let index = 0; index <= 리스트.length - 1; index++) {
    led.plot(index, 리스트[index])
}
