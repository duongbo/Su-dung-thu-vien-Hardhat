const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function(){
const message ="Hong Duong";
const messageSecond = "Alo";
it("La mot gia tri dung OK", async function(){
  const HelloWorld = await ethers.getContractFactory('HelloWorld');
  const helloWorld = await HelloWorld.deploy(message);
  await helloWorld.deployed();
  expect(await helloWorld.printHelloWorld()).to.be.equal(message);
  await helloWorld.updateMessage(messageSecond);
  expect(await helloWorld.printHelloWorld()).to.be.equal(messageSecond);
});
});
