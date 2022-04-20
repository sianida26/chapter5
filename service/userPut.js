const { user }    = require('../models');
async function userPost(req, res){
    const PutUser = await user.update({username: req.body.username, password: req.body.password}, {where: {id: req.body.id}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: PutUser}));
}

module.exports = userPost