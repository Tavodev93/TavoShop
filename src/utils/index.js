/**
 * esta funcion calcula el total de los productos
 * @param {Array} products cartProduct: Array de objetos
 * @returns {number} Total precio de la suma
 */


export const totalPrice = (products) => {
  let sum = 0
  products.forEach(product => sum +=product.price);
  return sum 
}