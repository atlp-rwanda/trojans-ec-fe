export const User = 
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
        lastTimePasswordUpdated: new Date(),
        profilePic:
          "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
        billingAddress:'{"street":"KN 05 ST","city":"Kigali","province":"Kigali","postalCode":"00000","country":"Rwanda"}',
      }

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
    lastTimePasswordUpdated: new Date(),
    profilePic:
      "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
    billingAddress:'{"street":"KN 05 ST","city":"Kigali","province":"Kigali","postalCode":"00000","country":"Rwanda"}',
  }
]

export const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsInJvbGUiOiJzZWxsZXIiLCJzdGF0dXMiOiJhY3RpdmUiLCJpZCI6MiwicHJvZmlsZVBpYyI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Rtanh1a3gwOS9pbWFnZS91cGxvYWQvdjE2NzU4NDQ2OTIvcHJvZmlsZXMvUHJvZmlsZS1BdmF0YXItUE5HLUZyZWUtRG93bmxvYWRfcGFxZnJmLnBuZyIsInJhbmRvbUF1dGgiOiI0NDE3OCIsImxhc3RUaW1lUGFzc3dvcmRVcGRhdGVkIjoiMjAyMy0wNC0yOFQxMDoyNToyMC4zMDNaIn0sImlhdCI6MTY4MjY5MDUxMiwiZXhwIjoxNjgyNjkwODEyfQ.rAKfYMmCYipT5pVLhBMmDQaNRfo5z7zfKPpChpDMduI"

export const userState ={
  user: null,
  loading: false,
  error: null,
  gotEmail: false,
  successAuth: false,
  twoFactorAuth: false,
  otp: "",
  otpErrors:{
    firstDigitError: null,
    exactLengthError: null,
    isRequiredError: null,
  }
};

export const signUpState = {
  loading: false,
  userInfo: null,
  response: null,
  error: null,
  success: false,
};
