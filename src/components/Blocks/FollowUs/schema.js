import { defineMessages } from 'react-intl';

const messages = defineMessages({
  FollowUsBlock: {
    id: 'Follow Us Block',
    defaultMessage: 'Follow Us',
  },
  FollowUsTitle: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },
  FollowUsAlign: {
    id: 'Align',
    defaultMessage: 'Align',
  },
  FollowUsAnimateIcon: {
    id: 'Animate Icon',
    defaultMessage: 'Animate Icon',
  },
  FollowUsNetworks: {
    id: 'Networks',
    defaultMessage: 'Networks',
  },
  Network: {
    id: 'Network',
    defaultMessage: 'Network',
  },
  NetworkTitle: {
    id: 'Network',
    defaultMessage: 'Network',
  },
});

const NetworkSchema = ({ intl, allowedNetworks }) => ({
  title: intl.formatMessage(messages.Network),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['id'],
    },
  ],
  properties: {
    id: {
      title: intl.formatMessage(messages.NetworkTitle),
      choices: allowedNetworks(),
      noValueOption: false,
    },
  },
  required: ['id'],
});

export const FollowUsSchema = (props) => {
  const { intl, networks } = props;
  const allowedNetworks = () => {
    const allNetworks = networks || [];
    return allNetworks.map((item) => [item.id, item.title]);
  };
  return {
    title: intl.formatMessage(messages.FollowUsBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'align', 'animate'],
      },
      {
        id: 'networks',
        title: 'Filter Networks',
        fields: ['allowedNetworks'],
      },
    ],

    properties: {
      title: {
        title: props.intl.formatMessage(messages.FollowUsTitle),
        default: 'Follow us',
      },
      align: {
        title: props.intl.formatMessage(messages.FollowUsAlign),
        default: 'left',
        widget: 'align',
      },
      animate: {
        title: props.intl.formatMessage(messages.FollowUsAnimateIcon),
        type: 'boolean',
        default: true,
      },
      allowedNetworks: {
        title: intl.formatMessage(messages.FollowUsNetworks),
        widget: 'object_list',
        schema: NetworkSchema({ intl, allowedNetworks }),
      },
    },
    required: [],
  };
};
