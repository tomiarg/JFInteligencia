import React from 'react'
import { Stats } from '../svgs'

export const Contact = () => {
  return (
    <section className='contact'>
        <div className="contact__heading">
            <h2>Contact</h2>
            <Stats/>
        </div>
        <div className="contact__contacts">
            <div className="contact__contacts--tipe">
                <h2>Tel.</h2>
            </div>
            <div className="contact__contacts--tipe">
                <h2>Mail</h2>
            </div>
            <div className="contact__contacts--tipe">
                <h2>Social</h2>
            </div>
        </div>

    </section>
  )
}
