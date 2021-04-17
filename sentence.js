function analyse(phrase) {

let longueur = 0;
let nb_mots = 0;
let nb_voyelles = 0;
let i = 0;
    
while (phrase[i] !== undefined)
{
longueur += 1;
    
if (phrase[i] === " ") {
nb_mots += 1;
}
    
switch (phrase[i]) {
    case 'a' : nb_voyelles += 1; break;
    case 'e' : nb_voyelles += 1; break;
    case 'i' : nb_voyelles += 1; break;
    case 'o' : nb_voyelles += 1; break;
    case 'u' : nb_voyelles += 1; break;
    case 'y' : nb_voyelles += 1; break;
    default :; break;
}
    
i++;
}
    
if (phrase === ""){
nb_mots = 0;
longueur = 0;  
}
else {
nb_mots += 1;
longueur = longueur - (nb_mots - 1);
}
    

return "La phrase a un longueur de " + longueur + " caractères, contient " + nb_mots + " mots et " + nb_voyelles + " voyelles."
}