import book from '../public/book.svg'
import star from '../public/star.svg'
import pencil from '../public/pencil.svg'
import Card from '@/components/Card'
import Image from 'next/image'
import goat from '../public/goat.svg'


export default function Home() {
    const cards = [
        {
            icon: pencil,
            name: 'Treinamentos',
            content: `Quer ser um programador de sucesso? Podemos apontar o caminho!`,
            href: '/'
        },
        {
            icon: book,
            name: 'Histórico',
            content:
                'Confira os resultados do GRUPRO em eventos locais, regionais, nacionais e internacionais!',
            href:'/'
        },
        {
            icon: star,
            name: 'Hall da Fama',
            content:
                'Confiram os alunos do GRUPRO que já fizeram história representando a UFBA!',
            href:'/'
        }
    ]

    return (
        <>
            <div style={{ backgroundImage: `url(${goat.src})`, width: '100vw', height: '41vw',  backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                <div className="flex flex-col items-start gap-20 text-xl font-bold text-white px-36 justify-center bg-amber-400 bg-opacity-20" style={{width: '100%', height: '100%'}}>
                    <div className='text-center md:text-left'>
                        <h1 className='xl:text-5xl lg:text-4xl'>GRUpo de PROgramação</h1>
                        <p className='xl:text-4xl lg:text-3xl'>Venha se aprimorar e se divertir com a gente</p>
                    </div>
                    

                    <button className="bg-amber-400 text-black rounded text-sm hidden xl:p-5 xl:text-2xl lg:p-3 lg:text-xl md:block md:p-2">
                        Fale Conosco
                    </button>
                </div>
            </div>

            <div className="flex justify-evenly m-28 gap-32 items-center">
                {cards.map((cardData, index) => (
                    <Card
                        key={index}
                        icon={cardData.icon}
                        name={cardData.name}
                        content={cardData.content}
                        href = {cardData.href}
                    />
                ))}
            </div>

        </>
    )
}
