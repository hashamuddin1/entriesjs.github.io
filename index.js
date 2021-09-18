let btn1=document.querySelector("#btn");
let inp1=document.querySelector("#name1");
let inp2=document.querySelector("#age1");
let inp3=document.querySelector("#salary1");
let inp4=document.querySelector("#dob1");
btn1.addEventListener("click",()=>{
    let tbl=document.querySelector("#tab");
    let row=tbl.insertRow();
    let cell1=row.insertCell();
    let cell2=row.insertCell();
    let cell3=row.insertCell();
    let cell4=row.insertCell();
    cell1.innerHTML=inp1.value;
    cell2.innerHTML=inp2.value;
    cell3.innerHTML=inp3.value;
    cell4.innerHTML=inp4.value;
    document.getElementById("name1").value="";
    document.getElementById("age1").value="";
    document.getElementById("salary1").value="";
    document.getElementById("dob1").value="";

})