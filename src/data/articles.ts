
import { Article } from '../types/types';

export const articles: Article[] = [
  // Beginner articles
  {
    id: 'beginner-1',
    title: 'My Daily Routine',
    excerpt: 'Learn about daily activities and routines in English.',
    level: 'beginner',
    content: {
      english: [
        'I wake up at seven o\'clock every morning.',
        'First, I brush my teeth and wash my face.',
        'Then I have breakfast with my family.',
        'I usually eat cereal and drink orange juice.',
        'After breakfast, I get dressed for school.',
        'I take the bus to school at eight o\'clock.',
        'My classes start at nine in the morning.',
        'I have lunch at twelve thirty.',
        'School ends at three in the afternoon.',
        'I come home and do my homework.',
        'In the evening, I watch TV with my parents.',
        'I go to bed at ten o\'clock.',
        'This is my daily routine every weekday.',
        'On weekends, I sleep until nine o\'clock.',
        'I love spending time with my friends on Saturday.'
      ],
      portuguese: [
        'Eu acordo às sete horas toda manhã.',
        'Primeiro, eu escovo os dentes e lavo o rosto.',
        'Então eu tomo café da manhã com minha família.',
        'Eu geralmente como cereal e bebo suco de laranja.',
        'Depois do café da manhã, eu me visto para a escola.',
        'Eu pego o ônibus para a escola às oito horas.',
        'Minhas aulas começam às nove da manhã.',
        'Eu almoço ao meio-dia e meia.',
        'A escola termina às três da tarde.',
        'Eu volto para casa e faço minha lição de casa.',
        'À noite, eu assisto TV com meus pais.',
        'Eu vou dormir às dez horas.',
        'Esta é minha rotina diária todos os dias úteis.',
        'Nos fins de semana, eu durmo até as nove horas.',
        'Eu amo passar tempo com meus amigos no sábado.'
      ]
    }
  },
  {
    id: 'beginner-2',
    title: 'At the Restaurant',
    excerpt: 'Basic conversation at a restaurant.',
    level: 'beginner',
    content: {
      english: [
        'Welcome to our restaurant!',
        'How many people are in your party?',
        'We are four people.',
        'Please follow me to your table.',
        'Here are your menus.',
        'Would you like something to drink?',
        'I would like water, please.',
        'Are you ready to order?',
        'Yes, I want a hamburger.',
        'Would you like french fries with that?',
        'Yes, please.',
        'How would you like your burger cooked?',
        'Medium, please.',
        'Your food will be ready in fifteen minutes.',
        'Thank you very much!'
      ],
      portuguese: [
        'Bem-vindos ao nosso restaurante!',
        'Quantas pessoas estão em seu grupo?',
        'Somos quatro pessoas.',
        'Por favor, me sigam até sua mesa.',
        'Aqui estão seus cardápios.',
        'Gostariam de algo para beber?',
        'Eu gostaria de água, por favor.',
        'Estão prontos para fazer o pedido?',
        'Sim, eu quero um hambúrguer.',
        'Gostaria de batatas fritas com isso?',
        'Sim, por favor.',
        'Como você gostaria que seu hambúrguer fosse preparado?',
        'Ao ponto, por favor.',
        'Sua comida ficará pronta em quinze minutos.',
        'Muito obrigado!'
      ]
    }
  },
  // Basic articles
  {
    id: 'basic-1',
    title: 'Planning a Vacation',
    excerpt: 'Learn vocabulary about travel and vacation planning.',
    level: 'basic',
    content: {
      english: [
        'My family is planning our summer vacation.',
        'We want to visit a beautiful beach destination.',
        'First, we need to choose the perfect location.',
        'My mother suggests going to Florida.',
        'My father prefers the mountains in Colorado.',
        'I think we should go somewhere tropical.',
        'We need to book our flights in advance.',
        'Hotel reservations are also very important.',
        'We should pack light clothes for the beach.',
        'Don\'t forget to bring sunscreen and sunglasses.',
        'I want to try surfing for the first time.',
        'My sister wants to collect seashells.',
        'We plan to stay for one week.',
        'This vacation will be amazing and relaxing.',
        'I can\'t wait for our family trip!'
      ],
      portuguese: [
        'Minha família está planejando nossas férias de verão.',
        'Queremos visitar um destino de praia bonito.',
        'Primeiro, precisamos escolher a localização perfeita.',
        'Minha mãe sugere ir para a Flórida.',
        'Meu pai prefere as montanhas do Colorado.',
        'Eu acho que devemos ir para algum lugar tropical.',
        'Precisamos reservar nossos voos com antecedência.',
        'Reservas de hotel também são muito importantes.',
        'Devemos embalar roupas leves para a praia.',
        'Não se esqueçam de trazer protetor solar e óculos de sol.',
        'Eu quero tentar surfar pela primeira vez.',
        'Minha irmã quer coletar conchas.',
        'Planejamos ficar por uma semana.',
        'Estas férias serão incríveis e relaxantes.',
        'Mal posso esperar pela nossa viagem em família!'
      ]
    }
  },
  // Intermediate articles
  {
    id: 'intermediate-1',
    title: 'The Future of Technology',
    excerpt: 'Discussing technological advances and their impact on society.',
    level: 'intermediate',
    content: {
      english: [
        'Technology is advancing at an unprecedented pace.',
        'Artificial intelligence is becoming more sophisticated every year.',
        'Self-driving cars will revolutionize transportation systems.',
        'Virtual reality is creating new possibilities for education.',
        'Renewable energy sources are becoming more efficient.',
        'Smart homes will make our daily lives more convenient.',
        'Medical technology is extending human lifespan significantly.',
        'Robotics will transform manufacturing and service industries.',
        'Blockchain technology promises to secure digital transactions.',
        'Space exploration is opening new frontiers for humanity.',
        'These innovations will create both opportunities and challenges.',
        'Society must adapt to these rapid technological changes.',
        'Education systems need to prepare students for future careers.',
        'Ethical considerations become increasingly important in development.',
        'The future will be shaped by how we embrace these technologies.'
      ],
      portuguese: [
        'A tecnologia está avançando em um ritmo sem precedentes.',
        'A inteligência artificial está se tornando mais sofisticada a cada ano.',
        'Carros autônomos revolucionarão os sistemas de transporte.',
        'A realidade virtual está criando novas possibilidades para a educação.',
        'Fontes de energia renovável estão se tornando mais eficientes.',
        'Casas inteligentes tornarão nossas vidas diárias mais convenientes.',
        'A tecnologia médica está estendendo significativamente a expectativa de vida humana.',
        'A robótica transformará as indústrias de manufatura e serviços.',
        'A tecnologia blockchain promete proteger transações digitais.',
        'A exploração espacial está abrindo novas fronteiras para a humanidade.',
        'Essas inovações criarão tanto oportunidades quanto desafios.',
        'A sociedade deve se adaptar a essas mudanças tecnológicas rápidas.',
        'Os sistemas educacionais precisam preparar estudantes para carreiras futuras.',
        'Considerações éticas se tornam cada vez mais importantes no desenvolvimento.',
        'O futuro será moldado por como abraçarmos essas tecnologias.'
      ]
    }
  },
  // Advanced articles
  {
    id: 'advanced-1',
    title: 'Climate Change and Global Economics',
    excerpt: 'Analyzing the economic implications of environmental policies.',
    level: 'advanced',
    content: {
      english: [
        'Climate change represents one of the most pressing challenges of our time.',
        'The economic ramifications of environmental degradation are far-reaching.',
        'Carbon pricing mechanisms are being implemented worldwide.',
        'Sustainable development requires significant investment in green technologies.',
        'Financial markets are increasingly incorporating environmental risk assessments.',
        'The transition to renewable energy creates both costs and opportunities.',
        'Supply chain disruptions due to extreme weather events are escalating.',
        'Insurance companies are reassessing their exposure to climate-related risks.',
        'Governments must balance economic growth with environmental protection.',
        'International cooperation is essential for addressing global challenges.',
        'Green bonds and sustainable finance instruments are gaining popularity.',
        'The circular economy model offers promising alternatives to linear consumption.',
        'Corporate sustainability reporting is becoming mandatory in many jurisdictions.',
        'Consumers are demanding greater transparency in environmental practices.',
        'The future economy will be fundamentally shaped by environmental considerations.'
      ],
      portuguese: [
        'A mudança climática representa um dos desafios mais urgentes do nosso tempo.',
        'As ramificações econômicas da degradação ambiental são amplas.',
        'Mecanismos de precificação de carbono estão sendo implementados mundialmente.',
        'O desenvolvimento sustentável requer investimento significativo em tecnologias verdes.',
        'Os mercados financeiros estão incorporando cada vez mais avaliações de risco ambiental.',
        'A transição para energia renovável cria tanto custos quanto oportunidades.',
        'Interrupções na cadeia de suprimentos devido a eventos climáticos extremos estão escalando.',
        'Companhias de seguro estão reavaliando sua exposição a riscos relacionados ao clima.',
        'Governos devem equilibrar crescimento econômico com proteção ambiental.',
        'A cooperação internacional é essencial para enfrentar desafios globais.',
        'Títulos verdes e instrumentos de financiamento sustentável estão ganhando popularidade.',
        'O modelo de economia circular oferece alternativas promissoras ao consumo linear.',
        'Relatórios de sustentabilidade corporativa estão se tornando obrigatórios em muitas jurisdições.',
        'Consumidores estão exigindo maior transparência em práticas ambientais.',
        'A economia futura será fundamentalmente moldada por considerações ambientais.'
      ]
    }
  },
  // Fluent articles
  {
    id: 'fluent-1',
    title: 'The Philosophy of Human Consciousness',
    excerpt: 'Exploring the intricate nature of consciousness and self-awareness.',
    level: 'fluent',
    content: {
      english: [
        'The enigma of human consciousness has perplexed philosophers for millennia.',
        'Phenomenological investigations reveal the subjective nature of conscious experience.',
        'The hard problem of consciousness concerns the qualitative aspects of mental states.',
        'Neuroscientific approaches attempt to correlate neural activity with conscious phenomena.',
        'Theories of consciousness range from materialist reductionism to panpsychist perspectives.',
        'The binding problem addresses how disparate neural processes create unified experience.',
        'Metacognition represents consciousness\'s capacity for self-reflection and awareness.',
        'Temporal consciousness encompasses our perception of time and continuity of experience.',
        'The relationship between consciousness and free will remains contentiously debated.',
        'Altered states of consciousness provide insights into the malleable nature of awareness.',
        'Artificial intelligence raises questions about machine consciousness and sentience.',
        'The explanatory gap between physical processes and subjective experience persists.',
        'Consciousness may emerge from complex information integration in neural networks.',
        'Eastern philosophical traditions offer alternative frameworks for understanding consciousness.',
        'The study of consciousness bridges neuroscience, philosophy, and cognitive psychology.'
      ],
      portuguese: [
        'O enigma da consciência humana tem intrigado filósofos por milênios.',
        'Investigações fenomenológicas revelam a natureza subjetiva da experiência consciente.',
        'O problema difícil da consciência diz respeito aos aspectos qualitativos dos estados mentais.',
        'Abordagens neurocientíficas tentam correlacionar atividade neural com fenômenos conscientes.',
        'Teorias da consciência variam do reducionismo materialista a perspectivas panpsiquistas.',
        'O problema da ligação aborda como processos neurais díspares criam experiência unificada.',
        'A metacognição representa a capacidade da consciência para autorrefleção e awareness.',
        'A consciência temporal abrange nossa percepção do tempo e continuidade da experiência.',
        'A relação entre consciência e livre arbítrio permanece controversamente debatida.',
        'Estados alterados de consciência fornecem insights sobre a natureza maleável da awareness.',
        'A inteligência artificial levanta questões sobre consciência e senciência de máquinas.',
        'A lacuna explicativa entre processos físicos e experiência subjetiva persiste.',
        'A consciência pode emergir da integração complexa de informações em redes neurais.',
        'Tradições filosóficas orientais oferecem estruturas alternativas para entender a consciência.',
        'O estudo da consciência conecta neurociência, filosofia e psicologia cognitiva.'
      ]
    }
  }
];
