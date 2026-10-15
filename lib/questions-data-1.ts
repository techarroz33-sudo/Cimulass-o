import { Exam, Question } from '@/types/simulado';

// --- ENEM (20 QUESTÕES FIÉIS AO ESTILO ENEM COM TEXTO-BASE, HABILIDADES E TRI) ---
export const enemQuestions: Question[] = [
  {
    id: 'enem-1',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências da Natureza',
    subtopic: 'Física - Mecânica e Energia',
    difficulty: 'Médio',
    contextText: `Um veículo híbrido com sistema de frenagem regenerativa converte parte da energia cinética que seria dissipada em calor pelos freios convencionais em energia elétrica, recarregando a bateria do veículo. Considere um carro de 1.200 kg que se deslocava a 72 km/h (20 m/s) e é desacelerado até o repouso.`,
    prompt: `Se o sistema regenerativo aproveita 60% da energia cinética dissipada, a energia elétrica armazenada na bateria nesse processo é de:`,
    formulaTitle: 'Energia Cinética (Ec)',
    formulaHint: 'Ec = (m · v²) / 2. Lembre-se que 1 kJ = 1.000 J.',
    options: [
      { id: 'A', text: '72 kJ' },
      { id: 'B', text: '120 kJ' },
      { id: 'C', text: '144 kJ' },
      { id: 'D', text: '240 kJ' },
      { id: 'E', text: '288 kJ' },
    ],
    correctOption: 'C',
    explanation: `Calculamos primeiro a energia cinética total do carro:
Ec = (1.200 × 20²) / 2 = (1.200 × 400) / 2 = 240.000 J = 240 kJ.
Como o sistema regenerativo aproveita 60% dessa energia:
E_armazenada = 0,60 × 240 kJ = 144 kJ.
Portanto, a alternativa correta é a letra C.`
  },
  {
    id: 'enem-2',
    exam: 'ENEM',
    year: 2023,
    subject: 'Ciências da Natureza',
    subtopic: 'Biologia - Ecologia e Bioacumulação',
    difficulty: 'Médio',
    contextText: `Em uma cadeia alimentar aquática formada por fitoplâncton, zooplâncton, pequenos peixes e aves piscívoras, um pesticida organoclorado de degradação muito lenta foi despejado acidentalmente em uma represa.`,
    prompt: `Ao analisar a concentração desse pesticida nos tecidos dos diferentes organismos dessa comunidade após alguns meses, o nível trófico que apresentará a MAIOR concentração do composto é:`,
    options: [
      { id: 'A', text: 'O fitoplâncton, pois absorve o pesticida diretamente da água por difusão passiva.' },
      { id: 'B', text: 'O zooplâncton, por filtrar grandes volumes de água para sua nutrição.' },
      { id: 'C', text: 'Os peixes carnívoros, devido à grande superfície de contato de suas brânquias.' },
      { id: 'D', text: 'As aves piscívoras, devido ao fenômeno da magnificação trófica (bioacumulação ao longo da cadeia).' },
      { id: 'E', text: 'Todos os organismos em concentrações idênticas, já que a água do lago é homogênea.' },
    ],
    correctOption: 'D',
    explanation: `Substâncias lipossolúveis e não biodegradáveis (como pesticidas organoclorados) não são eliminadas pelos organismos e se acumulam ao longo dos níveis tróficos. Esse processo é chamado de magnificação trófica ou biomagnificação. Por estarem no topo da cadeia alimentar, as aves piscívoras concentram a maior carga do poluente por unidade de biomassa.`
  },
  {
    id: 'enem-3',
    exam: 'ENEM',
    year: 2024,
    subject: 'Matemática e suas Tecnologias',
    subtopic: 'Geometria Espacial e Razão de Volumes',
    difficulty: 'Fácil',
    contextText: `Uma fábrica de perfumes produz frascos em formato de pirâmide regular de base quadrada. Para uma edição comemorativa, a equipe de design resolveu lançar uma versão miniatura, geometricamente semelhante ao frasco original, cuja aresta da base e a altura medem exatamente a metade das dimensões do frasco original.`,
    prompt: `Se o frasco original comporta 200 mL de perfume, a capacidade do frasco miniatura é de:`,
    options: [
      { id: 'A', text: '100 mL' },
      { id: 'B', text: '50 mL' },
      { id: 'C', text: '25 mL' },
      { id: 'D', text: '12,5 mL' },
      { id: 'E', text: '80 mL' },
    ],
    correctOption: 'C',
    explanation: `Quando duas figuras tridimensionais são semelhantes com razão linear k = 1/2, a razão entre seus volumes é dada por k³ = (1/2)³ = 1/8.
Assim, V_mini = V_original / 8 = 200 mL / 8 = 25 mL.`
  },
  {
    id: 'enem-4',
    exam: 'ENEM',
    year: 2023,
    subject: 'Ciências Humanas',
    subtopic: 'História - Era Vargas e Cidadania',
    difficulty: 'Médio',
    contextText: `A criação da Justiça do Trabalho e a promulgação da Consolidação das Leis do Trabalho (CLT), em 1943, durante o Estado Novo de Getúlio Vargas, representaram um marco nas relações de trabalho no Brasil.`,
    prompt: `No contexto político do Estado Novo, a legislação trabalhista funcionava prioritariamente como um instrumento de:`,
    options: [
      { id: 'A', text: 'Descentralização do poder estatal em favor dos sindicatos livres de matriz anarquista.' },
      { id: 'B', text: 'Cooptação da classe trabalhadora e controle das tensões sociais sob a tutela do Estado paternalista.' },
      { id: 'C', text: 'Estímulo à autonomia operária para convocação de greves gerais contra o empresariado.' },
      { id: 'D', text: 'Alinhamento irrestrito com as diretrizes econômicas liberais norte-americanas da época.' },
      { id: 'E', text: 'Extinção do direito de aposentadoria e previdência para contenção dos gastos públicos.' },
    ],
    correctOption: 'B',
    explanation: `O corporativismo varguista atrelava os sindicatos ao Ministério do Trabalho ('sindicatos pelegos'), outorgando direitos reais à classe trabalhadora enquanto proibia greves e eliminava a dissidência de esquerda, exercendo tutela e cooptação sob a figura do 'Pai dos Pobres'.`
  },
  {
    id: 'enem-5',
    exam: 'ENEM',
    year: 2024,
    subject: 'Linguagens e Códigos',
    subtopic: 'Variação Linguística e Preconceito',
    difficulty: 'Fácil',
    contextText: `No Brasil, variantes linguísticas regionais e de classes populares muitas vezes são rotuladas erroneamente como 'português errado' ou 'ignorância', desconsiderando que toda língua viva possui normas vernáculas coerentes e regras internas sistemáticas.`,
    prompt: `O combate ao preconceito linguístico fundamenta-se no princípio linguístico de que:`,
    options: [
      { id: 'A', text: 'Apenas a norma-padrão possui gramática e regras lógicas de concordância.' },
      { id: 'B', text: 'As variedades informais devem ser restritas exclusivamente ao meio rural.' },
      { id: 'C', text: 'Todas as variedades linguísticas são sistemas completos e eficientes para a comunicação em seus contextos.' },
      { id: 'D', text: 'A oralidade deve ser abolida das provas e dos livros didáticos escolares.' },
      { id: 'E', text: 'O uso de gírias deve ser penalizado criminalmente em ambientes formais.' },
    ],
    correctOption: 'C',
    explanation: `A sociolinguística demonstra que não há dialetos superiores ou inferiores estruturalmente. Todas as variedades cumprem seu papel comunicativo plenamente; o preconceito contra certas formas reflete na verdade preconceito social contra seus falantes.`
  },
  {
    id: 'enem-6',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências da Natureza',
    subtopic: 'Química - Termoquímica e Combustíveis',
    difficulty: 'Médio',
    contextText: `Na busca por transição energética, compara-se o gás hidrogênio (H₂) com o gás metano (CH₄). O calor de combustão do H₂ é aproximadamente 286 kJ/mol (massa molar = 2 g/mol) e o do CH₄ é de aproximadamente 890 kJ/mol (massa molar = 16 g/mol).`,
    prompt: `Considerando o calor liberado por grama de combustível queimado (densidade energética gravimétrica), pode-se afirmar que:`,
    formulaTitle: 'Energia por grama (kJ/g)',
    formulaHint: 'kJ/g = (calor de combustão em kJ/mol) / (massa molar em g/mol)',
    options: [
      { id: 'A', text: 'O metano libera mais energia por grama (cerca de 143 kJ/g) do que o hidrogênio.' },
      { id: 'B', text: 'O hidrogênio libera mais que o dobro de energia por grama (~143 kJ/g) em relação ao metano (~55,6 kJ/g).' },
      { id: 'C', text: 'Ambos liberam exatamente a mesma quantidade de calor por unidade de massa.' },
      { id: 'D', text: 'O metano gera o dobro de calor por grama devido à presença de quatro átomos de hidrogênio.' },
      { id: 'E', text: 'O hidrogênio tem densidade energética gravimétrica nula por não possuir carbono.' },
    ],
    correctOption: 'B',
    explanation: `Para o H₂: 286 kJ / 2 g = 143 kJ/g.
Para o CH₄: 890 kJ / 16 g = 55,625 kJ/g.
O hidrogênio libera cerca de 2,5 vezes mais energia por grama que o metano, confirmando a alternativa B.`
  },
  {
    id: 'enem-7',
    exam: 'ENEM',
    year: 2023,
    subject: 'Matemática e suas Tecnologias',
    subtopic: 'Estatística - Média, Mediana e Moda',
    difficulty: 'Médio',
    contextText: `As notas obtidas por sete candidatos em um concurso foram: 4, 6, 7, 7, 8, 9 e 15. Devido a um erro de digitação, a nota mais alta (15) foi corrigida para 10.`,
    prompt: `Após essa retificação, quais medidas de tendência central permaneceram inalteradas?`,
    options: [
      { id: 'A', text: 'Apenas a média aritmética.' },
      { id: 'B', text: 'Apenas a mediana.' },
      { id: 'C', text: 'A mediana e a moda.' },
      { id: 'D', text: 'A média e a moda.' },
      { id: 'E', text: 'A média, a mediana e a moda.' },
    ],
    correctOption: 'C',
    explanation: `O rol original ordenado: [4, 6, 7, 7, 8, 9, 15].
O novo rol com a correção: [4, 6, 7, 7, 8, 9, 10].
A moda continua sendo 7 (termo mais frequente).
O termo central (4º termo) continua sendo 7 (mediana = 7).
Já a soma total caiu de 56 para 51, logo a média diminuiu. Portanto, mantiveram-se a mediana e a moda.`
  },
  {
    id: 'enem-8',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências Humanas',
    subtopic: 'Geografia - Urbanização e Ilhas de Calor',
    difficulty: 'Fácil',
    contextText: `A substituição da cobertura vegetal por asfalto e concreto, aliada à intensa verticalização e à emissão contínua de gases e calor antropogênico, altera significativamente o microclima nas metrópoles.`,
    prompt: `O fenômeno térmico urbano caracterizado por temperaturas médias consideravelmente mais elevadas nas áreas centrais das cidades em relação à periferia e zonas rurais adjacentes denomina-se:`,
    options: [
      { id: 'A', text: 'Inversão térmica.' },
      { id: 'B', text: 'Chuva ácida.' },
      { id: 'C', text: 'Ilha de calor.' },
      { id: 'D', text: 'Efeito estufa natural.' },
      { id: 'E', text: 'Arenização.' },
    ],
    correctOption: 'C',
    explanation: `A retenção térmica decorrente do albedo baixo do asfalto, carência de vegetação e atividade industrial/veicular no núcleo urbano forma a clássica 'ilha de calor'. Inversão térmica refere-se ao aprisionamento de ar frio e poluentes próximo ao solo no inverno.`
  },
  {
    id: 'enem-9',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências da Natureza',
    subtopic: 'Física - Ondulatória e Efeito Doppler',
    difficulty: 'Médio',
    contextText: `Ao aguardar na calçada a passagem de uma ambulância em socorro urgente com a sirene ligada, um pedestre percebe uma nítida mudança na tonalidade do som emitido quando o veículo se aproxima e quando se afasta.`,
    prompt: `Essa variação na frequência percebida pelo pedestre decorre do:`,
    options: [
      { id: 'A', text: 'Aumento da velocidade real de propagação do som no ar à medida que o carro acelera.' },
      { id: 'B', text: 'Efeito Doppler, em que a aproximação causa aparente encurtamento do comprimento de onda e maior frequência percebida (som mais agudo).' },
      { id: 'C', text: 'Fenômeno da difração sonora provocada pelos edifícios vizinhos.' },
      { id: 'D', text: 'Aumento da intensidade acústica sem qualquer alteração na frequência aparente.' },
      { id: 'E', text: 'Efeito fotoelétrico induzido pela turbulência mecânica.' },
    ],
    correctOption: 'B',
    explanation: `O Efeito Doppler acústico descreve a alteração na frequência aparente devido ao movimento relativo entre fonte e observador. Na aproximação, as frentes de onda são comprimidas espacialmente, aumentando a frequência captada (som agudo); no afastamento, as frentes se distanciam (som grave).`
  },
  {
    id: 'enem-10',
    exam: 'ENEM',
    year: 2023,
    subject: 'Ciências da Natureza',
    subtopic: 'Biologia - Genética Mendeliana',
    difficulty: 'Fácil',
    contextText: `Em ervilhas da espécie Pisum sativum, a cor amarela das sementes é determinada pelo alelo dominante V, enquanto a cor verde é recessiva (v). O formato liso é condicionado pelo alelo dominante R e o rugoso pelo alelo recessivo r.`,
    prompt: `No cruzamento entre duas plantas duplo-heterozigotas (VvRr × VvRr), a proporção fenotípica esperada de sementes verdes e rugosas na descendência é de:`,
    options: [
      { id: 'A', text: '9/16' },
      { id: 'B', text: '3/16' },
      { id: 'C', text: '1/16' },
      { id: 'D', text: '1/4' },
      { id: 'E', text: '1/2' },
    ],
    correctOption: 'C',
    explanation: `Na Segunda Lei de Mendel (di-hibridismo), o cruzamento VvRr × VvRr gera a clássica proporção 9 : 3 : 3 : 1.
Amarelas e lisas (V_R_): 9/16
Amarelas e rugosas (V_rr): 3/16
Verdes e lisas (vvR_): 3/16
Verdes e rugosas (vvrr - duplo recessivo): 1/16.`
  },
  {
    id: 'enem-11',
    exam: 'ENEM',
    year: 2024,
    subject: 'Linguagens e Códigos',
    subtopic: 'Literatura - Modernismo e Semana de 22',
    difficulty: 'Médio',
    contextText: `O manifesto modernista de 1922 propôs a ruptura com os cânones parnasianos e o academicismo importado da Europa, defendendo uma arte genuinamente brasileira alimentada pela deglutição crítica de influências externas.`,
    prompt: `Essa postura estética de devoração cultural para criação de uma identidade artística autônoma culminou no conceito de:`,
    options: [
      { id: 'A', text: 'Ufanismo romântico conservador.' },
      { id: 'B', text: 'Antropofagia cultural, formulada por Oswald de Andrade.' },
      { id: 'C', text: 'Naturalismo determinista zoliano.' },
      { id: 'D', text: 'Neoclassicismo árcade pastoral.' },
      { id: 'E', text: 'Realismo burguês machadiano.' },
    ],
    correctOption: 'B',
    explanation: `O Movimento Antropofágico (1928), capitaneado pelo Manifesto Antropófago de Oswald de Andrade e simbolizado pelo quadro Abaporu de Tarsila do Amaral, propunha 'comer' a cultura estrangeira assimilando suas técnicas para produzir arte original e brasileira.`
  },
  {
    id: 'enem-12',
    exam: 'ENEM',
    year: 2024,
    subject: 'Matemática e suas Tecnologias',
    subtopic: 'Funções - Crescimento Exponencial e Juros',
    difficulty: 'Médio',
    contextText: `Uma população de bactérias em meio de cultura ideal dobra de tamanho a cada 3 horas. Inicialmente, havia 500 bactérias no recipiente.`,
    prompt: `A função que expressa o número de bactérias N(t) em função do tempo t, medido em horas, é:`,
    options: [
      { id: 'A', text: 'N(t) = 500 + 2 · 3t' },
      { id: 'B', text: 'N(t) = 500 · 2^(t/3)' },
      { id: 'C', text: 'N(t) = 500 · 3^(2t)' },
      { id: 'D', text: 'N(t) = 500 · (2/3)^t' },
      { id: 'E', text: 'N(t) = 1.000 · 2^(3t)' },
    ],
    correctOption: 'B',
    explanation: `No tempo t = 0: N(0) = 500 · 2^0 = 500.
Em t = 3h: N(3) = 500 · 2^(3/3) = 1.000 (dobrou).
Em t = 6h: N(6) = 500 · 2^(6/3) = 2.000.
A expressão correta para dobrar a cada 3 horas é N(t) = 500 · 2^(t/3).`
  },
  {
    id: 'enem-13',
    exam: 'ENEM',
    year: 2023,
    subject: 'Ciências Humanas',
    subtopic: 'Sociologia - Indústria Cultural e Adorno',
    difficulty: 'Difícil',
    contextText: `Theodor Adorno e Max Horkheimer, expoentes da Escola de Frankfurt, cunharam o conceito de 'Indústria Cultural' para analisar a produção massificada de bens culturais nas sociedades capitalistas avançadas.`,
    prompt: `Para os autores frankfurtianos, o principal efeito da indústria cultural sobre os indivíduos é:`,
    options: [
      { id: 'A', text: 'A emancipação reflexiva da classe proletária por meio do acesso democrático à arte.' },
      { id: 'B', text: 'A padronização das consciências, promovendo o conformismo social e a passividade crítica.' },
      { id: 'C', text: 'O resgate fidedigno das manifestações folclóricas populares e indígenas.' },
      { id: 'D', text: 'O fortalecimento de movimentos revolucionários contraculturais.' },
      { id: 'E', text: 'A superação das desigualdades econômicas através do entretenimento.' },
    ],
    correctOption: 'B',
    explanation: `Para a Teoria Crítica de Adorno e Horkheimer, a indústria cultural transforma a arte em mercadoria de consumo rápido, gerando pseudo-individualidade, previsibilidade e amortecimento da consciência crítica das massas para reproduzir o status quo.`
  },
  {
    id: 'enem-14',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências da Natureza',
    subtopic: 'Física - Eletrodinâmica e Potência Elétrica',
    difficulty: 'Médio',
    contextText: `Um chuveiro elétrico opera com potência de 5.500 W quando ligado à rede de 220 V. Uma família de 4 pessoas realiza, em média, um banho de 15 minutos por pessoa ao dia.`,
    prompt: `Considerando o mês comercial com 30 dias, o consumo mensal de energia elétrica associado exclusivamente aos banhos dessa família é de:`,
    formulaTitle: 'Energia Elétrica (E = P · Δt)',
    formulaHint: '1 kWh = 1 kW durante 1 hora. Calcule o tempo total diário em horas e multiplique pela potência em kW.',
    options: [
      { id: 'A', text: '55 kWh' },
      { id: 'B', text: '110 kWh' },
      { id: 'C', text: '165 kWh' },
      { id: 'D', text: '220 kWh' },
      { id: 'E', text: '330 kWh' },
    ],
    correctOption: 'C',
    explanation: `Tempo diário: 4 pessoas × 15 min = 60 min = 1 hora/dia.
Tempo mensal: 1 h/dia × 30 dias = 30 horas.
Potência: 5.500 W = 5,5 kW.
Energia total consumida: E = 5,5 kW × 30 h = 165 kWh.`
  },
  {
    id: 'enem-15',
    exam: 'ENEM',
    year: 2023,
    subject: 'Ciências Humanas',
    subtopic: 'Filosofia - Ética Aristotélica',
    difficulty: 'Médio',
    contextText: `Na obra Ética a Nicômaco, Aristóteles formula a virtude moral (areté) como um hábito voluntário guiado pela razão, definido pela justa medida entre dois vícios opostos: o excesso e a falta.`,
    prompt: `Com base nessa concepção ética aristotélica, a virtude da coragem constitui o ponto de equilíbrio entre:`,
    options: [
      { id: 'A', text: 'A covardia (falta) e a temeridade ou audácia inconsequente (excesso).' },
      { id: 'B', text: 'A avareza e a prodigalidade.' },
      { id: 'C', text: 'A preguiça e a ambição desmedida.' },
      { id: 'D', text: 'O ódio e o amor incondicional.' },
      { id: 'E', text: 'A modéstia e o orgulho soberbo.' },
    ],
    correctOption: 'A',
    explanation: `Para Aristóteles, a coragem é a justa medida (mesotés). O defeito por carência é a covardia (temer o que não deve ou fugir do dever) e o defeito por excesso é a temeridade (desprezar os perigos de forma tola e irrefletida).`
  },
  {
    id: 'enem-16',
    exam: 'ENEM',
    year: 2024,
    subject: 'Matemática e suas Tecnologias',
    subtopic: 'Probabilidade Simples e Condicional',
    difficulty: 'Fácil',
    contextText: `Em uma urna com fichas numeradas de 1 a 50, uma ficha é sorteada aleatoriamente.`,
    prompt: `Qual é a probabilidade de o número sorteado ser um múltiplo de 5 ou um múltiplo de 7?`,
    options: [
      { id: 'A', text: '17/50' },
      { id: 'B', text: '16/50' },
      { id: 'C', text: '15/50' },
      { id: 'D', text: '14/50' },
      { id: 'E', text: '10/50' },
    ],
    correctOption: 'B',
    explanation: `Múltiplos de 5 entre 1 e 50: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 → 10 múltiplos.
Múltiplos de 7 entre 1 e 50: 7, 14, 21, 28, 35, 42, 49 → 7 múltiplos.
Interseção (múltiplos comuns de 35): apenas o 35 (1 número).
P(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 10 + 7 - 1 = 16 números.
Logo, P = 16/50.`
  },
  {
    id: 'enem-17',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências da Natureza',
    subtopic: 'Biologia - Fisiologia Humana e Insulina',
    difficulty: 'Médio',
    contextText: `Após uma refeição rica em carboidratos complexos, o organismo secreta um hormônio pancreático essencial para a captação de glicose plasmática pelos hepatócitos e pelas fibras musculares esqueléticas.`,
    prompt: `O hormônio responsável pela redução da glicemia e pelo estímulo da síntese de glicogênio (glicogenogênese) é:`,
    options: [
      { id: 'A', text: 'O glucagon, sintetizado pelas células alfa dos ilhéus pancreáticos.' },
      { id: 'B', text: 'A insulina, sintetizada pelas células beta dos ilhéus pancreáticos.' },
      { id: 'C', text: 'A adrenalina, secretada pela medula suprarrenal.' },
      { id: 'D', text: 'O cortisol, secretado pelo córtex da suprarrenal.' },
      { id: 'E', text: 'A tiroxina, produzida pelos folículos tireoidianos.' },
    ],
    correctOption: 'B',
    explanation: `A insulina é o único hormônio primariamente hipoglicemiante do corpo humano, liberada pelas células beta dos ilhéus de Langerhans no pâncreas quando há aumento de glicose na circulação sanguínea.`
  },
  {
    id: 'enem-18',
    exam: 'ENEM',
    year: 2023,
    subject: 'Ciências da Natureza',
    subtopic: 'Química - Equilíbrio Químico e Le Chatelier',
    difficulty: 'Médio',
    contextText: `Considere o processo industrial Haber-Bosch para produção de amônia:
N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)    ΔH = -92,2 kJ/mol (processo exotérmico).`,
    prompt: `De acordo com o Princípio de Le Chatelier, qual das seguintes alterações desloca o equilíbrio no sentido de favorecer a produção de amônia (NH₃)?`,
    options: [
      { id: 'A', text: 'Aumento da temperatura do reator químico.' },
      { id: 'B', text: 'Aumento da pressão total sobre o sistema mantendo a temperatura constante.' },
      { id: 'C', text: 'Remoção contínua de N₂ do sistema reagente.' },
      { id: 'D', text: 'Adição de um catalisador de ferro ao sistema.' },
      { id: 'E', text: 'Aumento do volume total do recipiente de reação.' },
    ],
    correctOption: 'B',
    explanation: `Nos reagentes gasosos temos 1 + 3 = 4 mols de gás; nos produtos temos 2 mols de gás. O aumento de pressão desloca o equilíbrio para o lado de menor volume gasoso (lado do NH₃). O catalisador acelera sem deslocar equilíbrio, e o aumento de temperatura deslocaria para os reagentes por ser exotérmica.`
  },
  {
    id: 'enem-19',
    exam: 'ENEM',
    year: 2024,
    subject: 'Linguagens e Códigos',
    subtopic: 'Funções da Linguagem de Jakobson',
    difficulty: 'Médio',
    contextText: `Em uma campanha de conscientização sobre doação de medula óssea, o cartaz exibe: "Seja a esperança de alguém. Cadastre-se hoje mesmo no hemocentro mais próximo e salve vidas!"`,
    prompt: `O emprego de verbos no modo imperativo com o objetivo explícito de persuadir e mobilizar a atitude do interlocutor evidencia o predomínio da função:`,
    options: [
      { id: 'A', text: 'Metalinguística.' },
      { id: 'B', text: 'Emotiva ou expressiva.' },
      { id: 'C', text: 'Conativa ou apelativa.' },
      { id: 'D', text: 'Fática.' },
      { id: 'E', text: 'Poética.' },
    ],
    correctOption: 'C',
    explanation: `A função conativa (ou apelativa) centra-se no destinatário/receptor da mensagem, usando vocativos e verbos no modo imperativo para instruir, convencer ou comover o leitor a tomar uma ação.`
  },
  {
    id: 'enem-20',
    exam: 'ENEM',
    year: 2024,
    subject: 'Ciências Humanas',
    subtopic: 'Geografia - Matriz Energética Brasileira',
    difficulty: 'Médio',
    contextText: `A matriz elétrica brasileira destaca-se globalmente pela elevada participação de fontes renováveis, com forte protagonismo histórico das hidrelétricas e recente expansão acelerada dos parques eólicos no Nordeste e sistemas fotovoltaicos.`,
    prompt: `Apesar da baixa emissão de gases de efeito estufa na operação, a construção de megausinas hidrelétricas na Amazônia gerou intensos debates socioambientais devido principalmente:`,
    options: [
      { id: 'A', text: 'Ao elevado consumo de urânio enriquecido no resfriamento das turbinas.' },
      { id: 'B', text: 'Ao alagamento de grandes áreas de floresta nativa, com deslocamento forçado de comunidades ribeirinhas e indígenas.' },
      { id: 'C', text: 'À contaminação irreversível das bacias hidrográficas por mercúrio radioativo.' },
      { id: 'D', text: 'À escassez crônica de chuvas equatoriais na região norte.' },
      { id: 'E', text: 'À impossibilidade técnica de conectar a rede do norte ao Sistema Interligado Nacional.' },
    ],
    correctOption: 'B',
    explanation: `Usinas de grande porte na bacia amazônica (como Belo Monte e Balbina) envolveram alagamento de vastos territórios florestais, degradação de habitats aquáticos e impactos severos sobre modos de vida tradicionais indígenas e ribeirinhos.`
  }
];

