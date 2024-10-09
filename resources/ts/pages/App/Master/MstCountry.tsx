import React, { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import clsx from 'clsx'
import { usePage } from '@inertiajs/react'
import Pagination from '../../../components/Pagination'
import { router } from '@inertiajs/react'
import { useTranslation } from 'react-i18next'
import InputDate from '../../../components/InputDate'
import Swal from 'sweetalert2'
import { toast } from '../../../utils/Toast'
import moment from 'moment'

// type FormikErrors<T> = { [K in keyof T]: string };

interface MstCountryProps {
    country_name: string,
    test_date?: any,
    errors?: { [key: string]: string }
}

interface Countries {
    id: number,
    country_name: string,
    created_at: string
}

const insertSchema = Yup.object().shape({
    country_name: Yup.string()
        .min(3, 'Minimum of 3 characters required')
        .max(50, 'Cannot exceed 50 characters')
        .required('Country Name Required')
})

const MstCountry: React.FC<MstCountryProps> = (props) => {

    const { t } = useTranslation()
    // List Country Data
    const { countries } = usePage().props as any
    // Flash message when success
    const { flash } = usePage().props as any

    // Need to pass this as an array
    const countryData = countries.data as Countries[]

    // State things, curPage for pagination, loading for loading when save
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)

    // Delete data
    const handleDeleteData = async (id: any) => {
        Swal.fire({
            icon: 'question',
            title: "Delete this data?",
            text: "Click yes if you sure to delete this data",
            showCancelButton: true,
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                router.post('/master/country/destroy', { id }, {
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

    // Alternative ways to not use formik
    const initialInput = {
        country_name: '',
        test_date: '',
    }

    function clearInput() {
        setInput({
            ...initialInput
        });
    }

    const [input, setInput] = useState<MstCountryProps>({
        ...initialInput
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleDateChange = (event: any) => {
        const selectedDate = event[0] as Date
        const parsedDate = moment(selectedDate).format('DD-MM-YYYY')

        setInput({
            ...input,
            test_date: parsedDate
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)
        setSubmitting(true)
        try {

            router.post('/master/country/store', {
                country_name: input.country_name,
                test_date: input.test_date,
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
                                <h1 className="mt-6">
                                    {t('master.Master Negara')}
                                </h1>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} noValidate className='row'>
                                <div className="col-6 col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="" className='fw-bold'>Test Date</label>
                                        <InputDate
                                            options={{ dateFormat: 'd-m-Y' }}
                                            value={input.test_date}
                                            onChange={handleDateChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="" className='fw-bold'>Country Name</label>
                                        <div className="input-group">
                                            <input id="country_name_input"
                                                type="text"
                                                name='country_name'
                                                value={input.country_name}
                                                placeholder="Enter Country Name"
                                                autoComplete="off"
                                                onChange={handleChange}
                                                className={
                                                    clsx(
                                                        "form-control text-center",
                                                        { 'is-invalid': input.errors && input.errors.country_name },
                                                        { 'is-valid': input.errors && !input.errors.country_name }
                                                    )
                                                }
                                            />
                                            <span className="input-group-text p-0">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary rounded-start-0"
                                                    disabled={isSubmitting}>
                                                    {!loading && <span className='indicator-label'>Save</span>}

                                                    {loading &&
                                                        (<span className='indicator-progress' style={{ display: 'block' }}>Saving...
                                                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                                        </span>)}
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    {input.errors && input.errors.country_name && (
                                        <div className='fv-plugins-message-container'>
                                            <div className='fv-help-block'>
                                                <span role='alert'>{input.errors.country_name}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive rounded">
                                        <table className="table border table-striped">
                                            <thead>
                                                <tr className="fw-bold fs-6 text-gray-800">
                                                    <th className='text-center'>No</th>
                                                    <th className='text-center'>Country Name</th>
                                                    <th className='text-center'>Created At</th>
                                                    <th className='text-center'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {countryData.map(({ id, country_name, created_at }, idx) => (
                                                    <tr key={idx}>
                                                        <td className="text-center">{countries.current_page * countries.per_page - countries.per_page + idx + 1}</td>
                                                        <td className="text-center">{country_name}</td>
                                                        <td className="text-center">{created_at}</td>
                                                        <td className="text-center">
                                                            <button className='btn btn-sm btn-danger' onClick={() => handleDeleteData(id)}>
                                                                <i className="fa fa-trash"></i>Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <Pagination currentPage={currentPage} pages={countries.links} setCurrentPage={setCurrentPage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MstCountry
