// api axios (axios, secure), tan stack
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth"

const UseCart = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth()
    const { refetch, data : cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const response = await axiosSecure.get(`/carts?email=${user.email}`)
            return response.data
        }
    })
    return [cart, refetch]
};

export default UseCart;


















