# Documentação Cervejaria Neumann

## Arquivo App.js
O arquivo `App.js` é o ponto de entrada principal da aplicação React. Ele é responsável por renderizar os principais componentes que compõem a estrutura da página.

- **Componentes Renderizados:**
  - `<NavBar />`: Renderiza a barra de navegação superior da página.
  - `<Header />`: Renderiza o cabeçalho da página, geralmente contendo uma imagem de destaque e uma mensagem de boas-vindas.
  - `<About />`: Renderiza a seção "Sobre" da página, onde são exibidas informações sobre a empresa ou produto.
  - `<Products />`: Renderiza a seção de produtos, onde são exibidos os diferentes produtos oferecidos pela empresa.
  - `<Calculate />`: Renderiza a calculadora, uma ferramenta interativa para calcular diferentes aspectos relacionados aos produtos ou serviços oferecidos.
  - `<Gallery />`: Renderiza a galeria de fotos, exibindo uma coleção de imagens relacionadas ao produto ou empresa.
  - `<Faq />`: Renderiza a seção de perguntas frequentes, onde são respondidas as dúvidas mais comuns dos usuários.
  - `<Footer />`: Renderiza o rodapé da página, geralmente contendo informações de contato, links úteis e direitos autorais.
  - `<End />`: Renderiza a seção final da página, exibindo informações legais, como direitos autorais, e reconhecimento do desenvolvedor.

- **Componentes Adicionais:**
  - `<IsOver18 />`: Renderiza um modal para confirmar se o usuário é maior de idade antes de acessar o site.
  - `<MoveToTop />`: Renderiza um botão que permite ao usuário rolar suavemente até o topo da página.

O arquivo `App.js` é essencial para a estrutura e organização da aplicação React, pois define quais componentes serão renderizados e em que ordem eles aparecerão na página. Ele serve como



## Arquivo tailwind.config.js
O arquivo `tailwind.config.js` é utilizado para configurar e personalizar o framework Tailwind CSS de acordo com as necessidades específicas do projeto.

- **Configuração de Conteúdo:**
  - Define quais arquivos serão analisados pelo Tailwind CSS em busca de classes não utilizadas.
  - Neste caso, os arquivos JavaScript e TypeScript dentro da pasta `src` serão considerados.

- **Extensão do Tema:**
  - Personaliza e estende o tema padrão do Tailwind CSS.
  - Define novas cores personalizadas para serem utilizadas na estilização dos componentes.
  - As cores adicionadas são: `gray-dark`, `gold`, `gold-light` e `off-white`.

- **Plugins:**
  - Não são utilizados plugins adicionais neste projeto.

Este arquivo é essencial para configurar as opções específicas do projeto no Tailwind CSS, como cores personalizadas, extensões do tema e quais arquivos devem ser analisados para eliminação de classes não utilizadas.



# Componentes

## Componente IsOver18
O componente `IsOver18` é responsável por exibir um modal de verificação de idade para garantir que o usuário seja maior de 18 anos antes de acessar o site.

- **Funcionalidade:**
  - Exibe um modal ao entrar no site, perguntando ao usuário se ele é maior de idade.
  - Permite que o usuário escolha entre "Sim" e "Não" como resposta.
  - Redireciona o usuário para o Google ao clicar em "Não".
  
- **Implementação:**
  - Utiliza o estado `openModal` para controlar a exibição do modal.
  - Usa os hooks `useEffect` para abrir o modal após um atraso de 1 segundo e para adicionar/remover a classe `overflow-hidden` no corpo do documento.
  - Define a função `handleNoClick` para fechar o modal e redirecionar para o Google ao clicar em "Não".



## Componente NavBar
O componente NavBar fornece funcionalidade de navegação para o seu site. Aqui está uma descrição de suas características e implementação:

