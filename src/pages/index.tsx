import Hero from 'src/components/hero'
import Footer from 'src/components/footer'
import GridList from 'src/components/gridList'
// import SpeechBubble from 'src/components/speechBubble'
import WithLargeQuote from 'src/components/quote'
import NameForm from 'src/components/nameForm'

const HomePage = (): JSX.Element => (
  <>
    <Hero />
    <GridList />
    <NameForm />
    <WithLargeQuote />
    {/*<SpeechBubble />*/}
    <Footer />
  </>
)

export default HomePage
