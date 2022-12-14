'use strict';

function BinarioADecimal(num) {
   let numStr = num.toString()
   let decimal = 0
   let factor = 1
   for (let i = numStr.length-1; i > -1 ; i--) {
     if (numStr.charAt(i)==="1") {
       decimal += factor
     }
     factor *= 2
   }
   return decimal
 }
 
 function DecimalABinario(num) {2
   let binario = ""
   let resto = 0
   while (num>0) {
     resto = num%2 
     num = Math.floor(num/2)
     if(resto == 0){
       binario =  "0" + binario
     }else{
       binario =  "1" + binario
   }
   }
   return binario
 }

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
