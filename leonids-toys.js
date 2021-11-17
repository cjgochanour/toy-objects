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
]

const legoSet = {
  id: 4,
  name: "Millenium Falcoln Lego Set",
  touch: "hard plastic",
  price: "600",
  isElectronic: false,
  isChokingHazard: true,
}

const armyMen = {
  id: 5,
  name: "Green Army Men",
  touch: "hard plastic",
  price: "1",
  isElectronic: false,
  isChokingHazard: true,
}

toys.push(legoSet)
toys.push(armyMen)

const toyToFind = 2

for (toy of toys){
  if (toy.id === toyToFind){
  toy.price *= 1.05
  console.log(`The ${toy.name} costs $${toy.price}`)}
}