import { Parallax, Background } from 'react-parallax';

const Cover = ({img, title}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the Menu"
        strength={-200}
    >
            <div>
                <div className="hero  lg:min-h-screen">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-4xl bg-black bg-opacity-40  lg:px-[230px] lg:py-16 ">
                            <h1 id="style-font" className="mb-5 text-[75px] text-white font-bold">{title}</h1>
                            <p id="style-font" className="mb-5 text-white text-2xl ">Would you like to try a dish</p>

                        </div>
                    </div>
                </div>
            </div>
    </Parallax>
        
    );
};

export default Cover;