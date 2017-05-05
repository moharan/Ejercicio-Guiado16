function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon) {
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return pokemon.vida;
	}
}
const pikachu = new Pokemon("Pikachu","amarillo",70);
const charmander = new Pokemon("Charmander", "rojo",20);
const onix = new Pokemon("Onix", "gris",100);
const butterfree = new Pokemon("Butterfree", "blanco",5);

var competidores =[pikachu, charmander, onix, butterfree];

competidores.forEach(function(element){
	var res = document.getElementById("usuario1");// valor
	res.innerHTML += "<option value =" + element.nombre + ">" + element.nombre + "</option>";
	var res2 = document.getElementById("usuario2");// valor
	res2.innerHTML += "<option value =" + element.nombre + ">" + element.nombre + "</option>";
});

function Pelear(){
	alert("Peleando");
	var eleccion1 = document.getElementById("usuario1").value;
	var eleccion2 = document.getElementById("usuario2").value;
	var res = document.getElementById("mensaje");
	if (eleccion1 === eleccion2) {
        alert('Elige Adversarios Diferentes');
    } else {
    var ataque = 100 - eleccion2.poderDeAtaque;
	}
	return res.innerHTML = eleccion1 + " ataco " + eleccion2 + "<br>" + eleccion2 + " tiene " + ataque + " de vida restantes";
	//document.getElementById("mensaje").innerHTML += eleccion1 + " ataco " + eleccion2;	
}


