export const UPDATE_LOGO = 'logo:updateLogo';

export function updateLogo(newLogo) {
  return {
    type: UPDATE_LOGO,
    payload: {
      logo: newLogo
    }
  }
}