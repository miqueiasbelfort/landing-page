
const header = document.querySelector(".header")
const containerBestFoodsDay = document.querySelector(".containerBestFoodsDay")

const foodsCards = [
    {
        id: 1,
        foto: "./assents/hanburguer.svg",
        nome: "Burguer King",
        desc: "Um hamburguer suculenco com ovos, bacon, cheedar, duas carnes e pão integral.",
    },
    {
        id: 2,
        foto: "./assents/pizza.svg",
        nome: "Pizza Napolitana",
        desc: "Pizza Napolitana com calabresa, borda de frango com catupiry.",
    },
    {
        id: 3,
        foto: "./assents/chineseFood.svg",
        nome: "Lammen Chines",
        desc: "Lammen chines com bacoon, tomate, frango o melhor do mundo!",
    }
]


window.addEventListener("scroll", () => {
    if (window.scrollY > 15){
        header.classList.add("blackHeader")
    } else {
        header.classList.remove("blackHeader")
    }
})

function rondomFood(){
    setInterval(rodarCardapio, 10000)
}

function rodarCardapio(){
    const rondomNum = Math.floor(Math.random() * foodsCards.length + 1)

    foodsCards.forEach(element => {
        //console.log(element)
        if(element.id == rondomNum){
            containerBestFoodsDay.innerHTML = `
            <div class="photoFood">
                <img src="${element.foto}" alt="${element.nome}">
            </div>
            <div class="infoFood">
                <div class="boxInfo">
                    <h2>${element.nome}</h2>
                    <p>${element.desc}</p>
                    <a href="#">Pedir</a>
                </div>
            </div>
            `
        }
    })
}
rondomFood()