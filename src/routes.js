import React from 'react'

import FamilyHolidayPage from './pages/FamilyHolidayPage'
import TourTravelPage from './pages/TourTravelPage'
import TrekkingTripsPage from './pages/TrekkingTripsPage'
import VacationsPage from './pages/VacationsPage'
import LandingPage from './screens/LandingPage/LandingPage'
import SearchResultsPage from './screens/SearchResultsPage/SearchResultsPage'
import PublishTrip from './screens/PublishTrip/PublishTrip'
import ChatPage from './screens/Chat/ChatPage'
import LoginPage from './screens/AuthFlow/LoginPage/loginPage'
import VerifyCode from './screens/AuthFlow/VerifyCode/VerifyCode'
import SignUp from './screens/AuthFlow/SignUpPage/SignUp'
import TripPage from './components/TripPage/TripPage'
import UserProfile from './screens/UserProfile/UserProfile'
import UserTrips from './screens/UserTrips/UserTrips'
import SetupPage from './screens/AuthFlow/setupPage'
import PublicUser from './screens/UserProfile/UserDashboard/PublicUser'
import HomePage from './components/ContactUs/HomePage'
import AboutUs from './components/AboutUs/AboutUs'
import DelhiPage from './pages/DelhiPage'
import ChandigarhPage from './pages/ChandigarhPage'
import ShimlaPage from './pages/ShimlaPage'
import AmritsarPage from './pages/AmritsarPage'
import MumbaiPage from './pages/MumbaiPage'
import BangalorePage from './pages/BangalorePage'
import PunePage from './pages/PunePage'
import KolkataPage from './pages/KolkataPage'
import HyderabadPage from './pages/HyderabadPage'
import GoaPage from './pages/GoaPage'
import ChennaiPage from './pages/ChennaiPage'
import AhmedabadPage from './pages/AhmedabadPage'
import LucknowPage from './pages/LucknowPage'
import JaipurPage from './pages/JaipurPage'
import CochinPage from './pages/CochinPage'
import NagpurPage from './pages/NagpurPage'
import TrivandrumPage from './pages/TrivandrumPage'

export const routes = [
  {
    path: '/',
    element: <LandingPage />,
    isPrivate: false,
  },
  {
    path: '/contact-us',
    element: <HomePage />,
    isPrivate: false,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
    isPrivate: false,
  },

  {
    path: '/trips',
    element: <SearchResultsPage />,
    isPrivate: false,
  },
  {
    path: '/publish-trip',
    element: <PublishTrip />,
    isPrivate: true,
  },
  // {
  //   path: '/chats',
  //   element: <ChatPage />,
  //   isPrivate: true,
  // },

  {
    path: '/login',
    element: <LoginPage />,
    isPrivate: false,
  },

  {
    path: '/user-profile',
    element: <UserProfile />,
    isPrivate: true,
  },
  {
    path: '/trip/:id',
    element: <TripPage />,
    isPrivate: false,
  },
  {
    path: '/user/:id',
    element: <PublicUser />,
    isPrivate: false,
  },
  {
    path: '/verify-otp',
    element: <VerifyCode />,
    isPrivate: false,
  },
  {
    path: '/signup',
    element: <SignUp />,
    isPrivate: false,
  },
  {
    path: '/user-trips',
    element: <UserTrips />,
    isPrivate: true,
  },
  {
    path: '/setup',
    element: <SetupPage />,
    isPrivate: false,
  },
  {
    path: '/delhi',
    element: <DelhiPage />,
    isPrivate: false,
  },
  {
    path: '/chandigarh',
    element: <ChandigarhPage />,
    isPrivate: false,
  },
  {
    path: '/shimla',
    element: <ShimlaPage />,
    isPrivate: false,
  },
  {
    path: '/amritsar',
    element: <AmritsarPage />,
    isPrivate: false,
  },
  {
    path: '/mumbai',
    element: <MumbaiPage />,
    isPrivate: false,
  },
  {
    path: '/bangalore',
    element: <BangalorePage />,
    isPrivate: false,
  },
  {
    path: '/pune',
    element: <PunePage />,
    isPrivate: false,
  },
  {
    path: '/kolkata',
    element: <KolkataPage />,
    isPrivate: false,
  },
  {
    path: '/hyderabad',
    element: <HyderabadPage />,
    isPrivate: false,
  },
  {
    path: '/goa',
    element: <GoaPage />,
    isPrivate: false,
  },
  {
    path: '/goa-tour-packages',
    element: <GoaPage />,
    isPrivate: false,
  },
  {
    path: '/family-holiday-tour-packages',
    element: <FamilyHolidayPage />,
    isPrivate: false,
  },
  {
    path: '/tour-travel-packages',
    element: <TourTravelPage />,
    isPrivate: false,
  },
  {
    path: '/trekking-trips-packages',
    element: <TrekkingTripsPage />,
    isPrivate: false,
  },
  {
    path: '/vacations-tour-packages',
    element: <VacationsPage />,
    isPrivate: false,
  },
  {
    path: '/chennai',
    element: <ChennaiPage />,
    isPrivate: false,
  },
  {
    path: '/ahmedabad',
    element: <AhmedabadPage />,
    isPrivate: false,
  },
  {
    path: '/lucknow',
    element: <LucknowPage />,
    isPrivate: false,
  },
  {
    path: '/jaipur',
    element: <JaipurPage />,
    isPrivate: false,
  },
  {
    path: '/cochin',
    element: <CochinPage />,
    isPrivate: false,
  },
  {
    path: '/nagpur',
    element: <NagpurPage />,
    isPrivate: false,
  },
  {
    path: '/trivandrum',
    element: <TrivandrumPage />,
    isPrivate: false,
  },
]
