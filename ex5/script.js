// 5.1
const h1Element = document.getElementById("h1Element");
h1Element.textContent = "Changed Text";

// 5.2
const li = document.querySelectorAll("li");
li.forEach(el => el.style.color = "red");

// 5.3
const div = document.getElementById("div");
div.innerHTML += `<p>This text has been added via js</p>`;

// 5.4
const img = document.getElementById("img");
img.setAttribute("src", "img.jpg");

// 5.5
const box = document.getElementById("box");
box.classList.toggle("blue");

// 5.6
const p = document.getElementById("p");
p.remove();

// 5.7
const btn = document.getElementById("btn");
const h2 = document.getElementById("h2");
btn.addEventListener("click", () => {
    h2.innerHTML = "Another Text"
})

// 5.8
const input = document.getElementById("text");
const p2 = document.getElementById("p2");
input.addEventListener("keyup", () => {
    p2.textContent = input.value;
})

// 5.9
const ul = document.getElementById("list");
const text = document.getElementById("addDiv");
const firstChildul = ul.firstElementChild.textContent;
const lastChildul = ul.lastElementChild.textContent;
text.textContent = `First child is: ${firstChildul}; last child is ${lastChildul}`

// 5.10
const colorBox = document.getElementById("color-box");
const colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", () => {
    colorBox.classList.contains("blue") ? colorBox.classList.toggle("green") : colorBox.classList.toggle("blue")
})

// 5.11
const container = document.getElementById("table-div");
const htmlCode = `
        <table style="width: 200px; height: 100px;">
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
`
container.innerHTML = htmlCode;

// 5.12
const containerList = document.getElementById("list-div");
const htmlCode2 = `       
        <ul id="ul-id">
        </ul>
        <button id="add-btn">Add random nr to the list</button>
`
containerList.innerHTML = htmlCode2;
const addBtn = document.getElementById("add-btn");
const nrList = document.getElementById("ul-id")
addBtn.addEventListener("click", () => {
    let nr = Math.floor(Math.random() * 10000);
    const li = `<li>${nr}</li>`;
    nrList.insertAdjacentHTML("beforeend", li);
})