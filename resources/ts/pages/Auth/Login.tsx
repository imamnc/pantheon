import React from "react";
import * as Yup from 'yup'
import { useState } from "react";
import { useFormik } from 'formik'
import clsx from 'clsx'
import { router } from '@inertiajs/react'
import { useTranslation } from "react-i18next";

// Align the errors type with Formik's expected format
type FormikErrors<T> = { [K in keyof T]: string };

interface LoginProps {
    email: string,
    password: string,
    errors?: FormikErrors<LoginProps>
}

const Login: React.FC<LoginProps> = (props) => {

    // Use translations
    const { t } = useTranslation()

    const [loading, setLoading] = useState(false)

    const formik = useFormik<LoginProps>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async function (values, { setStatus, setSubmitting }) {
            setLoading(true)
            try {

                router.post('/store', {
                    email: values.email,
                    password: values.password
                }, {
                    onError: (page) => {
                        // Kondisi gagal validasi
                        formik.setErrors(page as FormikErrors<LoginProps>);

                        setLoading(false)
                        setSubmitting(false)
                        setStatus(false)
                    }
                })

            } catch (error) {
                setLoading(false)
                setSubmitting(false)
                setStatus(false)
            }
        },
    })

    return <>
        <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
            <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form className="form w-100" id="kt_sign_in_form"
                    onSubmit={formik.handleSubmit}
                    noValidate
                >
                    <div className="text-center mb-11">
                        <h1 className="text-dark fw-bolder mb-3">{t('login.page_title')}</h1>
                        {/* <div className="text-gray-500 fw-semibold fs-6">
                            Your Social Campaigns
                        </div> */}
                    </div>
                    {/* <div className="row g-3 mb-9">
                        <div className="col-md-6">
                            <a href="#"
                                className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg"
                                    className="h-15px me-3" />
                                Sign in with Google
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="#"
                                className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg"
                                    className="theme-light-show h-15px me-3" />
                                <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg"
                                    className="theme-dark-show h-15px me-3" />
                                Sign in with Apple
                            </a>
                        </div>
                    </div>
                    <div className="separator separator-content my-14">
                        <span className="w-125px text-gray-500 fw-semibold fs-7">
                            Or with email
                        </span>
                    </div> */}

                    {formik.status ?
                        (
                            <div className='mb-lg-15 alert alert-danger'>
                                <div className='alert-text font-weight-bold'>{formik.status}</div>
                            </div>
                        )
                        :
                        (<div></div>)
                    }

                    <div className="fv-row mb-8">
                        <input type="text"
                            placeholder="Email"
                            {...formik.getFieldProps('email')}
                            name="email"
                            autoComplete="off"
                            className={clsx(
                                'form-control bg-transparent',
                                { 'is-invalid': formik.touched.email && formik.errors.email },
                                {
                                    'is-valid': formik.touched.email && !formik.errors.email,
                                }
                            )} />
                        {formik.touched.email && formik.errors.email && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.email}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="fv-row mb-3">
                        <input type="password"
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                            name="password"
                            autoComplete="off"
                            className={clsx(
                                'form-control bg-transparent',
                                {
                                    'is-invalid': formik.touched.password && formik.errors.password,
                                },
                                {
                                    'is-valid': formik.touched.password && !formik.errors.password,
                                }
                            )} />
                        {formik.touched.password && formik.errors.password && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.password}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                        <div />
                        <a href="#"
                            className="link-primary">
                            {t('login.forgot_password')}
                        </a>
                    </div>
                    <div className="d-grid mb-10">
                        {/* <Link href="/" className="btn btn-primary">Sign In</Link> */}
                        <button
                            type='submit'
                            id='kt_sign_in_submit'
                            className='btn btn-primary'
                            disabled={formik.isSubmitting || !formik.isValid}>
                            {!loading && <span className='indicator-label'>{t('login.submit')}</span>}

                            {loading &&
                                (<span className='indicator-progress' style={{ display: 'block' }}>
                                    {t('wait')}
                                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>)}
                        </button>
                    </div>
                    {/* <div className="text-gray-500 text-center fw-semibold fs-6">
                        Not a Member yet?
                        <a href="../../demo7/dist/authentication/layouts/creative/sign-up.html"
                            className="link-primary">
                            Sign up
                        </a>
                    </div> */}
                </form>
            </div>
            <div className="d-flex flex-stack px-lg-10">
                <div className="me-0">
                    <button
                        className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                        data-kt-menu-offset="0px, 0px">
                        <img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3"
                            src="/assets/media/flags/united-states.svg" alt="" />
                        <span data-kt-element="current-lang-name" className="me-1">
                            English
                        </span>
                        <i className="ki-duotone ki-down fs-5 text-muted rotate-180 m-0" />
                    </button>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
                        data-kt-menu="true" id="kt_auth_lang_menu">
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
                                <span className="symbol symbol-20px me-4">
                                    <img data-kt-element="lang-flag" className="rounded-1"
                                        src="/assets/media/flags/united-states.svg" alt="" />
                                </span>
                                <span data-kt-element="lang-name">English</span>
                            </a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                                <span className="symbol symbol-20px me-4">
                                    <img data-kt-element="lang-flag" className="rounded-1"
                                        src="/assets/media/flags/spain.svg" alt="" />
                                </span>
                                <span data-kt-element="lang-name">Spanish</span>
                            </a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                                <span className="symbol symbol-20px me-4">
                                    <img data-kt-element="lang-flag" className="rounded-1"
                                        src="/assets/media/flags/germany.svg" alt="" />
                                </span>
                                <span data-kt-element="lang-name">German</span>
                            </a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                                <span className="symbol symbol-20px me-4">
                                    <img data-kt-element="lang-flag" className="rounded-1"
                                        src="/assets/media/flags/japan.svg" alt="" />
                                </span>
                                <span data-kt-element="lang-name">Japanese</span>
                            </a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                                <span className="symbol symbol-20px me-4">
                                    <img data-kt-element="lang-flag" className="rounded-1"
                                        src="/assets/media/flags/france.svg" alt="" />
                                </span>
                                <span data-kt-element="lang-name">French</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex fw-semibold text-primary fs-base gap-5">
                    <a href="../../demo7/dist/pages/team.html" target="_blank">
                        Terms
                    </a>
                    <a href="../../demo7/dist/pages/pricing/column.html" target="_blank">
                        Plans
                    </a>
                    <a href="../../demo7/dist/pages/contact.html" target="_blank">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Login
