import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@plone/volto/components';
import cx from 'classnames';
import discordIcon from '../../icons/discord.svg';
import dockerIcon from '../../icons/docker.svg';
import facebookIcon from '../../icons/facebook.svg';
import flickrIcon from '../../icons/flickr.svg';
import githubIcon from '../../icons/github.svg';
import gitlabIcon from '../../icons/gitlab.svg';
import instagramIcon from '../../icons/instagram.svg';
import linkedinIcon from '../../icons/linkedin.svg';
import mastodonIcon from '../../icons/mastodon.svg';
import mediumIcon from '../../icons/medium.svg';
import slackIcon from '../../icons/slack.svg';
import soundcloudIcon from '../../icons/soundcloud.svg';
import spotifyIcon from '../../icons/spotify.svg';
import stackoverflowIcon from '../../icons/stack-overflow.svg';
import telegramIcon from '../../icons/telegram.svg';
import tiktokIcon from '../../icons/tiktok.svg';
import twitchIcon from '../../icons/twitch.svg';
import twitterIcon from '../../icons/twitter.svg';
import whatsappIcon from '../../icons/whatsapp.svg';
import xingIcon from '../../icons/xing.svg';
import youtubeIcon from '../../icons/youtube.svg';

const defaultSize = '36px';

const ICONS = {
  discord: discordIcon,
  docker: dockerIcon,
  facebook: facebookIcon,
  flickr: flickrIcon,
  github: githubIcon,
  gitlab: gitlabIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
  mastodon: mastodonIcon,
  medium: mediumIcon,
  slack: slackIcon,
  soundcloud: soundcloudIcon,
  spotify: spotifyIcon,
  stackoverflow: stackoverflowIcon,
  telegram: telegramIcon,
  tiktok: tiktokIcon,
  twitch: twitchIcon,
  twitter: twitterIcon,
  whatsapp: whatsappIcon,
  xing: xingIcon,
  youtube: youtubeIcon,
};

const SocialNetworkIcon = (props) => {
  const { icon, size, color, className, title, onClick, animate } = props;
  const networkIcon = ICONS[icon];
  return (
    <Icon
      name={networkIcon}
      size={size}
      color={color}
      className={cx(`${className}`, 'social-network', `${icon}`, {
        animate: animate,
      })}
      title={title}
      onClick={onClick}
    />
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SocialNetworkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  animate: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SocialNetworkIcon.defaultProps = {
  size: defaultSize,
  color: null,
  className: '',
  title: null,
  onClick: null,
  animate: true,
};

export default SocialNetworkIcon;
