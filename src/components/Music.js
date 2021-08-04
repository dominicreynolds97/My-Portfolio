import getOut from '../audio/get_out.wav'

export default function Music() {
  const mySongs = [
    { name: 'Get Out', src: getOut }
  ]

  return (
    <section className="music">
      <h2>Music</h2>
      <div className="container">
        <p>
          Music has always been a big part of my life. I have good music production skills, I play the guitar, drums, piano and I am a vocalist too. I enjoy music as a hobby, love to perform solo and as part of a band. I recorded the music for my first development project and my love of local music inspired my fourth project!
        </p>
        <h4>Check out a song that I worte and recorded below:</h4>
        <div className="songs">
          {mySongs.map(song => (
            <div className="song" key={song.name}>
              <label>{song.name}</label>
              <audio controls src={song.src}>{song.name}</audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}