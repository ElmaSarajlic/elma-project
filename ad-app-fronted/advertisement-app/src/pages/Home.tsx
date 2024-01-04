import AdList from '../components/AdList'
import NavBar from '../components/NavBar'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
              {<NavBar />}

            <h2 className="m-2">Find an ad...</h2>
            <AdList />
        </>
    )
}

export default Home