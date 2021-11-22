const constants = {
  SECRET_KEY: process.env.API_KEY,

  mnotifyTemplateBaseUrl: 'https://api.mnotify.com/api/template',

  mnotifyGroupBaseUrl: 'https://api.mnotify.com/api/group',

  mnotifyContactBaseUrl: 'https://api.mnotify.com/api/contact',

  mnotifyQuickBulkSMSBaseUrl: 'https://api.mnotify.com/api/sms/quick',

  mnotifyGroupBulkSMSBaseUrl: 'https://api.mnotify.com/api/sms/group',

  mnotifySenderIDBaseUrl: 'https://api.mnotify.com/api/senderid/register',

  mnotifySMSBalanceBaseUrl: 'https://api.mnotify.com/api/balance/sms',

  mnotifySMSDeliveryReportBaseUrl: 'https://api.mnotify.com/api/campaign',

  mnotifySpecificSMSDeliveryReportBaseUrl: 'https://api.mnotify.com/api/status'
}

module.exports = constants
