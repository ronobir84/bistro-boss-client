import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";

const Cart = () => {
    const [cart] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = id => {
        
    }
    return (
        <div className="bg-gray-200 mt-10 p-10 w-[80%] ">
            <div className="flex justify-evenly  ">
                <h2 id="style-font" className="text-4xl uppercase "> Total bookings : {cart.length}</h2>
                <h2 id="style-font" className="text-4xl uppercase"> total price : {totalPrice}</h2>
                <button id="style-font" className="px-4 py-3 bg-[#D1A054] text-2xl text-white font-medium rounded-md mb-4">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <div className="bg-[#D1A054] py-4 mx-[75px] rounded-t-xl shadow-md">
                    <div className="flex justify-between px-10 ">
                        <h2 id="style-font" className="text-xl text-white font-semibold uppercase relative left-6">Image</h2>
                        <h2 id="style-font" className="text-xl text-white font-semibold uppercase relative left-8">Name</h2>
                        <h2 id="style-font" className="text-xl text-white font-semibold uppercase relative left-24">Price</h2>
                        <h2 id="style-font" className="text-xl text-white font-semibold uppercase">ACTION</h2>
                    </div>
                </div>
               
                <table className="table">
                    
                    
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th className="text-xl font-bold">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="">
                                            <div className="relative left-6  w-32 h-20">
                                                <img className="" src={item.image} alt=" " />
                                            </div>
                                        </div>
                                         
                                    </div>
                                </td>
                                <td className="text-xl text-[#737373]">
                                     
                                    {item.name}
                                </td>
                                <td className="text-lg text-[#737373] relative right-20">${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="bg-[#B91C1C] p-4 rounded relative right-6"><FaTrashAlt className="text-2xl text-white"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                        
                     </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;