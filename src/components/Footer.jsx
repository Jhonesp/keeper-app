import React from "react";

const currentDate = new Date().getFullYear();

function Footer(){
    return <footer>
        <p>Copyright @ {currentDate} </p>
    </footer>
}

export default Footer;