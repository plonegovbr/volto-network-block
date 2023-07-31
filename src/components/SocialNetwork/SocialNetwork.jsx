import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import SocialNetworkIcon from '../SocialNetworkIcon/SocialNetworkIcon';

const SocialNetwork = (props) => {
  const { icon, title, url, animate } = props;
  return (
    <UniversalLink
      href={url}
      openLinkInNewTab
      className={cx('social-network', 'item', `${icon}`, {
        animate: animate,
      })}
      rel={'me'}
    >
      <SocialNetworkIcon icon={icon} title={title} animate={animate} />
    </UniversalLink>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SocialNetwork.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  animate: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SocialNetwork.defaultProps = {
  animate: true,
};

export default SocialNetwork;
