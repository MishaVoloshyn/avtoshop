import React, { useState, useEffect } from 'react';
import blogData from '../data/blogData.json';
import { BlogCard } from './BlogCard';

export function BlogList1({ limit }) {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        setBlog(blogData.slice(0, 3));
    }, [limit]);

    return (
        <div className="section py-3">
            <div className="container my-5">
                <div className="row pt-3">
                    <div className="col-6">
                        <h2 className="primary-color dm-sans-bold">Latest Blog Posts</h2>
                    </div>
                    <div className="col-6 text-end">
                        <a href=""><p className="ft-18 primary-color dm-sans-medium mb-0 view-all">View All <i className="bi bi-arrow-up-right"></i></p></a>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12 mt-5">
                        <div className="row gx-3 gy-3">
                            {blog.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
