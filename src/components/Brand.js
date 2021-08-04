import { skills } from './data'

export default function Brand() {
  
  return (
    <section className="brand">
      <div className="half">
        <h2>About Me</h2>
        <p>
          I am a creative problem solver, always finding solutions quickly and inventively to any challenge that I am faced with. My logical thinking assists and aids with my approach to brain teasers, be it a coding problem or an everyday issue. 
        </p>
        <p>
          After seeing how much my older brother enjoys his job as a developer, I decided to make the switch to becoming a software developer and began teaching myself HTML, CSS and JavaScript. When I realised that I was gaining great satisfaction and enjoyment from coding, I knew that this was the right path for me. 
        </p>
        <p>  
          I decided to fast track my learning with the Software Engineering Immersive course at General Assembly, through this I have gained valuable skills and knowledge over a short space of time. I’m looking for a role in which I can continue to learn and develop my skills as a developer, whilst always bringing a good attitude and a strong work ethic. Being able to expand my skills and knowledge is of paramount importance to me moving forward
        </p>
      </div>
      <div className="half">
        <h4>const mySkills = [</h4>
        <div className="skills">
          {skills.map(skill => (
            <div key={skill}>
              {skill.svg && skill.svg()}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <h4>]</h4>
      </div>
    </section>
  )
}