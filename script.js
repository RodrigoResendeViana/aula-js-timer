
/*
let data1 = new Date()
document.write(data1.toDateString());
document.write('<br><br>');

let data2 = new Date()
document.write(data2.toLocaleDateString());
document.write('<br><br>');


//RETORNA A DATA COM ARRAY
let data3 = new Date()
let diaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
document.write(diaSemana[data3.getDay()]);
document.write('<br><br>');

//HORAS

let hour = new Date()
document.write(hour.getHours());
document.write('<br><br>');
hour.setHours(hour.getHours()+2);
document.write(hour.getHours());


//minutos

let minutes = new Date()
document.write(":", minutes.getMinutes())

//SEGUNDOS

let seconds = new Date()
document.write(":", seconds.getSeconds())
*/
msg = document.getElementById("msgData")
let data = new Date()
//document.write(data);
//document.write('<br><br>');

msg.innerHTML += `<p>${data}</p>`

