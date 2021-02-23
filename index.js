
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name
        this.power = power
        this.isPlugged = false
    }

    plugin() {
        console.log(`${this.name} plugged`)
        this.isPlugged = true
    }

    unplug() {
        console.log(`${this.name} unplugged`)
        this.isPlugged = false
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, processorBrand, type, functionality) {
        super(name, power)
        this.processorBrand = processorBrand
        this.type = type
        this.functionality = functionality
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, power, brand, bulbType) {
        super(name, power)
        this.brand = brand
        this.bulbType = bulbType
    }
}

const lamp = new Lamp('Table lamp', 5, 'Xiaomi', 'LED')
const computer = new Computer('PC', 120, 'Intel', 'stationary', 'for work')

lamp.plugin()
computer.plugin()
lamp.unplug()

console.log(computer)
console.log(lamp)
