import React from 'react'
import Tp from './Tp'


const Pending = () => {
  return (
    <>
      <div>
        <ul className="hidden text-3xl font-bold text-center text-white divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
          <li className="w-full ">
            <button id="pending-tab" data-tabs-target="#pending" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 bg-orange-500 rounded-t-lg hover:bg-orange-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Pending leaves</button>
          </li>

        </ul>
      </div>
      <div>
        <Tp />
      </div>



    </>
  )
}

export default Pending

