import Hero from 'src/components/hero'
import Footer from 'src/components/footer'
import GridList from 'src/components/gridList'
import SpeechBubble from 'src/components/speechBubble'

const HomePage = (): JSX.Element => (
  <>
    <Hero />
    <GridList />
    <SpeechBubble />
    <Footer />
  </>
)

export default HomePage
