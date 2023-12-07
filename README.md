# Storybook & Shadcn-ui.
Eu queria aprender storybook e utilizei os componentes do shadcn-ui para praticar o que estava aprendendo.
hospedado chromatic -[ShadcnStorybook](https://65711ecf32bae758b457ae34-uryqbzvojc.chromatic.com/?path=/docs/shadcn-button--docs)

## Destaques da aprendizagem storybook
- [Acessibilidades](https://storybook.js.org/addons/@storybook/addon-a11y) em todas stories.
- Themes light / dark [Ui storybook]() e [UI preview](https://storybook.js.org/recipes/tailwindcss)
- Test nas stories, exemplo: Shadcn/accordion/accordionWithOneItem
- [Decorators](https://storybook.js.org/docs/writing-stories/decorators) nivel global e stories
- [MDX](https://storybook.js.org/docs/writing-docs/mdx) para introduções, anexar os componentes, stories, desanexados...
- Stories de componentes
- Meta
- arquivo preview
  - Decorators global
  - ordem personalizada e alfabética
  - configuração de themes
- controls das stories
  - controls personalizados, input select.
- Pallete colors
- Fontes
- e mais

## Dificuldades
### Decorators 
Fazer a stories do component toast, porque tem um component <Toaster/> que precisa está em componente global, então precisei pesquisar bastante até encontrar o Decorators que envelopar uma stories, é como se fosse o layout raiz do nextJs.

### Theme
Eu tinha feito o theme light/dark, mas o theme estava sendo aplicado na UI de preview e depois de pesquisar encontrei outro plugin que adiciona nas duas UI, storybook e preview, porém, tem o problema que o documento storybook não tem as variáveis de css do documento preview. Tem uma solução que é fazer manualmente o estilo de light/dark no arquivo themes-storybook-ui.ts, aviso: se alterar o estilo de light/dark tem algumas classes que substitui os estilos que você colocou, geralmente você vai encontrar em arquivos mdx, input controls stories, docs,
Canvas.
Stories, em arquivos mdx não aplica os (estilos) bases.

## Errors ?
### path import
Os módulos que você import não pode ser customizado, exemplo: @components/ui/button, @libs/utils, vai aparecer um erro que não encontrou o módulo, tem soluções e tentei algumas e não funciono. então utilizo ./
### variáveis de css no documento do storybook
copiei as variáveis de css do documento preview e adicionei no documento do storybook, porém , se você adiciona os estilos personalizados de themes por variáveis css mostra um error de color. por isso precisei fazer manualmente os estilos personalizados theme na Ui Storybook.

## Docs 
[Storybook](https://storybook.js.org/)
[Shadcn-ui](https://ui.shadcn.com/)
[padrão-commit](https://github.com/iuricode/padroes-de-commits)

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install 
#02
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

