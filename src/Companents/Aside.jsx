import React from 'react';
import './Aside.css';
import image from '../images/cv_photo.jpg'

const Aside = () => {
  return (
    <div className='Aside'>
      <div className="image">
        <img src={image} alt="photo" className='photo' />
      </div>
      <div className="contact">
        <h1>Əlaqə</h1>
        <ul>
          <li>Ünvan: Bakı şəhəri Xəzər ray. Babayev küç.</li>
          <li>Email: nicat3699@gmail.com</li>
          <li>Mobil: +994507711250</li>
        </ul>
      </div>
      <div className="languages">
        <h1>Dil biliyi</h1>
        <ul>
          <li>İngilis dili B1</li>
        </ul>
      </div>
    </div>
  )
}

export default Aside
