const angka = 12
console.log(angka)

class Point {
    #foo = "okee"
    #private(prefix) {
        return prefix + this.#foo
    }
    getScore() {
        return this.#foo
    }
}

const point = new Point().getScore()
console.log(point)