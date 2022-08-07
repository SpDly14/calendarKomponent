console.log('JavaScript loaded successfully')
let date = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

console.log('Link = '+'https://raw.githubusercontent.com/SpDly14/calendarKomponent/main/calendarKomponent/src/cache/'+year+'/'+month+'/'+date+'.png')
console.log('Redirecting now')
location.href = 'https://raw.githubusercontent.com/SpDly14/calendarKomponent/main/calendarKomponent/src/cache/'+year+'/'+month+'/'+date+'.png';