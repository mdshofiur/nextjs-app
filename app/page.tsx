'use client';

import React from 'react';
import AvatarUpload from '@/components/image-upload/profile';
import Select, { StylesConfig } from 'react-select';

// Demo Data for Select
const options = [
   { value: 'option1', label: 'option 1' },
   { value: 'option2', label: 'option 2' },
   { value: 'option3', label: 'option 3' },
];

const Home = () => {
   /* -------------------------------------------------------------------------- */
   /*                             Select custom style                            */
   /* -------------------------------------------------------------------------- */
   const customStyles: StylesConfig = {
      control: (baseStyles, state) => ({
         ...baseStyles,
         borderColor: state.isFocused ? '#69D757' : '',
         border: state.isDisabled ? 'none' : '',
         boxShadow: state.isFocused ? '0 0 0 0px #323338' : '',
         '&:hover': {
            borderColor: '#323338',
         },
         '&:focus-within': {
            borderColor: '#69D757',
         },
      }),
      option: (baseStyles, state) => ({
         ...baseStyles,
         backgroundColor: state.isFocused ? '#E2F7DE' : '',
         color: state.isFocused ? '#323338' : '',
         border: 'none',
         '&:active': {
            backgroundColor: '#E2F7DE',
            color: '#323338',
         },
         borderRadius: '4px',
      }),
      indicatorSeparator: (baseStyles) => ({
         ...baseStyles,
         display: 'none',
      }),
      dropdownIndicator: (baseStyles, state) => ({
         ...baseStyles,
         color: '#676879',
         transform: state.isFocused ? 'rotate(180deg)' : 'none',
         transition: 'all 300ms ease-in-out',
      }),
      menuList: (baseStyles) => ({
         ...baseStyles,
         padding: '8px',
         borderRadius: '4px',
         border: 'none !important',
         boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.2)',
      }),
      clearIndicator: (baseStyles) => ({
         ...baseStyles,
         color: '#676879',
      }),
      container: (baseStyles) => ({
         ...baseStyles,
         borderRadius: '4px',
      }),
      multiValue: (baseStyles) => ({
         ...baseStyles,
         borderRadius: '4px',
      }),
      input: (baseStyles) => ({
         ...baseStyles,
         height: '37px',
         padding: '0 8px',
      }),
      placeholder: (baseStyles) => ({
         ...baseStyles,
         paddingLeft: '8px',
      }),
   };

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
      </main>
   );
};

export default Home;
