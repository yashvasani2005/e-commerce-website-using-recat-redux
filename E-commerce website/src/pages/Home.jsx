import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import "./Home.css"; // Import the CSS file

function Home() {
    const [Posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const API = "https://fakestoreapi.com/products";

    async function fetchData() {
        setIsLoading(true);

        try {
            const res = await fetch(API);
            const data = await res.json();
            setPosts(data);
            console.log("inside the Home.jsx");
            console.log(data);
        } catch (error) {
            console.log("error ave che Home.jsx");
            console.log(error);
            setPosts([]);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log("after try catch block");

    return (
        <div className="home-container">
            {isLoading ? (
                <Spinner />
            ) : Posts.length > 0 ? (
                <div className="products-grid">
                    {Posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>No Post Available</p>
            )}
        </div>
    );
}

export default Home;
