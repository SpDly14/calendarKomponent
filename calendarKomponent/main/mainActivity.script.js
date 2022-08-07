console.log('JavaScript loaded successfully')
const d = new Date();
let date = d.getDate();

const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = Month[d.getMonth];
let year = d.getFullYear();

console.log('Link = '+'https://raw.githubusercontent.com/SpDly14/calendarKomponent/main/calendarKomponent/src/cache/'+year+'/'+month+'/'+date+'.png')
console.log('Redirecting now')
window.location.href = 'https://raw.githubusercontent.com/SpDly14/calendarKomponent/main/calendarKomponent/src/cache/'+year+'/'+month+'/'+date+'.png';
