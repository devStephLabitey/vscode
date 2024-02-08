// const appopen = document.getElementById('appli'),
// closes = document.getElementById('closed'),
// push = document.getElementById('open');
// push.addEventListener('click', ()=>{
//     appopen.classList.toggle('opened')
// });
// closes.addEventListener('click', ()=>{
//     appopen.classList.toggle('opened')
// });

//====================Les fonctions==============================//
//fonction sans paramètre

// function eunice(){
//     console.log('eunice est moche');
    
// }
// eunice();

//fontion avec paramettre 21

// //les prompts pour poser des questions
// const grp = prompt('quel est votre nom ?');
// console.log(grp);

//
// let Numbers = Number(prompt('entrer un nombre : '))
// console.log(Numbers + 1);


//typeof pour connaitre le type de la variable
//console.log(typeof Numbers);


// function presentation(){
//   let nom = prompt('entrez votre nom :')
//   let prenom = prompt('votre prénom')
//   let age = Number(prompt ("votre âge : ")) 

//   console.log(`votre nom est ${nom}`);
//   console.log(`votre PREnom est ${prenom}`);
//   console.log(`votre âge est ${age}`);

//   alert(`${nom}, ${prenom}, ${age}`)
// }
// presentation()

// function pop(){
//     let a = 1;
//     return a;
// }
// console.log(pop()+1);



//function addition(nb1, nb2) {
//     let A = nb1+nb2
//     console.log(A);
//     return A;
// }

// addition(1,2)

// =======================les tableaux========================= //

// let voiture = ["toyota", "mazda", "KIA", "benz"];
// console.log(voiture[1])
// voiture.push("moto")

// console.log(voiture[voiture.length-1]); pour connaitre le taille du tableau
// console.log(voiture[voiture.length-1]);
// voiture.pop()
// console.log(voiture)
// voiture.pop() pour supprimer le dernier élément du tableau
// console.log(voiture);

// console.log(voiture.splice(1,1)) pour supprimer un élément du tableau passant par son indice
// console.log(voiture.splice(0,1));
// console.log(voiture);

//========================Les conditions =================================//
// let nom = "ali"
// if(nom == "ali"){
//     console.log("c'est bon");
// }else{
//     console.log("C'est pas probable");
// }

// let age = prompt('entrez votre age : ')
//  if(age<18){
//     console.log("vous êtes mineur");
//  }else{
//     console.log("vous êtes majeur");
//  }

// let nom = prompt("votre nom svp :")
// let prenom = prompt("votre prénom svp")
// if(nom == prenom){
//     console.log("c'est bizarre");
// }else{
//     console.log("yaforrlo");
// }


// let nom  = prompt("votre nom : ")
// console.log(document.querySelectorAll('li'));


// function addition (){
//     let a = Number(prompt("entrer le premier nombre"))
//     let b = Number(prompt("entrer le second nombre"))
//     let rslt;
//     rslt = a + b
//     console.log(`l'addition de ${a} et ${b} donne :${rslt}`)
// }

// function multiplication(){
//     let a = Number(prompt("entrer le premier nombre"))
//     let b = Number(prompt("entrer le second nombre"))
//     let rslt;
//     rslt = a * b
//     console.log(`la multiplication de ${a} et ${b} donne :${rslt}`)
// }

// function division(){
//     let a = Number(prompt("entrer le premier nombre"))
//     let b = Number(prompt("entrer le second nombre"))
//     let rslt;
//     rslt = a / b
//     console.log(`la multiplication de ${a} et ${b} donne :${rslt}`)
// }

// function soustraction(){
//     let a = Number(prompt("entrer le premier nombre"))
//     let b = Number(prompt("entrer le second nombre"))
//     let rslt;
//     rslt = a - b
//     console.log(`la soustraction de ${a} et ${b} donne :${rslt}`)
// }

// let menu = Number(prompt("1- addition, 2-soustraction, 3-multiplication, 4-division"));
// switch(menu){
//     case 1 : addition() 
//     break;
//     case 2 : soustraction() 
//     break;
//     case 3 : multiplication() 
//     break;
//     case 4 : division() 
//     break;
//     default : console.log("Vous devez choisir un nbre entre 1 et 4")
//     break;
     
// }

//======================= boucles =====================//

