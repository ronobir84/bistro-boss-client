import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
 
const UseCart = () => {
    // ten stack query 
    const axiosSecure = UseAxiosSecure()
    const { data : cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const response = await axiosSecure.get('/carts')
            return response.data
        }
    })
    return [cart]
};

export default UseCart;