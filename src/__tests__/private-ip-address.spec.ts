import { internalIPv4, internalIPv6 } from '../private-ip-address';

test('internalIPv4', () => {
  expect(internalIPv4()).toBe('192.168.100.202');
});

test('internalIPv6', () => {
  expect(internalIPv6()).toBe('fe80::ac97:42ff:fe19:cea');
});