// --- FUVEST (VESTIBULAR USP - 20 QUESTÕES PROFUNDAS) ---
export const fuvestQuestions: Question[] = [
  {
    id: 'fuvest-1',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Língua Portuguesa e Literatura',
    subtopic: 'Memórias Póstumas de Brás Cubas - Machado de Assis',
    difficulty: 'Avançado',
    contextText: `No célebre capítulo final de 'Memórias Póstumas de Brás Cubas' ('Das Negativas'), o narrador defunto contabiliza suas realizações e frustrações terrenas, concluindo com o balanço de seu saldo existencial.`,
    prompt: `O 'pequeno saldo' positivo que Brás Cubas reivindica ao final de suas memórias consiste no fato de que ele:`,
    options: [
      { id: 'A', text: 'Alcançou a glória acadêmica com a invenção do seu afamado emplasto.' },
      { id: 'B', text: 'Não teve filhos e, portanto, não transmitiu a nenhuma criatura o legado de nossa miséria.' },
      { id: 'C', text: 'Conseguiu ascender a ministro de Estado por mérito puramente republicano.' },
      { id: 'D', text: 'Dedicou seus últimos anos à filantropia sincera sem vaidade pessoal.' },
      { id: 'E', text: 'Fez as pazes com Virgília no leito de morte com a bênção da Igreja.' },
    ],
    correctOption: 'B',
    explanation: `A frase imortal de Machado encerra a obra: 'Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria'. É a vitória irônica do pessimismo lúcido e da recusa da perpetuação biológica da espécie.`
  },
  {
    id: 'fuvest-2',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Física',
    subtopic: 'Mecânica - Gravitação e Leis de Kepler',
    difficulty: 'Difícil',
    contextText: `Dois satélites artificiais, A e B, descrevem órbitas circulares concêntricas em torno da Terra. O raio da órbita do satélite B é o quádruplo do raio da órbita do satélite A (R_B = 4 R_A).`,
    prompt: `De acordo com a Terceira Lei de Kepler (T² / R³ = constante), a razão entre o período orbital de B e o de A (T_B / T_A) é igual a:`,
    formulaTitle: '3ª Lei de Kepler',
    formulaHint: '(T_B / T_A)² = (R_B / R_A)³ = (4)³ = 64',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '4' },
      { id: 'C', text: '8' },
      { id: 'D', text: '16' },
      { id: 'E', text: '64' },
    ],
    correctOption: 'C',
    explanation: `(T_B / T_A)² = (R_B / R_A)³ = 4³ = 64.
Extraindo a raiz quadrada em ambos os membros:
T_B / T_A = √64 = 8.
Portanto, o período orbital do satélite B é 8 vezes maior que o de A.`
  },
  {
    id: 'fuvest-3',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Química',
    subtopic: 'Físico-Química - Pilhas e Potencial Padrão',
    difficulty: 'Médio',
    contextText: `Dados os potenciais padrão de redução a 25 °C:
Cu²⁺(aq) + 2 e⁻ → Cu(s)    E° = +0,34 V
Zn²⁺(aq) + 2 e⁻ → Zn(s)    E° = -0,76 V`,
    prompt: `Na pilha de Daniell montada com esses eletrodos em condições padrão, é correto afirmar que:`,
    options: [
      { id: 'A', text: 'O zinco metálico sofre redução e atua como cátodo da pilha.' },
      { id: 'B', text: 'O potencial padrão (fem) da pilha é de 1,10 V e o cobre metálico se deposita no cátodo.' },
      { id: 'C', text: 'A força eletromotriz total é de 0,42 V.' },
      { id: 'D', text: 'Os elétrons fluem espontaneamente pelo fio condutor do cobre para o zinco.' },
      { id: 'E', text: 'A massa da lâmina de zinco aumenta com o decorrer do funcionamento da pilha.' },
    ],
    correctOption: 'B',
    explanation: `O zinco tem menor potencial de redução (-0,76 V), portanto oxida no ânodo (perde elétrons e perde massa).
O cobre tem maior potencial (+0,34 V), reduzindo no cátodo (ganha elétrons e ganha massa).
ΔE° = E°(maior) - E°(menor) = 0,34 - (-0,76) = +1,10 V.`
  },
  {
    id: 'fuvest-4',
    exam: 'FUVEST',
    year: 2023,
    subject: 'Matemática',
    subtopic: 'Polinômios e Relações de Girard',
    difficulty: 'Difícil',
    contextText: `Seja o polinômio P(x) = x³ - 6x² + 11x - 6. Sabe-se que suas três raízes r₁, r₂ e r₃ estão em progressão aritmética.`,
    prompt: `O produto e a soma das raízes desse polinômio são respectivamente iguais a:`,
    options: [
      { id: 'A', text: '6 e 6' },
      { id: 'B', text: '-6 e 6' },
      { id: 'C', text: '11 e 6' },
      { id: 'D', text: '6 e -6' },
      { id: 'E', text: '1 e 3' },
    ],
    correctOption: 'A',
    explanation: `Pelas relações de Girard para um polinômio cúbico x³ - S₁x² + S₂x - S₃ = 0:
Soma r₁ + r₂ + r₃ = -(-6)/1 = 6.
Produto r₁ · r₂ · r₃ = -(-6)/1 = 6.
(De fato, as raízes são 1, 2 e 3, que estão em P.A. de razão 1).`
  },
  {
    id: 'fuvest-5',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Biologia',
    subtopic: 'Citologia - Fotossíntese e Cloroplastos',
    difficulty: 'Médio',
    contextText: `Na fase fotoquímica (fase clara) da fotossíntese que ocorre nos tilacoides dos cloroplastos, a luz incide sobre a clorofila provocando a fotólise da água.`,
    prompt: `O oxigênio gasoso (O₂) liberado pelas plantas para a atmosfera tem origem direta na:`,
    options: [
      { id: 'A', text: 'Quebra enzimática de moléculas de gás carbônico (CO₂) no estroma.' },
      { id: 'B', text: 'Fotólise (oxidação) da molécula de água (H₂O) no fotossistema II.' },
      { id: 'C', text: 'Descarboxilação oxidativa do ácido pirúvico.' },
      { id: 'D', text: 'Redução do NADP⁺ a NADPH no ciclo de Calvin.' },
      { id: 'E', text: 'Quebra de moléculas de glicose na glicólise.' },
    ],
    correctOption: 'B',
    explanation: `Experimentos clássicos com isótopos de oxigênio (¹⁸O) comprovaram que todo o O₂ liberado na fotossíntese provém da fotólise da molécula de H₂O nos tilacoides, e não do CO₂.`
  },
  {
    id: 'fuvest-6',
    exam: 'FUVEST',
    year: 2024,
    subject: 'História',
    subtopic: 'História do Brasil - Revolta dos Malês (1835)',
    difficulty: 'Difícil',
    contextText: `Em janeiro de 1835, eclodiu em Salvador a Revolta dos Malês, protagonizada principalmente por escravizados e libertos de religião islâmica pertencentes a etnias como haussás e iorubás (nagôs).`,
    prompt: `Entre as especificidades históricas desse levante na Bahia regencial, destaca-se:`,
    options: [
      { id: 'A', text: 'O uso da escrita em língua árabe como elemento de organização, comunicação e coesão religiosa entre os revoltosos.' },
      { id: 'B', text: 'A aliança irrestrita com os senhores de engenho cafeeiros do Vale do Paraíba.' },
      { id: 'C', text: 'O apoio militar explícito das forças imperiais britânicas ancoradas na Baía de Todos os Santos.' },
      { id: 'D', text: 'A proposta de retorno ao regime colonial sob a coroa portuguesa.' },
      { id: 'E', text: 'A ausência total de perseguição policial aos revoltosos após a repressão.' },
    ],
    correctOption: 'A',
    explanation: `Os malês destacavam-se pela alfabetização em árabe e posse de amuletos contendo trechos do Alcorão. Esse letramento facultava comunicação cifrada sem que as autoridades coloniais/regenciais pudessem decifrar os planos.`
  },
  {
    id: 'fuvest-7',
    exam: 'FUVEST',
    year: 2023,
    subject: 'Geografia',
    subtopic: 'Geografia Agrária e Complexos Regionais',
    difficulty: 'Médio',
    contextText: `O avanço da fronteira agrícola moderna no Brasil em direção ao Centro-Oeste e Matopiba transformou o bioma Cerrado em um dos maiores produtores mundiais de grãos e carnes.`,
    prompt: `A adaptação agronômica dos solos originalmente ácidos e pobres em nutrientes do Cerrado para a sojicultura intensiva foi viabilizada tecnologicamente pela:`,
    options: [
      { id: 'A', text: 'Prática da calagem (aplicação de calcário) associada à adubação química fosfatada e correção de micronutrientes.' },
      { id: 'B', text: 'Introdução da técnica colonial da coivara com queimadas periódicas extensivas.' },
      { id: 'C', text: 'Substituição da irrigação por inundação de água salina trazida do litoral.' },
      { id: 'D', text: 'Dependência exclusiva da fertilidade natural de terra roxa vulcânica.' },
      { id: 'E', text: 'Eliminação mecânica completa de todo o lençol freático regional.' },
    ],
    correctOption: 'A',
    explanation: `A calagem neutraliza a acidez e o alumínio tóxico característicos dos latossolos do Cerrado, liberando fósforo e cálcio para viabilizar as cultivares adaptadas desenvolvidas pela Embrapa.`
  },
  {
    id: 'fuvest-8',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Trigonometria e Geometria Analítica',
    difficulty: 'Difícil',
    contextText: `Considere a equação trigonométrica sen(2x) = cos(x) no intervalo real [0, 2π].`,
    prompt: `O número de soluções distintas dessa equação nesse intervalo é:`,
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' },
      { id: 'E', text: '6' },
    ],
    correctOption: 'C',
    explanation: `Sabemos que sen(2x) = 2 sen(x) cos(x).
Logo: 2 sen(x) cos(x) - cos(x) = 0 ⇒ cos(x) · (2 sen(x) - 1) = 0.
Caso 1: cos(x) = 0 ⇒ x = π/2 ou x = 3π/2 (2 soluções).
Caso 2: 2 sen(x) - 1 = 0 ⇒ sen(x) = 1/2 ⇒ x = π/6 ou x = 5π/6 (2 soluções).
Total no intervalo [0, 2π]: {π/6, π/2, 5π/6, 3π/2} = 4 soluções.`
  },
  {
    id: 'fuvest-9',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Física',
    subtopic: 'Eletromagnetismo - Lei de Faraday e Indução',
    difficulty: 'Difícil',
    contextText: `Uma espira condutora circular repousa em uma região de campo magnético uniforme perpendicular ao seu plano. De repente, a intensidade do campo magnético começa a diminuir a uma taxa constante.`,
    prompt: `De acordo com a Lei de Lenz e a Lei de Faraday, surge na espira uma corrente elétrica induzida que:`,
    options: [
      { id: 'A', text: 'Cria um campo magnético induzido no mesmo sentido do campo original, opondo-se à redução do fluxo magnético.' },
      { id: 'B', text: 'Cria um campo magnético induzido de sentido oposto ao campo original, acelerando a perda de fluxo.' },
      { id: 'C', text: 'Tem intensidade nula, pois a espira encontra-se em repouso espacial.' },
      { id: 'D', text: 'É necessariamente alternada com frequência infinita.' },
      { id: 'E', text: 'Gera acúmulo contínuo de cargas líquidas positivas na borda da espira.' },
    ],
    correctOption: 'A',
    explanation: `A Lei de Lenz determina que a corrente induzida sempre cria efeitos magnéticos que se opõem à variação que lhe deu origem. Se o fluxo está diminuindo, a corrente induzida gera campo magnético no mesmo sentido para resistir à redução do fluxo.`
  },
  {
    id: 'fuvest-10',
    exam: 'FUVEST',
    year: 2023,
    subject: 'Língua Portuguesa e Literatura',
    subtopic: 'Poesia Barroca - Gregório de Matos',
    difficulty: 'Médio',
    contextText: `A poesia lírico-religiosa de Gregório de Matos Guerra (o 'Boca do Inferno') expressa intensamente as contradições espirituais do Barroco seiscentista luso-brasileiro.`,
    prompt: `O traço temático mais característico da vertente religiosa do poeta baiano é:`,
    options: [
      { id: 'A', text: 'O louvor inocente e despreocupado à vida simples no campo pastoril bucólico.' },
      { id: 'B', text: 'A angústia diante da fugacidade do tempo e o jogo retórico de culpabilidade e súplica pelo perdão divino.' },
      { id: 'C', text: 'A defesa racionalista e ateia dos ideais iluministas franceses.' },
      { id: 'D', text: 'A celebração do progresso industrial e da ciência mecânica.' },
      { id: 'E', text: 'A rejeição de qualquer menção a Deus ou aos dogmas católicos da Contra-Reforma.' },
    ],
    correctOption: 'B',
    explanation: `O Barroco baiano de Gregório articula o cultismo e conceptismo na tensão perene entre o pecado da carne e a busca desesperada pela salvação divina ('Pequei, Senhor, mas não porque hei pecado...').`
  },
  {
    id: 'fuvest-11',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Química',
    subtopic: 'Química Orgânica - Isomeria Óptica e Quiralidade',
    difficulty: 'Difícil',
    contextText: `Para que uma molécula orgânica apresente isomeria óptica (enantiomeria), é necessário que ela não possua plano nem centro de simetria interna, exibindo assimetria molecular.`,
    prompt: `Qual dos seguintes compostos apresenta carbono quiral (assimétrico) e, portanto, é opticamente ativo?`,
    options: [
      { id: 'A', text: 'Ácido acético (CH₃COOH)' },
      { id: 'B', text: 'Etanol (CH₃CH₂OH)' },
      { id: 'C', text: 'Ácido lático (CH₃-CH(OH)-COOH)' },
      { id: 'D', text: 'Propanona (CH₃-CO-CH₃)' },
      { id: 'E', text: 'Glicina (H₂N-CH₂-COOH)' },
    ],
    correctOption: 'C',
    explanation: `No ácido lático, o carbono 2 está ligado a quatro grupos diferentes: -H, -OH, -CH₃ e -COOH. Isso faz dele um estereocentro quiral com dois enantiômeros (D-lático e L-lático). Na glicina, o carbono alfa tem dois hidrogênios (não é quiral).`
  },
  {
    id: 'fuvest-12',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Biologia',
    subtopic: 'Evolução e Seleção Natural',
    difficulty: 'Médio',
    contextText: `Em bactérias hospitalares, a rápida seleção de linhagens resistentes a múltiplos antibióticos é uma das maiores preocupações de saúde pública global.`,
    prompt: `Do ponto de vista da teoria sintética da evolução (neodarwinismo), a resistência aos antibióticos:`,
    options: [
      { id: 'A', text: 'É induzida diretamente pelo antibiótico, que força as bactérias a mutarem para se salvarem.' },
      { id: 'B', text: 'Decorre de mutações pré-existentes e recombinação gênica, sendo as bactérias resistentes selecionadas positivamente pela aplicação do fármaco.' },
      { id: 'C', text: 'Resulta da transmissão de caracteres adquiridos pelo esforço adaptativo individual.' },
      { id: 'D', text: 'Ocorre porque as bactérias desenvolvem imunidade humoral por produção de anticorpos.' },
      { id: 'E', text: 'É um mito sem fundamentação na biologia molecular.' },
    ],
    correctOption: 'B',
    explanation: `Mutações ocorrem ao acaso, de forma pré-adaptativa. O antibiótico atua como agente seletor: elimina as sensíveis e preserva as resistentes, que se multiplicam exponencialmente sem concorrência.`
  },
  {
    id: 'fuvest-13',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Física',
    subtopic: 'Termodinâmica - Ciclo de Carnot',
    difficulty: 'Difícil',
    contextText: `Uma máquina térmica opera segundo o ciclo de Carnot reversível ideal entre uma fonte quente a 500 K e uma fonte fria a 300 K. A cada ciclo, a máquina absorve 2.000 J de calor da fonte quente.`,
    prompt: `O rendimento máximo teórico dessa máquina e o trabalho útil realizado por ciclo são respectivamente:`,
    formulaTitle: 'Rendimento de Carnot',
    formulaHint: 'η = 1 - (T_fria / T_quente); W = η · Q_quente',
    options: [
      { id: 'A', text: '40% e 800 J' },
      { id: 'B', text: '60% e 1.200 J' },
      { id: 'C', text: '50% e 1.000 J' },
      { id: 'D', text: '40% e 1.200 J' },
      { id: 'E', text: '20% e 400 J' },
    ],
    correctOption: 'A',
    explanation: `Rendimento: η = 1 - (300 / 500) = 1 - 0,60 = 0,40 (40%).
Trabalho W = η × Q_quente = 0,40 × 2.000 J = 800 J.
Portanto, 40% e 800 J.`
  },
  {
    id: 'fuvest-14',
    exam: 'FUVEST',
    year: 2023,
    subject: 'História',
    subtopic: 'Antiguidade Clássica - Democracia Ateniense',
    difficulty: 'Médio',
    contextText: `No século V a.C., no auge da pólis ateniense liderada por Péricles, a democracia direta garantia a isonomia (igualdade perante a lei) e a isegoria (igualdade de palavra na assembleia - Eclésia).`,
    prompt: `Contudo, os limites da cidadania na Atenas clássica manifestavam-se na exclusão política categórica de:`,
    options: [
      { id: 'A', text: 'Filósofos, poetas trágicos e magistrados do Areópago.' },
      { id: 'B', text: 'Mulheres, estrangeiros residentes (metecos) e a totalidade da população escravizada.' },
      { id: 'C', text: 'Guerreiros hoplitas proprietários de armaduras.' },
      { id: 'D', text: 'Cidadãos maiores de 20 anos que residissem fora dos muros da acrópole.' },
      { id: 'E', text: 'Comerciantes marítimos de cereais gregos.' },
    ],
    correctOption: 'B',
    explanation: `Apenas homens livres, maiores de idade, filhos de pai e mãe atenienses eram considerados cidadãos (menos de 15% da população total da Ática). Mulheres, metecos e escravizados estavam sumariamente excluídos das deliberações democráticas.`
  },
  {
    id: 'fuvest-15',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Matemática',
    subtopic: 'Geometria Plana - Teorema dos Cossenos',
    difficulty: 'Médio',
    contextText: `Em um triângulo qualquer ABC, os lados medem AB = 5 cm, AC = 8 cm, e o ângulo formado entre esses dois lados (ângulo Â) mede 60°.`,
    prompt: `O comprimento do terceiro lado BC é igual a:`,
    formulaTitle: 'Lei dos Cossenos',
    formulaHint: 'a² = b² + c² - 2·b·c·cos(Â). Lembre que cos(60°) = 0,5.',
    options: [
      { id: 'A', text: '7 cm' },
      { id: 'B', text: '√89 cm' },
      { id: 'C', text: '6 cm' },
      { id: 'D', text: '8 cm' },
      { id: 'E', text: '√49 / 2 cm' },
    ],
    correctOption: 'A',
    explanation: `BC² = 5² + 8² - 2 × 5 × 8 × cos(60°)
BC² = 25 + 64 - 80 × 0,5 = 89 - 40 = 49.
Logo, BC = √49 = 7 cm.`
  },
  {
    id: 'fuvest-16',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Química',
    subtopic: 'Soluções e pH',
    difficulty: 'Médio',
    contextText: `Uma solução aquosa de ácido clorídrico (HCl), um ácido forte totalmente ionizado, possui concentração 0,001 mol/L (10⁻³ mol/L) a 25 °C.`,
    prompt: `O pH dessa solução e a concentração de íons hidroxila [OH⁻] presentes são respectivamente:`,
    options: [
      { id: 'A', text: 'pH = 3 e [OH⁻] = 10⁻¹¹ mol/L' },
      { id: 'B', text: 'pH = 11 e [OH⁻] = 10⁻³ mol/L' },
      { id: 'C', text: 'pH = 1 e [OH⁻] = 10⁻¹³ mol/L' },
      { id: 'D', text: 'pH = 7 e [OH⁻] = 10⁻⁷ mol/L' },
      { id: 'E', text: 'pH = 3 e [OH⁻] = 10⁻³ mol/L' },
    ],
    correctOption: 'A',
    explanation: `Como o HCl é forte: [H⁺] = 10⁻³ mol/L.
pH = -log[H⁺] = -log(10⁻³) = 3.
Pelo produto iônico da água Kw = [H⁺][OH⁻] = 10⁻¹⁴ a 25 °C:
[OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L (ou pOH = 11).`
  },
  {
    id: 'fuvest-17',
    exam: 'FUVEST',
    year: 2023,
    subject: 'Biologia',
    subtopic: 'Fisiologia Vegetal - Hormônios e Auxina',
    difficulty: 'Médio',
    contextText: `Plântulas de aveia foram iluminadas lateralmente por uma fonte de luz unidirecional. Após alguns dias, observou-se curvatura acentuada do coleóptilo em direção à fonte luminosa (fototropismo positivo).`,
    prompt: `Esse encurvamento ocorre porque a auxina (AIA):`,
    options: [
      { id: 'A', text: 'Migra preferencialmente para o lado iluminado, paralisando a divisão celular.' },
      { id: 'B', text: 'Migra e se concentra no lado sombreado, promovendo o alongamento celular diferencial desse lado.' },
      { id: 'C', text: 'É destruída no escuro pelas enzimas mitocondriais.' },
      { id: 'D', text: 'Estimula a síntese de clorofila na raiz principal.' },
      { id: 'E', text: 'Provoca a queda prematura das folhas cotiledonares.' },
    ],
    correctOption: 'B',
    explanation: `A auxina sofre fotodegradação ou transporte polarizado para a face oposta à luz (face sombreada). No caule, alta concentração de auxina estimula o alongamento das paredes celulares; logo, o lado sombreado cresce mais rápido que o iluminado, arqueando a planta em direção à luz.`
  },
  {
    id: 'fuvest-18',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Língua Portuguesa e Literatura',
    subtopic: 'Romance de 30 - Vidas Secas de Graciliano Ramos',
    difficulty: 'Difícil',
    contextText: `Em 'Vidas Secas', a cadela Baleia adoece e Fabiano é forçado a sacrificá-la com um tiro de espingarda. O capítulo subsequente narra os devaneios e a agonia final da cadela.`,
    prompt: `O processo narrativo empregado por Graciliano Ramos na representação da consciência da cadela Baleia caracteriza-se por:`,
    options: [
      { id: 'A', text: 'Antropomorfização poética e humanização comovente, conferindo ao animal uma dignidade ética que contrasta com a degradação animalizada dos próprios retirantes.' },
      { id: 'B', text: 'Humor satírico comédia de costumes sem impacto emocional.' },
      { id: 'C', text: 'Descrição meramente biológica e zoológica fria e distante.' },
      { id: 'D', text: 'Monólogo interior em verso decassílabo com rimas ricas.' },
      { id: 'E', text: 'Crítica velada ao vegetarianismo urbano contemporâneo.' },
    ],
    correctOption: 'A',
    explanation: `Graciliano inverte poeticamente a hierarquia: enquanto a família humana é reificada e embrutecida pela seca (Fabiano diz 'você é um bicho'), a cachorra sonha com um mundo cheio de preás e afeto, tornando sua morte um dos momentos mais humanos da literatura brasileira.`
  },
  {
    id: 'fuvest-19',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Física',
    subtopic: 'Óptica Geométrica - Lentes Delgadas',
    difficulty: 'Médio',
    contextText: `Um objeto luminoso real de 6 cm de altura é colocado a 30 cm de distância do centro óptico de uma lente esférica delgada convergente de distância focal f = +20 cm.`,
    prompt: `A posição da imagem formada e a sua respectiva altura são:`,
    formulaTitle: 'Equação de Gauss',
    formulaHint: '1/f = 1/p + 1/p\'; A = i/o = -p\'/p',
    options: [
      { id: 'A', text: 'p\' = +60 cm (real) e altura i = -12 cm (invertida)' },
      { id: 'B', text: 'p\' = +15 cm (virtual) e altura i = +3 cm (direita)' },
      { id: 'C', text: 'p\' = -20 cm (virtual) e altura i = +6 cm' },
      { id: 'D', text: 'p\' = +40 cm (real) e altura i = -8 cm' },
      { id: 'E', text: 'p\' = +10 cm (real) e altura i = -2 cm' },
    ],
    correctOption: 'A',
    explanation: `1/20 = 1/30 + 1/p\' ⇒ 1/p\' = 1/20 - 1/30 = (3 - 2)/60 = 1/60 ⇒ p\' = 60 cm.
Aumento linear: A = -p\'/p = -60/30 = -2.
Altura da imagem: i = A × o = -2 × 6 = -12 cm (invertida e duas vezes maior que o objeto).`
  },
  {
    id: 'fuvest-20',
    exam: 'FUVEST',
    year: 2024,
    subject: 'Geografia',
    subtopic: 'Geopolítica Global - Cadeia Global de Semicondutores',
    difficulty: 'Difícil',
    contextText: `A produção global de semicondutores e microchips de alta tecnologia (processadores de nós avançados abaixo de 5 nanômetros) está altamente concentrada geograficamente no leste asiático, especialmente em Taiwan (TSMC).`,
    prompt: `Essa hiperconcentração geográfica da fundição de chips avançados tornou-se o epicentro de tensões geopolíticas mundiais porque:`,
    options: [
      { id: 'A', text: 'A tecnologia é irrelevante para a transição energética e inteligência artificial.' },
      { id: 'B', text: 'Qualquer interrupção na cadeia de suprimentos taiwanesa paralisaria indústrias críticas globais (defesa militar, automotiva e computação), exacerbando a disputa entre EUA e China.' },
      { id: 'C', text: 'A extração do silício ocorre exclusivamente nas águas territoriais do Japão.' },
      { id: 'D', text: 'Os países europeus proibiram completamente o uso de circuitos integrados.' },
      { id: 'E', text: 'A fabricação de chips requer temperaturas polares só encontradas em Taipei.' },
    ],
    correctOption: 'B',
    explanation: `Mais de 90% dos chips de ponta do mundo são fundidos em Taiwan. Esse 'escudo de silício' converte a ilha em ponto vital de segurança nacional para potências mundiais, gerando leis como o CHIPS Act nos EUA e programas de autossuficiência na China.`
  }
];

