require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note script around imitate private fox twin'; 
let testAccounts = [
"0xe423481cac31b2ccd521166e1747555a2bf521864504b8a07d126155332a47b5",
"0x5cfdb1b46245aa61bd114b7297ff0ac38ce1b35bebb72d0274012c1ba698ee75",
"0x42d0b11e8e0f3b17df1b7c7c11c1cf6c1108c07bca556a53ef60e8b2e5925d39",
"0x80748206ddcae442ef72249844aac5d9d18abc6c7de793097e976b7b1acb4594",
"0xd551643cb502783e9a5b81db81b2060aff562094c6de502d558a4ba09dcdb01a",
"0x260c5653e03376045c3791110b90904a3a8b1ec870e5140fab887de859778372",
"0x00a41b74cbef18894c8c80b0f9798cd0eddbe367937fb7236156bfb600f7ef52",
"0x3b24e09772ddf3a8bd1ddf0b73097d10a28916652d2eaa01b4aedba0d9e9d558",
"0x23d464c48562ae8ecd6da658fcdf7166a1b6e158e709c10d64921b1819df17be",
"0xaaf8634642a0cf50d806696a1983f83e99dce9aae17d81ca6013cad022eaadf7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


