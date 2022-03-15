const TEXT_BOLD = 'Your-Custom-Font-Bold';
const TEXT_REGULAR = 'Your-Custom-Font-Regular';
const TEXT_SEMI_BOLD = 'Your-Custom-Font-SemiBold';
const TITLE_BOLD = 'Your-Custom-Title-Bold';
const TITLE_EXTRA_BOLD = 'Your-Custom-Title-ExtraBold';
const TITLE_REGULAR = 'Your-Custom-Title-Regular';

const CUSTOM_FONTS = false;

export const fontTextBold = () => (CUSTOM_FONTS === true ? { fontFamily: TEXT_BOLD } : {});

export const fontTextRegular = () => (CUSTOM_FONTS === true ? { fontFamily: TEXT_REGULAR } : {});

export const fontTextSemiBold = () => (CUSTOM_FONTS === true ? { fontFamily: TEXT_SEMI_BOLD } : {});

export const fontTitleBold = () => (CUSTOM_FONTS === true ? { fontFamily: TITLE_BOLD } : {});

export const fontTitleExtraBold = () => (CUSTOM_FONTS === true ? { fontFamily: TITLE_EXTRA_BOLD } : {});

export const fontTitleRegular = () => (CUSTOM_FONTS === true ? { fontFamily: TITLE_REGULAR } : {});
