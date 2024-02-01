export default function sumNumbers(numbers) {
  console.log('Calculating...');
  return numbers.reduce((acc, curr) => acc + curr, 0);
}