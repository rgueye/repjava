"use strict";

// Recherche un élément (singulier) par son id (HTML unique)
// Placer dans une variable le résultat
var table_produits = document.getElementById('produits_promo');
console.log("Élément table : ", table_produits);

var row_items = table_produits.getElementsByTagName('TR');
console.log("Ligne de la table : ", row_items);

// Le nombre de ces items
console.log("Nb d'items : ",row_items.length); // Fonctionne comme un tableau
if (row_items.length > 0) {
    console.log("Premier des items : ",row_items[0]); // Premier des item de la liste
    console.log("Dernier des items : ",row_items[row_items.length - 1]); // Premier des item de la liste
}

// Parcourir les items un par un
for (var i=0 ; i < row_items.length ; i++) {
    console.log("Le TR d'indice ", i ," est", row_items[i]);
}

// Tous les éléments qui ont la classe "info"
var elems_class_info = document.getElementsByClassName('info'); // Pas de "." comme en CSS
console.log("Éléments du document qui ont la classe 'info' : ", elems_class_info);

// Tous les éléments qui ont la classe "info" et enfants du div#nouvelles
// On peut partir d'un élément du document et pas toujours du document lui-meme
var div_nouvelles = document.getElementById('nouvelles');
var elems_class_info_nouvelles = div_nouvelles.getElementsByClassName('info');
console.log("Éléments du div#nouvelles qui ont la classe 'info' : ", elems_class_info_nouvelles);

/* À l'aide de sélecteurs */
/* NE PAS FAIRE CECI CAR EQUIVALENT AU GETELEMENTBYID */
table_produits = document.querySelector('#produits_promo');
console.log("Élément table (query): ", table_produits);

/*Plus utile */
var premiere_ligne = table_produits.querySelector('tr');
console.log("Première Ligne de la table : ", premiere_ligne);
var premier_elem_class_info_doc = document.querySelector('.info'); // Cette fois, on met le "."
console.log("Premier éléments du document qui a la classe 'info' : ", premier_elem_class_info_doc);
// À nouveau premier élément qui a la classe "info" et enfants du div#nouvelles
var premier_elem_class_info_div_nouvelles = document.querySelector('#nouvelles .info'); // Cette fois, on met le "."
console.log("Premier éléments du div#nouvelles qui a la classe 'info' : ", premier_elem_class_info_div_nouvelles);

// À nouveau TOUS LES  éléments qui ont la classe "info" et enfants du div#nouvelles
// Avec un sélecteur façon "CSS" = query
elems_class_info_nouvelles = document.querySelectorAll('#nouvelles .info'); // pluriel
console.log("Éléments du div#nouvelles qui ont la classe 'info' (query): ", elems_class_info_nouvelles);







