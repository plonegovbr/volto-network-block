import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';
import View from './View';
import { useSelector, shallowEqual } from 'react-redux';
import { getNetworks } from '../../helpers/networks';

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const { backendNetworks = [] } = useSelector(
    (state) => ({
      backendNetworks: state.actions?.actions?.social_actions,
    }),
    shallowEqual,
  );
  const networks = getNetworks(backendNetworks);
  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <Sidebar
          {...props}
          networks={networks}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
