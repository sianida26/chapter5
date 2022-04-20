const { user }    = require('../models');
async function userPost(req, res){
    const deleteUser = await user.destroy({where: {id: req.param.id}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: deleteUser}));
}

module.exports = userPost