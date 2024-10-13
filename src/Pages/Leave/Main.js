import React from 'react'
import Table from './Table'



const Main = () => {

    

    return (
        <div className="w-full">
            <ul className="flex-1 text-sm font-medium text-center text-black divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li className="w-full ">
                    <button id="pending-tab" data-tabs-target="#pending" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 bg-orange-500 rounded-ss-lg hover:bg-orange-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Pending leaves</button>
                </li>
                <li className="w-full">
                    <button id="approved-tab" data-tabs-target="#approved" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-green-500 hover:bg-green-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Approved Leaves</button>
                </li>
                <li className="w-full">
                    <button id="add-tab" data-tabs-target="#add" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 bg-red-500 hover:bg-red-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Add Employee</button>
                </li>
                <li className="w-full">
                    <button id="view-tab" data-tabs-target="#view" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 bg-blue-500 rounded-se-lg hover:bg-blue-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">View Employees</button>
                </li>
            </ul>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               <Table/>
            </div>

        </div>
    )
}

export default Main