- O componente inclui uma versão móvel e desktop da barra de navegação.
- Ele utiliza hooks de estado do React (`useState`) para lidar com a alternância do menu (`menuOpen` state).
- O hook `useEffect` é usado para lidar com eventos de clique fora para fechar o menu quando clicado fora.
- A versão móvel da barra de navegação é revelada em telas menores (`lg:hidden`), apresentando um ícone de menu para alternar a navegação.
- Clicar no ícone do menu alterna o estado `menuOpen`, mostrando ou ocultando o menu de navegação.
- Links de navegação (`Sobre`, `Produtos`, `Calculadora`, `Fotos`, `Perguntas`) são apresentados no menu, e clicar em qualquer um deles fecha o menu automaticamente.
- Ícones de mídia social (`WhatsApp` e `Instagram`) estão presentes no menu, fornecendo links para suas respectivas páginas.

Este componente é essencial para a navegação intuitiva e eficiente do seu site, garantindo uma experiência de usuário agradável em diferentes dispositivos.



## Componente Header
O componente `Header` é responsável por renderizar a seção de cabeçalho do site, que geralmente contém um vídeo de fundo e o logotipo da empresa.

- **Funcionalidade:**
  - Exibe um vídeo de fundo em loop e com reprodução automática.
  - Inclui o logotipo da empresa centralizado na tela.

- **Implementação:**
  - O vídeo de fundo é definido como um elemento `<video>` com a propriedade `autoPlay`, `muted` e `loop` para reprodução automática, mudo e loop, respectivamente.
  - O logotipo da empresa é renderizado como uma imagem dentro de um contêiner flexível para centralizá-lo na tela.
  - O efeito de revelação é adicionado ao logotipo usando a biblioteca ScrollReveal, fazendo com que ele apareça com uma animação ao ser visualizado pela primeira vez.

- **Detalhes Técnicos:**
  - O efeito de revelação é configurado para ocorrer somente uma vez, garantindo uma animação suave durante o carregamento da página.
  - O vídeo de fundo é definido como objeto de cobertura (`object-cover`) para preencher todo o espaço disponível, mantendo a proporção.
  - Se o navegador do usuário não suportar vídeos HTML5, uma mensagem alternativa será exibida.

Este componente cria uma seção de cabeçalho atraente e responsiva para o site, utilizando um vídeo de fundo e animação para destacar o logotipo da empresa.



## Componente About
O componente About é responsável por exibir informações sobre a cervejaria Neumann. Aqui está uma descrição detalhada do componente:

- **Funcionalidade:**
  - O componente exibe detalhes sobre a história e tradição da cervejaria Neumann desde 1885.
  - Utiliza a biblioteca ScrollReveal para animar a entrada dos elementos na página.
  
- **Implementação:**
  - Importa imagens necessárias para exibição, como a textura de fundo e a foto representativa da cervejaria.
  - O componente é uma seção (`<section>`) com o ID "sobre".
  - Possui duas seções dentro da seção principal: uma para exibir a imagem da cervejaria e outra para exibir o texto explicativo.
  - As imagens são carregadas dinamicamente utilizando o `import` do webpack.
  
- **Detalhes Técnicos:**
  - Utiliza o hook `useEffect` para inicializar o ScrollReveal com efeito de animação nos elementos.
  - As classes CSS "imageAbout" e "textAbout" são utilizadas como seletores para aplicar as animações de entrada nos elementos correspondentes.
  - As animações são configuradas para terem uma duração de 2000ms, com origem da animação à esquerda para a imagem e à direita para o texto, a uma distância de 150px.

Este componente desempenha um papel crucial na apresentação da história e tradição da cervejaria Neumann, contribuindo para uma experiência envolvente e informativa para os usuários.



## Componente Products
O componente Products é responsável por exibir os produtos oferecidos pela cervejaria Neumann. Aqui está uma descrição detalhada do componente:

- **Funcionalidade:**
  - O componente apresenta os diferentes tipos de chopp disponíveis para eventos e festas.
  - Utiliza a biblioteca ScrollReveal para animar a entrada dos elementos na página.
  
