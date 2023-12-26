import UseCart from "../../../Hooks/UseCart";

const Cart = () => {
    const [cart] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="flex justify-evenly bg-white">
                <h2 id="style-font" className="text-4xl uppercase "> Total bookings : {cart.length}</h2>
                <h2 id="style-font" className="text-4xl uppercase"> total price : {totalPrice}</h2>
                <button id="style-font" className="px-4 py-3 bg-[#D1A054] text-2xl text-white font-medium rounded-md mb-4">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
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