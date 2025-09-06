import { useEffect, memo } from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import PopularSection from '../../components/PopularSection/PopularSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import HeroSection from '../../components/HeroSectionV2/HeroSection'
import TopDestination from '../../components/TopDestination/TopDestination'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { setSearchForm } from '../../actions/trips.action'
import { loadUser } from '../../actions/auth.action'
import SlidingSection from '../../components/SlidingSection/SlidingSection'
import { Helmet } from 'react-helmet-async'
import TravmigozFilter from '../../components/TravmigozFilter'
import Banner from './Banner'
import { setFilters } from '../../actions/filters.action'
import QuesAns from '../../components/QuesAns'

const LandingPage = (props) => {
  const { setSearchForm, loadUser, setFilters } = props

  useEffect(() => {
    setFilters({
      persona: '',
      participants: {},
      duration: '',
      budget: { min: 0, max: 100000 },
      categories: [],
    })
    setSearchForm({
      destination: '',
      startDate: '',
    })
  }, [setSearchForm])

  const data = [
  {
    "ques": "Fully Customizable Travel Packages",
    "ans": "Your travel plan as per your liking, no compromise."
  },
  {
    "ques": "Verified Publishers and Members",
    "ans": "We do all the verification so you can travel without any worry."
  },
  {
    "ques": "Safe and Secure Platform",
    "ans": "Because choosing the right travel plan should always feel safe."
  },
  {
    "ques": "Full Transparency, Nothing to Hide",
    "ans": "No hidden charges, no guesswork, just clear details and honest reviews you can trust."
  },
  {
    "ques": "Easy to Navigate and Book",
    "ans": "The only confusion you should have is what to pack. Just scroll, select and GO!!"
  },
  {
    "ques": "Build Your Community",
    "ans": "For us, your travel experience is not just a transaction, it's a journey of a lifetime that we gift you with like-minded people."
  },
  {
    "ques": "Unique Experiences",
    "ans": "Most amazing trips are never planned on your own. With a travel community, you will get to experience different perspectives with travellers."
  },
  {
    "ques": "Trips That Fit You",
    "ans": "Every travelling experience is different, and so is every traveller. That’s why we bring in filters that let you choose by different styles, budget and interests."
  }
]
  return (
    <div className="LandingContainer">
      <Helmet>
        <title>Travmigoz - Home</title>
        <meta
          name="description"
          content="Plan your perfect trip with Travmigoz! Discover the best travel options, explore amazing destinations, and enjoy unforgettable experiences with your travel buddy."
        />
      </Helmet>
      <Header isImageNavbar={true} isLandingPage={true} key="LandingPage" />

      {/* <TravmigozFilter />  */}
      <Banner />

      <SlidingSection />
      <HeroSection />
      <PopularSection />
      <TopDestination />
      <QuesAns
        heading="Why travel agencies Travmigos for the packages?"
        data={data}
      />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default connect(null, { setSearchForm, loadUser, setFilters })(memo(LandingPage))
