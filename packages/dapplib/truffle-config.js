require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth shift protect hockey knife flower sketch'; 
let testAccounts = [
"0x0a4335b8b4ad0db3989257d20f16ec683e59a9fcd0619795a0959938fc4e0535",
"0x32ccecb574500505eb81ba6787a8274ed2d161dc1ff65ad2221ca72f8c2798dd",
"0x281093bb8e9f97c10ed6f51bd1630ec7362af1572e9ae8bcd52576aafdf1581b",
"0x6bdab15e02b6e248570978a4ba271585d40975077b0b071507fef2c5d8e9f3ca",
"0x2c713a69307dd5b570cc8eb105166b258744ed3277f2d14b95acf8d6c7aede55",
"0x943912093aa82877166746052b0b52c697f569a3a1d771f325456bfc793e9ef5",
"0x967a938d0727e1d0db487d21c281d3c7882562823b6227fc3a340c7c99f9a7b2",
"0x14eb38d8a59d113bc480a68cb3d8f888559eec0b7e6a052cefe7e88f2d623c0b",
"0x36817e66dd24de8d5db158be2b83648adcf92de3035713354a5d5a03b69f88ab",
"0x27e01375e1ef67c39bd8cad63bb1295234fe0c29976b16dde1c1539fcf8dd57a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

