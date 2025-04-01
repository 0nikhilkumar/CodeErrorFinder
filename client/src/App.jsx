import { useEffect, useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function App() {
	const [loading, setLoading] = useState(false);
    const [review, setReview] = useState(null);
const [code, setCode] = useState(`function sum(){ 
return 1+1; 
}`);

	useEffect(() => {
		prism.highlightAll();
	}, []);

    async function reviewCode() {
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ai/get-review`, { code });
            console.log(response.data);
            setReview(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching review:", error);
            setReview("Error fetching review");
        }
    }

	return (
		<>
			<main>
				<div className="left">
					<div className="code">
                        <Editor
                            value={code}
                            onValueChange={(code) => setCode(code)}
                            highlight={(code) => prism.highlight(code, prism.languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                                width: "100%",
                                height: "100%",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                overflow: "auto",
                            }}
                        />
					</div>
					<div className="review" onClick={reviewCode}>{loading ? <AiOutlineLoading3Quarters className="loading" /> : "Review"}</div>
				</div>
				<div className="right">
                    <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
                </div>
			</main>
		</>
	);
}

export default App;
