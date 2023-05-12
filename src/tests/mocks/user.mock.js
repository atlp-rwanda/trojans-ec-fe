export const User = {
  id: 1,
  name: "Admin Trojan",
  email: "admin123@gmail.com",
  password: "admin123",
  role: "admin",
  status: "active",
  isVerified: true,
  gender: "Male",
  preferredLanguage: "English",
  preferredCurrency: "RWF",
  birthdate: "01/01/2000",
  lastTimePasswordUpdated: "01/01/2023",
  profilePic:
    "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
  billingAddress:
    '{"street":"KN 05 ST","city":"Kigali","province":"Kigali","postalCode":"00000","country":"Rwanda"}',
};

export const Users = [
  {
    id: 1,
    name: "Admin Trojan",
    email: "admin123@gmail.com",
    password: "admin123",
    role: "admin",
    status: "active",
    isVerified: true,
    gender: "Male",
    preferredLanguage: "English",
    preferredCurrency: "RWF",
    birthdate: "01/01/2000",
    lastTimePasswordUpdated: "01/01/2023",
    profilePic:
      "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
    billingAddress:
      '{"street":"KN 05 ST","city":"Kigali","province":"Kigali","postalCode":"00000","country":"Rwanda"}',
  },
];

export const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJ0ZXN0U2VsbGVyIiwiZW1haWwiOiJ0ZXN0U2VsbGVyQGV4YW1wbGUuY29tIiwicm9sZSI6InNlbGxlciIsInN0YXR1cyI6ImFjdGl2ZSIsImlkIjo3LCJwcm9maWxlUGljIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHFrMndqeXl6L2ltYWdlL3VwbG9hZC92MTY4Mzc5MjgxNy9Ucm9qYW5zRWNvbW1lcmNlL3R0cXJiYXZubGplb3ZwOXZzbnIwLmpwZyIsInJhbmRvbUF1dGgiOiIxNjQwNCIsImxhc3RUaW1lUGFzc3dvcmRVcGRhdGVkIjoiMjAyMy0wNS0xMFQxNDoyNDozMi4wNzVaIn0sImlhdCI6MTY4MzgwNTE4NSwiZXhwIjoxNjgzODA1NDg1fQ.ACc4FO9TEyxzByXfzCTpnkEdJdVgilxp6lKQhrP1xZc";
export const userState = {
  user: null,
  loading: false,
  error: null,
  gotEmail: false,
  successAuth: false,
  twoFactorAuth: false,
  otp: "",
  otpErrors: {
    firstDigitError: null,
    exactLengthError: null,
    isRequiredError: null,
  },
};

export const signUpState = {
  loading: false,
  userInfo: null,
  response: null,
  error: null,
  success: false,
};

export const userProfileState = {
  userProfile: [User],
  userStatus: null,
  loading: false,
  updateStatus: null,
  error: null,
};
