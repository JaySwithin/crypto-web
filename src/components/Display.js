import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import axios from 'axios';

export default function Display() {
  const currencies = ['BTC', 'ETH', 'USD', 'EUR', 'XRP' , 'LTC', 'ADA'];
  const [primaryValue, setPrimaryValue] = useState('BTC');
  const [secondaryValue, setSecondaryValue] = useState('BTC');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const [articles, setArticles] = useState(null);


  console.log(amount);

  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: primaryValue, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryValue},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
    }).catch((error) => {
      console.error(error);
    });

    console.log(exchangeRate);
    
  }
  useEffect(() => {

    var options = {
      method: 'GET',
      url: 'https://crypto-news6.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news6.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY2
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data);
      setArticles(response.data)
    }).catch((error) => {
      console.error(error);
    });

  }, []);

  console.log(articles);

  const fewArticles = articles?.slice(0,12);


  return (
    // <div className="p-8">
    //   <div className="mt-4 grid md:grid-cols-2 gap-8">
    //     <div className="lg:px-8">
    //       <div className="uk-card uk-card-default bg-gray-600">
    //         <h2 className="text-center text-lg font-semibold text-white mb-2">Convert Currency</h2>
    //         <table>
    //           <tbody>
    //             <tr>
    //               <td>Primary currency: </td>
    //               <td>
    //                 <input className="text-center font-semibold"
    //                   type="number"
    //                   name="primary-currency"
    //                   value={amount}
    //                   onChange={(e) => setAmount(e.target.value)}
    //                 />
    //               </td> 
    //               <td>
    //                  <select
    //                   value={primaryValue}
    //                   name="primary-option"
    //                   className="primary-options" 
    //                   onChange={(e) => setPrimaryValue(e.target.value)}
    //                   >
    //                     {currencies.map((currency, _index) => (<option key={_index}> {currency} </option>))}
    //                  </select> 
    //               </td>
    //             </tr>

    //             <tr>
    //               <td>Secondary currency</td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   name="secondary-currency"
    //                   value={""}
    //                 />
    //               </td>
    //               <td>
    //                  <select
    //                   value={secondaryValue}
    //                   name="secondary-option"
    //                   className="secondary-option"
    //                   onChange={(e) => setSecondaryValue(e.target.value)} 
    //                   >               
    //                     {currencies.map((currency, _index) => (<option key={_index}> {currency} </option>))}
    //                  </select>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //         <div className="flex justify-center">
    //           <button className="w-1/3 lg:w-1/4 h-8 rounded-md bg-gray-400 text-white font-semibold mt-2 mb-2" type="button">Convert</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-white">jdjjj</p>
    //     </div>
    //   </div>
    // </div>

    <div className="uk-container uk-margin-bottom">
      <div className="uk-card-first-push-up uk-margin-negative-top">
        <div className="uk-width-1-1@s uk-width-1-1@m uk-margin-auto">
          <div className="uk-grid uk-grid-medium uk-grid-match uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-2@l">
            <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
              <div className="uk-card uk-card-body uk-card-padding-responsive uk-card-default mt-2 bg-gray-700 ">
                  <h3 className="text-center text-xl font-semibold text-white">Convert Currency</h3>
                  <p className="mt-2">Primary Currency:</p>
                  <div className="flex space-x-4 mb-2">
                    <input className="text-center font-semibold uk-input uk-width-1-2"
                    type="number"
                    name="primary-currency"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                    <select 
                    value={primaryValue}
                    name="primary-option"
                    className="primary-options uk-select uk-form-width-small" 
                    onChange={(e) => setPrimaryValue(e.target.value)}
                    >
                    {currencies.map((currency, _index) => (<option key={_index}> {currency} </option>))}
                    
                    </select>
                  </div>

                  <p className="">Secondary Currency:</p>
                  <div className="flex space-x-4">
                    <input className="text-center font-semibold uk-input uk-width-1-2"
                    type="number"
                    name="secondary-currency"
                    value={result}
                    disabled
                    />
                    <select 
                    value={secondaryValue}
                    name="secondary-option"
                    className="secondary-options uk-select uk-form-width-small" 
                    onChange={(e) => setSecondaryValue(e.target.value)}
                    >
                    {currencies.map((currency, _index) => (<option key={_index}> {currency} </option>))}
                    
                    </select>
                  </div>

                  <div className="flex justify-center mt-4">
                    <button id="convert-button" onClick={convert} className="w-1/3 lg:w-1/4 h-8 rounded-md bg-gray-400 text-white font-semibold mt-2 mb-2" type="button">Convert</button>
                 </div>
              <div className="mt-6 text-center">
                <h2 className="text-white text-xl font-semibold">Currency Exchange Rate</h2>
                <p className="text-yellow-700 text-lg mt-2">{exchangeRate}</p>
                <p className="text-">From {primaryValue} to {secondaryValue}</p>
              </div>
              </div>
            </div>


            <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
              <div className="uk-card uk-card-body uk-card-padding-responsive uk-card-default mt-2 bg-gray-700">
                <h3 className="text-center text-xl font-semibold text-white">Latest News</h3>

                {fewArticles?.map((article, _index)  => (
                <div key={_index}>
                  <a href={article.url} target="_blank"><h3 className="text-yellow-700 font-semibold">- {article.title} </h3></a>
                </div>))}

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

