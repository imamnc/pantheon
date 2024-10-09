import React from 'react'

interface Props { }

const Excel: React.FC<Props> = () => {

    function handleDownloadExcel() {
        window.open(`/examples/excel/download`, '_blank')
    }

    return <>
        <div className="animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="col-md-12">
                                <h1 className="mt-5">
                                    Excel Export Example
                                </h1>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>This is an example for downloading Excel. For study jam purposes only</h3>
                                    <p>Click Button Below to downlaod some masters data to excel</p>
                                </div>

                                <div className="col-md-12">
                                    <button className="btn btn-success" onClick={() => {handleDownloadExcel()}}>
                                        <i className="fa fa-download"></i>&nbsp;Download Excel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Excel
