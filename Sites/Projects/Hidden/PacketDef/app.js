let arena = document.getElementById("arena");
let xValInput = document.getElementById("arenaXInput");
let yValInput = document.getElementById("arenaYInput");
let menuButton = document.getElementById("menuBtn");
let btnToJSON = document.getElementById("toJSON");

let list = document.getElementById("list");


let x = 0;
let y = 0;

let dataList = [];
let fieldsList = [];

let selectedItem = null;

menuButton.addEventListener("click", () => {
    //@ts-ignore
    x = xValInput.value;
    //@ts-ignore
    y = yValInput.value;

    if (x > 80) {
        x = 80;
    }
    if (y > 50) {
        y = 50;
    }

    arena.innerHTML = "";
    dataList = [];
    fieldsList = [];

    for (let i = 0; i < x; i++) {
        let arenaColumn = document.createElement("div");
        arenaColumn.classList.add("arenaColumn");
        dataList.push([]);
        fieldsList.push([]);
        for (let j = 0; j < y; j++) {
            let arenaField = document.createElement("div");
            arenaField.classList.add("arenaField");
            arenaField.style.width = 700 / y + "px";
            arenaField.style.height = 700 / y + "px";
            arenaField.addEventListener("click", function () {
                fieldOnLeftClick(this, i, j);
            })
            arenaField.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                fieldOnRightClick(this, i, j);
            })
            arenaColumn.appendChild(arenaField);
            dataList[i].unshift(0)
            fieldsList[i].unshift(arenaField)
        }
        arena.appendChild(arenaColumn)
    }
    console.log(fieldsList);
})

let itemsOnList = [
    { type: 0, description: "Cloud", miniatureType: "color", srcOrColor: "red" },
    { type: 1, description: "Path Node", miniatureType: "color", srcOrColor: "gray" },
    { type: 2, description: "Pc", miniatureType: "color", srcOrColor: "green" },
    { type: 3, description: "Router", miniatureType: "color", srcOrColor: "blue" },
    { type: 4, description: "Hub", miniatureType: "color", srcOrColor: "yellow" },
]

if (itemsOnList.length > 7) {
    list.style.overflowY = "scroll";
}

let itemsReferences = [];

itemsOnList.forEach((e) => {
    let listItem = document.createElement("div");
    listItem.classList.add("listItem");
    listItem.innerHTML = e.description;
    let miniature = document.createElement("div");
    miniature.classList.add("listItemMiniature")
    if (e.miniatureType == "color") {
        miniature.style.backgroundColor = e.srcOrColor;
    } else {
        miniature.style.backgroundImage = `url("./img/${e.srcOrColor}.png")`
    }
    listItem.addEventListener("click", () => {
        itemsReferences.forEach((e) => {
            e.style.removeProperty("background-color");
            e.style.removeProperty("border-color");
        })
        listItem.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        listItem.style.borderColor = "rgba(255, 255, 255, 0.2)";
        selectedItem = e;
        console.log(selectedItem)
    })
    itemsReferences.push(listItem)
    listItem.appendChild(miniature)
    list.appendChild(listItem)
})

btnToJSON.addEventListener("click", () => {
    let name = prompt("Nazwa pliku: ");
    let id = 1;
    let jsonText = { content: [] };
    for (let i = 0; i < dataList.length; i++) {
        for (let j = 0; j < dataList[i].length; j++) {
            if (dataList[i][j] != 0) {
                jsonText.content.push({
                    id: id,
                    x: i,
                    y: j,
                    type: dataList[i][j].type
                })
                id++;
            }
        }
    }
    console.log(JSON.stringify(jsonText));
    let aDownload = document.createElement("a");
    aDownload.setAttribute("download", `${name}.json`);
    aDownload.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonText)));
    aDownload.style.display = "none";
    document.body.appendChild(aDownload);
    aDownload.click();
    document.body.removeChild(aDownload);
})

function fieldOnLeftClick(element, x, y) {
    if (selectedItem != null) {
        if (selectedItem.miniatureType == "color") {
            element.style.backgroundColor = selectedItem.srcOrColor;
        } else {
            element.style.backgroundImage = `url("./img/${selectedItem.srcOrColor}.png")`;
        }
        dataList[x][y] = selectedItem;
    }
}

function fieldOnRightClick(element, x, y) {
    dataList[x][y] = 0;
    element.style.removeProperty("background-color");
    element.style.removeProperty("background-image");
}