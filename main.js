//Evaluate what contianer will carry the grid
container = document.getElementById('gridContainer');
buildNewGrid = document.getElementById('reset');
changeGridSize = document.getElementById('adjust');

container.style.width = '780px';
container.style.height = '780px';
buildGrid(16);

buildNewGrid.addEventListener("click", function() {
	//getNewGridSize();
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	buildGrid(100);
})

changeGridSize.addEventListener("click", function() {
	prompt("Enter New Size (0-100)");
})

function buildGrid(dimension) {

	const wrap = document.createElement('div');
	wrap.setAttribute('class', "wrap");
	//wrap.style.marginTop = '4px';
	container.appendChild(wrap);

	for (var i = 0; i < dimension ** 2; i++) {
		const newPixel = document.createElement('div');
		newPixel.setAttribute('id', `num${i}`);
		newPixel.classList.add("pixel");
		modifyPixel(newPixel, dimension, 'red');
		wrap.appendChild(newPixel);

	}

colorPixels();
}

function colorPixels() {
	let allSquares = document.querySelectorAll(".pixel");
	allSquares.forEach((pixel) => {
		pixel.addEventListener("mouseover", function() {
			this.style.backgroundColor = 'black';
		})
	})
}


function modifyPixel(newPixel, dimension, color) {
// Set, color, width, height
	newPixel.style.backgroundColor = color;

	var styleString = (parseInt(container.style.width, 10) / dimension) + 'px';
	console.log(container.style.width);
	newPixel.style.width = `${styleString}`;
	newPixel.style.height = `${styleString}`;
	//newPixel.style.marginTop = '-4px';
}


//add button to adjust grid dimensions
//add button to change color

