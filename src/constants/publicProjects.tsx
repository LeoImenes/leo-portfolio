import AJ1 from "../assets/Portfolio/AJ1.jpeg";
import AJ2 from "../assets/Portfolio/AJ2.jpeg";
import AJ5 from "../assets/Portfolio/AJ5.jpeg";
import AJ6 from "../assets/Portfolio/AJ6.jpeg";
import AJ7 from "../assets/Portfolio/AJ7.jpeg";
import P1 from "../assets/Portfolio/P1.jpeg";
import P2 from "../assets/Portfolio/P2.jpeg";
import P3 from "../assets/Portfolio/P3.jpeg";
import P4 from "../assets/Portfolio/P4.jpeg";
import P5 from "../assets/Portfolio/P5.jpeg";
import L1 from "../assets/Portfolio/L1.jpeg";
import L2 from "../assets/Portfolio/L2.jpeg";
import L3 from "../assets/Portfolio/L3.jpeg";
import L4 from "../assets/Portfolio/L4.jpeg";

export type PublicProject = {
  id: number;
  name: string;
  description: string;
  languages: string[];
  image: string;
  images: string[];
};

export const PublicProjects: PublicProject[] = [
  {
    id: 1,
    name: "Polivias Estradeiro",
    languages: ["React Native", "AWS"],
    image: P5,
    images: [P2],
    description:
      "Aplicativo desenvolvido para otimizar a gestão de operações de transporte rodoviário, conectando caminhoneiros e equipes operacionais em uma única plataforma. A solução oferece recursos para acompanhamento de viagens, execução de processos de campo, acesso a treinamentos, comunicação corporativa e registro de informações importantes para a rotina das operações. Seu objetivo é aumentar a eficiência operacional, promover mais segurança nas estradas e facilitar o acesso a informações essenciais durante toda a jornada de trabalho.",
  },
  {
    id: 2,
    name: "Anajustra Federal",
    languages: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
    image: AJ5,
    images: [AJ1],
    description:
      "Plataforma digital criada para oferecer uma experiência completa aos servidores públicos, reunindo em um único ambiente serviços, benefícios, convênios e conteúdos exclusivos. O aplicativo permite que os usuários encontrem oportunidades de economia, acompanhem campanhas e metas, recebam comunicações relevantes e tenham acesso facilitado a diversos serviços voltados ao seu bem-estar e desenvolvimento. A proposta é simplificar o acesso a benefícios e fortalecer o relacionamento entre a instituição e seus associados.",
  },
  {
    id: 3,
    name: "Lee-Bank",
    languages: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
    image: L2,
    images: [L3],
    description:
      "Banco digital desenvolvido para proporcionar uma experiência financeira moderna, segura e conveniente. A plataforma reúne serviços essenciais para o gerenciamento da vida financeira, permitindo que os usuários realizem movimentações bancárias, acompanhem suas finanças e tenham acesso a diferentes oportunidades de investimento. Com foco em praticidade e acessibilidade, o aplicativo busca oferecer uma experiência completa, centralizando em um único ambiente as principais necessidades financeiras de seus clientes.",
  },
];
