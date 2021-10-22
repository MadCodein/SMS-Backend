const constants = {
  SECRET_KEY: process.env.API_KEY,
  mnotifyTemplateBaseUrl: {
    BASE_URL: "https://api.mnotify.com/api/template",
  },
  mnotifyGroupBaseUrl: {
    BASE_URL: "https://api.mnotify.com/api/group",
  },
};

module.exports = constants;
