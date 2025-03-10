import HtmlWebpackPlugin = require("html-webpack-plugin");
export namespace entry {
    let home: string;
    let about: string;
    let course_content: string;
    let content_pages: string;
}
export namespace output {
    let path: string;
    let assetModuleFilename: string;
    let clean: boolean;
}
export namespace module {
    let rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
        type?: undefined;
    } | {
        test: RegExp;
        use: string[];
        exclude?: undefined;
        type?: undefined;
    } | {
        test: RegExp;
        type: string;
        use?: undefined;
        exclude?: undefined;
    })[];
}
export namespace resolve {
    let extensions: string[];
}
export let plugins: HtmlWebpackPlugin[];
