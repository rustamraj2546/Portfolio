import myImg from "../assets/heroImage.png";

const Mydesc = () => {
  return (
    <div className="desc w-4/6 min-h-[90vh]">
      <div className="flex flex-row gap-20 justify-center mt-10 py-8 h-[30rem]">
        <div className="w-3/6 flex justify-center m-auto flex-col gap-8">
          <h1 className="text-4xl font-bold">
            Hi There! <span>👋🏻</span>
          </h1>
          <h1 className="text-4xl font-bold">
            I'm <span className="text-red-600">Rustam | Coder</span>
          </h1>
          <p className="text-lg">
            I'm a full-stack developer with 5 years of experience using React
            and NodeJS. Reach out if you'd like to learn more!
          </p>

          <button className="w-40 p-2 rounded-full bg-secondary-color hover:bg-color-dark cursor-pointer">
            Contact Me
          </button>
        </div>

        <div className="w-3/6 flex justify-center m-auto">
          <img src={myImg} alt="my-image" className="w-84" />
        </div>
      </div>
    </div>
  );
};

export default Mydesc;
