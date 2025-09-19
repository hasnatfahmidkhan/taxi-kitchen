import logo from "../../assets/logo.png";
import "./header.css";
const Header = () => {
  return (
    <header className="flex flex-col gap-5 justify-center items-center min-h-screen">
      <div>
        <img src={logo} alt="" className="w-[450px]" />
      </div>
      <div className="w-20 h-20 flex items-center justify-center animate-bounce bg-[#FEBF00] mt-10 rounded-full shadow-xl justify-self-end cursor-pointer">
        <i className="fa-solid fa-arrow-down text-xl" />
      </div>
      <h1 className="w-full sticky bottom-0 text-center text-xl font-bold p-4 bg-[#FEBF00] rounded">
        Digital Menu Card For Our Lovely Customer
      </h1>
    </header>
  );
};

export default Header;
