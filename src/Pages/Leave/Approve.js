import React from 'react'
import Ta from './Ta'


const Approve = () => {
  return (
    <>
      <div>
        <ul className="hidden text-3xl font-bold text-center text-white divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
          <li className="w-full ">
            <button id="pending-tab" data-tabs-target="#pending" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 bg-green-500 rounded-t-lg hover:bg-green-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Approved leaves</button>
          </li>

        </ul>
      </div>
      <div>
        <Ta />
      </div>



    </>
  )
}

export default Approve
