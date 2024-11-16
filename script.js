function firstNonRepeatedChar(str) {
 // Write your code here
	let res={};
	for(let i of str){
		res[i]=(res[i]||0)+1;
	}
	for(let i of str){
		if(res[i]===1){
			return i;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
