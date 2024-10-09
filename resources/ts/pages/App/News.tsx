import React, { useState } from "react";
import TextEditor from "../../components/TextEditor";

interface NewsProps { }

const News: React.FC<NewsProps> = () => {

    // Form State
    const [content, setContent] = useState('<b>Hello world !</b>')

    return <>
        <div className="animate__animated animate__fadeIn">
            <div className="card">
                <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    <div className="mt-5">
                        <TextEditor initContent={content} onChange={setContent}></TextEditor>
                    </div>
                </div>
            </div >
        </div>
    </>
}

export default News
