
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Salad from "../Salad/Salad";
import TestImonIals from "../TestImonIals/TestImonIals";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>

            <div className="lg:mx-28">
                <Category></Category>
                <BistroBoss></BistroBoss>
                <PopularMenu></PopularMenu>
                <CallUs></CallUs>
                <Salad></Salad>
                <Featured></Featured>
                <TestImonIals></TestImonIals>
            </div>



        </div>
    );
};

export default Home;