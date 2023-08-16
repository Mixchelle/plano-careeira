import React from 'react';
import Sessao1Cards from './CardsSessao1';
import './styles.css';

import carroImage from '../img/carro.jpg';
import equipeDevImage from '../img/equipedev.jpg';
import trabalhoRemotoImage from '../img/trabalho-remoto.jpeg';
import cloudImage from '../img/cloud.webp';
import dolarImage from '../img/dolar.jpg';
import frontImage from '../img/front.png';
import mae from '../img/mae';

function Home() {
  return (
    <div>
      <section id="inicio">
        <div className='text'>
          <h1>Plano de Carreira como Desenvolvedora Front-End</h1>
          <p>É um prazer estar aqui hoje para apresentar meu plano de carreira como desenvolvedora front-end. Desde o momento em que conheci o React, foi amor à primeira vista. A possibilidade de criar interfaces incríveis e interativas cativou minha imaginação e me fez perceber que essa é a direção que desejo seguir em minha jornada profissional.</p>
        </div>
        <Sessao1Cards />
      </section>
    
      <section id="curto-prazo">
        <h2>Curto Prazo (6 meses)</h2>
        <p>Nos próximos seis meses, estou empenhada em me tornar uma desenvolvedora front-end plena, com foco principal na stack React. Meu plano inclui:</p>
        <ul>
          <li>Aprofundar meu conhecimento em React: Participarei de cursos avançados, tutoriais e projetos pessoais para explorar os recursos mais avançados do React e aprimorar minhas habilidades de desenvolvimento.</li>
          <li>Explorar outros Frameworks: Além do React, também pretendo aprender Angular e Vue.js para expandir minha compreensão das diferentes abordagens e tecnologias do desenvolvimento front-end.</li>
          <li>Dominar Ferramentas de Desenvolvimento: Vou aprofundar meu conhecimento em ferramentas essenciais como Webpack, Babel e Redux para melhorar minha eficiência no desenvolvimento.</li>
          <li>AWS e Google Cloud: Iniciarei meus estudos em serviços de nuvem, como AWS e Google Cloud, para entender como as aplicações front-end se integram às arquiteturas de nuvem modernas.</li>
        </ul>
        <div className="img">
          <img src={cloudImage} alt="Cloud" />
          <img src={frontImage} alt="Frontend" />
        </div>
      </section>
    
      <section id="medio-prazo">
        <h2>Médio Prazo (2-3 anos)</h2>
        <p>Após consolidar minha experiência e expertise como desenvolvedora front-end plena, meu foco se voltará para o cenário internacional:</p>
        <ul>
          <li>Trabalho Remoto para o Exterior: Vou procurar oportunidades de trabalho remoto com empresas internacionais, visando a experiência de trabalhar em projetos globais e expandir minha rede global.</li>
          <li>Domínio de Tecnologias em Nuvem: Durante esse período, vou me aprofundar ainda mais na compreensão e uso de serviços em nuvem, como AWS e Google Cloud, para criar soluções escaláveis e resilientes.</li>
          <li>Contribuição à Comunidade: Pretendo compartilhar minhas experiências e conhecimentos em conferências e blogs, contribuindo para a comunidade de desenvolvimento front-end.</li>
        </ul>
        <div className="img">
          <img src={trabalhoRemotoImage} alt="Trabalho Remoto" />
          <img src={dolarImage} alt="Frontend" />
        </div>
      </section>
    
      <section id="longo-prazo">
        <h2>Longo Prazo (5 anos)</h2>
        <p>Em cinco anos, meu objetivo é atingir a posição de desenvolvedora front-end sênior, liderando uma equipe e equilibrando minha vida pessoal:</p>
        <ul>
          <li>Liderança Técnica: Quero estar à frente de projetos desafiadores, fornecendo orientação técnica para a equipe e compartilhando meu conhecimento acumulado ao longo dos anos.</li>
          <li>Expansão Familiar: Além de minha carreira, planejo me tornar mãe, conciliando minhas responsabilidades profissionais com a maternidade.</li>
          <li>Remuneração de Nível Sênior: Pretendo alcançar uma remuneração compatível com minha posição sênior, reconhecendo o valor que trago para a equipe e para a empresa.</li>
          <li>Trabalho Internacional e Moedas Fortes: Desejo explorar oportunidades de trabalho no exterior, buscando posições que ofereçam salários em dólar ou euro, refletindo minha experiência e habilidades.</li>
        </ul>
        <div className="img">
          <img src={carroImage} alt="Trabalho Remoto" />
          <img src={equipeDevImage} alt="Frontend" />
          <img src={mae} alt="Frontend" />
        </div>
      </section>
    </div>
  );
}

export default Home;
