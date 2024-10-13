import React from 'react'

const AddEmployee = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg ">
                    {/* <!-- Card Header with Background Color --> */}
                    <div className="w-full p-3 bg-red-500 rounded-t-lg">
                        <h2 className="text-3xl font-bold text-center text-white">Add Employee</h2>

                    </div>

                    {/* <!-- Card Body --> */}
                    <form>
                        <div className="mb-3">
                            <label for="email" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name here" required />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                            <select type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option value="" disabled selected>-- Please Select --</option>
                                <option value="IT">Information Technology</option>
                                <option value="HR">Human Resorce</option>
                                <option value="FC">Finance</option>
                                <option value="OP">Operations</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input type="password" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='flex justify-end'>
                            <button type="" className="px-2 py-2 mb-2 text-sm font-medium text-white bg-red-500 rounded-lg flex-end focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-green-300 me-2 dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-green-800">Cancel</button>
                            <button type="" className="px-2 py-2 mb-2 text-sm font-medium text-white bg-green-600 rounded-lg focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Employee</button>
                        </div>


                        
                       
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddEmployee
