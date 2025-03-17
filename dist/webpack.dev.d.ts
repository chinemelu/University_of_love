declare const _exports: {
    entry: {
        home: string;
        contact: string;
        about: string;
        course_content: string;
        content_pages: string;
    };
    module: {
        rules: ({
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
    };
    resolve: {
        extensions: string[];
    };
    plugins: import("html-webpack-plugin")[];
};
export = _exports;
