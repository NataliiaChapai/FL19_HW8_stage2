class Toy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getToyInfo() {
        return `The toy name is ${this.name}. It costs ${this.price} dollars.`
    }
}

class Teddy extends Toy {
    constructor(name, price) {
        super(name, price);
        this.material = 'cotton';
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}

class Wooden extends Toy {
    constructor(name, price) {
        super(name, price);
        this.material = 'wood';
        this.toy = [];
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}

class Plastic extends Toy {
    constructor(name, price) {
        super(name, price);
        this.material = 'plastic';
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}

class Factory {
    constructor(material) {
        this.material = material;
        this.toys = [];
    }

    produce(name, price, material) {
        let toy = this.getToy(name);
        let woodenToy = this.getWoodenToy();
        if (toy) {
            return toy;
        }
        if (woodenToy) {
            return woodenToy;
        }
    
        switch (material) {
            case 'teddy': {
                const newToy = new Teddy(name, price);
                this.toys.push(newToy);
                return newToy;
            }
            case 'wooden': {
                const newToy = new Wooden(name, price);
                this.toys.push(newToy);
                return newToy;
            }
            case 'plastic': {
                const newToy = new Plastic(name, price);
                this.toys.push(newToy);
                return newToy;
            }
            default: {
                const newToy = new Plastic(name, price);
                this.toys.push(newToy);
                return newToy;
            }
        }
    }

    getToy(name) {
        return this.toys.find(toy => toy.name === name);
    }

    getWoodenToy() {
        return this.toys.find(toy => toy.material === 'wood')
    }
}

const factory = new Factory();

const teddyBear = factory.produce('Bear', '200', 'teddy');
console.log(teddyBear.getToyInfo());
console.log(teddyBear.getMaterialInfo());

const plasticCar = factory.produce('Car', '100');
console.log(plasticCar.getToyInfo());
console.log(plasticCar.getMaterialInfo());

const plasticBear = factory.produce('Bear', '150', 'plastic');
console.log(teddyBear.getToyInfo());
console.log(teddyBear.getMaterialInfo());

const woodenHorse = factory.produce('Horse', '400', 'wooden');
console.log(woodenHorse.getToyInfo());

const woodenBear = factory.produce('Bear2', '200', 'wooden');
console.log(woodenBear.getToyInfo());

class Car {
    constructor(name, host) {
        this.name = name;
        this.host = host;
    }
    carSound() {
        return 'Usual car sound.';
    }
}

class AmbulanceCar {
    constructor(car) {
        this.car = car;
    }
    ambulanceSound() {
        return 'Siren sound.';
    }
}

const mersedes = new Car('Mersedes', 'Doctor');
const ambulanceMersedes = new AmbulanceCar(mersedes);
console.log(ambulanceMersedes.ambulanceSound());

const toyota = new Car('Toyota', 'Doctor2');
const ambulanceToyota = new AmbulanceCar(toyota);
console.log(ambulanceToyota.ambulanceSound());