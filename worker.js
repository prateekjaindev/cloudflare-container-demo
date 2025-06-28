import { Container } from '@cloudflare/containers';

export class CCContainer extends Container {
  // must match the port your Express app listens on
  defaultPort = 3000;
}

export default {
  async fetch(request, env) {
    const id = env.CC_CONTAINER.idFromName('node-api');
    const container = env.CC_CONTAINER.get(id);
    return container.fetch(request);
  }
};
