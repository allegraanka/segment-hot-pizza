import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet';

const { SEGMENT_WRITE_KEY, NODE_ENV } = process.env;

export default class SegmentHotPizzaDocument extends Document {
    renderSegmentSnippet() {
        const options = {
            apiKey: SEGMENT_WRITE_KEY,
            page: true
        };

        if (NODE_ENV === 'development') {
            return snippet.max(options);
        }

        return snippet.min(options);
    }

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Segment Tracking Code Injection */}
                    <script dangerouslySetInnerHTML={{ __html: this.renderSegmentSnippet() }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}