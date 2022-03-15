import * as Types from './Types';

export const setLoadingDefault = (value) => async (dispatch) => {
  dispatch(setLoading('isLoading', value));
};

export const setLoadingAppointmentsDashboard = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsDashboard', value));
};

export const setLoadingAppointmentsDetail = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsDetail', value));
};

export const setLoadingAppointmentsDoctors = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsDoctors', value));
};

export const setLoadingAppointmentsDoctorsTimeTake = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsDoctorsTimeTake', value));
};

export const setLoadingAppointmentsFiles = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsFiles', value));
};

export const setLoadingAppointmentsMessages = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsMessages', value));
};

export const setLoadingAppointmentsPrescriptions = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsPrescriptions', value));
};

export const setLoadingAppointmentsPrescriptionsDetail = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsPrescriptionsDetail', value));
};

export const setLoadingAppointmentsRelationship = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsRelationship', value));
};

export const setLoadingAppointmentsReports = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsReports', value));
};

export const setLoadingAppointmentsReportsDetail = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAppointmentsReportsDetail', value));
};

export const setLoadingAuthLogin = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAuthLogin', value));
};

export const setLoadingAuthRegister = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAuthRegister', value));
};

export const setLoadingAuthRememberPassword = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingAuthRememberPassword', value));
};

export const setLoadingDoctors = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingDoctors', value));
};

export const setLoadingDoctorsDetail = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingDoctorsDetail', value));
};

export const setLoadingHome = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingHome', value));
};

export const setLoadingMediaFiles = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMediaFiles', value));
};

export const setLoadingMessagesCenter = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMessagesCenter', value));
};

export const setLoadingMessagesChat = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMessagesChat', value));
};

export const setLoadingMessagesDashboard = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMessagesDashboard', value));
};

export const setLoadingMessagesNew = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMessagesNew', value));
};

export const setLoadingMessagesNewAppointment = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMessagesNewAppointment', value));
};

export const setLoadingMessagesSupport = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMessagesSupport', value));
};

export const setLoadingMyAccount = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccount', value));
};

export const setLoadingMyAccountAccessData = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountAccessData', value));
};

export const setLoadingMyAccountMedicalHistory = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountMedicalHistory', value));
};

export const setLoadingMyAccountPaymentHistory = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountPaymentHistory', value));
};

export const setLoadingMyAccountPaymentHistoryDetail = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountPaymentHistoryDetail', value));
};

export const setLoadingMyAccountPaymentMethods = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountPaymentMethods', value));
};

export const setLoadingMyAccountPaymentMethodsDefaultCard = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountPaymentMethodsDefaultCard', value));
};

export const setLoadingMyAccountPaymentMethodsDeleteCard = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountPaymentMethodsDeleteCard', value));
};

export const setLoadingMyAccountPersonalData = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingMyAccountPersonalData', value));
};

export const setLoadingPatientsCases = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingPatientsCases', value));
};

export const setLoadingPayment = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingPayment', value));
};

export const setLoadingPaymentCancel = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingPaymentCancel', value));
};

export const setLoadingPaymentCards = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingPaymentCards', value));
};

export const setLoadingUser = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingUser', value));
};

export const setLoadingVideoChat = (value) => async (dispatch) => {
  dispatch(setLoading('isLoadingVideoChat', value));
};

/** *************** */
/** PRIVATE METHODS */
/** *************** */
const setLoading = (prop, value) => async (dispatch) => {
  dispatch({ type: Types.SET_LOADING, payload: { prop, value } });
};
