// Code your solutions in this file}
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(namesarray, surprise){
    const messages = []
for (let i = 0; i < namesarray.length; i++){
    console.log (`Thank you, ${namesarray[i]}, for the wonderful surprise gift!`);
  messages.push(`Thank you, ${namesarray[i]}, for the wonderful surprise gift!`)

}
return messages
}

writeCards(["Charlie", "Samip", "Ali"], "surprise");

function countDown(startingnumber){
    while (startingnumber > -1){
console.log(startingnumber--);
   }

}

countDown(10)