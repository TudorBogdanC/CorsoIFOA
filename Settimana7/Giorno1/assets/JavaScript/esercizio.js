
/* 

Esercizio 1

Crea una classe User per la creazione di oggetti di tipo “utente”. 
Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:- firstName- lastName- age- location 
Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. 
Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, 
il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto. 
Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente. 

*/

// SOLUZIONE 1 //

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

compareAge = function (user1, user2) {
    if (user1.age < user2.age) {
        console.log(user2.firstName + " è più grande di " + user1.firstName)
    } else if (user1.age > user2.age) {
        console.log(user1.firstName + " è più grande di " + user2.firstName)
    } else
        console.log(user1.firstName + " ha la stessa età di " + user2.firstName)
}


const user1 = new User("Giuseppe", "Pizzo", 34, "Roma")
const user2 = new User("Pippo", "Pluto", 27, "Roma")

compareAge(user1, user2);



/* 

Esercizio 2 

Crea un form per la creazione di oggetti “Pet” (animali domestici). 
La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // 
(cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) 

Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali 
condividono lo stesso padrone. 
Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.


*/


// SOLUZIONE 2 //


let formButton = document.getElementById('formButton');
formButton.onclick = function() {
    addPet();
}

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

let pets = [];

function addPet() {
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);
    console.log(pets);

    displayPets();
    resetForm();
}

function displayPets() {
    const petListElement = document.getElementById("petList");
    petListElement.innerHTML = "";

    pets.forEach(pet => {
        const listItem = document.createElement("li");
        listItem.innerText = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
        petListElement.appendChild(listItem);
    });
}

function resetForm() {
    document.getElementById("petForm").reset();
}