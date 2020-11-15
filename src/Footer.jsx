import React from 'react';

function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            <footer className="bg-light text-center">
                <p>Copyright &copy; | {year}</p>
            </footer>
        </>
    )
}

export default Footer;