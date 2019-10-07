module.exports = function main(inputs) {
	
	let returnString = '***<store earning no money>Receipt ***\n';
	let total = 0;
	var nameMap = new Map();

	for(input of inputs) {
		if(nameMap.size == 0 || !nameMap.has(input.Name)) {
			nameMap.set(input.Name, 1);
		} else{
			//update map
		}
	}

	nameMap.forEach(printInventory);
	

	function printInventory(value, key, map) {
		var name = input.Name;
		var quantity = nameMap.get(name);
		var subtotal = quantity * input.Price;

		let lineString = 'Name: ' + input.Name +
    			', Quantity: ' + nameMap.get(input.Name) + 
    			', Unit price: ' + input.Price + ' (yuan)' +
				', Subtotal: ' + subtotal + ' (yuan)\n'
				

		total = total + input.Price;

		returnString = returnString + lineString;
	}

	returnString = returnString + '----------------------\n' + 
		'Total: ' + total + ' (yuan)\n' +
 		'**********************\n';

	return returnString;
	 
};