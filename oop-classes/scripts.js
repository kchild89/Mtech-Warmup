// // Exercise 1
// // 1. Create a Player class with properties name, position, and skills.
// // 2. Add a method displayInfo that prints the player’s details.
// // 3. Create three instances of the Player class with different attributes and call the displayInfo method for each.

// class Player {
//     constructor(name, position, skills) {
//         this.name = name;
//         this.position = position;
//         this.skills = skills;
//         let stamina = 20;
//         let speed = 10000000000;

//         this.getStamina = function () {
//             return stamina;
//         }
//         this.setStamina = function (val) {
//             stamina = val * 2
//         }
//         this.getSpeed = function () {
//             return speed;
//         }
//         this.setSpeed = function (val) {
//             speed = val
//         }
//     }



//     introduce() {
//         console.log(`Hi I am ${this.name}, I'm a ${this.position} and I have ${this.skills} skills`);
//     }

// }
// let playerOne = new Player("John", "Quarterback", "Powerful throwing");

// // playerOne.setStamina(60)
// // console.log(playerOne.getStamina())  


// // Exercise 2.
// // 1. Modify the Player class to include private properties for stamina and speed.
// // 2. Add getter and setter methods for these properties.
// // 3. Create an instance of the Player class and use the getter and setter methods to modify and access the private properties.



// // Exercise 3.
// // 1. Create a Goalkeeper class that inherits from the Player class.
// // 2. Add a new property saves and a method makeSave to the Goalkeeper class.
// // 3. Create an instance of the Goalkeeper class and demonstrate its functionality.





// class Goalkeeper extends Player {
//     constructor(name, skills, saves) {
//         super(name, "Goalkeeper", skills);
//         this.saves = saves;
//     }

//     makeSave() {
//         this.saves++;
//         console.log(`${this.name} made a Sophie! Total Sophies: ${this.saves}`);
//     }
// }

// let goalkeep1 = new Goalkeeper('Mo', 'Daving Goals', 8);
// // console.log(goalkeep1);
// // goalkeep1.makeSave();

class TeamMember {
    constructor(name, position, skills) {
        if (new.target === TeamMember) {
            throw new TypeError("Cannot construct TeamMember instances directly");
        }
        this.name = name;
        this.position = position;
        this.skills = skills;
    }

    play() {
        throw new Error("Abstract method 'play' must be implemented");
    }
}

class Player extends TeamMember {
    constructor(name, position, skills) {
        super(name, position, skills);
        let stamina = 20;
        let speed = 10000000000;

        this.getStamina = function () {
            return stamina;
        }
        this.setStamina = function (val) {
            stamina = val * 2;
        }
        this.getSpeed = function () {
            return speed;
        }
        this.setSpeed = function (val) {
            speed = val;
        }
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.position} and I have ${this.skills} skills`);
    }

    play() {
        console.log(`${this.name} is playing as a ${this.position}`);
    }
}

class Goalkeeper extends Player {
    constructor(name, skills, saves) {
        super(name, "Goalkeeper", skills);
        this.saves = saves;
    }

    makeSave() {
        this.saves++;
        console.log(`${this.name} made a save! Total saves: ${this.saves}`);
    }

    play() {
        console.log(`${this.name} is guarding the goal`);
    }
}

let teamMembers = [
    new Player("John", "Quarterback", "Powerful throwing"),
    new Goalkeeper("Mo", "Diving Goals", 8),
    new Player("Alice", "Striker", "Fast running")
];

teamMembers.forEach(member => member.play());













// Top of the Page 


// Hoisting 

// newFunc()
// console.log(newVal)

newVal = '121212'
console.log(newVal)

var newVal = 'newVal'

