import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {

  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  //console.log({barbershops})

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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Agendamento</h2>
        <Card >
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">
                Confirmado
              </Badge>
              <h3 className="text-center font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className=" h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>              
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 ">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map(barbershop =><BarbershopItem key={barbershop.id} barbershop={barbershop}/>)}
        </div>
      </div>
    </div>
  )
};

export default Home;
