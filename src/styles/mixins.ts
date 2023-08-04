import { css } from 'styled-components'

export const limitLine = (height: string) => {
  return css`
    max-height: ${height};
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `
}
