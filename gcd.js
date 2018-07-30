/*Vessela Lytle, S# 547557, COP 2801
 * Solve gcd for v=35 and u=150. 
 * Euclid's algorithm. 
 */

var u = 150;
var v = 35;
while (v !== 0){
    temp = v;
    v = u % v;
    u = temp;
	}
console.log(temp);