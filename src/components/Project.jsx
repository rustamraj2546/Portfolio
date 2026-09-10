import proImg from "../assets/stockbets_background.webp";

const Project = () => {
  return (
    <div className="w-60 p-2 flex flex-col justify-center rounded-2xl">
      <div className="p-2 rounded-2xl hover:bg-cyan-500/20 hover:ease-in-out duration-500 cursor-pointer">
        <div className="mb-2">
          <img src={proImg} alt="" className="rounded-2xl"/>
        </div>
        <div className="px-1">
          <h3 className="text-lg font-semibold">Project Name</h3>
          <h4 className="text-sm text-gray-500">start data - end date</h4>
          <h3 className="text-gray-400">Web Dev (technology)</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
