import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase()
  }
}

const fakePosts = [
  {
    title: 'redundant system',
    body: 'If we transmit the sensor, we can get to the VGA hard drive through the open-source VGA microchip!'
  },
  {
    title: 'open-source feed',
    body: 'Use the online JBOD circuit, then you can back up the mobile capacitor!'
  },
  {
    title: 'haptic transmitter',
    body: "I'll back up the multi-byte PCI matrix, that should bandwidth the PCI sensor!"
  },
  {
    title: 'bluetooth program',
    body: "parsing the pixel won't do anything, we need to generate the bluetooth VGA matrix!"
  },
  {
    title: 'open-source circuit',
    body: 'The RSS card is down, generate the optical system so we can transmit the XML system!'
  },
  {
    title: 'primary bandwidth',
    body: 'Try to index the SSD protocol, maybe it will program the haptic system!'
  },
  {
    title: 'haptic bus',
    body: "You can't navigate the application without compressing the mobile GB matrix!"
  },
  {
    title: 'back-end bandwidth',
    body: 'If we copy the circuit, we can get to the UDP port through the neural SCSI protocol!'
  },
  {
    title: 'digital protocol',
    body: "You can't input the application without generating the optical JBOD sensor!"
  },
  {
    title: '1080p microchip',
    body: "You can't transmit the microchip without parsing the bluetooth XSS application!"
  },
  {
    title: 'redundant sensor',
    body: "You can't back up the port without quantifying the wireless OCR monitor!"
  },
  {
    title: 'online card',
    body: 'Use the 1080p HEX program, then you can parse the bluetooth circuit!'
  },
  {
    title: 'back-end protocol',
    body: "I'll bypass the solid state RSS hard drive, that should driver the PNG feed!"
  },
  {
    title: 'neural sensor',
    body: "I'll calculate the haptic IP application, that should feed the JSON microchip!"
  },
  {
    title: 'auxiliary monitor',
    body: "I'll override the haptic THX monitor, that should application the IP bandwidth!"
  },
  {
    title: 'auxiliary feed',
    body: 'Try to generate the SCSI application, maybe it will navigate the 1080p array!'
  },
  {
    title: 'bluetooth panel',
    body: 'Use the neural FTP pixel, then you can transmit the mobile hard drive!'
  },
  {
    title: 'redundant sensor',
    body: 'We need to bypass the 1080p RAM feed!'
  },
  {
    title: 'optical protocol',
    body: 'We need to compress the neural TLS capacitor!'
  },
  {
    title: 'mobile interface',
    body: 'Use the cross-platform CSS port, then you can compress the wireless array!'
  },
  {
    title: '1080p driver',
    body: "You can't generate the panel without overriding the wireless UTF8 sensor!"
  },
  {
    title: 'redundant feed',
    body: 'Try to connect the HEX bus, maybe it will reboot the mobile bus!'
  },
  {
    title: 'open-source array',
    body: 'Use the redundant JBOD bus, then you can quantify the haptic matrix!'
  },
  {
    title: 'back-end panel',
    body: 'If we calculate the matrix, we can get to the SSD interface through the primary JBOD pixel!'
  },
  {
    title: '1080p hard drive',
    body: 'Use the auxiliary SSD bandwidth, then you can bypass the bluetooth application!'
  },
  {
    title: 'optical card',
    body: "You can't generate the panel without synthesizing the digital SDD matrix!"
  },
  {
    title: 'bluetooth alarm',
    body: "navigating the array won't do anything, we need to hack the digital SCSI monitor!"
  },
  {
    title: 'virtual microchip',
    body: 'Use the multi-byte SSD array, then you can reboot the online monitor!'
  },
  {
    title: 'bluetooth interface',
    body: 'Try to generate the RAM feed, maybe it will copy the digital interface!'
  },
  {
    title: 'wireless matrix',
    body: 'The FTP program is down, hack the solid state capacitor so we can connect the SSL bus!'
  }
]

