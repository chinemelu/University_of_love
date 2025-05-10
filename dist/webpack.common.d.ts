import HtmlWebpackPlugin = require("html-webpack-plugin");
export let entry: {
    home: string;
    contact: string;
    about: string;
    course: string;
    course_content: string;
    content_pages: string;
    individual: string;
    "pre-marital-counselling": string;
    "breakup-recovery": string;
    "couple-therapy": string;
};
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
