function mathOperations(N1, N2, operator) {
  if (operator === '+' || operator === '-' || operator === '*') {
    let result;
    if (operator === '+') result = N1 + N2;
    else if (operator === '-') result = N1 - N2;
    else result = N1 * N2;

    const parity = result % 2 === 0 ? 'even' : 'odd';
    console.log(`${N1} ${operator} ${N2} = ${result} - ${parity}`);
  } else if (operator === '/') {
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      const result = N1 / N2;
      console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    }
  } else if (operator === '%') {
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      const result = N1 % N2;
      console.log(`${N1} % ${N2} = ${result}`);
    }
  } else {
    console.log("Invalid operator");
  }
}

mathOperations(10, 3, "%")