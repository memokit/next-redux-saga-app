
function Home(props) {
    const { result } = props;
   
    const list = result.result;

    const listItems = list.map((item, i) =>
        <div key={i}>
            <span>
                {item.title}
            </span>
            <span>{item.createdAt}</span>
        </div>
    );

    return (
        <>
            <h1>Hello Next.js</h1>
            {listItems}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}
export default Home;