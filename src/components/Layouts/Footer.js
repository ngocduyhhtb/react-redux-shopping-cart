import React from 'react';
const styleFooter = {
    backgroundColor: "rgba(0, 0, 0, 0.2)"
}
const Footer = (props) => {
    return (
        <div className="text-center p-3" style={styleFooter}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    )
}
export default Footer