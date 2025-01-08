export function FunPage() {
  return (
    <div id="fun">
      <h2>Fun Stuff</h2>
      <h3>Minecraft Server</h3>

      <h4>How to Connect</h4>

      <table className="airy">
        <tbody>
          <tr>
            <th>Server Address: </th>
            <td><code>mc.jimmie.cloud</code></td>
          </tr>
          <tr>
            <th>Java Port: </th>
            <td><code>25565</code> (default)</td>
          </tr>
          <tr>
            <th>Bedrock Port: </th>
            <td><code>19132</code> (default)</td>
          </tr>
        </tbody>
      </table>

      <h4>Details</h4>

      <p>
        I run a PaperMC server, which is an optimized version of Minecraft. It
        has both <a href="https://geysermc.org/" target="_blank">Geyser and
        Floodgate</a> installed, so you can join with Bedrock Edition or Java
        Edition using the same Microsoft account.
      </p>

      <p>
        It also
        has <a href="https://www.spigotmc.org/resources/griefprevention.1884/" target="_blank">GriefPrevention</a> installed,
        so you can claim your land and prevent others from destroying
        it. <a href="https://www.youtube.com/watch?v=f9OhYrxEPws" target="_blank">Guide here.</a>
      </p>

      <p>It was created using
         these <a href="https://github.com/doctorray117/minecraft-ondemand" target="_blank">Minecraft OnDemand</a> templates.
         So it starts up when a DNS query is detected. The easiest way to do
         that is to find it in the server browser. Then, wait about 2
         minutes and it should be visible.
      </p>

      <p>If you're using a Switch or other console, you can set your DNS to
        a <a href="https://bcstatus.xyz/status/bedrock" target="_blank">public
        BedrockConnect DNS server</a>, which will reroute Realms connections to
        a <a href="https://github.com/Pugmatt/BedrockConnect" target="_blank">BedrockConnect server</a>.
        There, you will be presented with a server browser interface from within a Minecraft
        world itself. Pretty neat!
      </p>

      <h3>This Website</h3>
      <p>
        Built with TypeScript and React, on Vite and Bun. Ansi art was created by myself in
        Moebius. I made a custom font in Bits n' Picas to accurately display
        block characters.
      </p>

      <p>
        Press G on your keyboard to see a grid, which I use for debugging
        alignment to keep it visually faithful to the BBS's of the 80s and 90s.
      </p>
    </div>
  )
}
