# Eatcouver | Site Institucional

Site da Eatcouver, agência de Vancouver (Canadá) que produz conteúdo com criadores para restaurantes, construído em torno de vídeo, movimento e prova social.

Ao vivo: [www.eatcouver.ca](https://www.eatcouver.ca)

Site construído por Pedro Paulo Lacerda para a Eatcouver, desenvolvido em colaboração, com contribuições de design e conteúdo integradas via pull requests. O site é em inglês, voltado ao público de Vancouver.

## Destaques

- **Hero em vídeo com título animado**: vídeo de fundo em autoplay e título revelado letra a letra; ao rolar, o hero fixo encolhe e esmaece enquanto as próximas seções sobem por cima dele.
- **Carrossel de vídeos verticais em leque**: cards 9:16 com rotação automática a cada 4 segundos, pausa enquanto um vídeo toca, arraste com mouse ou dedo, layout próprio para mobile e contadores animados logo abaixo.
- **Serviços com animação guiada pelo scroll**: título revelado por máscara e linhas que se desempilham conforme o usuário rola a página.
- **Parede de marcas parceiras**: na home, quatro fileiras em marquee com direções e velocidades alternadas; em `/partners`, a grade completa com 178 logos carregados sob demanda.
- **Páginas internas** `/team` e `/story`, com preloader da marca na primeira carga e barra de progresso na troca de rota.
- **Modal de contato** com agendamento de chamada e e-mail, aberto automaticamente uma única vez por sessão, depois que o visitante rola 35% da página.
- **SEO técnico**: metadados Open Graph e Twitter Card, URL canônica, dados estruturados JSON-LD (`LocalBusiness`), `sitemap.xml` e `robots.txt` gerados pelo Next.js.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- framer-motion 12 (scroll, transições e microinterações)
- ESLint 9 com `eslint-config-next`

## Estrutura

```
eat-website/
├── src/
│   ├── app/              # home, rotas /team, /story e /partners, layout com metadados
│   │   ├── robots.ts     # gera o robots.txt
│   │   └── sitemap.ts    # gera o sitemap.xml
│   ├── components/       # seções, carrosséis, modal, navegação e loaders
│   └── data/
│       └── content.json  # textos de equipe e dados de contato
└── public/               # vídeos, fotos, logos de parceiros, equipe e cursores personalizados
```

## Como rodar localmente

Pré-requisito: Node.js 20.9 ou superior (exigência do Next.js 16).

```bash
git clone https://github.com/pplacerda07/eat-website.git
cd eat-website
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Não há variáveis de ambiente obrigatórias.

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Decisões técnicas

- **Efeito de pilha com CSS e framer-motion**: o hero usa `position: sticky` e cada seção seguinte entra com `z-index` crescente, margem negativa e cantos arredondados; `useScroll` e `useTransform` controlam escala e opacidade a partir do progresso da rolagem.
- **Carregamento incremental da parede de parceiros**: os logos aparecem em lotes de 24 disparados por um `IntersectionObserver` com margem de 400px; cada imagem usa lazy loading, tenta carregar de novo até duas vezes com parâmetro anti-cache e é ocultada se continuar falhando.
- **SEO local pensado desde o layout**: a Metadata API do Next.js concentra Open Graph, Twitter Card, canonical e diretivas para o Googlebot, e a home injeta o JSON-LD `LocalBusiness` com a área atendida.
- **Conteúdo separado do código**: dados de equipe e contato ficam em `src/data/content.json`, e seções opcionais podem ser ligadas ou desligadas por flag (como os depoimentos, hoje desativados).

## Autor

Pedro Paulo Lacerda · [github.com/pplacerda07](https://github.com/pplacerda07)
