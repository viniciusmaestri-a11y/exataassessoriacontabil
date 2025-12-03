import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'abertura-encerramento',
    title: 'Abertura e Encerramento de Empresas',
    description: 'Acompanhamento completo em todas as etapas da vida da sua empresa, desde a abertura até o encerramento.',
    icon: 'Building2',
    features: [
      'Abertura de empresa',
      'Alteração contratual',
      'Transferência de titularidade',
      'Encerramento de empresa',
      'Emissão e desembaraço de certidões',
      'Regularização de obras',
      'Acompanhamento legal completo',
      'Consultoria para escolha do melhor regime tributário'
    ]
  },
  {
    id: 'planejamento-tributario',
    title: 'Planejamento Tributário e Fiscal',
    description: 'Gestão estratégica dos tributos para reduzir custos e garantir conformidade legal.',
    icon: 'Calculator',
    features: [
      'Controle e aplicação das normas fiscais',
      'Escrituração de IPI, ICMS e ISS',
      'Emissão de guias de recolhimento',
      'Controle tributário completo',
      'Análise de regime tributário',
      'Planejamento de economia fiscal',
      'Adequação ao Simples Nacional, Lucro Real ou Presumido',
      'Consultoria tributária especializada'
    ]
  },
  {
    id: 'contabilidade-geral',
    title: 'Contabilidade Geral',
    description: 'Serviços contábeis completos para manter sua empresa organizada e em conformidade.',
    icon: 'FileText',
    features: [
      'Conciliações contábeis',
      'Controle de ativo imobilizado',
      'Lançamentos contábeis',
      'Balanço patrimonial',
      'Demonstração do Resultado do Exercício (DRE)',
      'Notas explicativas',
      'Livros Diário e Razão',
      'DCTFWEB, DIRF, ECD, ECF',
      'Declaração de IRPF e IRPJ',
      'Assessoria contábil estratégica'
    ]
  },
  {
    id: 'departamento-pessoal',
    title: 'Departamento Pessoal',
    description: 'Gestão completa de recursos humanos e obrigações trabalhistas.',
    icon: 'Users',
    features: [
      'Registro de empregados',
      'Folha de pagamento',
      'Cálculo de pró-labore',
      '13º salário',
      'Rescisões trabalhistas',
      'Controle de férias',
      'CAGED e eSocial',
      'Informes de rendimento',
      'Obrigações trabalhistas e previdenciárias',
      'Entrega de declarações obrigatórias'
    ]
  }
];
