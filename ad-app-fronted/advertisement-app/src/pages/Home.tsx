import AdList from '../components/AdList'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <h2 className="m-2">Find an ad...</h2>
            <AdList />
        </>
    )
}

export default Home