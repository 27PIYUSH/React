import Test from "./trial"
function App() {

  // to inject variable --> {write your variable here...}  --> return ke andr {issko bolte h} evaluated expression yhn sirf final evaluated chij aayegi aur return ke bhr khin bhi js ka baaki code likh skte h
  const val = 7;

  return (
    <>
      <Test />
      <h1>This is day {val}</h1>  
    </>
  )
}

export default App
