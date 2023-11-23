enum EnumSites {
  CODEPEN = 'codepen.io/',
  CODEWARS = 'codewars.com/',
  DEVTO = 'dev.to/',
  FACEBOOK = 'facebook.com/',
  FREECODECAMP = 'freecodecamp.org/',
  FRONTENDMENTOR = 'frontendmentor.io/',
  GITHUB = 'github.com/',
  GITLAB = 'gitlab.com/',
  HASHNODE = 'hashnode.com/',
  LINKEDIN = 'linkedin.com/',
  STACKOVERFLOW = 'stackoverflow.com/',
  TWITCH = 'twitch.tv/',
  TWITTER = 'twitter.com/',
  YOUTUBE = 'youtube.com/',
}

export const findValByKey = (key: string): string | null => {
  key = key.toUpperCase();

  if (!Object.keys(EnumSites).includes(key)) {
    return null;
  }

  return null;
}

export default EnumSites;