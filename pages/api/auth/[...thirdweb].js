import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
 
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  // Set this to your domain to prevent signature malleability attacks.
  domain: "example.com",
});

// Export the handler to setup all your endpoints
export default ThirdwebAuthHandler();