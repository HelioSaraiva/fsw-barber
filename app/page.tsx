import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quicksearchoption } from "./_constants/search";
import BookingItem from "./_components/booking-item";




const Home = async () => {

  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  //console.log({barbershops})

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  })

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        
        {/* Texto */}
        <h2 className="text-xl font-bold">Olá, Helio!</h2>
        <p>Segunda-Feira, 05 de agosto.</p>

        {/* Busca */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua Busca..."></Input>
          <Button >
            <SearchIcon />
          </Button>
        </div>

        {/* Busca Rapida */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quicksearchoption.map((Option) => (
            <Button className="gap-2" variant="secondary" key={Option.title}>
              <Image
                src={Option.imageUrl}
                width={16}
                height={16}
                alt={Option.title}
              />
              {Option.title}
            </Button>

          ))}
        </div>

        {/* Banner */}
        <div className="relative h-[150px] w-full mt-6">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende nos melhores com FWS Barber"
          />
        </div>

        {/* Agendamento */}
        <BookingItem/>

        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 ">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map(barbershop => <BarbershopItem key={barbershop.id} barbershop={barbershop} />)}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 ">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map(barbershop => <BarbershopItem key={barbershop.id} barbershop={barbershop} />)}
        </div>
      </div>

    </div>
  )
};

export default Home;
