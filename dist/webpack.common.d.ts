import HtmlWebpackPlugin = require("html-webpack-plugin");
export namespace entry {
    let home: string;
    let contact: string;
    let about: string;
    let course: string;
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
        loader?: undefined;
    } | {
        test: RegExp;
        type: string;
        generator: {
            filename: string;
        };
        use?: undefined;
        exclude?: undefined;
        loader?: undefined;
    } | {
        test: RegExp;
        loader: string;
        use?: undefined;
        exclude?: undefined;
        type?: undefined;
        generator?: undefined;
    })[];
}
export namespace resolve {
    let extensions: string[];
}
export let plugins: HtmlWebpackPlugin[];
