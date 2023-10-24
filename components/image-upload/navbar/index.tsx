import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='container mx-auto py-5 flex justify-center gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
            <Link href='/test'>products two</Link>
            <Link href='/pagination'>Pagination</Link>
        </nav>
    );
};

export default Navbar;