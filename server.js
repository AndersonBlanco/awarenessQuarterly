const exp = require('express');
const app = exp();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/home.html');

})

let port = 8080; 
app.listen(port, (req, res) =>{
    console.log(`Server listening on port #${port}`);
}); 