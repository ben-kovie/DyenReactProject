 const kingCrestData=[
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/atuwatse_iii.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/ikenwoli.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/atuwatse_ii.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/erejuwa_ii.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/ginuwa_ii.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/interregnum.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/akengbuwa.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/erejuwa.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/atogbuwa.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/akenjioye.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/omagboye.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/akenjioye_sebastien.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/abejeoye.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/omoluyiri.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/oyenakpagha.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/atuwatse.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/atonrongboye.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/esigie.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/ojoluwa.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/irame.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/ijijen.jpg'},
    {imgUrl:'https://atuwatseiii.com/assets/img/crests/iwere_kings/ginuwa_i.jpg'},
]
const loginPageImage='./serverImages/loginpage.png'

const http = require('http');

const express = require('express');

const app= express();

// const cors = require('cors');

// app.use(cors({
//   origin: 'http://localhost:3000/kingCrestData'
// }));

app.use('./',(req, res, next) => {
  const allowedOrigins = ['http://localhost:8000/kingCrestData'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  return next();
});
app.get('/kingCrestData',(req, res, next)=>{
    res.send(kingCrestData)
    console.log( 'I am a middleware')
})
app.get('/loginpage.png',(req, res, next)=>{
    res.send(kingCrestData)
    console.log( 'I am a middleware2')
})
const server= http.createServer(app);

server.listen(8000)