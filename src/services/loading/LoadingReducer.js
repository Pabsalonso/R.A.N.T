import * as Types from './Types';

const INITIAL_STATE = {
  isLoading: false,
  isLoadingAppointmentsDashboard: false,
  isLoadingAppointmentsDetail: false,
  isLoadingAppointmentsDoctors: false,
  isLoadingAppointmentsDoctorsTimeTake: false,
  isLoadingAppointmentsFiles: false,
  isLoadingAppointmentsMessages: false,
  isLoadingAppointmentsPrescriptions: false,
  isLoadingAppointmentsPrescriptionsDetail: false,
  isLoadingAppointmentsRelationship: false,
  isLoadingAppointmentsReports: false,
  isLoadingAppointmentsReportsDetail: false,
  isLoadingAuthLogin: false,
  isLoadingAuthRegister: false,
  isLoadingAuthRememberPassword: false,
  isLoadingDoctors: false,
  isLoadingDoctorsDetail: false,
  isLoadingHome: false,
  isLoadingMediaFiles: false,
  isLoadingMessagesCenter: false,
  isLoadingMessagesChat: false,
  isLoadingMessagesDashboard: false,
  isLoadingMessagesNew: false,
  isLoadingMessagesNewAppointment: false,
  isLoadingMessagesSupport: false,
  isLoadingMyAccount: false,
  isLoadingMyAccountAccessData: false,
  isLoadingMyAccountMedicalHistory: false,
  isLoadingMyAccountPaymentHistory: false,
  isLoadingMyAccountPaymentHistoryDetail: false,
  isLoadingMyAccountPaymentMethods: false,
  isLoadingMyAccountPaymentMethodsDefaultCard: false,
  isLoadingMyAccountPaymentMethodsDeleteCard: false,
  isLoadingMyAccountPersonalData: false,
  isLoadingPatientsCases: false,
  isLoadingPayment: false,
  isLoadingPaymentCancel: false,
  isLoadingPaymentCards: false,
  isLoadingUser: false,
  isLoadingVideoChat: false,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === Types.SET_LOADING) {
    return { ...state, [action.payload.prop]: action.payload.value };
  }
  return state;
};
