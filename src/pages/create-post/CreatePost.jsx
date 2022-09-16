import { Container } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import PreviewPost from './PreviewPost.jsx'
import WritePost from './WritePost.jsx'

const CreatePost = () => {
    const [isWriting, setIsWriting] = useState(true)
    const [isRenderd, setIsRendered] = useState(false)
    const [postTitle, setPostTitle] = useState('')
    const [postTags, setPostTags] = useState([])
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        setMarkdown(localStorage.getItem('markdown'))
    }, [])

    useEffect(() => {
        if (isRenderd) {
            localStorage.setItem('markdown', markdown)
        } else {
            setIsRendered(true)
        }
    }, [markdown])

    return (
        <Container className="bg-white mt-7 py-7  rounded-lg">
            <div className="flex justify-between">
                <h2 className="sm:hidden">كتابه منشور جديد</h2>
                <div className="sm:justify-center sm:w-full gap-3 flex">
                    <button
                        onClick={() => {
                            setIsWriting(true)
                        }}
                        className="!text-primary-color bg-slate-300 px-5 py-1 rounded-lg"
                    >
                        كتابه
                    </button>
                    <button
                        onClick={() => {
                            setIsWriting(false)
                        }}
                        className="!text-primary-color bg-slate-300 px-5 py-1 rounded-lg"
                    >
                        معاينه
                    </button>
                </div>
            </div>

            {isWriting ? (
                <WritePost
                    setMarkdown={setMarkdown}
                    setPostTitle={setPostTitle}
                    postTags={postTags}
                    postTitle={postTitle}
                    setPostTags={setPostTags}
                    markdown={markdown}
                />
            ) : (
                <PreviewPost markdown={markdown} />
            )}
        </Container>
    )
}

export default CreatePost
