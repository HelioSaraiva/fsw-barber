import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                {/* imagem */}
                <div className="relative h-[159px] w-full ">
                    <Image alt={barbershop.name} fill className="rounded-2xl object-cover" src={barbershop.imageUrl} />
                    <Badge variant="secondary" className="absolute left-2 top-2 space-x-1 ">
                        <StarIcon size={12} className="fill-primary text-primary"/>
                        <p className="text-xs font-sans">5,0</p>
                    </Badge>
                </div>
                {/* Texto */}

                <div className=" pb-3 px-1">
                    <h3 className=" truncate font-semibold">{barbershop.name}</h3>
                    <p className=" truncate text-sm text-gray-400">{barbershop.address}</p>
                    <Button variant="secondary" className="mt-3 w-full">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BarbershopItem;