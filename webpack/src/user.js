console.log(('prova'));

export default function (e = 'jbayo@iesebre.com'){
    let email = e;
    var password = '12345678';

    return {
        email: email,
        consoleme: function consoleme() {
            console.log('Usuari: ' + email)
        }
    }
}