# Testes com Mocha em ambiente Node.js

Exemplo simples de como rodar testes automatizados utilizando Mocha.

No código temos:

- Uma função de soma com timeout e callback para simularmos uma função assincrona;
- Uma função simples de multiplicação que iremos falhar.

## Como utilizar?

1. Clone este repositório;

2. Utilize o yarn para instalar as dependências necessárias

   ```bash
   yarn
   ```

3. Instale o Mocha como dependencia de desenvolvimento

   ```
   yarn add Mocha -D
   ```

4. Execute os testes

   ```
   yarn test
   ```
5. Caso queira utilizar Chai ao invés do assert, adiocione a lib

   ```
   yarn add chai -D
   ```
   