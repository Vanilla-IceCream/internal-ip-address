# private-ip-address

Get your private IP address.

## Installation

Install `private-ip-address` with your favorite package manager:

```sh
$ npm i private-ip-address -D
# or
$ yarn add private-ip-address -D
# or
$ pnpm i private-ip-address -D
# or
$ bun add private-ip-address -D
```

## Usage

To use `private-ip-address`, import the `internalIPv4` or `internalIPv6` function:

```ts
// esm
import { internalIPv4, internalIPv6 } from 'private-ip-address';

// cjs
const { internalIPv4, internalIPv6 } = require('private-ip-address');

console.log(`Internal IPv4 address: ${internalIPv4()}`);
// Internal IPv4 address: 192.168.100.202

console.log(`Internal IPv6 address: ${internalIPv6()}`);
// Internal IPv6 address: fe80::ac97:42ff:fe19:cea
```
