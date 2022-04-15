class show {
    #price;
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.#price = price;
    }

    book() {
        // some implementation
        console.log("Successfully booked tickets for ", this.name, "with price ", this.#price);
    }
}

class movie extends show { // extends keyword helps us to inherit properties and behaviours from a class
    constructor(name, description, price, releaseDate) {
        super(name, description, price);
        this.releaseDate = releaseDate;
    }

    printCost() {
        console.log("cost is", this.price);
    }
}

class standup extends show {
    constructor(name, description, price, eventDate) {
        super(name, description, price);
        this.eventDate = eventDate;
    }
}

let doctor_strange = new movie("doctor strange in multiverse", "marvel movie", 500, "May 6");
let excuse_me_bro = new standup("Excuse Me Brother", "Aakash standup", 1500, "April 29");

doctor_strange.book();
excuse_me_bro.book();
doctor_strange.printCost()


let s = new show("example", "example", 100);