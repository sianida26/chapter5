module.exports = function checkUser(req, res, next) {
    let auth    = req.headers["authorization"];
    if(auth){
        console.log("auth", auth);
        let token   = auth.slice(7);
        console.log("token", token);
        if(token == "binar123"){
            next();
        }else{
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(JSON.stringify({status: "204", message: "Failed", display_message:"Token Failed ", data: ""}));
        }
    }else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({status: "204", message: "Failed", display_message:"Token Required ", data: ""}));
    }
  };