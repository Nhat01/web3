export const abi = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "approved",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "operator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "BatchMetadataUpdate",
      "inputs": [
        {
          "type": "uint256",
          "name": "_fromTokenId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_toTokenId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MetadataUpdate",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NFTTransfer",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenID",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "from",
          "indexed": false,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "indexed": false,
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "tokenURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "price",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "type": "address",
          "name": "previousOwner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "newOwner",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "buyNFT",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenID",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "cancelListing",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenID",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "listNFT",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenID",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "price",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "category",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "mintNFT",
      "inputs": [
        {
          "type": "string",
          "name": "tokenURI",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "data",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "type": "bytes4",
          "name": "interfaceId",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "type": "address",
          "name": "newOwner",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawFunds",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ]