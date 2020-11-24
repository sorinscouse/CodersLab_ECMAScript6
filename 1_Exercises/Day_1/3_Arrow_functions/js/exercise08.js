const dog = {
    type: "Mammal",
    name: "",
    setName: (newName) => {
        this.name = newName;
    }
}

dog.setName("Skip");
console.log(dog.name);
