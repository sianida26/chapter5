const { user }    = require('../models');
async function userPost(req, res){
    var userCreate = await user.create({
        username: req.body.username,
        password: req.body.password,
    }).then(user => {
        return user;
    })
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Create Success ", data: userCreate}));
}

module.exports = userPost