- **Implementação:**
  - Importa as imagens necessárias para exibição, como o parallax de fundo e as imagens dos produtos.
  - O componente é uma seção (`<section>`) com o ID "produtos".
  - Divide os produtos em três seções diferentes, cada uma exibindo informações sobre um tipo específico de chopp.
  - Cada seção de produto inclui uma imagem representativa, detalhes sobre o chopp, como tipo, descrição, ABV (teor alcoólico) e IBU (amargor), e um botão "EU QUERO" que redireciona para o WhatsApp com uma mensagem pré-definida.
  
- **Detalhes Técnicos:**
  - Utiliza o hook `useEffect` para inicializar o ScrollReveal com efeito de animação nos elementos.
  - As classes CSS "titleProduct", "product1", "product2" e "product3" são utilizadas como seletores para aplicar as animações de entrada nos elementos correspondentes.
  - As animações são configuradas para terem uma duração de 1000ms, com origem da animação de baixo para cima nos títulos dos produtos, e um pequeno atraso entre as animações de cada produto.

Este componente oferece uma apresentação visualmente atraente e informativa dos produtos da cervejaria Neumann, facilitando a escolha e contato para potenciais clientes.



## Componente Calculate
O componente Calculate fornece funcionalidade para calcular a quantidade de chopp necessária para um evento. Abaixo estão detalhes sobre suas características e implementação:

- **Funcionalidade:**
  - O componente permite ao usuário calcular a quantidade de chopp necessária para um evento específico.
  - Inclui um botão "CALCULAR QUANTIDADE DE CHOPP" que abre um modal com um formulário para inserir informações sobre o evento.
  - Utiliza a biblioteca ScrollReveal para animar a entrada do título e do botão.

- **Implementação:**
  - O componente é uma seção (`<section>`) com o ID "calculadora".
  - Apresenta um título destacado que descreve a funcionalidade do componente.
  - Inclui um botão "CALCULAR QUANTIDADE DE CHOPP" que, quando clicado, abre um modal para inserção de dados adicionais.
  - Utiliza uma imagem de fundo para adicionar um visual atraente à seção.
  - Quando o modal está aberto, adiciona a classe "overflow-hidden" ao `<body>` para evitar a rolagem da página de fundo.

- **Detalhes Técnicos:**
  - Utiliza o hook `useState` para controlar o estado de abertura do modal.
  - Utiliza o hook `useEffect` para inicializar o ScrollReveal com efeito de animação nos elementos.
  - A animação é configurada para ter uma duração de 1000ms, com origem de baixo para cima nos elementos.
  - Quando o modal é aberto, adiciona a classe "overflow-hidden" ao `<body>` para evitar a rolagem da página de fundo.

Este componente é útil para os usuários que desejam planejar a quantidade de chopp para seus eventos, oferecendo uma maneira conveniente e intuitiva de realizar esse cálculo.



## Componente OpenCalculate (Modal de Calculate)
O componente OpenCalculate é o modal utilizado para calcular a quantidade de chopp necessária para um evento. Abaixo estão detalhes sobre suas características e implementação:

- **Funcionalidade:**
  - O modal apresenta um formulário onde o usuário pode inserir a quantidade de pessoas que irão beber chopp e a estimativa de duração do evento.
  - Calcula automaticamente a quantidade estimada de chopp necessária com base nas informações fornecidas pelo usuário.
  - Oferece a opção de fazer um pedido através de um botão "QUERO COMPRAR", que direciona o usuário para uma página de contato via WhatsApp.

- **Implementação:**
  - O modal é composto por três seções distintas:
    1. Seção para inserir a quantidade de pessoas que beberão o chopp.
    2. Seção para inserir a estimativa de duração do evento.
    3. Seção que mostra a estimativa de chopp necessária para o evento.
  - Utiliza ícones visuais para cada seção, tornando a interface mais intuitiva.
  - Fornece feedback em tempo real sobre a estimativa de chopp necessária à medida que o usuário preenche o formulário.
  - Inclui um botão "QUERO COMPRAR" que redireciona o usuário para uma página de contato via WhatsApp.

