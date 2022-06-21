//Importação
import { LightningElement,track } from "lwc";

//Exportação
//APP> Nome do nosso LWC(clase que controla o LWC)
//EXtends > Extendo as funcionalidades com coisas do Lightning Element

export default class App extends LightningElement {
  
  //Qualquer alteração que rolar no num1 e num2 eu estou de olho
  @track num1;
  @track num2;
  resultado;


//Evento pega as informações sobre quem disparou ele 
  mudouN1(event){
    this.num1 = Number(event.target.value);
  }

   mudouN2(event){
    this.num2 = Number(event.target.value);
  }

//this (proximas)
//that (longe)

  soma(){
    this.resultado = this.num1 + this.num2;
  }
 
  sub(){
    this.resultado = this.num1 - this.num2;
  }

   div(){
    this.resultado = this.num1 / this.num2;
  }

   mult(){
    this.resultado = this.num1 * this.num2;
  }
}
