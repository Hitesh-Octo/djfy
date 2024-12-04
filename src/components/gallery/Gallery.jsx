import React from 'react';
import './gallery.css';

import Gicon from '../../assets/gallery-img/galleryicon.png'
import Gimg1 from '../../assets/gallery-img/Gimg1.jpg'
import Gimg2 from '../../assets/gallery-img/Gimg2.jpg'
import Gimg3 from '../../assets/gallery-img/Gimg3.png'
import Gimg4 from '../../assets/gallery-img/Gimg4.png'
import Gimg5 from '../../assets/gallery-img/Gimg5.jpg'
import Gimg6 from '../../assets/gallery-img/Gimg6.jpg'
import Gimg7 from '../../assets/gallery-img/Gimg7.jpg'
import Gimg8 from '../../assets/gallery-img/Gimg8.png'
import Gimg9 from '../../assets/gallery-img/Gimg9.jpg'
import Gimg10 from '../../assets/gallery-img/Gimg10.jpg'



function Gallery() {
  return (
    <div className="flex flex-col items-center py-10 Gallery">
                    <div className="text-center mb-6">
                        <i className="fas fa-th-large text-6xl mb-4"></i>
                        <h1 className="text-4xl text-red-500 mb-2">GALLERY</h1>
                        <i className="fas fa-wave-square text-red-500 text-2xl mb-4"></i>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-20 sm:px-[60]">
                        <img src={Gimg1} alt="DJ playing music" className="rounded-lg Gimgh" />
                        <img src={Gimg2} alt="Crowd at a music festival" className="rounded-lg Gimgh" />
                        <img src={Gimg3} alt="People dancing at a party" className="rounded-lg Gimgh" />
                        <img src={Gimg4} alt="Band performing live" className="rounded-lg Gimgh" />
                        <img src={Gimg5} alt="Group of friends at a party" className="rounded-lg Gimgh" />
                        <img src={Gimg6} alt="DJ performing at a club" className="rounded-lg Gimgh" />
                        <img src={Gimg7} alt="DJ mixing music" className="rounded-lg Gimgh" />
                        <img src={Gimg8} alt="People enjoying a concert" className="rounded-lg Gimgh" />
                        <img src={Gimg9} alt="People enjoying a concert" className="rounded-lg Gimgh" />
                        <img src={Gimg10} alt="People enjoying a concert" className="rounded-lg Gimgh" />
                    </div>
                </div>
  )
}

export default Gallery