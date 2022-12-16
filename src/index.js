const cards = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
];

let random_cards = cards.sort(() => 0.5 - Math.random());

let grid = document.querySelector(".grid");

let cards_chosen = []

let score_holder = document.querySelector("#score");
let score = 0;
score_holder.innerHTML = score;

function create_board() {
    for (let i = 0; i < random_cards.length; i++) {
        let a = document.createElement("img");
        a.setAttribute("src", "images/blank.png");
        a.setAttribute("data-id", i);
        a.addEventListener("click", flipCard)
        grid.appendChild(a);
    }
}

function flipCard() {
    let ind = this.getAttribute("data-id");
    this.setAttribute("src", random_cards[ind].img);
    cards_chosen.push([ind, random_cards[ind].name]);
    console.log(cards_chosen);
    if (cards_chosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}


function checkMatch() {
    let cards1 = document.querySelectorAll("img")
    if (cards_chosen[0][0] === cards_chosen[1][0]) {
        alert("You selected the same card")
        cards1[cards_chosen[0][0]].setAttribute("src", "images/blank.png")
        cards1[cards_chosen[1][0]].setAttribute("src", "images/blank.png")
        score -= 10;
        score_holder.innerHTML = score;
        cards_chosen = []
    }
    else if (cards_chosen[0][1] === cards_chosen[1][1]) {
        cards1[cards_chosen[0][0]].setAttribute("src", "images/white.png")
        cards1[cards_chosen[1][0]].setAttribute("src", "images/white.png")
        cards1[cards_chosen[0][0]].removeEventListener("click", flipCard)
        cards1[cards_chosen[1][0]].removeEventListener("click", flipCard)
        score += 20;
        score_holder.innerHTML = score;
        cards_chosen = [];
    } else {
        cards1[cards_chosen[0][0]].setAttribute("src", "images/blank.png")
        cards1[cards_chosen[1][0]].setAttribute("src", "images/blank.png")
        score -= 10;
        score_holder.innerHTML = score;
        cards_chosen = []
    }
}

create_board();


