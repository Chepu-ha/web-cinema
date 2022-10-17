const _accessTokenKey = "acces"

const authService = {
	setToken: (access) => {
		localStorage.setItem(_accessTokenKey, access);
	},
	getAccessToken: () => localStorage.getItem(_accessTokenKey),
};

export {authService};