import styles from "@/styles/Home.module.css";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function RandomQuote({ content, author, handleNewQuote, color }) {
    return (
        <div className={styles.container} id="quote-box">
                <p className={styles.currQuote} id="text" style={{ color }}>{content} </p>
                <p className={styles.authorName} id="author" style={{ color }}><i> {author} </i></p>
                <button className={styles.newQuoteBtn} id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: color }}>New Quote</button>
                <a  className={styles.tweet} id="tweet-quote" style={{ color }}
                 href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content + " - " + author)}`}
                    target="_blank"
                >
                    <FaSquareXTwitter size={34}  />
                </a>
            </div>
    );
};