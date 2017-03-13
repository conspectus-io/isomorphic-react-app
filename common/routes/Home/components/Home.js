import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import data from '../data'

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const Home = (props) => (
  <div>

    <h2 className={css(styles.header)}>Details</h2>
    <ul className={css(styles.lead)}>
      <li className={css(styles.lead)}><b>StaticIP:</b> 45.55.100.155</li>
      <li className={css(styles.lead)}><b>Port:</b> 80</li>
      <li className={css(styles.lead)}><b>DNS:</b> AWS Route53</li>
      <li className={css(styles.lead)}><b>Domains:</b> nvizn.io, nvizn.org</li>
      <li className={css(styles.lead)}><b>DigitalOcean Droplet:</b> yakketyServ</li>
      <li className={css(styles.lead)}><b>Author:</b> Evan Reed</li>
    </ul>
    <h2 className={css(styles.header)}>About</h2>
    <p className={css(styles.lead)}>
      This project uses all the latest buzzwords... First off, it's an isomorphic <em>React</em> app bundled using <em>Webpack</em> which gives it a speedy load time independent of the client. The app also uses both <em>Redux</em> and <em>React Router</em> to allow a great UX. The remaining libraries used in this project are listed below.
    </p>
    <h2 className={css(styles.header)}>JavaScript Technologies</h2>
    <ul className={css(styles.list)}>
      {data.map((item, i) => (
        <li key={i}>
          <h3><a className={css(styles.link)} href={item.link} target='_blank'>{item.resource}</a></h3>
          <p className={css(styles.body)}>{item.description}</p>
        </li>
       ))}
    </ul>
  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
  }
})

export default Home
