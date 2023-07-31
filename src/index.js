// Follow Us Block
import FollowUsEdit from './components/Blocks/FollowUs/Edit';
import FollowUsView from './components/Blocks/FollowUs/View';
import shareSVG from '@plone/volto/icons/share.svg';
import './theme/main.scss';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    socialNetworks: [
      {
        id: 'twitter',
        title: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/ploneorgbr/',
      },
      {
        id: 'instagram',
        title: 'Instagram',
        icon: 'instagram',
        url: 'https://www.instagram.com/plonebr/',
      },
    ],
  };
  const localBlocks = {
    follow_us: {
      id: 'follow_us',
      title: 'Follow Us',
      icon: shareSVG,
      group: 'common',
      view: FollowUsView,
      edit: FollowUsEdit,
      restricted: false,
      mostUsed: false,
      sidebarTab: 1,
    },
  };

  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    ...localBlocks,
  };

  // Add block to Grid Blocks
  if (config.blocks.blocksConfig.gridBlock !== undefined) {
    config.blocks.blocksConfig.gridBlock.allowedBlocks = [
      ...config.blocks.blocksConfig.gridBlock.allowedBlocks,
      'follow_us',
    ];
    config.blocks.blocksConfig.gridBlock.blocksConfig = {
      ...config.blocks.blocksConfig.gridBlock.blocksConfig,
      ...localBlocks,
    };
  }

  return config;
};

export default applyConfig;
