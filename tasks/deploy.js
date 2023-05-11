task("deploy", "Deploy to the network")
  .addParam("buyerfee", "Buyer Fee")
  .addParam("sellerfee", "Seller Fee")
  .setAction(async (_taskArgs, hre) => {
    const signer = hre.ethers.provider.getSigner(0);
    console.log("Deployer address:", await signer.getAddress());
    console.log(`Account balance: ${ethers.utils.formatEther(await signer.getBalance()).toString()} ETH`);
    const SnoopySwap = await ethers.getContractFactory("SnoopySwap");
    const snoopySwap = await SnoopySwap.deploy();
    console.log("SnoopySwap address:", snoopySwap.address);
    await snoopySwap.deployTransaction.wait(5);

    await hre.run("verify:verify", {
      address: snoopySwap.address,
      constructorArguments: [],
    });

    
  });
