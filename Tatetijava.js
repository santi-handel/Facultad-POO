class Square {
	constructor(x, y, width, height, ctx) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.ctx = ctx;
		this.actor = null;
	}
	// El metodo dibujar se utiliza para dibujar el cuadrado. 
	draw() {
		// Dibuja el cuadrado.
		this.ctx.strokeStyle = 'black';
		this.ctx.strokeRect(this.x, this.y, this.width, this.height);
		// Dibuja el actor en el caso que no sea nulo.
		if (this.actor) {
			this.ctx.fillStyle = 'red';
			this.ctx.font = '30px Arial';
			this.ctx.textAlign = "center";
			this.ctx.fillText(this.actor, this.x + this.width / 2, this.y + this.height / 2 +10);
		}
	}
}
class TicTacToe {
	constructor(id) {
		// Asignar canvas y context.
		this.canvas = document.getElementById(id);
		this.ctx = this.canvas.getContext('2d');
		// crea un array de cuadrantes.
		this.squares = [];
		// Calcular largo y alto de los cuadrantes.
		const w = this.canvas.width / 3;
		const h = this.canvas.height / 3;
		// Crear los objetos y añadirlos a la lista.
		for (let x = 0; x < 3; x++)
			for (let y = 0; y < 3; y++)
				this.squares.push(new Square(x * w, y * h, w, h, this.ctx));
		
		// crea los jugadores.
		this.actors = ["X", "O"];
		// Define el turno inicial.
		this.turn = 0;
		// Declara que el juego no esta terminado .
		this.gameOver = false;
		// Dibuja cada cuadrado (por cada item del array).
		this.squares.forEach(squares => squares.draw());
		// Bind the click event.
		this.canvas.addEventListener('click', function(event) {
			this.click(event);
		}.bind(this));
	}
	// Se hace referencia al metodo click cada vez que se hace click en el canvas .
	// Se comprueba en cual cuadrado se realizo el click y si esta vacio.
	click(event) {
		// Si el juego termino, se reinicia.
		if (this.gameOver) {
			this.reset();
			return;
		}
		// Obtener la posicion del mouse.
		const x = event.offsetX;
		const y = event.offsetY;
		//Comprobar por cada cuadrado.
		for (let square of this.squares) {
			// Si el cuadrado ya tiene un actor, se "bloquea".
			if (square.actor != null) continue;
			// Comprobar si esta dentro del cuadrado.
			if (x >= square.x && x <= square.x + square.width && y >= square.y && y <= square.y + square.height) {
				// le da un actor al objeto cuadrado y vuelve a dibujar.
				square.actor = this.actors[this.turn];
				square.draw();
				// cambiar el turno
				if(this.turn==0)
					this.turn=1;
				else
					this.turn=0;

			}
		}
		// Revisar si el juego debe terminar.
		this.checkForWinner();
	}
	// Comprueba si hay un ganador o un empate.
	checkForWinner() {
		// Crea array de arrays, combinaciones ganadoras.
		const winnerCombinations = [
			// Columnas
			[0, 1, 2], [3, 4, 5], [6, 7, 8], 
			// Filas
			[0, 3, 6], [1, 4, 7], [2, 5, 8],  
			// Diagonals
			[0, 4, 8], [2, 4, 6]          
		];
		// 	Comprueba si alguna se cumple.
		for (let i = 0; i < winnerCombinations.length; i++) {
			// Recupera la combinacion
			let combination = winnerCombinations[i];
			// Recupera los cuadrados.
			let s1 = this.squares[combination[0]];
			let s2 = this.squares[combination[1]];
			let s3 = this.squares[combination[2]];
			// Comprobar que no sean 3 espacios vacios.
			if (s1.actor != null) {
				// Comprobar que tengan los 3 lugares el mismo actor.
				if (s1.actor == s2.actor 
					&& s1.actor == s3.actor) {
					// Terminar el juego
					this.gameOver = true;
					// Draw the combination line.
					this.ctx.beginPath();
					this.ctx.moveTo(s1.x + s1.width/2, s1.y + s1.height/2);
					this.ctx.lineTo(s3.x + s3.width/2, s3.y + s3.height/2);
					this.ctx.stroke();
					// Draw winner text.
					this.ctx.fillStyle = 'red';
					this.ctx.font = '30px Arial';
					this.ctx.textAlign = "center";
					this.ctx.fillText(s1.actor  + " GANA!", this.canvas.width / 2, this.canvas.height / 2);
				}
			}
		}
		// si NO hay combinacion ganadora (si no hay ganador) y todos la cantidad de cuadrados vacios es CERO
		if (!this.gameOver && this.squares.filter(square => square.actor == null).length == 0) {
			this.gameOver = true;
			this.ctx.fillStyle = 'red';
			this.ctx.font = '30px Arial';
			this.ctx.textAlign = "center";
			this.ctx.fillText("EMPATE!", this.canvas.width / 2, this.canvas.height / 2);
		}
	}
	// The reset method restarts the game.
	reset() {
		// Clear canvas
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// Reset all actors.
		this.squares.forEach(squares => squares.actor = null);
		// Draw the board.
		this.squares.forEach(squares => squares.draw());
		// Reset turn.
		this.turn = 0;
		// Reset game over.
		this.gameOver = false;
	}
}
new TicTacToe('canvas');
