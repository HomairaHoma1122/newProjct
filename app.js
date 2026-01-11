const btn = document.getElementById("addId").value;
const eror = document.getElementById("eror");
const button = document.getElementById("addbtn");
const mainform = document.getElementById("mainDiv");

const todolist = [];
let peIm = "";

mainform.addEventListener("click", ()=>{
    if(mainform.classlist.contain("none")){
    mainform.classlist.remove("none");
    mainform.classlist.add("flex");
    }
    else {
        mainform.classlist.remove("flex");
        mainform.classList.add("none");
    }
});

button.addEventListener("click",(ev)=>{
        const h1 = document.createElement("h1");
ev.preventDefault();
  saveTodo();
  h1.innerHTML = "write list";

if(peIm.length>0){

    h1.textContent = "Please write a list and try agien";
    eror.appendChild(h1);
}
});

function saveTodo(){
    eror.innerHTML = "";
    const h1 = document.createElement("h1");
    const todo = document.getElementById("order").value;
    const adding = document.getElementById("todo").value;
    if(adding !==""){

    
    const saveTodo = {
        myTOdo: adding,
        import: todo,
    }
    
    todolist.push(saveTodo);
}
else{
    peIm = "Please write a list and try agien";
}
}

//
if(peIm.length>0){
    const h1 = document.createElement("h1");
    h1.textContent = "Please write a list and try agien";
}