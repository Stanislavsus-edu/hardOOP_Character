export default class Character {
	constructor(name, type)	{
		if (name.length<2 || name.length>10){
			throw new Error('Слишком много/мало символов')
		}
		else{
			this.name = name;
		}
		const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (types.indexOf(type) === -1) {
			throw new Error('Такого класса нет');
		} 
		else {
			this.type = type;
		}
		this.health = 100;
		this.level = 1;
	}
}
class Bowerman extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 25;
		this.defence = 25;
	}
}
class Swordsman extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 40;
		this.defence = 10;
	}
}
class Magician extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 10;
		this.defence = 40;
	}
}
class Daemon extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 10;
		this.defence = 40;
	}
}

class Undead extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 25;
		this.defence = 25;
	}
}
class Zombie extends Character {
	constructor(name, type) {
		super(name, type);	
		this.attack = 40;
		this.defence = 10;
	}
}