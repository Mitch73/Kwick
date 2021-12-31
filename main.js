$(document).ready(function() {
    //ping
    let ping = $.ajax({
        url: 'http://greenvelvet.alwaysdata.net/kwick/api/ping',
        dataType: 'jsonp'
    });
    ping.done(function(data) {
        // console.log(data);
        let user = {
            ready: data['result']['ready'],
        }
    });
    // section formulaire s'incrire
        $("#signUp").on('click', function(e){
            e.preventDefault();
            let nameSignUp = $('#name').val();
            let passwordSignUp = $('#password').val();
            let confirmPassword = $('#retapez_le_mot_de_passe').val();

            let inscription = $.ajax({
                url: 'http://greenvelvet.alwaysdata.net/kwick/api/signup/' + nameSignUp + ' ' + passwordSignUp + ' ' + confirmPassword,
                dataType: 'jsonp'
        });  
    
        inscription.done(function(data){
            // console.log(data);
            let user = {
                // token represente les identifiants créers par l'utilisateur un peu comme une carte d'indentité
                id: data['result']['id'],            
                token: data['result']['token']
            }
            // la méthode JSON.stringify() permet de convertir les valeur de js en JSON et les stocker dans le localStoragesetItem()
            let json_data = JSON.stringify(user);
            localStorage.setItem('user', json_data); 

            if (data['result']['status'] === 'done') {
                window.location = 'messagerie.html';
            } else {
                $('.msg').fadeIn();
            }
        })             
    });
    //connexion de l'utilisateur
    $("#logIn").on('click', function(e) {
        e.preventDefault();
        let nameLogIn = $('#name').val();
        let passwordLogIn = $('#password').val();

        let connect = $.ajax({
            url: 'http://greenvelvet.alwaysdata.net/kwick/api/login/' + nameLogIn + ' ' + passwordLogIn,
            dataType: 'jsonp'
        });

        connect.done(function(data) {
            // console.log(data);

            let user = {
                id: data['result']['id'],
                token: data['result']['token']
            }

            let json_data = JSON.stringify(user);
            localStorage.setItem('user', json_data);

            if (data['result']['status'] === 'done') {
                window.location = '../messagerie.html';
            } else {
                $('.msg').fadeIn();
            }

        })
    });

    $("#logout").on('click', function(e) {
        e.preventDefault();

        let user_data = JSON.parse(localStorage.getItem('user')), //transforme en object
            user_id = user_data.id,
            token = user_data.token;

        let logout = $.ajax({
            url: 'http://greenvelvet.alwaysdata.net/kwick/api/logout/' + token + '/' + user_id,
            dataType: 'jsonp'
        });

        logout.done(function(data) {
            localStorage.clear();
            window.location = '../index.html';
        })
    })
});

// $('#password, #retapez_le_mot_de_passe').on('keyup', function () {        
//     if ($('#password').val() == $('#retapez_le_mot_de_passe').val()) {
//       $('#message').html('Matching').css('color', 'green');
//     } else 
//       $('#message').html('Not Matching').css('color', 'red');
//   });

// section formulaire s'incrire

// je recupère mon formulaire document.getElementById() dont la variable btnInscrire
// let btnInscrire = document.getElementById('signIn');
// let password = document.getElementById('password');
// let confirmPassword = document.getElementById('retapez_le_mot_de_passe');

// btnInscrire.addEventListener('submit', (e) => {
//     e.preventDefault();
    // let fields = document.querySelectorAll('input[required]');
    // cette boucle permet de parcourire un par par les champs et supprimers les messages d'erreurs quand elles sont remplies
    // fields.forEach((field) => {resetField(field)});
    // cette variable de vient false si l'un des trois n'est pas valide
    // let valid = true;

    // la boucle forEach permet de verifier la validité de chacun des champs
    // permet de d'executer une function a fleche pour chacun des éléments stocker dans la variable fields 
    // la renvoye une valuer boolean a l'occurance true donc j'applique une condition if
    // si validateField revoye true a la ligne 29 la ligne 14 sera donc false grace au point d'exclamation et la 15 ne sera donc pas executer
    // et la valuer valid va rester a sa valuer initial de true
//     fields.forEach((field) => {
//        if(!validateField(field)){
//            valid = false;
//        }
//     });
//     if(valid){
//         e.target.submit();
//     }
// }, false);

// cette function resoit en entrée un champ et va utiliser une méthod de cette objet field qui s'appel checkValidity()
// cette méthod checkValidity() va retouner soit true si le champs est valid et false s'il ne l'est pas
// et pour ce elle va ce servir des attributes required dans le html
// puisqu'elle me renvoy false j'ai décider de faire une condition if
// function validateField(field){
//     if(field.checkValidity()){
//         return true;
//     }else{
//         field.classList.add('invalid');
//         field.previousElementSibling.insertAdjacentHTML('afterend', `<span class="msg">${field.validationMessage}</span>`);
//         return false;
//     }
// }

// function supprime les messages d'erreur quand les champs sont remplies 
// function resetField(field){
//     let fieldLabel = field.previousElementSibling;
//     field.classList.remove('invalid');
//     while(fieldLabel.firstElementChild){
//         fieldLabel.removeChild(fieldLabel.firstElementChild)
//     }
//     field.valid = true;
// }

// pasword settings avec les variable password et confirmPassword
// function validatePassword(){
//     if(password.value != confirmPassword.value) {
//         confirmPassword.setCustomValidity("Passwords Don't Match");
//     } else {
//         confirmPassword.setCustomValidity('');
//     }
//   }
  
//   password.onchange = validatePassword;
//   confirmPassword.onkeyup = validatePassword;

// let check = function checkPassword() {
//     if (document.getElementById('password').value ==
//       document.getElementById('retapez_le_mot_de_passe').value) {
//       document.getElementById('message').style.color = 'green';
//       document.getElementById('message').innerHTML = 'matching';
//       return true;
//     } else {
//       document.getElementById('message').style.color = 'red';
//       document.getElementById('message').innerHTML = 'not matching';
//       return false;
//     //   document.getElementById('submit').e.preventDefault();
//     }
//   }

// function checkPassword(){
//     if(document.getElementById('password').value == 'hello'){
//     //  alert('Correct Password!'); 
//        location.href = "privée.html";
//       } else {
//     //   alert('Wrong Password!');
//        return false;
//      }
//     }

// section formulaire connecter
// let btnConnecter = document.getElementById('logIn');

// btnConnecter.addEventListener("submit", function logIn(e){
//     e.preventDefault();
//     let champs = document.querySelectorAll('input[required]');

// }, false);