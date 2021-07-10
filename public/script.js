const getData=()=>{
    var searchinput=document.getElementById("input").value;
    let fetchRes = fetch(`http://localhost:3000/UserData/${searchinput}`);
    fetchRes.then((response)=>response.json()).then((res)=>{
        console.log(res);
    let str="";
    res.map((data)=>{
        str += `<tr>
        <td>${data.name}</td>
        <td>${data.mobile}</td>
        <td>${data.city}</td>
        <td>${data.pincode}</td>
        <td>${data.state}</td>
        <td>${data.date.split("T")[0]}</td>
        <td>${data.trackingNumber}</td>
    </tr>`
    })
    if(str){
        document.getElementById("tableView").style.display="block";
        document.getElementById("msg").style.display="none";
    }else{
        document.getElementById("msg").style.display="block";
        document.getElementById("tableView").style.display="none";

    }
    document.getElementById("displayBody").innerHTML=str;
    })
}
document.getElementById("submit").addEventListener("click",(e)=>{
    getData();

})
document.getElementById("input").addEventListener('keyup', function (e) {

    if (e.key === 'Enter' || e.keyCode === 13) {
        getData();
    }
});
