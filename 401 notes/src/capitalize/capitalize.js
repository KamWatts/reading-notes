
function capitalize(string) {
  return string.toUpperCase();
}

// How do we test this?
// below is a simple test

let output = capitalize('Kam')
console.log(output);

// Console: KAM

// How do we automate this in a test environment?
// exports code to another file if needed
module.exports = capitalize;

// In the terminal use "npm init -y" and this will install this file in a package.json as a dependency