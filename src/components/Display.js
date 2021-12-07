import React from 'react'
import { useState } from 'react';

function Display() {
  const currencies = ['BTC', 'ETH', 'USD', 'EUR', 'XRP' , 'LTC', 'ADA'];
  const [primaryValue, setPrimaryValue] = useState('BTC');
  const [secondaryValue, setSecondaryValue] = useState('BTC');
  const [amount, setAmount] = useState(1);

  console.log(amount);

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
        <div className="uk-width-2-3@l uk-width-1-1@s uk-width-1-1@m uk-margin-auto">
          <div className="uk-grid uk-grid-medium uk-grid-match uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-2@l">
            <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
              <div class="uk-card uk-card-body uk-card-padding-responsive uk-card-default bg-gray-600">
                <div class="uk-text-center">
                  <h3 class="text-center text-lg font-semibold text-white">Convert Currency</h3>

                </div>
              </div>
            </div>
            <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
              <div class="uk-card uk-card-body uk-card-padding-responsive uk-card-default uk-card-hover">
                <div class="uk-text-center">
                  <h3 class="uk-text-muted uk-text-bold uk-text-primary">NITA STAFF DATA CENTER ACCESS REQUEST</h3>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
