![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-serpapi

This repo contains SerpApi's node for n8n.

## Prerequisites

You need the following installed on your development machine:

* [git](https://git-scm.com/downloads)
* Node.js and npm. Minimum version Node 18. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Install n8n with:
  ```
  npm install n8n -g
  ```
* Recommended: follow n8n's guide to [set up your development environment](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Local setup

These are the basic steps for working with this node locally. For detailed guidance on creating and publishing nodes, refer to the [documentation](https://docs.n8n.io/integrations/creating-nodes/).

1. Clone the repo:
   ```
   git clone git@github.com:alexbarron/n8n-nodes-serpapi.git
   ```
2. Switch to the node's directory.
   ```
   cd n8n-nodes-serpapi/nodes/SerpApi
   ```
3. Run `npm i` to install dependencies.
4. Run `npm run build` to build the node.
5. Run `npm link`.
6. Navigate to the custom nodes n8n direcotry with `cd ~/.n8n/custom` or create a `custom` directory in your `.n8n` directory. Then `cd` to it.
7. Run `npm init`.
8. Run `npm link n8n-nodes-serpapi`
9. Run `n8n` to start the n8n server.
10. Create a workflow and search for the SerpApi node.


## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
