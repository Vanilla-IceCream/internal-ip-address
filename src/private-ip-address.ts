import os from 'node:os';

export function internalIPv4() {
  let ipv4Address = '';

  const networkInterfaces = os.networkInterfaces();

  for (const interfaceName in networkInterfaces) {
    const interfaceDetails = networkInterfaces[interfaceName] || [];

    for (const details of interfaceDetails) {
      if (details.family === 'IPv4' && !details.internal) {
        ipv4Address = details.address;
        return ipv4Address;
      }
    }
  }

  return ipv4Address;
}

export function internalIPv6() {
  let ipv6Address = '';

  const networkInterfaces = os.networkInterfaces();

  for (const interfaceName in networkInterfaces) {
    const interfaceDetails = networkInterfaces[interfaceName] || [];

    for (const details of interfaceDetails) {
      if (details.family === 'IPv6' && !details.internal) {
        ipv6Address = details.address;
        return ipv6Address;
      }
    }
  }

  return ipv6Address;
}
