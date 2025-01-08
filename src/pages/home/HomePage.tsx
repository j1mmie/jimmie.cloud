export function HomePage() {
  return (
    <div id="home-page">
      <h2>About Me</h2>

      <h3>Currently working on</h3>
      <p>
        <a href="https://www.playslipstream.com" target="_blank">Slipstream: Rogue Space</a>
      </p>

      <h3>Companies founded</h3>

      <ul>
        <li><a href="https://www.subpixel.net" target="_blank">Subpixel</a>, a small game studio with 2 releases under our belt
        <ul>
          <li>Two releases: <a href="https://www.playslipstream.com" target="_blank">Slipstream: Rogue Space</a> and <a href="https://www.readysetgoat.com" target="_blank">Ready Set Goat!</a></li>
        </ul>
          {/* <ul>
            <li>
              <a href="https://www.playslipstream.com" target="_blank">Slipstream: Rogue Space</a>,
              a 120 player asymmetric co-op game designed from the ground up
              for streamers to play with their viewers
            </li>
            <li><a href="https://www.readysetgoat.com" target="_blank">Ready Set Goat!</a>, am arcade-like for mobile with global leaderboards</li>
          </ul> */}
        </li>
        <li><a href="https://www.reflektive.com" target="_blank">Reflektive</a>, a SaaS performance management platform for enterprises
          <ul>
            <li>Acquired by <a href="https://www.reflektive.com/blog/ltg-and-peoplefluent-acquisition/" target="_blank">PeopleFluent</a> in 2021 at Series C</li>
          </ul>
        </li>
      </ul>

      <h3>Previous employers</h3>

      <ul>
        <li><a href="https://en.wikipedia.org/wiki/Disney_Interactive" target="_blank">Disney</a>, the gaming division where we worked with franchises like Star Wars, Pirates of the Caribbean, Snow White, and more</li>
        <li><a href="https://www.dyn.com" target="_blank">Dyn</a>, a consumer and enterprise DNS management platform</li>
      </ul>

      <h3>Education</h3>

      <p><a href="https://www.wpi.edu/" target="_blank">Worcester Polytechnic Institute</a>, where I studied Computer Science</p>
    </div>
  )
}
