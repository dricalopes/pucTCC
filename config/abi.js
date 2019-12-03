[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nomeVendedor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_rgVendedor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cpfVendedor",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "_carteiraVendedor",
				"type": "address"
			}
		],
		"name": "Etapa1_qualificaVendedor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nomeComprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_rgComprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cpfComprador",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "_carteiraComprador",
				"type": "address"
			}
		],
		"name": "Etapa2_qualificaComprador",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_enderecoImovel",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_valorImovel",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dataVencimento",
				"type": "uint256"
			}
		],
		"name": "Etapa3_dadosImovel",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pagamentoDataDePagamento",
		"outputs": [
			{
				"internalType": "string",
				"name": "Resultado",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_valorImovel",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dataDePagamento",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "pagamentoRealizado",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cpfComprador",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cpfVendedor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dataVencimento",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "enderecoImovel",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nomeComprador",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nomeProprietarioImovel",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nomeVendedor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rgComprador",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rgVendedor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "valorImovel",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]