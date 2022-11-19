import { useQuery } from '@apollo/client';
import { GET_MOCK_MODEL } from '@graphql/client/queries/getMockModel';
import React from 'react';
import Loading from '@components/Loading';
import Link from 'next/link';

const Inicio = () => {
  const { loading } = useQuery(GET_MOCK_MODEL);

  if (loading) return <Loading />;
  return (
    <div className='p-10 h-screen bg-gradient-to-br from-cyan-500 to-blue-500'>
      <div className='flex-wrap text-slate-800 flex-col p-14'>
        <div className='font-black h-32  text-center p-10 rounded-lg text-6xl cursor-help hover:text-orange-300'>
          What do you want to do?
        </div>
      </div>
      <div className='flex-wrap gap-32 text-slate-800 flex-col space-y-8'>
        <Link href='/createCompany'>
          <div className='font-black h-32 bg-indigo-500 text-center py-12 rounded-lg shadow-lg text-4xl cursor-pointer hover:bg-indigo-600 hover:text-orange-300 hover:text-5xl'>
            Add a Company
          </div>
        </Link>
        <Link href='/createProvider'>
          <div className='font-black h-32 bg-indigo-500 text-center py-12 rounded-lg shadow-lg text-4xl cursor-pointer hover:bg-indigo-600 hover:text-orange-300 hover:text-5xl'>
            Add a Provider
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
