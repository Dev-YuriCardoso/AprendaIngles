
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
        'I go to bed at ten o\'clock.'
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
        'Eu vou dormir às dez horas.'
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
  {
    id: 'beginner-3',
    title: 'My Family',
    excerpt: 'Learn vocabulary about family members and relationships.',
    level: 'beginner',
    content: {
      english: [
        'I have a wonderful family.',
        'My father is a doctor.',
        'My mother is a teacher.',
        'I have one older brother.',
        'His name is John and he is twenty years old.',
        'I also have a younger sister.',
        'Her name is Mary and she is fifteen.',
        'We live in a big house.',
        'Our house has four bedrooms.',
        'We have a beautiful garden.',
        'My grandmother visits us every Sunday.',
        'We love spending time together.',
        'Family is very important to me.'
      ],
      portuguese: [
        'Eu tenho uma família maravilhosa.',
        'Meu pai é médico.',
        'Minha mãe é professora.',
        'Eu tenho um irmão mais velho.',
        'O nome dele é John e ele tem vinte anos.',
        'Eu também tenho uma irmã mais nova.',
        'O nome dela é Mary e ela tem quinze anos.',
        'Nós moramos numa casa grande.',
        'Nossa casa tem quatro quartos.',
        'Nós temos um jardim bonito.',
        'Minha avó nos visita todo domingo.',
        'Nós amamos passar tempo juntos.',
        'Família é muito importante para mim.'
      ]
    }
  },
  {
    id: 'beginner-4',
    title: 'Going Shopping',
    excerpt: 'Essential phrases for shopping and buying things.',
    level: 'beginner',
    content: {
      english: [
        'I need to go shopping today.',
        'First, I will go to the grocery store.',
        'I need to buy milk, bread, and eggs.',
        'Then I will visit the clothing store.',
        'I want to buy a new shirt.',
        'The shirt costs twenty dollars.',
        'I think that is a good price.',
        'The cashier is very friendly.',
        'She helps me find my size.',
        'I pay with my credit card.',
        'She gives me the receipt.',
        'I thank her and say goodbye.',
        'Shopping is fun but tiring.'
      ],
      portuguese: [
        'Eu preciso ir às compras hoje.',
        'Primeiro, eu vou ao supermercado.',
        'Eu preciso comprar leite, pão e ovos.',
        'Então eu vou visitar a loja de roupas.',
        'Eu quero comprar uma camisa nova.',
        'A camisa custa vinte dólares.',
        'Eu acho que é um bom preço.',
        'A caixa é muito simpática.',
        'Ela me ajuda a encontrar meu tamanho.',
        'Eu pago com meu cartão de crédito.',
        'Ela me dá o recibo.',
        'Eu agradeço e me despeço.',
        'Fazer compras é divertido mas cansativo.'
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
  {
    id: 'basic-2',
    title: 'Healthy Living',
    excerpt: 'Tips for maintaining a healthy lifestyle.',
    level: 'basic',
    content: {
      english: [
        'Living a healthy life is very important.',
        'We should eat fresh fruits and vegetables every day.',
        'Drinking plenty of water keeps us hydrated.',
        'Exercise is essential for our physical health.',
        'I try to walk for thirty minutes daily.',
        'Swimming is also a great form of exercise.',
        'Getting enough sleep is crucial for our body.',
        'We should sleep at least eight hours per night.',
        'Stress can be harmful to our health.',
        'Meditation helps me relax and feel better.',
        'Reading books is good for mental health.',
        'Spending time with friends makes us happy.',
        'A healthy lifestyle leads to a longer life.'
      ],
      portuguese: [
        'Viver uma vida saudável é muito importante.',
        'Devemos comer frutas e vegetais frescos todos os dias.',
        'Beber bastante água nos mantém hidratados.',
        'Exercício é essencial para nossa saúde física.',
        'Eu tento caminhar por trinta minutos diariamente.',
        'Natação também é uma ótima forma de exercício.',
        'Dormir o suficiente é crucial para nosso corpo.',
        'Devemos dormir pelo menos oito horas por noite.',
        'Estresse pode ser prejudicial à nossa saúde.',
        'Meditação me ajuda a relaxar e me sentir melhor.',
        'Ler livros é bom para a saúde mental.',
        'Passar tempo com amigos nos deixa felizes.',
        'Um estilo de vida saudável leva a uma vida mais longa.'
      ]
    }
  },
  {
    id: 'basic-3',
    title: 'Learning a New Language',
    excerpt: 'The benefits and challenges of learning languages.',
    level: 'basic',
    content: {
      english: [
        'Learning a new language is an exciting adventure.',
        'It opens doors to different cultures and people.',
        'When we speak another language, we can travel more easily.',
        'We can also understand foreign movies and books.',
        'Language learning requires dedication and practice.',
        'The most important thing is to practice every day.',
        'Speaking with native speakers helps a lot.',
        'Making mistakes is part of the learning process.',
        'We should not be afraid to try new words.',
        'Technology makes language learning easier today.',
        'There are many apps and online resources available.',
        'Patience is key when learning a new language.',
        'The effort is worth it in the end.'
      ],
      portuguese: [
        'Aprender uma nova língua é uma aventura emocionante.',
        'Isso abre portas para diferentes culturas e pessoas.',
        'Quando falamos outra língua, podemos viajar mais facilmente.',
        'Também podemos entender filmes e livros estrangeiros.',
        'Aprender idiomas requer dedicação e prática.',
        'O mais importante é praticar todos os dias.',
        'Falar com falantes nativos ajuda muito.',
        'Cometer erros faz parte do processo de aprendizado.',
        'Não devemos ter medo de tentar palavras novas.',
        'A tecnologia torna o aprendizado de idiomas mais fácil hoje.',
        'Há muitos aplicativos e recursos online disponíveis.',
        'Paciência é fundamental ao aprender uma nova língua.',
        'O esforço vale a pena no final.'
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
  {
    id: 'intermediate-2',
    title: 'Social Media and Modern Communication',
    excerpt: 'How digital platforms are changing the way we communicate.',
    level: 'intermediate',
    content: {
      english: [
        'Social media has transformed human communication dramatically.',
        'Platforms like Facebook and Instagram connect people worldwide.',
        'We can instantly share photos, thoughts, and experiences.',
        'However, this constant connectivity has both benefits and drawbacks.',
        'On one hand, we stay connected with friends and family.',
        'We can also discover new ideas and different perspectives.',
        'Social media enables businesses to reach customers directly.',
        'On the other hand, excessive use can lead to addiction.',
        'Many people experience anxiety when separated from their devices.',
        'Privacy concerns have become increasingly important.',
        'Fake news spreads rapidly through social networks.',
        'Digital literacy is essential in today\'s information age.',
        'We must learn to evaluate sources critically.',
        'Balance is key to maintaining healthy digital habits.',
        'Technology should enhance, not replace, real-world relationships.'
      ],
      portuguese: [
        'A mídia social transformou dramaticamente a comunicação humana.',
        'Plataformas como Facebook e Instagram conectam pessoas no mundo todo.',
        'Podemos compartilhar instantaneamente fotos, pensamentos e experiências.',
        'No entanto, essa conectividade constante tem benefícios e desvantagens.',
        'Por um lado, permanecemos conectados com amigos e família.',
        'Também podemos descobrir novas ideias e perspectivas diferentes.',
        'A mídia social permite que empresas alcancem clientes diretamente.',
        'Por outro lado, o uso excessivo pode levar ao vício.',
        'Muitas pessoas sentem ansiedade quando separadas de seus dispositivos.',
        'Preocupações com privacidade se tornaram cada vez mais importantes.',
        'Notícias falsas se espalham rapidamente através de redes sociais.',
        'Alfabetização digital é essencial na era da informação atual.',
        'Devemos aprender a avaliar fontes criticamente.',
        'Equilíbrio é fundamental para manter hábitos digitais saudáveis.',
        'A tecnologia deve melhorar, não substituir, relacionamentos do mundo real.'
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
