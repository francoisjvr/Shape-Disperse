export type ChainInfo = {
  chainId: number;
  disperseAddress: string;
  blockExplorer: string;
  name: string;
};

export const supportedChains: ChainInfo[] = [
  {
    chainId: 360,
    disperseAddress: "0x7c2DDef60bC02e3DfA7454Cb52cA9dBC3E0736e5",
    blockExplorer: "https://shapescan.xyz/",
    name: "Shape Network",
  },
  {
    chainId: 11011,
    disperseAddress: "0x2202E9a85B9E91afaa52C7E63EAf949cE436e024",
    blockExplorer: "https://explorer-sepolia.shape.network",
    name: "Shape Sepolia",
  },
  {
    chainId: 7777123123,
    disperseAddress: "0x54510dA48aE512387111623D59812B794d11754f",
    blockExplorer: "https://explorer.metalayer.net/",
    name: "Metalayer network",
  },
];
