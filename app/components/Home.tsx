"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Home = () => {
  const handleScroll = () => {};
  return (
    <div className="home">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="home__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="home__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          btnType={"button"}
        />
      </div>
      <div className="home__image-container">
        <div className="home__image">
          <Image
            src="/home.png"
            alt="home"
            fill
            sizes="width:100%, height:100%"
            className="object-contain"
          />
        </div>

        <div className="home__image-overlay" />
      </div>
    </div>
  );
};

export default Home;
