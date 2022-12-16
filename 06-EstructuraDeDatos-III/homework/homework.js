'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(valor) {
   this.value = valor
   this.left = null
   this.rigth = null   
}

BinarySearchTree.prototype.size = function(){
   let tam = 1
   if (this.left) {
     tam += this.left.size()
   }
   if (this.rigth) {
     tam += this.rigth.size()
   }
   return tam
 }
BinarySearchTree.prototype.size2 = function(){
   let tamaño = 1
   if (this.left) {
      tamaño =+ this.left.size2()
   }
   if (this.rigth) {
      tamaño =+ this.rigth.size2()
   }
   return tamaño
}

BinarySearchTree.prototype.insert = function(valor){
   if (valor < this.value) {
      if (this.left) {
         this.left.insert(valor)
      }else{
         this.left = new BinarySearchTree(valor)
         return valor
      } 
   }else{
      if (this.rigth) {
         this.rigth.insert(valor)
      }else{
         this.rigth = new BinarySearchTree(valor)
         return valor
      }   
   }
}

BinarySearchTree.prototype.contains = function(valor){
   // if(this.raiz){
   //    let circulator = this.raiz
   //    if (valor == circulator.data) {
   //       return true
   //    }else{
   //       if (circulator.left) {
   //          return false || circulator.left.contains(valor)
   //       }
   //       if (circulator.rigth) {
   //          return false || circulator.rigth.contains(valor) 
   //       }
   //    }
   // }else return false
}
BinarySearchTree.prototype.depthFirstForEach = function() {}
BinarySearchTree.prototype.breadthFirstForEach = function(){}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
