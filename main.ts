radio.onReceivedNumber(function (receivedNumber) {
    if (ジャンケン == 1 && receivedNumber == 1) {
        radio.sendString("あいこ")
    } else if (ジャンケン == 1 && receivedNumber == 2) {
        radio.sendString("まけ")
    } else if (ジャンケン == 1 && receivedNumber == 3) {
        radio.sendString("かち")
    } else if (ジャンケン == 2 && receivedNumber == 2) {
        radio.sendString("あいこ")
    } else if (ジャンケン == 2 && receivedNumber == 3) {
        radio.sendString("まけ")
    } else if (ジャンケン == 2 && receivedNumber == 1) {
        radio.sendString("かち")
    } else if (ジャンケン == 3 && receivedNumber == 3) {
        radio.sendString("あいこ")
    } else if (ジャンケン == 3 && receivedNumber == 1) {
        radio.sendString("まけ")
    } else if (ジャンケン == 3 && receivedNumber == 2) {
        radio.sendString("かち")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    radio.sendNumber(1)
    ジャンケン = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        `)
    radio.sendNumber(3)
    ジャンケン = 3
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "かち") {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString == "まけ") {
        basic.showIcon(IconNames.Sad)
    } else if (receivedString == "あいこ") {
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . # . # .
        . # # # .
        . . # . .
        `)
    radio.sendNumber(2)
    ジャンケン = 2
})
let ジャンケン = 0
radio.setGroup(10)
basic.showIcon(IconNames.Heart)
