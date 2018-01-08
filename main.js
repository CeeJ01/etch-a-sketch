//Evaluate what contianer will carry the grid
container = document.getElementById('gridContainer');
container.style.width = '600px';

function buildGrid(dimension) {
	//create rows
	for (var i = 0; i < dimension; i++) {
		const rowContainer = document.createElement('div');
		rowContainer.setAttribute('id', `col${i}`);
		rowContainer.setAttribute('class', "column");
		container.appendChild(rowContainer);
		
		//create pixels in rows
		for (var j = 0; j < dimension; j++) {
				const newPixel = document.createElement('div');
				newPixel.setAttribute('id', `col${i}-row${j}`);
				newPixel.setAttribute('class', "pixel");
				
				//modify each Pixel
				modifyPixel(newPixel, dimension, 'red');
				
				rowContainer.appendChild(newPixel);
			

			}
	}

}

function modifyPixel(newPixel, dimension, color) {
// Set, color, width, height
	newPixel.style.backgroundColor = color;
	
	//get container size
	var containerSize = parseInt(container.style.width, 10);

	var styleString = (containerSize / dimension) - 2 + 'px';
	console.log(container.style.width);

	newPixel.style.width = `${styleString}`;
	newPixel.style.height = `${styleString}`;
	//newPixel.style.heght = (400 / dimension);

}

buildGrid(16);


//add button to adjust grid dimensions
//add button to change color
// 