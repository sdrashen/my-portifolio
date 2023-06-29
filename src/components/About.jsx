import React from 'react';

const About = () => {
  return (
    <div name='sobre' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Um pouco sobre mim...</p>
            </div>
            <div>
              <p className='leading-7 tracking-wider'>Sou natural do estado do Pará e há mais de 3 anos moro em Florianópolis. Minha primeira formação acadêmica é como Bacharel em Turismo. Atuei como intérprete, guia, monitora, conheci várias pessoas e lugares. Mas... Faltava aquele "click", sabe? Como sempre tive interesse na tecnologia, decidi investir
              nessa área assim que tive a oportunidade. Decisão acertada! Gosto de criar, inovar, enfrentar desafios, sei trabalhar em equipe e acredito que neste novo campo profissional posso ir bem longe. Atualmente,
              busco oportunidades de trabalho, aprendizado e crescimento no mercado tecnológico.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;