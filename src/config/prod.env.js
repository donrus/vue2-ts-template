let serverUrl = "http://localhost:8090";

switch (process.env.VUE_APP_NODE_ENV) {
  case 'prod':
	  serverUrl = "https://api.espressolabs.com.br";
    break

  case 'dev':
	  serverUrl = "https://espresso-api.launchpad.com.br";
    break;
}

export default { //eslint-disable-line
  NODE_ENV: "production",
  ROOT_API: serverUrl,
};
