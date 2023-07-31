import { injectIntl } from 'react-intl';
import React from 'react';
import SocialNetwork from './SocialNetwork';
import Wrapper from '@plone/volto/storybook';

const StoryComponent = injectIntl(({ children, ...args }) => {
  return (
    <Wrapper>
      <div>
        <SocialNetwork {...args} />
      </div>
    </Wrapper>
  );
});

export const Facebook = StoryComponent.bind({});
Facebook.args = {
  id: 'facebook',
  icon: 'facebook',
  title: 'Facebook',
  url: 'https://www.facebook.com/Plone-Brasil-101606785972720',
};

export const GitHub = StoryComponent.bind({});
GitHub.args = {
  id: 'github',
  icon: 'github',
  title: 'GitHub',
  url: 'https://github.com/plonegovbr',
};

export const Instagram = StoryComponent.bind({});
Instagram.args = {
  id: 'instagram',
  icon: 'instagram',
  title: 'Instagram',
  url: 'https://www.instagram.com/plonebr/',
};

export const Twitter = StoryComponent.bind({});
Twitter.args = {
  id: 'twitter',
  icon: 'twitter',
  title: 'Twitter',
  url: 'https://twitter.com/ploneorgbr/',
};

export const YouTube = StoryComponent.bind({});
YouTube.args = {
  id: 'youtube',
  icon: 'youtube',
  title: 'YouTube',
  href:
    'https://www.youtube.com/playlist?list=PLGN9BI-OAQkTbVIJRPYpAs1K4hBdkLl10',
};

export default {
  title: 'Components/SocialNetworks/SocialNetwork',
  component: SocialNetwork,
  argTypes: {
    id: {
      name: 'Social Network ID',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Social Network Icon',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'Social Network Title',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    url: {
      name: 'URL',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
};
