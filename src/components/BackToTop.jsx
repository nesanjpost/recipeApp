import { useEffect, useState } from 'react'

const BackToTop = () => {
    const [showbutton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='text-center pb-4'>
       {
        showbutton && 
         <button className='btn text-danger back-to-top'
         onClick={scrollToTop}><i class="bi fs-1 bi-arrow-up-circle"></i></button>
       }
    </div>
  )
}

export default BackToTop