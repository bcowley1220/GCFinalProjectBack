const Nylas = require("nylas");

require("dotenv").config();

Nylas.config({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

router.get("/connect", (req, res, next) => {
  options = {
    redirectURI: "http://localhost:3000/oauth/callback",
    scopes: ["email.read_only", "email.send"]
  };
  res.redirect(Nylas.urlForAuthentication(options));
});
