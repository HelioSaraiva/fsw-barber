import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Helio!</h2>
        <p>Segunda-Feira, 05 de agosto.</p>
        <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua Busca..."></Input>
        <Button >
          <SearchIcon/>
        </Button>
        </div>
        <div className="relative h-[150px] w-full mt-6">
      <Image
        src="/banner-01.png"
        fill
        className="object-cover rounded-xl"
        alt="Agende nos melhores com FWS Barber"
      />
    </div>
      </div>      
    </div>
  )
};

export default Home;