- **Detalhes Técnicos:**
  - Utiliza o hook `useState` para controlar o estado das entradas do formulário e a estimativa de chopp.
  - Implementa funções de manipulação de eventos para atualizar a estimativa de chopp à medida que o usuário preenche o formulário.
  - Adapta-se para exibição em dispositivos móveis e desktops, fornecendo uma experiência consistente em todas as plataformas.

Este componente é essencial para ajudar os usuários a planejar a quantidade de chopp necessária para seus eventos, oferecendo uma interface interativa e fácil de usar para realizar esses cálculos.



## Componente Pictures
O componente Pictures exibe uma galeria de imagens usando o swiper para permitir a navegação entre elas. Abaixo estão detalhes sobre suas características e implementação:

- **Funcionalidade:**
  - Apresenta uma galeria de imagens com a capacidade de navegar entre elas horizontalmente.
  - Oferece botões de navegação para avançar e retroceder entre as imagens.
  - Adapta-se responsivamente para exibir um número diferente de imagens por slide, dependendo do tamanho da tela do dispositivo.
  - Utiliza efeitos de transição suaves ao navegar entre as imagens.

- **Implementação:**
  - O componente utiliza a biblioteca Swiper para criar a galeria de imagens.
  - As imagens são fornecidas como um array de URLs de imagens.
  - Configurações específicas do Swiper são definidas para determinar o número de imagens visíveis por slide em diferentes tamanhos de tela.
  - Cada imagem é renderizada dentro de um SwiperSlide e é exibida com o componente `img` do HTML.

- **Detalhes Técnicos:**
  - O componente faz uso do hook `useEffect` para aplicar uma animação de revelação quando a galeria é exibida na tela pela primeira vez.
  - As configurações do Swiper, como navegação, paginação e número de slides por view, são definidas como propriedades do objeto `settings`.
  - As imagens são mapeadas do array `images` para criar os SwiperSlides dinamicamente.
  - A altura das imagens é definida como `h-96` para garantir que todas as imagens tenham a mesma altura e sejam exibidas corretamente na galeria.

Este componente oferece uma maneira elegante e responsiva de exibir uma coleção de imagens, com controles de navegação intuitivos e efeitos visuais atraentes.



## Componente FAQ
O componente FAQ exibe uma lista de perguntas frequentes junto com suas respostas. Abaixo estão detalhes sobre suas características e implementação:

- **Funcionalidade:**
  - Apresenta uma lista de perguntas frequentes que podem ser expandidas para exibir suas respostas.
  - Permite que o usuário clique em uma pergunta para expandir ou recolher sua resposta correspondente.
  - Utiliza animações suaves para revelar as perguntas e respostas quando o componente é visualizado na tela.

- **Implementação:**
  - As perguntas e respostas são fornecidas como um array de objetos, onde cada objeto contém uma pergunta e sua resposta correspondente.
  - Um estado local `activeIndex` é usado para controlar qual pergunta está atualmente expandida.
  - O componente utiliza o hook `useInView` para detectar quando ele está visível na tela e, em seguida, aplica a animação de revelação das perguntas e respostas.
  - Cada pergunta é representada como um elemento `<article>`, e quando clicada, a resposta correspondente é exibida abaixo dela.

- **Detalhes Técnicos:**
  - O componente utiliza o atributo `dangerouslySetInnerHTML` para exibir as respostas em HTML, permitindo que o texto formatado seja renderizado corretamente.
  - As animações de revelação são aplicadas usando a biblioteca ScrollReveal quando o componente está visível na tela.
  - Uma imagem de uma máquina de chopp é exibida ao lado das perguntas frequentes em telas maiores, fornecendo um contexto visual para o conteúdo.

