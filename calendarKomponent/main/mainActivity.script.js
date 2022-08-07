console.log('JavaScript loaded successfully')
const d = new Date();
let date = d.getDate();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];
let year = d.getFullYear();

console.log('Link = '+'https://raw.githubusercontent.com/SpDly14/calendarKomponent/main/calendarKomponent/src/cache/'+year+'/'+month+'/'+date+'.png')
console.log('Redirecting now')
setTimeout = 3000
window.location.href = 'https://raw.githubusercontent.com/SpDly14/calendarKomponent/main/calendarKomponent/src/cache/'+year+'/'+month+'/'+date+'.png';
