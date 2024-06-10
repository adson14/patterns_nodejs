# Design Patterns

- Este repositório serve apenas para  fins didáticos demonstrando a utilização entre diferentes padrões de projetos.

  ### RESUMO
  - ## Singleton
    - Padrão criacional
    - É considerado um Anti-pattern pois fere o princípio do SOLID
    - Garante que uma classe tenha apenas uma instância  e fornece um ponto global de acesso a esta instância
    - Útil para recursos compartilhados, como conexões de DB e configurações globais

  - ## Factory Method
    - Padrão criacional 
    - Fornece uma interface para criação de objetos
    - Cria objetos sem especificar suas classes concretas e fornece flexibilidade
    - Possibilita que as subclasses alterem o tipo de objeto a ser criado
   
  - ## Prototype
    - Padrão criacional
    - Envolve a criação de novos objetos copiando um objeto existente que é conhecido como protótipo
    - É útil quando criar um objeto se torna mais caro do que copiar um existente pois clonar um objeto geralmente é mais rápido do que construir um novo
    - Ao compartilhar propriedades e método, evita-se o armazenamento redundante e reduz o uso de memória
    - Permite modificações dinâmicas
