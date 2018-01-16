//Evaluate what contianer will carry the grid
container = document.getElementById('gridContainer');
buildNewGrid = document.getElementById('reset');
changeGridSize = document.getElementById('adjust');
input = document.querySelector('input');

container.style.width = '780px';
container.style.height = '780px';
buildGrid(16);

buildNewGrid.addEventListener("click", function() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	buildGrid(input.value);
})

changeGridSize.addEventListener("click", function() {
	prompt("Enter New Size (0-100)");
})

function buildGrid(dimension) {
	let gridSize = dimension;
	const wrap = document.createElement('div');
	wrap.setAttribute('class', "wrap");
	container.appendChild(wrap);

	for (var i = 0; i < dimension ** 2; i++) {
		const newPixel = document.createElement('div');
		newPixel.setAttribute('id', `num${i}`);
		newPixel.classList.add("pixel");
		modifyPixel(newPixel, dimension, 'teal'); 
		wrap.appendChild(newPixel);
	}

	//pull color

	
	colorPixels();
}

function colorPixels() {
	let allSquares = document.querySelectorAll(".pixel");
	allSquares.forEach((pixel) => {
		pixel.addEventListener("mouseover", function() {
			this.style.backgroundColor = 'magenta';
		})
	})
}


function modifyPixel(newPixel, dimension, color) {
	newPixel.style.backgroundColor = color;

	var styleString = ((parseInt(container.style.width, 10) / dimension) - 0.005) + 'px';
	newPixel.style.width = `${styleString}`;
	newPixel.style.height = `${styleString}`;
	//newPixel.style.marginTop = '-4px';
}

//TODO:

//combine modify pixel and color pixel

//add button to change color

