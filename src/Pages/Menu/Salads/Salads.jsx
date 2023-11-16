import { Parallax, Background } from 'react-parallax';

const Salads = ({img, title}) => {
    return (
        <div className='mt-20'>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the Menu"
                strength={-200}
            >
                <div>
                    <div className="hero  h-[600px]">
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl bg-black bg-opacity-40  lg:px-[90px] lg:py-16 ">
                                <h1 id="style-font" className="mb-5 lg:text-[70px] text-white font-bold uppercase">{title}</h1>
                                <p id="main-font" className="mb-5 text-white text-lg ">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Salads;