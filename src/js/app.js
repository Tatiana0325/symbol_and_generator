class Team {
    constructor(name, type, health, level, attack, defance) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defance = defance;
    }

    *[Symbol.iterator]() {
        yield {"name": this.name,
               "type": this.type,
               "health": this.health,
               "level": this.level,
               "attack": this.attack,
               "defance": this.defance};
    }
}