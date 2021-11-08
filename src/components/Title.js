import { memo } from 'react'

const Title = ({ children }) => {
  console.log('rendering title')
  return (
    <h1>
      {children}
    </h1>
  )
}

//como solo se le pasa un String a este componente
// en children, no hace falta aplicar la funcion
// is Equal (ya que no recibe una array)
export default memo(Title)
