let myform=document.querySelector("form");
let mytask=document.getElementById("task");
let mypriority=document.getElementById("priority");
 let Alldata=[];
 let tbody=document.querySelector("tbody")

myform.addEventListener("submit",function(e){
    
    e.preventDefault();
    let data={};
   
    data.input1=mytask.value;
    data.input2=mypriority.value;
    Alldata.push(data)
    console.log(Alldata);

    tbody.innerHTML=null

    Alldata.map((ele)=>{
    let row =document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    td1.innerText=ele.input1;
    td2.innerText=ele.input2;
    row.append(td1,td2);
    tbody.append(row);this.innerHTML
    })
})