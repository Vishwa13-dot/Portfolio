import * as SecureLSModule from "secure-ls";

const SecureLS = SecureLSModule.default;

const ls = new SecureLS({
  encodingType: "aes",
  isCompression: false,
});

export default ls;