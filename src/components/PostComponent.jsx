import React, { useState, useEffect } from 'react'

const PostComponent = () => {
    const [posts, setPosts] = useState([])
    const [originalPosts, setOriginalPosts] = useState([])
    const [search, setSearch] = useState('');

    const getPosts = async () => {
        const res = await fetch('https://dummyjson.com/posts')
        const data = await res.json()
        console.log(data.posts[0])
        setPosts(data.posts)
        setOriginalPosts(data.posts)

    }

    const handleSearch = (term) => {

        fetch(`https://dummyjson.com/posts/search?q=${term}`)
            .then(res => res.json())
            .then(data => setPosts(data.posts));

    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div>
            <input type="text" placeholder='Search post' value={search} onChange={(e) => {
                const newSearch = e.target.value
                setSearch(newSearch)
                handleSearch(newSearch);

            }}
                style={{ border: "1px solid black", padding: "0.5rem", borderRadius: "10px", width: "25rem", margin: "2rem" }} />

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-wrap -m-4">

                        {
                            posts.map((post) => (
                                <div class="p-4 lg:w-1/3">
                                    <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{post.title}</h1>
                                        <p class="leading-relaxed mb-3">{post.body}</p>

                                        <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                &#10084; {post.reactions.likes}
                                            </span>
                                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                                &#9785; {post.reactions.dislikes}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </div>
    )
}

export default PostComponent
