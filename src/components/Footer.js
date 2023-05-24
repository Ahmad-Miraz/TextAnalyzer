import React from 'react'


const Footer = (props) => {
    const currentYear = new Date().getFullYear();
  return (
    <div className={`form-check text-center bg-dark form-switch text-${props.mode==='light'?'dark':'light'}`} style={{ position: 'Fixed', bottom: '0', left: '0', right: '0' }}>
        <strong style={{color:'white'}}>Copyright &copy; {currentYear} Miraj's Design</strong>
    </div>
  )
}

export default Footer