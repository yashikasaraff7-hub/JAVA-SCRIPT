let  itemQuantity = 5;
let  itemPrice = 25;
let  userBalance = 150;

let isPremimumMember = true;
let discountedValid = true;

let Subtotal = itemQuantity * itemPrice;

let eligibleMember = Subtotal > 100 && isPremimumMember || discountedValid;
let discound = eligibleMember ? 20:0;
let discount = subtotal*subtotal


document.writeln(`Subtotal is : ${Subtotal}`);
document.writeln(`eligibleMember is : ${eligibleMember}`);
