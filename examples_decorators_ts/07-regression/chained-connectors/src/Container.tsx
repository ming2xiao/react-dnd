import { FC } from 'react'
import { BoxWithHandle } from './BoxWithHandle'

const style = {
  width: 400,
}

export interface Item {
  id: number
  text: string
}
export interface ContainerState {
  cards: Item[]
}

export const Container: FC = () => {
  {
    return (
      <div style={style}>
        <BoxWithHandle />
      </div>
    )
  }
}
