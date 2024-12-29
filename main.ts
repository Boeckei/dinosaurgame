let Dino: game.LedSprite = null
let Kaktus: game.LedSprite = null
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Dino.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    Dino.change(LedSpriteProperty.Y, 1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    game.setLife(10)
    basic.showString("Los!")
    Dino = game.createSprite(1, 4)
    for (let index = 0; index < 1; index++) {
        Kaktus = game.createSprite(4, 4)
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        if (Dino.isTouching(Kaktus)) {
            game.removeLife(1)
        }
        Kaktus.change(LedSpriteProperty.X, -1)
        if (Dino.isTouching(Kaktus)) {
            game.removeLife(1)
        }
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        Kaktus.delete()
    }
    Dino.delete()
    basic.showString("Du hast gewonnen!")
    for (let index = 0; index < 999999; index++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
