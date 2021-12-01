import React from 'react'

function Home() {
  return (
    <div className="p-8 lg:p-24">
      <div className="text-center mt-8">
        <div className="">
          <h1 className="text-white text-4xl">A Place To Learn, Get News <br/>And Find Exchange Rates On Crypto</h1>
          <p className="mt-8 text-gray-400">Here you can find the latest news on crypto as well as do coversion from crypto to other currencies</p>

          <div className="mt-8 flex items-center justify-center">
            <button className="w-1/3 h-10 flex items-center justify-center rounded-md bg-yellow-600 text-white font-semibold" type="button">Get Started!</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
