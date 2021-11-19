const toys = [
    {
        id: 1,
        name: "Tickle Me Elmo",
        touch: "fluffy",
        price: 80,
        isElectronic: true,
        isChokingHazard: false,
    },
    {
        id: 2,
        name: "Nerf Gun",
        touch: "hard plastic",
        price: 50,
        isElectronic: false,
        isChokingHazard: false,
    },
    {
        id: 3,
        name: "Slinky",
        touch: "smooth metal",
        price: 3.5,
        isElectronic: false,
        isChokingHazard: false,
    },
];

const legoSet = {
    id: 4,
    name: "Millenium Falcoln Lego Set",
    touch: "hard plastic",
    price: 600,
    isElectronic: false,
    isChokingHazard: true,
};

const armyMen = {
    id: 5,
    name: "Green Army Men",
    touch: "hard plastic",
    price: 1,
    isElectronic: false,
    isChokingHazard: true,
};

const yoyo = {
    name: "Yo-Yo",
    touch: "hard plastic",
    price: 50,
    isElectronic: false,
    isChokingHazard: true,
};

// Map Challenge

const prices = new Map();
prices.set(toys[0], 80);
prices.set(toys[1], 50);
prices.set(toys[2], 3.5);

function addToyToStore(newToy, price) {
    const lastIndex = toys.length - 1;
    const lastToy = toys[lastIndex];
    const maxID = lastToy.id;
    const newID = maxID + 1;

    newToy.id = newID;
    toys.push(newToy);
    prices.set(toys[maxID], price);
}

addToyToStore(yoyo, 50);
addToyToStore(legoSet, 600);
addToyToStore(armyMen, 1);

console.log(prices);

for (let [toys, price] of prices) {
    console.log(`The ${toys.name} costs $${price.toFixed(2)}`);
}

// Explorer chapter 1

const removeProduct = (toyID) => {
    for (const toy of toys) {
        if (toy.id === toyID) {
            toyID -= 1;
            toys.splice(toyID, 1);
        }
    }
    return toys;
};

// Explorer Chapter 1

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope",
];

const sellPerryScope = () => {
    let availableForPurchase = false;
    for (const toy of currentInventory) {
        if (toy === "Perry Scope") {
            availableForPurchase = true;
        }
    }

    if (availableForPurchase) {
        console.log("Enjoy your new Perry Scope");
    }
};

sellPerryScope();

// the chapter specified to comment out the "find" code

// const toyToFind = 2

// for (toy of toys){
//   if (toy.id === toyToFind){
//   toy.price *= 1.05
//   console.log(`The ${toy.name} costs $${toy.price}`)}
// }
