import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'principal'
      ? props.theme.colorMain
      : props.theme.colorSecondary};
  line-height: 22px;
`
