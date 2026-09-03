/**
 * Dados reais do Paraíso do Sorriso — só o que foi confirmado.
 * Tratamentos, profissionais, diferenciais, horário completo e depoimentos
 * ainda não foram fornecidos: ficam como placeholder explícito até chegar
 * o conteúdo real. Edite este arquivo quando os dados chegarem.
 */

const CLINICA_DATA = {
  negocio: {
    nome: "Paraíso do Sorriso",
    categoria: "Clínica odontológica",
    // Tagline real, do logo enviado pela clínica.
    tagline: "Odontologia Moderna e Preventiva",
    endereco: {
      linha1: "Estr. dos Romeiros, 619",
      linha2: "Jardim Regina Alice",
      linha3: "Barueri - SP",
      cep: "06412-000",
    },
    telefone: "(11) 95374-9949",
    telefoneLink: "tel:+5511953749949",
    whatsapp: "+55 11 95374-9949",
    whatsappLink: "https://wa.me/5511953749949",
    // O Google mostra a clínica aberta até 18h hoje, mas isso não é o
    // horário semanal completo — não assumir isso como regra fixa.
    horario: "[Horário de funcionamento completo]",
  },

  avaliacao: {
    nota: 4.5,
    total: 22,
  },

  // Placeholders no formato pedido — NÃO são os tratamentos reais da
  // clínica. Substituir quando o cardápio de tratamentos for enviado.
  tratamentos: [
    { nome: "[Tratamento 1]", descricao: "[Descrição curta]" },
    { nome: "[Tratamento 2]", descricao: "[Descrição curta]" },
    { nome: "[Tratamento 3]", descricao: "[Descrição curta]" },
    { nome: "[Tratamento 4]", descricao: "[Descrição curta]" },
    { nome: "[Tratamento 5]", descricao: "[Descrição curta]" },
    { nome: "[Tratamento 6]", descricao: "[Descrição curta]" },
  ],

  // Nome e foto confirmados pela própria clínica (jaleco com o nome
  // bordado). Especialidade e apresentação ainda não foram informadas.
  profissionais: [
    {
      nome: "Dra. Camila França",
      especialidade: "[Especialidade]",
      apresentacao: "[Breve apresentação]",
      foto: "images/profissionais/camila-franca.jpg",
    },
  ],

  // Diferenciais reais ainda não confirmados — só a estrutura.
  diferenciais: [
    { titulo: "Atendimento", texto: "[A confirmar]" },
    { titulo: "Experiência", texto: "[A confirmar]" },
    { titulo: "Estrutura", texto: "[A confirmar]" },
    { titulo: "Tecnologia", texto: "[A confirmar]" },
    { titulo: "Conforto", texto: "[A confirmar]" },
  ],

  // Nenhum depoimento de texto foi fornecido ainda — só a nota agregada
  // do Google é real (usada no Hero e na seção de Avaliações).
  depoimentos: [],
};
