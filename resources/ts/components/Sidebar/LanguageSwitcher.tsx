import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {

    const { i18n } = useTranslation();

    const changeLocale = (language: string) => {
        i18n.changeLanguage(language);
        console.log(i18n.language);
    }

    useEffect(() => {
        var lang_options = document.querySelectorAll('.lang-option')
        lang_options.forEach((lang: any) => {
            lang.addEventListener('click', function () {
                changeLocale(lang.getAttribute('data-lang'))
            })
        })
    }, [])

    return <>
        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
            <span className="menu-link px-5">
                <span className="menu-title position-relative">
                    Language
                    {(i18n.language == 'en') ? (
                        <span
                            className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                            English
                            <img className="w-15px h-15px rounded-1 ms-2" src="/assets/media/flags/united-states.svg" alt="flag" />
                        </span>
                    ) : (
                        <span
                            className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                            Indonesia
                            <img className="w-15px h-15px rounded-1 ms-2" src="/assets/media/flags/indonesia.svg" alt="flag" />
                        </span>
                    )}
                </span>
            </span>
            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                <div className="menu-item lang-option px-3" data-lang="en">
                    <span onClick={() => changeLocale('en')} className={clsx('menu-link d-flex px-5', { active: i18n.language == 'en' })}>
                        <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="/assets/media/flags/united-states.svg" alt="flag" />
                        </span>
                        English
                    </span>
                </div>
                <div className="menu-item lang-option px-3" data-lang="id">
                    <span onClick={() => alert('oke')} className={clsx('menu-link d-flex px-5', { active: i18n.language == 'id' })}>
                        <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="/assets/media/flags/indonesia.svg" alt="flag" />
                        </span>
                        Indonesia
                    </span>
                </div>
            </div>
        </div>
    </>
};

export default LanguageSwitcher;
