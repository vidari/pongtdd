'use strict'
import GameElement from "./GameElement.js";

export default class Paddle extends GameElement {
    constructor(ctx, width, height) {
        super(ctx, 0, 0, width || 0, height || 0);
    }

    startNewGame() {
        this.Y = this._ctx.canvas.height - 1 - this.HeightRadius;
        console.log(this.Y);
        console.log(this.HeightRadius);
        this.X = this.WidthRadius + Math.floor(Math.random() * (this._ctx.canvas.width - 1 - 2 * this.WidthRadius));
        this.draw();
    }
}