
import Link from 'next/link';
import Image from 'next/image';

import mutualdeseguros from 'public/mutualdeseguros.png';

export const metadata = {
    title: 'Mutal de Seguros | Cruz Roja | Soap Ayuda'
};

export default async function Page() {
    return (

        <main className="text-center">
            <nav className="text-center block my-16"><Link className="inline-block py-2 px-8 mx-auto bg-[#1e5db2] text-white text-center uppercase text-bold text-sm no-underline" href="/#ayudasocial" style={{ clipPath: 'polygon(10% 0, 0 50%, 10% 100%, 100% 100%, 100% 0)' }} >Volver</Link></nav>

            <section className=" text-center mt-16 mb-24 max-w-screen-lg mx-auto">
                <p className=" text-center m-4"><Image src={mutualdeseguros} className=" mx-auto h-[89px] sm:h-[144px] w-auto duration-300 ease-in-out block"/></p>
                <h3 className="text-center m-8 font-extrabold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP vehículos particulares (Vigencia desde 01/04/2024)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-10 text-center m-4 font-bold text-lg">
                    <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                        <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left ">Autos</span> <span className="inline-block text-right">$8.500</span></p>
                        <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Jeep</span> <span className="inline-block text-right">$8.500</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">St. Wagon</span> <span className="inline-block text-right">$8.500</span></p>
                        <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Camioneta</span> <span className="inline-block text-right">$10.500</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Furgón</span> <span className="inline-block text-right">$10.500</span></p>
                    </div>
                    <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                        <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Casa Rodante</span> <span className="inline-block text-right">$10.500</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Carro Arrastre</span> <span className="inline-block text-right">$7.000</span></p>
                        <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left no-wrap">Minibus particular</span> <span className="inline-block text-right">$25.000</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Moto</span> <span className="inline-block text-right">$46.000</span></p>
                    </div>
                </div>
                <p className=" text-center m-8 px-8 max-w-screen-sm mx-auto"><Link href="https://core.mutualdeseguros.cl/soap_ms/pago.php?tipodeventa=241" className="inline-block rounded-full px-4 w-[100%] pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >Paga to SOAP aquí</Link></p>
            </section>


        </main>
    );
}
