import PropTypes from 'prop-types'

export default function Layout(props) {
  return (
    <div>
      <p>match.isExact: {String(props.match.isExact)}</p>
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  route: PropTypes.any,
  children: PropTypes.any
}
