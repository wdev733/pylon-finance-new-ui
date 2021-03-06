const actions = {
  PARTNERS_FILTER_REQUEST: "PARTNERS_FILTER_REQUEST",
  PARTNERS_FILTER_SUCCESS: "PARTNERS_FILTER_SUCCESS",
  PARTNERS_FILTER_ERROR: "PARTNERS_FILTER_ERROR",

  STATISTICS_FILTER_REQUEST: "STATISTICS_FILTER_REQUEST",
  STATISTICS_FILTER_SUCCESS: "STATISTICS_FILTER_SUCCESS",
  STATISTICS_FILTER_ERROR: "STATISTICS_FILTER_ERROR",

  SLOT_DETAIL_REQUEST: "SLOT_DETAIL_REQUEST",
  SLOT_DETAIL_SUCCESS: "SLOT_DETAIL_SUCCESS",
  SLOT_DETAIL_ERROR: "SLOT_DETAIL_ERROR",
  INIT_SLOT_DETAIL: "INIT_SLOT_DETAIL",

  GET_NOTIFICATION_REQUEST: "GET_NOTIFICATION_REQUEST",
  GET_NOTIFICATION_SUCCESS: "GET_NOTIFICATION_SUCCESS",
  GET_NOTIFICATION_ERROR: "GET_NOTIFICATION_ERROR",

  GET_ALERT_MESSAGE_SUCCESS: "GET_ALERT_MESSAGE_SUCCESS",

  GET_CURRENCY_RATE_REQUEST: "GET_CURRENCY_RATE_REQUEST",
  GET_CURRENCY_RATE_SUCCESS: "GET_CURRENCY_RATE_SUCCESS",

  GET_CURRENCY_REQUEST: "GET_CURRENCY_REQUEST",
  UPDATE_CURRENCY: "UPDATE_CURRENCY",

  GET_USER_PROFILE_REQUEST: "GET_USER_PROFILE_REQUEST",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",

  getPartnersFilterRequest: (payload) => ({
    type: actions.PARTNERS_FILTER_REQUEST,
    payload,
  }),
  getStatisticsFilterRequest: (payload) => ({
    type: actions.STATISTICS_FILTER_REQUEST,
    payload,
  }),
  slotDetailRequest: (payload) => ({
    type: actions.SLOT_DETAIL_REQUEST,
    payload,
  }),
  getNotifications: () => ({ type: actions.GET_NOTIFICATION_REQUEST }),
  getCurrencyRateRequest: () => ({ type: actions.GET_CURRENCY_RATE_REQUEST }),
  getCurrency: (payload) => ({ type: actions.GET_CURRENCY_REQUEST, payload }),
  getUserProfile: (payload) => ({
    type: actions.GET_USER_PROFILE_REQUEST,
    payload,
  }),
};
export default actions;
