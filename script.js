// Crie um array que receba 5 itens e exiba no console.

let princesasDisney = ["Bela", "Aurora", "Merinda", "Ariel", "Moana"];
console.log(princesasDisney[0]) ;
console.log(princesasDisney[1]) ;
console.log(princesasDisney[2]) ;
console.log(princesasDisney[3]) ;
console.log(princesasDisney[4]);

// Utilize um método para adicionar um nome ao inicio do array.


princesasDisney.unshift("Jasmin");
console.log(princesasDisney);

// Utilize um método para remover o último nome do array.

princesasDisney.pop();
console.log(princesasDisney);

// Utilize um método para adicionar dois nomes ao fim do array.

princesasDisney.push("Rapunzel","Cinderela");
console.log(princesasDisney);

// Utilize um método para remover o primeiro nome do array.

princesasDisney.shift();
console.log(princesasDisney);

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log(numbers);