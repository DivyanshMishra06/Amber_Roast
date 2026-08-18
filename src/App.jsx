import { useState, useEffect } from 'react'
import ProgressBar    from './components/ProgressBar'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Stats          from './components/Stats'
import About          from './components/About'
import Menu           from './components/Menu'
import Gallery        from './components/Gallery'
import Testimonials   from './components/Testimonials'
import Hours          from './components/Hours'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import BackToTop      from './components/BackToTop'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const progress  = Math.min((scrollY / Math.max(maxScroll, 1)) * 100, 100)

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="site-top">
        {showAnnouncement && (
          <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
        )}
        <Navbar scrolled={scrollY > 40} />
      </div>
      <main>
        <Hero />
        <Stats />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={scrollY > 600} />
    </>
  )
}
