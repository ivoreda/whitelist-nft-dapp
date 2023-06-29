const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const nftContract = await hre.ethers.deployContract("CryptoDevs", [
    "0x2174aa295C1CAE10744016c7BDE9585fF849907E",
  ]);

  await nftContract.waitForDeployment();

  console.log("NFT contract address ", nftContract.target);

  await sleep(30 * 1000);
  await hre.run("verify:verify", {
    address: nftContract.target,
    constructorArguments: ["0x2174aa295C1CAE10744016c7BDE9585fF849907E"],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error), process.exit(1);
  });
