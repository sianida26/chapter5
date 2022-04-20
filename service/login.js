async function login(req, res){
    console.log("req.params", req.query);
    const user    = await postgres.user.findAll().then(function (result) {
        return result;
    });
    console.log("user", user);
    if(req.query.username == "binar"){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:"Login Success ", data: "binar1234"}));
    }
    else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Failed", display_message:"Login Failed ", data: ""}));
    }
}

module.exports = login