let inputs=document.getElementById("inp");
let tasks=document.querySelector(".tasks");
function add(){
    if(inputs.value==""){
        alert("please enter some task");
    }
    else{
        let newElem=document.createElement("ul");
        newElem.innerHTML=`${inputs.value}<i class="material-icons md-48">delete</i> <span id="p">P</span><span id="s">S</span><span id="c">C</span><span id="x">x</span>`;
        tasks.appendChild(newElem);
        inputs.value="";
        newElem.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElem.remove();
        }
            /*primary*/
        newElem.querySelector("#p").addEventListener("click",fillred);
        function fillred(){
            newElem.style.backgroundColor="red";
        }
            /*secondary*/
        newElem.querySelector("#s").addEventListener("click",fillblue);
        function fillblue(){
            newElem.style.backgroundColor="blue";
        }
            /*completed*/
        newElem.querySelector("#c").addEventListener("click",fillgreen);
        function fillgreen(){
            newElem.style.backgroundColor="green";
        }
        newElem.querySelector("#x").addEventListener("click",clear);
        function clear(){
            newElem.style.backgroundColor="white";
        }
        

    }
}