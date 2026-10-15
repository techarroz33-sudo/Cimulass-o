import { Question } from '@/types/simulado';

// --- UNICAMP (VESTIBULAR COMVEST - 20 QUESTÕES INTERDISCIPLINARES E CRÍTICAS) ---
export const unicampQuestions: Question[] = [
  {
    id: 'unicamp-1',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Interdisciplinar',
    subtopic: 'Biologia e Química - Fermentação e Pães Artesanais',
    difficulty: 'Médio',
    contextText: `Na produção tradicional de pães de fermentação natural (levain ou sourdough), uma comunidade simbiótica de leveduras (Saccharomyces cerevisiae e Candida humilis) e bactérias láticas (Lactobacillus sanfranciscensis) atua na massa de farinha de trigo.`,
    prompt: `O crescimento aerado da massa e o sabor levemente ácido característico do pão sourdough devem-se, respectivamente, à:`,
    options: [
      { id: 'A', text: 'Liberação de CO₂ na fermentação alcoólica e produção de ácido lático e acético pela via fermentativa bacteriana.' },
      { id: 'B', text: 'Evaporação imediata do álcool e síntese de glicose fotossintética.' },
      { id: 'C', text: 'Injeção mecânica de ar comprimido e adição de vinagre destilado.' },
      { id: 'D', text: 'Formação de gás metano e digestão de celulose vegetal.' },
      { id: 'E', text: 'Condensação de vapor de água e quebra da amilase salivar.' },
    ],
    correctOption: 'A',
    explanation: `As leveduras realizam fermentação alcoólica gerando etanol e dióxido de carbono (CO₂), cujas bolhas ficam retidas na rede de glúten fazendo a massa crescer. Já as bactérias láticas consomem maltose e produzem ácidos orgânicos (lático e acético), conferindo o sabor azedinho típico e conservação natural ao pão.`
  },
  {
    id: 'unicamp-2',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Física',
    subtopic: 'Termologia - Sensação Térmica e Condutividade',
    difficulty: 'Fácil',
    contextText: `Em uma sala climatizada a 20 °C, uma pessoa toca com uma mão a superfície de uma mesa de madeira e, com a outra mão, a perna de alumínio da mesma mesa. Embora ambos os objetos estejam em equilíbrio térmico a 20 °C, a perna de metal parece 'muito mais fria'.`,
    prompt: `Essa discrepância na sensação térmica decorre do fato de que:`,
    options: [
      { id: 'A', text: 'A temperatura real do metal é substancialmente menor que a da madeira.' },
      { id: 'B', text: 'O metal tem maior condutividade térmica, transferindo calor da mão para o objeto a uma taxa muito mais rápida.' },
      { id: 'C', text: 'A madeira emite radiação infravermelha constante que aquece a pele.' },
      { id: 'D', text: 'O alumínio absorve umidade do ar aumentando sua capacidade térmica.' },
      { id: 'E', text: 'O calor específico da mão humana diminui em contato com isolantes térmicos.' },
    ],
    correctOption: 'B',
    explanation: `A sensação tátil de frio ou calor não mede temperatura absoluta, mas o fluxo de calor (taxa de transferência de energia por condução). Como a condutividade térmica do alumínio é centenas de vezes maior que a da madeira, o metal 'rouba' calor da pele mais depressa, gerando sensação de maior resfriamento.`
  },
  {
    id: 'unicamp-3',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Geometria Analítica - Retas e Distâncias',
    difficulty: 'Médio',
    contextText: `No plano cartesiano com origem O(0,0), considere a reta r de equação 3x + 4y - 12 = 0. Ela intercepta os eixos coordenados nos pontos A e B.`,
    prompt: `O comprimento do segmento AB e a distância da origem O até a reta r são respectivamente:`,
    formulaTitle: 'Distância Ponto-Reta',
    formulaHint: 'd = |a·x₀ + b·y₀ + c| / √(a² + b²)',
    options: [
      { id: 'A', text: '5 e 2,4' },
      { id: 'B', text: '7 e 3,0' },
      { id: 'C', text: '5 e 1,2' },
      { id: 'D', text: '10 e 4,8' },
      { id: 'E', text: '4 e 2,0' },
    ],
    correctOption: 'A',
    explanation: `Se y = 0: 3x = 12 ⇒ x = 4 ⇒ A(4, 0).
Se x = 0: 4y = 12 ⇒ y = 3 ⇒ B(0, 3).
Segmento AB: hipotenusa do triângulo 3-4-5: AB = √(4² + 3²) = 5.
Distância de (0,0) até 3x + 4y - 12 = 0:
d = |3(0) + 4(0) - 12| / √(3² + 4²) = 12 / 5 = 2,4.`
  },
  {
    id: 'unicamp-4',
    exam: 'UNICAMP',
    year: 2023,
    subject: 'História e Humanidades',
    subtopic: 'História Indígena e Carta de Caminha',
    difficulty: 'Médio',
    contextText: `A leitura contemporânea de documentos coloniais, como a Carta de Pero Vaz de Caminha (1500), exige análise crítica dos filtros etnocêntricos dos conquistadores europeus.`,
    prompt: `Ao descrever os povos Tupiniquins como seres 'de boa feição, sem nenhuma lei nem idolatria', o escrivão português expressava:`,
    options: [
      { id: 'A', text: 'O reconhecimento genuíno da superioridade cultural e filosófica das nações originárias.' },
      { id: 'B', text: 'A visão de que os indígenas eram uma tábula rasa, dóceis e fáceis de serem convertidos à fé católica e subordinados aos interesses da Coroa.' },
      { id: 'C', text: 'O repúdio imediato ao projeto mercantilista de exploração do pau-brasil.' },
      { id: 'D', text: 'A constatação empírica de que os indígenas possuíam escrita fonética ocidental.' },
      { id: 'E', text: 'O medo do avanço militar das frotas francesas nos portos de Porto Seguro.' },
    ],
    correctOption: 'B',
    explanation: `Na ótica renascentista lusa, a ausência aparente de templos ou sacerdotes cristãos era interpretada como falta de qualquer crença ('sem fé, sem lei, sem rei'), convertendo os nativos no alvo perfeito para a catequese jesuítica e trabalho compulsório.`
  },
  {
    id: 'unicamp-5',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Química',
    subtopic: 'Estequiometria e Gases Ideais',
    difficulty: 'Médio',
    contextText: `Airbags veiculares disparam em milissegundos mediante a decomposição térmica da azida de sódio:
2 NaN₃(s) → 2 Na(s) + 3 N₂(g).
Considere massas molares: NaN₃ = 65 g/mol e R = 0,082 atm·L/(mol·K).`,
    prompt: `A massa aproximada de NaN₃ necessária para inflar uma bolsa de 60 L com gás N₂ sob pressão de 1,23 atm e temperatura de 300 K é:`,
    options: [
      { id: 'A', text: '65 g' },
      { id: 'B', text: '130 g' },
      { id: 'C', text: '195 g' },
      { id: 'D', text: '260 g' },
      { id: 'E', text: '325 g' },
    ],
    correctOption: 'B',
    explanation: `Número de mols de N₂: n = P·V / (R·T) = (1,23 × 60) / (0,082 × 300) = 73,8 / 24,6 = 3,0 mols de N₂.
Pela estequiometria: 2 mols de NaN₃ produzem 3 mols de N₂.
Portanto, são necessários 2 mols de NaN₃.
Massa de NaN₃ = 2 mols × 65 g/mol = 130 g.`
  },
  {
    id: 'unicamp-6',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Língua Portuguesa',
    subtopic: 'Literatura - Canudos em Os Sertões',
    difficulty: 'Difícil',
    contextText: `Em 'Os Sertões' (1902), Euclides da Cunha estrutura a monumental obra na tríade determinista: 'A Terra', 'O Homem' e 'A Luta'.`,
    prompt: `A célebre máxima euclidiana 'O sertanejo é, antes de tudo, um forte' expressa:`,
    options: [
      { id: 'A', text: 'Uma exaltação romântica ingênua sem qualquer conflito biológico.' },
      { id: 'B', text: 'A capacidade de resistência física e psíquica forjada pelo embate cotidiano implacável com a aridez do meio agreste e semiárido.' },
      { id: 'C', text: 'A submissão pacífica do habitante do sertão às elites latifundiárias costeiras.' },
      { id: 'D', text: 'O elogio irrestrito à modernização republicana encabeçada pelo Exército.' },
      { id: 'E', text: 'A defesa da superioridade genética dos povos europeus nórdicos.' },
    ],
    correctOption: 'B',
    explanation: `Para Euclides, o sertanejo não tinha a beleza escultural apolínea; era corcunda e desengonçado ao repouso, mas se transfigurava em titã resistente diante das intempéries da caatinga e dos combates sangrentos da Guerra de Canudos.`
  },
  {
    id: 'unicamp-7',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Biologia',
    subtopic: 'Imunologia e Vacinas de RNA Mensageiro',
    difficulty: 'Médio',
    contextText: `As vacinas de RNA mensageiro (mRNA) contra a COVID-19 utilizam nanopartículas lipídicas que entregam instruções genéticas para células humanas sintetizarem temporariamente a proteína Spike do coronavírus.`,
    prompt: `Essa abordagem vacinal confere imunidade ativa porque:`,
    options: [
      { id: 'A', text: 'O mRNA se funde ao DNA do núcleo celular modificando o genoma de forma permanente.' },
      { id: 'B', text: 'O organismo reconhece a proteína Spike traduzida nos ribossomos como antígeno estranho, desencadeando produção de anticorpos específicos e células de memória imunológica.' },
      { id: 'C', text: 'O próprio mRNA atua como anticorpo neutralizante direto no plasma.' },
      { id: 'D', text: 'A vacina injeta vírus atenuados que se multiplicam no fígado.' },
      { id: 'E', text: 'A imunidade gerada é passiva e dura menos de 24 horas.' },
    ],
    correctOption: 'B',
    explanation: `O mRNA atua nos ribossomos do citoplasma produzindo a proteína Spike. Ao expô-la na membrana, o sistema imune (linfócitos T e B) a reconhece como antígeno, montando resposta primária com geração de linfócitos de memória sem risco de infecção ativa.`
  },
  {
    id: 'unicamp-8',
    exam: 'UNICAMP',
    year: 2023,
    subject: 'Física',
    subtopic: 'Hidrostática - Princípio de Pascal e Prensa Hidráulica',
    difficulty: 'Fácil',
    contextText: `Em um elevador hidráulico de oficina mecânica, dois êmbolos circulares de áreas A₁ = 10 cm² e A₂ = 500 cm² estão conectados por um fluido incompressível.`,
    prompt: `Para erguer um automóvel de peso 15.000 N sobre o êmbolo maior, a força mínima que deve ser aplicada ao êmbolo menor é de:`,
    formulaTitle: 'Prensa Hidráulica',
    formulaHint: 'F₁ / A₁ = F₂ / A₂',
    options: [
      { id: 'A', text: '300 N' },
      { id: 'B', text: '150 N' },
      { id: 'C', text: '600 N' },
      { id: 'D', text: '750 N' },
      { id: 'E', text: '1.500 N' },
    ],
    correctOption: 'A',
    explanation: `F₁ / 10 = 15.000 / 500.
F₁ = 10 × (15.000 / 500) = 10 × 30 = 300 N.
A vantagem mecânica hidráulica multiplica a força aplicada por 50 vezes.`
  },
  {
    id: 'unicamp-9',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Logaritmos e Escala Richter',
    difficulty: 'Médio',
    contextText: `A magnitude M de um terremoto na escala Richter é calculada pela relação M = (2/3) · log₁₀(E / E₀), onde E é a energia liberada em Joules e E₀ é uma constante de referência.`,
    prompt: `Comparado a um sismo de magnitude 5, um terremoto de magnitude 7 libera uma quantidade de energia aproximadamente:`,
    options: [
      { id: 'A', text: '2 vezes maior.' },
      { id: 'B', text: '20 vezes maior.' },
      { id: 'C', text: '100 vezes maior.' },
      { id: 'D', text: '1.000 vezes maior (10³).' },
      { id: 'E', text: '10.000 vezes maior.' },
    ],
    correctOption: 'D',
    explanation: `ΔM = M₂ - M₁ = 7 - 5 = 2.
2 = (2/3) · log₁₀(E₂ / E₁) ⇒ 3 = log₁₀(E₂ / E₁) ⇒ E₂ / E₁ = 10³ = 1.000 vezes.
A cada 2 pontos a mais na escala, a energia cresce mil vezes.`
  },
  {
    id: 'unicamp-10',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Geografia',
    subtopic: 'Climatologia - El Niño e La Niña',
    difficulty: 'Médio',
    contextText: `O fenômeno ENOS (El Niño - Oscilação Sul) consiste na alteração acentuada das temperaturas superficiais das águas do Oceano Pacífico Equatorial e dos ventos alísios.`,
    prompt: `Durante episódios intensos de El Niño, os impactos climáticos típicos observados no território brasileiro incluem:`,
    options: [
      { id: 'A', text: 'Secas severas no semiárido do Nordeste e chuvas volumosas acima da média na Região Sul.' },
      { id: 'B', text: 'Invernos glaciais com nevascas generalizadas no Centro-Oeste.' },
      { id: 'C', text: 'Seca generalizada em Santa Catarina e no Rio Grande do Sul.' },
      { id: 'D', text: 'Inundações catastróficas em toda a extensão do Sertão cearense.' },
      { id: 'E', text: 'Redução drástica da temperatura média na floresta amazônica.' },
    ],
    correctOption: 'A',
    explanation: `O El Niño enfraquece a convecção no norte e nordeste do Brasil, inibindo chuvas (estiagens na Amazônia e no Sertão), enquanto desvia as frentes frias para o Sul do país, causando tempestades e enchentes recorrentes.`
  },
  {
    id: 'unicamp-11',
    exam: 'UNICAMP',
    year: 2023,
    subject: 'Língua Portuguesa e Artes',
    subtopic: 'Sobrevivendo no Inferno - Racionais MC\'s',
    difficulty: 'Difícil',
    contextText: `O álbum 'Sobrevivendo no Inferno' (1997), dos Racionais MC's, incluído na lista oficial de obras da Unicamp, consagrou a lírica periférica como alta literatura brasileira contemporânea.`,
    prompt: `Na faixa 'Diário de um Detento', o relato poético tem como clímax dramático:`,
    options: [
      { id: 'A', text: 'A rebelião na Febem com fuga em massa dos jovens.' },
      { id: 'B', text: 'O massacre da Casa de Detenção de São Paulo (Carandiru) em 1992, denunciando o genocídio institucional e a falência do sistema penal.' },
      { id: 'C', text: 'Um assalto a banco filmado ao vivo por helicópteros de TV.' },
      { id: 'D', text: 'A libertação condicional do narrador com reinserção no mercado de trabalho.' },
      { id: 'E', text: 'Uma disputa religiosa entre pastores no pátio da penitenciária.' },
    ],
    correctOption: 'B',
    explanation: `A composição retrata detalhadamente a tensão do dia 2 de outubro de 1992 no pavilhão 9 do Carandiru, culminando na invasão da tropa de choque e no assassinato de 111 detentos sob a égide do poder estatal.`
  },
  {
    id: 'unicamp-12',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Biologia',
    subtopic: 'Biotecnologia - CRISPR-Cas9',
    difficulty: 'Avançado',
    contextText: `A tecnologia de edição gênica CRISPR-Cas9, premiada com o Nobel de Química em 2020, foi descoberta originalmente como um sistema imunológico adaptativo bacteriano contra vírus bacteriófagos.`,
    prompt: `A especificidade cirúrgica do corte da enzima Cas9 em uma sequência exata do DNA alvo é orientada por:`,
    options: [
      { id: 'A', text: 'Um RNA guia (gRNA) de fita simples complementar à sequência nucleotídica visada.' },
      { id: 'B', text: 'Anticorpos monoclonais de origem equina.' },
      { id: 'C', text: 'Correntes elétricas pulsadas de alta frequência.' },
      { id: 'D', text: 'Microagulhas magnéticas de nanotubos de carbono.' },
      { id: 'E', text: 'Substâncias fluorescentes de águas-vivas.' },
    ],
    correctOption: 'A',
    explanation: `O complexo CRISPR-Cas9 emprega um RNA guia sintetizado em laboratório com cerca de 20 nucleotídeos complementares ao gene alvo. Quando o RNA guia se pareia com a fita de DNA, ativa os domínios de nuclease da Cas9 que clivam a dupla hélice com precisão milimétrica.`
  },
  {
    id: 'unicamp-13',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Física',
    subtopic: 'Eletromagnetismo - Circuitos em Paralelo',
    difficulty: 'Médio',
    contextText: `Em uma residência padrão, as tomadas elétricas são ligadas em paralelo sob tensão eficaz de 127 V.`,
    prompt: `A principal vantagem de ligar os eletrodomésticos em circuito paralelo, em vez de em série, é que:`,
    options: [
      { id: 'A', text: 'A corrente que passa em cada aparelho é rigorosamente a mesma independente de sua potência.' },
      { id: 'B', text: 'Cada aparelho opera sob a tensão nominal completa (127 V) de forma independente, não parando caso outro seja desligado.' },
      { id: 'C', text: 'A resistência equivalente da residência aumenta ao ligar mais aparelhos.' },
      { id: 'D', text: 'Elimina-se a necessidade do uso de fusíveis ou disjuntores no quadro de força.' },
      { id: 'E', text: 'A conta de luz é reduzida a zero pelo cancelamento de reatâncias.' },
    ],
    correctOption: 'B',
    explanation: `Na ligação paralela, todos os ramos recebem a mesma diferença de potencial (127 V). Desconectar ou queimar um aparelho não interrompe a circulação de corrente nos demais ramos do circuito.`
  },
  {
    id: 'unicamp-14',
    exam: 'UNICAMP',
    year: 2023,
    subject: 'História',
    subtopic: 'Brasil República - Guerra Fria e Golpe de 64',
    difficulty: 'Médio',
    contextText: `A deposição do presidente João Goulart em 1964 inseriu-se na conjuntura da Guerra Fria latino-americana subsequente à Revolução Cubana de 1959.`,
    prompt: `Entre os fatores que aglutinaram setores conservadores civis, o empresariado (IPES/IBAD) e as Forças Armadas contra o governo Jango, destacou-se:`,
    options: [
      { id: 'A', text: 'A defesa veemente das Reformas de Base (agrária, tributária e educacional) pelo presidente e a mobilização militar de praças e sargentos.' },
      { id: 'B', text: 'O envio de tropas brasileiras para combater ao lado da OTAN no Vietnã.' },
      { id: 'C', text: 'A recusa de Jango em assinar tratados comerciais com os Estados Unidos.' },
      { id: 'D', text: 'O plano governamental de privatizar a Petrobras e a Vale do Rio Doce.' },
      { id: 'E', text: 'A proposta de restauração do poder monárquico da dinastia de Bragança.' },
    ],
    correctOption: 'A',
    explanation: `O Comício da Central do Brasil em março de 1964, a promulgação dos decretos de encampação de refinarias e reforma agrária em faixas rodoviárias, somados à insubordinação de marinheiros (Revolta dos Marinheiros), foram interpretados pelas elites e militares como ameaça comunista iminente.`
  },
  {
    id: 'unicamp-15',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Química',
    subtopic: 'Polímeros e Sustentabilidade',
    difficulty: 'Fácil',
    contextText: `Os plásticos tradicionais derivados de petróleo (polietileno, polipropileno) persistem por séculos no ambiente. Pesquisadores buscam biopolímeros biodegradáveis como o poliácido lático (PLA).`,
    prompt: `O PLA é considerado um polímero verde porque:`,
    options: [
      { id: 'A', text: 'É sintetizado a partir de recursos vegetais renováveis (amido de milho ou cana) e pode ser degradado por microrganismos sob compostagem industrial.' },
      { id: 'B', text: 'Nunca se decompõe, permitindo reciclagem infinita sem gasto de energia.' },
      { id: 'C', text: 'Contém chumbo e mercúrio em sua cadeia carbônica para acelerar a degradação.' },
      { id: 'D', text: 'Dissolve-se espontaneamente na primeira gota de chuva comum.' },
      { id: 'E', text: 'Pode ser ingerido por seres humanos como substituto de proteínas diárias.' },
    ],
    correctOption: 'A',
    explanation: `O PLA provém da fermentação bacteriana de amido de milho/cana em ácido lático, polimerizado em poliéster biodegradável. Em usinas de compostagem adequadas, decompõe-se em água, biomassa e CO₂ em poucos meses.`
  },
  {
    id: 'unicamp-16',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Matrizes e Determinantes',
    difficulty: 'Médio',
    contextText: `Seja a matriz quadrada de ordem 2: M = [[2, 1], [4, x]]. Sabe-se que a matriz M é inversível.`,
    prompt: `Para que a matriz M admita inversa (seja inversível), o número real x deve satisfazer a condição:`,
    options: [
      { id: 'A', text: 'x ≠ 2' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x ≠ 0' },
      { id: 'D', text: 'x > 4' },
      { id: 'E', text: 'x < -2' },
    ],
    correctOption: 'A',
    explanation: `Uma matriz possui inversa se, e somente se, seu determinante for diferente de zero (det(M) ≠ 0).
det(M) = 2 · x - 1 · 4 = 2x - 4.
2x - 4 ≠ 0 ⇒ 2x ≠ 4 ⇒ x ≠ 2.`
  },
  {
    id: 'unicamp-17',
    exam: 'UNICAMP',
    year: 2023,
    subject: 'Biologia',
    subtopic: 'Genética de Populações - Hardy-Weinberg',
    difficulty: 'Difícil',
    contextText: `Em uma população sob equilíbrio de Hardy-Weinberg, a frequência do alelo recessivo (q) para o albinismo é de 0,1 (10%).`,
    prompt: `A frequência esperada de indivíduos heterozigotos portadores (2pq) nessa população é de:`,
    formulaTitle: 'Equilíbrio de Hardy-Weinberg',
    formulaHint: 'p + q = 1; p² + 2pq + q² = 1',
    options: [
      { id: 'A', text: '1%' },
      { id: 'B', text: '9%' },
      { id: 'C', text: '18%' },
      { id: 'D', text: '81%' },
      { id: 'E', text: '50%' },
    ],
    correctOption: 'C',
    explanation: `Se q = 0,1, então p = 1 - 0,1 = 0,9.
Frequência de heterozigotos: 2pq = 2 × 0,9 × 0,1 = 0,18 = 18%.`
  },
  {
    id: 'unicamp-18',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Filosofia',
    subtopic: 'Filosofia Política - O Contrato Social de Rousseau',
    difficulty: 'Médio',
    contextText: `Em 'Do Contrato Social' (1762), Jean-Jacques Rousseau afirma que o homem nasce livre, mas por toda parte encontra-se aprisionado por grilhões.`,
    prompt: `Para restaurar a legitimidade política da liberdade civil, Rousseau propõe que as leis e o governo se submetam à:`,
    options: [
      { id: 'A', text: 'Vontade Geral do corpo soberano de cidadãos em busca do bem comum.' },
      { id: 'B', text: 'Vontade particular do monarca hereditário absolutista.' },
      { id: 'C', text: 'Autoridade teocrática perpétua do clero romano.' },
      { id: 'D', text: 'Ditadura militar de magistrados togados.' },
      { id: 'E', text: 'Soma caótica dos interesses individuais egoístas do livre mercado.' },
    ],
    correctOption: 'A',
    explanation: `A 'Vontade Geral' (volonté générale) não é a mera soma das vontades individuais (vontade de todos), mas a expressão da soberania coletiva indivisível orientada ao interesse público e à igualdade moral dos cidadãos.`
  },
  {
    id: 'unicamp-19',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Física',
    subtopic: 'Cinemática Vetorial e Lançamento Oblíquo',
    difficulty: 'Médio',
    contextText: `Um projétil é lançado obliquamente a partir do solo plano sob ângulo de 30° com a horizontal, com velocidade inicial de 40 m/s. Despreze a resistência do ar e adote g = 10 m/s², sen(30°) = 0,5 e cos(30°) = 0,86.`,
    prompt: `A altura máxima atingida pelo projétil e o tempo total de voo são respectivamente:`,
    formulaTitle: 'Lançamento Oblíquo',
    formulaHint: 'v_y = v₀·sen(θ) = 40 × 0,5 = 20 m/s; H_max = v_y² / (2g)',
    options: [
      { id: 'A', text: '20 m e 4 s' },
      { id: 'B', text: '40 m e 8 s' },
      { id: 'C', text: '10 m e 2 s' },
      { id: 'D', text: '30 m e 5 s' },
      { id: 'E', text: '50 m e 6 s' },
    ],
    correctOption: 'A',
    explanation: `Velocidade vertical inicial: v_0y = 40 × sen(30°) = 20 m/s.
Tempo de subida: t_sub = v_0y / g = 20 / 10 = 2 s.
Tempo total de voo = 2 × t_sub = 4 s.
Altura máxima: H_max = (v_0y)² / (2g) = 20² / 20 = 400 / 20 = 20 m.`
  },
  {
    id: 'unicamp-20',
    exam: 'UNICAMP',
    year: 2024,
    subject: 'Língua Portuguesa',
    subtopic: 'Semântica e Ironia nos Meios Digitais',
    difficulty: 'Fácil',
    contextText: `Nas redes sociais contemporâneas, o uso de emojis, pontuação repetida e caixas-altas cria camadas paralinguísticas complexas de sentido.`,
    prompt: `A frase 'Adorei esperar duas horas no sol sob 38 graus para não ser atendido 🤡' constitui um exemplo emblemático da figura de linguagem:`,
    options: [
      { id: 'A', text: 'Ironia, pois o autor enuncia o oposto do que realmente sente com intenção sarcástica.' },
      { id: 'B', text: 'Pleonasmo vicioso redundante.' },
      { id: 'C', text: 'Eufemismo para suavizar uma tragédia cósmica.' },
      { id: 'D', text: 'Sinestesia sensorial entre tato e olfato.' },
      { id: 'E', text: 'Metonímia espacial de continente pelo conteúdo.' },
    ],
    correctOption: 'A',
    explanation: `A ironia consiste em afirmar intencionalmente algo cujo sentido real e contextual é o inverso ('adorei' significando extrema irritação), reforçado pelo emoji de palhaço (troxa/ridicularizado).`
  }
];

// --- UNESP (VESTIBULAR VUNESP - 20 QUESTÕES CLÁSSICAS) ---
export const unespQuestions: Question[] = [
  {
    id: 'unesp-1',
    exam: 'UNESP',
    year: 2024,
    subject: 'Filosofia e Sociologia',
    subtopic: 'Mito da Caverna de Platão',
    difficulty: 'Médio',
    contextText: `No Livro VII de 'A República' de Platão, prisioneiros acorrentados desde a infância no fundo de uma caverna veem apenas sombras projetadas na parede pela luz de uma fogueira.`,
    prompt: `Na alegoria platônica, o ato de se libertar das correntes e ascender à luz do Sol no exterior simboliza:`,
    options: [
      { id: 'A', text: 'A fuga hedonista da realidade em direção aos prazeres corpóreos.' },
      { id: 'B', text: 'A transição dialética do mundo sensível (opinião/doxa) para o mundo inteligível das Ideias verdadeiras (episteme).' },
      { id: 'C', text: 'A adesão acrítica aos dogmas religiosos da mitologia homérica.' },
      { id: 'D', text: 'O suicídio como única via de libertação humana.' },
      { id: 'E', text: 'A defesa do ceticismo radical de Pirro.' },
    ],
    correctOption: 'B',
    explanation: `A alegoria da caverna sintetiza a teoria platônica do conhecimento: as sombras são o mundo sensível imperfeito; a saída dolorosa para o exterior iluminado pelo Sol representa o esforço filosófico racional para contemplar a Ideia do Bem.`
  },
  {
    id: 'unesp-2',
    exam: 'UNESP',
    year: 2024,
    subject: 'Física',
    subtopic: 'Eletrostática - Lei de Coulomb',
    difficulty: 'Fácil',
    contextText: `Duas pequenas esferas metálicas idênticas, eletrizadas com cargas q₁ = +6 μC e q₂ = -2 μC, estão separadas por uma distância d no ar. Elas são postas em contato momentâneo e, em seguida, devolvidas às suas posições originais.`,
    prompt: `Após o contato e retorno à distância d, a carga final de cada esfera e a nova interação entre elas serão:`,
    options: [
      { id: 'A', text: 'Carga de +2 μC em cada esfera e a força passa a ser repulsiva.' },
      { id: 'B', text: 'Carga de +4 μC em cada esfera e a força continua atrativa.' },
      { id: 'C', text: 'Carga nula (esferas descarregadas) e força nula.' },
      { id: 'D', text: 'Carga de +2 μC em uma e -2 μC na outra com força atrativa.' },
      { id: 'E', text: 'Carga de +8 μC com repulsão quádrupla.' },
    ],
    correctOption: 'A',
    explanation: `Pelo princípio da conservação das cargas elétricas em condutores idênticos:
q_total = (+6) + (-2) = +4 μC.
Após o contato, a carga reparte-se igualmente: q\' = q_total / 2 = +4 / 2 = +2 μC para cada uma.
Como ambas possuem agora cargas de mesmo sinal (+2 μC), a nova força eletrostática entre elas é de repulsão.`
  },
  {
    id: 'unesp-3',
    exam: 'UNESP',
    year: 2024,
    subject: 'Química',
    subtopic: 'Cinética Química e Fatores de Velocidade',
    difficulty: 'Fácil',
    contextText: `Ao dissolver um comprimido efervescente em um copo de água, observa-se que a efervescência ocorre muito mais rapidamente se o comprimido for previamente triturado e a água for morna.`,
    prompt: `A maior velocidade de reação verificada decorre, respectivamente, do aumento da:`,
    options: [
      { id: 'A', text: 'Superfície de contato do reagente sólido e da energia cinética média das moléculas.' },
      { id: 'B', text: 'Pressão atmosférica sobre o copo e da densidade da água.' },
      { id: 'C', text: 'Energia de ativação e diminuição das colisões efetivas.' },
      { id: 'D', text: 'Constante dielétrica do vidro e da evaporação do gás carbônico.' },
      { id: 'E', text: 'Entalpia padrão de formação do sal hidratado.' },
    ],
    correctOption: 'A',
    explanation: `Triturar o comprimido aumenta a superfície de contato exposta à água, multiplicando os sítios de colisão. Aumentar a temperatura eleva a energia cinética molecular média, fazendo com que uma fração muito maior de colisões supere a energia de ativação.`
  },
  {
    id: 'unesp-4',
    exam: 'UNESP',
    year: 2024,
    subject: 'Biologia',
    subtopic: 'Reino Vegetal - Briófitas, Pteridófitas e Gimnospermas',
    difficulty: 'Médio',
    contextText: `Na história evolutiva das plantas terrestres (embriófitas), surgiram adaptações cruciais que permitiram a conquista de ambientes gradativamente mais secos e distantes da água.`,
    prompt: `O surgimento de vasos condutores de seiva (xilema e floema) ocorreu pela primeira vez nos ancestrais de qual grupo botânico?`,
    options: [
      { id: 'A', text: 'Briófitas (musgos e hepáticas).' },
      { id: 'B', text: 'Pteridófitas (samambaias e avencas).' },
      { id: 'C', text: 'Gimnospermas (pinheiros e araucárias).' },
      { id: 'D', text: 'Angiospermas com flores vistosas.' },
      { id: 'E', text: 'Algas verdes clorófitas unicelulares.' },
    ],
    correctOption: 'B',
    explanation: `As briófitas são avasculares (transporte célula a célula por difusão). As primeiras plantas vasculares (traqueófitas) dotadas de xilema e floema foram as pteridófitas, o que permitiu ganho substancial de porte físico.`
  },
  {
    id: 'unesp-5',
    exam: 'UNESP',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Progressão Aritmética (PA)',
    difficulty: 'Fácil',
    contextText: `Um atleta inicia seu treinamento correndo 2 km no primeiro dia. A cada dia seguinte, ele aumenta sua corrida diária em 500 metros (0,5 km) em relação ao dia anterior.`,
    prompt: `No vigésimo (20º) dia de treino, qual será a distância percorrida pelo atleta nesse dia?`,
    formulaTitle: 'Termo Geral da PA',
    formulaHint: 'a_n = a₁ + (n - 1)·r',
    options: [
      { id: 'A', text: '10,0 km' },
      { id: 'B', text: '11,5 km' },
      { id: 'C', text: '12,0 km' },
      { id: 'D', text: '12,5 km' },
      { id: 'E', text: '15,0 km' },
    ],
    correctOption: 'B',
    explanation: `Temos uma PA onde a₁ = 2 km, razão r = 0,5 km e n = 20.
a₂₀ = a₁ + 19 · r = 2 + 19 · 0,5 = 2 + 9,5 = 11,5 km.`
  },
  {
    id: 'unesp-6',
    exam: 'UNESP',
    year: 2023,
    subject: 'História',
    subtopic: 'História do Brasil - O Golpe da Maioridade (1840)',
    difficulty: 'Médio',
    contextText: `Em 1840, para pôr fim à instabilidade das revoltas regenciais (Cabanagem, Farroupilha, Sabinada, Balaiada) e restabelecer a autoridade centralizadora no Império do Brasil, foi articulado o 'Golpe da Maioridade'.`,
    prompt: `A manobra política liderada pelo Partido Liberal consistiu em:`,
    options: [
      { id: 'A', text: 'Proclamar D. Pedro II imperador com apenas 14 anos de idade, antecipando sua maioridade legal constitucional.' },
      { id: 'B', text: 'Instaurar um regime republicano presidencialista nos moldes norte-americanos.' },
      { id: 'C', text: 'Convocar uma Assembleia Constituinte de maioria operária fabril.' },
      { id: 'D', text: 'Renunciar à soberania territorial em favor de um consórcio britânico.' },
      { id: 'E', text: 'Destituir o exército e criar uma milícia escravocrata regencial.' },
    ],
    correctOption: 'A',
    explanation: `A Constituição de 1824 exigia 21 anos para governar. Para conter as convulsões separatistas e neutralizar os conservadores, os liberais anteciparam a posse de D. Pedro II aos 14 anos sob o lema popular 'Queremos Pedro Segundo, embora não tenha idade...'.`
  },
  {
    id: 'unesp-7',
    exam: 'UNESP',
    year: 2024,
    subject: 'Língua Portuguesa',
    subtopic: 'Conjunções e Coesão Textual',
    difficulty: 'Fácil',
    contextText: `Considere a frase: 'Embora o governo tenha ampliado as linhas de crédito agrícola, os pequenos produtores rurais continuam enfrentando severas barreiras burocráticas'.`,
    prompt: `A oração introduzida pela conjunção 'Embora' expressa valor semântico de:`,
    options: [
      { id: 'A', text: 'Causa.' },
      { id: 'B', text: 'Concessão.' },
      { id: 'C', text: 'Condição.' },
      { id: 'D', text: 'Finalidade.' },
      { id: 'E', text: 'Proporcionalidade.' },
    ],
    correctOption: 'B',
    explanation: `'Embora' é uma conjunção subordinativa concessiva por excelência: introduz uma ressalva ou oposição que não anula o fato principal expresso na oração principal.`
  },
  {
    id: 'unesp-8',
    exam: 'UNESP',
    year: 2024,
    subject: 'Geografia',
    subtopic: 'Demografia Brasileira e Transição Demográfica',
    difficulty: 'Médio',
    contextText: `Os dados do Censo Demográfico do IBGE demonstram uma desaceleração contínua da taxa de fecundidade feminina no Brasil (abaixo de 1,6 filho por mulher), com rápido estreitamento da base da pirâmide etária.`,
    prompt: `Entre os desafios socioeconômicos imediatos decorrentes do envelhecimento populacional acelerado no Brasil, destaca-se:`,
    options: [
      { id: 'A', text: 'A pressão crescente sobre o sistema previdenciário e o aumento da demanda por serviços de saúde e cuidados de longa permanência geriátricos.' },
      { id: 'B', text: 'A escassez crônica de creches e escolas de ensino fundamental.' },
      { id: 'C', text: 'O encerramento permanente da urbanização nas capitais.' },
      { id: 'D', text: 'O fim da imigração de profissionais qualificados.' },
      { id: 'E', text: 'A multiplicação descontrolada das taxas de mortalidade infantil.' },
    ],
    correctOption: 'A',
    explanation: `Com menos jovens ingressando na População Economicamente Ativa (PEA) e a ampliação da expectativa de sobrevida dos idosos, a razão de dependência previdenciária e os gastos do SUS com doenças crônicas não transmissíveis aumentam fortemente.`
  },
  {
    id: 'unesp-9',
    exam: 'UNESP',
    year: 2024,
    subject: 'Física',
    subtopic: 'Ondas - Refração e Lei de Snell',
    difficulty: 'Médio',
    contextText: `Um feixe de luz monocromática passa do ar (índice de refração n₁ = 1,0) para a água (n₂ = 1,33).`,
    prompt: `Ao penetrar na água, o que ocorre com a frequência, o comprimento de onda e a velocidade da luz?`,
    options: [
      { id: 'A', text: 'A frequência não se altera, a velocidade diminui e o comprimento de onda diminui.' },
      { id: 'B', text: 'A frequência diminui, a velocidade diminui e o comprimento de onda fica constante.' },
      { id: 'C', text: 'A frequência aumenta, a velocidade aumenta e o comprimento de onda dobra.' },
      { id: 'D', text: 'Nenhuma grandeza se altera durante a refração.' },
      { id: 'E', text: 'A velocidade aumenta em meios mais refringentes.' },
    ],
    correctOption: 'A',
    explanation: `A frequência é determinada unicamente pela fonte emissora e nunca muda ao mudar de meio. Como a água é mais refringente que o ar (n > 1), a velocidade de propagação diminui (v = c/n). Pela equação v = λ · f, se v diminui e f é constante, o comprimento de onda λ também diminui proporcionalmente.`
  },
  {
    id: 'unesp-10',
    exam: 'UNESP',
    year: 2023,
    subject: 'Química',
    subtopic: 'Funções Inorgânicas - Óxidos Ácidos e Básicos',
    difficulty: 'Fácil',
    contextText: `A queima de combustíveis fósseis contendo impurezas de enxofre em motores a diesel e usinas termelétricas libera na atmosfera dióxido de enxofre (SO₂).`,
    prompt: `Quando o gás SO₂ reage quimicamente com o vapor de água da chuva, forma-se:`,
    options: [
      { id: 'A', text: 'Ácido sulfuroso (H₂SO₃), um dos principais agentes da chuva ácida.' },
      { id: 'B', text: 'Hidróxido de sódio alcalino concentrado.' },
      { id: 'C', text: 'Ozônio estratosférico puro.' },
      { id: 'D', text: 'Sulfeto de ferro sólido insolúvel.' },
      { id: 'E', text: 'Gás hélio neutro inerte.' },
    ],
    correctOption: 'A',
    explanation: `O SO₂ é um óxido ácido (anidrido sulfuroso). Reagindo com a água: SO₂ + H₂O → H₂SO₃ (ácido sulfuroso), que pode oxidar-se adicionalmente a SO₃ e formar H₂SO₄ (ácido sulfúrico), acidificando as precipitações.`
  },
  {
    id: 'unesp-11',
    exam: 'UNESP',
    year: 2024,
    subject: 'Biologia',
    subtopic: 'Doenças Infecciosas - Dengue, Zika e Chikungunya',
    difficulty: 'Fácil',
    contextText: `A fêmea do mosquito Aedes aegypti é o vetor biológico comum responsável pela transmissão de arboviroses graves em diversas regiões tropicais e subtropicais.`,
    prompt: `O agente etiológico causador da dengue em humanos é um:`,
    options: [
      { id: 'A', text: 'Vírus de RNA de fita simples envelopado (gênero Flavivirus).' },
      { id: 'B', text: 'Protozoário flagelado do gênero Trypanosoma.' },
      { id: 'C', text: 'Bacilo bacteriano gram-positivo com endósporos.' },
      { id: 'D', text: 'Platelminto trematódeo hermafrodita.' },
      { id: 'E', text: 'Fungo microscópico ascomiceto filamentoso.' },
    ],
    correctOption: 'A',
    explanation: `A dengue é provocada por quatro sorotipos virais (DENV-1, DENV-2, DENV-3 e DENV-4), que são vírus de RNA pertencentes à família Flaviviridae. O Aedes aegypti atua apenas como vetor mecânico/biológico transmissor.`
  },
  {
    id: 'unesp-12',
    exam: 'UNESP',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Geometria Espacial - Cilindro Circular Reto',
    difficulty: 'Médio',
    contextText: `Um reservatório de água tem a forma de um cilindro circular reto com raio da base medindo 2 metros e altura de 5 metros. Adote π ≈ 3,14.`,
    prompt: `A capacidade máxima aproximada de água que esse reservatório pode armazenar é de:`,
    formulaTitle: 'Volume do Cilindro',
    formulaHint: 'V = π · r² · h. Lembre que 1 m³ = 1.000 litros.',
    options: [
      { id: 'A', text: '12.560 litros' },
      { id: 'B', text: '31.400 litros' },
      { id: 'C', text: '62.800 litros' },
      { id: 'D', text: '125.600 litros' },
      { id: 'E', text: '20.000 litros' },
    ],
    correctOption: 'C',
    explanation: `Volume em m³: V = 3,14 × (2)² × 5 = 3,14 × 4 × 5 = 3,14 × 20 = 62,8 m³.
Como 1 m³ = 1.000 L, a capacidade é: 62,8 × 1.000 = 62.800 litros.`
  },
  {
    id: 'unesp-13',
    exam: 'UNESP',
    year: 2024,
    subject: 'Filosofia',
    subtopic: 'Iluminismo - Separação dos Poderes em Montesquieu',
    difficulty: 'Fácil',
    contextText: `Na obra 'O Espírito das Leis' (1748), o Barão de Montesquieu formulou a célebre teoria da tripartição dos poderes do Estado.`,
    prompt: `O propósito central de dividir as funções estatais em Poder Executivo, Poder Legislativo e Poder Judiciário autônomos e harmônicos é:`,
    options: [
      { id: 'A', text: 'Impedir a concentração tirânica de poder em um único governante, assegurando o sistema de freios e contrapesos.' },
      { id: 'B', text: 'Instituir o voto censitário exclusivo para latifundiários.' },
      { id: 'C', text: 'Subordinar o parlamento às ordens expressas da autoridade papal.' },
      { id: 'D', text: 'Eliminar a cobrança de impostos em todo o território nacional.' },
      { id: 'E', text: 'Extinguir o serviço militar obrigatório.' },
    ],
    correctOption: 'A',
    explanation: `'Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder'. A separação dos poderes cria equilíbrio institucional onde nenhum poder sobrepuja os outros dois sem fiscalização mútua.`
  },
  {
    id: 'unesp-14',
    exam: 'UNESP',
    year: 2023,
    subject: 'Física',
    subtopic: 'Dinâmica - Atrito e Plano Inclinado',
    difficulty: 'Difícil',
    contextText: `Um bloco de massa 10 kg repousa sobre um plano inclinado que forma 30° com a horizontal. O coeficiente de atrito estático entre o bloco e a superfície é μ = 0,7. Adote g = 10 m/s², sen(30°) = 0,5 e cos(30°) = 0,87.`,
    prompt: `A força de atrito que atua sobre o bloco nessa situação de equilíbrio estático é de:`,
    formulaTitle: 'Equilíbrio no Plano Inclinado',
    formulaHint: 'No repouso com inclinação inferior ao ângulo crítico, a força de atrito estático equilibra exatamente a componente tangencial do peso: F_at = P_x = m·g·sen(θ).',
    options: [
      { id: 'A', text: '50 N' },
      { id: 'B', text: '60,9 N' },
      { id: 'C', text: '70 N' },
      { id: 'D', text: '87 N' },
      { id: 'E', text: '100 N' },
    ],
    correctOption: 'A',
    explanation: `Componente do peso paralela ao plano: P_x = m·g·sen(30°) = 10 × 10 × 0,5 = 50 N.
Força de atrito estático máxima disponível: F_at_max = μ·N = μ·m·g·cos(30°) = 0,7 × 10 × 10 × 0,87 = 60,9 N.
Como P_x (50 N) é menor que F_at_max (60,9 N), o bloco NÃO se move. A força de atrito real em equilíbrio é exatamente igual à solicitante: F_at = P_x = 50 N.`
  },
  {
    id: 'unesp-15',
    exam: 'UNESP',
    year: 2024,
    subject: 'Língua Portuguesa',
    subtopic: 'Crase e Regência Verbal',
    difficulty: 'Fácil',
    contextText: `O uso correto do acento grave indicativo de crase depende da fusão da preposição 'a' exigida por um termo regente com o artigo definido feminino 'a(s)'.`,
    prompt: `O acento indicativo de crase está empregado com total correção gramatical na frase:`,
    options: [
      { id: 'A', text: 'O candidato dedicou-se à preparação para os vestibulares paulistas.' },
      { id: 'B', text: 'Eles chegaram à andar a cavalo durante a madrugada.' },
      { id: 'C', text: 'O médico atendeu à todos os pacientes com prontidão.' },
      { id: 'D', text: 'Ele pagou à prazo todas as parcelas do veículo.' },
      { id: 'E', text: 'Entregamos o diploma à Sua Excelência ontem.' },
    ],
    correctOption: 'A',
    explanation: `O verbo dedicar-se é regido pela preposição 'a' (dedicar-se a algo). Como 'preparação' é substantivo feminino antecedido pelo artigo 'a', ocorre crase obrigatória: a + a = à. Em 'à andar' (antes de verbo), 'à todos' (antes de pronome indefinido masculino), 'à prazo' (palavra masculina) e 'à Sua Excelência' (pronome de tratamento), a crase é proibida.`
  },
  {
    id: 'unesp-16',
    exam: 'UNESP',
    year: 2024,
    subject: 'Química',
    subtopic: 'Radioatividade - Meia-Vida do Carbono-14',
    difficulty: 'Médio',
    contextText: `O isótopo radioativo carbono-14 (¹⁴C) possui tempo de meia-vida de aproximadamente 5.730 anos. Um fóssil vegetal encontrado em escavação arqueológica apresenta apenas 12,5% (1/8) da atividade de ¹⁴C encontrada em organismos vivos contemporâneos.`,
    prompt: `A idade aproximada desse fóssil arqueológico é de:`,
    formulaTitle: 'Decaimento Radioativo',
    formulaHint: '(1/2)^n = 1/8 ⇒ n = 3 meias-vidas. Idade = n × t_1/2.',
    options: [
      { id: 'A', text: '5.730 anos' },
      { id: 'B', text: '11.460 anos' },
      { id: 'C', text: '17.190 anos' },
      { id: 'D', text: '22.920 anos' },
      { id: 'E', text: '28.650 anos' },
    ],
    correctOption: 'C',
    explanation: `Após 1 meia-vida: resta 50% (1/2).
Após 2 meias-vidas: resta 25% (1/4).
Após 3 meias-vidas: resta 12,5% (1/8).
Passaram-se exatamente 3 meias-vidas: 3 × 5.730 anos = 17.190 anos.`
  },
  {
    id: 'unesp-17',
    exam: 'UNESP',
    year: 2023,
    subject: 'Biologia',
    subtopic: 'Genética - Sistema Sanguíneo ABO e Rh',
    difficulty: 'Fácil',
    contextText: `Um casal em que a mãe tem tipo sanguíneo O negativo (O Rh-) e o pai tem tipo AB positivo heterozigoto para Rh (AB Rhrh) planeja ter filhos.`,
    prompt: `Quais são os possíveis fenótipos sanguíneos dos filhos desse casal para o sistema ABO?`,
    options: [
      { id: 'A', text: 'Apenas tipo A ou tipo B (50% de chance para cada).' },
      { id: 'B', text: 'Apenas tipo AB ou tipo O.' },
      { id: 'C', text: 'Apenas tipo O (100% de probabilidade).' },
      { id: 'D', text: 'Tipo A, B, AB ou O com probabilidades idênticas.' },
      { id: 'E', text: 'Apenas tipo AB puro.' },
    ],
    correctOption: 'A',
    explanation: `Mãe O tem genótipo ii. Pai AB tem genótipo I^A I^B.
Cruzamento: ii × I^A I^B resulta em 50% I^A i (fenótipo A) e 50% I^B i (fenótipo B). Filhos nunca poderão ser tipo AB nem tipo O.`
  },
  {
    id: 'unesp-18',
    exam: 'UNESP',
    year: 2024,
    subject: 'Geografia',
    subtopic: 'Geomorfologia - Relevo do Estado de São Paulo',
    difficulty: 'Médio',
    contextText: `O relevo do Estado de São Paulo é estruturado em compartimentos morfológicos distintos: Planície Litorânea, Serra do Mar, Planalto Atlântico, Depressão Periférica e Planalto Ocidental Paulista.`,
    prompt: `A região da Depressão Periférica Paulista, drenada pelas bacias dos rios Tietê e Piracicaba, caracteriza-se geograficamente por:`,
    options: [
      { id: 'A', text: 'Altas altitudes montanhosas com picos acima de 2.800 metros em granito.' },
      { id: 'B', text: "Relevo rebaixado com colinas suaves e 'cuestas', separando o planalto cristalino das coberturas sedimentares do interior." },
      { id: 'C', text: 'Falésias litorâneas batidas pelas ondas oceânicas com manguezais.' },
      { id: 'D', text: 'Extensa planície aluvial inundável do Pantanal.' },
      { id: 'E', text: 'Campos de dunas móveis sem qualquer vegetação.' },
    ],
    correctOption: 'B',
    explanation: `A Depressão Periférica de São Paulo situa-se entre as rochas cristalinas da Serra do Mar/Planalto Paulistano e as rochas basáltico-areníticas do Planalto Ocidental, apresentando relevo colinoso suave com destacadas escarpas de cuestas areníticas-basálticas (como as de Botucatu e Brotas).`
  },
  {
    id: 'unesp-19',
    exam: 'UNESP',
    year: 2024,
    subject: 'Física',
    subtopic: 'Acústica - Cordas Sonoras e Harmônicos',
    difficulty: 'Médio',
    contextText: `Uma corda de violão de comprimento L = 0,60 m e densidade linear constante está fixa em ambas as extremidades e vibra no seu primeiro harmônico (modo fundamental) com frequência de 220 Hz (nota Lá).`,
    prompt: `A velocidade de propagação da onda transversal nessa corda é de:`,
    formulaTitle: 'Ondas Estacionárias em Cordas',
    formulaHint: 'No modo fundamental: L = λ / 2 ⇒ λ = 2L; v = λ · f',
    options: [
      { id: 'A', text: '132 m/s' },
      { id: 'B', text: '264 m/s' },
      { id: 'C', text: '330 m/s' },
      { id: 'D', text: '440 m/s' },
      { id: 'E', text: '528 m/s' },
    ],
    correctOption: 'B',
    explanation: `Para o primeiro harmônico em corda com extremidades presas:
λ = 2 · L = 2 × 0,60 = 1,20 m.
Velocidade: v = λ × f = 1,20 m × 220 Hz = 264 m/s.`
  },
  {
    id: 'unesp-20',
    exam: 'UNESP',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Trigonometria no Triângulo Retângulo',
    difficulty: 'Fácil',
    contextText: `A 30 metros de distância da base de um edifício vertical, um observador visualiza o topo da antena do prédio sob um ângulo de elevação de 30° em relação ao solo plano. Adote tan(30°) ≈ 0,58 e altura dos olhos do observador igual a 1,60 m.`,
    prompt: `A altura total aproximada do edifício com a antena é de:`,
    options: [
      { id: 'A', text: '17,4 metros' },
      { id: 'B', text: '19,0 metros' },
      { id: 'C', text: '21,5 metros' },
      { id: 'D', text: '24,2 metros' },
      { id: 'E', text: '30,0 metros' },
    ],
    correctOption: 'B',
    explanation: `tan(30°) = h_predio / 30 ⇒ h_predio = 30 × 0,58 = 17,4 metros.
Somando a altura dos olhos do observador:
H_total = 17,4 + 1,60 = 19,0 metros.`
  }
];
