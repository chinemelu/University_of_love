import HtmlWebpackPlugin = require("html-webpack-plugin");
export namespace entry {
    let home: string;
    let about: string;
    let course_content: string;
    let content_pages: string;
}
export namespace module {
    let rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
        type?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        use: string[];
        exclude?: undefined;
        type?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        type: string;
        generator: {
            filename: string;
        };
        use?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        use: string;
        exclude?: undefined;
        type?: undefined;
        generator?: undefined;
    })[];
}
export namespace resolve {
    let extensions: string[];
    namespace alias {
        let images: string;
    }
}
export let plugins: HtmlWebpackPlugin[];
