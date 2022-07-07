# Docs
This repository builds the documentation found here: https://openmetal.io/docs/manuals

# Contributing
All documentation exists within the `docs/` directory. Simple create or update the markdown files, and the documentation site will be updated after the changes have been merged into main.


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

## Installation

```sh
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```sh
USE_SSH=true yarn deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way
to build the website and push to the `gh-pages` branch.
