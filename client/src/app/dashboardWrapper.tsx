import React from 'react';
import Navbar from './{components}/Navbar';
import Sidebar from './{components}/Sidebar';



const dashboardWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* Sidebar */}
        <Sidebar/>
        <main className='dark:bg-dark-bg flex w-full  flex-col bg-gray-50 md:pl-64'>
            {/* navbar */}
         <Navbar/>
            {/* children  */}
        </main>

       </div>
)

export default dashboardWrapper ;