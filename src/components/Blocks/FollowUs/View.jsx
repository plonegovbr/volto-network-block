import React from 'react';
import cx from 'classnames';
import { useSelector, shallowEqual } from 'react-redux';
import { getNetworks } from '../../helpers/networks';
import SocialNetworks from '../../SocialNetworks/SocialNetworks';

const View = ({ data, isEditMode, className }) => {
  const { title, allowedNetworks } = data;
  const animate = data.animate !== undefined ? data.animate : true;
  const align = data.align !== undefined ? data.align : 'left';
  const { backendNetworks = [] } = useSelector(
    (state) => ({
      backendNetworks: state.actions?.actions?.social_actions,
    }),
    shallowEqual,
  );
  const networks = getNetworks(backendNetworks, allowedNetworks);
  return (
    <div className={cx('block follow_us', className, align)}>
      {title && <div className="follow_us title">{title}</div>}
      <SocialNetworks networks={networks} animate={animate} align={align} />
    </div>
  );
};

export default View;
