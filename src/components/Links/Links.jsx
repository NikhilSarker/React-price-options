import PropTypes from 'prop-types';

const Links = ({route}) => {
  // console.log(route);
  return (
    <li className='mr-10 hover:bg-yellow-300'><a href={route.path}>{route.name}</a></li>
  );
};
Links.propTypes = {
  route:PropTypes.object.isRequired
}

export default Links;