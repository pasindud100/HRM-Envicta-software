import React from 'react'
import TableView from './TableView'

const View = () => {
  return (
    <div>
      <div>
        <ul className="hidden text-3xl font-bold text-center text-white divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
          <li className="w-full ">
            <button id="pending-tab" data-tabs-target="#pending" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 bg-blue-500 rounded-t-lg hover:bg-blue-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Employee List</button>
          </li>

        </ul>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               <TableView/>
            </div>

    </div>
  )
}

export default View
