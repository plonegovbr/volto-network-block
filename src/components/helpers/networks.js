import config from '@plone/volto/registry';

export const getNetworks = (backendNetworks, allowedNetworks = []) => {
  const { settings } = config;
  const configNetworks = settings.socialNetworks || [];
  const networks = backendNetworks ? backendNetworks : configNetworks;
  if (allowedNetworks.length > 0) {
    const rawNetworks = {};
    for (const item of networks) {
      rawNetworks[item.id] = item;
    }
    const filteredNetworks = [];
    for (const item of allowedNetworks) {
      if (rawNetworks[item.id] !== undefined) {
        filteredNetworks.push(rawNetworks[item.id]);
      }
    }
    return filteredNetworks;
  } else {
    return networks;
  }
};
