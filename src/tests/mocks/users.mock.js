export const Users = [
  {
    id: 1,
    name: "testBuyer",
    email: "testBuyer@example.com",
    password: "default",
    role: "buyer",
    status: "active",
    isVerified: true,
    gender: "Male",
    preferredLanguage: "English",
    preferredCurrency: "RWF",
    birthdate: "01/01/2000",
    lastTimePasswordUpdated: "01/01/2023",
    profilePic:
      "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
    billingAddress: {
      stree: "KN 05 ST",
      city: "Kigali",
      province: "Kigali",
      postalCode: "00000",
      country: "Rwanda",
    },
  },

  {
    id: 2,
    name: "testSeller",
    email: "testSeller@example.com",
    password: "default",
    role: "seller",
    status: "active",
    isVerified: true,
    gender: "Male",
    preferredLanguage: "English",
    preferredCurrency: "RWF",
    birthdate: "01/01/2000",
    lastTimePasswordUpdated: "01/01/2000",
    profilePic:
      "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
    billingAddress: {
      stree: "KN 05 ST",
      city: "Kigali",
      province: "Kigali",
      postalCode: "00000",
      country: "Rwanda",
    },
  },

  {
    id: 8,
    name: "John Doe",
    email: "example@example.com",
    password: "default",
    role: "buyer",
    status: "active",
    isVerified: true,
    gender: "Male",
    preferredLanguage: "English",
    preferredCurrency: "RWF",
    birthdate: "01/01/2000",
    lastTimePasswordUpdated: "01/01/2000",
    profilePic:
      "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
    billingAddress: {
      stree: "KN 05 ST",
      city: "Kigali",
      province: "Kigali",
      postalCode: "00000",
      country: "Rwanda",
    },
  },
];

export const getUsersState = {
  getLoading: false,
  assignLoading: false,
  disableLoading: false,
  disableError: false,
  users: Users,
  error: { status: false, payload: null },
  role: null,
  userId: null,
};
