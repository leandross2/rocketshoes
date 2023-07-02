import styled from 'styled-components'

interface TextProps{
  size?: 'small'| 'normal' | 'big'
  weight?: 'regular' | 'bold'
  align?: 'left' | 'center' | 'right'
}

const setFontSize = ({size}:TextProps)=> {
  switch(size){
    case 'small':{
      return "font-size: 14px";
    }
    case 'normal':{
      return "font-size: 16px";
    }
    case 'big':{
      return "font-size: 21px";
    }
    default:{
      return "font-size: 16px";
    }
  }
}

const setFontWeight = ({weight}:TextProps)=> {
  switch(weight){
    case 'regular':{
      return "font-weight: 400";
    }
    case 'bold':{
      return "font-weight: 600";
    }
    default:{
      return "font-weight: 400";
    }
  }
}
const setAlign = ({align}:TextProps)=> {
  switch(align){
    case 'left':{
      return "justify-content: flex-start";
    }
    case 'center':{
      return "justify-content: center";
    }
    default:{
      return "justify-content: flex-start";
    }
  }
}

export const Container = styled.p<TextProps>`
  ${(props)=>(setFontSize(props))};
  ${(props)=>(setFontWeight(props))};
  ${(props)=>(setAlign(props))};
`