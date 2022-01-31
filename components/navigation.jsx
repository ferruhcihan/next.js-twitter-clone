import React from 'react'
import styles from './navigation.module.css'
import NavButton from './nav-button'
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from './icons'

const Navigation = ({ children, ...props }) => {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton>
        <Explore />
        <span>Explore</span>
      </NavButton>

      <NavButton>
        <Notification />
        <span>Notifications</span>
      </NavButton>

      <NavButton>
        <Messages />
        <span>Messages</span>
      </NavButton>

      <NavButton>
        <Bookmark />
        <span>Bookmarks</span>
      </NavButton>

      <NavButton>
        <Lists />
        <span>Lists</span>
      </NavButton>

      <NavButton>
        <Profile />
        <span>Profile</span>
      </NavButton>

      <NavButton>
        <More />
        <span>More</span>
      </NavButton>
    </nav>
  )
}

export default Navigation
