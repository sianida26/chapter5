const { user }    = require('../models');
async function userPost(req, res){
    const getUser = await user.findAll().then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: getUser}));
}

module.exports = userPost