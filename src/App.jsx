import './App.css'
import FormInput from './components/FormInput'


function App() {
  return (
    <>
     <div className='App'>
      <form className='w-80 rounded-2xl p-5 flex flex-col gap-3 bg-white'>
        <h1 className='text-2xl font-bold border-b-2'>Register</h1>
        <FormInput></FormInput>
        <button type='submit' className='w-20 rounded-lg p-2 mt-3 text-white bg-button-color hover:bg-[#2596BE] transition ease-out duration-300'>Submit</button>
      </form>
     </div>
    </>
  )
}

export default App
