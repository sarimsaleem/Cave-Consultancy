import React from "react";
import blogImage from "../../assets/blog.jpg";
import "./blog.css";

const Blog = () => {
    return (
        <div className="bolg-parent">
            <h1 className='component-heading'>Blog</h1>
            <div className="blog-subparent">
                <div className="blog-imageParent">
                    <img src={blogImage} alt="Beach and Mountains" />
                </div>
                <div className="blog-textParent">
                    <h1>Hello</h1>
                    <p>
                        Welcome to Cave Consultancy, a premier consulting firm dedicated to empowering businesses and individuals to achieve their full potential.
                    </p>
                    <p>
                        Crafting actionable strategies to help your business thrive!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
