let playAgainBtn = document.getElementById('again');
playAgainBtn.addEventListener('click', () => {
    location.reload()
})
function Character(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.elements = new UiElements(this.name)
    
}
 function UiElements(name) {
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-heal`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.progress = document.querySelector(`.${name}-health span`);
 }

Character.prototype.attack = function(opponent) {
    
    if(opponent.health > 0) {
        opponent.health -= this.strength;
        opponent.elements.progress.style.width = `${opponent.health}%`
        
    } else {
        opponent.elements.attackBtn.remove();
        opponent.elements.healthBtn.remove();
        opponent.elements.alive.innerHTML = `${opponent.name} is died`
    }
    console.log(opponent.health)
}

Character.prototype.status = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`);
}

Character.prototype.makeHealth = function() {
    if(this.health < 100 ) {
        this.health += 10;
        this.elements.progress.style.width = `${this.health}%`
    }

    if (this.health > 100) {
        this.health = 100;
    }
}
let naruto = new Character('naruto', 10, 100)
let sasaki = new Character('sasaki', 5, 100)


naruto.elements.attackBtn.addEventListener('click', function() {
    naruto.attack(sasaki);
})

sasaki.elements.attackBtn.addEventListener('click', function() {
    sasaki.attack(naruto);
})

naruto.elements.healthBtn.addEventListener('click', function() {
    naruto.makeHealth();
})

sasaki.elements.healthBtn.addEventListener('click', function() {
    sasaki.makeHealth();
})