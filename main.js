let btnInscrire = document.getElementById('signUp');

btnInscrire.addEventListener("submit", function signUp(e){
    e.preventDefault();
    let fields = document.querySelectorAll('input[required]');
    // cette variable de vient false si l'un des trois n'est pas valide
    let valid = true;

    // permet de verifier la validité de chacun des champs
    // permet de d'executer une function a fleche pour chacun des éléments stocker dans la variable fields 
    fields.forEach((field) => {
       if(validateField(field)){
           valid = false;
       }
    });
    if(valid){
        e.target.submit();
    }
}, false);

// cette function resoit en entrée un champ et va utiliser une méthod de cette objet field qui s'appel checkValidity()
// cette méthod checkValidity() va retouner soit true si le champs est valid et false s'il ne l'est pas
// et pour ce elle va ce servir de la function required dans le html
function validateField(field){
    if(field.checkValidity()){
        return true;
    }else{
        return false;
    }
}

// let btnConnecter = document.getElementById('logIn')
// .addEventListener("click", function logIn(){
//     // console.log('');
// }, false);