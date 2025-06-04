
import React from 'react';
import { Globe, TrendingUp, Users, Award } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Como o Inglês Pode <span className="text-yellow-300">Transformar</span> Sua Vida
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Abra portas para oportunidades globais, avance em sua carreira e conecte-se com o mundo através do inglês.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-lg font-semibold mb-2">Conexão Global</h3>
            <p className="text-sm opacity-90">Comunique-se com pessoas do mundo inteiro</p>
          </div>
          
          <div className="text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-lg font-semibold mb-2">Crescimento Profissional</h3>
            <p className="text-sm opacity-90">Acelere sua carreira com oportunidades internacionais</p>
          </div>
          
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-lg font-semibold mb-2">Networking</h3>
            <p className="text-sm opacity-90">Expanda sua rede de contatos globalmente</p>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-lg font-semibold mb-2">Confiança</h3>
            <p className="text-sm opacity-90">Ganhe confiança para se expressar em qualquer situação</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
