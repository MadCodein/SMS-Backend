const constants = {
  SECRET_KEY: process.env.API_KEY,

  mnotifyTemplateBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/template'
  },
  mnotifyGroupBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/group'
  },
  mnotifyContactBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/contact'
  },
  mnotifyQuickBulkSMSBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/sms/quick'
  },
  mnotifyGroupBulkSMSBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/sms/group'
  },
  mnotifySenderIDBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/senderid/register'
  },
  mnotifySMSBalanceBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/balance/sms'
  },
  mnotifySMSDeliveryReportBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/campaign'
  },
  mnotifySpecificSMSDeliveryReportBaseUrl: {
    BASE_URL: 'https://api.mnotify.com/api/status'
  }
}

module.exports = constants
