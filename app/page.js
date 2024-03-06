import goat from '../public/goat.svg';
import book from "../public/book.svg";
import star from "../public/star.svg";
import pencil from "../public/pencil.svg";
import Card from '@/components/Card';

import Image from 'next/image';
export default function Home() {
  const cards = [
    {
      icon:pencil,
      name:"Treinamentos",
      content: "Quer ser um programador de sucesso? Podemos apontar o caminho!",
    },
    {
      icon:book,
      name:"Histórico",
      content:"Confira os resultados do GRUPRO em eventos locais, regionais, nacionais e internacionais!"
    },
    {
      icon:star,
      name:"Hall da Fama",
      content:"Confiram os alunos do GRUPRO que já fizeram história representando a UFBA!"
    }
  ];

  return (
   <>
    <div className="relative">
        <Image
          objectFit="cover"
          src={goat}
          width={1935}
          height={1451}
          alt="goat"
        />

        <div className="flex flex-col items-start gap-5 absolute top-20 left-9 p-4 text-xl font-bold text-white">
            <p>GRUpo de PROgramação <br/> Venha se aprimorar e se divertir com a gente</p>

            <button className='bg-amber-400 text-black rounded p-2 text-sm'>Fale Conosco</button>
        </div>
      </div>

      <div className='flex justify-evenly m-28 gap-20 items-center'>
        {cards.map((cardData,index) => (
          <Card key = {index} icon = {cardData.icon} name ={cardData.name} content={cardData.content} />
        ))}
      </div>
   </>
    

)
}
