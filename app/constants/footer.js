import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FooterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterLink
