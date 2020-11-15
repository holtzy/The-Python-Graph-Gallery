import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default function About() {
    return (
        <>
            <Helmet title="There isn't a page here">
                <title>The Python Graph Gallery | Page not found</title>
                <link
                    href="/logo/D3_single_small.png"
                    rel="shortcut icon"
                    type="image/x-icon"
                />
            </Helmet>
            <header></header>
            <main>
                <div className="container">
                    <div>There is nothing here yet</div>
                    <Link to="/index">Go back home</Link>
                </div>
            </main>
        </>
    );
}
