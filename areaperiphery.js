//the p
const p = 3.14;
//the choice of user. Either 1 for periphery or 2 for area
let choice=Number(prompt(" For Periphery press 1 for area 2:"));
//periphery
function calculatePeriphery(){
    let radius=parseFloat(prompt("Enter radius :"));
   alert("The periphery is:"+2*p*radius);
//area
}
function calculateArea(){
    let radius=parseFloat(prompt("Enter radius:"));
    alert("The area is:"+p*radius*radius);
}
if (choice === 1) {
    calculatePeriphery();
} else if (choice === 2) {
    calculateArea();
} else {
    alert("Invalid choice!");
}