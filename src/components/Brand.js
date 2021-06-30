import { skills } from './data'

export default function Brand() {
  
  return (
    <section className="brand">
      <div className="half">
        <h4>About Me</h4>
        <p>
          I am a creative problem solver, always finding solutions quickly and inventively to any challenge that I am faced with. My logical thinking always assists and aids with my approach to brain teasers, be it a coding problem or an everyday issue. I decided to make the switch to becoming a software developer and began teaching myself HTML, CSS and JavaScript. When I realised that I was picking them up quickly, while gaining great satisfaction and enjoyment, I knew that this was the right path for me. I decided to fast track my learning with the Software Engineering Immersive course at General Assembly, through this I have gained valuable skills and knowledge over a short space of time. I find programming to be thoroughly enjoyable and it comes naturally to me.
        </p>
      </div>
      <div className="half">
        <h4>const mySkills = [</h4>
        <div className="skills">
          {skills.map(skill => (
            <div key={skill}>
              {skill.svg && skill.svg()}
            </div>
          ))}
        </div>
        <h4>]</h4>
      </div>
    </section>
  )
}