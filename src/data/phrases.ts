import { Phrase } from '../types/types';

export const phrases: Phrase[] = [
  // Beginner Level
  { 
    id: '1', 
    english: 'Hello, how are you?', 
    portuguese: 'Olá, como você está?', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This is the most common greeting in English.',
        'You can use it with friends, family, and colleagues.',
        'It shows interest in the other person\'s well-being.'
      ],
      portuguese: [
        'Esta é a saudação mais comum em inglês.',
        'Você pode usá-la com amigos, família e colegas.',
        'Demonstra interesse no bem-estar da outra pessoa.'
      ]
    }
  },
  { 
    id: '2', 
    english: 'What is your name?', 
    portuguese: 'Qual é o seu nome?', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This question helps you learn someone\'s identity.',
        'It\'s usually asked when meeting someone for the first time.',
        'Always remember to introduce yourself after asking.'
      ],
      portuguese: [
        'Esta pergunta ajuda você a conhecer a identidade de alguém.',
        'Geralmente é feita ao conhecer alguém pela primeira vez.',
        'Sempre se lembre de se apresentar após perguntar.'
      ]
    }
  },
  { 
    id: '3', 
    english: 'Nice to meet you', 
    portuguese: 'Prazer em conhecê-lo', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This phrase expresses pleasure in meeting someone new.',
        'It\'s a polite response after introductions.',
        'You can also say "Nice meeting you" when saying goodbye.'
      ],
      portuguese: [
        'Esta frase expressa prazer em conhecer alguém novo.',
        'É uma resposta educada após apresentações.',
        'Você também pode dizer "Nice meeting you" ao se despedir.'
      ]
    }
  },
  { 
    id: '4', 
    english: 'Thank you very much', 
    portuguese: 'Muito obrigado', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This shows deep appreciation for someone\'s help.',
        'It\'s more formal than just saying "thanks".',
        'Always use it when someone does something special for you.'
      ],
      portuguese: [
        'Isso mostra profunda gratidão pela ajuda de alguém.',
        'É mais formal do que apenas dizer "thanks".',
        'Sempre use quando alguém fizer algo especial por você.'
      ]
    }
  },
  { 
    id: '5', 
    english: 'Excuse me', 
    portuguese: 'Com licença', 
    level: 'beginner',
    complementaryText: {
      english: [
        'Use this to politely get someone\'s attention.',
        'It\'s also used when you need to pass by someone.',
        'This phrase shows respect and good manners.'
      ],
      portuguese: [
        'Use isso para educadamente chamar a atenção de alguém.',
        'Também é usado quando você precisa passar por alguém.',
        'Esta frase demonstra respeito e boas maneiras.'
      ]
    }
  },
  { 
    id: '6', 
    english: 'Where is the bathroom?', 
    portuguese: 'Onde fica o banheiro?', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This is an essential question when visiting new places.',
        'You can also ask "Where is the restroom?" in formal settings.',
        'Don\'t be shy to ask this question when you need it.'
      ],
      portuguese: [
        'Esta é uma pergunta essencial ao visitar novos lugares.',
        'Você também pode perguntar "Where is the restroom?" em ambientes formais.',
        'Não tenha vergonha de fazer essa pergunta quando precisar.'
      ]
    }
  },
  { 
    id: '7', 
    english: 'I don\'t understand', 
    portuguese: 'Eu não entendo', 
    level: 'beginner',
    complementaryText: {
      english: [
        'It\'s okay to admit when you don\'t understand something.',
        'This phrase helps you get clarification from others.',
        'Most people will be happy to explain things differently.'
      ],
      portuguese: [
        'Não há problema em admitir quando você não entende algo.',
        'Esta frase ajuda você a obter esclarecimentos dos outros.',
        'A maioria das pessoas ficará feliz em explicar de forma diferente.'
      ]
    }
  },
  { 
    id: '8', 
    english: 'Can you help me?', 
    portuguese: 'Você pode me ajudar?', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This is a polite way to ask for assistance.',
        'People generally like to help when asked nicely.',
        'Remember to say thank you after receiving help.'
      ],
      portuguese: [
        'Esta é uma forma educada de pedir assistência.',
        'As pessoas geralmente gostam de ajudar quando perguntadas educadamente.',
        'Lembre-se de agradecer após receber ajuda.'
      ]
    }
  },
  { 
    id: '9', 
    english: 'How much does it cost?', 
    portuguese: 'Quanto custa?', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This question is essential when shopping or buying services.',
        'You can also ask "What\'s the price?" for the same meaning.',
        'Always ask about prices before making a purchase.'
      ],
      portuguese: [
        'Esta pergunta é essencial ao fazer compras ou contratar serviços.',
        'Você também pode perguntar "What\'s the price?" com o mesmo significado.',
        'Sempre pergunte sobre preços antes de fazer uma compra.'
      ]
    }
  },
  { 
    id: '10', 
    english: 'I am hungry', 
    portuguese: 'Estou com fome', 
    level: 'beginner',
    complementaryText: {
      english: [
        'This expresses your need for food.',
        'It\'s a simple way to communicate your physical state.',
        'You can follow up by asking "Where can we eat?"'
      ],
      portuguese: [
        'Isso expressa sua necessidade de comida.',
        'É uma forma simples de comunicar seu estado físico.',
        'Você pode complementar perguntando "Where can we eat?"'
      ]
    }
  },

  // Basic Level
  { id: '11', english: 'What time is it?', portuguese: 'Que horas são?', level: 'basic' },
  { id: '12', english: 'I would like to order', portuguese: 'Eu gostaria de pedir', level: 'basic' },
  { id: '13', english: 'Where do you live?', portuguese: 'Onde você mora?', level: 'basic' },
  { id: '14', english: 'I work as a teacher', portuguese: 'Eu trabalho como professor', level: 'basic' },
  { id: '15', english: 'Do you speak English?', portuguese: 'Você fala inglês?', level: 'basic' },
  { id: '16', english: 'I like to read books', portuguese: 'Eu gosto de ler livros', level: 'basic' },
  { id: '17', english: 'The weather is nice today', portuguese: 'O tempo está bom hoje', level: 'basic' },
  { id: '18', english: 'I need to go to the store', portuguese: 'Preciso ir à loja', level: 'basic' },
  { id: '19', english: 'Can you repeat that?', portuguese: 'Você pode repetir isso?', level: 'basic' },
  { id: '20', english: 'I am learning English', portuguese: 'Estou aprendendo inglês', level: 'basic' },

  // Intermediate Level
  { id: '21', english: 'I have been studying for two hours', portuguese: 'Tenho estudado por duas horas', level: 'intermediate' },
  { id: '22', english: 'If I had known, I would have come', portuguese: 'Se eu soubesse, teria vindo', level: 'intermediate' },
  { id: '23', english: 'She seems to be quite intelligent', portuguese: 'Ela parece ser bem inteligente', level: 'intermediate' },
  { id: '24', english: 'I\'m looking forward to meeting you', portuguese: 'Estou ansioso para conhecê-lo', level: 'intermediate' },
  { id: '25', english: 'Could you please explain that again?', portuguese: 'Você poderia explicar isso novamente?', level: 'intermediate' },
  { id: '26', english: 'I used to live in New York', portuguese: 'Eu costumava morar em Nova York', level: 'intermediate' },
  { id: '27', english: 'The meeting has been postponed', portuguese: 'A reunião foi adiada', level: 'intermediate' },
  { id: '28', english: 'I suggest we discuss this later', portuguese: 'Sugiro que discutamos isso mais tarde', level: 'intermediate' },
  { id: '29', english: 'It depends on the circumstances', portuguese: 'Depende das circunstâncias', level: 'intermediate' },
  { id: '30', english: 'I\'m afraid I disagree with you', portuguese: 'Receio que não concordo com você', level: 'intermediate' },

  // Advanced Level
  { id: '31', english: 'The implications of this decision are far-reaching', portuguese: 'As implicações desta decisão são de longo alcance', level: 'advanced' },
  { id: '32', english: 'I\'d rather you didn\'t mention this to anyone', portuguese: 'Prefiro que você não mencione isso a ninguém', level: 'advanced' },
  { id: '33', english: 'Had it not been for your help, I would have failed', portuguese: 'Se não fosse pela sua ajuda, eu teria fracassado', level: 'advanced' },
  { id: '34', english: 'The CEO emphasized the importance of innovation', portuguese: 'O CEO enfatizou a importância da inovação', level: 'advanced' },
  { id: '35', english: 'This phenomenon has been thoroughly investigated', portuguese: 'Este fenômeno foi minuciosamente investigado', level: 'advanced' },
  { id: '36', english: 'I\'m particularly interested in sustainable development', portuguese: 'Estou particularmente interessado em desenvolvimento sustentável', level: 'advanced' },
  { id: '37', english: 'The research yielded unexpected results', portuguese: 'A pesquisa rendeu resultados inesperados', level: 'advanced' },
  { id: '38', english: 'We need to establish clear objectives', portuguese: 'Precisamos estabelecer objetivos claros', level: 'advanced' },
  { id: '39', english: 'The committee will review the proposal', portuguese: 'O comitê revisará a proposta', level: 'advanced' },
  { id: '40', english: 'This strategy requires careful consideration', portuguese: 'Esta estratégia requer consideração cuidadosa', level: 'advanced' },

  // Fluent Level
  { id: '41', english: 'The intricacies of this problem necessitate a multifaceted approach', portuguese: 'As complexidades deste problema necessitam uma abordagem multifacetada', level: 'fluent' },
  { id: '42', english: 'His eloquence notwithstanding, the argument lacks substance', portuguese: 'Não obstante sua eloquência, o argumento carece de substância', level: 'fluent' },
  { id: '43', english: 'The paradigm shift has profound implications for the industry', portuguese: 'A mudança de paradigma tem implicações profundas para a indústria', level: 'fluent' },
  { id: '44', english: 'Her meticulous attention to detail is commendable', portuguese: 'Sua atenção meticulosa aos detalhes é louvável', level: 'fluent' },
  { id: '45', english: 'The confluence of factors led to an unprecedented outcome', portuguese: 'A confluência de fatores levou a um resultado sem precedentes', level: 'fluent' },
  { id: '46', english: 'This methodology epitomizes best practices in the field', portuguese: 'Esta metodologia exemplifica as melhores práticas no campo', level: 'fluent' },
  { id: '47', english: 'The nuanced interpretation requires sophisticated analysis', portuguese: 'A interpretação nuançada requer análise sofisticada', level: 'fluent' },
  { id: '48', english: 'Such considerations are fundamental to sustainable progress', portuguese: 'Tais considerações são fundamentais para o progresso sustentável', level: 'fluent' },
  { id: '49', english: 'The research methodology was rigorously validated', portuguese: 'A metodologia de pesquisa foi rigorosamente validada', level: 'fluent' },
  { id: '50', english: 'These findings corroborate our initial hypothesis', portuguese: 'Essas descobertas corroboram nossa hipótese inicial', level: 'fluent' }
];
