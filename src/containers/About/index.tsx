import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubStats } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati
      quam officia libero ab ipsam expedita ratione perspiciatis quaerat beatae
      in saepe consectetur voluptatibus magnam possimus facere! Illo.
    </Paragraph>
    <GitHubStats>
      <img src="https://github-readme-stats.vercel.app/api?username=algayer-code&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=algayer-code&layout=compact&langs_count=7&theme=dracula" />
    </GitHubStats>
  </section>
)

export default About
