import React, {useState, useEffect} from "react";
import './class.css';

 const ClassExample = () => {
    const [show, setShow] = useState(false)
    const [post, setPost] = useState({})

   const handleClick = (e) => {
    console.log(show)
    console.log(e.target)
        setShow(true)
    }

    const handleDiv = (e) => { 
        console.log(e.target);
        const button = document.getElementById("but");
        console.log(button);
    }

    const getNews = async () => {
           let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
        setPost(data);

    }

    useEffect ( (prevProps, prevState) => {
        if (prevState !== show) {
            getNews();
        }
    }, [])

        if (!show) {
            return (
                <button id="but" onClick={handleClick}>Click</button>
            )
        }
        return (
            <div className='container'>
                <div
                    onClick={handleDiv}>
                    Simple Message
                    <h2>{post.id}</h2>
                    <p> <b>{post.title}</b> </p>
                </div>
                <button id="but" onClick={handleClick}>Click</button>
            </div>
        )
    

}
export default ClassExample;