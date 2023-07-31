import React from 'react';
import { FollowUsSchema } from './schema';
import { BlockDataForm, Icon } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';
import shareSVG from '@plone/volto/icons/share.svg';

const messages = defineMessages({
  FollowUsBlock: {
    id: 'Follow Us Block',
    defaultMessage: 'Follow Us',
  },
});

const FollowUsData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer, networks } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(FollowUsSchema({ ...props, intl, networks }), props)
    : FollowUsSchema({ ...props, intl, networks });
  return (
    <BlockDataForm
      schema={schema}
      icon={<Icon size="24px" name={shareSVG} />}
      title={intl.formatMessage(messages.FollowUsBlock)}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default FollowUsData;