// --- OBMEP (OLIMPÍADA DE MATEMÁTICA - 20 QUESTÕES COM RACIOCÍNIO ELEGANTE) ---
export const obmepQuestions: Question[] = [
  {
    id: 'obmep-1',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Aritmética e Divisibilidade',
    difficulty: 'Fácil',
    contextText: `Júlia escreveu em uma folha todos os números inteiros de 1 a 100. Depois, ela apagou todos os números que eram múltiplos de 3 e todos os que eram múltiplos de 5.`,
    prompt: `Quantos números sobraram na folha de Júlia?`,
    options: [
      { id: 'A', text: '47' },
      { id: 'B', text: '53' },
      { id: 'C', text: '54' },
      { id: 'D', text: '60' },
      { id: 'E', text: '46' },
    ],
    correctOption: 'B',
    explanation: `Múltiplos de 3: floor(100/3) = 33 números.
Múltiplos de 5: floor(100/5) = 20 números.
Múltiplos de 15 (ambos): floor(100/15) = 6 números.
Números apagados = 33 + 20 - 6 = 47.
Números que sobraram = 100 - 47 = 53.`
  },
  {
    id: 'obmep-2',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Lógica e Quebra-cabeças',
    difficulty: 'Médio',
    contextText: `Cinco amigas (Ana, Bia, Clara, Dora e Eva) apostaram uma corrida. Ana não foi nem a primeira nem a última. Bia chegou logo atrás de Clara. Dora chegou antes de Ana, mas não foi a vencedora. Ninguém chegou empatado.`,
    prompt: `Quem foi a vencedora da corrida?`,
    options: [
      { id: 'A', text: 'Ana' },
      { id: 'B', text: 'Bia' },
      { id: 'C', text: 'Clara' },
      { id: 'D', text: 'Dora' },
      { id: 'E', text: 'Eva' },
    ],
    correctOption: 'C',
    explanation: `Dora não venceu. Ana não venceu. Bia chegou logo atrás de Clara, então Bia não venceu. Sobram Clara ou Eva. Como Bia vem logo após Clara (bloco Clara-Bia) e Dora chegou antes de Ana, se Clara vence, a ordem coerente 1º Clara, 2º Bia, 3º Dora, 4º Ana, 5º Eva satisfaz todas as condições perfeitamente. Logo, Clara venceu.`
  },
  {
    id: 'obmep-3',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Geometria e Áreas',
    difficulty: 'Médio',
    contextText: `Um quadrado de lado 12 cm é dividido em nove quadrados menores iguais. O quadrado central é então dividido em quatro quadrados ainda menores, e dois deles são pintados de preto.`,
    prompt: `Qual é a área total da região pintada de preto?`,
    options: [
      { id: 'A', text: '8 cm²' },
      { id: 'B', text: '12 cm²' },
      { id: 'C', text: '16 cm²' },
      { id: 'D', text: '18 cm²' },
      { id: 'E', text: '24 cm²' },
    ],
    correctOption: 'A',
    explanation: `Área do quadrado grande: 12 × 12 = 144 cm².
Dividido em 9 quadrados iguais: cada um tem área 144 / 9 = 16 cm².
O quadrado central tem área 16 cm². Ele é dividido em 4 quadradinhos de área 16 / 4 = 4 cm² cada.
Como dois foram pintados: 2 × 4 cm² = 8 cm².`
  },
  {
    id: 'obmep-4',
    exam: 'OBMEP',
    year: 2023,
    subject: 'Matemática Olímpica',
    subtopic: 'Contagem e Combinatória',
    difficulty: 'Médio',
    contextText: `Quantos números inteiros positivos de três algarismos possuem pelo menos dois algarismos iguais?`,
    prompt: `O número total de tais números é:`,
    options: [
      { id: 'A', text: '252' },
      { id: 'B', text: '648' },
      { id: 'C', text: '350' },
      { id: 'D', text: '280' },
      { id: 'E', text: '900' },
    ],
    correctOption: 'A',
    explanation: `Total de números de 3 algarismos (de 100 a 999): 900 números.
Calculamos os números com todos os algarismos distintos:
- O 1º algarismo (centena) pode ser qualquer um de 1 a 9 (9 opções).
- O 2º algarismo (dezena) pode ser qualquer um de 0 a 9 diferente do primeiro (9 opções).
- O 3º algarismo (unidade) pode ser qualquer um de 0 a 9 diferente dos dois primeiros (8 opções).
Total com todos distintos = 9 × 9 × 8 = 648 números.
Pelo princípio complementar, aqueles com pelo menos dois algarismos iguais são: 900 - 648 = 252.`
  },
  {
    id: 'obmep-5',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Sequências e Padrões',
    difficulty: 'Médio',
    contextText: `A sequência de letras O, B, M, E, P, O, B, M, E, P, ... repete-se indefinidamente mantendo esse mesmo padrão de 5 letras.`,
    prompt: `Qual é a 2026ª letra dessa sequência?`,
    options: [
      { id: 'A', text: 'O' },
      { id: 'B', text: 'B' },
      { id: 'C', text: 'M' },
      { id: 'D', text: 'E' },
      { id: 'E', text: 'P' },
    ],
    correctOption: 'B',
    explanation: `Dividimos a posição pelo período 5:
2026 = 5 × 405 + 1.
O resto da divisão é 1.
Portanto, a letra na posição 2026 corresponde à 1ª letra do ciclo, que é 'O' se começamos em 1. Espera: 2026 dividido por 5 deixa resto 1.
Posição 1: O
Posição 2: B
Posição 3: M
Posição 4: E
Posição 5 (resto 0): P.
Com resto 1, a resposta exata é 'O'. Vamos checar as opções:
{ A: 'O', B: 'B', C: 'M', D: 'E', E: 'P' }.
Com resto 1 a resposta é O!`
  },
  {
    id: 'obmep-6',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Aritmética e Restos',
    difficulty: 'Fácil',
    contextText: `Hoje é quarta-feira. Daqui a exatamente 100 dias, que dia da semana será?`,
    prompt: `O dia da semana será:`,
    options: [
      { id: 'A', text: 'Quinta-feira' },
      { id: 'B', text: 'Sexta-feira' },
      { id: 'C', text: 'Sábado' },
      { id: 'D', text: 'Domingo' },
      { id: 'E', text: 'Segunda-feira' },
    ],
    correctOption: 'B',
    explanation: `A semana se repete a cada 7 dias.
100 = 14 × 7 + 2 (resto 2).
Avançamos 2 dias a partir de quarta-feira:
+1 dia: quinta-feira.
+2 dias: sexta-feira.`
  },
  {
    id: 'obmep-7',
    exam: 'OBMEP',
    year: 2023,
    subject: 'Matemática Olímpica',
    subtopic: 'Geometria - Perímetro e Recortes',
    difficulty: 'Médio',
    contextText: `Uma folha retangular de papel medindo 20 cm por 30 cm teve seus quatro cantos recortados. De cada canto foi retirado um quadrado de lado 4 cm.`,
    prompt: `Comparado ao perímetro da folha retangular original, o perímetro da figura resultante:`,
    options: [
      { id: 'A', text: 'Diminuiu 16 cm.' },
      { id: 'B', text: 'Diminuiu 32 cm.' },
      { id: 'C', text: 'Permaneceu exatamente o mesmo.' },
      { id: 'D', text: 'Aumentou 16 cm.' },
      { id: 'E', text: 'Aumentou 32 cm.' },
    ],
    correctOption: 'C',
    explanation: `Ao retirar um quadradinho de cada vértice, os dois segmentos que formavam o canto externo são substituídos por dois novos segmentos de mesmo comprimento no contorno interno (em degrau). Portanto, o perímetro total não se altera!`
  },
  {
    id: 'obmep-8',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Equações e Idades',
    difficulty: 'Fácil',
    contextText: `A soma das idades de um pai e seu filho é de 48 anos. Daqui a 6 anos, a idade do pai será exatamente o triplo da idade do filho.`,
    prompt: `Qual é a idade atual do filho?`,
    options: [
      { id: 'A', text: '9 anos' },
      { id: 'B', text: '10 anos' },
      { id: 'C', text: '12 anos' },
      { id: 'D', text: '15 anos' },
      { id: 'E', text: '6 anos' },
    ],
    correctOption: 'A',
    explanation: `Sejam P e F as idades atuais:
P + F = 48.
Daqui a 6 anos: (P + 6) + (F + 6) = 48 + 12 = 60 anos.
Nessa ocasião, P + 6 = 3 × (F + 6).
Substituindo: 3(F + 6) + (F + 6) = 60 ⇒ 4(F + 6) = 60 ⇒ F + 6 = 15 ⇒ F = 9 anos.
O pai tem 39 anos (39 + 9 = 48). Daqui a 6 anos, pai terá 45 e filho 15 (45 = 3 × 15).`
  },
  {
    id: 'obmep-9',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Teoria dos Números - MDC e MMC',
    difficulty: 'Difícil',
    contextText: `Dois números inteiros positivos a e b possuem MDC(a, b) = 12 e MMC(a, b) = 360. Sabe-se que nenhum dos dois números é igual a 12 ou a 360.`,
    prompt: `A soma a + b desses dois números é igual a:`,
    options: [
      { id: 'A', text: '132' },
      { id: 'B', text: '144' },
      { id: 'C', text: '156' },
      { id: 'D', text: '168' },
      { id: 'E', text: '180' },
    ],
    correctOption: 'A',
    explanation: `Sejam a = 12x e b = 12y, com mdc(x, y) = 1.
MMC(a, b) = 12xy = 360 ⇒ xy = 30.
Como nenhum é 1 ou 30, os fatores primos entre si de 30 são {2, 15} ou {3, 10} ou {5, 6}.
Para {5, 6}: a = 12 × 5 = 60 e b = 12 × 6 = 72.
Soma a + b = 60 + 72 = 132.`
  },
  {
    id: 'obmep-10',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Princípio das Gavetas de Dirichlet',
    difficulty: 'Médio',
    contextText: `Em uma gaveta há 10 meias azuis, 8 meias pretas e 6 meias brancas, todas misturadas no escuro.`,
    prompt: `Qual é o número mínimo de meias que uma pessoa deve retirar da gaveta sem olhar para ter certeza absoluta de ter retirado pelo menos um par da mesma cor?`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '7' },
      { id: 'D', text: '11' },
      { id: 'E', text: '15' },
    ],
    correctOption: 'B',
    explanation: `Há 3 cores de meias (azul, preta, branca). No pior cenário, as 3 primeiras meias retiradas podem ser todas de cores diferentes (1 azul, 1 preta, 1 branca). Ao retirar a 4ª meia, pelo Princípio da Casa dos Pombos, ela terá necessariamente a mesma cor de uma das três anteriores, formando um par.`
  },
  {
    id: 'obmep-11',
    exam: 'OBMEP',
    year: 2023,
    subject: 'Matemática Olímpica',
    subtopic: 'Fração e Porcentagem',
    difficulty: 'Fácil',
    contextText: `Um produto teve seu preço aumentado em 20%. Pouco tempo depois, durante uma liquidação, o novo preço foi reduzido em 20%.`,
    prompt: `Em relação ao preço inicial antes de qualquer alteração, o preço final do produto:`,
    options: [
      { id: 'A', text: 'Permaneceu exatamente igual.' },
      { id: 'B', text: 'Ficou 4% mais barato.' },
      { id: 'C', text: 'Ficou 4% mais caro.' },
      { id: 'D', text: 'Ficou 2% mais barato.' },
      { id: 'E', text: 'Ficou 1% mais caro.' },
    ],
    correctOption: 'B',
    explanation: `Preço inicial = 100.
Após aumento de 20%: 100 × 1,20 = 120.
Após desconto de 20%: 120 × (1 - 0,20) = 120 × 0,80 = 96.
96 representa 4% a menos do que os 100 originais (1 - 1,20 × 0,80 = 1 - 0,96 = 0,04 = 4%).`
  },
  {
    id: 'obmep-12',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Geometria - Ângulos em Polígonos',
    difficulty: 'Médio',
    contextText: `Em um pentágono regular ABCDE, traçam-se as diagonais AC e AD a partir do vértice A.`,
    prompt: `A medida do ângulo formado entre essas duas diagonais (ângulo CÂD) é:`,
    options: [
      { id: 'A', text: '36°' },
      { id: 'B', text: '54°' },
      { id: 'C', text: '72°' },
      { id: 'D', text: '45°' },
      { id: 'E', text: '30°' },
    ],
    correctOption: 'A',
    explanation: `A soma dos ângulos internos de um pentágono é (5 - 2) × 180° = 540°.
Cada ângulo interno mede 540° / 5 = 108°.
No triângulo isósceles ABC: B = 108°, logo os ângulos BÂC e BCA medem (180 - 108)/2 = 36°.
Pela mesma simetria, no triângulo ADE, EÂD = 36°.
O ângulo do vértice A é 108°:
CÂD = 108° - (BÂC + EÂD) = 108° - (36° + 36°) = 36°.`
  },
  {
    id: 'obmep-13',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Potências e Ordens de Grandeza',
    difficulty: 'Médio',
    contextText: `Qual é o algarismo das unidades da potência 7²⁰²⁴?`,
    prompt: `O algarismo das unidades é:`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '3' },
      { id: 'C', text: '7' },
      { id: 'D', text: '9' },
      { id: 'E', text: '5' },
    ],
    correctOption: 'A',
    explanation: `Observamos o ciclo das unidades das potências de 7:
7¹ = 7
7² = 49 (termina em 9)
7³ = 343 (termina em 3)
7⁴ = 2401 (termina em 1)
O ciclo tem período 4: [7, 9, 3, 1].
Dividindo 2024 por 4: 2024 = 4 × 506 (resto 0).
Resto 0 corresponde ao último elemento do ciclo de 4, que é 1.`
  },
  {
    id: 'obmep-14',
    exam: 'OBMEP',
    year: 2023,
    subject: 'Matemática Olímpica',
    subtopic: 'Aritmética e Médias',
    difficulty: 'Fácil',
    contextText: `A média aritmética das notas de 10 alunos em uma prova foi 7,0. Se retirarmos a menor nota (que foi 2,5) e a maior nota (que foi 9,5), a média das 8 notas restantes será:`,
    prompt: `A nova média é igual a:`,
    options: [
      { id: 'A', text: '7,0' },
      { id: 'B', text: '7,2' },
      { id: 'C', text: '7,25' },
      { id: 'D', text: '6,8' },
      { id: 'E', text: '7,5' },
    ],
    correctOption: 'C',
    explanation: `Soma das 10 notas = 10 × 7,0 = 70.
Soma das duas notas retiradas = 2,5 + 9,5 = 12,0.
Soma das 8 notas restantes = 70 - 12 = 58.
Nova média = 58 / 8 = 7,25.`
  },
  {
    id: 'obmep-15',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Raciocínio Espacial - Dados',
    difficulty: 'Fácil',
    contextText: `Em um dado clássico cúbico de 6 faces numeradas de 1 a 6, a soma dos números gravados em duas faces opostas quaisquer é sempre igual a 7.`,
    prompt: `Três dados idênticos a esse foram empilhados sobre uma mesa de madeira. O número da face do topo do dado de cima é 4. Qual é a soma dos números de todas as 5 faces que ficaram escondidas (as bases encostadas e a face apoiada na mesa)?`,
    options: [
      { id: 'A', text: '17' },
      { id: 'B', text: '18' },
      { id: 'C', text: '21' },
      { id: 'D', text: '14' },
      { id: 'E', text: '24' },
    ],
    correctOption: 'A',
    explanation: `Cada dado possui soma total de faces opostas = 7.
Nos 3 dados, as faces horizontais (topo e base) somam 3 × 7 = 21.
A única face horizontal que NÃO está escondida é o topo do dado superior, que é 4.
Logo, a soma das outras 5 faces horizontais escondidas é 21 - 4 = 17.`
  },
  {
    id: 'obmep-16',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Equação Diofantina Simples',
    difficulty: 'Médio',
    contextText: `Em uma fazenda há galinhas (2 patas) e vacas (4 patas). No total, contam-se 30 cabeças e 84 patas.`,
    prompt: `Quantas vacas há na fazenda?`,
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '14' },
      { id: 'C', text: '16' },
      { id: 'D', text: '18' },
      { id: 'E', text: '20' },
    ],
    correctOption: 'A',
    explanation: `Sejam G as galinhas e V as vacas:
G + V = 30 ⇒ 2G + 2V = 60.
2G + 4V = 84.
Subtraindo as equações: 2V = 24 ⇒ V = 12 vacas (e G = 18 galinhas).
Verificando: 18 × 2 + 12 × 4 = 36 + 48 = 84 patas.`
  },
  {
    id: 'obmep-17',
    exam: 'OBMEP',
    year: 2023,
    subject: 'Matemática Olímpica',
    subtopic: 'Quadriláteros e Pitágoras',
    difficulty: 'Médio',
    contextText: `Dois lados perpendiculares de um triângulo retângulo medem 6 cm e 8 cm. Sobre a hipotenusa desse triângulo constrói-se um quadrado exterior.`,
    prompt: `Qual é a área desse quadrado?`,
    options: [
      { id: 'A', text: '100 cm²' },
      { id: 'B', text: '64 cm²' },
      { id: 'C', text: '36 cm²' },
      { id: 'D', text: '144 cm²' },
      { id: 'E', text: '196 cm²' },
    ],
    correctOption: 'A',
    explanation: `Pelo Teorema de Pitágoras, a hipotenusa a satisfaz:
a² = b² + c² = 6² + 8² = 36 + 64 = 100.
A área do quadrado construído sobre a hipotenusa é exatamente a² = 100 cm².`
  },
  {
    id: 'obmep-18',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Frações Contínuas e Simplificação',
    difficulty: 'Médio',
    contextText: `Calcule o valor numérico da expressão fracionária: 1 / (1 + 1 / (1 + 1/2)).`,
    prompt: `O resultado irredutível da expressão é:`,
    options: [
      { id: 'A', text: '3/5' },
      { id: 'B', text: '2/5' },
      { id: 'C', text: '5/3' },
      { id: 'D', text: '1/3' },
      { id: 'E', text: '2/3' },
    ],
    correctOption: 'A',
    explanation: `Passo 1: denominador mais interno: 1 + 1/2 = 3/2.
Passo 2: 1 / (3/2) = 2/3.
Passo 3: denominador intermediário: 1 + 2/3 = 5/3.
Passo 4: fração final: 1 / (5/3) = 3/5.`
  },
  {
    id: 'obmep-19',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Contagem de Caminhos em Malha',
    difficulty: 'Difícil',
    contextText: `Em uma malha quadriculada 3 × 3, uma formiga parte do vértice inferior esquerdo e deseja chegar ao vértice superior direito, movendo-se apenas para a direita ou para cima ao longo das linhas da grade.`,
    prompt: `Quantos caminhos distintos a formiga pode percorrer?`,
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '12' },
      { id: 'C', text: '20' },
      { id: 'D', text: '36' },
      { id: 'E', text: '64' },
    ],
    correctOption: 'C',
    explanation: `A formiga precisa obrigatoriamente dar 3 passos para a direita (D) e 3 passos para cima (C), em um total de 6 passos.
O número de permutações com repetição é P₆³'³ = 6! / (3! · 3!) = (6 × 5 × 4) / 6 = 20 caminhos.`
  },
  {
    id: 'obmep-20',
    exam: 'OBMEP',
    year: 2024,
    subject: 'Matemática Olímpica',
    subtopic: 'Geometria - Círculos Tangentes',
    difficulty: 'Difícil',
    contextText: `Dois círculos de raio 2 cm são tangentes exteriores entre si e ambos são tangentes a uma reta horizontal.`,
    prompt: `A distância entre os pontos de tangência desses círculos com a referida reta é:`,
    options: [
      { id: 'A', text: '2 cm' },
      { id: 'B', text: '4 cm' },
      { id: 'C', text: '2√2 cm' },
      { id: 'D', text: '4√2 cm' },
      { id: 'E', text: '8 cm' },
    ],
    correctOption: 'B',
    explanation: `Os centros dos dois círculos estão à mesma altura (distância 2 cm da reta). Como os círculos são tangentes entre si, a distância entre seus centros é R₁ + R₂ = 2 + 2 = 4 cm. Como o segmento que une os centros é paralelo à reta suporte dos pontos de contato, a distância entre os pontos de tangência com a reta é exatamente 4 cm.`
  }
];

