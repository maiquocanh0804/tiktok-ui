import { Helmet } from 'react-helmet';
import images from '~/assets/images';
function following() {
    return (
        <h2>
            <Helmet>
                <title>Following</title>
                <meta property="og:title" content="Following" />
            </Helmet>
            Following page
        </h2>
    );
}

export default following;
