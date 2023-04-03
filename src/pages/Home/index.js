import { Helmet } from 'react-helmet';
function home() {
    return (
        <h2 style={{ height: 2000 }}>
            <Helmet>
                <title>TikTok-Make Your Day</title>
                <meta property="og:title" content="ikTok-Make Your Day" />
            </Helmet>
            Home Page
        </h2>
    );
}

export default home;
