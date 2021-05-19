import axios from "axios";
export default async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if(res.data) {
            res.data = res.data.map(item => (
                // Math.round((Math.random()*5 + Number.EPSILON)*100)/100 -> round a decimal number to it's 2 places
                {...item,rating: Math.round((Math.random()*5 + Number.EPSILON)*100)/100 ,reviews: Math.floor(Math.random() * 100)+1}
            ))
            console.log(res.data)
            return res.data;
        }
        return [];
    }
    catch(e) {
        // seed data api fault
        console.error(e)
    }
}