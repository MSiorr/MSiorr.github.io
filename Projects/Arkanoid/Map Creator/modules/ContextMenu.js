import MapBuilderArea from "./MapBuilderArea.js";

export default class ContextMenu {
    /**
     * @param {HTMLElement} container
     * @param {MapBuilderArea} mapBuilder
     */
    constructor(container, mapBuilder){
        this.container = container;
        this.mapBuilder = mapBuilder;

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

        this.areaMemory = [];
        this.memoryIndex = 0;

        this.reader = new FileReader();
        
        this.AddFunctionality();
    }

    AddFunctionality(){
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
            for (let i = 0; i < this.mapBuilder.areaW; i++) {
                newAreaData[i] = [];
                for (let j = 0; j < this.mapBuilder.areaH; j++) {
                    newAreaData[i][j] = null;
                }
            }
            newData.forEach( e => {
                newAreaData[e.posX][e.posY] = {x: e.srcX, y: e.srcY};
            })

            this.areaMemory = [JSON.stringify(newAreaData)];
            this.memoryIndex = 0;

            this.mapBuilder.areaData = JSON.parse(JSON.stringify(newAreaData))
            this.mapBuilder.mouseClickPosition = [];
        }
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    CreateContextMenu(x,y){
        this.contextDiv.innerHTML = "";
        this.contextDiv.style.top = Math.min(y, window.innerHeight - 205) + "px";
        this.contextDiv.style.left = Math.min(x, window.innerWidth - 272) + "px";

        this.undoDiv = document.createElement("div");
        this.undoDiv.classList.add("contextMenuOption");
        this.undoDiv.innerHTML = "<span class='contextLeft'>Undo</span><span class='contextRight'>Ctrl + Z</span>"

        this.redoDiv = document.createElement("div");
        this.redoDiv.classList.add("contextMenuOption");
        this.redoDiv.innerHTML = "<span class='contextLeft'>Redo</span><span class='contextRight'>Ctrl + Y</span>"

        this.deleteDiv = document.createElement("div");
        this.deleteDiv.classList.add("contextMenuOption");
        this.deleteDiv.innerHTML = "<span class='contextLeft'>Delete</span><span class='contextRight'>Del</span>"

        this.saveFileDiv = document.createElement("div");
        this.saveFileDiv.classList.add("contextMenuOption");
        this.saveFileDiv.innerHTML = "<span class='contextLeft'>Save to file</span><span class='contextRight'>Ctrl + S</span>"

        this.loadFileDiv = document.createElement("div");
        this.loadFileDiv.classList.add("contextMenuOption");
        this.loadFileDiv.innerHTML = "<span class='contextLeft'>Load data from file</span><span class='contextRight'>Ctrl + L</span>"

        this.contextDiv.appendChild(this.undoDiv);
        this.contextDiv.appendChild(this.redoDiv);
        this.contextDiv.appendChild(this.deleteDiv);
        this.contextDiv.appendChild(this.saveFileDiv);
        this.contextDiv.appendChild(this.loadFileDiv);

        this.undoDiv.onclick = () => {
            this.UndoData();
        }

        this.redoDiv.onclick = () => {
            this.RedoData();
        }

        this.deleteDiv.onclick = () => {
            this.DeleteData();
        }

        this.saveFileDiv.onclick = () => {
            this.SaveData();
        }

        this.loadFileDiv.onclick = () => {
            this.LoadData();
        }
    }

    DeleteData(){
        if(this.mapBuilder.mouseClickPosition.length > 0){
            this.mapBuilder.mouseClickPosition.forEach(e => {
                this.mapBuilder.areaData[e.x][e.y] = null;
            })
            this.mapBuilder.mouseClickPosition = [];

            this.areaMemory.splice(this.memoryIndex+1);
    
            this.areaMemory.push(JSON.stringify(this.mapBuilder.areaData));
            this.memoryIndex++;
        }
    }

    UndoData(){
        let newIndex = Math.max(0, this.memoryIndex - 1);
        this.memoryIndex = newIndex;

        this.mapBuilder.areaData = JSON.parse(this.areaMemory[newIndex]);

        this.mapBuilder.mouseClickPosition = [];
    }

    RedoData(){
        let newIndex = Math.min(this.areaMemory.length-1, this.memoryIndex + 1);
        this.memoryIndex = newIndex;

        this.mapBuilder.areaData = JSON.parse(this.areaMemory[newIndex]);

        this.mapBuilder.mouseClickPosition = [];
    }

    SaveData(){
        setTimeout( () => {
            let name = prompt('Podaj nazwę pliku');
            if(name == ''){
                name = "arkanoidMap";
            }
    
            let dataToSave = [];
    
            this.mapBuilder.areaData.forEach( (x,i) => {
                x.forEach( (y,j) => {
                    if(y != null){
                        dataToSave.push({
                            posX: i,
                            posY: j,
                            srcX: y.x,
                            srcY: y.y
                        })
                    }
                })
            })
    
            let jsonData = JSON.stringify(dataToSave);
            let blob = new Blob([jsonData], { type: "application/json" });
            let url = URL.createObjectURL(blob);
    
            let a = document.createElement("a");
            a.href = url;
            a.download = name;
            a.click();
        }, 10)
    }

    LoadData(){
        let fileInput = document.createElement("input");
        fileInput.type = "file"
        fileInput.onchange = () => {
            let file = fileInput.files[0]
            this.reader.readAsText(file, 'utf-8');
        }

        fileInput.click();
    }
}