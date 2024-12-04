import { useState } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import User from './components/User'

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='flex flex-col items-center'>
        <Search/>
        <User/>
      </div>
    </>
  )
}

export default App
