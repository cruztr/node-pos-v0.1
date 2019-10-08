module.exports = function main(input) {
	var productArray = [];
	var total = 0;

	input.forEach(product => {
		if(!productArray.find(ele => ele.Barcode == product.Barcode))
			productArray.push(product);
	});

	return generateWholeReceipt();



	function generateWholeReceipt() {
		let receiptString = '***<store earning no money>Receipt ***\n';

		productArray.forEach(product => {
			receiptString += printInventory(product, input);
		});

		receiptString += '----------------------\n' + 
			'Total: ' + total.toFixed(2) + ' (yuan)\n' +
 			'**********************\n';

		return receiptString;
	}

	function printInventory(key, input) {
		let productName = key.Name;
		let productQuantity = input.filter(product => product.Barcode == key.Barcode).length;
		let productUnit = key.Unit == 'bottle' ? ' bottles' : '';
		let productSubtotal = productQuantity * key.Price;
	
		let lineString = 'Name: ' + productName +
				', Quantity: ' + productQuantity + productUnit +
				', Unit price: ' + key.Price.toFixed(2) + ' (yuan)' +
				', Subtotal: ' + productSubtotal.toFixed(2) + ' (yuan)\n';
				
	
		total += productSubtotal;
		return lineString;
	}
};