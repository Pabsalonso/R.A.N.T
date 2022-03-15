export const getBirthDay = (data) => (data && data.birthday ? data.birthday : '');

export const getCountryId = (data) => (data && data.country && data.country.id ? data.country.id : -1);

export const getGender = (data) => (data && data.gender ? data.gender : false);

export const getId = (data) => (data && data.id ? data.id : -1);

export const getPhoneNumber = (data) => (data && data.phoneNumber ? data.phoneNumber : '');

export const getTaxNumber = (data) => (data && data.taxNumber ? data.taxNumber : '');

export const getTimezone = (data) => (data && data.timezone ? data.timezone : -1);

export const getTimezoneValue = (data) => (data && data.timezoneValue ? data.timezoneValue : '');

export const getUserEmail = (data) => (data && data.user && data.user.email ? data.user.email : '');

export const getUserFirstName = (data) => (data && data.user && data.user.firstName ? data.user.firstName : '');

export const getUserId = (data) => (data && data.user && data.user.id ? data.user.id : -1);

export const getUserLastName = (data) => (data && data.user && data.user.lastName ? data.user.lastName : '');

export const getUserLastNameSecond = (data) => (data && data.secondLastName ? data.secondLastName : '');
