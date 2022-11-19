import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const createCompany = () => (
  <div>
    <Head>
      <title>Add a Company</title>
    </Head>
    <div className='h-screen bg-gradient-to-br from-cyan-500 to-blue-500'>
      <Link href='/'>
        <div className='font-black h-32 bg-indigo-500 text-center py-12 rounded-lg shadow-lg text-4xl cursor-pointer hover:bg-indigo-600 hover:text-orange-300 hover:text-5xl'>
          Back Home
        </div>
      </Link>
      <form
        action='/'
        className='flex flex-col items-center text-center p-10 rounded-lg gap-10'
      >
        <label htmlFor='nombre'>
          <div className='font-black h-30  text-center p-2 rounded-lg text-5xl cursor-help '>
            Company ID
          </div>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-4xl'
            placeholder='Name'
            required
          />
        </label>
        <label htmlFor='nombre'>
          <div className='font-black h-30  text-center p-2 rounded-lg text-5xl cursor-help '>
            Company Name
          </div>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-4xl'
            placeholder='Name'
            required
          />
        </label>
        <label htmlFor='nombre'>
          <div className='font-black h-30  text-center p-2 rounded-lg text-5xl cursor-help '>
            Company NIT
          </div>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-4xl'
            placeholder='Name'
            required
          />
        </label>
        <label htmlFor='nombre'>
          <div className='font-black h-30  text-center p-2 rounded-lg text-5xl cursor-help '>
            Company User
          </div>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-4xl'
            placeholder='Name'
            required
          />
        </label>
      </form>
    </div>
  </div>
);

export default createCompany;
