let totalPriceInput = prompt("Qual sera o valor total do seu financiamento?");
let totalPrice = parseInt(totalPriceInput);
let feeInput = prompt("Quanto voce consegue dar de entrada?");
let fee = parseInt(feeInput);
let price = totalPrice - fee;
let installmentsInput = prompt("Em quantas parcelas deseja pagar o valor restante?");
let installments = parseInt(installmentsInput);
let installmentsPrice = price / installments;
	console.log(totalPrice)
	console.log(fee)
	console.log(price)
	console.log(installments)
if (fee > totalPrice) {
	alert("A entrada nao pode ser maior que o valor total do seu financiamento")
} else if (fee / totalPrice < 0.2){
	alert("A entrada precisa ser no minimo 20% do valor total do seu financiamento")
}else{
	alert("Voce pagara " + installments + " parcelas de R$ " + installmentsPrice)
}