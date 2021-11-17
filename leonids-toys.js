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

for (toy of toys){
  console.log(toy.name)
}
