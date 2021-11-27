import React from 'react'
import './section.css'
import Navbar from '../Navbar'

const LayoutContent = (props) => (
    <>
        <Navbar />
        <section className='container'>
            <h1>{props.title}</h1>
            <div className='content-layout'>
                {props.children}
            </div>
        </section>
    </>
)

export default LayoutContent