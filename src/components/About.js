import React from 'react'
import PropTypes from 'prop-types'
export const About = (props) => {

  return (
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='text-center my-3'>{props.header}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sit repudiandae facilis, provident maxime quam magnam, asperiores ex reiciendis beatae quia. Amet, dolor culpa rerum ea illo aliquam expedita. At reiciendis facere in voluptates quaerat ea maiores. Iusto odit fuga corrupti, ipsa, modi aspernatur voluptatem eveniet obcaecati quibusdam suscipit distinctio enim nihil atque fugit? Saepe minus maxime a voluptatum. Saepe laboriosam, magnam voluptatum labore molestias non vel. Non animi adipisci reprehenderit, omnis laudantium ea laborum ex fugiat, ipsam illo odio?
        </p>
    </div>
  )
}
About.Prototypes={
    header:PropTypes.string,
};