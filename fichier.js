var tab_taches_afaire=[];
var tab_taches_fini=[];

function ajouterTacheAfaire() {
    input_tache = document.getElementById("tacheAfaire");
    let tache1 = input_tache.value;
    tab_taches_afaire.push(tache1);
    let html='';
    tab_taches_afaire.forEach(element => {
        html+='<tr><td>'+element+'</td>';
        html+='<td><input type="text" class="form-control" id="tacheAfaireModif"><button type="button" onclick="modifierTacheAfaire('+element+')">Modifier</button><button type="button" onclick="supprimerTacheAfaire('+element+')">Supprimer</button></td></tr>';
    });
    let body_table_taches=document.getElementById('liste_taches_Afaire');
    body_table_taches.innerHTML=html;
}
function modifierTacheAfaire(tache) {
    input_tache = document.getElementById("tacheAfaireModif");
    let tacheModif = input_tache.value;
    let i =tab_taches_afaire.indexOf(tache);
    tab_taches_afaire[i]=tacheModif;
}

function supprimerTacheAfaire(tache) {
    let i =tab_taches_afaire.indexOf(tache);
    tab_taches_afaire.splice(i,1);
}

function ajouterTacheFinie() {
    input_tache = document.getElementById("tacheFinie");
    tache1 = input_tache.value;
    tab_taches_fini.push(tache1);
    let html='';
    tab_taches_fini.forEach(element => {
        html+='<tr><td>'+element+'</td>';
        html+='<td><input type="text" class="form-control" id="tacheFiniModif"><button type="button" onclick="modifierTacheAfaire('+element+')">Modifier</button><button type="button" onclick="supprimerTacheAfaire('+element+')">Supprimer</button></td></tr>';
    });
    let body_table_taches=document.getElementById('liste_taches_finies');
    body_table_taches.innerHTML=html;
}

function modifierTacheFinie(tache) {
    input_tache = document.getElementById("tacheFiniModif");
    let tacheModif = input_tache.value;
    let i =tab_taches_fini.indexOf(tache);
    tab_taches_fini[i]=tacheModif;
}

function supprimerTacheFinie(tache) {
    let i =tab_taches_fini.indexOf(tache);
    tab_taches_fini.splice(i,1);
}