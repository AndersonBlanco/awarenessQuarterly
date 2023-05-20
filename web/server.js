const exp = require('express');
const app = exp();

app.use(__dirname);
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

let port = 8080;
app.listen(8080, () => console.log("Server listening on port #" + {port})); 