import  { StylesConfig } from 'react-select';

export const customStyles: StylesConfig = {
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