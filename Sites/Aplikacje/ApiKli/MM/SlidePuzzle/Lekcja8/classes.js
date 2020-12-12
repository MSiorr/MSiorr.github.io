class PuzzleStructure {

    constructor(count) {
        this.count = count;
        this.blankElement;
        this.puzzleTable = [];
        this.puzzleNumbers = [];
    }

    CreatePuzzle() {
        arena.innerHTML = "";
        for (let i = 0; i < this.count; i++) {
            this.puzzleTable.push([]);
            for (let j = 0; j < this.count; j++) {
                if (i != this.count - 1 || j != this.count - 1) {
                    let div = document.createElement("div");
                    div.classList.add("puzzle")
                    div.style.backgroundPosition = -(600 / this.count) * i + "px " + -(600 / this.count) * j + "px";
                    div.style.width = 600 / this.count + "px";
                    div.style.height = 600 / this.count + "px";
                    div.style.left = (600 / this.count) * i + "px";
                    div.style.top = (600 / this.count) * j + "px";
                    div.innerHTML = j * this.count + i;
                    div.addEventListener("click", (e) => {
                        let x = e.target.offsetLeft / (600 / this.count);
                        let y = e.target.offsetTop / (600 / this.count);
                        this.MovePuzzle(e.target, x, y);
                    })
                    arena.appendChild(div)
                    this.puzzleTable[i].push(div);
                    this.puzzleNumbers.push(i * this.count + j)
                } else {
                    this.blankElement = { x: j, y: i }
                    this.puzzleTable[i].push(null)
                    this.puzzleNumbers.push(null)
                }
            }
        }
        this.Draw();
    }

    MovePuzzle(element, x, y) {
        if (Math.abs((this.blankElement.x - x)) + Math.abs((this.blankElement.y - y)) == 1) {

            let directX = 0;
            let directY = 0;
            if (this.blankElement.x != x) {
                directX = Math.sign(this.blankElement.x - x);
                directY = 0;
            } else {
                directX = 0;
                directY = Math.sign(this.blankElement.y - y);
            }
            let speed = 10;
            let road = 600 / this.count;
            let time = 100;
            let count = time / speed;
            let indexSlide = 0;
            let win = true;

            let slide = setInterval(() => {
                element.style.left = element.offsetLeft + (road / count) * directX + "px";
                element.style.top = element.offsetTop + (road / count) * directY + "px";
                indexSlide++;
                if (indexSlide == count) {
                    clearInterval(slide);
                    this.puzzleTable[this.blankElement.x][this.blankElement.y] = element;
                    this.puzzleTable[x][y] = null;
                    this.puzzleNumbers[this.blankElement.x * this.count + this.blankElement.y] = this.puzzleNumbers[x * this.count + y]
                    this.puzzleNumbers[x * this.count + y] = null
                    this.blankElement.x = x;
                    this.blankElement.y = y;
                    for (let i = 0; i < this.puzzleNumbers.length - 1; i++) {
                        if (this.puzzleNumbers[i] != i) {
                            win = false
                        }
                    }
                    if (win == true) {
                        setTimeout(() => {
                            let div = document.createElement("div");
                            div.classList.add("puzzle")
                            div.style.backgroundPosition = -(600 / this.count) * this.blankElement.x + "px " + -(600 / this.count) * this.blankElement.y + "px";
                            div.style.width = 600 / this.count + "px";
                            div.style.height = 600 / this.count + "px";
                            div.style.left = (600 / this.count) * this.blankElement.x + "px";
                            div.style.top = (600 / this.count) * this.blankElement.y + "px";
                            this.puzzleTable[this.blankElement.x][this.blankElement.y] = div
                            arena.appendChild(div);
                            for(let i = 0; i<this.puzzleTable.length; i++){
                                for(let j=0; j<this.puzzleTable[i].length; j++){
                                    this.puzzleTable[i][j].innerHTML = "";
                                    this.puzzleTable[i][j].style.border = "none";
                                }
                            }
                            setTimeout(function () {
                                alert("WIN");
                            }, 10)
                        }, 10)
                    }
                }
            }, speed);
        }
    }

    Draw() {
        let drawCount = this.count * this.count * 10
        let drawIndex = 0
        let actionToSelected = "";

        let drawMachine = setInterval(() => {
            if (drawIndex == drawCount) {
                console.log(this.puzzleNumbers)
                clearInterval(drawMachine)
            } else {
                let targets = []

                targets.push({ x: this.blankElement.x - 1, y: this.blankElement.y, action: "x-" })
                targets.push({ x: this.blankElement.x + 1, y: this.blankElement.y, action: "x+" })
                targets.push({ x: this.blankElement.x, y: this.blankElement.y - 1, action: "y-" })
                targets.push({ x: this.blankElement.x, y: this.blankElement.y + 1, action: "y+" })

                for (let i = targets.length - 1; i >= 0; i--) {
                    if (targets[i].x < 0 || targets[i].x > this.count - 1 || targets[i].y < 0 || targets[i].y > this.count - 1 || targets[i].action == actionToSelected) {
                        targets.splice(i, 1)
                    }
                }

                let puzzleIndex = Math.floor(Math.random() * targets.length);
                let puzzleCoordinates = targets[puzzleIndex]
                let targetPuzzle = this.puzzleTable[puzzleCoordinates.x][puzzleCoordinates.y]

                if (targets[puzzleIndex].action[1] == "+") {
                    actionToSelected = targets[puzzleIndex].action[0] + "-"
                } else {
                    actionToSelected = targets[puzzleIndex].action[0] + "+"
                }

                targetPuzzle.style.left = this.blankElement.x * (600 / this.count) + "px";
                targetPuzzle.style.top = this.blankElement.y * (600 / this.count) + "px";
                this.puzzleTable[this.blankElement.x][this.blankElement.y] = targetPuzzle;
                this.puzzleTable[puzzleCoordinates.x][puzzleCoordinates.y] = null;
                this.puzzleNumbers[this.blankElement.x * this.count + this.blankElement.y] = this.puzzleNumbers[puzzleCoordinates.x * this.count + puzzleCoordinates.y]
                this.puzzleNumbers[puzzleCoordinates.x * this.count + puzzleCoordinates.y] = null
                this.blankElement.x = puzzleCoordinates.x;
                this.blankElement.y = puzzleCoordinates.y;

                drawIndex++
            }
        }, 15);
    }
}