function App() {
  const [posts, setPosts] = useState(() => fakePosts ?? Array.from({ length: 30 }, () => createRandomPost()))
  const [searchQuery, setSearchQuery] = useState('')
  const [isFakeDark, setIsFakeDark] = useState(true)

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts = searchQuery.length > 0 ? posts.filter(post => `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())) : posts

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts])
  }

  function handleClearPosts() {
    setPosts([])
  }

  useEffect(function () {
    document.documentElement.classList.add('transition')
  }, [])

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode')
    },
    [isFakeDark]
  )

  return (
    <section>
      <button onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)} className="btn-fake-dark-mode">
        {isFakeDark ? '☀️' : '🌙'}
      </button>

      <Header posts={searchedPosts} onClearPosts={handleClearPosts} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  )
}

function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  )
}

function SearchPosts({ searchQuery, setSearchQuery }) {
  return <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search posts..." />
}

function Results({ posts }) {
  return <p>🚀 {posts.length} atomic posts found</p>
}

function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  )
}

function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  )
}

function FormAddPost({ onAddPost }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = function (e) {
    e.preventDefault()
    if (!body || !title) return
    onAddPost({ title, body })
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Post body" />
      <button>Add post</button>
    </form>
  )
}

function List({ posts }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

const archivedPosts = [
  {
    title: 'wireless hard drive',
    body: 'If we transmit the firewall, we can get to the SMTP application through the multi-byte HEX firewall!'
  },
  {
    title: 'wireless interface',
    body: "I'll navigate the mobile SQL panel, that should alarm the HDD capacitor!"
  },
  {
    title: 'online interface',
    body: 'If we transmit the port, we can get to the HTTP matrix through the neural IP protocol!'
  },
  {
    title: '1080p monitor',
    body: "I'll input the mobile TLS application, that should transmitter the ADP capacitor!"
  },
  {
    title: 'primary array',
    body: "generating the interface won't do anything, we need to compress the virtual THX pixel!"
  },
  {
    title: 'optical driver',
    body: 'Use the 1080p AGP program, then you can connect the virtual pixel!'
  },
  {
    title: 'solid state microchip',
    body: 'If we bypass the application, we can get to the ADP transmitter through the haptic UTF8 protocol!'
  },
  {
    title: 'redundant matrix',
    body: "I'll compress the primary HDD alarm, that should circuit the HEX port!"
  },
  {
    title: 'wireless microchip',
    body: "generating the monitor won't do anything, we need to override the solid state OCR program!"
  },
  {
    title: 'digital capacitor',
    body: 'Try to reboot the COM transmitter, maybe it will generate the 1080p card!'
  },
  {
    title: '1080p monitor',
    body: 'Use the 1080p IP matrix, then you can compress the primary interface!'
  },
  {
    title: 'mobile bus',
    body: "You can't override the interface without programming the redundant XSS bus!"
  },
  {
    title: 'back-end interface',
    body: "navigating the hard drive won't do anything, we need to parse the cross-platform SSL firewall!"
  },
  {
    title: 'open-source interface',
    body: "generating the feed won't do anything, we need to navigate the bluetooth HDD transmitter!"
  },
  {
    title: 'back-end driver',
    body: 'We need to generate the haptic UDP system!'
  },
  {
    title: 'solid state transmitter',
    body: 'The XSS alarm is down, hack the neural bandwidth so we can reboot the SMS monitor!'
  },
  {
    title: 'virtual alarm',
    body: 'Try to hack the API pixel, maybe it will input the wireless driver!'
  },
  {
    title: 'auxiliary hard drive',
    body: "connecting the microchip won't do anything, we need to generate the open-source JBOD application!"
  },
  {
    title: 'wireless circuit',
    body: 'Use the online DRAM program, then you can quantify the digital array!'
  },
  {
    title: 'bluetooth firewall',
    body: 'We need to navigate the haptic VGA protocol!'
  },
  {
    title: 'haptic bandwidth',
    body: "I'll index the open-source SQL firewall, that should protocol the JSON hard drive!"
  },
  {
    title: '1080p application',
    body: 'Use the online CLI hard drive, then you can transmit the redundant panel!'
  },
  {
    title: 'mobile interface',
    body: "quantifying the card won't do anything, we need to override the back-end AGP bus!"
  },
  {
    title: 'multi-byte circuit',
    body: 'The XML bus is down, generate the virtual bandwidth so we can input the PCI sensor!'
  },
  {
    title: 'bluetooth bus',
    body: 'If we navigate the application, we can get to the JBOD monitor through the virtual HEX card!'
  },
  {
    title: 'optical hard drive',
    body: "You can't copy the interface without compressing the back-end CLI hard drive!"
  },
  {
    title: 'bluetooth application',
    body: "I'll hack the online HEX transmitter, that should transmitter the SMTP driver!"
  },
  {
    title: 'cross-platform interface',
    body: 'The TLS application is down, parse the optical sensor so we can parse the DRAM microchip!'
  },
  {
    title: 'online interface',
    body: 'Try to hack the RAM capacitor, maybe it will connect the mobile alarm!'
  },
  {
    title: 'cross-platform protocol',
    body: "I'll quantify the open-source IB alarm, that should protocol the PNG bus!"
  },
  {
    title: 'solid state interface',
    body: "I'll index the mobile API feed, that should application the SDD system!"
  },
  {
    title: 'solid state system',
    body: 'We need to navigate the haptic PCI capacitor!'
  },
  {
    title: 'cross-platform card',
    body: "You can't hack the bandwidth without bypassing the virtual GB system!"
  },
  {
    title: 'haptic interface',
    body: 'If we synthesize the feed, we can get to the HTTP transmitter through the solid state SQL feed!'
  },
  {
    title: 'open-source port',
    body: "You can't calculate the driver without generating the redundant DRAM card!"
  },
  {
    title: 'cross-platform system',
    body: 'Use the open-source HEX sensor, then you can program the redundant alarm!'
  },
  {
    title: 'open-source feed',
    body: 'The EXE firewall is down, reboot the 1080p application so we can bypass the JSON microchip!'
  },
  {
    title: 'solid state card',
    body: 'The COM circuit is down, navigate the online driver so we can copy the TLS system!'
  },
  {
    title: 'neural program',
    body: "You can't parse the sensor without copying the cross-platform UDP port!"
  },
  {
    title: 'open-source transmitter',
    body: 'The SSD hard drive is down, input the online microchip so we can transmit the HTTP monitor!'
  },
  {
    title: 'primary feed',
    body: "You can't program the sensor without bypassing the digital EXE transmitter!"
  },
  {
    title: 'open-source panel',
    body: 'Try to index the DNS application, maybe it will override the auxiliary pixel!'
  },
  {
    title: 'cross-platform system',
    body: "synthesizing the bandwidth won't do anything, we need to compress the digital VGA panel!"
  },
  {
    title: 'haptic bandwidth',
    body: 'Use the wireless CLI hard drive, then you can quantify the solid state bandwidth!'
  },
  {
    title: 'haptic microchip',
    body: 'Try to index the EXE feed, maybe it will transmit the optical program!'
  },
  {
    title: 'mobile capacitor',
    body: 'Use the bluetooth RAM bandwidth, then you can bypass the auxiliary alarm!'
  },
  {
    title: 'virtual bus',
    body: "You can't transmit the capacitor without copying the back-end SSD monitor!"
  },
  {
    title: 'bluetooth pixel',
    body: 'The IB system is down, back up the optical feed so we can back up the COM array!'
  },
  {
    title: 'bluetooth panel',
    body: "You can't hack the firewall without connecting the wireless ADP application!"
  },
  {
    title: 'solid state array',
    body: 'We need to generate the mobile JSON microchip!'
  },
  {
    title: 'solid state driver',
    body: 'We need to connect the mobile AGP feed!'
  },
  {
    title: 'mobile card',
    body: 'The RSS program is down, index the auxiliary alarm so we can hack the SMS capacitor!'
  },
  {
    title: 'auxiliary matrix',
    body: "hacking the array won't do anything, we need to calculate the cross-platform SCSI system!"
  },
  {
    title: 'open-source panel',
    body: 'Try to override the HTTP capacitor, maybe it will back up the auxiliary system!'
  },
  {
    title: 'multi-byte interface',
    body: 'If we back up the alarm, we can get to the THX bandwidth through the digital SDD bandwidth!'
  },
  {
    title: 'auxiliary hard drive',
    body: 'We need to override the virtual IB system!'
  },
  {
    title: 'mobile pixel',
    body: "indexing the array won't do anything, we need to quantify the mobile AI application!"
  },
  {
    title: 'neural sensor',
    body: 'Use the optical SAS protocol, then you can hack the optical program!'
  },
  {
    title: 'open-source microchip',
    body: 'If we copy the firewall, we can get to the IB microchip through the redundant UTF8 protocol!'
  },
  {
    title: 'virtual panel',
    body: "connecting the array won't do anything, we need to synthesize the auxiliary TCP bandwidth!"
  },
  {
    title: 'solid state card',
    body: 'We need to quantify the auxiliary ASCII interface!'
  },
  {
    title: 'solid state array',
    body: 'Use the neural AGP bus, then you can navigate the auxiliary card!'
  },
  {
    title: '1080p alarm',
    body: "You can't connect the bandwidth without navigating the cross-platform SCSI capacitor!"
  },
  {
    title: 'back-end sensor',
    body: "I'll parse the cross-platform SAS transmitter, that should hard drive the RAM capacitor!"
  },
  {
    title: 'digital transmitter',
    body: 'Try to bypass the UDP microchip, maybe it will connect the open-source circuit!'
  },
  {
    title: 'auxiliary monitor',
    body: "You can't program the bus without backing up the 1080p XSS microchip!"
  },
  {
    title: 'primary microchip',
    body: "You can't parse the application without hacking the mobile PCI capacitor!"
  },
  {
    title: 'bluetooth circuit',
    body: 'Try to synthesize the THX matrix, maybe it will quantify the digital pixel!'
  },
  {
    title: 'optical monitor',
    body: 'We need to back up the cross-platform TLS protocol!'
  },
  {
    title: 'primary array',
    body: 'Try to reboot the ADP feed, maybe it will back up the digital microchip!'
  },
  {
    title: 'solid state sensor',
    body: 'Use the virtual XSS port, then you can synthesize the open-source transmitter!'
  },
  {
    title: 'back-end matrix',
    body: 'The SSD program is down, input the neural feed so we can back up the API program!'
  },
  {
    title: 'multi-byte microchip',
    body: 'Use the back-end SMS panel, then you can index the neural matrix!'
  },
  {
    title: 'wireless port',
    body: "generating the card won't do anything, we need to transmit the wireless SDD port!"
  },
  {
    title: 'mobile circuit',
    body: 'If we connect the bus, we can get to the JSON port through the neural RSS firewall!'
  },
  {
    title: 'neural card',
    body: 'Try to transmit the SQL microchip, maybe it will synthesize the multi-byte array!'
  },
  {
    title: 'cross-platform system',
    body: 'The HTTP firewall is down, connect the digital sensor so we can connect the TLS capacitor!'
  },
  {
    title: 'multi-byte array',
    body: "You can't connect the firewall without bypassing the neural SCSI protocol!"
  },
  {
    title: 'back-end alarm',
    body: 'If we copy the capacitor, we can get to the AI firewall through the 1080p COM application!'
  },
  {
    title: 'digital microchip',
    body: 'If we index the driver, we can get to the OCR bandwidth through the auxiliary OCR microchip!'
  },
  {
    title: 'wireless bus',
    body: 'If we calculate the sensor, we can get to the CLI firewall through the online UDP application!'
  },
  {
    title: 'haptic transmitter',
    body: 'If we reboot the interface, we can get to the SCSI application through the 1080p SAS port!'
  },
  {
    title: 'solid state program',
    body: "generating the array won't do anything, we need to connect the auxiliary IB panel!"
  },
  {
    title: 'back-end sensor',
    body: 'If we program the protocol, we can get to the GB transmitter through the neural TLS matrix!'
  },
  {
    title: 'redundant program',
    body: 'The UTF8 microchip is down, bypass the cross-platform array so we can back up the TLS interface!'
  },
  {
    title: 'auxiliary circuit',
    body: "bypassing the port won't do anything, we need to hack the virtual GB application!"
  },
  {
    title: 'optical firewall',
    body: "You can't synthesize the bandwidth without synthesizing the redundant PNG firewall!"
  },
  {
    title: 'back-end bandwidth',
    body: "I'll parse the digital SSL hard drive, that should program the TLS pixel!"
  },
  {
    title: 'online panel',
    body: "You can't program the microchip without bypassing the 1080p UTF8 application!"
  },
  {
    title: 'redundant hard drive',
    body: 'Use the bluetooth SMTP sensor, then you can hack the multi-byte protocol!'
  },
  {
    title: '1080p capacitor',
    body: "I'll calculate the back-end USB protocol, that should array the SSD card!"
  },
  {
    title: 'haptic transmitter',
    body: "I'll bypass the auxiliary XSS bandwidth, that should capacitor the ASCII bus!"
  },
  {
    title: 'online application',
    body: "You can't generate the firewall without navigating the cross-platform JBOD transmitter!"
  },
  {
    title: 'cross-platform program',
    body: "indexing the bandwidth won't do anything, we need to transmit the bluetooth GB firewall!"
  },
  {
    title: 'wireless monitor',
    body: "I'll calculate the online CSS array, that should driver the CSS application!"
  },
  {
    title: 'back-end firewall',
    body: "I'll transmit the haptic COM capacitor, that should pixel the THX system!"
  },
  {
    title: 'wireless pixel',
    body: 'The DNS firewall is down, navigate the optical application so we can index the JSON alarm!'
  },
  {
    title: 'mobile pixel',
    body: 'If we reboot the system, we can get to the XML bus through the virtual COM panel!'
  },
  {
    title: 'back-end feed',
    body: 'The SQL system is down, quantify the redundant panel so we can bypass the UDP interface!'
  },
  {
    title: 'open-source pixel',
    body: 'Use the open-source RSS matrix, then you can connect the auxiliary port!'
  }
]

function Archive({ onAddPost }) {
  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(
    () =>
      // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
      archivedPosts ?? Array.from({ length: 10000 }, () => createRandomPost())
  )

  const [showArchive, setShowArchive] = useState(false)

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive(s => !s)}>{showArchive ? 'Hide archive posts' : 'Show archive posts'}</button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>
}

export default App
