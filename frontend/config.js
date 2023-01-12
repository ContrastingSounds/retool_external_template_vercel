exports.deployOnLocalhost = true;

exports.auth = {
  tokenDuration: "1800s",
  REACT_APP_AUTH0_DOMAIN: "dev-lekm7di5.us.auth0.com",
  REACT_APP_AUTH0_CLIENT_ID: "XTvdIg69eapUmPCYItBeiLfmzLnChB5Q",
  REACT_APP_AUTH0_SCOPE: "read:current_user update:current_user_metadata",
};

exports.homepage = {
  sidebarList: [
    {
      title: "Store manager",
      retoolAppName: "storeManager",
      icon: "home",
      slug: "",
      groups: ["bronze", "silver", "gold"],
    },
    {
      title: "Order history",
      retoolAppName: "orderHistory",
      icon: "attach_money",
      slug: "sales",
      groups: ["bronze", "silver", "gold"],
    },
    {
      title: "Coupon generator",
      retoolAppName: "couponGenerator",
      icon: "star",
      slug: "coupons",
      groups: [ "silver", "gold"],
    },
  ],
};
exports.theme = {
  palette: {
    primary: {
      main: "#ffffff",
      light: "#E06363",
      dark: "#972A2A",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
};
