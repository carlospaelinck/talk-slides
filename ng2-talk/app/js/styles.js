import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  app: {
    color: '#fff',
    fontFamily: 'SF UI Display',
  },

  header: {
    fontSize: '2em',
    fontWeight: '500',
  },

  subHeader: {
    fontSize: '1.1em',
    fontWeight: '400',
    margin: '0 0 0.75em'
  },

  monospace: {
    fontFamily: 'SF Mono',
    fontSize: '1.25em'
  },

  content: {
    fontSize: '2em',
    fontWeight: '400',
  },

  small: {
    fontSize: '1.35em'
  },

  margin: {
    margin: '0 0 0.5em'
  },

  list: {
    listStylePosition: 'outside'
  },

  demo: {
    width: '90%',
    height: '500px',
    margin: '1em 0 0',
    border: 'none'
  }
})
