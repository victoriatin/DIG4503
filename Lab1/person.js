const chalk = require('chalk');

class Person {
    constructor(name, favoriteColors) {
        this.name = name;
        this.favoriteColors = favoriteColors;
    }
    speak() {
        for(let i = 0; i < this.favoriteColors.length; i++) {
            console.log(chalk.hex(this.favoriteColors[i])(this.name));
        }
    }
}

module.exports = Person;