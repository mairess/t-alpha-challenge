const mockResponse = {
  success: true,
  message: null,
  data: {
    products: [
      {
        id: 101,
        name: 'Notebook Pro 15',
        description: 'Notebook de alto desempenho',
        price: 1500,
        stock: 25,
      },
      {
        id: 102,
        name: 'Mouse Sem Fio',
        description: 'Mouse ergonômico sem fio',
        price: 45,
        stock: 120,
      },
      {
        id: 103,
        name: 'Teclado Mecânico',
        description: 'Teclado mecânico RGB',
        price: 100,
        stock: 50,
      },
      {
        id: 104,
        name: 'Monitor 4K',
        description: 'Monitor 4K UHD de 27"',
        price: 400,
        stock: 15,
      },
      {
        id: 105,
        name: 'Hub USB-C',
        description: 'Hub USB-C 7 em 1',
        price: 70,
        stock: 200,
      },
    ],
  },
};

export default mockResponse;
