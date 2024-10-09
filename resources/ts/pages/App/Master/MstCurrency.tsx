import React, { useState } from 'react'
import clsx from 'clsx'
import { usePage } from '@inertiajs/react'
import Pagination from '../../../components/Pagination'
import { router } from '@inertiajs/react'
import Modal from '../../../components/Modal'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import InputCurrency from '../../../components/InputCurrency'
import Swal from 'sweetalert2'
import { toast } from '../../../utils/Toast'

// type FormikErrors<T> = { [K in keyof T]: string };

interface MstCurrencyProps {
    currency_name: string,
    symbol: string,
    label: string,
    test_currency?: any
    errors?: { [key: string]: string }
}

interface Currencies {
    id: number,
    currency_name: string,
    symbol: string,
    label: string,
    created_at: string
}

const MstCountry: React.FC<MstCurrencyProps> = (props) => {

    const { t } = useTranslation()
    // List Province Data
    const { currencies } = usePage().props as any
    // Flash message when success
    const { flash } = usePage().props as any

    // // Need to pass this as an array
    const currenciesData = currencies.data as Currencies[]

    // const formattedCountryDatas = countries.map((country: any) => ({
    //     value: country.id,
    //     label: country.country_name,
    // }));

    // State things, curPage for pagination, loading for loading when save
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)

    // Modal things
    const [showModal, setShowModal] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState(0);

    // Alternative ways to not use formik
    const initialInput = {
        currency_name: '',
        symbol: '',
        label: '',
        test_currency: ''
    }

    function clearInput() {
        setInput({
            ...initialInput
        });
    }

    const [input, setInput] = useState<MstCurrencyProps>({
        currency_name: '',
        symbol: '',
        label: '',
        test_currency: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleDeleteData = async (id: any) => {
        Swal.fire({
            icon: 'question',
            title: "Delete this data?",
            text: "Click yes if you sure to delete this data",
            showCancelButton: true,
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                router.post('/master/currency/destroy', { id }, {
                    onSuccess: () => {
                        toast('success', 'Data deleted successfully')
                    },
                    onError: (error) => {
                        console.log(error)
                        toast('error', 'Failed to delete data !')
                    }
                })
            }
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)
        setSubmitting(true)
        try {

            router.post('/master/currency/store', {
                symbol: input.symbol,
                label: input.label,
                currency_name: input.currency_name,
            }, {
                onSuccess: () => {
                    clearInput()
                    setLoading(false)
                    setSubmitting(false)
                },
                onError: (error) => {

                    setInput({
                        ...input,
                        errors: error,
                    });

                    setLoading(false)
                    setSubmitting(false)
                }
            })

        } catch (error) {
            setLoading(false)
            setSubmitting(false)
        }
    }

    return <>
        <div className='animate__animated animate__fadeIn'>
            {/* Begin Alert */}
            {flash.message && (
                <div className="alert alert-success d-flex align-items-center p-5">
                    <i className="ki-duotone ki-shield-tick fs-2hx text-success me-4"><span className="path1"></span><span className="path2"></span></i>

                    <div className="d-flex flex-column">
                        <h4 className="mb-1 text-success">Success!</h4>
                        <span>{flash.message}</span>
                    </div>
                </div>
            )}
            {/* End Alert */}

            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="col-md-12">
                                <h1 className="mt-8">
                                    {t('master.Master Mata Uang')}
                                </h1>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} noValidate className="col-md-12 mb-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">Currency Symbol</label>
                                            <input type="text"
                                                name='symbol'
                                                value={input.symbol}
                                                onChange={handleChange}
                                                maxLength={3}
                                                placeholder="Enter Currency Symbol (e.g $, Rp, S$)"
                                                autoComplete="off"
                                                className={
                                                    clsx(
                                                        "form-control text-center",
                                                        { 'is-invalid': input.errors && input.errors.symbol },
                                                        { 'is-valid': input.errors && !input.errors.symbol }
                                                    )
                                                }
                                            />
                                            {input.errors && input.errors.symbol && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{input.errors.symbol}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">Currency Label</label>
                                            <input type="text"
                                                name='label'
                                                value={input.label}
                                                onChange={handleChange}
                                                maxLength={5}
                                                placeholder="Enter Currency Label (e.g IDR, USD, SGD)"
                                                autoComplete="off"
                                                className={
                                                    clsx(
                                                        "form-control text-center",
                                                        { 'is-invalid': input.errors && input.errors.label },
                                                        { 'is-valid': input.errors && !input.errors.label }
                                                    )
                                                }
                                            />
                                            {input.errors && input.errors.label && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{input.errors.label}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">Currency Name</label>
                                            <input type="text"
                                                name='currency_name'
                                                value={input.currency_name}
                                                onChange={handleChange}
                                                placeholder="Enter Currency Name (e.g Rupiah, Rupee, Dollar, Euro)"
                                                autoComplete="off"
                                                className={
                                                    clsx(
                                                        "form-control text-center",
                                                        { 'is-invalid': input.errors && input.errors.currency_name },
                                                        { 'is-valid': input.errors && !input.errors.currency_name }
                                                    )
                                                }
                                            />
                                            {input.errors && input.errors.currency_name && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{input.errors.currency_name}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">Test Input Currency</label>
                                            <InputCurrency
                                                name='test_currency'
                                                onValueChange={(val: any) => { setInput({ ...input, test_currency: val.floatValue }) }}
                                                value={input.test_currency}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <button
                                                className='btn btn-success'
                                                ref={(el) => el && el.style.setProperty('margin-top', '1.8rem', "important")}
                                                type='submit'
                                            >
                                            {!loading &&
                                                <span className='indicator-label'>
                                                    <i className="fa fa-save"></i>&nbsp;Save
                                                </span>
                                            }
                                            {loading &&
                                                (
                                                    <span className='indicator-progress' style={{ display: 'block' }}>
                                                        <i className="fa fa-save"></i>&nbsp;Saving...
                                                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                                    </span>
                                                )
                                            }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="table-responsive rounded">
                                <table className="table border table-striped">
                                    <thead>
                                        <tr className="fw-bold fs-6 text-gray-800">
                                            <th className='text-center'>No</th>
                                            <th className='text-center'>Symbol</th>
                                            <th className='text-center'>Label</th>
                                            <th className='text-center'>Currency Name</th>
                                            <th className='text-center'>Created At</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currenciesData.map((currency, idx) => (
                                            <tr key={idx}>
                                                <td className="text-center">{currencies.current_page * currencies.per_page - currencies.per_page + idx + 1}</td>
                                                <td className="text-center">{currency.symbol}</td>
                                                <td className="text-center">{currency.label}</td>
                                                <td className="text-center">{currency.currency_name}</td>
                                                <td className="text-center">{currency.created_at}</td>
                                                <td className="text-center">
                                                    <button className='btn btn-sm btn-danger' onClick={() => handleDeleteData(currency.id)}>
                                                        <i className="fa fa-trash"></i>Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* <Pagination currentPage={currentPage} pages={provinces.links} setCurrentPage={setCurrentPage} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {showModal &&
            <Modal isOpen={showModal} tabIndex={-1} id='kt_modal_1'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Delete Confirmation</h3>
                            {/* Close Btn */}
                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" onClick={() => setShowModal(false)} aria-label='close'>
                                <i className="ki-duotone ki-cross fs-1"><span className="path1"></span><span className="path2"></span></i>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to delete this data?</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Close</button>
                            <button type="button" className="btn btn-success" onClick={() => handleDeleteData(deleteId)}>Yes</button>
                        </div>

                    </div>
                </div>
            </Modal>
        }
    </>
}

export default MstCountry
