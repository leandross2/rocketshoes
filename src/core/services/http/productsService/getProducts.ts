import { IProduct } from '@/types/IProduct'

export const getProducts = async (): Promise<IProduct[]> => {
  const httpResponse = await fetch('https://raw.githubusercontent.com/leandross2/rocketshoes/main/MOCK_DATA.json')

  switch (httpResponse.status) {
    case 200: {
      const data = await httpResponse.json()
      return data
    }
    default: throw new Error(
      'Falha ao buscar Produtos'
    )
  }
}
