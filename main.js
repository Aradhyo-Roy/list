function save(){
    name=document.getElementById("namer").value;
    list="<input type='checkbox'><label>"+name+"</label><br><br>";
    document.getElementById("list").innerHTML+=list;
    document.getElementById("namer").value="";
}