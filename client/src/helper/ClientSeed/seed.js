import axios from "axios";
async function response() {
    try {
        const res = await axios.get("http://localhost:8080/api/products");
        if(res.data) {
            res.data = res.data.map(item => (
                // Math.round((Math.random()*5 + Number.EPSILON)*100)/100 -> round a decimal number to it's 2 places
                {...item,rating: Math.round(((Math.random() * (5 - 2 + 1) + 2) + Number.EPSILON)*100)/100 ,reviews: Math.floor(Math.random() * 100)+1,stock: Math.floor(Math.random() * 100)}
            ))
            console.log(res.data)
            return res.data;
        }
        return [];
    }
    catch(e) {
       throw new Error(e.msg)
    }
}

export default response;