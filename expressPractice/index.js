// console.log('Hello World! And also the moon');

const express = require('express');
const app = express();
const port = 3000;

var userRouter = require('./routes/user.routes.js');
var adminRouter = require('./routes/admin.routes.js')

function checkAuthorization(request, response, next) {
    if (request.authToken) {
        next();
    } else{
        response.send('You can not do that. Sorry.')
    }
}

function sayMyName(req, res, next){
    console.log("Andrew");
    next();
}

app.use('/users/:userID', userRouter);
app.use('/admin', adminRouter); 

app.get('/friends/:friendId/posts/:postId', (request, response) => {
    response.send(request.params.friendId + " " + request.params.postId);
})

app.get('/', sayMyName, (req, res) => res.send('Hello World!'))
app.get('/helloworld',  checkAuthorization, (req, res) => res.send('Hello World! And the moon!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))