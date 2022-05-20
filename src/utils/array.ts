export const consoleTwoDimensionalArray = (array: any[][]) => {
  let arrStr: string = '';
  for (let i = 0; i < array.length; i++) {
    let arrayElement = array[i];
    arrStr += `${arrayElement.join(' ')}\n`;
  }
  console.log(arrStr);
};
