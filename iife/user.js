//IIFE
var user = (function (e = 'jbayo@iesebre.com') {
    let email = e;
    var password = '12345678';

    function consoleme() {
        console.log('Usuari: ' + email)
    }

    return {
        consoleme: consoleme,
        email: email
    }

})()