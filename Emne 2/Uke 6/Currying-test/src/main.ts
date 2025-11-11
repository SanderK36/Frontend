function calculateDiscount(discountpercentage: number): (price: number) => number {
  return (price: number) => price * (1 - discountpercentage / 100);
}
const discount20 = calculateDiscount(36);
console.log(discount20(100)); // Output: 80
console.log(discount20(200)); // Output: 160

const discount50 = calculateDiscount(50);
console.log(discount50(100));