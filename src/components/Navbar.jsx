import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(true);

    return (
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className='flex items-center gap-2'>
                    <Link to='/' className='flex items-center gap-3'
                        onClick={() => { 
                            setActive('');
                            window.scrollTo(0, 0); 
                        }}
                    >
                        <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
                        <p className='text-white text-[18px] font-bold cursor-pointer'>Evan Holster</p>
                    </Link>
                </div>
                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li 
                            key={link.id}
                            className={`${ active === link.title ? 'text-secondary' : 'text-white' } hover:text-secondary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='md:hidden flex flex-1 justify-end items-center'>
                    <i className={`${ toggle ? "fa-solid fa-bars fa-lg" : "fa-solid fa-xmark fa-lg" } text-white`} onClick={ () => setToggle(!toggle) } />
                    <div className={`${ toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${ active === link.title ? 'text-secondary' : 'text-white' } text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;