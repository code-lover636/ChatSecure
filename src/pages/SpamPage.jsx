import React from 'react'

import Navbar from './components/Navbar';
import SpamScreen from './components/SpamScreen';
import '../styles/spamPage.scss';

const SpamPage = () => {
  return (
    <div className="spam-page">
        <Navbar />
        <SpamScreen />
    </div>
  )
}

export default SpamPage
