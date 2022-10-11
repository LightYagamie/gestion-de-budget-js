  
 /*let buton_ajoutdepense = document.getElementById("myBtn")
 buton_ajoutdepense.addEventListener("click") */

 
// Add depense
let modal = document.getElementById("myModaldep");

// Get the button that opens the modal
let button_valid = document.getElementById("Butt");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
button_valid.onclick = function() {
  modal.style.display = "block";
}

 // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  

//   Add revenu
let revenu = document.getElementById("myModalrev");
//Get the button that opens the modal
let button_validee = document.getElementById("butt");
//Get the <span> element that closes the modal
let spane = document.getElementsByClassName("Close")[0];
//When the user clicks on the button, open the modal
button_validee.onclick = function(){
    revenu.style.display = "block";
}
 //When the user cliks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
 }

 // When the user cliks anywhere outside of the modal
 window.onclick = function(event){
    if (event.target == revenu) {
        revenu.style.display = "none";
      }
 } 

 
 // button valider depense
let btnVdep = document.getElementById("button_valid");
let listcateg = document.getElementById("ajoudep");
let Montan = document.getElementById("montant_dep");
btnVdep.onclick = function() { 
  alert("depense valide");
}
// Fill table depense
 const tbody = document.querySelector(".tbody");
 const  tabledepense = document.querySelector("tabledep");
 function addtabledep (element) {
  element.preventDefault(0);
  const titre = document.getElementById("ajoudep").value;
  const montant= document.getElementById("montant_dep").value;
  console.log(titre,montant);
  tbody.innerHTML +=
  `<tr>
    <td>${titre}</td>
    <td>${montant}</td>
    <td><button class="modifbnt"><i class="fa-solid fa-pen-to-square"></i></button><button class="supbtn" ><i class="fa-solid fa-trash"></i></button></td>
  </tr>` ;
  const button_modif =document. getElementsByClassName("modifbnt");
  console.log("button modif 1",button_modif )
  for (let index = 0; index < button_modif.length; index++) {
    const element = button_modif[index];
    element.addEventListener("click", () => {
      console.log("element clicked", element)
      modal.style.display="block";
    })
    
  }
  // button_modif.forEach(element => {
  //   console.log("element", element)
  //    element.addEventListener('click' ,() => {
    
  //     console.log("modifier boutton clicker")
  //     // if (  btn_modif_el.innerText.tolowercase() ==
  //     // "edit") {
  //     //     button_action_el.removeAttribute("readonly");
  //     //     button_action_el.focus();
  //     //     button_modif_el.innerText = "save";
  //     // } else{
  //     //     button_action_el.setAttribute("readonly", 
  //     //   "readonly");
  //     //     button_modif_el.innerText = "Edit";
  //     // }
  //   });
  // });
  const btn_modif =document.querySelector("#action");

  

 }

  
 btnVdep.addEventListener("click",addtabledep);
 

// button valider revenue
 let btnVrev = document.getElementById("button_validee");
 let ajouRev = document.getElementById("ajouRev");
 let montant_rev = document.getElementById("montant_rev");

 btnVrev.onclick = function() {
  alert(" revenue valide") 
 }
// Fill table revenue
const bodytab = document.querySelector(".bodytab");
const tablerevenu = document.querySelector("tablerev");
function addtablerev (element) {
  element.preventDefault(0);
  const titre = document.getElementById("ajouRev").value;
  const montant= document.getElementById("montant_rev").value;
  console.log(titre,montant);
  bodytab.innerHTML +=
  `<tr>
  <td>${titre}</td>
  <td>${montant}</td>
  <td><button <i class="fa-solid fa-pen-to-square"></i></button><button  <i class="fa-solid fa-trash"></i></button></td>
  </tr>`;
  
}
btnVrev.addEventListener("click",addtablerev);