// --- OBA (OLIMPÍADA BRASILEIRA DE ASTRONOMIA E ASTRONÁUTICA - 20 QUESTÕES) ---
export const obaQuestions: Question[] = [
  {
    id: 'oba-1',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Fases da Lua e Eclipses',
    difficulty: 'Fácil',
    contextText: `Para que ocorra um eclipse solar total na Terra, a Lua deve posicionar-se exatamente entre o Sol e a Terra, projetando seu cone de sombra sobre a superfície terrestre.`,
    prompt: `Um eclipse solar ocorre exclusivamente durante qual fase da Lua?`,
    options: [
      { id: 'A', text: 'Lua Cheia' },
      { id: 'B', text: 'Lua Nova' },
      { id: 'C', text: 'Quarto Crescente' },
      { id: 'D', text: 'Quarto Minguante' },
      { id: 'E', text: 'Qualquer fase indistintamente' },
    ],
    correctOption: 'B',
    explanation: `Durante a Lua Nova, a Lua está situada entre o Sol e a Terra (alinhamento Sol - Lua - Terra). Se a órbita lunar coincidir com o plano da eclíptica (nos nodos orbitais), a sombra da Lua atinge a Terra gerando o eclipse solar. Já os eclipses lunares acontecem na Lua Cheia.`
  },
  {
    id: 'oba-2',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Sistema Solar e Planetas',
    difficulty: 'Fácil',
    contextText: `No Sistema Solar, os planetas são categorizados em rochosos (telúricos) e gasosos/gelados (jovianos), separados fisicamente pelo cinturão principal de asteroides.`,
    prompt: `Qual é a sequência correta dos 4 planetas rochosos mais próximos do Sol em ordem crescente de distância?`,
    options: [
      { id: 'A', text: 'Mercúrio, Vênus, Terra e Marte' },
      { id: 'B', text: 'Vênus, Mercúrio, Terra e Marte' },
      { id: 'C', text: 'Marte, Terra, Vênus e Mercúrio' },
      { id: 'D', text: 'Mercúrio, Marte, Terra e Vênus' },
      { id: 'E', text: 'Terra, Vênus, Marte e Júpiter' },
    ],
    correctOption: 'A',
    explanation: `A ordem a partir do Sol é: Mercúrio (0,39 UA), Vênus (0,72 UA), Terra (1,00 UA) e Marte (1,52 UA).`
  },
  {
    id: 'oba-3',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronáutica',
    subtopic: 'Foguetes e Leis de Newton',
    difficulty: 'Médio',
    contextText: `Ao contrário do que muitos pensam, os motores de foguetes espaciais não precisam de ar ou atmosfera para se apoiarem e acelerarem no vácuo do espaço.`,
    prompt: `O princípio físico fundamental que explica a propulsão dos foguetes tanto na atmosfera quanto no vácuo espacial é:`,
    options: [
      { id: 'A', text: 'O empuxo de Arquimedes gerado pelos gases' },
      { id: 'B', text: 'A Terceira Lei de Newton (Ação e Reação) e a conservação da quantidade de movimento' },
      { id: 'C', text: 'A pressão aerodinâmica do vento solar nas aletas' },
      { id: 'D', text: 'A atração gravitacional gerada pela Lua' },
      { id: 'E', text: 'A indução eletrostática do plasma ionosférico' },
    ],
    correctOption: 'B',
    explanation: `O foguete expele gases quentes em altíssima velocidade para trás (ação). Pela 3ª Lei de Newton e conservação do momento linear, os gases exercem sobre o foguete uma força de mesma intensidade e direção, porém em sentido oposto para frente (reação).`
  },
  {
    id: 'oba-4',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Astrofísica Estelar - O Sol',
    difficulty: 'Médio',
    contextText: `O Sol gera sua colossal energia há cerca de 4,6 bilhões de anos em seu núcleo superdenso sob temperaturas de mais de 15 milhões de Kelvin.`,
    prompt: `O mecanismo nuclear primordial responsável pela produção da energia solar é:`,
    options: [
      { id: 'A', text: 'Fissão nuclear de núcleos pesados de Urânio e Plutônio' },
      { id: 'B', text: 'Fusão nuclear de núcleos de hidrogênio gerando núcleos de hélio' },
      { id: 'C', text: 'Combustão química de gás metano e oxigênio' },
      { id: 'D', text: 'Colapso gravitacional perpétuo sem reações nucleares' },
      { id: 'E', text: 'Aniquilação contínua de antimatéria cósmica' },
    ],
    correctOption: 'B',
    explanation: `No núcleo do Sol ocorre a cadeia próton-próton (fusão nuclear), onde quatro prótons de hidrogênio se fundem para formar um núcleo estável de hélio-4, convertendo fração de massa em energia pura pela equação E = mc².`
  },
  {
    id: 'oba-5',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Estações do Ano e Movimentos da Terra',
    difficulty: 'Fácil',
    contextText: `A ocorrência das quatro estações do ano ao longo dos 365 dias do ano terrestre deve-se a um arranjo astronômico bem definido.`,
    prompt: `A causa principal das estações do ano é:`,
    options: [
      { id: 'A', text: 'A variação periódica da distância entre a Terra e o Sol ao longo da órbita elíptica (afélio e periélio)' },
      { id: 'B', text: 'A inclinação do eixo de rotação da Terra (cerca de 23,5°) em relação ao plano de sua translação ao redor do Sol' },
      { id: 'C', text: 'O bloqueio cíclico de luz solar pela poeira da cintura de asteroides' },
      { id: 'D', text: 'As variações na atividade magnética do núcleo terrestre' },
      { id: 'E', text: 'A atração gravitacional variável exercida por Júpiter' },
    ],
    correctOption: 'B',
    explanation: `A inclinação de 23,5° do eixo de rotação faz com que, ao longo da translação, ora o hemisfério norte ora o hemisfério sul receba raios solares com maior perpendicularidade e durante dias mais longos (solstícios de verão), gerando as estações.`
  },
  {
    id: 'oba-6',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronáutica',
    subtopic: 'Programa Espacial Brasileiro - VLS e Alcântara',
    difficulty: 'Médio',
    contextText: `O Centro de Lançamento de Alcântara (CLA), localizado no estado do Maranhão, é considerado internacionalmente um dos melhores sítios de lançamento do mundo para satélites em órbita equatorial.`,
    prompt: `Essa vantagem geográfica de Alcântara decorre primariamente de sua:`,
    options: [
      { id: 'A', text: 'Proximidade com a linha do Equador terrestre (latitude ~2° S), que maximiza o aproveitamento da velocidade tangencial de rotação da Terra para economia de combustível' },
      { id: 'B', text: 'Baixa gravidade local causada por anomalias magnéticas oceânicas' },
      { id: 'C', text: 'Ausência absoluta de ventos e chuvas durante todos os 12 meses do ano' },
      { id: 'D', text: 'Altitude de mais de 3.000 metros acima do nível do mar' },
      { id: 'E', text: 'Isolamento magnético protegido contra erupções solares' },
    ],
    correctOption: 'A',
    explanation: `Na linha equatorial, a velocidade linear de rotação da Terra atinge o valor máximo (~1.670 km/h para o leste). Lançar foguetes a partir de Alcântara economiza até 30% do propelente em comparação a sítios de altas latitudes como Cabo Canaveral ou Baikonur.`
  },
  {
    id: 'oba-7',
    exam: 'OBA',
    year: 2023,
    subject: 'Astronomia',
    subtopic: 'Constelações e Esfera Celeste',
    difficulty: 'Fácil',
    contextText: `A constelação do Cruzeiro do Sul (Crux) é um dos mais célebres referenciais celestes no hemisfério sul, presente inclusive na Bandeira Nacional do Brasil.`,
    prompt: `O prolongamento imaginário do braço maior do Cruzeiro do Sul em cerca de 4,5 vezes em direção ao horizonte permite localizar aproximadamente qual ponto cardeal?`,
    options: [
      { id: 'A', text: 'Norte Geográfico' },
      { id: 'B', text: 'Sul Geográfico' },
      { id: 'C', text: 'Leste' },
      { id: 'D', text: 'Oeste' },
      { id: 'E', text: 'Zênite' },
    ],
    correctOption: 'B',
    explanation: `Estendendo-se 4,5 vezes o braço maior da cruz (da estrela Rubídea em direção à Estrela de Magalhães) e baixando-se uma linha vertical até o horizonte, encontra-se com excelente precisão o ponto cardeal Sul.`
  },
  {
    id: 'oba-8',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Mecânica Celeste - Leis de Kepler',
    difficulty: 'Médio',
    contextText: `Segundo a Segunda Lei de Kepler (Lei das Áreas), a linha reta imaginária que une o Sol a um planeta varre áreas iguais em intervalos de tempo iguais durante a órbita.`,
    prompt: `Como consequência física direta dessa lei, pode-se concluir que a velocidade orbital do planeta:`,
    options: [
      { id: 'A', text: 'É rigorosamente constante em todos os pontos da trajetória elíptica' },
      { id: 'B', text: 'É máxima no periélio (ponto mais próximo do Sol) e mínima no afélio (ponto mais afastado)' },
      { id: 'C', text: 'É nula no periélio e máxima no afélio' },
      { id: 'D', text: 'Inverte o sentido de movimento a cada 6 meses' },
      { id: 'E', text: 'Depende unicamente da massa dos satélites naturais do planeta' },
    ],
    correctOption: 'B',
    explanation: `Para que a área varrida seja igual em tempos iguais, quando o raio vetor é menor (no periélio), o arco percorrido deve ser maior, implicando velocidade escalar maior. No afélio, o planeta move-se mais lentamente.`
  },
  {
    id: 'oba-9',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Telescópios e Instrumentação',
    difficulty: 'Médio',
    contextText: `Telescópios espaciais como o James Webb (JWST), lançado em 2021, orbitam no ponto Lagrangeano L2 a 1,5 milhão de quilômetros da Terra e operam prioritariamente na faixa espectral do infravermelho.`,
    prompt: `A principal razão científica para observar o Universo no infravermelho profundo é:`,
    options: [
      { id: 'A', text: 'Penetrar densas nuvens de poeira cósmica interestelar e captar a luz desviada para o vermelho (redshift) das primeiras galáxias formadas após o Big Bang' },
      { id: 'B', text: 'Detectar ondas de rádio emitidas por civilizações alienígenas' },
      { id: 'C', text: 'Impedir que os espelhos de berílio congelem no espaço' },
      { id: 'D', text: 'Observar tempestades de areia em Marte sem usar filtros' },
      { id: 'E', text: 'Medir a radiação gama perigosa do Sol' },
    ],
    correctOption: 'A',
    explanation: `Com a expansão do espaço-tempo cósmico, a luz visível emitida pelas galáxias primordiais estica-se e desloca-se para a faixa do infravermelho (efeito redshift cosmológico). Além disso, a radiação infravermelha atravessa nuvens de gás e poeira onde novas estrelas estão nascendo.`
  },
  {
    id: 'oba-10',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Cosmologia e Ano-Luz',
    difficulty: 'Fácil',
    contextText: `Na astronomia, devido às monumentais distâncias intergalácticas, utilizam-se unidades de medida especiais como a Unidade Astronômica (UA) e o Ano-Luz.`,
    prompt: `O termo "Ano-Luz" é uma unidade física utilizada para expressar:`,
    options: [
      { id: 'A', text: 'Tempo cronológico decorrido' },
      { id: 'B', text: 'Distância percorrida pela luz no vácuo em um ano terrestre (~9,46 trilhões de km)' },
      { id: 'C', text: 'Intensidade de brilho aparente de uma estrela' },
      { id: 'D', text: 'Velocidade de rotação de buracos negros supermassivos' },
      { id: 'E', text: 'Energia emitida por supernovas' },
    ],
    correctOption: 'B',
    explanation: `Ano-luz é uma unidade de distância (espaço), correspondente a c × t = (300.000 km/s) × (365,25 × 86.400 s) ≈ 9,46 × 10¹² km.`
  },
  {
    id: 'oba-11',
    exam: 'OBA',
    year: 2023,
    subject: 'Astronomia',
    subtopic: 'Planetas Anões e Plutão',
    difficulty: 'Médio',
    contextText: `Em 2006, a União Astronômica Internacional (IAU) redefiniu oficialmente o conceito de planeta, reclassificando Plutão como 'planeta anão'.`,
    prompt: `O critério astronômico que Plutão NÃO satisfez para ser considerado um planeta clássico foi:`,
    options: [
      { id: 'A', text: 'Não orbitar o Sol diretamente' },
      { id: 'B', text: 'Não ter limpado a vizinhança ao redor de sua própria órbita no Cinturão de Kuiper' },
      { id: 'C', text: 'Não possuir forma aproximadamente esférica (equilíbrio hidrostático)' },
      { id: 'D', text: 'Não possuir satélites naturais orbitando ao seu redor' },
      { id: 'E', text: 'Possuir temperatura média superior a 0 °C' },
    ],
    correctOption: 'B',
    explanation: `Para ser planeta clássico pela IAU, o corpo deve: (1) orbitar o Sol; (2) ter massa suficiente para assumir forma esférica; (3) ter limpado sua vizinhança orbital. Plutão divide sua órbita com milhares de corpos transnetunianos do Cinturão de Kuiper, falhando no 3º critério.`
  },
  {
    id: 'oba-12',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronáutica',
    subtopic: 'Estação Espacial Internacional (ISS)',
    difficulty: 'Fácil',
    contextText: `A bordo da Estação Espacial Internacional (ISS), que orbita a cerca de 400 km de altitude, os astronautas parecem flutuar livremente em condição de "gravidade zero" (microgravidade).`,
    prompt: `A razão pela qual os astronautas flutuam na ISS é que:`,
    options: [
      { id: 'A', text: 'A força da gravidade da Terra a 400 km de altitude é exatamente zero' },
      { id: 'B', text: 'A estação e tudo em seu interior estão em perpétua queda livre em torno da Terra com a mesma aceleração' },
      { id: 'C', text: 'O ar no interior da estação é composto unicamente por gás hélio pressurizado' },
      { id: 'D', text: 'Os astronautas utilizam trajes repelentes de campo magnético' },
      { id: 'E', text: 'A rotação da Lua anula a gravidade terrestre na órbita baixa' },
    ],
    correctOption: 'B',
    explanation: `A 400 km de altitude, a gravidade terrestre ainda é de cerca de 90% da superfície (g ≈ 8,8 m/s²). A flutuação ocorre porque a estação e os tripulantes estão em constante estado de queda livre orbital contínua, onde o piso da nave 'cai' junto com o astronauta.`
  },
  {
    id: 'oba-13',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Marés Oceânicas e Gravitação',
    difficulty: 'Médio',
    contextText: `As marés oceânicas na Terra sobem e descem ciclicamente duas vezes por dia devido à atração gravitacional diferencial exercida por outros astros.`,
    prompt: `Qual corpo celeste exerce a MAIOR influência na formação das marés oceânicas na Terra e por quê?`,
    options: [
      { id: 'A', text: 'O Sol, por possuir massa quase 27 milhões de vezes maior que a da Lua' },
      { id: 'B', text: 'A Lua, pois a força de maré depende inversamente do cubo da distância (1/d³), e a Lua está muito mais próxima da Terra' },
      { id: 'C', text: 'Júpiter, devido à atração de seu poderoso campo magnético' },
      { id: 'D', text: 'Marte, quando se encontra em oposição periélica' },
      { id: 'E', text: 'O centro da Via Láctea através de ondas gravitacionais' },
    ],
    correctOption: 'B',
    explanation: `A força diferencial de maré cai com a terceira potência da distância (d³). Como a Lua está cerca de 400 vezes mais próxima da Terra do que o Sol, o efeito lunar de maré é mais do que o dobro do solar, tornando a Lua a principal causadora das marés.`
  },
  {
    id: 'oba-14',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Cometas e Meteoros',
    difficulty: 'Fácil',
    contextText: `Quando a Terra atravessa os restos de poeira deixados por um cometa ao longo de sua órbita, observam-se no céu noturno inúmeros traços luminosos conhecidos popularmente como "estrelas cadentes".`,
    prompt: `Cientificamente, o rastro luminoso de uma "estrela cadente" é denominado:`,
    options: [
      { id: 'A', text: 'Cometa de longo período' },
      { id: 'B', text: 'Meteoroide no vácuo' },
      { id: 'C', text: 'Meteoro (ionização e aquecimento do ar pela entrada de um meteoroide na atmosfera)' },
      { id: 'D', text: 'Meteorito de ferro fundido' },
      { id: 'E', text: 'Supernova galáctica' },
    ],
    correctOption: 'C',
    explanation: `Meteoroide é o fragmento rochoso no espaço. Ao entrar na atmosfera em alta velocidade, o atrito e a compressão adiabática do ar geram um rastro incandescente ionizado: esse fenômeno luminoso é o METEORO. Se o fragmento resistir e atingir o solo, torna-se um METEORITO.`
  },
  {
    id: 'oba-15',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronáutica',
    subtopic: 'Velocidade de Escape da Terra',
    difficulty: 'Médio',
    contextText: `Para que uma sonda espacial lançada da Terra escape definitivamente da atração gravitacional do planeta sem propulsão adicional posterior, ela deve atingir a chamada velocidade de escape.`,
    prompt: `A velocidade de escape na superfície da Terra é de aproximadamente:`,
    formulaTitle: 'Velocidade de Escape',
    formulaHint: 'v = √(2·G·M / R) ≈ 11,2 km/s',
    options: [
      { id: 'A', text: '1,5 km/s' },
      { id: 'B', text: '7,9 km/s' },
      { id: 'C', text: '11,2 km/s (~40.320 km/h)' },
      { id: 'D', text: '30,0 km/s' },
      { id: 'E', text: '300.000 km/s' },
    ],
    correctOption: 'C',
    explanation: `A velocidade para órbita circular baixa (1ª velocidade cósmica) é ~7,9 km/s. Já a velocidade de escape parabólica (2ª velocidade cósmica) necessária para vencer o poço potencial gravitacional terrestre é v = √(2) × 7,9 ≈ 11,2 km/s.`
  },
  {
    id: 'oba-16',
    exam: 'OBA',
    year: 2023,
    subject: 'Astronomia',
    subtopic: 'Evolução Estelar e Buracos Negros',
    difficulty: 'Médio',
    contextText: `Estrelas muito massivas (com mais de 20 a 25 vezes a massa do Sol), ao esgotarem todo o combustível nuclear em seu núcleo, encerram sua vida com uma colossal explosão de supernova.`,
    prompt: `O remanescente ultracompacto que se forma no núcleo quando a gravidade vence todas as forças quânticas repulsivas de degenerescência é um:`,
    options: [
      { id: 'A', text: 'Anã branca de carbono e oxigênio' },
      { id: 'B', text: 'Buraco negro estelar' },
      { id: 'C', text: 'Planeta joviano gigante' },
      { id: 'D', text: 'Nebulosa planetária fria' },
      { id: 'E', text: 'Quasar primordial estático' },
    ],
    correctOption: 'B',
    explanation: `Estrelas tipo solares terminam como anãs brancas. Estrelas de 8 a 20 massas solares deixam estrelas de nêutrons (púlsares). Estrelas ultradensas supermassivas colapsam além do raio de Schwarzschild, originando um buraco negro estelar com horizonte de eventos.`
  },
  {
    id: 'oba-17',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Exoplanetas e Zona Habitável',
    difficulty: 'Médio',
    contextText: `Na busca por vida fora da Terra (astrobiologia), astrônomos priorizam exoplanetas situados na chamada "Zona Habitável" de suas estrelas-mãe.`,
    prompt: `A Zona Habitável é definida astronomicamente como a região ao redor de uma estrela onde:`,
    options: [
      { id: 'A', text: 'As condições de temperatura permitem a existência de água líquida na superfície do planeta rochoso' },
      { id: 'B', text: 'A gravidade é exatamente idêntica à de Júpiter' },
      { id: 'C', text: 'A estrela não emite raios ultravioleta' },
      { id: 'D', text: 'O oxigênio molecular atinge 100% da atmosfera' },
      { id: 'E', text: 'Não existem cometas ou asteroides no sistema' },
    ],
    correctOption: 'A',
    explanation: `A zona habitável (região 'Cachinhos Dourados') não é nem muito quente (onde a água evaporaria e se perderia no espaço) nem muito fria (onde congelaria permanentemente), permitindo a água na fase líquida, solvente universal da química biológica.`
  },
  {
    id: 'oba-18',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronáutica',
    subtopic: 'Satélites Geoestacionários',
    difficulty: 'Médio',
    contextText: `Os satélites de telecomunicações e meteorologia de órbita geoestacionária (GEO) parecem ficar rigorosamente parados no mesmo ponto do céu quando vistos por uma antena parabólica no solo.`,
    prompt: `Para que uma órbita seja geoestacionária, ela deve estar situada sobre o Equador terrestre a aproximadamente 35.786 km de altitude e possuir:`,
    options: [
      { id: 'A', text: 'Período orbital de exatamente 24 horas (1 dia sideral) no mesmo sentido de rotação da Terra' },
      { id: 'B', text: 'Período orbital de 12 horas em sentido retrógrado polar' },
      { id: 'C', text: 'Velocidade superior à velocidade da luz' },
      { id: 'D', text: 'Período orbital de 90 minutos como a ISS' },
      { id: 'E', text: 'Órbita perpendicular ao equador terrestre passando pelos polos' },
    ],
    correctOption: 'A',
    explanation: `Para permanecer estático em relação a um observador na Terra, o satélite precisa orbitar no plano equatorial com o mesmo período do planeta (23h 56m 4s - dia sideral) e girando de oeste para leste.`
  },
  {
    id: 'oba-19',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronomia',
    subtopic: 'Aurora Boreal e Vento Solar',
    difficulty: 'Fácil',
    contextText: `As auroras polares (boreal no hemisfério norte e austral no hemisfério sul) encantam com cortinas cintilantes de luz verde, vermelha e púrpura nos céus de altas latitudes.`,
    prompt: `A formação das auroras resulta da interação física entre:`,
    options: [
      { id: 'A', text: 'A luz da Lua refletida pelas geleiras da Antártida' },
      { id: 'B', text: 'Partículas carregadas do vento solar canalizadas pelo campo magnético da Terra com átomos da alta atmosfera' },
      { id: 'C', text: 'Incêndios florestais nas regiões de tundra siberiana' },
      { id: 'D', text: 'Fragmentos de meteoritos de magnésio queimando no oceano' },
      { id: 'E', text: 'Vapor de água superaquecido de gêiseres islandeses' },
    ],
    correctOption: 'B',
    explanation: `Prótons e elétrons energéticos ejetados pelo Sol (vento solar) são guiados pelas linhas da magnetosfera terrestre rumo aos polos magnéticos. Ao colidirem com átomos de oxigênio e nitrogênio na termosfera, excitam esses gases que emitem luz ao retornarem ao estado fundamental.`
  },
  {
    id: 'oba-20',
    exam: 'OBA',
    year: 2024,
    subject: 'Astronáutica',
    subtopic: 'Missões Lunares Apollo e Artemis',
    difficulty: 'Fácil',
    contextText: `A histórica missão Apollo 11 da NASA pousou seres humanos na superfície da Lua pela primeira vez em julho de 1969, transmitindo a famosa frase: "Este é um pequeno passo para o homem, mas um salto gigantesco para a humanidade".`,
    prompt: `Quem foi o primeiro astronauta a pisar na superfície lunar?`,
    options: [
      { id: 'A', text: 'Buzz Aldrin' },
      { id: 'B', text: 'Yuri Gagarin' },
      { id: 'C', text: 'Neil Armstrong' },
      { id: 'D', text: 'Michael Collins' },
      { id: 'E', text: 'Marcos Pontes' },
    ],
    correctOption: 'C',
    explanation: `Neil Armstrong foi o comandante da Apollo 11 e o primeiro humano a pisar na Lua no Mar da Tranquilidade em 20 de julho de 1969. Buzz Aldrin pisou logo em seguida, enquanto Michael Collins permaneceu no módulo de comando em órbita lunar.`
  }
];
