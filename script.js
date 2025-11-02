var isDate = function (input) {
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  const parsed = new Date(input);
  return !isNaN(parsed.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