Este componente oferece uma maneira conveniente e acessível de fornecer informações importantes aos usuários sobre o produto ou serviço oferecido, respondendo às perguntas mais comuns de forma clara e concisa.



## Componente Footer
O componente Footer representa a seção de rodapé de uma página web. Abaixo estão os detalhes sobre suas características e implementação:

- **Funcionalidade:**
  - Apresenta informações de contato, links úteis e links para seções importantes do site.
  - Inclui ícones para as redes sociais Instagram e WhatsApp.
  - Aplica animações de revelação aos elementos quando o componente é visualizado na tela.

- **Implementação:**
  - O conteúdo do rodapé é dividido em quatro seções principais, cada uma representada por um `<div>` separado:
    1. **Fábrica:** Contém o endereço da fábrica, endereço do depósito e número de telefone de contato.
    2. **Navegue:** Apresenta links para seções importantes do site, como "Sobre", "Produtos", "Calculadora", "Fotos" e "Perguntas".
    3. **Produtos:** Lista os produtos oferecidos, com links para seções específicas relacionadas a cada produto.
    4. **Redes Sociais:** Exibe o logotipo da empresa e ícones para as redes sociais Instagram e WhatsApp.

- **Detalhes Técnicos:**
  - O componente utiliza o hook `useEffect` para aplicar animações de revelação aos elementos do rodapé quando são visualizados na tela.
  - Os links são fornecidos com âncoras para diferentes seções da página, permitindo uma navegação suave para o usuário.
  - Ícones para redes sociais são incluídos usando os componentes `FaInstagram` e `FaWhatsapp` do pacote `react-icons/fa`.
  - O estilo do rodapé inclui uma imagem de textura de fundo para adicionar interesse visual.

Este componente oferece uma maneira eficaz de apresentar informações de contato e navegação importante, enquanto também promove a presença da marca nas redes sociais.



## Componente End
O componente End é responsável por renderizar a seção final do site, geralmente exibindo informações sobre os direitos autorais e o desenvolvedor do site.

- **Funcionalidade:**
  - Exibe o ano atual e os direitos autorais da Cervejaria Neumann.
  - Inclui um link para o perfil do desenvolvedor no Instagram.
  - Mostra uma mensagem de agradecimento "Feito com ♥".

- **Implementação:**
  - O conteúdo é organizado em uma `<section>` com uma imagem de fundo parallax.
  - Dentro da `<div>`, há dois parágrafos, cada um contendo as informações de direitos autorais e desenvolvimento.
  - O ano atual é obtido dinamicamente usando `new Date().getFullYear()`.

- **Detalhes Técnicos:**
  - O estilo da imagem de fundo é definido inline usando a propriedade `backgroundImage`.
  - O link para o perfil do desenvolvedor abre em uma nova guia usando `target="_blank" rel="noopener noreferrer"`.
  - O desenvolvedor inclui um toque pessoal na seção com a mensagem "Feito com ♥".

Este componente é uma maneira adequada de encerrar o site, fornecendo informações legais importantes e reconhecendo o trabalho do desenvolvedor.



## Componente MoveToTop
O componente `MoveToTop` é responsável por exibir um botão que permite ao usuário retornar ao topo da página quando ele rolar para baixo.

- **Funcionalidade:**
  - Exibe um botão quando o usuário rolar a página para baixo além de um determinado ponto.
  - Permite ao usuário clicar no botão para retornar ao topo da página.

- **Implementação:**
  - Utiliza o estado `showButton` para controlar a visibilidade do botão.
  - Usa o hook `useEffect` para adicionar um listener de evento de rolagem que verifica a posição da página.
  - Remove o listener de evento de rolagem quando o componente é desmontado para evitar vazamento de memória.

Este componente proporciona uma experiência de usuário aprimorada, permitindo que ele navegue facilmente de volta ao topo da página quando estiver rolando para baixo.
