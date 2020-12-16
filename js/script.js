//chiedo all'utente il suo cognome
var surnameUser = prompt('Qual è il tuo cognome?');

//creo lista cognomi.
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

//aggiungo il cognome utente alla Lista
surnameList.push(surnameUser.charAt(0).toUpperCase() + surnameUser.substring(1).toLowerCase());

//ordino la lista dei cognomi alfabeticamente
surnameList.sort()
console.log(surnameList)

//dichiaro variabile per lista li
var outputList = document.getElementById('lista-cognomi');
var StatoPrecedente;

//stampo la lista
for(var i = 0; i < surnameList.length; i++) {
  StatoPrecedente = outputList.innerHTML;
  outputList.innerHTML = StatoPrecedente + '<li>' + surnameList[i] + '</li>';
}
