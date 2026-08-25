export const siteConfig = {
  name: "Realizzare Viagens",
  tagline: "Realizando sonhos",
  headline: "Perca-se. Descubra-se.",
  description:
    "Agência de viagens com atendimento personalizado, pacotes exclusivos e bases de apoio no Brasil e em Portugal.",
  email: "realizzareviagens@realizzareviagens.com",
  whatsappUrl: "https://wa.me/message/JAWQ3KKV2YRLP1",
  whatsappMessage:
    "Olá! Vim pelo site da Realizzare Viagens e gostaria de montar uma viagem.",
  instagram: "https://www.instagram.com/realizzareviagens/",
  instagramHandle: "realizzareviagens",
  facebook: "https://www.facebook.com/realizzareviagens/",
  cadastur: true,
  googleMapsQuery: "Realizzare Viagens Porto Alegre e Balneário Camboriú",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Realizzare%20Viagens%20Porto%20Alegre%20e%20Balne%C3%A1rio%20Cambori%C3%BA",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Destinos", href: "#destinos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export const offices = [
  {
    city: "Balneário Camboriú",
    region: "Santa Catarina",
    cep: "88331-120",
  },
  {
    city: "Porto Alegre",
    region: "Rio Grande do Sul",
    cep: "90251-083",
  },
  {
    city: "Porto",
    region: "Portugal",
    cep: null,
  },
];

export const partners = [
  {
    name: "Augusto Andreis Sabbi",
    role: "Sócio-proprietário",
    quote:
      "Trabalhamos com os sonhos das pessoas, por isso proporcionamos segurança, transparência e agilidade para nossos clientes.",
    instagram: "https://www.instagram.com/gutosabbi/",
    handle: "gutosabbi",
  },
  {
    name: "Alexandre Delaix",
    role: "Sócio-proprietário",
    quote:
      "Proporcionar aos meus amigos e clientes novas descobertas é uma realização profissional.",
    instagram: "https://www.instagram.com/aledelaix/",
    handle: "aledelaix",
  },
];

export const experiences = [
  {
    title: "Comida",
    description: "Gastronomia local, restaurantes e experiências à mesa em cada destino.",
    icon: "utensils" as const,
  },
  {
    title: "Diversão",
    description: "Passeios, parques, vida noturna e roteiros pensados para curtir.",
    icon: "sparkles" as const,
  },
  {
    title: "Relax",
    description: "Praias, resorts e momentos de descanso com o ritmo que você escolher.",
    icon: "palm" as const,
  },
];

export const destinations = [
  {
    slug: "rio-de-janeiro",
    title: "Rio de Janeiro",
    subtitle: "A Cidade Maravilhosa",
    region: "Brasil",
    image: "/images/rio.jpg",
    featured: true,
  },
  {
    slug: "nordeste",
    title: "Nordeste",
    subtitle: "Praias e cultura do Brasil",
    region: "Brasil",
    image: "/images/nordeste.jpg",
    featured: true,
  },
  {
    slug: "europa",
    title: "Europa",
    subtitle: "Paris · Londres · Roma",
    region: "Internacional",
    image: "/images/europa.jpg",
    featured: false,
  },
  {
    slug: "estados-unidos",
    title: "Estados Unidos",
    subtitle: "Cidades, parques e costa oeste",
    region: "Internacional",
    image: "/images/eua.jpg",
    featured: false,
  },
  {
    slug: "dubai",
    title: "Dubai",
    subtitle: "Passeios, modernidade e luxo",
    region: "Emirados Árabes",
    image: "/images/dubai.jpg",
    featured: false,
  },
  {
    slug: "saara",
    title: "Saara",
    subtitle: "Os últimos paraísos na Terra",
    region: "África",
    image: "/images/saara.jpg",
    featured: false,
  },
];

export const stories = [
  {
    title: "Jerusalém",
    location: "Israel",
    excerpt:
      "A Cidade Sagrada é o destino mais visitado de Israel. Entre pontos de relevância religiosa e atrações históricas, há um roteiro para cada viajante.",
    image: "/images/jerusalem.jpg",
  },
  {
    title: "Tailândia",
    location: "Ásia",
    excerpt:
      "Praias paradisíacas, festas, gastronomia e preços competitivos — motivos de sobra para o destino preferido de cada vez mais brasileiros.",
    image: "/images/tailandia.jpg",
  },
  {
    title: "Disney Orlando",
    location: "Parques temáticos",
    excerpt:
      "O complexo mais famoso fica em Orlando, mas há parques também na Califórnia, Europa, Tóquio, Xangai e Hong Kong. Montamos o roteiro certo para a sua família.",
    image: "/images/parques.jpg",
  },
];

export const services = [
  {
    title: "Passagens aéreas",
    description: "Trechos nacionais e internacionais com as melhores combinações de horário e tarifa.",
  },
  {
    title: "Hospedagens",
    description: "Hotéis, resorts e estadias selecionadas para o perfil da sua viagem.",
  },
  {
    title: "Ingressos e passeios",
    description: "Atrações, parques e experiências reservados com antecedência.",
  },
  {
    title: "Transfers e carros",
    description: "Traslado aeroporto–hotel e locação de veículos no destino.",
  },
  {
    title: "Design de viagem",
    description: "Roteiro sob medida: você conta o sonho, nós montamos o tour.",
  },
  {
    title: "Consultoria",
    description: "Orientação completa para viajar com segurança, agilidade e menos burocracia.",
  },
];

export const testimonials = [
  {
    quote:
      "Fechei um pacote com a Realizzare e tive uma experiência excelente. A equipe foi muito atenciosa, sempre disponível para tirar dúvidas e fornecer dicas valiosas para a viagem. Além disso, eles respondem rapidamente as mensagens, o que me deu muita confiança e tranquilidade. Recomendo o trabalho deles, foi tudo ótimo!",
    author: "Renata Gomes",
    source: "Google Avaliações",
  },
  {
    quote:
      "Comprei as passagens para os meus pais do Brasil para Portugal, e alguns passeios. O atendimento foi sempre muito atencioso e eficiente. Ótimos preços e empresa confiável — já viramos cliente e super indico!",
    author: "Aline Vargas",
    source: "Google Avaliações",
  },
];

export const values = [
  {
    title: "Missão",
    text: "Encontrar as melhores soluções de turismo com um atendimento personalizado, para proporcionar aos nossos clientes mais agilidade, conhecimento, segurança e tecnologia quando o assunto é viagem.",
  },
  {
    title: "Visão",
    text: "Uma empresa com padrões de excelência, gerando mais confiabilidade para nossa equipe e clientes, proporcionando voos mais altos.",
  },
  {
    title: "Valores",
    text: "Ética, transparência, agilidade, confiança e qualidade são valores fundamentais para a Realizzare.",
  },
];
