document.getElementById("sendData").addEventListener("click", (event) => {
  event.preventDefault();
  var name = document.getElementById("name");
  var mobile = document.getElementById("mobile");
  var city = document.getElementById("city");
  var pincode = document.getElementById("pincode");
  var state = document.getElementById("state");
  var date = document.getElementById("date");
  var trackNumber = document.getElementById("trackNumber");
  
  if(!name.value || !mobile.value || !city.value || !pincode.value || !state.value || !date.value || !trackNumber.value) {
    return;
  }else{
  fetch("https://parceltrackers.herokuapp.com/createdata", {
    method: "POST",
    body: JSON.stringify({
      name: name.value.toLowerCase(),
      mobile: mobile.value.toLowerCase(),
      city: city.value.toLowerCase(),
      pincode: pincode.value.toLowerCase(),
      state: state.value.toLowerCase(),
      trackNumber: trackNumber.value.toLowerCase(),
      date: date.value,
    }),
    headers: {
      "Content-Type": "application/json"
      
    }
  })
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("successMsg").innerHTML=`${name.value} data created successfully!!`;
      console.log(result.msg);
      name.value = "";
      mobile.value = "";
      city.value = "";
      pincode.value = "";
      state.value = "";
      date.value = "";
      trackNumber.value = "";
      setTimeout(()=>{
         document.getElementById("successMsg").innerHTML="";
         
      },5000);
      
    });
  }
});
