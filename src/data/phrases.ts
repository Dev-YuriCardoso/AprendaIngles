
import { Phrase } from '../types/types';

export const phrases: Phrase[] = [
  // Beginner Level
  { id: '1', english: 'Hello, how are you?', portuguese: 'Olá, como você está?', level: 'beginner' },
  { id: '2', english: 'What is your name?', portuguese: 'Qual é o seu nome?', level: 'beginner' },
  { id: '3', english: 'Nice to meet you', portuguese: 'Prazer em conhecê-lo', level: 'beginner' },
  { id: '4', english: 'Thank you very much', portuguese: 'Muito obrigado', level: 'beginner' },
  { id: '5', english: 'Excuse me', portuguese: 'Com licença', level: 'beginner' },
  { id: '6', english: 'Where is the bathroom?', portuguese: 'Onde fica o banheiro?', level: 'beginner' },
  { id: '7', english: 'I don\'t understand', portuguese: 'Eu não entendo', level: 'beginner' },
  { id: '8', english: 'Can you help me?', portuguese: 'Você pode me ajudar?', level: 'beginner' },
  { id: '9', english: 'How much does it cost?', portuguese: 'Quanto custa?', level: 'beginner' },
  { id: '10', english: 'I am hungry', portuguese: 'Estou com fome', level: 'beginner' },

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
