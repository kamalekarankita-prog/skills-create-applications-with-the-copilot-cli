#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

/**
 * Performs basic arithmetic operations
 * @param {number} num1 - First operand
 * @param {string} operator - Operation (+, -, *, /)
 * @param {number} num2 - Second operand
 * @returns {number} The result of the calculation
 * @throws {Error} If operator is invalid or division by zero
 */
function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Validate inputs
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

    default:
      throw new Error(`Invalid operator: ${operator}. Use +, -, *, or /`);
  }
}

/**
 * CLI Interface for the calculator
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: node calculator.js <num1> <operator> <num2>');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js 10 + 5    # Addition');
    console.log('  node calculator.js 10 - 3    # Subtraction');
    console.log('  node calculator.js 10 "*" 2  # Multiplication (quote * to avoid shell expansion)');
    console.log('  node calculator.js 10 / 2    # Division');
    process.exit(1);
  }

  try {
    const [num1, operator, num2] = args;
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export for module usage
module.exports = { calculate };

// Run CLI if executed directly
if (require.main === module) {
  main();
}
