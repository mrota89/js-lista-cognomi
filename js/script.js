//chiedo all'utente il suo cognome
var surnameUser = prompt('Qual è il tuo cognome?');

//creo lista cognomi.
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

//aggiungo il cognome utente alla Lista
surnameList.push(surnameUser.charAt(0).toUpperCase() + surnameUser.substring(1).toLowerCase());

//ordino la lista dei cognomi alfabeticamente
surnameList.sort()

//dichiaro variabile per lista li
var outputList = document.getElementById('lista-cognomi');
var StatoPrecedente;

//stampo la lista
for(var i = 0; i < surnameList.length; i++) {
  StatoPrecedente = outputList.innerHTML;
  outputList.innerHTML = StatoPrecedente + '<li>' + surnameList[i] + '</li>';
}

//ridefinisco la variabile surnameUser
surnameUser = surnameUser.charAt(0).toUpperCase() + surnameUser.substring(1).toLowerCase();

//cerco indice surnameUser
var posizioneUser = surnameList.indexOf(surnameUser) + 1;

//stampo indice surnameUser
outputList.innerHTML = StatoPrecedente + 'La posizione dell\'utente è ' + posizioneUser;
