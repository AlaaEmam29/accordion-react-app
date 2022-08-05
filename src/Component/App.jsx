import React from 'react'
import data from './data.js'
import SingleQuestion from './SingleQuestion.jsx'
function App() {
  return (
    <>
    <main className="container">
    <h3>Question and  answer about login</h3>
<section className="questions-container">
{data.map(item => <SingleQuestion key={item.id} {...item}/>)}
</section>
    </main>
    </>
  )
}

export default App