//==================== foreach ======================//
//foreach(callback (valeur, indice, array))
//ex avec tableau simple 
//let tabNom = ["stéphane", "soso", "eunice", "roméo"]
// tabNom.forEach(nom => {
//     console.log(`bonjour ${nom}`);
// });

// let personne = [
//     {nom:"amah", prenom:"val"},
//     {nom:"ste", prenom:"val"},
//     {nom:"clé", prenom:"val"},
//     {nom:"lol", prenom:"val"}
// ]
// personne.forEach(elt => {
//         console.log(`bonjour ${elt.nom}, ${elt.prenom}`);
//      });

//================== forof=====================//
// for (let valeur of TabNom){
//     console.log(${valeur.elementTableau});
// }


//=============== fontion dans un objet ===================//
// let personne = {
//     nom : "mama",
//     prenom : "vivi",
//     age: 14,
//     afficheInfo(){
//         console.log(`je m'appel ${this.nom}`);
//     }
// }
//  personne.afficheInfo()


//=============== classe ===================//
// class personne{
//     nom = "mama"
//     prenom = "vivi"
//     age= 14
//     afficheInfo(){
//         console.log(`je m'appel ${this.nom}`);
//     }
// }
//  new personne()
// let nomb = new personne();
// console.log(nomb.nom);


// function personne (){
//         nom = "mama",
//         prenom = "vivi",
//         age= 14,
//         console.log(this.nom)
//         console.log(this.prenom)
        
//     }
//     personne()
   

// let eltm = document.getElementById("big")
// let variable = document.createElement("h3")
// variable.textContent="azetryu"
// let doc = document.querySelector(".cobail")
// doc.appendChild(variable)


// let bigger = document.createElement("button")
// let bod = document.createElement("div")
// bod.innerHTML=`0`
// bigger.innerHTML = `
// cliquez
// `
// let cost = document.querySelector("body")
// let added = cost.appendChild(bod)
// cost.appendChild(bigger)

// bigger.addEventListener('add',()=>{
      
// })



 
{/* <h1>Hello word</h1>
<div id="big">
  <div>first child</div>
  <div>second child</div>
  <p class="small">Suivez seulement</p>
</div>
<div class="cobail">
  
</div> */}

// function entrezNote(){
//   let nbE
// }
//let menu = Number(prompt("1- entrez la note des étudiants : 2-Voir les 30 notes 3-Voir la plus forte et laplus faible note 4-Voir la moyenne générale de la classe"))


let grdDiv = document.createElement("div") 
grdDiv.style.border="solid"
grdDiv.style.height="15vh"
grdDiv.style.width="100%"
let bodies = document.querySelector("body")
bodies.appendChild(grdDiv)

let inter = document.createElement("p")
inter.textContent=`First part..?`
grdDiv.appendChild(inter)
inter.style.textAlign="center"
inter.style.fontSize="4vh"
inter.style.color="red"



inter.addEventListener("click", ()=>{
  let listp = document.createElement("ul")

grdDiv.appendChild(listp)

let listp1 = document.createElement("li")
let listp2 = document.createElement("li")
let listp3 = document.createElement("li")
let listp4 = document.createElement("li")

listp1.textContent="1"
listp2.textContent="2"
listp3.textContent="3"
listp4.textContent="4"

listp.appendChild(listp1)
listp.appendChild(listp2)
listp.appendChild(listp3)
listp.appendChild(listp4)

grdDiv.style.height="40vh"
})




// let secGrd = document.createElement('div')
// secGrd.className = "classe_2"
// bodies.appendChild(secGrd)
// secGrd.style.height="60vh"
// secGrd.style.width="100%"
// secGrd.style.display="flex"
// secGrd.style.flexDirection="row"
// secGrd.style.border="solid"


// let div1 = document.createElement("div")
// secGrd.appendChild(div1)
// div1.style.height="40vh"
// div1.style.width="50%"
// div1.style.margin="50px"
// div1.style.border="solid black"
// div1.style.color="red"
// div1.style.display="flex"
// div1.style.alignItems="center"
// div1.style.justifyContent="center"
// div1.textContent = `################################
// #####################
// #######################
// ##################
// #################
// ###############`


// let div2= document.createElement("div")
// secGrd.appendChild(div2)
// div2.style.height="40vh"
// div2.style.width="50%"
// div2.style.margin="50px"
// div2.style.color="red"
// div2.style.border="solid black"
// div2.textContent = `###########################
// #####
// #####################
// #######################
// ##################
// #################
// ###############`

















