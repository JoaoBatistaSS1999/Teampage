import React from "react";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Hardhat from "../public/assets/skills/hardhat.svg";
import Solidity from "../public/assets/skills/solidity.svg";
import Ipfs from "../public/assets/skills/ipfs.svg";
import Typescript from "../public/assets/skills/typescript.svg";
import Ethers from "../public/assets/skills/ethers.svg";
import Materialui from "../public/assets/skills/materialui.svg";
import Nodejs from "../public/assets/skills/node.png";
import Moralis from "../public/assets/skills/moralis.svg";

import SkillCard from "./UI/StackItem";

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 bg-[#f5ffff]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='py-4'>Technologies we work with</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillCard image={Solidity} title='Solidity' />
          <SkillCard image={ReactImg} title='React' />{" "}
          <SkillCard image={NextJS} title='NextJs' />
          <SkillCard image={Nodejs} title='NodeJs' />{" "}
          <SkillCard image={Hardhat} title='Hardhat' />
          <SkillCard image={Moralis} title='Moralis' />
          <SkillCard image={Javascript} title='Javascript' />
          <SkillCard image={Typescript} title='Typescript' />
          <SkillCard image={Ethers} title='Ethers.Js' />
          <SkillCard image={Ipfs} title='IPFS' />
          <SkillCard image={Tailwind} title='Tailwind' />
          <SkillCard image={Materialui} title='MaterialUI' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
