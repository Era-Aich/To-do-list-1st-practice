// const isconfirmed=()=>{
//     const c = confirm("Are u sure")
//     console.log(c)

//     if(c == true){
//         console.log("clicked done")
//     }

//     if(c==false){
//         console.log("clikcked failed")
//     }
// }








// const getBtn = document.getElementById("btn")

// const btnclicked= getBtn.addEventListener("click", isconfirmed);


const inputIdName = "inp";
const add = "addbtn";
const getinput = () =>{
     const input = document.getElementById(inputIdName).value
     console.log(input)

     let node = document.createElement("LI");
     let textnode = document.createTextNode(input);
     node.appendChild(textnode);
     document.getElementById("note").appendChild(node);
}

const clickbtn = document.getElementById(add).addEventListener("click", getinput)