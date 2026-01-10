const bt = document.getElementById("bt").value;
const adding = document.getElementById("order").value;
const input = document.getElementById("todo").value;
const button = document.getElementById("addbtn");
const mainfoem = document.getElementById("mainDiv");

const todolist = [];
bt.addEventListener("click", ()={
    if(mainform.classlist.contains("hidden")){
        mainform.classlist.remove("hidden");
    mainform.classlist.add("flex");
    }
    else{mainform.classlist.remove("flex");
        mainform.classlist.add("hidden");

    }
})

