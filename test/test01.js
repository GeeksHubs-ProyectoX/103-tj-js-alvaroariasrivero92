function tiers(index) {
	let string = "";
	for (let i = 1; i <= index; i++) {
  		// printing spaces
  		for (let j = 0; j < index - i; j++) {
    		string += " ";
  		}
  	// printing star
  	for (let k = 0; k < i; k++) {
    string += "*";
  	}
  	string += "\n";
	}
	return string;
}
module.exports = tiers;
