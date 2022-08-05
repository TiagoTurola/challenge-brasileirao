import { ArrowLeftIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-900 w-full h-28">
      <div className="flex place-content-between">
        <button className=" text-white py-4 px-4 flex">
          <ArrowLeftIcon className="w-6 h-6 mr-1" />
          Brasileirão Série A
        </button>

        <button className=" text-white py-4 px-4 flex">
          <XIcon className="w-6 h-6 mr-1" />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <button className="hover:bg-white hover:border-b-white text-white text-sm hover:bg-opacity-10 h-11 my-3 px-10">
          <Link href="/"> PARTIDAS</Link>
        </button>
        <button className="hover:bg-white hover:border-b-white text-white text-sm hover:bg-opacity-10 h-11 my-3 px-10">
          <Link href="/"> NOTÍCIAS</Link>
        </button>
        <button className="hover:bg-white hover:border-b-white text-white text-sm hover:bg-opacity-10 h-11 my-3 px-10">
          <Link href="/classificacoes"> CLASSIFICAÇÃO</Link>
        </button>
        <button className="hover:bg-white hover:border-b-white text-white text-sm hover:bg-opacity-10 h-11 my-3 px-10">
          <Link href="/estatisticas"> ESTATÍSTICAS</Link>
        </button>
        <button className="hover:bg-white hover:border-b-white text-white text-sm hover:bg-opacity-10 h-11 my-3 px-10">
          <Link href="/jogadores"> JOGADORES</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
