// Imediately Invoked Function Expression (IIFE)

(function chai(){
    // name IIFE
    console.log(`DB Connected`);
    
})();
((name) => {
    console.log(`DB Connceted Two ${name}`)
})('Najir')

