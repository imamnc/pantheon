import React from 'react'
import { NumericFormat } from 'react-number-format'

interface Props {
    name: string
    value: string | number
    prefix?: string
    onValueChange?: (value: any) => void
}

class InputCurrency extends React.Component<Props> {
    render() {
        return <>
            <NumericFormat
                name={this.props.name}
                onValueChange={this.props.onValueChange}
                className='form-control'
                value={this.props.value ? this.props.value : ''}
                defaultValue={0}
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={this.props.prefix ? (this.props.prefix + ' ') : 'Rp '}
                valueIsNumericString={true}
            />
        </>
    }
}

export default InputCurrency
