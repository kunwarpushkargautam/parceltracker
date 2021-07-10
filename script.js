var input = document.getElementById("input");
var submit = document.getElementById("submit");
var getinput = () => {
  var inputvalue = input.value;
  console.log(inputvalue);
};

submit.addEventListener("click", getinput);
