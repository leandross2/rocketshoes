export const formatCurrency = (price: number)=>
  Intl.NumberFormat('pt-BR', {style:'currency', currency: "BRL"}).format(price)
