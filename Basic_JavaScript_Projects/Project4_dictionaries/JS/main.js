function my_Dictionary() {
  let Animal = {
    Species: "Cat",
    Color: "Yelllow",
    Breed: "MaineCoon",
    Age: 7,
    Sound: "Meoww",
  };
  delete Animal.Sound; // deletes the kvp of Animal.sound making it undefined , because no longer has a value.
  document.getElementById("Dictionary").innerHTML =
    "Animal Species = " +
    Animal.Species +
    "<br>" +
    "Animal Color = " +
    Animal.Color +
    "<br>" +
    "Animal Breed = " +
    Animal.Breed +
    "<br>" +
    "Animal Age = " +
    Animal.Age +
    "<br>" +
    "Animal Sound = " +
    Animal.Sound;
}
