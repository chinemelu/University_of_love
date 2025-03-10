declare const _exports: {
    entry: {
        home: string;
        about: string;
        course_content: string;
        content_pages: string;
    };
    output: {
        path: string;
        assetModuleFilename: string;
        clean: boolean;
    };
    module: {
        rules: ({
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
    };
    resolve: {
        extensions: string[];
    };
    plugins: import("html-webpack-plugin")[];
};
export = _exports;
