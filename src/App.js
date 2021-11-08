import { useState, useCallback, useMemo } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

function App() {
  const [valores, setValores] = useState([])
  //useCallback se utiliza para que si los valores no cambian,
  // solo se haga una instancia de handleSubmit, 
  //si no se renderizaría este componente continuamente
  const handleSubmit = useCallback((values) => {
    setValores(data => ([ //data es lo mismo que valores, pero se cambia el nombre para que no haya conflictos
      ...data,//esto son los valores
      values
    ]))
  }, [])

  //PARA FUNCIONES POTENCIALMENTE PESADAS UTILIZAR USEMEMO
  //recibe como primer parametro la funcion en sí
  //recibe como segundo argumento el valor que puede cambiar (dependencias)
  const iterador = 50000000
  console.time('memo')
  const momoized = useMemo(() => {
    let total = 0
    for (let i = 0; i < iterador; i++){
      total = total + iterador
    }
    return total
  }, [iterador])
  console.timeEnd('memo')

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
