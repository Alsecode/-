//Имеет ли число данный делитель (без учета нуля)
const isDividedWithoutZero = (number, divisor) => (number !== 0 && number % divisor === 0)

const isEmpty = (array) => array.length === 0;

const sumEveryN = (array, n) => {
	//index + 1, так как элементы считаются с нуля
   return array.filter((item, index) => isDividedWithoutZero(index + 1, n))
		.reduce((acc, currentValue) => {
			isEmpty(acc) ? acc.push(currentValue) : acc.push(currentValue + acc[acc.length - 1]);
			return acc;
		}, []);
}
