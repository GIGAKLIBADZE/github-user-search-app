import Header from './components/Header'
import Search from './components/Search'
import User from './components/User'

function App() {

  return (
    <>
      <Header/>
      <div className='flex flex-col items-center'>
        <Search/>
        <User/>
      </div>
    </>
  )
}

export default App
