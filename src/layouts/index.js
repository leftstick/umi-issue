import PropTypes from 'prop-types'

export default function Layout({ location, route, children }) {
  return children
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  route: PropTypes.any,
  children: PropTypes.any
}
