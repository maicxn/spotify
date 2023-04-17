import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          {/* <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div> */}

          <nav className="space-y-5">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Início
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Buscar
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Sua Biblioteca
            </a>
          </nav>
          <nav className="mt-10 py-4 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              zidane
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Ceia
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              SAMBA DE RODA Vol. 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              SAMBA DE RODA Vol. 2
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              BEST OF GRIME BR
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Main
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              aloson test
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex item-center gap-3">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10 mb-3">Boa noite</h1>

          <div className="grid grid-cols-3 gap-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transitions-colors"
            >
              <Image
                src="/cr.jpg"
                width={104}
                height={104}
                alt="Castelos & Ruínas"
              />
              <strong>Castelos & Ruínas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 transitions-colors-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transitions-colors"
            >
              <Image
                src="/heresias.jpg"
                width={104}
                height={104}
                alt="Castelos & Ruínas"
              />
              <strong>Heresia</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 transitions-colors-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transitions-colors"
            >
              <Image
                src="/ego.jpg"
                width={104}
                height={104}
                alt="Castelos & Ruínas"
              />
              <strong>Ego</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 transitions-colors-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transitions-colors"
            >
              <Image
                src="/icarus.jpg"
                width={104}
                height={104}
                alt="Castelos & Ruínas"
              />
              <strong>ícarus</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 transitions-colors-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transitions-colors"
            >
              <Image
                src="/ladrao.jpg"
                width={104}
                height={104}
                alt="Castelos & Ruínas"
              />
              <strong>Ladrão</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 transitions-colors-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transitions-colors"
            >
              <Image
                src="/nddn.jpg"
                width={104}
                height={104}
                alt="Castelos & Ruínas"
              />
              <strong>No Dia Dos Nossos</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-bold text-2xl mt-10">Feito para Maicon Oliveira</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-2 rounded hover:bg-white/10">
            <Image
                src="/gigantes.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Gigantes"
              />
              <strong>Gigantes</strong>
              <span className="text-xs text-zinc-500">Gigantes album do bk de 2018 muito pika</span>
            </a>
          </div>


        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
