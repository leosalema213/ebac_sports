import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAoFavorito: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload
      if (state.itens.find((p) => p.id === favoritos.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== favoritos.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { adicionarAoFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
