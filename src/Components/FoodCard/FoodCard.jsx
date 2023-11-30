import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    const { user } = UseAuth()
    const navigate = useNavigate()
    const handelAddToCard = food => {
        if (user && user.email) {
            // ToDo: sent card item to the database
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to login page
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div>
            <div className='w-[370px]'>
                <div>
                    <img className=""  src={image} alt="" />
                    
                </div>
                <div className='text-center  lg:pt-6 space-y-3 bg-[#F3F3F3] p-6'>
                    <h2 className='text-2xl'>{name}</h2>
                    
                    <p className='text-sm'>{recipe}</p>
                    <p className=" text-[#BB8506] font-bold"><span className="text-[#1F2937]">Price:</span> $ {price}</p>
                    <button onClick={() => handelAddToCard(item)} className='text-[#BB8506] text-lg border-[#BB8506] bg-[#E8E8E8] border-b-4 hover:bg-[#1F2937] px-6 py-2 rounded-md '> add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;