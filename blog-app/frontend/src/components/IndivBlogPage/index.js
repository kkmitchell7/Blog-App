import React from "react";

import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { blogId } = useParams();

  console.log(blogId);

    function printHI(){
        console.log("hi")
    }
    function printThere(){
        setTimeout(()=> {
            console.log("there")
        }, 500)
    }

    function printIX(){
        console.log("IX")
    }

  return <div>TODO Build the read blog page</div>;
}