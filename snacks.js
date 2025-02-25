/* Code Question 1 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
*/

// C'è un oggetto, con un'altra variabile di riferimento ad esso

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?   'Double Cheese Burger'
console.log(secondBurger.name); // ?    'Double Cheese Burger'
console.log(hamburger.weight); // ?   500


/* Code Question 2
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
*/

// Ci sono 2 oggetti totali, l'originario e la sua Shallow Copy

const burger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const burger2 = { ...burger };
burger2.ingredients[0] = "Salad";

console.log(burger.ingredients[0]); // ?    "Salad"  perchè l'array viene copiato per riferimento
console.log(burger2.ingredients[0]); // ?  "Salad"


/* Code Question 3
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
*/

// Ci sono 3 oggetti totali, l'originario e le sue 2 Deep Copy avanzate

const panino = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const panino2 = structuredClone(panino);
const panino3 = structuredClone(panino);


/* Code Question 4 
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
*/

// chef si può copiare per Shallow Copy (...spread), perchè non ha oggetti/array annidati ma ha una funzione 
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

// restaurant va copiato con structuredClone perchè ha sia oggetti annidati che l'oggetto complesso data
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};


/* Code Question 5 (Bonus)
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
*/

// Ci sono 3 oggetti totali, l'originario, una sua Shallow Copy e la Shallow Copy di un suo oggetto annidato 

const pinsa = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...pinsa.maker.restaurant }; // un oggetto
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const pinsa2 = { ...pinsa };  // un oggetto
pinsa2.maker.restaurant = newRestaurant;
pinsa2.maker.name = "Chef Hyur";

console.log(pinsa.maker.name); // ? "Chef Hyur"
console.log(pinsa2.maker.name); // ?    "Chef Hyur"
console.log(pinsa.maker.restaurant.name); // ?"Hyur's Burgers"
console.log(pinsa2.maker.restaurant.name); // ? "Hyur's II"


/* Code Question 6 (Bonus)
Qual è il metodo migliore per clonare l’oggetto cuoco, e perché?
*/

// 
const cuoco = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}