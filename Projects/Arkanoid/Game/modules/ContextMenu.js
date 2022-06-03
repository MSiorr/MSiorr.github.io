import GameBoard from "./GameBoard.js";
import Brick from "./Brick.js";

export default class ContextMenu {
    /**
     * @param {HTMLElement} container
     * @param {GameBoard} gameBoard
     */
    constructor(container, gameBoard) {
        this.container = container;
        this.gameBoard = gameBoard;

        this.mainContextDiv = document.createElement("div");
        this.mainContextDiv.id = "mainContextDiv";
        this.mainContextDiv.style.display = "none";

        this.blackDiv = document.createElement("div");
        this.blackDiv.id = "blackDiv";

        this.contextDiv = document.createElement("div");
        this.contextDiv.id = "contextDiv";

        this.mainContextDiv.appendChild(this.blackDiv);
        this.mainContextDiv.appendChild(this.contextDiv);

        this.container.appendChild(this.mainContextDiv);

        this.reader = new FileReader();

        this.AddFunctionality();
    }

    AddFunctionality() {
        this.blackDiv.onclick = (e) => {
            this.mainContextDiv.style.display = "none";
        }

        this.contextDiv.onclick = () => {
            this.mainContextDiv.style.display = "none";
        }

        this.reader.onload = (e) => {
            //@ts-ignore
            let newData = JSON.parse(e.currentTarget.result)
            let newAreaData = [];
            newData.forEach(e => {
                if (e.posX < this.gameBoard.boardW && e.posY < this.gameBoard.boardH) {
                    newAreaData.push(new Brick(e.posX, e.posY, e.srcX, e.srcY, this.gameBoard.scale));
                }
            })

            this.gameBoard.bricksData = newAreaData;
        }
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    CreateContextMenu(x, y) {
        this.contextDiv.innerHTML = "";
        this.contextDiv.style.top = Math.min(y, window.innerHeight - 41) + "px";
        this.contextDiv.style.left = Math.min(x, window.innerWidth - 272) + "px";

        this.loadFileDiv = document.createElement("div");
        this.loadFileDiv.classList.add("contextMenuOption");
        this.loadFileDiv.innerHTML = "<span class='contextLeft'>Load data from file</span><span class='contextRight'>Ctrl + L</span>"

        this.contextDiv.appendChild(this.loadFileDiv);

        this.loadFileDiv.onclick = () => {
            this.LoadData();
        }
    }

    LoadData() {
        let fileInput = document.createElement("input");
        fileInput.type = "file"
        fileInput.onchange = () => {
            let file = fileInput.files[0]
            this.reader.readAsText(file, 'utf-8');
        }

        fileInput.click();
    }
}