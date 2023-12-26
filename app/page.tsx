'use client';

import React from 'react';
import AvatarUpload from '@/components/image-upload/profile';
import Select from 'react-select';
import { customStyles } from '../utils';

// Demo Data for Select
const options = [
   { value: 'option1', label: 'option 1' },
   { value: 'option2', label: 'option 2' },
   { value: 'option3', label: 'option 3' },
];

const Home = () => {

   return (
      <main className='container mx-auto bg-white-500/50 min-h-screen py-10'>
         <h1 className='text-center text-4xl underline underline-offset-8 my-10'>
            Home Page
         </h1>
         <AvatarUpload />
         <Select
            placeholder='Please select one'
            styles={customStyles}
            theme={(theme) => ({
               ...theme,
               colors: {
                  ...theme.colors,
                  primary25: '#39A527',
               },
            })}
            isMulti
            name='colors'
            options={options}
            className='basic-multi-select max-w-[300px] w-full'
            classNamePrefix='react-select'
         />
         <br />
         <Select
            placeholder='Please select one'
            styles={customStyles}
            theme={(theme) => ({
               ...theme,
               colors: {
                  ...theme.colors,
                  primary25: '#39A527',
               },
            })}
            name='colors'
            options={options}
            className='basic-multi-select max-w-[300px] w-full'
            classNamePrefix='react-select'
         />
      </main>
   );
};

export default Home;
