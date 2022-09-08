//Enunciado:: Crea un programa que comprueba si los paréntesis,
// llaves y corchetes de una expresión están equilibrados. 
//- Equilibrado significa que estos delimitadores se abren y cieran en orden 
//y de forma correcta. - Paréntesis, llaves y corchetes son igual de prioritarios.
// No hay uno más importante que otro. - Expresión balanceada: 
//{ [ a * ( c + d ) ] - 5 } - Expresión no balanceada: { a * ( c + d ) ] - 5
class String{
    constructor(expresion){
    this.expresion=expresion;
    }
    equilibrio(){
         let exp=this.expresion.split("");
         let limpio=[]
         let parentesisopen=0;
         let parentesisclose=0;
         let llaveopen=0;
         let llaveclose=0;
         let corcheteopen=0;
         let corcheteclose=0;
    for (let i=0; i<exp.length;i++ ){
        if(i=="(" || i==")" || i== "[" || i=="]" || i=="{" || i=="}"){
            limpio.push(i)
        }
    }
    for (let i=0;i<limpio.length;i++){
        
    }

    
    }
}

