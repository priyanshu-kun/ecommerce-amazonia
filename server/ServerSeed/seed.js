const axios = require("axios")
async function response() {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if(res.data) {
            return res.data;
        }
        return [];
    }
    catch(e) {
        // seed data api fault
        console.error("ERROR: ",e)
    }
}

module.exports =  response;