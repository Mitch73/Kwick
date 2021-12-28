// section formulaire s'incrire
let btnInscrire = document.getElementById('signUp');

btnInscrire.addEventListener('submit', function signUp(e){
    e.preventDefault();
    let fields = document.querySelectorAll('input[required]');
    // cette variable de vient false si l'un des trois n'est pas valide
    let valid = true;

    // la boucle forEach permet de verifier la validité de chacun des champs
    // permet de d'executer une function a fleche pour chacun des éléments stocker dans la variable fields 
    // la renvoye une valuer boolean a l'occurance true donc j'applique une condition if
    // si validateField revoye true a la ligne 29 la ligne 14 sera donc false grace au point d'exclamation et la 15 ne sera donc pas executer
    // et la valuer valid va rester a sa valuer initial de true
    fields.forEach((field) => {
       if(!validateField(field)){
           valid = false;
       }
    });
    if(valid){
        e.target.submit();
    }
}, false);

// cette function resoit en entrée un champ et va utiliser une méthod de cette objet field qui s'appel checkValidity()
// cette méthod checkValidity() va retouner soit true si le champs est valid et false s'il ne l'est pas
// et pour ce elle va ce servir des attributes required dans le html
// puisqu'elle me renvoy false j'ai décider de faire une condition if
function validateField(field){
    if(field.checkValidity()){
        return true;
    }else{
        // field.classList.add('invalid');
        // field.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
}


// section formulaire connecter
// let btnConnecter = document.getElementById('logIn');

// btnConnecter.addEventListener("submit", function logIn(e){
//     e.preventDefault();
//     let champs = document.querySelectorAll('input[required]');

// }, false);