import useSWR from "swr";
import RandomQuote from "./RandomQuote";
import ChangeColor from "./ChangeColor";

export default function FetchSWR() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error, isLoading, mutate } = useSWR('https://dummyjson.com/quotes/random', fetcher);
    console.log(data,"data")

    const handleNewQuote = async (handleColorChange) => {
        await mutate();
        handleColorChange();
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ChangeColor>
            {({ color, handleColorChange }) => (
                <RandomQuote
                    content={data.quote}
                    author={data.author}
                    handleNewQuote={() => handleNewQuote(handleColorChange)}
                    color={color}
                />
            )}
        </ChangeColor>
    )
};


