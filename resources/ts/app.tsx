import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import i18n from "./lang/i18n";
import { I18nextProvider } from "react-i18next";
import "../js/app.js";

createInertiaApp({
    resolve: (name) => {
        var page: any
        if (name.toString().indexOf('Modules') > -1) {
            let nameSplit = name.toString().split('/')
            if (nameSplit[0] === 'Modules') {
                let pageHeader = nameSplit.splice(0, 2).join('/')
                let pageName = nameSplit.join('/')

                const pages = import.meta.glob(`../../Modules/**/resources/ts/pages/**/*.tsx`, { eager: true })
                page = pages[`../../${pageHeader}/resources/ts/pages/${pageName}.tsx`]
            }
        } else {
            const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
            page = pages[`./pages/${name}.tsx`]
        }

        // Auth
        if (name.startsWith('Auth')) {
            page.default.layout = ((page: ReactNode) => <Auth children={page}></Auth>)
        } else {
            page.default.layout = page.default.layout || ((page: ReactNode) => <Main children={page} />)
        }

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <I18nextProvider i18n={i18n}>
                <App {...props} />
            </I18nextProvider>
        );
    },
})
