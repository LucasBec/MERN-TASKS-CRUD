function Home() {
    return (
        <>
            <h1>Welcome</h1>
            <button onClick={() => {
                window.location.href = '/tasks'
            }}>go to Tasks</button>

        </>
    )
}

export default Home;