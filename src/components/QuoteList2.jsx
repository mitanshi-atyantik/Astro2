import React, { useState, useEffect } from 'react'

const QuoteList2 = () => {

  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


     const fetchPosts = async (page, limit) => {
        const response = await fetch(
          `https://dummyjson.com/quotes?limit=${limit}&page=${page}`
        );
        const data = await response.json();
        return data.quotes;
        // setQuotes(data.quotes)
      };


      const loadMorePosts = async () => {
        setLoading(true);
        const newQuotes = await fetchPosts(page, 12);
        setQuotes((prevQuotes) => [...prevQuotes, ...newQuotes]);
        setPage((prevPage) => prevPage + 1)
        setLoading(false);
      };
    


      
    //   useEffect(() => {
    //     loadMorePosts();
    //   }, [page]);










    // Add quotes as we scroll
    const handleScroll = () => {
        const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
        if (bottom) {
          loadMorePosts();
        }
      };
    
      useEffect(() => {
        loadMorePosts();
      }, []);
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [handleScroll]);
    // 
  






  return (
    <div >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5 mx-5">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between"
                        >
                            <p className="text-gray-800 text-lg mb-4">"{quote.quote}"</p>
                            <p className="text-gray-600 text-sm">- {quote.author}</p>
                        </div>
                    ))}

                    {
                        loading && <h1 class="text-3xl text-center">Loading......</h1>
                    }
                </div>
    </div>
  )
}

export default QuoteList2
