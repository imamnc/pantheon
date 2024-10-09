import React, { useState } from 'react'
import clsx from 'clsx'
import { usePage } from '@inertiajs/react'
import Pagination from '../../../components/Pagination'
import { router } from '@inertiajs/react'
import Modal from '../../../components/Modal'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'

// type FormikErrors<T> = { [K in keyof T]: string };

interface MstProvinceProps {
    province_name: string,
    country: { [key: string]: string } | null,
    errors?: { [key: string]: string }
}

interface Countries {
    id: number,
    country_name: string,
}

interface Provinces {
    id: number,
    country: any,
    province_name: string,
    created_at: string
}

const MstCountry: React.FC<MstProvinceProps> = (props) => {

    const { t } = useTranslation()
    // List Country Data
    const { countries } = usePage().props as any
    // List Province Data
    const { provinces } = usePage().props as any
    // Flash message when success
    const { flash } = usePage().props as any

    // Need to pass this as an array
    const provincesData = provinces.data as Provinces[]

    const formattedCountryDatas = countries.map((country: any) => ({
        value: country.id,
        label: country.country_name,
    }));

    // State things, curPage for pagination, loading for loading when save
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)

    // Modal things
    const [showModal, setShowModal] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState(0);

    // const formik = useFormik<MstProvinceProps>({
    //     initialValues: {
    //         country_id: 0,
    //         province_name: ''
    //     },
    //     onSubmit: async function (values, { setStatus, setSubmitting }) {
    //         setLoading(true)
    //         try {
    //             router.post('/master/province/store', {
    //                 country_id: values.country_id,
    //                 province_name: values.province_name,
    //             }, {
    //                 onSuccess: () => {
    //                     formik.resetForm();
    //                     formik.setFieldValue('country_id', 0)

    //                     setStatus(false)
    //                     setLoading(false)
    //                 },
    //                 onError: (page) => {
    //                     // Kondisi gagal validasi
    //                     formik.setErrors(page as FormikErrors<MstProvinceProps>);

    //                     setLoading(false)
    //                     setSubmitting(false)
    //                     setStatus(false)
    //                 }
    //             })

    //         } catch (error) {
    //             setLoading(false)
    //             setSubmitting(false)
    //             setStatus(false)
    //         }
    //     }
    // })

    // Alternative ways to not use formik
    const initialInput = {
        country: null,
        province_name: '',
    }

    function clearInput() {
        setInput({
            ...initialInput
        });
    }

    const [input, setInput] = useState<MstProvinceProps>({
        country: null,
        province_name: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleDeleteData = async (id: any) => {
        try {
            router.post('/master/province/destroy', { id }, {
                onSuccess: () => {
                    setShowModal(false)
                    setDeleteId(0)
                }
            })
        } catch (error) {

        }
    }

    const handleChangeCountry = (event: any) => {
        setInput({
            ...input,
            country: event
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)
        setSubmitting(true)
        try {

            router.post('/master/province/store', {
                country_id: input.country?.value,
                province_name: input.province_name,
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
                                    {t('master.Master Provinsi')}
                                </h1>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} noValidate className="col-md-12 mb-7">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">Country Name</label>
                                            <Select options={formattedCountryDatas}
                                                value={input.country}
                                                onChange={(option: any) => (handleChangeCountry(option))}
                                                isClearable={true}
                                                isSearchable={true}
                                                className="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">Province Name</label>
                                            <div className="input-group">
                                                <input type="text"
                                                    name='province_name'
                                                    value={input.province_name}
                                                    onChange={handleChange}
                                                    placeholder="Enter Province Name"
                                                    autoComplete="off"
                                                    className={
                                                        clsx(
                                                            "form-control text-center",
                                                            { 'is-invalid': input.errors && input.errors.province_name },
                                                            { 'is-valid': input.errors && !input.errors.province_name }
                                                        )
                                                    }
                                                />
                                                <span className="input-group-text p-0">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success rounded-start-0"
                                                        disabled={isSubmitting}>
                                                        {!loading && <span className='indicator-label'>Save</span>}
                                                        {loading &&
                                                            (<span className='indicator-progress' style={{ display: 'block' }}>Saving...
                                                                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                                            </span>)}
                                                    </button>
                                                </span>
                                            </div>
                                            {input.errors && input.errors.province_name && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{input.errors.province_name}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="table-responsive rounded">
                                <table className="table border table-striped">
                                    <thead>
                                        <tr className="fw-bold fs-6 text-gray-800">
                                            <th className='text-center'>No</th>
                                            <th className='text-center'>Province Name</th>
                                            <th className='text-center'>Country Origin</th>
                                            <th className='text-center'>Created At</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {provincesData.map((province, idx) => (
                                            <tr key={idx}>
                                                <td className="text-center">{provinces.current_page * provinces.per_page - provinces.per_page + idx + 1}</td>
                                                <td className="text-center">{province.province_name}</td>
                                                <td className="text-center">{province.country.country_name}</td>
                                                <td className="text-center">{province.created_at}</td>
                                                <td className="text-center">
                                                    <button className='btn btn-sm btn-danger' onClick={() => {
                                                        setShowModal(true);
                                                        setDeleteId(province.id);
                                                    }}>
                                                        <i className="fa fa-trash"></i>Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <Pagination currentPage={currentPage} pages={provinces.links} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {showModal &&
            <Modal isOpen={showModal} tabIndex={-1} id='kt_modal_1'>
                <div className="modal-header">
                    <h3 className="modal-title">Delete Confirmation</h3>
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
            </Modal>
        }
    </>
}

export default MstCountry
