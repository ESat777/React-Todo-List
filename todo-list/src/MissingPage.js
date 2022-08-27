import React from 'react'
import logo from'../src/404.jpg';
import './MissingPage.css'

function MissingPage() {
  return (
    
<div style={{ backgroundImage: `url(${logo})`,
              padding: "1rem",
              minHeight: "90vh",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: 'auto' }}
>
</div>
  )
}
export default MissingPage