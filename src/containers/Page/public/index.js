import Footer from 'containers/Page/public/footer/Footer';
import Header from 'containers/Page/public/header/Header';
import React from 'react';
import PublicPageRoute from 'containers/Page/public/PublicPageRoute';
import PageWrapper from "./Page.style";
export default class extends React.Component {
    state = {
        url: this.props.match.url,
    }
    render() {
        return (
            <PageWrapper>
                {/* header */}
                <Header url={this.state.url} />
                {/* body */}
                <PublicPageRoute url={this.state.url} />
                {/* footer */}
                <Footer />
            </PageWrapper>
        );

    }
}