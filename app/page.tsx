import Menu from "./(menu)/menu/page";
import Link from "next/link";
import Logo from "../../public/ZarandeadoLogo.svg";
const Home: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mt-40">
        <Link href={"./menu"}>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Ir al menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
