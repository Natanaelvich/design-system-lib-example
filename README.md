# Design System Lib Example

This is an example Design System library that utilizes Storybook, Radix, Stitches, and is organized in a monorepo or turborepo.

## Screenshots storybook

<p align="center">
  <img src="https://user-images.githubusercontent.com/52014318/232246740-c4602202-9581-4115-88fa-e9f9b891bca7.png" width="300"/>
  <img src="https://user-images.githubusercontent.com/52014318/232246761-1cc15a0a-48d8-473a-93df-bd9867cdd7f0.png" width="300"/> 
  <img src="https://user-images.githubusercontent.com/52014318/232246775-c1758a71-ad74-4241-8ff8-151690590732.png" width="300"/>
</p>


## Features

- Storybook for UI component development and showcase
- Radix for building responsive UIs
- Stitches for CSS-in-JS styling
- Monorepo or turborepo organization
- Remote caching with Vercel for faster builds
- NPM publication for easy distribution
- Github Actions for CI/CD pipeline
- TSUP for library building
- Changesets for changelog management

## Getting Started

To get started with using this Design System Lib example, clone the repository and install the necessary dependencies:

```sh
git clone https://github.com/example/design-system-lib.git
cd design-system-lib
npm install
```

## Scripts
Os seguintes scripts estão disponíveis:
### `dev`
Para executar o projeto em modo de desenvolvimento, utilize o comando:

```
npm run dev
```

Este script utiliza o `turbo` para executar o projeto em modo de desenvolvimento em paralelo.
### `build`
Para construir o projeto, utilize o comando:

```
npm run build
```

Este script utiliza o `turbo` para construir o projeto.
### `changeset`
Para criar um novo `changeset`, utilize o comando:

```
npm run changeset
```

Este script utiliza o `changesets` para criar um novo `changeset`.
### `version-packages`
Para versionar os pacotes, utilize o comando:

```
npm run version-packages
```

Este script utiliza o `changesets` para versionar os pacotes.
### `release`
Para publicar o projeto, utilize o comando:

```
npm run release
```

Este script utiliza o `turbo` para construir o projeto e o `changesets` para publicar o projeto.
### `clean-gitignore`
Para limpar o arquivo `.gitignore`, utilize o comando:

```
npm run clean-gitignore
```

## License

This Design System Lib example is licensed under the [MIT License](./LICENSE):
