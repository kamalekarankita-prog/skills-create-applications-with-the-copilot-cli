#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√ or sqrt)
 */

/**
 * Calculates the modulo (remainder) of division
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Calculates the power (exponentiation) of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent power
 * @returns {number} The base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to find square root of
 * @returns {number} The square root of n
 * @throws {Error} If number is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Square root of negative numbers is not allowed');
  }
  return Math.sqrt(n);
}

/**
 * Performs basic arithmetic operations
 * @param {number} num1 - First operand
 * @param {string} operator - Operation (+, -, *, /, %, ^, sqrt)
 * @param {number} num2 - Second operand (not used for sqrt)
 * @returns {number} The result of the calculation
 * @throws {Error} If operator is invalid or operation is invalid
 */
function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  
  // Handle unary operations (sqrt doesn't need num2)
  if (operator === 'sqrt' || operator === '√') {
    if (isNaN(num1)) {
      throw new Error('Invalid input: operand must be a number');
    }
    return squareRoot(num1);
  }
  
  // For binary operations, validate both operands
  num2 = parseFloat(num2);
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Invalid input: operands must be numbers');
  }

  switch (operator) {
    // Addition operation
    case '+':
      return num1 + num2;

    // Subtraction operation
    case '-':
      return num1 - num2;

    // Multiplication operation
    case '*':
      return num1 * num2;

    // Division operation
    case '/':
      if (num2 === 0) {
        throw new Error('Error: Division by zero is not allowed');
      }
      return num1 / num2;

    // Modulo operation
    case '%':
      return modulo(num1, num2);

    // Exponentiation operation
    case '^':
      return power(num1, num2);

    default:
      throw new Error(`Invalid operator: ${operator}. Use +, -, *, /, %, ^, or sqrt`);
  }
}

/**
 * CLI Interface for the calculator
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: node calculator.js <num1> <operator> [num2]');
    console.log('');
    console.log('Basic Operations (require num1 and num2):');
    console.log('  node calculator.js 10 + 5      # Addition');
    console.log('  node calculator.js 10 - 3      # Subtraction');
    console.log('  node calculator.js 10 "*" 2    # Multiplication (quote * to avoid shell expansion)');
    console.log('  node calculator.js 10 / 2      # Division');
    console.log('  node calculator.js 10 % 3      # Modulo');
    console.log('  node calculator.js 2 "^" 3     # Exponentiation (2^3 = 8)');
    console.log('');
    console.log('Unary Operations (require only num1):');
    console.log('  node calculator.js 16 sqrt     # Square root');
    console.log('  node calculator.js 16 √        # Square root (alternative symbol)');
    process.exit(1);
  }

  try {
    const [num1, operator, num2] = args;
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2 || ''} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export for module usage
module.exports = { calculate, modulo, power, squareRoot };

// Run CLI if executed directly
if (require.main === module) {
  main();
}
