import getOut from '../audio/get_out.wav'

export default function Music() {
  const mySongs = [
    { name: 'Get Out', src: getOut }
  ]

  return (
    <section className="music">
      <h2>Music</h2>
      <div className="songs">
        {mySongs.map(song => (
          <div className="song" key={song.name}>
            <label>{song.name}</label>
            <audio controls src={song.src}>{song.name}</audio>
          </div>
        ))}
      </div>
    </section>
  )
}