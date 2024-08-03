import { useNavigate } from "react-router-dom";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function PokemonCard({ pokemon }) {
  const { name, img } = pokemon;
  const navigate = useNavigate();
  return (
    <Card className="flex flex-col gap-[.5rem] hover:bg-muted transition-all ease-in-out duration-300" >
      <CardTitle className="text-center text-2xl">{name.english}</CardTitle>
      <CardContent className='p-0'>
        <img
          className="w-full h-[7rem] mb-[.5rem] object-contain"
          src={img}
          alt={name.english}
        />
      </CardContent>
      <CardFooter className="flex-row p-4 pt-0 space-x-2 items-center justify-center">
        <Button>Select</Button>
        <Button variant='outline' onClick={()=> navigate(`pokemon/${pokemon.id}`)}>Details</Button>
      </CardFooter>
    </Card>
  );
}
