export type ProjectMetric = {
  value: string
  label: string
}

export type TechRole = {
  name: string
  role: string
  icon?: string
  svg?: React.ReactNode
}

export type FlowStep = {
  title: string
  description: string
}

export type Project = {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  category: 'automacao' | 'ia' | 'scraping'
  categoryLabel: string
  accentColor: string
  accentColorRGB: string
  status: string
  statusType: 'done' | 'active'
  problem: string
  context: string
  solution: string
  objective: string
  techs: TechRole[]
  metrics: ProjectMetric[]
  flowSteps: FlowStep[]
  heroVisualType: 'dashboard' | 'workflow' | 'chat' | 'documents' | 'monitor' | 'pipeline' | 'website'
}

export const projects: Project[] = [
  {
    slug: 'automacao-relatorios',
    title: 'Automacao de Relatorios Financeiros',
    shortTitle: 'Relatorios Financeiros',
    subtitle: 'Pipeline automatizado de dados financeiros com entrega semanal para diretoria',
    description: 'Sistema que coleta dados de multiplas fontes, processa com Python e gera dashboards automaticos toda segunda-feira para a diretoria.',
    category: 'automacao',
    categoryLabel: 'Automacao',
    accentColor: '#00D4AA',
    accentColorRGB: '0, 212, 170',
    status: 'Concluido',
    statusType: 'done',
    problem: 'A diretoria dependia de relatorios manuais criados por analistas, que levavam horas para consolidar dados de multiplas fontes. Atrasos e erros humanos comprometiam a tomada de decisao semanal.',
    context: 'Empresa de medio porte com dados fragmentados entre ERPs, planilhas e sistemas internos. Necessidade de relatorios padronizados toda segunda-feira antes da reuniao de diretoria.',
    solution: 'Pipeline automatizado que coleta, processa e entrega dashboards financeiros completos sem intervencao humana, garantindo consistencia e pontualidade.',
    objective: 'Eliminar o trabalho manual de consolidacao de dados e entregar relatorios financeiros automaticos com visualizacoes claras e acionaveis.',
    techs: [
      { name: 'Python', role: 'Linguagem principal para processamento de dados e orquestracao do pipeline', icon: 'devicon-python-plain' },
      { name: 'Pandas', role: 'Manipulacao, limpeza e transformacao de dados financeiros', icon: 'devicon-pandas-plain' },
      { name: 'n8n', role: 'Orquestracao dos fluxos de automacao e agendamento semanal' },
      { name: 'Google Sheets API', role: 'Entrega dos dashboards em formato acessivel para a diretoria' },
    ],
    metrics: [
      { value: '95%', label: 'Reducao de trabalho manual' },
      { value: '< 5min', label: 'Tempo de geracao do relatorio' },
      { value: '100%', label: 'Pontualidade na entrega' },
      { value: '6h+', label: 'Economia semanal por analista' },
    ],
    flowSteps: [
      { title: 'Coleta de Dados', description: 'Extracao automatica de multiplas fontes: ERPs, bancos de dados e planilhas internas' },
      { title: 'Processamento', description: 'Limpeza, validacao e transformacao dos dados financeiros com Pandas' },
      { title: 'Geracao de Dashboards', description: 'Criacao automatica de graficos, tabelas e KPIs visuais' },
      { title: 'Entrega Automatica', description: 'Publicacao nos Google Sheets e notificacao por e-mail para a diretoria' },
    ],
    heroVisualType: 'dashboard',
  },
  {
    slug: 'automacao-workflows',
    title: 'Automacao de Workflows Empresariais',
    shortTitle: 'Workflows Empresariais',
    subtitle: 'Orquestracao inteligente conectando CRM, e-mail marketing e ERP',
    description: 'Fluxos automatizados conectando CRM, e-mail marketing e ERP. Eliminacao de 80% do trabalho manual em processos de vendas e onboarding.',
    category: 'automacao',
    categoryLabel: 'Automacao',
    accentColor: '#6C63FF',
    accentColorRGB: '108, 99, 255',
    status: 'Em Producao',
    statusType: 'active',
    problem: 'Processos comerciais desconectados geravam retrabalho, dados duplicados e atrasos no onboarding de novos clientes. A equipe de vendas perdia tempo com tarefas administrativas em vez de focar em conversoes.',
    context: 'Empresa com CRM, ferramenta de e-mail marketing e ERP operando de forma isolada. Necessidade de integrar tudo em um fluxo coeso e automatizado.',
    solution: 'Sistema de automacao ponta a ponta que conecta todos os sistemas criticos, eliminando handoffs manuais e garantindo que cada etapa do processo dispara a proxima automaticamente.',
    objective: 'Criar uma orquestracao empresarial inteligente que reduz drasticamente o esforco manual em vendas e onboarding.',
    techs: [
      { name: 'n8n', role: 'Motor principal de automacao e orquestracao dos workflows' },
      { name: 'Make', role: 'Automacoes complementares e integracoes com ferramentas de marketing' },
      { name: 'APIs REST', role: 'Comunicacao entre sistemas (CRM, ERP, e-mail marketing)' },
      { name: 'Webhooks', role: 'Triggers em tempo real para iniciar fluxos automaticamente' },
    ],
    metrics: [
      { value: '80%', label: 'Reducao de trabalho manual' },
      { value: '3x', label: 'Velocidade no onboarding' },
      { value: '0', label: 'Dados duplicados' },
      { value: '24/7', label: 'Operacao continua' },
    ],
    flowSteps: [
      { title: 'Captura de Lead', description: 'Webhook recebe dados do formulario e dispara o fluxo automaticamente' },
      { title: 'Qualificacao no CRM', description: 'Lead e criado e qualificado automaticamente com dados enriquecidos' },
      { title: 'Sequencia de E-mails', description: 'Campanha de nurturing personalizada iniciada automaticamente' },
      { title: 'Onboarding Automatizado', description: 'Apos conversao, sistema provisiona acesso e inicia onboarding no ERP' },
    ],
    heroVisualType: 'workflow',
  },
  {
    slug: 'assistente-ia-ecommerce',
    title: 'Assistente IA para E-commerce',
    shortTitle: 'Assistente IA E-commerce',
    subtitle: 'Chatbot inteligente com RAG para atendimento automatizado ao cliente',
    description: 'Chatbot com RAG que responde duvidas sobre produtos usando base de conhecimento da loja. Reducao de 40% no tempo de atendimento ao cliente.',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    accentColor: '#6C63FF',
    accentColorRGB: '108, 99, 255',
    status: 'Em Producao',
    statusType: 'active',
    problem: 'Atendimento ao cliente sobrecarregado com duvidas repetitivas sobre produtos, prazos e politicas. Tempo de resposta alto e equipe limitada para a demanda crescente.',
    context: 'E-commerce com catalogo extenso e grande volume de mensagens no WhatsApp. Base de conhecimento existente em documentos internos e paginas do site.',
    solution: 'Assistente inteligente treinado sobre o catalogo e documentacao da loja, capaz de responder com contexto preciso e linguagem natural via WhatsApp.',
    objective: 'Automatizar o atendimento de primeiro nivel com respostas contextuais, reduzindo carga da equipe e melhorando a experiencia do cliente.',
    techs: [
      { name: 'Python', role: 'Backend da aplicacao e logica de processamento', icon: 'devicon-python-plain' },
      { name: 'LangChain', role: 'Framework RAG para recuperacao e geracao de respostas contextuais' },
      { name: 'FastAPI', role: 'API de alta performance para servir o chatbot', icon: 'devicon-fastapi-plain' },
      { name: 'WhatsApp API', role: 'Canal de comunicacao direta com os clientes' },
    ],
    metrics: [
      { value: '40%', label: 'Reducao no tempo de atendimento' },
      { value: '92%', label: 'Precisao nas respostas' },
      { value: '< 3s', label: 'Tempo medio de resposta' },
      { value: '24/7', label: 'Disponibilidade total' },
    ],
    flowSteps: [
      { title: 'Recepcao da Mensagem', description: 'Cliente envia duvida pelo WhatsApp, webhook captura e processa' },
      { title: 'Busca Contextual', description: 'RAG busca informacoes relevantes na base de conhecimento vetorizada' },
      { title: 'Geracao da Resposta', description: 'LLM gera resposta natural e precisa baseada no contexto recuperado' },
      { title: 'Entrega e Feedback', description: 'Resposta enviada ao cliente com opcao de escalar para atendente humano' },
    ],
    heroVisualType: 'chat',
  },
  {
    slug: 'pipeline-documentos',
    title: 'Pipeline de Processamento de Documentos',
    shortTitle: 'Processamento de Documentos',
    subtitle: 'OCR + IA para extracao automatica de dados com alta precisao',
    description: 'Sistema OCR + IA que extrai dados de contratos e notas fiscais com 95% de precisao, eliminando horas de trabalho manual.',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    accentColor: '#FFB347',
    accentColorRGB: '255, 179, 71',
    status: 'Em Producao',
    statusType: 'active',
    problem: 'Equipe operacional gastava horas por dia digitando manualmente dados de contratos e notas fiscais. Alto risco de erros e gargalo no processamento de documentos.',
    context: 'Empresa que recebe centenas de documentos por semana em formatos variados (PDF, imagem, escaneados). Necessidade de extrair campos especificos com precisao e velocidade.',
    solution: 'Pipeline inteligente que combina OCR para leitura dos documentos com IA para interpretacao semantica e extracao estruturada dos dados relevantes.',
    objective: 'Automatizar completamente a extracao de dados de documentos nao estruturados, entregando informacoes limpas e organizadas para os sistemas da empresa.',
    techs: [
      { name: 'Python', role: 'Linguagem base para todo o pipeline de processamento', icon: 'devicon-python-plain' },
      { name: 'Tesseract', role: 'Engine OCR para reconhecimento optico de caracteres' },
      { name: 'OpenAI', role: 'IA para interpretacao semantica e extracao inteligente de campos' },
      { name: 'FastAPI', role: 'API para recebimento e entrega de documentos processados', icon: 'devicon-fastapi-plain' },
    ],
    metrics: [
      { value: '95%', label: 'Precisao na extracao' },
      { value: '< 10s', label: 'Processamento por documento' },
      { value: '500+', label: 'Documentos por dia' },
      { value: '90%', label: 'Reducao de trabalho manual' },
    ],
    flowSteps: [
      { title: 'Upload do Documento', description: 'Documento enviado via API ou monitoramento de pasta automatico' },
      { title: 'OCR e Pre-processamento', description: 'Tesseract extrai texto bruto, sistema normaliza e limpa o conteudo' },
      { title: 'Extracao Inteligente', description: 'IA identifica e extrai campos relevantes com interpretacao semantica' },
      { title: 'Validacao e Entrega', description: 'Dados validados e entregues em formato estruturado via API' },
    ],
    heroVisualType: 'documents',
  },
  {
    slug: 'web-scraper-inteligente',
    title: 'Web Scraper Inteligente',
    shortTitle: 'Scraper Inteligente',
    subtitle: 'Monitoramento competitivo automatizado com IA e alertas em tempo real',
    description: 'Scraper com IA que monitora concorrentes, extrai precos e gera alertas automaticos de oportunidades de mercado em tempo real.',
    category: 'scraping',
    categoryLabel: 'Web Scraping',
    accentColor: '#FF6B6B',
    accentColorRGB: '255, 107, 107',
    status: 'Concluido',
    statusType: 'done',
    problem: 'Equipe comercial monitorava precos de concorrentes manualmente, perdendo oportunidades por falta de velocidade e cobertura. Dados desatualizados prejudicavam a estrategia de pricing.',
    context: 'Mercado competitivo com dezenas de concorrentes e milhares de produtos. Necessidade de monitoramento continuo e alertas inteligentes.',
    solution: 'Scraper inteligente com IA que coleta, analisa e interpreta dados de mercado automaticamente, gerando alertas acionaveis para a equipe comercial.',
    objective: 'Fornecer inteligencia competitiva em tempo real com coleta automatizada e analise interpretativa para embasar decisoes de pricing e estrategia.',
    techs: [
      { name: 'Python', role: 'Linguagem principal para scraping e processamento', icon: 'devicon-python-plain' },
      { name: 'Selenium', role: 'Automacao de navegador para sites dinamicos e protegidos', icon: 'devicon-selenium-original' },
      { name: 'BeautifulSoup', role: 'Parsing e extracao de dados de paginas HTML' },
      { name: 'GPT-4', role: 'Analise semantica de dados e geracao de insights acionaveis' },
    ],
    metrics: [
      { value: '50+', label: 'Concorrentes monitorados' },
      { value: '< 1min', label: 'Tempo de alerta' },
      { value: '10k+', label: 'Precos acompanhados' },
      { value: '35%', label: 'Aumento em conversoes' },
    ],
    flowSteps: [
      { title: 'Coleta Automatizada', description: 'Scrapers executam em intervalos programados, coletando dados de todos os concorrentes' },
      { title: 'Processamento e Limpeza', description: 'Dados brutos sao normalizados, categorizados e armazenados' },
      { title: 'Analise com IA', description: 'GPT-4 interpreta tendencias, identifica anomalias e gera insights' },
      { title: 'Alertas e Dashboard', description: 'Oportunidades sao destacadas com alertas em tempo real para a equipe' },
    ],
    heroVisualType: 'monitor',
  },
  {
    slug: 'extracao-dados',
    title: 'Extracao de Dados em Larga Escala',
    shortTitle: 'Extracao em Larga Escala',
    subtitle: 'Infraestrutura de coleta massiva com padronizacao e entrega via API',
    description: 'Sistema de coleta automatizada de dados de mais de 500 fontes, com limpeza, padronizacao e entrega em formato estruturado via API.',
    category: 'scraping',
    categoryLabel: 'Web Scraping',
    accentColor: '#00D4AA',
    accentColorRGB: '0, 212, 170',
    status: 'Concluido',
    statusType: 'done',
    problem: 'Necessidade de agregar dados de centenas de fontes heterogeneas para alimentar sistemas analiticos. Processos manuais eram inescalaveis e propensos a falhas.',
    context: 'Projeto de data engineering com demanda de ingestao massiva de dados publicos e semi-estruturados de multiplos dominios e formatos.',
    solution: 'Infraestrutura robusta de web scraping distribuido com pipeline de limpeza e padronizacao, entregando dados estruturados e confiveis via API RESTful.',
    objective: 'Construir uma plataforma escalavel de coleta de dados que opere de forma continua, confiavel e com entrega padronizada para consumo downstream.',
    techs: [
      { name: 'Python', role: 'Linguagem core para scrapers e pipeline de dados', icon: 'devicon-python-plain' },
      { name: 'Scrapy', role: 'Framework de scraping distribuido para coleta em larga escala' },
      { name: 'Pandas', role: 'Transformacao, limpeza e padronizacao dos dados coletados', icon: 'devicon-pandas-plain' },
      { name: 'PostgreSQL', role: 'Banco de dados relacional para armazenamento estruturado', icon: 'devicon-postgresql-plain' },
    ],
    metrics: [
      { value: '500+', label: 'Fontes de dados' },
      { value: '1M+', label: 'Registros processados/dia' },
      { value: '99.5%', label: 'Uptime do sistema' },
      { value: '< 2%', label: 'Taxa de erro' },
    ],
    flowSteps: [
      { title: 'Crawling Distribuido', description: 'Scrapy orquestra centenas de spiders em paralelo para coleta massiva' },
      { title: 'Pipeline de Limpeza', description: 'Dados brutos passam por validacao, deduplicacao e normalizacao' },
      { title: 'Armazenamento', description: 'PostgreSQL armazena dados estruturados com versionamento e historico' },
      { title: 'API de Entrega', description: 'API RESTful com paginacao, filtros e documentacao para consumo externo' },
    ],
    heroVisualType: 'pipeline',
  },
  {
    slug: 'site-corretora-imoveis',
    title: 'Site Corretora de Imoveis',
    shortTitle: 'Corretora de Imoveis',
    subtitle: 'Website premium para corretora imobiliaria na Bahia',
    description: 'Site de alto padrao para corretora de imoveis atuando em Salvador, Feira de Santana e Alagoinhas, com catalogo de imoveis, sistema de busca e integracao WhatsApp.',
    category: 'automacao',
    categoryLabel: 'Web Development',
    accentColor: '#D4A843',
    accentColorRGB: '212, 168, 67',
    status: 'Concluido',
    statusType: 'done',
    problem: 'Corretora de imoveis precisava de presenca digital profissional para atrair clientes de alto padrao em 3 cidades da Bahia.',
    context: 'Mercado imobiliario competitivo na Bahia, necessidade de site premium com catalogo de imoveis, busca inteligente e captura de leads via WhatsApp.',
    solution: 'Desenvolvimento de website moderno com Next.js, design luxuoso inspirado em imobiliarias de Miami/Dubai, catalogo completo com filtros e integracao direta com WhatsApp.',
    objective: 'Criar uma plataforma digital premium que transmita confianca e sofisticacao, aumentando a captacao de leads qualificados.',
    techs: [
      { name: 'Next.js', role: 'Framework fullstack para renderizacao hibrida e performance otimizada', icon: 'devicon-nextjs-plain' },
      { name: 'React', role: 'Biblioteca de componentes para interface interativa e responsiva', icon: 'devicon-react-original' },
      { name: 'TypeScript', role: 'Tipagem estatica para maior seguranca e manutencao do codigo', icon: 'devicon-typescript-plain' },
      { name: 'Tailwind CSS', role: 'Estilizacao utilitaria para design luxuoso e responsivo', icon: 'devicon-tailwindcss-original' },
      { name: 'Framer Motion', role: 'Animacoes fluidas e transicoes elegantes para experiencia premium' },
    ],
    metrics: [
      { value: '7', label: 'Paginas' },
      { value: '8', label: 'Imoveis' },
      { value: '100%', label: 'Responsivo' },
      { value: 'SEO', label: 'Otimizado' },
    ],
    flowSteps: [
      { title: 'Planejamento e Design', description: 'Definicao da identidade visual premium e arquitetura de informacao do site' },
      { title: 'Desenvolvimento Frontend', description: 'Construcao das paginas com Next.js, Tailwind CSS e animacoes com Framer Motion' },
      { title: 'Catalogo de Imoveis', description: 'Implementacao do catalogo com filtros por cidade, tipo e faixa de preco' },
      { title: 'Integracoes', description: 'Configuracao da integracao com WhatsApp para captura de leads e contato direto' },
      { title: 'Deploy e Otimizacao', description: 'Publicacao com otimizacao de SEO, performance e responsividade em todos os dispositivos' },
    ],
    heroVisualType: 'website',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category)
}
