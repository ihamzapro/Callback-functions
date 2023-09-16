const onWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transform("Javascriipt is the best!", upperFirstWord);
transform("Javascript is the best!", onWord);

// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);
