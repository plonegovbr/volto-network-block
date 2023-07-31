import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector, shallowEqual } from 'react-redux';
import { getNetworks } from '../helpers/networks';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const FooterLinks = (props) => {
  const animate = props.animate !== undefined ? props.animate : true;
  const align = props.align !== undefined ? props.align : 'left';
  const title = props.title;
  const { backendNetworks = [] } = useSelector(
    (state) => ({
      backendNetworks: state.actions?.actions?.social_actions,
    }),
    shallowEqual,
  );
  const networks = getNetworks(backendNetworks);
  return (
    <div className={cx('footer_links', align)}>
      {title && <div className="footer_links title">{title}</div>}
      <SocialNetworks networks={networks} animate={animate} align={align} />
    </div>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FooterLinks.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
  animate: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
FooterLinks.defaultProps = {
  align: 'left',
  animate: true,
};

export default FooterLinks;
