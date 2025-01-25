import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export default function Nfinity() {
  return (
    <Project>
      <ProjectHeader>Nfinity</ProjectHeader>
      <p>(Previously known as Lazy3d)</p>
      <p>
        3d, procedurally generated NFT browser. Generates an art gallery
        instantly for any Ethereum wallet address. Public good, created as
        part of the Ethereum Naming Service Public Goods Hackathon (2020)
      </p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Typescript, Ethers.js, Ethereum, OpenSea,  Cloudflare</p>
    </Project>
  )
}
