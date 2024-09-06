import Image from 'next/image';
import soapayuda from 'public/soapayuda .png';


export function Footer() {
    return (
        <footer className=" bg-slate-700 py-12 mx-auto max-w-screen-xl rounded-none xl:rounded-xl ">
            <div className={` w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-md font-medium text-center text-white `}>

                <section className="flex flex-col justify-start items-start ">
                    <h3 className=" min-h-20 flex justify-center items-end w-full ">
                        <Image src={soapayuda} alt="" width="144" className="mx-auto" />
                    </h3>
                    <div className="w-full">
                        <p className="mt-4">© 2022 SOAP AYUDA<br />Creado por Seguro Obligatorio</p>
                        <p className=" text-center mt-4">
                            <a href="#" className="inline-flex items-center justify-center mx-2 w-12 h-12 rounded-full text-socialBlue hover:text-white duration-300 ease-in-out bg-white hover:bg-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-6">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center mx-2 w-12 h-12 rounded-full text-socialBlue hover:text-white duration-300 ease-in-out bg-white hover:bg-socialBlue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="h-6">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </a>
                        </p>
                    </div>
                </section>

                <section className="flex flex-col justify-start items-start">
                    <h3 className="font-semibold text-2xl text-center min-h-20 flex justify-center items-end w-full ">
                        Atención al público
                    </h3>
                    <p className="mt-4 w-full">Lunes a viernes<br />
                            8:30 hrs. a 14:00 y<br />
                            15:00 hrs. a 18:00 hrs.</p>
                </section>

                <section className="flex flex-col justify-start items-start">
                    <h3 className="font-semibold text-2xl text-center min-h-20 flex justify-center items-end w-full ">Datos de contacto</h3>
                    <p className="mt-4 w-full">Teléfono (32) 2233 491<br />
                            Av. Colón 3192. Valparaíso</p>
                </section> {/**/}

            </div>
        </footer>
    );
};
