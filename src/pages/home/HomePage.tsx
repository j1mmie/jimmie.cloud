import './HomePage.scss'

export default function HomePage() {
  return (
    <article>
      <p>
        <strong>
          WORK IN PROGRESS:
        </strong>{" "}
        Some pages on this site are not complete yet.
      </p>
      <h2>Hello</h2>
      <p>
        My name is Jimmie Tyrrell and I like to make things.
        I've started some companies, and worked across a few different industries.
        I'm always tinkering with something, so I created this site
        as a way to share those projects.
      </p>

      <div className="flex-row width80">
        <div>
          <h3>Currently working on</h3>
          <ul>
            <li><a href="https://www.playslipstream.com" target="_blank">Slipstream: Rogue Space</a></li>
          </ul>
        </div>
        <div>
          <h3>Currently playing</h3>
          <ul>
            <li><a href="https://www.playbalatro.com/" target="_blank">Balatro</a></li>
            <li><a href="https://store.steampowered.com/app/1608230/Planet_of_Lana/" target="_blank">Planet of Lana</a></li>
          </ul>
        </div>
      </div>

      <h3>Companies founded</h3>

      <ul className="airy">
        <li><a href="https://www.subpixel.net" target="_blank">Subpixel</a>, a small game studio with 2 releases under our belt
        <ul>
          <li><a href="https://www.playslipstream.com" target="_blank">Slipstream: Rogue Space</a> and <a href="https://www.readysetgoat.com" target="_blank">Ready Set Goat!</a></li>
        </ul>
        </li>
        <li><a href="https://www.reflektive.com" target="_blank">Reflektive</a>, an employee recognition and performance management platform
          <ul>
            <li>Acquired by <a href="https://www.reflektive.com/blog/ltg-and-peoplefluent-acquisition/" target="_blank">PeopleFluent</a> in 2021 at Series C</li>
          </ul>
        </li>
      </ul>

      <h3>Previous employers</h3>

      <ul className="airy">
        <li><a href="https://en.wikipedia.org/wiki/Disney_Interactive" target="_blank">Disney</a>, the gaming division where we worked with franchises like Star Wars, Pirates of the Caribbean, Snow White, and more</li>
        <li><a href="https://www.dyn.com" target="_blank">Dyn</a>, a consumer and enterprise DNS management platform</li>
      </ul>

      <h3>Education</h3>

      <p><a href="https://www.wpi.edu/" target="_blank">Worcester Polytechnic Institute</a>, where I studied Computer Science</p>
    </article>
  )
}
