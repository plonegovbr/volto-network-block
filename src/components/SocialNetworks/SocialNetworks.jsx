import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import cx from 'classnames';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

const SocialNetworks = (props) => {
  const { networks, animate, align } = props;
  return (
    <List horizontal className={cx('social-networks', align)}>
      {networks.map(function (network) {
        return (
          <List.Item key={network.id}>
            <SocialNetwork
              id={network.id}
              icon={network.icon}
              url={network.url}
              title={network.title}
              animate={animate}
            />
          </List.Item>
        );
      })}
    </List>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SocialNetworks.propTypes = {
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  align: PropTypes.string,
  animate: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SocialNetworks.defaultProps = {
  align: 'left',
  animate: true,
};

export default SocialNetworks;
