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
  const [isFakeDark, setIsFakeDark] = useState(false)

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts = searchQuery.length > 0 ? posts.filter(post => `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())) : posts

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts])
  }

  function handleClearPosts() {
    setPosts([])
  }

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

function Archive({ onAddPost }) {
  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
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
