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
function node(data) {
   this.data = data
   this.left = null
   this.rigth = null   
}
function BinarySearchTree() {
   this.raiz = new node()
}

BinarySearchTree.prototype.size = function(){
   let circulador = this.raiz
   let tamaño = 0
   if (circulador === null) return tamaño
   if (circulador.left != null) return tamaño + circulador.left.size() 
   if (circulador.rigth != null) return tamaño + circulador.rigth.size()
}

BinarySearchTree.prototype.insert = function(valor){
   const nodito = new node(valor)
   if (this.raiz) {
      let circulator = this.raiz
      if (valor < circulator.data) {
         circulator.left.insert(valor)
      }
   }else{
      this.raiz = nodito
   }
}

BinarySearchTree.prototype.contains = function(valor){
   if(this.raiz){
      let circulator = this.raiz
      if (valor == circulator.data) {
         return true
      }else{
         if (circulator.left) {
            return false || circulator.left.contains(valor)
         }
         if (circulator.rigth) {
            return false || circulator.rigth.contains(valor) 
         }
      }
   }else return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
