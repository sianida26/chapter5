function index(req, res){
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({from: "Tokopedia", to:"Angelina", bankname: "Bank BCA", ppn: 10, list: [{nama: "HP Samsung", qty: 2, price: 5000000}, {nama: "HP Iphone", qty: 2, price: 10000000}]}));
}

module.exports = index